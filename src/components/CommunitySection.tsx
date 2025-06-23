import Button from "./Shared/Button";

const CommunitySection = () => {
  return (
    <div className="h-[634px] my-[100px] flex items-center gap-x-6 overflow-hidden">
      <div className="flex flex-col justify-between w-full h-full">
        <div className="h-[230px] w-full layer-bg" />

        <div className="flex items-center gap-x-8">
          <h3 className="text-[32px] font-medium text-white">
            What Our Community Has to Say <span className="text-primary">About Us</span>
          </h3>

          <Button variant="outline" className="!w-[167px] px-0 text-neutral-title text-sm">
            View all comments
          </Button>
        </div>
        <div className="h-[230px] w-full layer-bg" />
      </div>

      <div className="w-full flex flex-col gap-y-6">
        <div className="layer-bg-sec w-full h-[200px]" />

        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="p-8 bg-[#1c1c1c] rounded-4xl backdrop-blur-sm">
            <div className="flex flex-col gap-y-5">
              <img className="size-8" src="/avatars/avatar.svg" />
              <p className="text-neutral-title text-xs">
                As a Zyrix user, I love its easy interface, low fees, great support, top-notch security, and diverse
                cryptocurrencies. Perfect for traders!
              </p>

              <div className="flex flex-col">
                <span className="text-sm text-neutral-title">Judith Rodriguez</span>
                <span className="text-xs text-neutral-title">London, UK</span>
              </div>
            </div>
          </div>
        ))}
        <div className="layer-bg-sec w-full h-[200px]" />
      </div>

      <div className="w-full flex flex-col gap-y-6">
        <div className="layer-bg-sec w-full h-[200px]" />

        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="p-8 bg-[#1c1c1c] rounded-4xl backdrop-blur-sm">
            <div className="flex flex-col gap-y-5">
              <img className="size-8" src="/avatars/avatar.svg" />
              <p className="text-neutral-title text-xs">
                As a Zyrix user, I love its easy interface, low fees, great support, top-notch security, and diverse
                cryptocurrencies. Perfect for traders!
              </p>

              <div className="flex flex-col">
                <span className="text-sm text-neutral-title">Judith Rodriguez</span>
                <span className="text-xs text-neutral-title">London, UK</span>
              </div>
            </div>
          </div>
        ))}
        <div className="layer-bg-sec w-full h-[200px]" />
      </div>
    </div>
  );
};

export default CommunitySection;
