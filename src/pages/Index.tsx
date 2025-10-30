import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <FeaturesSection />
        <SocialProof />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
