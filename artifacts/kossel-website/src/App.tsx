import { lazy, Suspense, type ComponentType, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactFab } from '@/components/layout/ContactFab';
import { SiteAnalytics } from '@/components/SiteAnalytics';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { PageEnhancer } from '@/components/motion/PageEnhancer';
import { Breadcrumbs, SearchContent } from '@/components/SearchContent';

// Pages
import Home from '@/pages/Home';
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Products = lazy(() => import('@/pages/Products'));
const Projects = lazy(() => import('@/pages/Projects'));
const HSEQuality = lazy(() => import('@/pages/HSEQuality'));
const Contact = lazy(() => import('@/pages/Contact'));

const queryClient = new QueryClient();

type AppProps = {
  ssrPath?: string;
  prerenderPages?: Record<string, ComponentType>;
};

function Router({ prerenderPages = {} }: AppProps) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ScrollProgress />
      <PageEnhancer />
      <Navbar />
      <main className="flex-grow pt-[84px] md:pt-[92px]">
        <Breadcrumbs />
        <RoutedErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Switch>
              <Route path="/" component={prerenderPages["/"] || Home} />
              <Route path="/about" component={prerenderPages["/about"] || About} />
              <Route path="/services" component={prerenderPages["/services"] || Services} />
              <Route path="/products" component={prerenderPages["/products"] || Products} />
              <Route path="/projects" component={prerenderPages["/projects"] || Projects} />
              <Route path="/hse-quality" component={prerenderPages["/hse-quality"] || HSEQuality} />
              <Route path="/contact" component={prerenderPages["/contact"] || Contact} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </RoutedErrorBoundary>
        <SearchContent />
      </main>
      <ContactFab />
      <Footer />
    </div>
  );
}

function RouteLoadingFallback() {
  return (
    <div
      className="min-h-[60vh] bg-white"
      role="status"
      aria-label="Loading page"
    />
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App({ ssrPath, prerenderPages }: AppProps = {}) {
  return (
    <QueryClientProvider client={queryClient}>
      <SiteAnalytics />
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''} ssrPath={ssrPath}>
        <Router prerenderPages={prerenderPages} />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
