import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const artifactDirectory = resolve(scriptDirectory, "..");
const distDirectory = resolve(artifactDirectory, "dist/public");
const templatePath = resolve(distDirectory, "index.html");
const seoDataPath = resolve(artifactDirectory, "src/seo-data.json");

const seoData = JSON.parse(await readFile(seoDataPath, "utf8"));
const siteUrl = (process.env.VITE_SITE_URL || seoData.siteUrl).replace(/\/+$/, "");
const template = await readFile(templatePath, "utf8");

const seoMetaKeys = new Set([
  "description",
  "robots",
  "author",
  "application-name",
  "theme-color",
  "referrer",
  "og:title",
  "og:description",
  "og:url",
  "og:type",
  "og:site_name",
  "og:locale",
  "og:image",
  "og:image:alt",
  "og:image:type",
  "og:image:width",
  "og:image:height",
  "twitter:card",
  "twitter:title",
  "twitter:description",
  "twitter:image",
  "twitter:image:alt"
]);

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePath(path) {
  if (path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

function absoluteUrl(path) {
  return `${siteUrl}${normalizePath(path)}`;
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: seoData.organization.name,
    legalName: seoData.organization.legalName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/favicon.svg`
    },
    image: `${siteUrl}${seoData.defaultImage}`,
    description: seoData.organization.description,
    email: `mailto:${seoData.organization.email}`,
    areaServed: seoData.organization.areaServed
  };
}

function breadcrumbSchema(route) {
  if (route.path === "/") return null;

  const label = route.path
    .slice(1)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(route.path)}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: absoluteUrl(route.path)
      }
    ]
  };
}

function schemaForRoute(route) {
  const pageUrl = absoluteUrl(route.path);
  const breadcrumb = breadcrumbSchema(route);
  const graph = [
    organizationSchema(),
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: seoData.siteName,
      description: seoData.organization.description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: seoData.language
    },
    {
      "@type": route.schemaType || "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: route.title,
      description: route.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: `${siteUrl}${seoData.defaultImage}`,
      inLanguage: seoData.language
    }
  ];

  if (breadcrumb) graph.push(breadcrumb);

  if (route.serviceTypes) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Industrial engineering and oilfield services",
      serviceType: route.serviceTypes,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: seoData.organization.areaServed,
      url: pageUrl
    });
  }

  if (route.productCategories) {
    graph.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#products`,
      name: "Industrial MRO product categories",
      numberOfItems: route.productCategories.length,
      itemListElement: route.productCategories.map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

function renderRoute(templateHtml, route) {
  const pageUrl = absoluteUrl(route.path);
  const imageUrl = `${siteUrl}${seoData.defaultImage}`;
  const robots = "index, follow";
  let html = templateHtml
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\b[^>]*>/gi, (tag) => {
      const match = tag.match(/\b(?:name|property)=["']([^"']+)["']/i);
      return match && seoMetaKeys.has(match[1]) ? "" : tag;
    })
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");

  const headTags = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta name="author" content="${escapeHtml(seoData.siteName)}" />`,
    `<meta name="application-name" content="${escapeHtml(seoData.siteName)}" />`,
    `<meta name="theme-color" content="#101A2B" />`,
    `<meta name="referrer" content="strict-origin-when-cross-origin" />`,
    `<link rel="canonical" href="${pageUrl}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${pageUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(seoData.siteName)}" />`,
    `<meta property="og:locale" content="${seoData.locale}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(route.imageAlt || seoData.defaultImageAlt)}" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:width" content="1024" />`,
    `<meta property="og:image:height" content="1024" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${imageUrl}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(route.imageAlt || seoData.defaultImageAlt)}" />`,
    `<script type="application/ld+json">${JSON.stringify(schemaForRoute(route)).replaceAll("<", "\\u003c")}</script>`
  ].join("\n    ");

  return html.replace(/<head>/i, `<head>\n    ${headTags}`);
}

function renderNotFound(templateHtml) {
  let html = templateHtml
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\b[^>]*>/gi, (tag) => {
      const match = tag.match(/\b(?:name|property)=["']([^"']+)["']/i);
      return match && seoMetaKeys.has(match[1]) ? "" : tag;
    })
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");

  const headTags = [
    "<title>Page Not Found | Kossel LTD.</title>",
    '<meta name="robots" content="noindex, nofollow" />',
    `<meta name="author" content="${escapeHtml(seoData.siteName)}" />`,
    `<meta name="application-name" content="${escapeHtml(seoData.siteName)}" />`,
    '<meta name="theme-color" content="#101A2B" />',
    '<meta name="referrer" content="strict-origin-when-cross-origin" />'
  ].join("\n    ");

  html = html.replace(/<head>/i, `<head>\n    ${headTags}`);

  return html.replace(
    '<div id="root"></div>',
    `<div id="root"><main aria-labelledby="not-found-title" style="font-family: Inter, Arial, sans-serif; max-width: 48rem; margin: 12vh auto; padding: 2rem; text-align: center;"><p style="color: #F47721; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;">Error 404</p><h1 id="not-found-title" style="color: #101A2B; font-size: clamp(2rem, 7vw, 4rem); margin: .5rem 0 1rem;">Page Not Found</h1><p style="color: #475569; font-size: 1.125rem; line-height: 1.6;">The page you requested is not available. Please return to the Kossel Ltd. homepage.</p><a href="/" style="display: inline-block; margin-top: 1.5rem; padding: .9rem 1.25rem; background: #F47721; color: #101A2B; font-weight: 700; text-decoration: none;">Return to homepage</a></main></div>`,
  );
}

for (const route of seoData.routes) {
  const routeDirectory =
    route.path === "/" ? distDirectory : resolve(distDirectory, route.path.slice(1));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(resolve(routeDirectory, "index.html"), renderRoute(template, route));
}

await writeFile(resolve(distDirectory, "404.html"), renderNotFound(template));

const sitemapUrls = seoData.routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <changefreq>${route.path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${route.path === "/" ? "1.0" : route.path === "/services" || route.path === "/products" ? "0.9" : "0.8"}</priority>
  </url>`
  )
  .join("\n");

await writeFile(
  resolve(distDirectory, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`
);

await writeFile(
  resolve(distDirectory, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /404\nSitemap: ${siteUrl}/sitemap.xml\n`
);