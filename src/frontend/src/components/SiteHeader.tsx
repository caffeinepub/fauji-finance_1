import { Link, useRouterState } from '@tanstack/react-router';
import { Shield, Calculator, Home, Phone } from 'lucide-react';

export default function SiteHeader() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">Fauji Finance</h1>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1 md:gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPath === '/'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/calculator"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPath === '/calculator'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Calculator</span>
            </Link>
            <a
              href="/#contact"
              className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
