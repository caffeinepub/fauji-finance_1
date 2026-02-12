import { ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import ImageWithFallback from './ImageWithFallback';
import { publicAssetUrl } from '@/utils/publicAssetUrl';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import RevealOnScroll from './RevealOnScroll';
import { CONTACT } from '@/content/faujiFinanceContent';

interface ServiceCard {
  title: string;
  titleHindi: string;
  description: string;
  image: string;
  icon: string;
  ctaText: string;
  ctaLink: string;
  ctaType: 'internal' | 'whatsapp';
}

const services: ServiceCard[] = [
  {
    title: 'Committee',
    titleHindi: 'कमेटी',
    description: 'Join our trusted committee system - save regularly and get lump sum when you need it',
    image: 'assets/generated/service-committee.dim_800x600.png',
    icon: '👥',
    ctaText: 'View Services',
    ctaLink: '/services',
    ctaType: 'internal',
  },
  {
    title: 'Daily Saving',
    titleHindi: 'रोज़ाना बचत',
    description: 'Save small amounts daily and build a secure financial future with guaranteed returns',
    image: 'assets/generated/service-saving.dim_800x600.png',
    icon: '💰',
    ctaText: 'WhatsApp Now',
    ctaLink: `https://wa.me/91${CONTACT.whatsapp}?text=Hi, I want to know about Daily Saving scheme`,
    ctaType: 'whatsapp',
  },
  {
    title: 'Interest (Byaj)',
    titleHindi: 'ब्याज',
    description: 'Get competitive interest rates on your deposits - transparent and reliable',
    image: 'assets/generated/service-interest.dim_800x600.png',
    icon: '📈',
    ctaText: 'WhatsApp Now',
    ctaLink: `https://wa.me/91${CONTACT.whatsapp}?text=Hi, I want to know about Interest rates`,
    ctaType: 'whatsapp',
  },
];

/**
 * Interactive Services Section with 3 AI-illustrated service cards.
 * Features subtle animations, fully clickable cards, and clear CTAs.
 * Respects prefers-reduced-motion for accessibility.
 */
export default function InteractiveServicesSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-fauji-light/30 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${publicAssetUrl('assets/generated/premium-pattern.dim_1200x1200.png')})`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <SectionHeading
            title="Our Interactive Services"
            subtitle="Hamari Seva"
            description="Choose the service that fits your financial goals"
          />
        </RevealOnScroll>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <Card 
                className="group relative overflow-hidden border-fauji-green/30 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 motion-reduce:hover:translate-y-0 h-full"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Image Section with Icon Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={publicAssetUrl(service.image)}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-fauji-dark/60 to-transparent" />
                    
                    {/* Animated icon badge */}
                    <div 
                      className={`absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg ${
                        !prefersReducedMotion ? 'animate-pulse-subtle' : ''
                      }`}
                    >
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-fauji-dark mb-1">
                        {service.title}
                      </h3>
                      <p className="text-fauji-green font-semibold text-lg">
                        {service.titleHindi}
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-6 flex-1 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      asChild
                      size="lg"
                      className={`w-full font-bold transition-all duration-300 ${
                        service.ctaType === 'whatsapp'
                          ? 'bg-[#25D366] hover:bg-[#20BA5A] text-white'
                          : 'bg-fauji-green hover:bg-fauji-green/90 text-white'
                      } group-hover:shadow-lg`}
                    >
                      {service.ctaType === 'internal' ? (
                        <a href={service.ctaLink} className="flex items-center justify-center gap-2">
                          <span>{service.ctaText}</span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
                        </a>
                      ) : (
                        <a
                          href={service.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <SiWhatsapp className="h-5 w-5" />
                          <span>{service.ctaText}</span>
                        </a>
                      )}
                    </Button>
                  </div>

                  {/* Decorative shimmer effect on hover */}
                  {!prefersReducedMotion && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  )}
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
