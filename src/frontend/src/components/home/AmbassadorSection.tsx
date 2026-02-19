import { Shield, Users, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { publicAssetUrl } from '../../utils/publicAssetUrl';
import RevealOnScroll from '../RevealOnScroll';

const ambassadors = [
  {
    name: 'Mohit Yadav',
    image: publicAssetUrl('/assets/gallery/mohit.jpeg'),
  },
  {
    name: 'Rajvir Singh Yadav',
    image: publicAssetUrl('/assets/gallery/rajvirsinghyadav.jpeg'),
  },
  {
    name: 'Shekhar Yadav',
    image: publicAssetUrl('/assets/gallery/shekhar.jpeg'),
  },
];

const trustIndicators = [
  {
    icon: Shield,
    text: 'Verified & Trusted',
  },
  {
    icon: Users,
    text: 'Community Leaders',
  },
  {
    icon: TrendingUp,
    text: 'Proven Track Record',
  },
];

export default function AmbassadorSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Trusted by Community Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the people who have built their success with Fauji Finance
            </p>
          </div>
        </RevealOnScroll>

        {/* Banner Image */}
        <RevealOnScroll>
          <div className="relative rounded-2xl overflow-hidden mb-12 max-w-4xl mx-auto">
            <img
              src={publicAssetUrl('/assets/generated/celebrity-banner.dim_1920x800.png')}
              alt="Community Leaders"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Join Our Success Story
              </h3>
              <p className="text-white/90 text-lg">
                Building wealth together, one investment at a time
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Ambassador Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-4xl mx-auto">
          {ambassadors.map((ambassador, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={ambassador.image}
                    alt={ambassador.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-semibold text-lg">{ambassador.name}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Trust Indicators */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div key={index} className="flex items-center gap-3 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{indicator.text}</span>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll>
          <div className="text-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Start Your Journey Today
              </Button>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
