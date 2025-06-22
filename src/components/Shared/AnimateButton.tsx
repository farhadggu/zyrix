// * components
import Button from "./Button";

const AnimateButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit">
      <div className="w-64 animated-conic-border mt-16 p-1 rounded-full border border-primary">
        <Button className="z-10 relative w-full font-semibold">{children}</Button>
      </div>

      <div className="blur-xl bg-primary w-32 h-5 absolute inset-0 mx-auto top-10" />
    </div>
  );
};

export default AnimateButton;
