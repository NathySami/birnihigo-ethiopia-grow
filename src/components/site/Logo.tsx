import { Link } from "react-router-dom";
import primary from "@/assets/logo-primary.png";
import wordmark from "@/assets/logo-wordmark.png";
import wordmarkLight from "@/assets/logo-wordmark-light.png";
import circular from "@/assets/logo-circular.png";
import iconSaffron from "@/assets/logo-icon-saffron.png";
import iconCafe from "@/assets/logo-icon-cafe.png";

export type LogoVariant = "primary" | "wordmark" | "wordmark-light" | "circular" | "icon-saffron" | "icon-cafe";

const sources: Record<LogoVariant, string> = {
  primary,
  wordmark,
  "wordmark-light": wordmarkLight,
  circular,
  "icon-saffron": iconSaffron,
  "icon-cafe": iconCafe,
};

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  asLink?: boolean;
}

export const Logo = ({ variant = "primary", className = "h-10", asLink = true }: LogoProps) => {
  const img = (
    <img
      src={sources[variant]}
      alt="Birnihigo Integrated Farms"
      className={`${className} w-auto object-contain`}
      width={540}
      height={250}
      loading="eager"
      decoding="async"
    />
  );
  if (!asLink) return img;
  return (
    <Link to="/" aria-label="Birnihigo Integrated Farms — Home" className="inline-flex items-center">
      {img}
    </Link>
  );
};