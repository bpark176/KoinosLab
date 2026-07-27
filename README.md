# Koinos Lab Website

This is the static multi-page website for Koinos Lab at `https://www.koinoslab.org`.

## Edit the site

- Update most text, device cards, marketplace listings, publications, vision items, and team members in `content.js`.
- Update colors, spacing, and layout in `styles.css`.
- Update page structure or navigation in the individual `.html` files.
- Update the flagship instrument documentation in `devices/spectrofluorometer/index.html`.
- Replace a coming-soon project page in its `devices/<project>/index.html` file when development begins.

The site can be opened directly, but a local HTTP server is recommended so clean device URLs and root-relative links behave exactly as they do in production.

## SEO workflow

Page titles, descriptions, canonical URLs, social metadata, structured data, redirects, `robots.txt`, and `sitemap.xml` are managed from `scripts/seo-config.mjs`.

After changing page copy or adding a page:

```bash
npm run seo:generate
npm run seo:check
```

Add every new indexable page to the `pages` array in `scripts/seo-config.mjs`. The generator will then include it in `sitemap.xml`. Legacy URL redirects are managed in the `redirects` array.

To add the Google Search Console HTML-tag token to the homepage without committing a placeholder:

```bash
GOOGLE_SITE_VERIFICATION="your-real-token" npm run seo:generate
```

For a Search Console domain property, DNS verification at the domain provider is also supported and does not require an HTML tag.

## Pages

- `index.html`
- `about.html`
- `devices.html`
- `devices/spectrofluorometer/`
- `devices/colorimeter/`
- `devices/water-quality-analyzer/`
- `devices/potentiostat/`
- `marketplace.html`
- `publications.html`
- `vision.html`
- `team.html`

The old `device-*.html` paths are retained only as redirect pages and should not be added back to the sitemap.
