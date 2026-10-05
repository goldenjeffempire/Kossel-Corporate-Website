import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { normalizeSeoPath, seoRoutes } from "@/lib/seo-schema";

export function Breadcrumbs() {
  const [location] = useLocation();
  const path = normalizeSeoPath(location);
  const route = seoRoutes.find((item) => item.path === path);
  if (!route || path === "/") return null;
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-white">
      <ol className="container mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm md:px-8">
        <li><Link href="/" className="font-medium text-secondary underline-offset-4 hover:underline">Home</Link></li>
        <li aria-hidden="true"><ChevronRight className="h-4 w-4 text-secondary" /></li>
        <li aria-current="page" className="font-semibold text-primary">{route.label}</li>
      </ol>
    </nav>
  );
}

export function SearchContent() {
  const [location] = useLocation();
  const path = normalizeSeoPath(location);
  const route = seoRoutes.find((item) => item.path === path);
  if (!route) return null;
  const related = seoRoutes.filter((item) => route.related?.includes(item.path));
  return (
    <>
      {route.questions && (
        <section aria-labelledby="questions-heading" className="border-t border-border bg-white py-16">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Planning your project</p>
            <h2 id="questions-heading" className="mb-8 font-display text-3xl font-black uppercase text-primary md:text-4xl">
              {path === "/products" ? "Industrial procurement questions" : "Engineering services questions"}
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {route.questions.map(({ question, answer }) => (
                <details key={question} className="group py-5">
                  <summary className="cursor-pointer py-2 text-lg font-semibold text-primary focus-visible:outline-offset-4">
                    {question}
                  </summary>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      {related.length > 0 && (
        <section aria-labelledby="explore-heading" className="border-t border-border bg-muted py-12">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <h2 id="explore-heading" className="mb-6 font-display text-xl font-bold uppercase text-primary">
              Explore Kossel’s capabilities
            </h2>
            <div className="flex flex-wrap gap-4">
              {related.map((item) => (
                <Link key={item.path} href={item.path} className="inline-flex min-h-12 items-center gap-3 border border-border bg-white px-5 py-3 font-semibold text-primary transition-colors hover:border-accent hover:text-accent">
                  {item.label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
