import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryProps {
  error?: Error;
  resetKey?: any;
  children: React.ReactNode;
}

export function ErrorBoundary({ error, children }: ErrorBoundaryProps) {
  if (error) {
    return (
      <div className="flex h-[50vh] w-full flex-col items-center justify-center p-4 text-center">
        <div className="rounded-full bg-destructive/10 p-4 mb-4">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-bold font-display uppercase tracking-wider text-primary mb-2">
          Something went wrong
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          {error.message || "An unexpected error occurred."}
        </p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Reload Page
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
