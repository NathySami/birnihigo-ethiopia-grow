import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bird, Compass, HeartHandshake, Sparkles, Telescope, Users, CheckCircle2, ShieldCheck, Globe2, Sprout, Factory, Handshake, GraduationCap, FlaskConical, Bug, Sun, Recycle, Zap, Droplets, Leaf, Wheat, Snowflake, Layers, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { ValueChainFlow } from "@/components/site/ValueChainFlow";
import hoopoe from "@/assets/hoopoe.jpg";
import farmFeeding from "@/assets/real-training-women.jpg";

const timeline = [
  {
    year: "2013",
    title: "Foundation",
    body: "Birnihigo established with a focus on importing fertile eggs and supplying day-old chicks. Contract farming introduced as a core model from inception.",
  },
  {
    year: "2014",
    title: "Transformation",
    body: "Production begins. Rapid market demand drives the transition into a vertically integrated system.",
  },
  {
    year: "2015–2018",
    title: "Expansion & Trust",
    body: "Strong farmer adoption through quality chicks and reliable supply. Contract farming network expands and broiler capacity grows — Birnihigo becomes a trusted poultry partner.",
  },
  {
    year: "2019–2022",
    title: "Infrastructure & Integration",
    body: "Secured 42+ hectares in Awash (Gabi Resu Zone). Established a 9-hectare broiler breeding farm and expanded integrated production. Biosecurity strengthened as a system-driven, science-based practice.",
  },
  {
    year: "2023–Present",
    title: "Processing & Market Readiness",
    body: "Development of broiler farms and processing facility across 24 hectares. Focus on HACCP-aligned processing, Halal-certified standards, cold-chain logistics and structured market integration.",
  },
  {
    year: "Future",
    title: "National Impact & Export",
    body: "Affordable protein for 120M+ people. Scaling contract farming as a national model, expanding into regional export markets, and advancing food sovereignty through integrated, science-based systems.",
  },
];

const values = [
  { icon: Sparkles, title: "Innovation for Impact", body: "Proven and emerging technologies driving efficiency, quality, and accessibility." },
  { icon: Telescope, title: "Vision-Driven Excellence", body: "Building toward our own Grandparent farm within 5–7 years for genetic independence." },
  { icon: HeartHandshake, title: "Integrity & Responsibility", body: "Transparent, ethical operations prioritizing health, affordability, and stewardship." },
  { icon: Users, title: "Empowerment & Inclusion", body: "Inclusive development through contract farming and skill-building for youth and women." },
  { icon: Compass, title: "Sustainable Growth", body: "Responsible production and export strategies that strengthen food security." },
  { icon: Bird, title: "Inspired by Hoopoe", body: "Elegance, intelligence, resilience, and an enduring affinity to nature." },
];

const commitments = [
  { icon: Sprout, text: "Delivering affordable, high-quality protein at national scale — not as a luxury, but as a baseline." },
  { icon: Handshake, text: "Building a structured contract farming ecosystem integrating thousands of smallholders." },
  { icon: Globe2, text: "Advancing climate-resilient, Halal-aligned, export-ready production infrastructure." },
  { icon: Factory, text: "Setting new standards through fully integrated, platform-grade execution." },
  { icon: ShieldCheck, text: "Embedding science-driven biosecurity as a system-level discipline, not a protocol." },
  { icon: GraduationCap, text: "Investing in talent through poultry research, academic partnerships, and inclusion." },
];

const milestones = [
  "Established as chick supplier (2013)",
  "Introduced contract farming model from inception",
  "Transitioned to full vertical integration (2014)",
  "Secured 42+ hectares bio-secured platform in Afar",
  "Developed parent stock, hatchery, broiler, feed and processing infrastructure",
  "Institutionalized science-driven, system-level biosecurity",
  "600 MT cold storage capacity established",
  "Positioned for Halal-aligned, export-ready production",
];

const climateSmart = [
  { icon: Wheat, title: "Feed Security & Agricultural Integration", body: "Large-scale crop cultivation (maize, soybean) and approximately 2,000 hectares developed for feed-ingredient production." },
  { icon: Sprout, title: "Moringa Cultivation", body: "Drought-resilient, nutrient-rich feed supplement grown on-site — turning a harsh climate into an agronomic advantage." },
  { icon: Bug, title: "Black Soldier Fly (BSF)", body: "Bioconversion of organic waste streams into high-value circular protein inputs for feed." },
  { icon: Recycle, title: "Circular Resource Use", body: "Organic waste converted to fertilizer; energy and nutrient cycles closed through biogas and BSF systems." },
  { icon: Sun, title: "Solar Integration", body: "Solar energy supporting farm and processing operations — reducing dependence on unstable grid power." },
  { icon: Zap, title: "Hybrid Renewable Systems", body: "Solar + biogas hybrids ensuring uninterrupted operations and biosecurity stability in remote environments." },
];

const infrastructure = [
  { icon: Layers, label: "Modern parent stock farms" },
  { icon: Sprout, label: "Hatchery operations" },
  { icon: Factory, label: "Broiler production units" },
  { icon: Wheat, label: "Feed mill platform" },
  { icon: Factory, label: "Processing infrastructure" },
  { icon: Snowflake, label: "600 MT cold storage capacity" },
];

