import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Portfolio — Good.code",
  description:
    "Lihat hasil kerja Good.code: website premium untuk berbagai bisnis, dari logistik, properti, hingga fashion. Desain profesional, performa tinggi.",
};

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <WhatsAppFAB />

      {/* Mobile: pinned hero with content sliding up. Desktop: two-column layout. */}
      <div className="md:flex">
        {/* Left: hero/pinned sidebar */}
        <HeroSidebar />

        {/* Right: content layer that rises over the pinned hero on mobile */}
        <main className="relative z-20 -mt-10 rounded-t-[28px] border-t md:border-0 min-h-screen px-6 md:px-10 md:mt-0 md:rounded-none md:bg-transparent md:ml-[33vw] md:w-[calc(100%-33vw)]" style={{ borderColor: "#DCC58F", background: "rgba(242,246,208,0.95)", backdropFilter: "blur(4px)" }}>
          <LatestPortfolio />
          <FeaturedPortfolio />
          <ServicesSection />
          {/* <StickyScrollSection /> */}
          <HowItWorksSection />
          <BrandingGallery />
          <TestimonialsSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
