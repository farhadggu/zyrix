import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="container mx-auto mt-[100px]">
        <h2 className="text-neutral-title text-[40px] font-medium mb-8">
          <span className="text-primary">Powering </span>Your Crypto Journey
        </h2>

        <FeatureSection />

        <MarketSection />
      </div>
    </div>
  );
}
