import { useEffect } from "react";
import seoData from "@/seo-data.json";

type SeoRoute = {
  path: string;
  title: string;
  description: string;
  imageAlt: string;
  schemaType: string;
  serviceTypes?: string[];
  productCategories?: string[];
  video?: {
    name: string;
    description: string;
    contentUrl: string;
    thumbnailUrl: string;
  };
};

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || seoData.siteUrl
).replace(/\/+$/, "");
const OG_IMAGE_PATH = seoData.defaultImage;
const SEO_ROUTES = seoData.routes as SeoRoute[];

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

function upsertAlternate(hreflang: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  );
  if (!element) {
    element = document.createElement("link");
    element.rel = "alternate";
    element.hreflang = hreflang;
    document.head.appendChild(element);
  }
  element.href = href;
}

function removeCanonical() {
  document.head.querySelector('link[rel="canonical"]')?.remove();
}

function normalizePath(path: string) {
  const pathname = path.split(/[?#]/)[0];
  return pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;
}

function upsertJsonLd(schema: Record<string, unknown>) {
  let element = document.head.querySelector<HTMLScriptElement>(
    'script[data-seo-schema="true"]',
  );

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.seoSchema = "true";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(schema);
}

function removeJsonLd() {
  document.head.querySelector('script[data-seo-schema="true"]')?.remove();
}

function createBreadcrumb(path: string, canonicalUrl: string) {
  if (path === "/") return null;

  const name = path
    .slice(1)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: canonicalUrl },
    ],
  };
}

function createSchema(route: SeoRoute, canonicalUrl: string) {
  const organizationId = `${SITE_URL}/#organization`;
  const founderId = `${SITE_URL}/#founder`;
  const websiteId = `${SITE_URL}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: seoData.organization.name,
      legalName: seoData.organization.legalName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      description: seoData.organization.description,
      email: `mailto:${seoData.organization.email}`,
      foundingDate: seoData.organization.foundingDate,
      founder: { "@id": founderId },
      areaServed: seoData.organization.areaServed,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: seoData.organization.telephone,
        email: seoData.organization.email,
        contactType: "sales and project enquiries",
        areaServed: seoData.organization.areaServed,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#nigeria-office`,
      name: seoData.organization.legalName,
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      telephone: seoData.organization.telephone,
      email: seoData.organization.email,
      address: {
        "@type": "PostalAddress",
        ...seoData.organization.address,
      },
      parentOrganization: { "@id": organizationId },
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: seoData.organization.founder.name,
      jobTitle: seoData.organization.founder.jobTitle,
      url: `${SITE_URL}/about#leadership`,
      worksFor: { "@id": organizationId },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: seoData.siteName,
      description: seoData.organization.description,
      publisher: { "@id": organizationId },
      inLanguage: seoData.language,
    },
    {
      "@type": route.schemaType || "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: route.title,
      description: route.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      ...(route.path === "/about"
        ? { mainEntity: [{ "@id": organizationId }, { "@id": founderId }] }
        : {}),
      primaryImageOfPage: `${SITE_URL}${OG_IMAGE_PATH}`,
      inLanguage: seoData.language,
    },
  ];

  const breadcrumb = createBreadcrumb(route.path, canonicalUrl);
  if (breadcrumb) graph.push(breadcrumb);

  if (route.serviceTypes) {
    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "Industrial engineering and oilfield services",
      serviceType: route.serviceTypes,
      provider: { "@id": organizationId },
      areaServed: seoData.organization.areaServed,
      url: canonicalUrl,
    });
  }

  if (route.productCategories) {
    graph.push({
      "@type": "ItemList",
      "@id": `${canonicalUrl}#products`,
      name: "Industrial MRO product categories",
      numberOfItems: route.productCategories.length,
      itemListElement: route.productCategories.map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
      })),
    });
    graph.push(
      ...route.productCategories.map((name, index) => ({
        "@type": "Product",
        "@id": `${canonicalUrl}#product-${index + 1}`,
        name,
        category: "Industrial MRO products",
        description: `${name} supplied through Kossel's industrial procurement division to project specifications.`,
        brand: { "@type": "Organization", "@id": organizationId },
        url: canonicalUrl,
      })),
    );
  }

  if (route.video) {
    graph.push({
      "@type": "VideoObject",
      "@id": `${canonicalUrl}#video`,
      name: route.video.name,
      description: route.video.description,
      contentUrl: `${SITE_URL}${route.video.contentUrl}`,
      thumbnailUrl: `${SITE_URL}${route.video.thumbnailUrl}`,
      uploadDate: "2026-10-04",
      duration: "PT4S",
      inLanguage: seoData.language,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function SEO({
  title,
  description,
  path,
  imageAlt = "Kossel LTD. industrial engineering and oilfield operations",
  indexable = true,
}: SEOProps) {
  useEffect(() => {
    const normalizedPath = normalizePath(path);
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;
    const imageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;
    const robots = indexable
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, nofollow";
    const route =
      SEO_ROUTES.find((candidate) => candidate.path === normalizedPath) ||
      ({
        path: normalizedPath,
        title,
        description,
        imageAlt,
        schemaType: "WebPage",
      } satisfies SeoRoute);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "author", seoData.siteName);
    upsertMeta("name", "application-name", seoData.siteName);
    upsertMeta("name", "theme-color", "#101A2B");
    upsertMeta("name", "referrer", "strict-origin-when-cross-origin");
    const googleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
    if (googleVerification) {
      upsertMeta("name", "google-site-verification", googleVerification);
    }
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", seoData.siteName);
    upsertMeta("property", "og:locale", "en_NG");
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", imageAlt);
    upsertMeta("property", "og:image:type", "image/jpeg");
    upsertMeta("property", "og:image:width", "1024");
    upsertMeta("property", "og:image:height", "1024");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", imageAlt);
    if (indexable) {
      upsertCanonical(canonicalUrl);
      upsertAlternate("en-NG", canonicalUrl);
      upsertAlternate("x-default", canonicalUrl);
      upsertJsonLd(
        createSchema(
          { ...route, title, description, imageAlt },
          canonicalUrl,
        ),
      );
    } else {
      removeCanonical();
      removeJsonLd();
    }
  }, [description, imageAlt, indexable, path, title]);

  return null;
}