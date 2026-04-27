import { useEffect } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Droplets, Flame, Leaf, Recycle, Sun, Users, Sprout, Zap } from "lucide-react";
import { ValueChainFlow } from "@/components/site/ValueChainFlow";
import sustain from "@/assets/sustainability.jpg";
import farmGrow from "@/assets/farm-grow-out.jpg";
import farmFeederCloseup from "@/assets/farm-feeder-closeup.jpg";

const groups = [
  { title: "Circular Economy", icon: Recycle, items: ["100% waste converted to fertilizer", "99.9% treated water reuse", "On-site biogas production"] },
  { title: "Climate Resilience", icon: Sun, items: ["Moringa-based feed integration", "Heat-adaptive farm housing", "Water conservation systems"] },
  { title: "Social Impact", icon: Users, items: ["Contract farming inclusion", "Youth employment pathways", "Women empowerment"] },
];

export default function Sustainability() {
  useEffect(() => { document.title = "Sustainability — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Sustainability through system design — not as an add-on."
        subtitle="Our climate-resilient, low-emission, and environmentally sustainable production system aligns with global ESG priorities and Ethiopia's food security ambitions."
      />

      {/* 100% Circular Waste-to-Resource highlight */}
      <section className="bg-gradient-cafe py-16 text-primary-foreground">
        <div className="container-wide grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow !text-secondary">Closed-Loop System</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl text-balance">
              <span className="text-secondary">100% Circular</span> Waste-to-Resource System
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80 md:text-lg">
              Every output reclaimed — converted into organic fertilizer and renewable energy that powers the next cycle of production.
            </p>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-secondary/30 bg-primary-foreground/5 p-4 text-center">
              <Sprout className="mx-auto h-6 w-6 text-secondary" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">Fertilizer</p>
            </div>
            <div className="rounded-2xl border border-secondary/30 bg-primary-foreground/5 p-4 text-center">
              <Zap className="mx-auto h-6 w-6 text-secondary" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">Renewable Energy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal>
            <img src={farmGrow} alt="Healthy broiler flock in a Birnihigo bio-secure grow-out house — sustainable, controlled production" className="lg:col-span-5 w-full rounded-[2rem] object-cover h-[480px] shadow-elegant" loading="lazy" width={1280} height={960} />
          </Reveal>
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Recycle, k: "100%", l: "Waste → Fertilizer" },
              { icon: Droplets, k: "99.9%", l: "Water Reused" },
              { icon: Flame, k: "Biogas", l: "Energy Integration" },
              { icon: Leaf, k: "Moringa", l: "Feed Innovation" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.07}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <s.icon className="h-6 w-6 text-secondary" />
                  <p className="mt-4 text-3xl font-bold text-primary">{s.k}</p>
                  <p className="mt-1 text-sm text-foreground/65">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-background p-7 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><g.icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-xl font-bold text-primary">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-foreground/75"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Waste management — circular model */}
      <section className="bg-background py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal><p className="eyebrow">Waste Management</p></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-4xl text-balance">
                  A true circular model — where no resource is wasted.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                  At Birnihigo Integrated Farms, sustainability is embedded in every stage of our operation. Our waste management system transforms <strong className="text-primary">100% of organic solid and liquid waste</strong> into valuable outputs — high-grade organic fertilizer used in our crop cultivation, treated clean water, and renewable biogas energy.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <img
                  src={farmFeederCloseup}
                  alt="Close-up of automated pan feeders surrounded by healthy broilers — efficient feed conversion that reduces waste"
                  className="mt-8 w-full rounded-[2rem] object-cover h-[280px] shadow-elegant"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid gap-5 sm:grid-cols-3">
              {[
                { icon: Sprout, title: "Organic Fertilizer", body: "High-grade fertilizer that powers our 2,000+ ha of maize and soybean cultivation." },
                { icon: Droplets, title: "Treated Clean Water", body: "Liquid waste treated and reused across operations — closing the water loop." },
                { icon: Zap, title: "Renewable Biogas", body: "On-site biogas generation that offsets fossil energy consumption." },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-saffron text-secondary-foreground">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-primary">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}