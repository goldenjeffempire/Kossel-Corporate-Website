import { lazy, Suspense, type ReactNode } from 'react';
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

// Pages
import Home from '@/pages/Home';
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Products = lazy(() => import('@/pages/Products'));
const Projects = lazy(() => import('@/pages/Projects'));
const HSEQuality = lazy(() => import('@/pages/HSEQuality'));
const Contact = lazy(() => import('@/pages/Contact'));

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ScrollProgress />
      <PageEnhancer />
      <Navbar />
      <main className="flex-grow pt-[84px] md:pt-[92px]">
        <RoutedErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/products" component={Products} />
              <Route path="/projects" component={Projects} />
              <Route path="/hse-quality" component={HSEQuality} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </RoutedErrorBoundary>
      </main>
      <Footer />
      <ContactFab />
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SiteAnalytics />
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
