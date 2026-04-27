import { useEffect } from "react";
import { Building2, Egg, Factory, Sprout, Truck, Wheat, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import farmHouse from "@/assets/farm-broiler-house.jpg";

const stages = [
  { icon: Egg, title: "Parent Stock Farm", body: "Our integrated value chain begins not at the hatchery but at the parent stock farm — securing the genetic foundation for productivity and product quality." },
  { icon: Sprout, title: "Hatchery", body: "Controlled incubation delivering high-quality, disease-free day-old chicks." },
  { icon: Wheat, title: "Feed Mill & Crop Cultivation", body: "A fully integrated feed mill with 6 tons/hour capacity producing diverse animal feed — primarily high-quality poultry feed in mash, crumble and pellet forms — fed by 2,000+ hectares of maize and soybean cultivation." },
  { icon: Building2, title: "Broiler Production", body: "Company-owned farms plus a growing contract farming network." },
  { icon: Factory, title: "Halal-Certified Processing", body: "HACCP-aligned, Halal-certified processing facility with 48 tons/day capacity." },
  { icon: Truck, title: "Cold Chain & Distribution", body: "End-to-end logistics ensuring product integrity from plant to market." },
];

const results = ["Cost control across every stage", "Consistent product quality", "Scalable national production", "Reliable market supply"];

export default function Model() {
  useEffect(() => { document.title = "Our Model — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Our Model"
        title="From Farm to Fork: a fully integrated system."
        subtitle="Birnihigo integrates every stage of poultry production into one coordinated, traceable, execution-driven system."
        image={farmHouse}
        imageAlt="Long view inside a Birnihigo broiler house — automated feeding lines and bio-secure environment"
      />

      <section className="bg-background py-24">
        <div className="container-wide">
          <ol className="relative space-y-6 md:space-y-8">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-secondary via-bronze to-primary md:left-8" aria-hidden />
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <li className="relative flex gap-6 rounded-2xl border border-border bg-card p-6 pl-16 shadow-card md:gap-8 md:pl-20">
                  <span className="absolute left-3 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-saffron text-sm font-bold text-secondary-foreground shadow-soft md:left-5 md:h-11 md:w-11 md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="hidden shrink-0 sm:block">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary md:text-2xl">{s.title}</h3>
                    <p className="mt-2 text-foreground/70 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gradient-cafe py-24 text-primary-foreground">
        <div className="container-tight text-center">
          <Reveal><p className="eyebrow !text-secondary justify-center">The Result</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 text-3xl font-bold md:text-5xl text-balance">Integration unlocks what fragmentation cannot.</h2></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {results.map((r, i) => (
              <Reveal key={r} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4 text-left">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-base font-medium">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}