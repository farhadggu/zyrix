// * types
type FeatureCardProps = {
  image: string;
  title: string;
  primaryTitle: string;
  description: string;
};

const FeatureCard = ({ image, title, primaryTitle, description }: FeatureCardProps) => {
  return (
    <div className="flex items-center justify-center p-8 gap-y-4 flex-col bg-[#1c1c1c] rounded-4xl !h-[500px]">
      <img className="h-[344px] object-cover" src={image} alt="illustration" />

      <div className="flex flex-col gap-y-2">
        <p className="text-neutral-title text-xl font-medium">
          <span className="text-primary">{primaryTitle}</span> {title}
        </p>

        <p className="text-neutral-sec-tx text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
