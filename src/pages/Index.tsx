import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Building2, Bug, Egg, EggFried, Factory, Leaf, Recycle, ShieldCheck, Sprout, Sun, Truck, Users, Wheat } from "lucide-react";
import hero from "@/assets/real-broiler-house-interior.jpg";
import broilers from "@/assets/farm-broilers-detail.jpg";
import sustain from "@/assets/sustainability.jpg";
import farmer from "@/assets/farmer.jpg";
import feedmill from "@/assets/real-feedmill-exterior.jpg";
import facility from "@/assets/facility-exterior.jpg";
import farmYoung from "@/assets/real-brooding-chicks.jpg";
import farmGrow from "@/assets/farm-grow-out.jpg";
import farmFeeders from "@/assets/real-broiler-house-silo.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { ValueChainFlow } from "@/components/site/ValueChainFlow";
import ScrollytellingHero from "@/components/site/ScrollytellingHero";

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

          <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2">
            <Reveal>
              <figure className="relative overflow-hidden rounded-3xl border border-border shadow-card md:col-span-7 md:row-span-2 group">
                <img src={hero} alt="Long Birnihigo broiler house with thousands of birds, automated feeding lines and ventilation" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" width={1920} height={1280} />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-6 text-primary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Parent Stock Farm</p>
                  <p className="mt-1 text-lg font-bold">Climate-controlled, automated, biosecure.</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.06}>
              <figure className="relative overflow-hidden rounded-3xl border border-border shadow-card md:col-span-5 group">
                <img src={farmYoung} alt="Young broiler chicks feeding around pan feeders inside a Birnihigo brooding house" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" loading="lazy" width={1280} height={960} />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-5 text-primary-foreground">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Brooding</p>
                  <p className="mt-0.5 text-base font-bold">Day-old chicks, expertly raised.</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.12}>
              <figure className="relative overflow-hidden rounded-3xl border border-border shadow-card md:col-span-5 group">
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
          <Reveal delay={0.1}>
            <div className="lg:col-span-6">
              <img src={farmGrow} alt="Birnihigo grow-out house in Afar showing climate-resilient design and large healthy broiler flock" className="w-full rounded-[2rem] object-cover h-[480px] shadow-elegant" loading="lazy" width={1280} height={960} />
            </div>
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
