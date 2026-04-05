import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PremiumTrustSection from "@/components/PremiumTrustSection";
import PremiumFeaturesShowcase from "@/components/PremiumFeaturesShowcase";
import PremiumLearningJourney from "@/components/PremiumLearningJourney";
import Testimonials from "@/components/Testimonials";
import PremiumNewsletterSignup from "@/components/PremiumNewsletterSignup";
import PremiumCTASection from "@/components/PremiumCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PremiumTrustSection />
        <PremiumFeaturesShowcase />
        <PremiumLearningJourney />
        <Testimonials />
        <PremiumNewsletterSignup />
        <PremiumCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
