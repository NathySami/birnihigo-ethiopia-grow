import { useEffect, useState } from "react";
import { ArrowRight, Building2, Handshake, Mail, MapPin, Phone, TrendingUp, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { toast } from "sonner";

const types = [
  { icon: TrendingUp, t: "Investor Inquiries" },
  { icon: Handshake, t: "Partnership Requests" },
  { icon: Users, t: "Contract Farming" },
];

export default function Contact() {
  useEffect(() => { document.title = "Contact — Birnihigo Integrated Farms"; }, []);
  const [type, setType] = useState(types[0].t);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you — we'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build a sustainable protein future together."
        subtitle="Reach our operations site in Afar or our corporate liaison office in Addis Ababa."
      />

      <section className="bg-background py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          {/* Locations */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-3 text-secondary"><Building2 className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-widest">Operations & Production Site</span></div>
                <h3 className="mt-3 text-xl font-bold text-primary">Awash Sebat, Afar Region, Ethiopia</h3>
                <p className="mt-1 text-sm font-semibold text-bronze">Primary Production & Processing Hub</p>
                <p className="mt-3 text-foreground/70">Hatchery, broiler farms, feed mill, and Halal-certified processing operations.</p>
                <div className="mt-4 space-y-2 text-sm text-foreground/65">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> Afar Regional State, Ethiopia</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +251 22 241 3101</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-3 text-secondary"><Building2 className="h-5 w-5" /><span className="text-xs font-semibold uppercase tracking-widest">Corporate Liaison Office</span></div>
                <h3 className="mt-3 text-xl font-bold text-primary">Addis Ababa, Ethiopia</h3>
                <p className="mt-1 text-sm font-semibold text-bronze">Administrative Coordination, Stakeholder Engagement & Partnerships</p>
                <p className="mt-3 text-foreground/70">Kazanchis Garad Building, in front of ECA, 10th floor, Room 02.</p>
                <div className="mt-4 space-y-2 text-sm text-foreground/65">
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@birnihigo.com</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +251 911 20 94 05</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="lg:col-span-7 rounded-[2rem] bg-gradient-cafe p-8 text-primary-foreground shadow-elegant md:p-12">
              <div className="flex items-center gap-4">
                <Logo variant="icon-cafe" asLink={false} className="h-14 rounded-xl ring-1 ring-secondary/30" />
                <div>
                  <p className="eyebrow !text-secondary">Send a message</p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl text-balance">Tell us how we can collaborate.</h2>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {types.map((t) => {
                  const active = t.t === type;
                  return (
                    <button
                      type="button" key={t.t} onClick={() => setType(t.t)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${active ? "border-secondary bg-secondary text-secondary-foreground" : "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/85 hover:border-primary-foreground/40"}`}
                    >
                      <t.icon className="h-4 w-4" /> {t.t}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Full name" className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary focus:outline-none" />
                <input required type="email" name="email" placeholder="Email" className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary focus:outline-none" />
                <input name="company" placeholder="Company / Organization" className="sm:col-span-2 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary focus:outline-none" />
                <textarea required name="message" rows={5} placeholder="Your message" className="sm:col-span-2 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary focus:outline-none resize-none" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground hover:scale-[1.03] transition-transform shadow-saffron">
                Send message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}