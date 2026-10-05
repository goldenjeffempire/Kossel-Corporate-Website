import seoData from "@/seo-data.json";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  imageAlt: string;
  schemaType: string;
  label?: string;
  serviceTypes?: string[];
  productCategories?: string[];
  questions?: { question: string; answer: string }[];
  related?: string[];
};

export const seoRoutes = seoData.routes as SeoRoute[];

export function normalizeSeoPath(path: string) {
  const pathname = path.split(/[?#]/)[0].replace(/^\/+|\/+$/g, "");
  return pathname ? `/${pathname}` : "/";
}

export function resolveSiteUrl(value: string) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password ||
      url.search || url.hash || url.pathname !== "/") {
    throw new Error("The SEO site URL must be an HTTPS origin without a path, credentials, query or fragment.");
  }
  return url.origin;
}

export function createSeoSchema(route: SeoRoute, siteUrl: string) {
  const origin = resolveSiteUrl(siteUrl);
  const pageUrl = `${origin}${route.path}`;
  const organizationId = `${origin}/#organization`;
  const officeId = `${origin}/#nigeria-office`;
  const founderId = `${origin}/#founder`;
  const websiteId = `${origin}/#website`;
  const address = { "@type": "PostalAddress", ...seoData.organization.address };
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: seoData.organization.name,
      legalName: seoData.organization.legalName,
      url: `${origin}/`,
      logo: { "@type": "ImageObject", url: `${origin}/favicon.svg` },
      image: `${origin}${seoData.defaultImage}`,
      description: seoData.organization.description,
      email: seoData.organization.email,
      telephone: seoData.organization.telephone,
      address,
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
      "@id": officeId,
      name: seoData.organization.legalName,
      url: `${origin}/contact`,
      image: `${origin}${seoData.defaultImage}`,
      telephone: seoData.organization.telephone,
      email: seoData.organization.email,
      address,
      parentOrganization: { "@id": organizationId },
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: seoData.organization.founder.name,
      jobTitle: seoData.organization.founder.jobTitle,
      url: `${origin}/about#leadership`,
      worksFor: { "@id": organizationId },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${origin}/`,
      name: seoData.siteName,
      alternateName: seoData.organization.legalName,
      publisher: { "@id": organizationId },
      inLanguage: seoData.language,
    },
    {
      "@type": route.schemaType,
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: route.title,
      description: route.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      primaryImageOfPage: { "@type": "ImageObject", url: `${origin}${seoData.defaultImage}` },
      inLanguage: seoData.language,
      ...(route.path === "/about" ? { mainEntity: [{ "@id": organizationId }, { "@id": founderId }] } : {}),
      ...(route.path !== "/" ? { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } } : {}),
    },
  ];

  if (route.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: route.label || route.title, item: pageUrl },
      ],
    });
  }
  if (route.serviceTypes) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Industrial engineering and oilfield services",
      serviceType: route.serviceTypes,
      provider: { "@id": organizationId },
      areaServed: seoData.organization.areaServed,
      url: pageUrl,
    });
  }
  if (route.productCategories) {
    // These are procurement categories, not individual products with offers.
    graph.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#categories`,
      name: "Industrial MRO product categories",
      numberOfItems: route.productCategories.length,
      itemListElement: route.productCategories.map((name, index) => ({
        "@type": "ListItem", position: index + 1, name,
      })),
    });
  }
  // Decorative capability films are not standalone video watch pages.
  // Do not invent offers, ratings, upload dates or rich-result eligibility.
  return { "@context": "https://schema.org", "@graph": graph };
}
