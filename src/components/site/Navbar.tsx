import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

type NavItem =
  | { to: string; label: string }
  | { label: string; children: { to: string; label: string; description?: string }[] };

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "Operations",
    children: [
      { to: "/model", label: "Integrated Operations", description: "Our farm-to-fork value chain" },
      { to: "/model", label: "Value Chain", description: "Breeding · Feed · Processing" },
      { to: "/about", label: "Our Heritage", description: "The Birnihigo story since 2013" },
    ],
  },
  { to: "/products", label: "Products" },
  { to: "/investors", label: "Investors" },
  { to: "/sustainability", label: "Sustainability" },
  {
    label: "Company",
    children: [
      { to: "/about", label: "About Us", description: "Mission, vision, leadership" },
      { to: "/careers", label: "Careers", description: "Join the Birnihigo team" },
      { to: "/insights", label: "Insights", description: "News & industry research" },
    ],
  },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setOpenMenu(null); }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-xl transition-shadow duration-300",
        scrolled || open ? "shadow-soft" : ""
      )}
    >
      <nav className="container-wide flex h-24 items-center justify-between gap-6">
        <Logo variant="primary" className={cn("transition-all", scrolled ? "h-14" : "h-20")} />

        <ul
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {navItems.map((item) => {
            if ("to" in item) {
              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onMouseEnter={() => setOpenMenu(null)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all",
                        isActive
                          ? "bg-cream-deep text-primary"
                          : "text-primary/80 hover:bg-cream-deep/70 hover:text-primary"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            }
            const isOpen = openMenu === item.label;
            return (
              <li key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all",
                    isOpen
                      ? "bg-cream-deep text-primary"
                      : "text-primary/80 hover:bg-cream-deep/70 hover:text-primary"
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full pt-3 transition-all duration-200",
                    isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                  )}
                >
                  <div className="min-w-[280px] rounded-2xl border border-border/60 bg-card p-2 shadow-elegant">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        onClick={() => setOpenMenu(null)}
                        className="group block rounded-xl px-4 py-3 transition-colors hover:bg-cream"
                      >
                        <p className="text-sm font-bold text-primary">{c.label}</p>
                        {c.description && (
                          <p className="mt-0.5 text-xs text-foreground/60">{c.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
          <li>
            <NavLink
              to="/contact"
              onMouseEnter={() => setOpenMenu(null)}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all",
                  isActive
                    ? "bg-cream-deep text-primary"
                    : "text-primary/80 hover:bg-cream-deep/70 hover:text-primary"
                )
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-cafe px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-secondary shadow-soft transition-all hover:shadow-elegant hover:scale-[1.02] group"
        >
          Get In Touch
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-cream-deep/60 text-primary"
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
          {navItems.flatMap((item) =>
            "to" in item
              ? [{ to: item.to, label: item.label }]
              : item.children.map((c) => ({ to: c.to, label: `${item.label} · ${c.label}` }))
          ).concat([{ to: "/contact", label: "Contact" }]).map((l, i) => (
            <li key={`${l.to}-${i}`}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold uppercase tracking-wider transition-colors",
                    isActive
                      ? "bg-cream-deep text-primary"
                      : "text-primary/80 hover:bg-cream-deep/60"
                  )
                }
              >
                {l.label}
                <ArrowRight className="h-4 w-4 opacity-60" />
              </NavLink>
            </li>
          ))}
          <li className="pt-3">
            <Link to="/contact" className="flex items-center justify-center gap-2 rounded-full bg-gradient-cafe px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-secondary">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};