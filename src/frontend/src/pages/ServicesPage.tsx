import { CheckCircle, FileText, Clock, Shield, Users, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import FaujiIcon from '@/components/FaujiIcon';
import { SERVICES, CONTACT } from '@/content/faujiFinanceContent';
import { publicAssetUrl } from '@/utils/publicAssetUrl';

const DOCUMENTS = [
  'Aadhaar Card (Identity proof)',
  'PAN Card (Tax identification)',
  'Address Proof (Bijli ka bill, Ration card, etc.)',
  'Bank Passbook or Cancelled Cheque',
  'Passport size photos (2-3)',
  'Income proof (optional, depends on service)',
];

const PROCESS_STEPS = [
  {
    title: 'Sampark Karein',
    description: 'Pehle humse call ya WhatsApp par baat karein. Hum aapki zaroorat samajhenge.',
  },
  {
    title: 'Documents Submit Karein',
    description: 'Zaruri documents laayein. Hum aapko guide karenge ki kya chahiye.',
  },
  {
    title: 'Verification',
    description: 'Hum aapke documents verify karenge. Yeh process simple aur fast hai.',
  },
  {
    title: 'Approval & Start',
    description: 'Sab kuch theek hone ke baad, aapki service turant shuru ho jayegi.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 33, 0.9), rgba(30, 41, 33, 0.9)), url(${publicAssetUrl('assets/generated/process-banner.dim_1600x500.png')})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-fauji-green/20 text-fauji-cream border-fauji-green/40 text-base px-4 py-2">
              <Smartphone className="h-4 w-4 mr-2 inline" />
              Ab Online Bhi Available
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hamari Seva</h1>
            <p className="text-2xl md:text-3xl text-fauji-cream mb-4">
              Aapki Zarooraton Ke Liye Har Tarah Ki Finance Services
            </p>
            <p className="text-xl text-fauji-cream/90">
              25+ saal ka anubhav aur fauji anushasan ke saath
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Hamari Seva"
            description="Har zaroorat ke liye finance solution"
          />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <Card key={index} className="border-fauji-green/30 bg-white shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <FaujiIcon 
                        variant={service.icon as 'shield' | 'flag' | 'handshake' | 'rupee'} 
                        className="w-12 h-12"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-fauji-dark mb-3">{service.title}</h3>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-fauji-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Quick Processing */}
      <section className="py-20 bg-fauji-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Required Documents */}
            <div>
              <SectionHeading
                title="Zaruri Documents"
                subtitle="Required Documents"
                align="left"
                description="Loan ke liye yeh documents chahiye"
              />
              <Card className="border-fauji-green/30 bg-white shadow-lg">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {DOCUMENTS.map((doc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FileText className="h-6 w-6 text-fauji-green flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Quick Processing */}
            <div>
              <SectionHeading
                title="Fast Processing"
                subtitle="Tezi Se Approval"
                align="left"
                description="Hamari process simple aur fast hai"
              />
              <div className="space-y-6">
                <Card className="border-fauji-green/30 bg-white shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Clock className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-fauji-dark text-lg mb-1">Quick Approval</p>
                      <p className="text-gray-700">Documents verify hone ke baad turant approval</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-fauji-green/30 bg-white shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Shield className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-fauji-dark text-lg mb-1">Safe & Secure</p>
                      <p className="text-gray-700">Aapki information puri tarah se safe hai</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-fauji-green/30 bg-white shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Users className="h-8 w-8 text-fauji-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-fauji-dark text-lg mb-1">Personal Support</p>
                      <p className="text-gray-700">Har step par hamari team aapke saath hai</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Hamara Process"
            subtitle="How It Works"
            description="Simple steps me loan approval tak"
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, index) => (
                <Card key={index} className="border-fauji-green/30 bg-white shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-fauji-green text-white flex items-center justify-center text-2xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-fauji-dark mb-2">{step.title}</h3>
                        <p className="text-lg text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fauji-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fauji-dark">
              Aaj Hi Sampark Karein
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-10">
              Hamari team aapki madad ke liye taiyaar hai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-fauji-green hover:bg-fauji-green/90 text-white font-bold text-lg h-16 px-8"
              >
                <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center justify-center gap-3">
                  <Shield className="h-6 w-6" />
                  <span>Call: {CONTACT.phones.rajvir}</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-fauji-green text-fauji-green hover:bg-fauji-green hover:text-white font-bold text-lg h-16 px-8"
              >
                <a href="/contact" className="flex items-center justify-center gap-3">
                  <Users className="h-6 w-6" />
                  <span>Contact Page</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
