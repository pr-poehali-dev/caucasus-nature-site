import HeroSection from "@/components/HeroSection";
import AboutNature from "@/components/AboutNature";
import AttractionsGallery from "@/components/AttractionsGallery";
import FloraFauna from "@/components/FloraFauna";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutNature />
      <AttractionsGallery />
      <FloraFauna />
    </div>
  );
};

export default Index;
