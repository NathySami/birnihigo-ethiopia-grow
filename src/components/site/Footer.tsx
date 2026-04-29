import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  Company: [
    { to: "/about", label: "About Us" },
    { to: "/model", label: "Our Model" },
    { to: "/sustainability", label: "Sustainability" },
    { to: "/careers", label: "Careers" },
  ],
  Business: [
    { to: "/products", label: "Products" },
    { to: "/investors", label: "Investor Relations" },
    { to: "/insights", label: "Insights" },
    { to: "/contact", label: "Contact" },
  ],
};

export const Footer = () => (
  <footer className="relative bg-primary-deep text-primary-foreground">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
    <div className="container-wide py-20">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <Logo variant="circular-light" className="h-20" />
          <p className="text-base text-primary-foreground/75 max-w-md leading-relaxed">
            Building Ethiopia's first fully integrated poultry system to deliver affordable, safe, and scalable protein at national scale.
          </p>
          <p className="text-sm font-medium text-secondary tracking-wide">
            "Feeding the Future, Naturally."
          </p>
          <div className="flex items-center gap-3 pt-2">
            {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground hover:border-secondary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title} className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{title}</h4>
            <ul className="space-y-2.5">
              {items.map((it) => (
                <li key={it.to}>
                  <Link to={it.to} className="text-sm text-primary-foreground/75 hover:text-secondary transition-colors">
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />Awash Sebat, Afar Region — Operations</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />Kazanchis Garad Bldg, 10th Fl, Addis Ababa</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />info@birnihigo.com</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />+251 911 20 94 05 </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Birnihigo Integrated Farms PLC. All rights reserved.</p>
        <p>Halal Export-Ready · Bio-secure Operations · ESG Aligned</p>
      </div>
    </div>
  </footer>
);