const intersections = [
  { icon: Sprout, title: "Food Security", body: "Affordable protein delivered at national scale." },
  { icon: Leaf, title: "Climate Resilience", body: "A model proven in Ethiopia's harshest climate zone." },
  { icon: Users, title: "Economic Inclusion", body: "Smallholders, youth and women integrated into one system." },
  { icon: Target, title: "Import Substitution", body: "Strengthening domestic capacity, reducing reliance on imports." },
];

export default function About() {
  useEffect(() => { document.title = "About — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="About Birnihigo Integrated Farms PLC"
        title="Ethiopia does not have a poultry production problem — it has a system design failure. Birnihigo was built to fix it."
        subtitle="A fully integrated, climate-resilient agribusiness platform — engineered to deliver affordable protein at scale, integrate thousands of smallholders, and prove that sustainable production is possible even in arid, climate-stressed environments."
      />

      {/* Origin story */}
      <section className="bg-background pt-24 pb-12">
        <div className="container-tight">
          <Reveal><p className="eyebrow">A System, Not Just a Farm</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
              Birnihigo is not a conventional poultry producer — it is a fully integrated agribusiness platform.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/75">
            <Reveal delay={0.08}>
              <p>
                Despite strong and growing demand, Ethiopia's poultry sector remains fragmented, inefficient, and unable to deliver affordable protein at scale. Birnihigo was created as a direct response to this gap — designed from inception as a <strong className="text-primary">platform, not a production unit</strong>; an <strong className="text-primary">infrastructure, not a facility</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Our operations integrate the entire value chain — breeding and parent stock management, hatchery operations, feed production, broiler farming, processing and cold-chain distribution. This level of integration allows us to control cost, ensure quality, and stabilize supply — making poultry meat accessible, not a luxury.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Located in the <strong className="text-primary">Afar Regional State</strong> across three segregated, conceptually bio-secured sites covering 42+ hectares under long-term lease, Birnihigo operates by an unwavering principle:
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-secondary bg-cream p-7 text-xl font-semibold leading-snug text-primary md:text-2xl">
              "Biosecurity is not a protocol — it is a science-driven system embedded in every operation."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* BUILDING IN A CHALLENGING ENVIRONMENT */}
      <section className="bg-cream py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal><p className="eyebrow">Building in a Challenging Environment</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                Afar — a climate challenge zone we break through by <span className="text-secondary">resilience.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                We intentionally chose Afar — an environment widely seen as unsuitable for intensive agriculture — to demonstrate that with the right system design, discipline, and biosecurity, sustainable production is possible even in arid and climate-stressed environments.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                This approach expands the boundaries of agricultural potential in Ethiopia and contributes to climate-resilient production models — directly aligned with the <strong className="text-primary">UN Sustainable Development Goals</strong>.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-[2rem] bg-gradient-cafe p-10 text-primary-foreground shadow-elegant">
              <Leaf className="h-10 w-10 text-secondary" />
              <p className="mt-6 text-2xl font-bold leading-snug md:text-3xl text-balance">
                "With the right system design, discipline, and biosecurity, sustainable production is possible even in arid and climate-stressed environments."
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-secondary">Climate Adaptation in Action</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIMATE-SMART & SUSTAINABLE APPROACH */}
      <section className="bg-background py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Reveal><p className="eyebrow">Climate-Smart & Sustainable Approach</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                Sustainability is not an add-on — <span className="text-secondary">it is embedded in our system.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                Birnihigo is actively developing a closed-loop, climate-smart production model — combining feed security, drought-resilient inputs, circular protein, and renewable energy.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {climateSmart.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-saffron text-secondary-foreground shadow-soft">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMPOWERING PEOPLE — Contract farming ecosystem */}
      <section className="bg-cream py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <img
              src={farmFeeding}
              alt="Women trained in poultry production through Birnihigo's structured contract farming ecosystem"
              className="w-full rounded-[2rem] object-cover h-[480px] shadow-elegant"
              loading="lazy"
              width={1280}
              height={960}
            />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal><p className="eyebrow">Empowering People Through Structured Growth</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                A structured contract farming ecosystem — integrating <span className="text-secondary">thousands of smallholders.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                Beyond production, Birnihigo is building a structured contract farming ecosystem that transforms smallholder participation from informal activity into a coordinated and commercially viable system.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Integrate thousands of smallholder farmers",
                  "Income opportunities for youth and women",
                  "Consistent quality through controlled production",
                  "Capacity expansion without compromising standards",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CURRENT SCALE & INFRASTRUCTURE */}
      <section className="bg-background py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Reveal><p className="eyebrow">Current Scale & Infrastructure</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                One of the few <span className="text-secondary">fully integrated poultry platforms</span> in Ethiopia.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                Three segregated, conceptually bio-secured sites covering over <strong className="text-primary">42 hectares under long-term lease</strong> in the Afar Region.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((i, idx) => (
              <Reveal key={i.label} delay={idx * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <span className="text-base font-semibold text-primary">{i.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A PLATFORM FOR SCALE AND IMPACT */}
      <section className="bg-cream py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Reveal><p className="eyebrow">A Platform for Scale and Impact</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
                Positioned at the intersection of national priorities.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {intersections.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-background p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hoopoe inspiration */}
      <section className="bg-background py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal>
            <div className="lg:col-span-5 relative">
              <img src={hoopoe} alt="Hoopoe — Birnihigo in local language" className="w-full rounded-[2rem] object-cover shadow-elegant" loading="lazy" width={1280} height={960} />
              <div className="absolute -bottom-8 -right-6 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-background shadow-elegant ring-1 ring-border">
                <Logo variant="circular-mono" asLink={false} className="h-24" />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal><p className="eyebrow">Brand Inspiration</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
                We don't just raise chickens — <span className="text-secondary">we raise standards.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                Inspired by the Hoopoe — <em>Birnihigo</em> in local language — a bird known for its elegance, intelligence, resilience, and affinity to nature, BIF stands as an eco-centric agribusiness founded on the principles of nourishment, sustainability, and community empowerment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Today, We Are Committed To */}
      <section className="bg-background pb-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal><p className="eyebrow">Today, We Are Committed To</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Five commitments that guide every decision we make.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <img
                src={farmFeeding}
                alt="Healthy broiler chickens feeding inside a Birnihigo bio-secure house in Awash, Afar"
                className="mt-8 w-full rounded-[2rem] object-cover h-[360px] shadow-elegant"
                loading="lazy"
                width={1280}
                height={960}
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {commitments.map((c, i) => (
              <Reveal key={c.text} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-foreground/80">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-cream py-24">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-gradient-cafe p-10 text-primary-foreground shadow-elegant">
              <p className="eyebrow !text-secondary">Our Vision</p>
              <p className="mt-6 text-xl font-bold leading-snug md:text-2xl text-balance">
                To nourish nations through safe, affordable poultry protein by building a system defined by innovation, integration, and{" "}
                <span className="text-secondary">Biosecurity Excellence</span> — recognized not as an operational necessity, but as a strategic pillar ensuring long-term sustainability and trust.
              </p>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-secondary/30 bg-primary-foreground/5 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <p className="text-sm leading-relaxed text-primary-foreground/85">
                  <strong className="text-secondary">Biosecurity Excellence</strong> is not just an operational requirement, but a strategic pillar in modern poultry production — embedded as a system-level discipline across every stage of our value chain.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[2rem] bg-background p-10 shadow-card border border-border">
              <p className="eyebrow">Our Mission</p>
              <p className="mt-6 text-xl font-bold leading-snug text-primary md:text-2xl text-balance">
                "Driving national food sovereignty through integrated, science-based poultry systems that transform production into a reliable source of safe, affordable protein at scale."
              </p>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-cream p-4">
                <FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-bronze" />
                <p className="text-sm leading-relaxed text-foreground/75">
                  <strong className="text-primary">Building industry talent</strong> through poultry research and academic partnerships — investing in the next generation of scientists, technicians, and farm leaders that will scale Ethiopia's protein economy.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integrated value chain visualization */}
      <ValueChainFlow />

      {/* Journey — visual timeline */}
      <section className="bg-background py-24">
        <div className="container-wide">
          <Reveal><p className="eyebrow">Our Journey</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl">From a single supply line to a fully integrated system.</h2></Reveal>

          <div className="relative mt-14">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-secondary via-bronze to-primary md:left-1/2 md:-translate-x-1/2" aria-hidden />
            <ol className="space-y-8">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <li className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <span className="absolute left-4 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-secondary ring-4 ring-background md:left-1/2" aria-hidden />
                    <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                      <span className="text-sm font-bold uppercase tracking-widest text-secondary">{t.year}</span>
                      <h3 className="mt-2 text-2xl font-bold text-primary">{t.title}</h3>
                    </div>
                    <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <p className="text-foreground/75 leading-relaxed">{t.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="bg-cream py-24">
        <div className="container-wide">
          <Reveal><p className="eyebrow">Key Milestones</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Proof points along our path to national scale.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {milestones.map((m, i) => (
              <Reveal key={m} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background px-5 py-4 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-base font-medium text-foreground/85">{m}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 text-center text-xl font-semibold italic text-primary md:text-2xl">
              "Rooted in science. Driven by integration. Committed to nourishing nations."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="container-wide">
          <Reveal><p className="eyebrow">Our Values</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl">Integration. Execution. Impact.</h2></Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"><v.icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKING FORWARD + FINAL STATEMENT */}
      <section className="bg-background py-20">
        <div className="container-tight">
          <Reveal><p className="eyebrow">Looking Forward</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">
              Evolving from an integrated production system into a <span className="text-secondary">resource-secured, climate-resilient and scalable agribusiness platform.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-tight text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Final Statement</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-8 text-3xl font-extrabold leading-tight md:text-5xl text-balance">
              Birnihigo Integrated Farms is not simply producing poultry. <span className="text-secondary italic">It is redefining how poultry is produced, integrated, and delivered — at scale, and with purpose.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/investors" className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground hover:scale-[1.03] transition-transform">
              Investor Relations <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}