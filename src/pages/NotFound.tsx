import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            hsl(var(--foreground)) 60px,
            hsl(var(--foreground)) 61px
          )`
        }} />
      </div>

      {/* Yellow Arc */}
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M0 200 A200 200 0 0 1 200 0 L200 200 Z"
            fill="none"
            stroke="hsl(45 100% 50%)"
            strokeWidth="4"
            className="opacity-30"
          />
        </svg>
      </div>

      <div className="text-center relative z-10 px-6">
        <Logo size="lg" className="text-primary mx-auto mb-8" />
        <h1 className="font-display text-8xl md:text-9xl text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page has gone off the training track
        </p>
        <Button variant="hero" size="xl" asChild>
          <a href="/">
            <ArrowLeft className="w-5 h-5" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
