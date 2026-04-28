import { useEffect } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import meat from "@/assets/chicken-meat.jpg";
import chicks from "@/assets/farm-young-flock.jpg";
import feed from "@/assets/real-feedmill-exterior.jpg";
import sustain from "@/assets/sustainability.jpg";

const products = [
  { img: meat, tag: "From Farm to Fork", title: "Fresh & Processed Chicken", items: ["Whole chicken", "Cut portions", "Packaged products"], note: "Halal-certified, cold-chain delivered." },
  { img: chicks, tag: "Day-Old Chicks", title: "High-quality DOCs", items: ["Reliable weekly supply", "Disease-free guarantee", "Modern hatchery sourced"], note: "For commercial and contract growers." },
  { img: feed, tag: "Animal Feed", title: "Poultry & Cattle Feed", items: ["Mash, crumble, pellet", "Optimized formulations", "On-site quality control"], note: "Produced at 6 tons/hour." },
  { img: sustain, tag: "Organic Fertilizer", title: "Circular Sustainability", items: ["Derived from poultry waste", "Soil-enriching", "Supports regenerative farming"], note: "100% of waste converted." },
];

export default function Products() {
  useEffect(() => { document.title = "Products — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Safe, affordable, and scalable poultry products."
        subtitle="Every product line is born from the same integrated system — guaranteeing traceability, quality, and consistency from breeder to buyer."
      />

      <section className="bg-background py-20 md:py-24">
        <div className="container-wide grid gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative h-72 overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={960} />
                  <span className="absolute left-5 top-5 rounded-full bg-secondary/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">{p.tag}</span>
                </div>
                <div className="p-7 md:p-9">
                  <h3 className="text-2xl font-bold text-primary md:text-3xl">{p.title}</h3>
                  <ul className="mt-5 space-y-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-foreground/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-bronze" />{it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-foreground/60 italic">{p.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}