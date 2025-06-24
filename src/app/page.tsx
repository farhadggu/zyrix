import CommunitySection from "@/components/CommunitySection";
import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="container mx-auto mt-12 lg:mt-[100px] max-lg:px-2">
        <h2 className="text-neutral-title text-3xl lg:text-[40px] font-medium mb-8">
          <span className="text-primary">Powering </span>Your Crypto Journey
        </h2>

        <FeatureSection />

        <MarketSection />

        <CommunitySection />

        <FaqSection />
      </div>
    </div>
  );
}
