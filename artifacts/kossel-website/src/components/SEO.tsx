import { useEffect } from "react";

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://kosselgroup.com"
).replace(/\/+$/, "");
const OG_IMAGE_PATH = "/og-image.jpg";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  indexable?: boolean;
};

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
}

export function SEO({
  title,
  description,
  path,
  imageAlt = "Kossel Ltd. industrial engineering and oilfield operations",
  indexable = true,
}: SEOProps) {
  useEffect(() => {
    const normalizedPath =
      path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const imageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;
    const robots = indexable ? "index, follow" : "noindex, nofollow";

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Kossel Ltd.");
    upsertMeta("property", "og:locale", "en_NG");
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", imageAlt);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", imageAlt);
    upsertCanonical(canonicalUrl);
  }, [description, imageAlt, indexable, path, title]);

  return null;
}