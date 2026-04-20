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

      {/* Two-column layout: fixed left sidebar + scrollable right content */}
      <div className="md:flex">
        {/* Left: fixed white sidebar */}
        <HeroSidebar />

        {/* Right: scrollable dark content column */}
        <main className="md:ml-[33vw] md:w-[calc(100%-33vw)] bg-[#0A0A0A] min-h-screen px-6 md:px-10">
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
