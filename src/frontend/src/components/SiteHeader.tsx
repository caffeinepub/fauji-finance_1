import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-fauji-dark/95 backdrop-blur supports-[backdrop-filter]:bg-fauji-dark/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-fauji-cream hover:text-white transition-colors">
            <Shield className="h-8 w-8" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight">FAUJI FINANCE</span>
              <span className="text-xs text-fauji-cream/80">Bharose ka naam</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  currentPath === link.path
                    ? 'bg-fauji-green text-white'
                    : 'text-fauji-cream hover:bg-fauji-green/20 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-fauji-cream hover:text-white hover:bg-fauji-green/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-fauji-dark border-fauji-green/30">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-fauji-cream">
                  <Shield className="h-6 w-6" />
                  <span>FAUJI FINANCE</span>
                </SheetTitle>
              </SheetHeader>
              <Separator className="my-4 bg-fauji-green/30" />
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-md font-medium transition-colors ${
                      currentPath === link.path
                        ? 'bg-fauji-green text-white'
                        : 'text-fauji-cream hover:bg-fauji-green/20 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
