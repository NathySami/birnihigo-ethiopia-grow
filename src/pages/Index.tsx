import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Beaker, Building2, Bug, Droplets, Egg, EggFried,
  Factory, Leaf, Recycle, ShieldCheck, Snowflake, Sprout, Sun, Truck, Wheat,
} from "lucide-react";
import hero from "@/assets/parent-stock-house-wide.jpg";
import feedmill from "@/assets/real-feedmill-exterior.jpg";
import broilerHouse from "@/assets/real-broiler-house-interior.jpg";
import landscape from "@/assets/real-farm-landscape.jpg";
import sustainFlock from "@/assets/sustainable-broiler-flock.jpg";
import sustain from "@/assets/sustainability.jpg";
import brooding from "@/assets/real-brooding-chicks.jpg";
import distribution from "@/assets/real-community-distribution.jpg";
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

      {/* tonal overlays — Café Noir dominant */}
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

      {/* scroll cue */}
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
      {/* 1 — CINEMATIC HERO */}
      <HeroCinematic />

      {/* 2 — STRATEGIC POSITIONING (editorial pull-quote) */}
      <section className="relative bg-background py-32 md:py-44">
        <div className="container-narrow">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bronze">
              Strategic Positioning
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="display-lg mt-10 text-primary text-balance">
              “Ethiopia does not have a poultry production problem.
              It has a <span className="text-secondary">system integration</span> problem.”
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
                Every handoff controlled. Every input traceable. A coordinated
                production system replacing the fragmentation that defines the
                regional poultry sector.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 relative">
            {/* progress line */}
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
                    Birnihigo offers disciplined exposure to the most strategic
                    growth vector in the Horn of Africa — affordable protein,
                    delivered through owned, integrated infrastructure with measurable
                    development impact.
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

const metrics = [
  { value: "48", suffix: "Tons/day", label: "Processing Capacity" },
  { value: "42+", suffix: "Hectares", label: "Bio-secured Operations" },
  { value: "6", suffix: "Ton/hour", label: "Feed Mill" },
  { value: "Halal", suffix: "Export-Ready", label: "Infrastructure" },
];

const valueChain = [
  { icon: Egg, title: "Parent Stock", body: "Genetic foundation engineered for productivity, uniformity and quality." },
  { icon: EggFried, title: "Hatchery", body: "Controlled incubation delivering high-performance day-old chicks at scale." },
  { icon: Wheat, title: "Feed Platform", body: "6 t/hr mill, integrated cropping and innovative feed alternatives." },
  { icon: Building2, title: "Broiler System", body: "Owned units plus a structured contract farming ecosystem." },
  { icon: Factory, title: "Processing Infrastructure", body: "Halal-aligned, 48 t/day throughput with cold-chain integration." },
  { icon: Truck, title: "Distribution", body: "End-to-end cold chain — fresh, traceable, market-ready protein." },
];

