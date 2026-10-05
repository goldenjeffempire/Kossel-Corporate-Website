import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist/public");
const data = JSON.parse(await readFile(resolve(root, "src/seo-data.json"), "utf8"));
const origin = new URL(process.env.VITE_SITE_URL || data.siteUrl).origin;
const titles = new Set();
const descriptions = new Set();
const paths = new Set(data.routes.map(({ path }) => path));
const expectedUrls = data.routes.map(({ path }) => `${origin}${path}`);
const expectedHeadings = {
  "/": "Industrial Engineering For Demanding Operations",
  "/about": "About Kossel Engineering",
  "/services": "Industrial Engineering Services",
  "/products": "Industrial MRO Products",
  "/projects": "Oilfield Project Experience",
  "/hse-quality": "HSE & Quality Management",
  "/contact": "Contact Kossel",
};
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const plainText = (value) => value.replace(/<[^>]*>/g, " ")
  .replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&#39;", "'")
  .replaceAll("&quot;", '"').replace(/\s+/g, " ").trim();

for (const route of data.routes) {
  const html = await readFile(resolve(dist, route.path.slice(1), "index.html"), "utf8");
  const url = `${origin}${route.path}`;
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  assert.deepEqual(canonicals.map((match) => match[1]), [url], `${route.path}: canonical`);
  const headings = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)];
  assert.equal(headings.length, 1, `${route.path}: exactly one rendered H1`);
  assert.equal(plainText(headings[0][1]), expectedHeadings[route.path],
    `${route.path}: wrong page content prerendered`);
  assert.ok(html.includes(`<title>${escapeHtml(route.title)}</title>`), `${route.path}: title mismatch`);
  assert.ok(html.includes(`name="description" content="${escapeHtml(route.description)}"`),
    `${route.path}: description mismatch`);
  assert.ok(html.includes('data-prerendered="true"'), `${route.path}: missing full prerender`);
  assert.ok(!html.includes('<!--$!-->'), `${route.path}: unresolved server Suspense boundary`);
  assert.ok(!html.includes('content="noindex'), `${route.path}: accidentally non-indexable`);
  assert.ok(!titles.has(route.title), "Duplicate title");
  assert.ok(!descriptions.has(route.description), "Duplicate description");
  assert.ok(route.title.length >= 30 && route.title.length <= 70, `${route.path}: title length`);
  assert.ok(route.description.length >= 100 && route.description.length <= 180, `${route.path}: description length`);
  titles.add(route.title); descriptions.add(route.description);
  for (const language of ["en-NG", "x-default"]) {
    const tags = [...html.matchAll(new RegExp(`<link[^>]*hreflang="${language}"[^>]*href="([^"]+)"`, "g"))];
    assert.deepEqual(tags.map((match) => match[1]), [url], `${route.path}: language URL`);
  }
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  assert.equal(schemas.length, 1, `${route.path}: duplicate schema`);
  const schema = JSON.parse(schemas[0][1]);
  const page = schema["@graph"].find((node) => node["@id"] === `${url}#webpage`);
  assert.equal(page.url, url);
  assert.equal(page.name, route.title);
  assert.ok(schema["@graph"].some((node) => node["@type"] === "Organization"));
  assert.ok(!schema["@graph"].some((node) => ["Product", "VideoObject", "Review", "AggregateRating"].includes(node["@type"])),
    `${route.path}: unsupported product, background video or rating markup`);
  if (route.path !== "/") {
    assert.ok(html.includes('aria-label="Breadcrumb"'), `${route.path}: visible breadcrumb`);
    assert.ok(schema["@graph"].some((node) => node["@type"] === "BreadcrumbList"));
  }
  for (const item of route.questions || []) {
    assert.ok(html.includes(item.question), `${route.path}: missing visible question`);
    assert.ok(plainText(html).includes(item.answer), `${route.path}: missing FAQ answer`);
  }
  for (const href of html.matchAll(/\bhref="([^"]+)"/g)) {
    const pathname = href[1].split(/[?#]/)[0];
    if (paths.has(pathname)) await access(resolve(dist, pathname.slice(1), "index.html"));
  }
  // Media shipped in the HTML must exist in the static output.
  for (const src of html.matchAll(/\b(?:src|poster)="(\/[^"]+)"/g)) {
    const pathname = src[1].split(/[?#]/)[0];
    if (!pathname.startsWith("/@")) await access(resolve(dist, `.${pathname}`));
  }
  console.log(`SEO PASS ${route.path}: HTML content, canonical, metadata, schema, links and media`);
}

const sitemap = await readFile(resolve(dist, "sitemap.xml"), "utf8");
assert.ok(sitemap.startsWith('<?xml version="1.0"'));
assert.ok(sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]), expectedUrls);
const robots = await readFile(resolve(dist, "robots.txt"), "utf8");
assert.ok(robots.includes("Allow: /"));
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const notFound = await readFile(resolve(dist, "404.html"), "utf8");
assert.ok(notFound.includes("noindex, nofollow"));
assert.ok(!notFound.includes('rel="canonical"'));
console.log(`SEO PASS sitemap, robots and 404; ${data.routes.length} indexable pages verified.`);
