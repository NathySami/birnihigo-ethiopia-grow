import logo from "@/assets/birnihigo-logo.jpg";
import { Link } from "react-router-dom";

export const Logo = ({ className = "h-10" }: { className?: string }) => (
  <Link to="/" aria-label="Birnihigo Integrated Farms — Home" className="inline-flex items-center">
    <img src={logo} alt="Birnihigo Integrated Farms" className={`${className} w-auto object-contain`} width={540} height={250} />
  </Link>
);