import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Beaker, Building2, Droplets, Egg, EggFried,
  Factory, Recycle, ShieldCheck, Snowflake, Sprout, Sun, Truck, Wheat,
} from "lucide-react";
import hero from "@/assets/parent-stock-house-wide.jpg";
import feedmill from "@/assets/real-feedmill-exterior.jpg";
import broilerHouse from "@/assets/real-broiler-house-interior.jpg";
import landscape from "@/assets/real-farm-landscape.jpg";
import sustainFlock from "@/assets/sustainable-broiler-flock.jpg";
import { Reveal } from "@/components/site/Reveal";
import { MetricCounter } from "@/components/site/MetricCounter";
import { Parallax } from "@/components/site/Parallax";
import { ExportMap } from "@/components/site/ExportMap";

const valueChain = [
  { icon: Egg, title: "Parent Stock", note: "Genetic foundation" },
  { icon: EggFried, title: "Hatchery", note: "Day-old chicks" },
  { icon: Wheat, title: "Feed Mill", note: "6 t/hr integrated" },
  { icon: Building2, title: "Broiler", note: "Owned + contract" },
  { icon: Factory, title: "Processing", note: "Halal · 48 t/day" },
  { icon: Snowflake, title: "Cold Chain", note: "Controlled logistics" },
  { icon: Truck, title: "Export", note: "Regional corridors" },
];

const capabilities = [
  { value: 48, suffix: " t", label: "Daily processing capacity", caption: "Halal-aligned line, 48 tonnes per day" },
  { value: 6, suffix: " t/hr", label: "Feed mill throughput", caption: "Integrated cropping & alternative protein" },
  { value: 42, suffix: "+ ha", label: "Operational footprint", caption: "Bio-secured Afar infrastructure" },
  { value: 2000, suffix: "+ ha", label: "Expansion pipeline", caption: "Climate-resilient land bank" },
  { value: 1000, suffix: "s", label: "Smallholders in-system", caption: "Structured contract farming" },
  { value: 7, suffix: "", label: "Vertically owned stages", caption: "Breeder → Export — one operator" },
];

const biosecurity = [
  "Veterinary-led, lab-supported flock health protocols",
  "Layered PPE, footbath and shower-in/shower-out discipline",
  "Closed-system feed handling and water sanitation",
  "Single-source genetics with traceable parent stock",
  "Mortality surveillance with real-time operational review",
];

const climatePillars = [
  { icon: Sun, title: "Solar + Biogas", body: "Hybrid renewable power securing off-grid Afar operations." },
  { icon: Droplets, title: "Water Stewardship", body: "Closed-loop reuse and zero-discharge sanitation systems." },
  { icon: Recycle, title: "Fertilizer Conversion", body: "Manure and processing waste returned as agronomic input." },
  { icon: Sprout, title: "Moringa Integration", body: "Drought-resilient, nutrient-dense feed grown on-site." },
];