const sustainPillars = [
  { icon: Sprout, title: "Moringa", body: "Drought-resilient, nutrient-rich feed supplement grown on-site." },
  { icon: Bug, title: "BSF Protein", body: "Black Soldier Fly converting organic waste into circular protein." },
  { icon: Sun, title: "Solar + Biogas", body: "Hybrid renewable energy securing remote, off-grid operations." },
  { icon: Recycle, title: "Closed Loop", body: "Waste-to-fertilizer and water reuse — minimal-waste production." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Birnihigo Integrated Farms — Ethiopia's Climate-Resilient Protein Platform";
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Birnihigo is Ethiopia's integrated, climate-resilient poultry platform — solving a national protein challenge through systems design, biosecurity, and inclusive scale.");
    document.head.appendChild(meta);
  }, []);

  return (
    <>
      {/* HERO — scrollytelling */}
      <ScrollytellingHero />

      {/* MISSION QUOTE BAND — Deep Saffron dominant */}
      <section className="bg-gradient-saffron py-20 md:py-28 text-secondary-foreground">
        <div className="container-wide grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-8">
            <p className="text-2xl font-extrabold uppercase italic leading-[1.15] tracking-tight md:text-4xl lg:text-[2.75rem] text-balance text-primary">
              "Ethiopia does not have a poultry production problem — it has a system design failure. We exist to fix it."
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4">
            <div className="flex items-start gap-5">
              <span className="mt-2 hidden h-px w-14 shrink-0 bg-primary md:block" />
              <p className="text-xs font-bold uppercase leading-relaxed tracking-[0.25em] text-primary md:text-sm">
                A national-scale, climate-resilient protein platform — engineered for affordability, biosecurity and inclusion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* METRICS BAND — café for contrast against saffron above */}
      <section className="bg-cafe-deep py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-secondary/30 bg-secondary/10 md:grid-cols-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-cafe-deep/90 p-6 md:p-7">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-secondary md:text-4xl">{m.value}</span>
                  <span className="text-sm font-medium text-cafe-foreground/70">{m.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-cafe-foreground/75">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC STATEMENT */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container-tight">
          <Reveal>
            <p className="eyebrow">The Strategic Thesis</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-primary md:text-5xl text-balance">
              A system, not a farm. A platform, not a producer.
              <span className="text-bronze"> Infrastructure for a nation's protein future.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-foreground/75">
                Despite strong, growing demand, Ethiopia's poultry sector remains fragmented, inefficient, and unable to deliver affordable protein at scale. That is a design problem — not a market one.
              </p>
              <p className="text-lg leading-relaxed text-foreground/75">
                Birnihigo was created as a direct response: a fully integrated agribusiness platform engineered to deliver efficiency, consistency and scale — built and proven under real, climate-stressed conditions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR MODEL — Value Chain */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4">
                  <Logo variant="icon-saffron" asLink={false} className="h-12 rounded-xl shadow-soft" />
                  <p className="eyebrow">Our Model</p>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                  One platform. <span className="text-secondary">Every stage of the value chain.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-base text-foreground/70 leading-relaxed">
                Breeding, hatchery, feed, broiler farming, processing, cold chain and distribution — operated as one coordinated system to control cost, ensure quality, and stabilize supply at national scale.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {valueChain.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                  <div className="relative">
                    <span className="absolute right-0 top-0 text-sm font-semibold text-bronze/40">0{i + 1}</span>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-saffron text-secondary-foreground shadow-soft">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-primary">{v.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-foreground/65">{v.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <Link to="/model" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-deep">
                See the full model
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* End-to-end highlighted flow */}
      <ValueChainFlow variant="dark" />

      {/* NATIONAL IMPACT — split */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container-wide grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-saffron opacity-15 blur-2xl" />
              <img src={farmer} alt="Birnihigo training session empowering women and youth through integrated outgrow farming" className="rounded-[2rem] shadow-elegant w-full h-[520px] object-cover" loading="lazy" width={1280} height={960} />
              <div className="absolute -bottom-6 -right-6 max-w-[260px] rounded-2xl border border-border bg-card p-5 shadow-elegant">
                <p className="text-3xl font-bold text-primary">1,000s</p>
                <p className="mt-1 text-sm text-foreground/65">Smallholders integrated into a structured, commercially viable production ecosystem.</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><p className="eyebrow">Contract Farming Ecosystem</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                A structured production ecosystem — integrating thousands of smallholders.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                Beyond production, Birnihigo is building a structured contract farming platform that transforms smallholder participation from informal activity into a coordinated, commercially viable system.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-4">
                {[
                  "Integrating thousands of smallholder farmers into one system",
                  "Income opportunities engineered for youth and women",
                  "Consistent quality through controlled production protocols",
                  "Capacity expansion without compromising standards",
                  "Inclusive participation across the entire value chain",
                ].map((line) => (
                  <li key={line} className="flex gap-4 border-b border-border pb-4 text-base text-foreground/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE NUMBERS — Industrial Scale */}
      <section className="border-y border-bronze/10 bg-cream py-24">
        <div className="container-wide">
          <Reveal className="mb-16 text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-bronze">
              Industrial Scale
            </p>
            <h2 className="text-4xl font-black italic tracking-tighter text-primary md:text-5xl">
              The Numbers That Define Us
            </h2>
          </Reveal>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "48", l: "tons / day", s: "Processing capacity" },
                { k: "6", l: "tons / hour", s: "Feed mill output" },
                { k: "42+", l: "hectares", s: "Operational land" },
                { k: "2,000+", l: "hectares", s: "Expansion pipeline" },
              ].map((s, i) => (
                <Reveal key={s.s} delay={i * 0.07}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-bronze/15 bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-elegant">
                    <span className="absolute right-4 top-4 text-xs font-bold text-bronze/40">0{i + 1}</span>
                    <p className="text-5xl font-black tracking-tighter text-primary md:text-6xl">{s.k}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">{s.l}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">{s.s}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE THE FARM — real photo gallery */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <Reveal><p className="eyebrow">Inside the Farm</p></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                  A look inside our <span className="text-secondary">bio-secured</span> operations.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-4">
              <p className="text-base leading-relaxed text-foreground/70 md:pb-2">
                From parent stock houses and brooding rooms to grow-out barns and feed infrastructure — every stage runs under controlled, science-driven conditions.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-12 md:auto-rows-[260px]">
            <Reveal className="md:col-span-7 md:row-span-2 h-full">
              <figure className="relative h-full overflow-hidden rounded-3xl border border-border shadow-card group">
                <img src={hero} alt="Wide view of a Birnihigo parent stock house with automated feeding lines and healthy breeder flock" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" width={1920} height={1280} />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-6 text-primary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Parent Stock Farm</p>
                  <p className="mt-1 text-lg font-bold">Climate-controlled, automated, biosecure.</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.06} className="md:col-span-5 h-full">
              <figure className="relative h-full overflow-hidden rounded-3xl border border-border shadow-card group">
                <img src={farmYoung} alt="Young broiler chicks feeding around pan feeders inside a Birnihigo brooding house" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" width={1280} height={960} />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-5 text-primary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Brooding</p>
                  <p className="mt-0.5 text-base font-bold">Day-old chicks, expertly raised.</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.12} className="md:col-span-5 h-full">
              <figure className="relative h-full overflow-hidden rounded-3xl border border-border shadow-card group">
                <img src={farmFeeders} alt="Rows of automated pan feeders surrounded by healthy white broilers at a Birnihigo grow-out house" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" width={1280} height={960} />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-5 text-primary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Grow-out</p>
                  <p className="mt-0.5 text-base font-bold">Industrial-scale broiler production.</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESILIENCE */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container-wide grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal><p className="eyebrow">Climate Resilience · Afar</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                Breaking through one of the world's harshest climates — by design.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                We intentionally chose Afar — an environment widely seen as unsuitable for intensive agriculture — to prove that with the right system design, biosecurity discipline, and climate-smart infrastructure, sustainable protein production is possible even in arid, climate-stressed zones. This is climate adaptation in action, aligned with the UN Sustainable Development Goals.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Heat-adapted infrastructure", "Water reuse & conservation", "Solar + biogas hybrids", "System-level biosecurity", "Moringa drought-resilient feed", "BSF circular protein"].map((t) => (
                  <div key={t} className="rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm font-medium text-primary">{t}</div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <img src={farmGrow} alt="Birnihigo grow-out house in Afar showing climate-resilient design and large healthy broiler flock" className="w-full rounded-[2rem] object-cover aspect-[4/3] max-h-[520px] shadow-elegant" loading="lazy" width={1280} height={960} />
          </Reveal>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Reveal><p className="eyebrow">Climate-Smart Production Model</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                Sustainability is not an add-on — it is engineered into the system.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                A closed-loop platform combining drought-resilient feed (Moringa), Black Soldier Fly circular protein, hybrid solar + biogas energy, and waste-to-fertilizer cycles — aligned with UN SDG-aligned, climate-smart agriculture.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sustainPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-3xl font-bold text-bronze">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-background shadow-card">
              <div className="grid md:grid-cols-2">
                <img src={sustain} alt="Moringa leaves and organic fertilizer pellets" className="h-72 w-full object-cover md:h-full" loading="lazy" width={1280} height={960} />
                <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                  <p className="eyebrow">Closed-Loop Production</p>
                  <p className="text-2xl font-bold text-primary leading-snug text-balance">
                    From Moringa groves and BSF bioconversion to solar-powered processing — every input cycles back into the system.
                  </p>
                  <Link to="/sustainability" className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                    Explore the climate-smart model
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PURPOSE — closing CTA, Deep Saffron dominant */}
      <section className="relative overflow-hidden bg-gradient-saffron py-24 text-secondary-foreground md:py-32">
        <div className="absolute -top-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-bronze/30 blur-3xl" />
        <div className="container-tight relative text-center">
          <Reveal>
            <p className="eyebrow justify-center !text-primary before:!bg-primary">Our Purpose</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl text-balance text-primary">
              Redefining how protein is produced, integrated and delivered — <span className="italic font-light text-cafe-deep">at scale, with purpose.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary/85 leading-relaxed">
              A resource-secured, climate-resilient and scalable agribusiness platform — built in Ethiopia, by Ethiopians, for a national protein future.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/investors" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant transition-all hover:scale-[1.03] hover:bg-primary-deep">
                Investor Relations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/40 px-7 py-4 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                Our Story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Index;
