import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/content/faujiFinanceContent';

export default function StickyContactBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-fauji-green shadow-2xl safe-area-inset-bottom">
      <div className="grid grid-cols-2 gap-0">
        <Button
          asChild
          size="lg"
          className="rounded-none bg-fauji-green hover:bg-fauji-green/90 text-white font-bold h-16 border-r border-white"
        >
          <a href={`tel:${CONTACT.phones.rajvir}`} className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="rounded-none bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold h-16"
        >
          <a
            href={`https://wa.me/91${CONTACT.whatsapp}`}
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
  );
}
