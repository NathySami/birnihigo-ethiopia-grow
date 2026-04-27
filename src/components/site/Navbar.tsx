import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/model", label: "Our Model" },
  { to: "/products", label: "Products" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/investors", label: "Investors" },
  { to: "/careers", label: "Careers" },
  { to: "/insights", label: "Insights" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl transition-shadow duration-300",
        scrolled || open ? "shadow-soft border-b border-border/70" : "border-b border-border/40"
      )}
    >
      <nav className="container-wide flex h-20 items-center justify-between gap-6">
        <Logo variant="primary" className={cn("transition-all", scrolled ? "h-9" : "h-11")} />

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-secondary" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-deep hover:shadow-elegant group"
        >
          Contact
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </NavLink>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-wide pb-6 pt-2 space-y-1">
          {[...links, { to: "/contact", label: "Contact" }].map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-cream text-primary"
                      : "text-foreground/80 hover:bg-cream/60"
                  )
                }
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4 opacity-60" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};