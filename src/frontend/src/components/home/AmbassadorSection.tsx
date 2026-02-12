import { Users, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ImageWithFallback from '@/components/ImageWithFallback';
import RevealOnScroll from '@/components/RevealOnScroll';
import { AMBASSADORS, CONTACT } from '@/content/faujiFinanceContent';
import { publicAssetUrl } from '@/utils/publicAssetUrl';
import { SiWhatsapp } from 'react-icons/si';

export default function AmbassadorSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-fauji-dark via-fauji-green to-fauji-teal text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-fauji-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {AMBASSADORS.title}
            </h2>
            <p className="text-2xl text-fauji-cream mb-3">
              {AMBASSADORS.subtitle}
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {AMBASSADORS.description}
            </p>
          </div>
        </RevealOnScroll>

        {/* Main banner image */}
        <RevealOnScroll delay={100}>
          <div className="max-w-6xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={publicAssetUrl(AMBASSADORS.bannerImage)}
              alt="Trusted by thousands of customers"
              className="w-full h-auto"
            />
          </div>
        </RevealOnScroll>

        {/* Portrait grid with trust indicators */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {AMBASSADORS.portraits.map((portrait, index) => (
            <RevealOnScroll key={index} delay={200 + index * 100}>
              <Card className="group border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 motion-reduce:hover:translate-y-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={publicAssetUrl(portrait.image)}
                      alt={portrait.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                    />
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        {/* Trust indicators */}
        <RevealOnScroll delay={400}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Users className="h-12 w-12 text-fauji-gold flex-shrink-0" />
              <div>
                <p className="font-bold text-xl">500+ Families</p>
                <p className="text-white/80 text-sm">Trust us daily</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Shield className="h-12 w-12 text-fauji-gold flex-shrink-0" />
              <div>
                <p className="font-bold text-xl">100% Secure</p>
                <p className="text-white/80 text-sm">Money guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <TrendingUp className="h-12 w-12 text-fauji-gold flex-shrink-0" />
              <div>
                <p className="font-bold text-xl">25+ Years</p>
                <p className="text-white/80 text-sm">Proven track record</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll delay={500}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-3">
              {AMBASSADORS.cta.text}
            </h3>
            <p className="text-xl text-fauji-cream mb-8">
              {AMBASSADORS.cta.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-fauji-green hover:bg-fauji-cream font-bold text-lg h-16 px-10 shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100"
              >
                <a
                  href={`https://wa.me/91${CONTACT.whatsapp}?text=Hi, I want to start my financial journey with Fauji Finance`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <SiWhatsapp className="h-6 w-6" />
                  <span>Connect on WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
