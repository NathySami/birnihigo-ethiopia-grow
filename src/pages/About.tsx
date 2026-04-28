import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bird, Compass, HeartHandshake, Sparkles, Telescope, Users, CheckCircle2, ShieldCheck, Globe2, Sprout, Factory, Handshake, GraduationCap, FlaskConical } from "lucide-react";
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
  { icon: Sprout, text: "Delivering affordable, high-quality poultry protein to the local market." },
  { icon: Handshake, text: "Empowering farmers through structured contract farming systems." },
  { icon: Globe2, text: "Advancing toward Halal-certified, export-ready production." },
  { icon: Factory, text: "Setting new standards through vertically integrated excellence." },
  { icon: ShieldCheck, text: "Upholding uncompromised, science-based biosecurity across all operations." },
  { icon: GraduationCap, text: "Building industry talent through poultry research and academic partnerships." },
];

const milestones = [
  "Established as chick supplier (2013)",
  "Introduced contract farming model from inception",
  "Transitioned to vertical integration (2014)",
  "Secured 42+ hectares bio-secured site",
  "Developed breeding, broiler, and processing infrastructure",
  "Institutionalized science-driven biosecurity systems",
  "Positioned for Halal-certified, export-ready production",
];

export default function About() {
  useEffect(() => { document.title = "About — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A vertically integrated poultry company, inspired by the Hoopoe — Birnihigo."
        subtitle="Established in 2013, Birnihigo Integrated Farms is driven by a simple but powerful vision: to make high-quality, affordable protein accessible while building a resilient, science-driven, and export-ready poultry system."
      />

      {/* Origin story */}
      <section className="bg-background pt-24 pb-12">
        <div className="container-tight">
          <Reveal><p className="eyebrow">Our Story</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
              From a day-old chick supply operation to a fully integrated, bio-secure value chain.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/75">
            <Reveal delay={0.08}>
              <p>
                From the very beginning, Birnihigo was built not only as a production company, but as a <strong className="text-primary">farmer-inclusive model</strong> — introducing contract farming as a core pillar of its operations and empowering local farmers through structured, market-linked poultry production systems.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                What began as a day-old chick supply operation has evolved into a fully integrated, bio-secure poultry value chain — from breeding and hatchery to broiler production, processing, and market delivery.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Located in <strong className="text-primary">Awash–Afar, Gabi Resu Zone</strong>, across 42+ hectares, Birnihigo operates within a conceptually bio-secured environment, guided by an unwavering principle:
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

      <section className="bg-cream py-20">
        <div className="container-tight rounded-[2rem] bg-gradient-saffron p-10 text-center md:p-14">
          <p className="text-3xl font-bold text-secondary-foreground md:text-4xl">42+ hectares of vertically integrated poultry excellence.</p>
          <p className="mt-4 text-secondary-foreground/85">From parent stock farm to Halal-certified processing — built under real operational conditions, designed for scalability and replication.</p>
          <Link to="/model" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors">
            Explore the model <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}