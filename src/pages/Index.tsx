import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
