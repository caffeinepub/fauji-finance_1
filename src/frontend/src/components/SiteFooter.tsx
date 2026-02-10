import { Link } from '@tanstack/react-router';
import { Shield, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { CONTACT } from '@/content/faujiFinanceContent';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'fauji-finance';

  return (
    <footer className="bg-fauji-dark text-fauji-cream border-t border-fauji-green/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-fauji-green" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white">FAUJI FINANCE</span>
                <span className="text-sm text-fauji-cream/80">Bharose ka naam</span>
              </div>
            </div>
            <p className="text-sm text-fauji-cream/70 leading-relaxed">
              25+ saal ka experience, fauji discipline aur imaandari ke saath. Safe committee, saving aur byaj services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-fauji-green transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm hover:text-fauji-green transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-sm hover:text-fauji-green transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center gap-2 hover:text-fauji-green transition-colors">
                <Phone className="h-4 w-4" />
                <span>{CONTACT.phones.rajvir}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-fauji-green transition-colors">
                <Mail className="h-4 w-4" />
                <span>{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-fauji-cream/70">{CONTACT.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-fauji-green/30" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-fauji-cream/70">
          <p>© {currentYear} Fauji Finance. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fauji-green hover:text-white transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
