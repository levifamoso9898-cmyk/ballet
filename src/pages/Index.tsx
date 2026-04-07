import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import ProblemaSection from "@/components/ProblemaSection";
import BenefitsSection from "@/components/BenefitsSection";
import ForYouSection from "@/components/ForYouSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <HeroSection />
      <ProblemaSection />
      <BenefitsSection />
      <ForYouSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <CtaFinalSection />
      <FooterSection />
    </div>
  );
};

export default Index;
