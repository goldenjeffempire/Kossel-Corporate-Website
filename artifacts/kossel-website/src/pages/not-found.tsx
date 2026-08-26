import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <SEO
        title="Page Not Found | Kossel LTD."
        description="The requested Kossel LTD. page could not be found."
        path={window.location.pathname}
        indexable={false}
      />
      <AlertCircle className="w-16 h-16 text-muted-foreground mb-6" />
      <h1 className="text-6xl font-display font-black text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-widest">
        Page Not Found
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button variant="default" size="lg">
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}
