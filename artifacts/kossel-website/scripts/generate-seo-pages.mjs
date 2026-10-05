import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderPage, createSeoSchema, resolveSiteUrl } from "../dist/prerender/render.mjs";

const artifactDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = resolve(artifactDirectory, "dist/public");
const seoData = JSON.parse(await readFile(resolve(artifactDirectory, "src/seo-data.json"), "utf8"));
const siteUrl = resolveSiteUrl(process.env.VITE_SITE_URL || seoData.siteUrl);
const template = await readFile(resolve(distDirectory, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("The Vite template has no empty root to prerender.");

const seoMetaKeys = new Set([
  "description", "robots", "author", "application-name", "theme-color", "referrer",
  "og:title", "og:description", "og:url", "og:type", "og:site_name", "og:locale",
  "og:image", "og:image:alt", "og:image:type", "og:image:width", "og:image:height",
  "twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt",
]);

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function clearSeo(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\b[^>]*>/gi, (tag) => {
      const match = tag.match(/\b(?:name|property)=["']([^"']+)["']/i);
      return match && seoMetaKeys.has(match[1]) ? "" : tag;
    })
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["']alternate["'])(?=[^>]*\bhreflang=["'](?:en-NG|x-default)["'])[^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
}

function renderRoute(route) {
  const pageUrl = `${siteUrl}${route.path}`;
  const imageUrl = `${siteUrl}${seoData.defaultImage}`;
  let html = clearSeo(template);
  if (route.path !== "/") {
    html = html.replace(/\s*<link\b(?=[^>]*\bdata-critical-hero=["']true["'])[^>]*>/gi, "");
  }
  const meta = (key, value, property = false) =>
    `<meta ${property ? "property" : "name"}="${key}" content="${escapeHtml(value)}" />`;
  const head = [
    `<title>${escapeHtml(route.title)}</title>`,
    meta("description", route.description),
    meta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"),
    meta("author", seoData.siteName),
    meta("application-name", seoData.siteName),
    meta("theme-color", "#101A2B"),
    meta("referrer", "strict-origin-when-cross-origin"),
    ...(process.env.VITE_GOOGLE_SITE_VERIFICATION
      ? [meta("google-site-verification", process.env.VITE_GOOGLE_SITE_VERIFICATION)] : []),
    `<link rel="canonical" href="${escapeHtml(pageUrl)}" />`,
    `<link rel="alternate" hreflang="en-NG" href="${escapeHtml(pageUrl)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeHtml(pageUrl)}" />`,
    ...Object.entries({
      "og:title": route.title, "og:description": route.description, "og:url": pageUrl,
      "og:type": "website", "og:site_name": seoData.siteName, "og:locale": seoData.locale,
      "og:image": imageUrl, "og:image:alt": route.imageAlt,
      "og:image:type": "image/jpeg", "og:image:width": "1024", "og:image:height": "1024",
    }).map(([key, value]) => meta(key, value, true)),
    meta("twitter:card", "summary_large_image"),
    meta("twitter:title", route.title),
    meta("twitter:description", route.description),
    meta("twitter:image", imageUrl),
    meta("twitter:image:alt", route.imageAlt),
    `<script type="application/ld+json" data-seo-schema="true">${JSON.stringify(createSeoSchema(route, siteUrl)).replaceAll("<", "\\u003c")}</script>`,
  ].join("\n    ");
  return html.replace(/<head>/i, `<head>\n    ${head}`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="true">${renderPage(route.path)}</div>`);
}

for (const route of seoData.routes) {
  const directory = route.path === "/" ? distDirectory : resolve(distDirectory, route.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), renderRoute(route));
}

const notFound = clearSeo(template)
  .replace(/\s*<link\b(?=[^>]*\bdata-critical-hero=["']true["'])[^>]*>/gi, "")
  .replace(/<head>/i, '<head>\n    <title>Page Not Found | Kossel LTD.</title>\n    <meta name="robots" content="noindex, nofollow" />')
  .replace('<div id="root"></div>',
    '<div id="root"><main style="font-family:Arial,sans-serif;max-width:48rem;margin:12vh auto;padding:2rem;text-align:center"><h1>Page not found</h1><p>The requested page is not available.</p><a href="/">Return to the Kossel homepage</a></main></div>');
await writeFile(resolve(distDirectory, "404.html"), notFound);

const sitemap = seoData.routes.map((route) =>
  `  <url>\n    <loc>${escapeHtml(`${siteUrl}${route.path}`)}</loc>\n  </url>`).join("\n");
await writeFile(resolve(distDirectory, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
await writeFile(resolve(distDirectory, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /404\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Prerendered complete page content and SEO for ${seoData.routes.length} routes.`);
