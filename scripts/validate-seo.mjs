import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { baseUrl, pages, redirects } from "./seo-config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const seen = {
  titles: new Map(),
  descriptions: new Map(),
  canonicals: new Map()
};

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page.file), "utf8");
  checkExact(page, "title", readTag(html, "title"), page.title);
  checkExact(page, "description", readMeta(html, "name", "description"), page.description);
  checkExact(page, "canonical", readCanonical(html), `${baseUrl}${page.path}`);
  checkExact(page, "og:title", readMeta(html, "property", "og:title"), page.title);
  checkExact(page, "og:description", readMeta(html, "property", "og:description"), page.description);
  checkExact(page, "og:url", readMeta(html, "property", "og:url"), `${baseUrl}${page.path}`);
  checkExact(page, "og:image", readMeta(html, "property", "og:image"), `${baseUrl}${page.image}`);
  checkExact(page, "twitter:title", readMeta(html, "name", "twitter:title"), page.title);
  checkExact(page, "twitter:description", readMeta(html, "name", "twitter:description"), page.description);
  if (!html.includes('window.location.hostname === "koinoslab.org"')) {
    errors.push(`${page.file}: missing apex-to-www host redirect`);
  }

  const robots = readMeta(html, "name", "robots");
  if (!robots?.includes("index") || robots.includes("noindex")) {
    errors.push(`${page.file}: invalid robots directive "${robots || "missing"}"`);
  }

  const h1Tags = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1Tags.length !== 1) errors.push(`${page.file}: expected one H1, found ${h1Tags.length}`);
  const h1 = h1Tags[0]?.replace(/<[^>]+>/g, "").trim();
  if (!h1) errors.push(`${page.file}: H1 is empty in source HTML`);

  const schemas = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (!schemas.length) errors.push(`${page.file}: missing JSON-LD`);
  for (const schema of schemas) {
    try {
      JSON.parse(schema[1]);
    } catch (error) {
      errors.push(`${page.file}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const imageTag of html.match(/<img\b[\s\S]*?>/gi) || []) {
    if (!/\balt="[^"]*"/i.test(imageTag)) errors.push(`${page.file}: image without alt text`);
    if (!/\bwidth="\d+"/i.test(imageTag) || !/\bheight="\d+"/i.test(imageTag)) {
      errors.push(`${page.file}: image without intrinsic dimensions`);
    }
    if (/\bsrc="https?:\/\//i.test(imageTag)) errors.push(`${page.file}: externally hosted image`);
  }

  checkInternalLinks(page, html);
  rememberUnique(seen.titles, page.title, page.file, "title");
  rememberUnique(seen.descriptions, page.description, page.file, "description");
  rememberUnique(seen.canonicals, `${baseUrl}${page.path}`, page.file, "canonical");
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
for (const page of pages) {
  const url = `${baseUrl}${page.path}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`sitemap.xml: missing ${url}`);
}
for (const redirect of redirects) {
  const html = fs.readFileSync(path.join(root, redirect.file), "utf8");
  const target = `${baseUrl}${redirect.target}`;
  if (!html.includes(`content="0; url=${target}"`)) errors.push(`${redirect.file}: missing instant redirect`);
  if (readCanonical(html) !== target) errors.push(`${redirect.file}: canonical does not match redirect target`);
  if (sitemap.includes(`${baseUrl}/${redirect.file}`)) errors.push(`sitemap.xml: contains legacy URL ${redirect.file}`);
}

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${baseUrl}/sitemap.xml`)) errors.push("robots.txt: missing canonical sitemap URL");

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`SEO validation passed for ${pages.length} canonical pages and ${redirects.length} redirects.`);

function checkInternalLinks(page, html) {
  const hrefs = [...html.matchAll(/\bhref="([^"]+)"/gi)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(?:https?:|mailto:|tel:|#)/.test(href)) continue;
    if (!href.startsWith("/")) {
      errors.push(`${page.file}: non-root-relative internal link ${href}`);
      continue;
    }

    const pathname = href.split(/[?#]/)[0];
    if (pathname === "/") continue;
    const target = pathname.endsWith("/")
      ? path.join(root, pathname.slice(1), "index.html")
      : path.join(root, pathname.slice(1));
    if (!fs.existsSync(target)) errors.push(`${page.file}: broken internal link ${href}`);
  }
}

function checkExact(page, label, actual, expected) {
  if (actual !== expected) errors.push(`${page.file}: ${label} mismatch`);
}

function rememberUnique(map, value, file, label) {
  if (map.has(value)) errors.push(`${file}: duplicate ${label} also used by ${map.get(value)}`);
  map.set(value, file);
}

function readTag(html, tag) {
  const value = html.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"))?.[1].trim();
  return value ? decodeHtml(value) : value;
}

function readMeta(html, attribute, value) {
  const tag = html.match(new RegExp(`<meta\\s+${attribute}="${escapeRegex(value)}"[^>]*>`, "i"))?.[0];
  const content = tag?.match(/\bcontent="([^"]*)"/i)?.[1];
  return content ? decodeHtml(content) : content;
}

function readCanonical(html) {
  const tag = html.match(/<link\s+rel="canonical"[^>]*>/i)?.[0];
  return tag?.match(/\bhref="([^"]*)"/i)?.[1];
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}
