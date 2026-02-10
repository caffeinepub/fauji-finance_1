import { Phone, MapPin, Clock, Mail, CheckCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import ImageWithFallback from '@/components/ImageWithFallback';
import { CONTACT, REPRESENTATIVES } from '@/content/faujiFinanceContent';
import { getGoogleMapsUrl, getGoogleMapsEmbedUrl } from '@/utils/googleMaps';
import { publicAssetUrl } from '@/utils/publicAssetUrl';

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fauji-dark to-fauji-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sampark Karein</h1>
            <p className="text-2xl md:text-3xl text-fauji-cream mb-4">
              Hum Aapki Madad Ke Liye Taiyaar Hain
            </p>
            <Badge className="bg-fauji-cream/20 text-white border-fauji-cream/40 text-base px-4 py-2">
              Available for consultation anytime
            </Badge>
          </div>
        </div>
      </section>

      {/* Primary Contact Actions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-fauji-green/30 bg-white shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8 text-center">
                  <Phone className="h-16 w-16 text-fauji-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-fauji-dark mb-3">Call Us Now</h3>
                  <p className="text-gray-700 mb-6">Turant baat karne ke liye call karein</p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-fauji-green hover:bg-fauji-green/90 text-white font-bold w-full"
                  >
                    <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      <span>{CONTACT.phones.rajvir}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#25D366]/30 bg-white shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8 text-center">
                  <SiWhatsapp className="h-16 w-16 text-[#25D366] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-fauji-dark mb-3">WhatsApp Us</h3>
                  <p className="text-gray-700 mb-6">Message karein aur jaldi response paayein</p>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contact Cards */}
      <section className="py-20 bg-fauji-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Team"
            subtitle="Hamari Team"
            description="Aapki seva me haazir – har member se seedha sampark karein"
          />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REPRESENTATIVES.map((member, index) => (
              <Card key={index} className="border-fauji-green/30 bg-white shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-fauji-green shadow-lg">
                      <ImageWithFallback
                        src={publicAssetUrl(member.photoPath)}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        fallbackClassName="w-32 h-32 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-fauji-dark mb-1">{member.name}</h3>
                      <p className="text-fauji-green font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-700 mb-4">{member.description}</p>
                    </div>
                    <div className="w-full space-y-3">
                      <Button
                        asChild
                        size="lg"
                        className="bg-fauji-green hover:bg-fauji-green/90 text-white font-bold w-full"
                      >
                        <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2">
                          <Phone className="h-5 w-5" />
                          <span>{member.phone}</span>
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold w-full"
                      >
                        <a
                          href={`https://wa.me/91${member.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <SiWhatsapp className="h-5 w-5" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Timing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Hamare Paas Aaiye"
            subtitle="Visit Us"
            description="Hum aapka intezaar kar rahe hain"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-fauji-green/30 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
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
                        <MapPin className="h-4 w-4" />
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
                    <h3 className="text-2xl font-bold mb-3 text-fauji-dark">Business Hours</h3>
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
          <div className="max-w-5xl mx-auto">
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
    </div>
  );
}
