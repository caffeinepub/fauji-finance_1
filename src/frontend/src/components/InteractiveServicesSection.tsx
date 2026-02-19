import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { publicAssetUrl } from '../utils/publicAssetUrl';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    title: 'Committee Plans',
    description: 'Join our trusted committee system for disciplined savings and guaranteed returns',
    image: publicAssetUrl('/assets/generated/service-committee.dim_800x600.png'),
    link: '/calculator',
  },
  {
    title: 'Savings Accounts',
    description: 'Secure your money with high-interest savings plans tailored to your needs',
    image: publicAssetUrl('/assets/generated/service-saving.dim_800x600.png'),
    link: '/calculator',
  },
  {
    title: 'Interest Loans',
    description: 'Quick and transparent loan services with competitive interest rates',
    image: publicAssetUrl('/assets/generated/service-interest.dim_800x600.png'),
    link: 'https://wa.me/919876543210',
  },
];

export default function InteractiveServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your goals
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {service.link.startsWith('http') ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link to={service.link}>
                      <Button className="w-full group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
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
