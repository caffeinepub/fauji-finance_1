import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';
import InteractiveServicesSection from '@/components/InteractiveServicesSection';
import ProfitExamplesSection from '@/components/home/ProfitExamplesSection';
import CustomerStatsSection from '@/components/home/CustomerStatsSection';
import AmbassadorSection from '@/components/home/AmbassadorSection';
import RevealOnScroll from '@/components/RevealOnScroll';
import { HERO, CONTACT } from '@/content/faujiFinanceContent';

const heroSlides = [
  {
    image: 'assets/generated/hero-slide-1.dim_1920x750.png',
    title: 'Fauji Finance',
    subtitle: 'Vishwas aur Anushasan ke Saath',
    description: 'Your trusted partner for Committee, Saving, and Byaj services',
  },
  {
    image: 'assets/generated/hero-slide-2.dim_1920x750.png',
    title: 'Military Discipline',
    subtitle: '25+ Years of Experience',
    description: 'Built on the foundation of trust and transparency',
  },
  {
    image: 'assets/generated/hero-slide-3.dim_1920x750.png',
    title: 'Now Online Available',
    subtitle: 'Ab Ghar Baithe Seva',
    description: 'Connect with us anytime via WhatsApp or call',
  },
];

export default function HomePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Carousel Section */}
      <section className="relative">
        <HeroCarousel slides={heroSlides} autoAdvanceInterval={6000} />
        
        {/* CTA Buttons Overlay - Improved positioning */}
        <div className="absolute bottom-24 md:bottom-32 left-0 right-0 z-30 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-fauji-green hover:bg-fauji-green/90 text-white font-bold text-lg h-16 px-8 shadow-2xl hover:shadow-fauji-green/50 transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100 animate-glow motion-reduce:animate-none"
                  >
                    <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center justify-center gap-3">
                      <Phone className="h-6 w-6" />
                      <span>Call Now: {CONTACT.phones.rajvir}</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg h-16 px-8 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100"
                  >
                    <a
                      href={`https://wa.me/91${CONTACT.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <SiWhatsapp className="h-6 w-6" />
                      <span>WhatsApp: {CONTACT.whatsapp}</span>
                    </a>
                  </Button>
                </div>
                <p className="text-center text-white text-lg font-medium drop-shadow-lg">
                  {HERO.availability}
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <InteractiveServicesSection />

      {/* Profit Examples Section */}
      <ProfitExamplesSection />

      {/* Customer Stats & Testimonials Section */}
      <CustomerStatsSection />

      {/* Ambassador/Trust Section */}
      <AmbassadorSection />
    </div>
  );
}
