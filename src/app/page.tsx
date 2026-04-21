import { Navbar } from "@/components/Navbar";
import { HeroSidebar } from "@/components/HeroSidebar";
import { LatestPortfolio } from "@/components/LatestPortfolio";
import { FeaturedPortfolio } from "@/components/FeaturedPortfolio";
import { ServicesSection } from "@/components/ServicesSection";
import { StickyScrollSection } from "@/components/StickyScrollSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BrandingGallery } from "@/components/BrandingGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFAB />

      {/* Mobile: pinned hero with content sliding up. Desktop: two-column layout. */}
      <div className="md:flex">
        {/* Left: hero/pinned sidebar */}
        <HeroSidebar />

        {/* Right: content layer that rises over the pinned hero on mobile */}
        <main className="relative z-20 -mt-10 rounded-t-[28px] border-t border-[#AEC5DD] bg-[#d5dfea]/95 backdrop-blur-sm min-h-screen px-6 md:px-10 md:mt-0 md:rounded-none md:border-0 md:bg-transparent md:backdrop-blur-none md:ml-[33vw] md:w-[calc(100%-33vw)]">
          <LatestPortfolio />
          <FeaturedPortfolio />
          <ServicesSection />
          <StickyScrollSection />
          <HowItWorksSection />
          <BrandingGallery />
          <TestimonialsSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
