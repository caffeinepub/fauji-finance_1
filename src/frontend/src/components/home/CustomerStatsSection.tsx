import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { CUSTOMER_STATS } from '@/content/faujiFinanceContent';

export default function CustomerStatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-fauji-light/50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-fauji-green rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-fauji-gold rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-fauji-teal rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <SectionHeading
            title={CUSTOMER_STATS.title}
            subtitle={CUSTOMER_STATS.subtitle}
            description={CUSTOMER_STATS.description}
          />
        </RevealOnScroll>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {CUSTOMER_STATS.stats.map((stat, index) => (
            <RevealOnScroll key={index} delay={index * 75}>
              <Card className="group border-2 border-fauji-green/20 bg-white hover:border-fauji-green hover:shadow-xl transition-all duration-500 hover:-translate-y-2 motion-reduce:hover:translate-y-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 animate-pulse-subtle motion-reduce:animate-none">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-fauji-green mb-2 group-hover:scale-110 transition-transform duration-300 motion-reduce:group-hover:scale-100">
                    {stat.number}
                  </div>
                  <div className="font-bold text-fauji-dark mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.sublabel}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        {/* Testimonials */}
        <RevealOnScroll delay={300}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-fauji-dark mb-8">
              What Our Customers Say
              <span className="block text-lg text-fauji-green mt-2">Hamare Grahak Kya Kehte Hain</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CUSTOMER_STATS.testimonials.map((testimonial, index) => (
                <RevealOnScroll key={index} delay={350 + index * 100}>
                  <Card className="group border-fauji-green/30 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 motion-reduce:hover:translate-y-0 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Quote icon */}
                      <Quote className="h-10 w-10 text-fauji-green/30 mb-4" />
                      
                      {/* Testimonial text */}
                      <p className="text-gray-700 italic mb-6 flex-1 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-fauji-gold text-fauji-gold" />
                        ))}
                      </div>
                      
                      {/* Author */}
                      <div className="border-t border-fauji-green/20 pt-4">
                        <p className="font-bold text-fauji-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
