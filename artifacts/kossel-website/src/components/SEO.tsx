import { useEffect } from "react";
import seoData from "@/seo-data.json";
import { createSeoSchema, resolveSiteUrl, seoRoutes, type SeoRoute } from "@/lib/seo-schema";

const SITE_URL = resolveSiteUrl(import.meta.env.VITE_SITE_URL || seoData.siteUrl);

type SEOProps = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  indexable?: boolean;
};

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    if (hreflang) element.hreflang = hreflang;
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertJsonLd(schema: ReturnType<typeof createSeoSchema>) {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-seo-schema="true"]');
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.seoSchema = "true";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema);
}

export function SEO({ title, description, path, imageAlt, indexable = true }: SEOProps) {
  useEffect(() => {
    const pathname = path.split(/[?#]/)[0];
    const normalizedPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;
    // Shared route metadata stays identical before and after hydration.
    const route: SeoRoute = seoRoutes.find((candidate) => candidate.path === normalizedPath) || {
      path: normalizedPath, title, description,
      imageAlt: imageAlt || seoData.defaultImageAlt, schemaType: "WebPage",
    };
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const imageUrl = `${SITE_URL}${seoData.defaultImage}`;
    document.title = route.title;
    upsertMeta("name", "description", route.description);
    upsertMeta("name", "robots", indexable
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, nofollow");
    upsertMeta("name", "author", seoData.siteName);
    upsertMeta("name", "application-name", seoData.siteName);
    upsertMeta("name", "theme-color", "#101A2B");
    upsertMeta("name", "referrer", "strict-origin-when-cross-origin");
    const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
    if (verification) upsertMeta("name", "google-site-verification", verification);
    const social = {
      "og:title": route.title,
      "og:description": route.description,
      "og:url": canonicalUrl,
      "og:type": "website",
      "og:site_name": seoData.siteName,
      "og:locale": seoData.locale,
      "og:image": imageUrl,
      "og:image:alt": route.imageAlt,
      "og:image:type": "image/jpeg",
      "og:image:width": "1024",
      "og:image:height": "1024",
    };
    Object.entries(social).forEach(([key, value]) => upsertMeta("property", key, value));
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", route.title);
    upsertMeta("name", "twitter:description", route.description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", route.imageAlt);
    if (indexable) {
      upsertLink("canonical", canonicalUrl);
      upsertLink("alternate", canonicalUrl, "en-NG");
      upsertLink("alternate", canonicalUrl, "x-default");
      upsertJsonLd(createSeoSchema(route, SITE_URL));
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());
      document.head.querySelector('script[data-seo-schema="true"]')?.remove();
    }
  }, [description, imageAlt, indexable, path, title]);
  return null;
}
