import { Users, Shield, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import RevealOnScroll from '../RevealOnScroll';

const stats = [
  {
    icon: Shield,
    value: '15+',
    label: 'Years of Trust',
  },
  {
    icon: Users,
    value: '5000+',
    label: 'Happy Customers',
  },
  {
    icon: Star,
    value: '100%',
    label: 'Satisfaction',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'Fauji Finance has been managing my savings for 5 years. Their committee system is transparent and reliable.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Teacher',
    content: 'I trust them completely with my family\'s savings. The returns are excellent and service is professional.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    role: 'Engineer',
    content: 'Best financial service in the area. They helped me save for my daughter\'s education with great returns.',
    rating: 5,
  },
];

export default function CustomerStatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-fauji-light via-background to-fauji-cream/30">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 bg-gradient-to-br from-white to-fauji-light/20">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</p>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Testimonials */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real people who trust us with their finances
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 bg-gradient-to-br from-white to-fauji-cream/20">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-fauji-gold text-fauji-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
