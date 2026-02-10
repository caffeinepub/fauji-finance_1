import { Phone, CheckCircle, Clock, MapPin, Shield, FileText, Users, Smartphone, ExternalLink } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import ImageWithFallback from '@/components/ImageWithFallback';
import { HERO, ABOUT, WHY_CHOOSE, CONTACT, REPRESENTATIVES } from '@/content/faujiFinanceContent';
import { getGoogleMapsUrl, getGoogleMapsEmbedUrl } from '@/utils/googleMaps';
import { publicAssetUrl } from '@/utils/publicAssetUrl';

export default function HomePage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 33, 0.85), rgba(30, 41, 33, 0.85)), url(${publicAssetUrl('assets/generated/fauji-hero-banner.dim_1920x900.png')})`,
        }}
      >
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-fauji-green/20 text-fauji-cream border-fauji-green/40 text-base px-4 py-2">
              <Smartphone className="h-4 w-4 mr-2 inline" />
              {HERO.onlineAvailability}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{HERO.title}</h1>
            <p className="text-2xl md:text-3xl text-fauji-cream mb-6">{HERO.subtitle}</p>
            <p className="text-xl md:text-2xl mb-4">{HERO.description}</p>
            <p className="text-lg md:text-xl text-fauji-cream/90 mb-10">{HERO.tagline}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-fauji-green hover:bg-fauji-green/90 text-white font-bold text-lg h-16 px-8"
              >
                <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center justify-center gap-3">
                  <Phone className="h-6 w-6" />
                  <span>Call Now: {CONTACT.phones.rajvir}</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg h-16 px-8"
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

            <p className="text-fauji-cream/80 font-medium text-lg">{HERO.availability}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={ABOUT.title}
            description="Vishwas aur anubhav ke saath"
          />
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-fauji-green/30 bg-white shadow-lg">
              <CardContent className="p-8 md:p-10 space-y-6 text-lg leading-relaxed">
                <p>{ABOUT.intro}</p>
                <p>{ABOUT.founder}</p>
                <p className="font-semibold text-fauji-green text-xl">{ABOUT.discipline}</p>
                <div className="bg-fauji-light/50 p-6 rounded-lg border-l-4 border-fauji-green">
                  <div className="flex items-start gap-3 mb-2">
                    <Smartphone className="h-6 w-6 text-fauji-green flex-shrink-0 mt-1" />
                    <p className="font-semibold text-fauji-dark text-xl">Ab Online Bhi Available!</p>
                  </div>
                  <p className="ml-9">{ABOUT.modernization}</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-fauji-light p-8 rounded-lg">
              <p className="font-bold mb-4 text-fauji-dark text-xl">Hamari Priority Hai:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ABOUT.priorities.map((priority, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-fauji-green flex-shrink-0" />
                    <span className="text-lg font-medium">{priority}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representatives Section */}
      <section className="py-16 bg-fauji-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Team Representatives"
            subtitle="Hamari Team"
            description="Aapki seva me haazir – anubhav aur vishwas ke saath"
          />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REPRESENTATIVES.map((rep, index) => (
              <Card key={index} className="border-fauji-green/30 bg-white shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-fauji-green shadow-lg">
                      <ImageWithFallback
                        src={publicAssetUrl(rep.photoPath)}
                        alt={rep.name}
                        className="w-full h-full object-cover"
                        fallbackClassName="w-32 h-32 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-fauji-dark mb-1">{rep.name}</h3>
                      <p className="text-fauji-green font-semibold mb-3">{rep.role}</p>
                      <p className="text-gray-700 mb-4">{rep.description}</p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold w-full"
                    >
                      <a
                        href={`https://wa.me/91${rep.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <SiWhatsapp className="h-5 w-5" />
                        <span>WhatsApp: {rep.phone}</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Values Section with Illustration */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${publicAssetUrl('assets/generated/camo-pattern.dim_1200x1200.png')})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  title="Trust & Transparency"
                  subtitle="Vishwas"
                  align="left"
                  description="At Fauji Finance, every transaction is clear and documented. We believe trust is the foundation of business."
                />
                <div className="space-y-6">
                  <Card className="border-fauji-green/30 bg-white shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Shield className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-fauji-dark text-lg mb-1">100% Safe & Secure</p>
                        <p className="text-gray-700">Your money is completely safe with us</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-fauji-green/30 bg-white shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-fauji-dark text-lg mb-1">Clear Documentation</p>
                        <p className="text-gray-700">Every detail is properly recorded and maintained</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-fauji-green/30 bg-white shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Users className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-fauji-dark text-lg mb-1">Personal Attention</p>
                        <p className="text-gray-700">Dedicated support for every customer</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={publicAssetUrl('assets/generated/trust-illustration-2.dim_1200x800.png')}
                  alt="Trust and transparency illustration"
                  className="w-full max-w-lg rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record Keeping & Discipline Section */}
      <section className="py-20 bg-fauji-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={publicAssetUrl('assets/generated/records-illustration.dim_1600x900.png')}
                  alt="Record keeping and documentation"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <SectionHeading
                  title="Military Discipline in Record Keeping"
                  subtitle="Anushasan"
                  align="left"
                  description="With over 25 years of experience and military discipline, we maintain meticulous records of every transaction."
                />
                <div className="space-y-6">
                  <Card className="border-fauji-green/30 bg-white shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <FileText className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-fauji-dark text-lg mb-1">Detailed Documentation</p>
                        <p className="text-gray-700">Every payment, installment, and transaction is recorded with precision</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-fauji-green/30 bg-white shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Users className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-fauji-dark text-lg mb-1">Customer-First Approach</p>
                        <p className="text-gray-700">We explain everything in simple language so everyone can understand</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-fauji-green/30 bg-white shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Shield className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-fauji-dark text-lg mb-1">Long-term Commitment</p>
                        <p className="text-gray-700">Building relationships that last for years, not just transactions</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kyon Chune Fauji Finance?"
            subtitle="Hamari Khasiyat"
            description="Yeh wajahein hain jo humein alag banati hain"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {WHY_CHOOSE.map((reason, index) => (
              <Card key={index} className="border-fauji-green/30 bg-white hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle className="h-7 w-7 text-fauji-green flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-fauji-dark">{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Timing Section */}
      <section className="py-20 bg-fauji-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Hamare Paas Aaiye"
            subtitle="Location"
            description="Hum aapka intezaar kar rahe hain"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-fauji-green/30 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="h-8 w-8 text-fauji-green flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-fauji-dark">Address</h3>
                    <p className="text-lg leading-relaxed mb-4">{CONTACT.address.full}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-fauji-green text-fauji-green hover:bg-fauji-green hover:text-white"
                    >
                      <a
                        href={getGoogleMapsUrl(CONTACT.address.full)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Open in Google Maps</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-fauji-green/30 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-fauji-green flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-fauji-dark">Timing</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-fauji-green" />
                        <p className="text-lg font-semibold">{CONTACT.timing.days}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-fauji-green" />
                        <p className="text-lg">{CONTACT.timing.hours}</p>
                      </div>
                      <Separator className="my-3" />
                      <p className="text-gray-600 italic">Available for consultation anytime</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div className="max-w-5xl mx-auto mt-8">
            <Card className="border-fauji-green/30 bg-white shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src={getGoogleMapsEmbedUrl(CONTACT.address.full)}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fauji Finance Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Summary Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Sampark Karein"
            subtitle="Contact Us"
            description="Hum aapki madad ke liye taiyaar hain"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="border-fauji-green/30 bg-white shadow-xl">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-fauji-dark flex items-center gap-2">
                        <Phone className="h-6 w-6 text-fauji-green" />
                        Phone Numbers
                      </h3>
                      <div className="space-y-2 ml-8">
                        <p className="text-lg">
                          <span className="font-semibold">Rajvir:</span>{' '}
                          <a href={`tel:${CONTACT.phones.rajvir}`} className="text-fauji-green hover:underline">
                            {CONTACT.phones.rajvir}
                          </a>
                        </p>
                        <p className="text-lg">
                          <span className="font-semibold">Mohit:</span>{' '}
                          <a href={`tel:${CONTACT.phones.mohit}`} className="text-fauji-green hover:underline">
                            {CONTACT.phones.mohit}
                          </a>
                        </p>
                        <p className="text-lg">
                          <span className="font-semibold">Shekhar:</span>{' '}
                          <a href={`tel:${CONTACT.phones.shekhar}`} className="text-fauji-green hover:underline">
                            {CONTACT.phones.shekhar}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-fauji-dark flex items-center gap-2">
                        <SiWhatsapp className="h-6 w-6 text-[#25D366]" />
                        WhatsApp
                      </h3>
                      <div className="ml-8">
                        <Button
                          asChild
                          size="lg"
                          className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold w-full"
                        >
                          <a
                            href={`https://wa.me/91${CONTACT.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <SiWhatsapp className="h-5 w-5" />
                            <span>{CONTACT.whatsapp}</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
