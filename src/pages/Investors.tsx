import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Banknote, Building, Download, Globe2, Mail, Package, Wheat } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import facility from "@/assets/facility-exterior.jpg";

const cases = [
  { title: "Structural Market Gap", body: "Low protein consumption and a fragmented production system create a sizeable, durable opportunity." },
  { title: "Integrated Advantage", body: "Lower cost structure, full value chain control, and improved efficiency across stages." },
  { title: "Scalable Platform", body: "Targeting 1,500+ contract farmers — a model designed for replication across regions." },
  { title: "Multiple Revenue Streams", body: "DOC sales, meat production, animal feed, and organic fertilizer." },
];

const focus = [
  { icon: Banknote, t: "Debt / Equity Capital" },
  { icon: Building, t: "Infrastructure & Equipment" },
  { icon: Wheat, t: "Feed Mill & GP Unit" },
  { icon: Package, t: "Processing & Value-Add" },
  { icon: Globe2, t: "Export Partnerships" },
];

export default function Investors() {
  useEffect(() => { document.title = "Investor Relations — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="An investment in system transformation."
        subtitle="Beyond production volumes, Birnihigo is designed to deliver real impact — improving affordability, strengthening system efficiency, and ensuring consistent market supply."
        image={facility}
        imageAlt="Birnihigo Integrated Farms processing facility exterior under an Ethiopian sky"
      />

      <section className="bg-background py-24">
        <div className="container-wide">
          <Reveal><p className="eyebrow">The Investment Case</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-5xl text-balance">Why Birnihigo, why now.</h2></Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <span className="text-sm font-bold text-bronze">0{i + 1}</span>
                  <h3 className="mt-3 text-2xl font-bold text-primary">{c.title}</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-cafe py-24 text-primary-foreground">
        <div className="container-wide">
          <Reveal><p className="eyebrow !text-secondary">Business Highlights</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold md:text-5xl text-balance">Numbers that frame the platform.</h2></Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { k: "42 ha", l: "Bio-secured strategic site" },
              { k: "48 t/day", l: "Processing capacity" },
              { k: "2,000+", l: "Target contract farmers" },
              { k: "2,000+ ha", l: "Maize & soybean cultivation" },
              { k: "GP Unit", l: "Active grandparent stock plans" },
              { k: "Export-Ready", l: "Halal-certified for GCC & region" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.05}>
                <div className="border-l-2 border-secondary/60 pl-5">
                  <p className="text-4xl font-bold text-secondary md:text-5xl">{s.k}</p>
                  <p className="mt-2 text-base text-primary-foreground/80">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-wide">
          <Reveal><p className="eyebrow">Strategic Investment Focus</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold tracking-tight text-primary md:text-4xl">We welcome partners and investors interested in:</h2></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {focus.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 text-center shadow-card">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary"><f.icon className="h-5 w-5" /></div>
                  <p className="mt-4 text-sm font-semibold text-primary">{f.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-tight grid gap-4 rounded-[2rem] bg-primary p-10 text-primary-foreground md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow !text-secondary">Get the deck</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl text-balance">Download the Birnihigo investment overview.</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:scale-[1.03] transition-transform shadow-saffron">
              <Download className="h-4 w-4" /> Investment Deck
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> Contact IR <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}