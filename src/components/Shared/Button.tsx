// * utils
import { cn } from "@/utils";

// * types
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof VARIANT;
};

const VARIANT = {
  primary: "bg-primary text-white text-neutral-primary-bc hover:bg-primary-s-1",
  secondary: "bg-secondary text-white hover:bg-secondary-s-1",
  outline:
    "bg-transparent border border-primary text-primary text-neutral-title border border-neutral-title hover:bg-neutral-sec-bc",
};

const BASE_CLASS =
  "h-12 rounded-2xl lg:rounded-4xl px-8 flex items-center justify-center cursor-pointer transition-all duration-300 lg:text-base text-sm";

const Button = ({ children, className, variant }: ButtonProps) => {
  return <button className={cn(VARIANT[variant ?? "primary"], BASE_CLASS, className)}>{children}</button>;
};

export default Button;
