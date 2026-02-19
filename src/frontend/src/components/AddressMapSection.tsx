import { MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { Card, CardContent } from './ui/card';

export default function AddressMapSection() {
  // Fauji Finance address
  const address = "Fauji Finance, Sector 12, Noida, Uttar Pradesh";
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-fauji-teal/10 via-background to-fauji-blue/10">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Visit Us
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Come meet us at our office for personalized financial guidance
            </p>
            <p className="text-base font-medium text-foreground">
              {address}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <Card className="overflow-hidden border-2 shadow-xl max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fauji Finance Location"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Click and drag to explore the map • Zoom in/out for better view
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
