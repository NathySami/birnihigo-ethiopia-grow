import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bird, Compass, HeartHandshake, Sparkles, Telescope, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import hoopoe from "@/assets/hoopoe.jpg";

const timeline = [
  { year: "2013", title: "Establishment", body: "Fertile egg import and day-old chick supply operation begins." },
  { year: "2014–2018", title: "Integration Phase", body: "Hatchery, feed mill, and broiler operations brought in-house." },
  { year: "2019–Present", title: "Industrial Scale", body: "Processing plant, biosecure farms, and contract farming network expand." },
];

const values = [
  { icon: Sparkles, title: "Innovation for Impact", body: "Proven and emerging technologies driving efficiency, quality, and accessibility." },
  { icon: Telescope, title: "Vision-Driven Excellence", body: "Building toward our own Grandparent farm within 5–7 years for genetic independence." },
  { icon: HeartHandshake, title: "Integrity & Responsibility", body: "Transparent, ethical operations prioritizing health, affordability, and stewardship." },
  { icon: Users, title: "Empowerment & Inclusion", body: "Inclusive development through contract farming and skill-building for youth and women." },
  { icon: Compass, title: "Sustainable Growth", body: "Responsible production and export strategies that strengthen food security." },
  { icon: Bird, title: "Inspired by Hoopoe", body: "Elegance, intelligence, resilience, and an enduring affinity to nature." },
];

export default function About() {
  useEffect(() => { document.title = "About — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="An eco-centric agribusiness, inspired by the Hoopoe — Birnihigo."
        subtitle="Established in 2013, Birnihigo Integrated Farms (BIF) has evolved from a day-old chick supply operation into Ethiopia's first vertically integrated poultry value chain — from breeding and hatchery to processing and market delivery."
      />

      {/* Hoopoe inspiration */}
      <section className="bg-background py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal>
            <div className="lg:col-span-5">
              <img src={hoopoe} alt="Hoopoe — Birnihigo in local language" className="w-full rounded-[2rem] object-cover shadow-elegant" loading="lazy" width={1280} height={960} />
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

      {/* Vision & Mission */}
      <section className="bg-cream py-24">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-gradient-cafe p-10 text-primary-foreground shadow-elegant">
              <p className="eyebrow !text-secondary">Our Vision</p>
              <p className="mt-6 text-2xl font-bold leading-snug md:text-3xl text-balance">
                To emerge as the top poultry company in the industry — boosting national per capita consumption, building regional export capacity, and developing our own GP farm within 5 to 7 years.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[2rem] bg-background p-10 shadow-card border border-border">
              <p className="eyebrow">Our Mission</p>
              <p className="mt-6 text-2xl font-bold leading-snug text-primary md:text-3xl text-balance">
                "To nourish humanity with transparency and integrity by implementing a fully integrated poultry value chain that delivers nutritious chicken meat at a truly affordable price."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-background py-24">
        <div className="container-wide">
          <Reveal><p className="eyebrow">Our Journey</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl">From a single supply line to a fully integrated system.</h2></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                  <span className="text-sm font-bold uppercase tracking-widest text-secondary">{t.year}</span>
                  <h3 className="mt-3 text-xl font-bold text-primary">{t.title}</h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24">
        <div className="container-wide">
          <Reveal><p className="eyebrow">Our Values</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl">Integration. Execution. Impact.</h2></Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-background p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"><v.icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-tight rounded-[2rem] bg-gradient-saffron p-10 text-center md:p-14">
          <p className="text-3xl font-bold text-secondary-foreground md:text-4xl">First fully integrated poultry model in Ethiopia.</p>
          <p className="mt-4 text-secondary-foreground/85">Built under real operational conditions. Designed for scalability and replication.</p>
          <Link to="/model" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors">
            Explore the model <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}