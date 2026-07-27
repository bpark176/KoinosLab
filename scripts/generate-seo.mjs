import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { baseUrl, organization, pages, redirects } from "./seo-config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const organizationId = `${baseUrl}/#organization`;
const websiteId = `${baseUrl}/#website`;
const searchConsoleToken = process.env.GOOGLE_SITE_VERIFICATION?.trim();

const contentContext = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "content.js"), "utf8"), contentContext);
const content = contentContext.window.koinosLabContent;

for (const page of pages) {
  const filePath = path.join(root, page.file);
  let html = fs.readFileSync(filePath, "utf8");
  html = normalizeInternalUrls(html);
  html = prerenderDataFields(html);
  html = replaceSeoBlock(html, buildSeoBlock(page));
  fs.writeFileSync(filePath, html);
}

for (const redirect of redirects) {
  fs.writeFileSync(path.join(root, redirect.file), buildRedirectPage(redirect));
}

fs.writeFileSync(path.join(root, "robots.txt"), buildRobots());
fs.writeFileSync(path.join(root, "sitemap.xml"), buildSitemap());

function normalizeInternalUrls(html) {
  const replacements = new Map([
    ["./index.html", "/"],
    ["./about.html", "/about.html"],
    ["./devices.html", "/devices.html"],
    ["./marketplace.html", "/marketplace.html"],
    ["./publications.html", "/publications.html"],
    ["./vision.html", "/vision.html"],
    ["./team.html", "/team.html"],
    ["./device-spectrofluorometer.html", "/devices/spectrofluorometer/"],
    ["./device-colorimeter.html", "/devices/colorimeter/"],
    ["./device-water-quality-analyzer.html", "/devices/water-quality-analyzer/"],
    ["./device-potentiostat.html", "/devices/potentiostat/"],
    ["./assets/", "/assets/"],
    ["./styles.css", "/styles.css"],
    ["./content.js", "/content.js"],
    ["./script.js", "/script.js"]
  ]);

  for (const [from, to] of replacements) html = html.replaceAll(from, to);
  return addIntrinsicLogoDimensions(html);
}

function addIntrinsicLogoDimensions(html) {
  return html.replace(
    /<img\b([^>]*\bsrc="\/assets\/logos\/koinos-reversed\.svg"[^>]*)>/gi,
    (tag, attributes) => {
      if (/\bwidth=/.test(attributes) && /\bheight=/.test(attributes)) return tag;
      const cleanAttributes = attributes.replace(/\s*\/\s*$/, "");
      return `<img${cleanAttributes} width="460" height="205" decoding="async" />`;
    }
  );
}

