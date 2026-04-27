import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, ClipboardList, Cog, Microscope, Wrench } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const areas = [
  { icon: Wrench, t: "Production", d: "Hatchery, broiler, processing line operators and supervisors." },
  { icon: Microscope, t: "Veterinary", d: "Animal health, biosecurity, and quality assurance specialists." },
  { icon: Cog, t: "Engineering", d: "Maintenance, automation, and infrastructure expansion teams." },
  { icon: Briefcase, t: "Operations", d: "Supply chain, logistics, and contract farming coordination." },
  { icon: ClipboardList, t: "Administration", d: "Finance, HR, compliance, and corporate functions." },
];

export default function Careers() {
  useEffect(() => { document.title = "Careers — Birnihigo Integrated Farms"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Let's work with purpose."
        subtitle="Join a company committed to transforming agriculture, building national capacity, and developing future industry leaders."
      />

      <section className="bg-background py-24">
        <div className="container-wide grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-primary"><a.icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-xl font-bold text-primary">{a.t}</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-cream py-20">
        <div className="container-tight rounded-[2rem] bg-gradient-cafe p-10 text-center text-primary-foreground md:p-14">
          <h2 className="text-3xl font-bold md:text-4xl text-balance">Don't see your role? We're always meeting future leaders.</h2>
          <p className="mt-4 text-primary-foreground/75">Send your CV and a short note about how you'd contribute to Ethiopia's protein system.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground hover:scale-[1.03] transition-transform shadow-saffron">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}