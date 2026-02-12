import { CheckCircle, FileText, Clock, Shield, Users, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import FaujiIcon from '@/components/FaujiIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import { publicAssetUrl } from '@/utils/publicAssetUrl';
import { CONTACT } from '@/content/faujiFinanceContent';

const SERVICES = [
  {
    icon: 'handshake' as const,
    title: 'Committee (Chit Fund)',
    titleHindi: 'कमेटी',
    description: 'Join our trusted committee system where members contribute regularly and receive lump sum amounts in rotation.',
    features: [
      'Fixed monthly contributions',
      'Transparent bidding process',
      'Flexible tenure options',
      'Regular meetings and updates',
      'Safe and documented',
    ],
  },
  {
    icon: 'rupee' as const,
    title: 'Daily Saving Scheme',
    titleHindi: 'रोज़ाना बचत योजना',
    description: 'Save small amounts daily and build a secure financial future. Perfect for disciplined savings.',
    features: [
      'Daily collection from your doorstep',
      'Flexible saving amounts',
      'Guaranteed returns',
      'No hidden charges',
      'Easy withdrawal process',
    ],
  },
  {
    icon: 'shield' as const,
    title: 'Interest (Byaj)',
    titleHindi: 'ब्याज',
    description: 'Get competitive interest rates on your deposits. Your money grows safely with us.',
    features: [
      'Competitive interest rates',
      'Transparent calculations',
      'Flexible deposit periods',
      'Regular interest payouts',
      'Secure investments',
    ],
  },
];

const DOCUMENTS = [
  'Aadhaar Card (आधार कार्ड)',
  'PAN Card (पैन कार्ड)',
  'Address Proof (पते का प्रमाण)',
  'Passport Size Photos (पासपोर्ट साइज़ फोटो)',
  'Bank Account Details (बैंक खाता विवरण)',
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Contact Us',
    description: 'Call or WhatsApp us to discuss your requirements',
  },
  {
    step: 2,
    title: 'Submit Documents',
    description: 'Provide necessary documents for verification',
  },
  {
    step: 3,
    title: 'Agreement',
    description: 'Sign the agreement with clear terms and conditions',
  },
  {
    step: 4,
    title: 'Start Service',
    description: 'Begin your financial journey with us',
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section with AI-generated visual */}
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 33, 0.85), rgba(30, 41, 33, 0.85)), url(${publicAssetUrl('assets/generated/hero-slide-2.dim_1920x750.png')})`,
        }}
      >
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-fauji-green/20 text-fauji-cream border-fauji-green/40 text-base px-4 py-2">
                <Shield className="h-4 w-4 mr-2 inline" />
                Trusted Services Since 1999
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl text-fauji-cream mb-4">
                Hamari Seva - Committee, Saving, aur Byaj
              </p>
              <p className="text-lg">
                Transparent, reliable, and customer-focused financial services
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <SectionHeading
              title="What We Offer"
              subtitle="Hamari Seva"
              description="Choose the service that best fits your financial needs"
            />
          </RevealOnScroll>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <Card className="border-fauji-green/30 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 motion-reduce:hover:translate-y-0 h-full group">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-fauji-light flex items-center justify-center group-hover:bg-fauji-green/10 transition-colors duration-300">
                        <FaujiIcon variant={service.icon} className="w-12 h-12" />
                      </div>
                    </div>
                    <CardTitle className="text-center">
                      <h3 className="text-2xl font-bold text-fauji-dark mb-1">{service.title}</h3>
                      <p className="text-fauji-green font-semibold text-lg">{service.titleHindi}</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-fauji-green flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Visual Band */}
      <section className="py-16 bg-fauji-light">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-fauji-dark mb-4">
                    Why Choose Our Services?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    With 25+ years of experience and military discipline, we provide services you can trust.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-fauji-green hover:bg-fauji-green/90 text-white font-bold w-full sm:w-auto"
                  >
                    <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <img
                    src={publicAssetUrl('assets/generated/service-committee.dim_800x600.png')}
                    alt="Our trusted services"
                    className="w-full rounded-xl shadow-2xl hover:shadow-fauji-green/20 transition-shadow duration-500"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${publicAssetUrl('assets/generated/process-banner.dim_1600x500.png')})`,
        }}
      >
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <SectionHeading
              title="How It Works"
              subtitle="Process"
              description="Simple steps to get started with our services"
            />
          </RevealOnScroll>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <Card className="border-fauji-green/30 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-fauji-green text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-fauji-dark mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <SectionHeading
              title="Required Documents"
              subtitle="Zaruri Kagzaat"
              description="Please keep these documents ready"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="max-w-3xl mx-auto">
              <Card className="border-fauji-green/30 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DOCUMENTS.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-fauji-light rounded-lg hover:bg-fauji-light/70 transition-colors duration-300"
                      >
                        <FileText className="h-6 w-6 text-fauji-green flex-shrink-0" />
                        <span className="font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fauji-light">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-fauji-dark mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Contact us today to discuss your financial needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-fauji-green hover:bg-fauji-green/90 text-white font-bold text-lg h-16 px-8 shadow-xl hover:shadow-fauji-green/50 transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100"
                >
                  <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6" />
                    <span>Call: {CONTACT.phones.rajvir}</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg h-16 px-8 shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100"
                >
                  <a
                    href={`https://wa.me/91${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <SiWhatsapp className="h-6 w-6" />
                    <span>WhatsApp Us</span>
                  </a>
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