function prerenderDataFields(html) {
  return html.replace(
    /(<([a-z][a-z0-9-]*)\b[^>]*\bdata-field="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/gi,
    (match, open, tag, field, current, close) => {
      const value = getValue(content, field);
      return typeof value === "string" ? `${open}${escapeHtml(value)}${close}` : match;
    }
  );
}

function replaceSeoBlock(html, block) {
  const marked = /\n\s*<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/;
  if (marked.test(html)) return html.replace(marked, `\n${block}`);

  const legacy = /\n\s*<meta\s+name="description"[\s\S]*?<title>[\s\S]*?<\/title>/;
  if (!legacy.test(html)) throw new Error(`Could not find SEO metadata block in ${html.slice(0, 120)}`);
  return html.replace(legacy, `\n${block}`);
}

function buildSeoBlock(page) {
  const url = `${baseUrl}${page.path}`;
  const image = `${baseUrl}${page.image}`;
  const searchConsole = page.searchConsolePlaceholder
    ? searchConsoleToken
      ? `
    <meta name="google-site-verification" content="${escapeHtml(searchConsoleToken)}" />`
      : `
    <!-- Search Console: run GOOGLE_SITE_VERIFICATION="your-token" npm run seo:generate. -->
    <!-- <meta name="google-site-verification" content="YOUR_REAL_TOKEN" /> -->`
    : "";
  const schema = JSON.stringify(buildSchema(page), null, 2)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");

  return `    <!-- SEO:START -->
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="${page.schemaType === "TechArticle" ? "article" : "website"}" />
    <meta property="og:site_name" content="${organization.name}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${page.imageWidth}" />
    <meta property="og:image:height" content="${page.imageHeight}" />
    <meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${image}" />${searchConsole}
    <script type="application/ld+json">
${schema}
    </script>
    <!-- SEO:END -->`;
}

function buildSchema(page) {
  const url = `${baseUrl}${page.path}`;
  const imageUrl = `${baseUrl}${page.image}`;
  const image = {
    "@type": "ImageObject",
    url: imageUrl,
    width: page.imageWidth,
    height: page.imageHeight
  };

  if (page.path === "/") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": organizationId,
          name: organization.name,
          alternateName: organization.alternateName,
          url: `${baseUrl}/`,
          email: `mailto:${organization.email}`,
          description: organization.description,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/assets/logos/koinos-primary.png`,
            width: 2400,
            height: 775
          },
          image,
          founder: {
            "@type": "Person",
            "@id": `${baseUrl}/team.html#brennan-park`,
            name: "Brennan Park",
            jobTitle: "Founder & CEO"
          }
        },
        {
          "@type": "WebSite",
          "@id": websiteId,
          url: `${baseUrl}/`,
          name: organization.name,
          alternateName: organization.alternateName,
          description: page.description,
          inLanguage: "en",
          publisher: { "@id": organizationId }
        },
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: page.title,
          description: page.description,
          inLanguage: "en",
          isPartOf: { "@id": websiteId },
          about: { "@id": organizationId },
          primaryImageOfPage: image
        }
      ]
    };
  }

  const breadcrumbId = `${url}#breadcrumb`;
  const pageNode =
    page.schemaType === "TechArticle"
      ? {
          "@type": "TechArticle",
          "@id": `${url}#article`,
          url,
          headline: page.h1,
          name: page.title,
          description: page.description,
          inLanguage: "en",
          mainEntityOfPage: { "@id": `${url}#webpage` },
          image,
          author: { "@id": organizationId },
          publisher: { "@id": organizationId },
          keywords: page.keywords
        }
      : {
          "@type": page.schemaType,
          "@id": `${url}#webpage`,
          url,
          name: page.title,
          description: page.description,
          inLanguage: "en",
          isPartOf: { "@id": websiteId },
          about: { "@id": organizationId },
          breadcrumb: { "@id": breadcrumbId },
          primaryImageOfPage: image
        };

  const graph = [
    pageNode,
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: buildBreadcrumbItems(page)
    }
  ];

  if (page.schemaType === "TechArticle") {
    graph.unshift({
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      breadcrumb: { "@id": breadcrumbId },
      primaryImageOfPage: image
    });
  }

  if (page.path === "/team.html") {
    const people = [
      {
        "@type": "Person",
        "@id": `${url}#brennan-park`,
        name: "Brennan Park",
        jobTitle: "Founder & CEO",
        worksFor: { "@id": organizationId },
        affiliation: { "@type": "EducationalOrganization", name: "Seoul International School" }
      },
      {
        "@type": "Person",
        "@id": `${url}#ian-kim`,
        name: "Ian Kim",
        jobTitle: "Director of Engineering",
        worksFor: { "@id": organizationId },
        affiliation: { "@type": "EducationalOrganization", name: "Seoul International School" }
      }
    ];
    pageNode.mainEntity = people.map((person) => ({ "@id": person["@id"] }));
    graph.push(...people);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function buildBreadcrumbItems(page) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${baseUrl}/`
    }
  ];

  if (page.parent) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.parent.name,
      item: `${baseUrl}${page.parent.path}`
    });
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: page.breadcrumbLabel,
    item: `${baseUrl}${page.path}`
  });
  return items;
}

function buildRedirectPage(redirect) {
  const targetUrl = `${baseUrl}${redirect.target}`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page moved | Koinos Lab</title>
    <link rel="canonical" href="${targetUrl}" />
    <meta http-equiv="refresh" content="0; url=${targetUrl}" />
    <script>window.location.replace(${JSON.stringify(targetUrl)});</script>
  </head>
  <body>
    <p>This page has moved to <a href="${targetUrl}">${escapeHtml(redirect.label)}</a>.</p>
  </body>
</html>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
}

function buildSitemap() {
  const urls = pages
    .map((page) => {
      const url = `${baseUrl}${page.path}`;
      const image = `${baseUrl}${page.image}`;
      return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastModified(page.file)}</lastmod>
    <image:image>
      <image:loc>${escapeXml(image)}</image:loc>
      <image:title>${escapeXml(page.imageAlt)}</image:title>
    </image:image>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

function lastModified(file) {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      cwd: root,
      encoding: "utf8"
    }).trim() || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function getValue(source, dottedPath) {
  return dottedPath.split(".").reduce((value, key) => value?.[key], source);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeXml(value) {
  return escapeHtml(value).replace(/'/g, "&apos;");
}
