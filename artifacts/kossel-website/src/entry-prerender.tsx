import { renderToString } from "react-dom/server";
import App from "./App";
import { ErrorBoundary } from "@/components/error-boundary";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Projects from "@/pages/Projects";
import HSEQuality from "@/pages/HSEQuality";
import Contact from "@/pages/Contact";

export { createSeoSchema, resolveSiteUrl } from "@/lib/seo-schema";

const pages = {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/products": Products,
  "/projects": Projects,
  "/hse-quality": HSEQuality,
  "/contact": Contact,
};

export function renderPage(path: string) {
  if (!(path in pages)) throw new Error(`No prerender component registered for ${path}`);
  return renderToString(
    <ErrorBoundary>
      <App ssrPath={path} prerenderPages={pages} />
    </ErrorBoundary>,
  );
}