function HeroCinematic() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const scale = useTransform(scrollY, [0, 600], [1.08, 1.18]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cafe-deep">
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={hero}
          alt="Wide cinematic view of Birnihigo parent stock infrastructure"
          className="h-full w-full object-cover"
          loading="eager"
          width={2400}
          height={1600}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-cafe-deep/40 via-cafe-deep/30 to-cafe-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-cafe-deep/85 via-cafe-deep/40 to-transparent" />
      <div className="absolute inset-0 mix-blend-overlay opacity-30 [background-image:radial-gradient(hsl(40_100%_73%/0.2)_1px,transparent_1px)] [background-size:4px_4px]" />

      <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary"
        >
          <span className="h-px w-10 bg-secondary" />
          African Protein Infrastructure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl mt-6 max-w-5xl text-cream text-balance"
        >
          Engineered for <span className="text-secondary">scale.</span><br/>
          Built for <span className="italic font-light">resilience.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-cream/75"
        >
          Birnihigo is a premium, vertically integrated protein infrastructure platform —
          delivering industrial discipline, climate-smart systems and export-grade
          quality from the Horn of Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/investors"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-secondary-foreground shadow-saffron transition-all hover:shadow-elegant hover:bg-secondary-deep"
          >
            Investor Platform
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/model"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-cream transition-all hover:bg-cream/10"
          >
            Explore the System
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        style={reduce ? undefined : { opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/60"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-cream/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

const Index = () => {
  useEffect(() => {
    document.title = "Birnihigo Integrated Farms — Premium African Protein Infrastructure";
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Birnihigo is a premium, vertically integrated African protein infrastructure platform — engineered for industrial scale, biosecurity excellence, climate resilience and regional export leadership.");
    document.head.appendChild(meta);
  }, []);

  return (
    <>
      <HeroCinematic />

      {/* 2 — STRATEGIC POSITIONING */}
      <section className="relative bg-background py-32 md:py-44">
        <div className="container-narrow">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bronze">
              Strategic Positioning
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="display-lg mt-10 text-primary text-balance">
              "Ethiopia does not have a poultry production problem.
              It has a <span className="text-secondary">system integration</span> problem."
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-foreground/65">
              Birnihigo was engineered as the answer — a single, disciplined operator across
              every stage of the protein value chain, designed to deliver affordability,
              quality and export-grade consistency at national scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — INTEGRATED VALUE CHAIN */}
      <section className="relative overflow-hidden bg-cream py-28 md:py-36">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bronze">
                  Integrated Value Chain
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-lg mt-6 text-primary text-balance">
                  Seven stages. <span className="text-secondary">One operator.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="md:col-span-5">
              <p className="text-base leading-relaxed text-foreground/70">
                Every handoff controlled. Every input traceable. A coordinated production
                system replacing the fragmentation that defines the regional poultry sector.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 relative">
            <div className="hidden md:block absolute left-0 right-0 top-[42px] h-px bg-cafe/15" />
            <ol className="grid grid-cols-2 gap-y-12 md:grid-cols-7 md:gap-x-4">
              {valueChain.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 0.06}>
                    <li className="relative flex flex-col items-start">
                      <div className="relative flex h-[84px] w-[84px] items-center justify-center rounded-full border border-cafe/15 bg-background shadow-card">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={1.4} />
                        <span className="absolute -top-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-primary">{s.title}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-foreground/60">{s.note}</p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* 4 — INDUSTRIAL CAPABILITIES */}
      <section className="relative overflow-hidden bg-cafe-deep py-28 md:py-36 text-cream">
        <Parallax offset={70} className="absolute inset-0 -z-0 opacity-20">
          <img src={feedmill} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-cafe-deep via-cafe-deep/95 to-cafe-deep" />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary">
                Industrial Capabilities
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-6 text-cream text-balance">
                Infrastructure measured in <span className="text-secondary">tonnes</span>, hectares and discipline.
              </h2>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-2xl overflow-hidden">
            {capabilities.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="bg-cafe-deep p-8 md:p-10 h-full">
                  <p className="num-display text-5xl md:text-6xl text-secondary">
                    <MetricCounter value={c.value} />
                    <span className="text-cream/90">{c.suffix}</span>
                  </p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-cream/90">{c.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">{c.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — BIOSECURITY EXCELLENCE */}
      <section className="relative bg-ink py-28 md:py-36 text-cream">
        <div className="container-wide grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-cream/10 shadow-elegant">
              <img src={broilerHouse} alt="Interior of a Birnihigo broiler house under controlled biosecurity conditions" className="w-full h-[560px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                <ShieldCheck className="h-4 w-4" /> Controlled · Monitored · Traceable
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary">
                Biosecurity Excellence
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-6 text-cream text-balance">
                Science-led operations.
                <span className="text-cream/60"> Zero compromise on flock integrity.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-cream/70 max-w-lg">
                Biosecurity is not a checklist — it is the operating system. Every Birnihigo
                facility is engineered around veterinary discipline, laboratory feedback and
                strict input control.
              </p>
            </Reveal>
            <ul className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
              {biosecurity.map((line, i) => (
                <Reveal key={line} delay={0.1 + i * 0.05}>
                  <li className="flex items-start gap-5 py-5">
                    <span className="mt-1 text-[11px] font-bold tracking-[0.2em] text-secondary">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-base text-cream/85">{line}</p>
                    <Beaker className="ml-auto h-4 w-4 text-cream/30" />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 — CLIMATE & CIRCULAR SYSTEMS */}
      <section className="relative bg-gradient-editorial py-28 md:py-36">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bronze">
                  Climate-Smart Infrastructure
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display-lg mt-6 text-primary text-balance">
                  Circular by engineering.
                  <span className="text-bronze"> Resilient by design.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="md:col-span-5">
              <p className="text-base leading-relaxed text-foreground/70">
                Built in one of the world's harshest climates, our systems convert
                constraint into competitive advantage — closed loops, renewable energy,
                and inputs we control.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">
            <Reveal className="md:col-span-7 md:row-span-2">
              <figure className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-cafe/10 shadow-card group">
                <img src={sustainFlock} alt="Healthy Birnihigo flock in a climate-resilient broiler house" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-cinematic" />
                <figcaption className="absolute inset-x-0 bottom-0 p-8 text-cream">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">Operational Resilience</p>
                  <p className="mt-3 text-2xl md:text-3xl font-bold leading-tight max-w-md">
                    Climate-resilient production — proven under Afar conditions.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            {climatePillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="md:col-span-5">
                <article className="group flex h-full items-start gap-5 rounded-2xl border border-cafe/10 bg-background p-6 transition-all hover:border-secondary/40 hover:shadow-card">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream text-bronze transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <p.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — INVESTOR PLATFORM */}
      <section className="relative overflow-hidden bg-background py-28 md:py-36">
        <div className="container-wide">
          <div className="rounded-[2rem] border border-cafe/10 bg-cream/60 p-10 md:p-16 lg:p-20">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bronze">
                    Investor Platform
                  </p>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="display-lg mt-6 text-primary text-balance">
                    An institutional-grade entry into <span className="text-secondary">African food security.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/70">
                    Birnihigo offers disciplined exposure to the most strategic growth vector
                    in the Horn of Africa — affordable protein, delivered through owned,
                    integrated infrastructure with measurable development impact.
                  </p>
                </Reveal>
                <Reveal delay={0.22}>
                  <Link
                    to="/investors"
                    className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition-all hover:bg-primary-deep"
                  >
                    View Investor Materials
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Reveal>
              </div>

              <Reveal delay={0.18} className="lg:col-span-5">
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cafe/10 bg-cafe/10">
                  {[
                    { k: "7x", l: "Integrated stages" },
                    { k: "48 t", l: "Daily processing" },
                    { k: "2,000+", l: "Hectare pipeline" },
                    { k: "100%", l: "Halal aligned" },
                  ].map((m) => (
                    <div key={m.l} className="bg-background p-6">
                      <p className="num-display text-3xl text-primary">{m.k}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">{m.l}</p>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — EXPORT READINESS */}
      <section className="relative bg-cream py-28 md:py-36">
        <div className="container-wide grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bronze">
                Export Readiness
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-6 text-primary text-balance">
                Positioned across the
                <span className="text-secondary"> Horn of Africa trade corridors.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-foreground/70">
                From Awash operations to Djibouti and Berbera ports, Birnihigo is
                infrastructure-positioned for regional protein export — halal-aligned,
                cold-chain-controlled and logistics-ready.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <ul className="mt-10 space-y-4">
                {[
                  "Halal-aligned processing for MENA & East Africa",
                  "Cold-chain logistics from facility to port",
                  "Direct corridor access via Djibouti & Berbera",
                  "Regional distribution into Kenya, Sudan & Gulf markets",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative rounded-3xl border border-cafe/10 bg-background p-6 md:p-10 shadow-card">
              <ExportMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9 — CINEMATIC CLOSING */}
      <section className="relative isolate overflow-hidden bg-ink py-32 md:py-44 text-cream">
        <Parallax offset={80} className="absolute inset-0 -z-10 opacity-30">
          <img src={landscape} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/90 to-ink" />

        <div className="container-narrow text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary">
              The Mandate
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-xl mt-8 text-cream text-balance">
              Food security requires <span className="italic font-light">systems.</span>
              <br/>
              Birnihigo is <span className="text-secondary">building them.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-secondary-foreground shadow-saffron transition-all hover:bg-secondary-deep"
              >
                Partner With Us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/sustainability"
                className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cream transition-all hover:bg-cream/10"
              >
                Our Sustainability Systems
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Index;
