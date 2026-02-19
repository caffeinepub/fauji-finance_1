import HeroCarousel from '../components/HeroCarousel';
import InteractiveServicesSection from '../components/InteractiveServicesSection';
import ProfitExamplesSection from '../components/home/ProfitExamplesSection';
import CustomerStatsSection from '../components/home/CustomerStatsSection';
import AmbassadorSection from '../components/home/AmbassadorSection';
import AddressMapSection from '../components/AddressMapSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Interactive Services Section */}
      <InteractiveServicesSection />

      {/* Profit Examples Section */}
      <ProfitExamplesSection />

      {/* Customer Stats & Testimonials */}
      <CustomerStatsSection />

      {/* Ambassador Trust Section */}
      <AmbassadorSection />

      {/* Address Map Section */}
      <AddressMapSection />
    </div>
  );
}
