import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <FeatureCard
          title="Gain Valuable"
          primaryTitle="Insight"
          image="/illustrations/Illustration.svg"
          description="Unlock data-driven insights to make smarter crypto decisions."
        />
      </div>

      <div className="col-span-4">
        <FeatureCard
          title="Transactions"
          primaryTitle="Quick"
          image="/illustrations/Illustration-2.svg"
          description="Send and receive crypto instantly with lightning-fast transaction speeds."
        />
      </div>

      <div className="col-span-4">
        <FeatureCard
          title="Financial"
          primaryTitle="Quick"
          image="/illustrations/Illustration-3.svg"
          description="Get a clear, comprehensive view of your crypto portfolio and finances."
        />
      </div>

      <div className="bg-[#1c1c1c] rounded-4xl p-8 flex items-center justify-center gap-x-14 col-span-12">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl text-white">
            <span className="text-primary">Trusted </span>exchange platform
          </h3>

          <span className="text-sm text-neutral-primary-tx">
            Empowering you to streamline your crypto transactions effortlessly while keeping you ahead in the
            ever-evolving decentralized finance ecosystem. Join a network of forward-thinkers who trust our secure and
            innovative solutions to navigate the world of digital assets with confidence and ease
          </span>
        </div>

        <img src="/illustrations/social-icon-media.svg" alt="illustration" />
      </div>
    </div>
  );
};

export default FeatureSection;
