import Image from "next/image";
import Button from "./Shared/Button";
import AnimateButton from "./Shared/AnimateButton";

const HeroSection = () => {
  return (
    <div className="relative size-full">
      <div className="flex items-center container mx-auto !h-[706px]">
        <div className="w-full mt-[100px]">
          <h1 className="text-neutral-title font-semibold">
            Trade, Invest, and Build Your <span className="text-primary">Future</span>!
          </h1>

          <div className="flex items-center gap-x-4 mt-4">
            <span className="text-neutral-sec-tx text-[24px]">Safe</span>
            <span className="text-neutral-sec-tx text-[24px]">Fast</span>
            <span className="text-neutral-sec-tx text-[24px]">Stable</span>
            <span className="text-neutral-sec-tx text-[24px]">Reliable</span>
          </div>

          <AnimateButton>Start Trading</AnimateButton>
        </div>

        <div className="flex items-center size-full">
          <img className="rotate-animate absolute right-32 top-0" src="/vector.svg" />
          <img className="reverse-rotate-animate absolute right-4 top-24" src="/vector-1.svg" />
          <img className="rotate-animate absolute right-28 top-62" src="/vector-2.svg" />
          <div className="size-[238px] blur-[124px] bg-primary-s-3 absolute right-28 top-62" />
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#1c1c1c] py-2 px-8 mx-auto container rounded-4xl mt-2">
        <div className="border-r border-neutral-dividers flex flex-col gap-y-2 items-center justify-center w-full">
          <span className="text-[40px] font-medium text-neutral-title">150</span>
          <span className="text-neutral-sec-tx">Start Trading</span>
        </div>

        <div className="border-r border-neutral-dividers flex flex-col gap-y-2 items-center justify-center w-full">
          <span className="text-[40px] font-medium text-neutral-title">30M</span>
          <span className="text-neutral-sec-tx">Global Investors</span>
        </div>

        <div className="border-r border-neutral-dividers flex flex-col gap-y-2 items-center justify-center w-full">
          <span className="text-[40px] font-medium text-neutral-title">700+</span>
          <span className="text-neutral-sec-tx">Coins</span>
        </div>

        <div className="flex flex-col gap-y-2 items-center justify-center w-full">
          <span className="text-[40px] font-medium text-neutral-title">$1.54B</span>
          <span className="text-neutral-sec-tx">24h Trading Volume</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
