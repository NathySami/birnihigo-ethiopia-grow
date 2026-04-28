import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import broilers from "@/assets/farm-broilers-detail.jpg";
import farmer from "@/assets/real-community-distribution.jpg";
import sustain from "@/assets/sustainability.jpg";
import feed from "@/assets/farm-broiler-house.jpg";
import meat from "@/assets/chicken-meat.jpg";
import facility from "@/assets/real-feedmill-exterior.jpg";
import grow from "@/assets/farm-grow-out.jpg";

const posts = [
  { img: facility, cat: "Sector", title: "Ethiopia's poultry sector — beyond the production lens", excerpt: "Why integration, not just production, is the unlock for affordable protein at national scale." },
  { img: meat, cat: "Quality", title: "Halal-certified processing, explained", excerpt: "What our halal certification really means — animal welfare, traceability, and ethical poultry production." },
  { img: farmer, cat: "Community", title: "Contract farming with purpose", excerpt: "How Birnihigo is empowering thousands of associations of women and youth across Ethiopia." },
  { img: sustain, cat: "Climate", title: "Why Moringa? The science behind our eco-feed initiative", excerpt: "From climate resilience to poultry health — a closer look at our moringa integration." },
  { img: feed, cat: "Operations", title: "Inside our bio-secure, future-ready facilities", excerpt: "A walk through the design choices that make Birnihigo's farms resilient and scalable." },
  { img: grow, cat: "Story", title: "From the land of origins — Afar — to every table we serve", excerpt: "A promise of nourishment, dignity, and purpose, written into our origin story." },
];

export default function Insights() {
  useEffect(() => { document.title = "Insights — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Industry perspectives, sustainability stories, and updates from the field."
        subtitle="Conversations on Ethiopia's poultry sector, food security, and what it takes to build climate-resilient agricultural systems."
      />

      <section className="bg-background py-20">
        <div className="container-wide grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={960} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{p.cat}</span>
                  <h3 className="mt-3 text-lg font-bold text-primary leading-snug group-hover:text-bronze transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" /></span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}