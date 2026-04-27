import { Egg, Sprout, Wheat, Building2, Factory, Truck, Globe2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const stages = [
  { icon: Egg, label: "Breeder", note: "Genetic foundation" },
  { icon: Sprout, label: "Hatchery", note: "Day-old chicks" },
  { icon: Wheat, label: "Feed Mill", note: "6 t/hr, integrated crops" },
  { icon: Building2, label: "Broiler", note: "Owned + contract farms" },
  { icon: Factory, label: "Processing", note: "Halal, 48 t/day" },
  { icon: Truck, label: "Distribution", note: "Cold chain" },
  { icon: Globe2, label: "Export", note: "Regional markets" },
];

interface Props {
  variant?: "light" | "dark";
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function ValueChainFlow({
  variant = "light",
  eyebrow = "Integrated Value Chain",
  title = "Breeder → Hatchery → Feed Mill → Broiler → Processing → Distribution → Export",
  subtitle = "One coordinated, traceable, execution-driven system — every stage owned, every handoff controlled.",
}: Props) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden py-20 md:py-28 ${
        isDark ? "bg-gradient-cafe text-primary-foreground" : "bg-cream"
      }`}
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-bronze/20 blur-3xl" aria-hidden />

      <div className="container-wide relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className={`eyebrow ${isDark ? "!text-secondary" : ""}`}>{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className={`mt-5 text-2xl font-bold leading-tight tracking-tight md:text-4xl text-balance ${
                isDark ? "" : "text-primary"
              }`}
            >
              {title}
            </h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p
                className={`mt-5 text-base md:text-lg leading-relaxed ${
                  isDark ? "text-primary-foreground/80" : "text-foreground/70"
                }`}
              >
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>

        {/* Horizontal scroll on mobile, wrap on desktop */}
        <div className="mt-12 -mx-4 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0 md:overflow-visible">
          <ol className="flex min-w-max items-stretch gap-3 md:min-w-0 md:flex-wrap md:justify-between md:gap-4">
            {stages.map((s, i) => {
              const Icon = s.icon;
              const isLast = i === stages.length - 1;
              return (
                <li key={s.label} className="flex items-center gap-3 md:flex-1">
                  <Reveal delay={i * 0.06}>
                    <div
                      className={`group relative flex w-44 flex-col items-center rounded-2xl border p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant md:w-full ${
                        isDark
                          ? "border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur"
                          : "border-border bg-background"
                      }`}
                    >
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-widest ${
                          isDark
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-gradient-saffron text-secondary-foreground"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                          isDark
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-gradient-saffron text-secondary-foreground shadow-soft"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p
                        className={`mt-4 text-sm font-bold ${
                          isDark ? "text-primary-foreground" : "text-primary"
                        }`}
                      >
                        {s.label}
                      </p>
                      <p
                        className={`mt-1 text-xs leading-snug ${
                          isDark ? "text-primary-foreground/65" : "text-foreground/60"
                        }`}
                      >
                        {s.note}
                      </p>
                    </div>
                  </Reveal>
                  {!isLast && (
                    <ArrowRight
                      className={`h-5 w-5 shrink-0 ${
                        isDark ? "text-secondary" : "text-bronze"
                      }`}
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}