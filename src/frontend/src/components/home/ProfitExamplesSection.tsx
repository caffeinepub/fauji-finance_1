import { TrendingUp, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { PROFIT_EXAMPLES, CONTACT } from '@/content/faujiFinanceContent';
import { SiWhatsapp } from 'react-icons/si';

export default function ProfitExamplesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-fauji-light via-background to-fauji-cream/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fauji-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fauji-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <SectionHeading
            title={PROFIT_EXAMPLES.title}
            subtitle={PROFIT_EXAMPLES.subtitle}
            description={PROFIT_EXAMPLES.description}
          />
        </RevealOnScroll>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {PROFIT_EXAMPLES.examples.map((example, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <Card className="group relative overflow-hidden border-2 border-fauji-green/20 bg-white hover:border-fauji-green/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 motion-reduce:hover:translate-y-0 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Icon badge */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="text-5xl animate-bounce-subtle motion-reduce:animate-none">
                      {example.icon}
                    </div>
                    <Badge className="bg-fauji-gold text-fauji-dark font-bold">
                      {example.highlight}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-fauji-dark mb-4 group-hover:text-fauji-green transition-colors duration-300">
                    {example.title}
                  </h3>

                  {/* Amount highlight */}
                  <div className="mb-6 p-4 bg-gradient-to-br from-fauji-green/10 to-fauji-teal/10 rounded-lg border-l-4 border-fauji-green">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-fauji-green" />
                      <span className="text-3xl font-bold text-fauji-green">
                        {example.amount}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-fauji-dark/70">
                      <Clock className="h-4 w-4" />
                      <span>{example.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed flex-1">
                    {example.description}
                  </p>

                  {/* Savings highlight */}
                  <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg mb-6">
                    <Target className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="font-bold text-success">{example.saving}</span>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full bg-fauji-green hover:bg-fauji-green/90 text-white font-bold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-fauji-green/30"
                  >
                    <a
                      href={`https://wa.me/91${CONTACT.whatsapp}?text=Hi, I want to know about ${example.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <SiWhatsapp className="h-5 w-5" />
                      <span>Get Started</span>
                    </a>
                  </Button>
                </CardContent>

                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-fauji-green/0 via-fauji-green/0 to-fauji-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
