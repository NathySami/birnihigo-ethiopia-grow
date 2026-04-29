import { useEffect, useState } from "react";
import { ArrowRight, Building2, Handshake, Loader2, Mail, MapPin, Phone, TrendingUp, Users } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { toast } from "sonner";

const types = [
  { icon: TrendingUp, t: "Investor Inquiries" },
  { icon: Handshake, t: "Partnership Requests" },
  { icon: Users, t: "Contract Farming" },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  company: z.string().trim().max(150, "Company must be under 150 characters").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be under 2000 characters"),
});

type FormErrors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export default function Contact() {
  useEffect(() => { document.title = "Contact — Birnihigo Integrated Farms"; }, []);
  const [type, setType] = useState(types[0].t);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const raw = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors and try again.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      // Open the user's email client with a pre-filled message to info@birnihigo.com
      const subject = `[${type}] ${parsed.data.name}`;
      const body =
        `Inquiry type: ${type}\n` +
        `Name: ${parsed.data.name}\n` +
        `Email: ${parsed.data.email}\n` +
        `Company: ${parsed.data.company || "—"}\n\n` +
        `Message:\n${parsed.data.message}`;
      const mailto = `mailto:info@birnihigo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      toast.success("Opening your email client — thank you, we'll be in touch shortly.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please email info@birnihigo.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-colors";
  const inputCls = (err?: string) =>
    `${inputBase} ${err ? "border-destructive focus:border-destructive" : "border-primary-foreground/20 focus:border-secondary"}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build a sustainable protein future together."
        subtitle="Reach our operations site in Afar or our corporate liaison office in Addis Ababa."
      />

      <section className="bg-background py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-12 lg:items-start">
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
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> finance@birnihigo.com</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> hr@birnihigo.com</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> sales@birnihigo.com</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +251 911 20 94 05</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={submit}
              noValidate
              aria-label="Contact form"
              className="w-full rounded-[2rem] bg-gradient-cafe p-8 text-primary-foreground shadow-elegant md:p-12"
            >
              <div className="flex items-center gap-4">
                <Logo variant="icon-cafe" asLink={false} className="h-14 rounded-xl ring-1 ring-secondary/30" />
                <div>
                  <p className="eyebrow !text-secondary">Send a message</p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl text-balance">Tell us how we can collaborate.</h2>
                </div>
              </div>

              <fieldset className="mt-8">
                <legend className="sr-only">Inquiry type</legend>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {types.map((t) => {
                    const active = t.t === type;
                    return (
                      <button
                        type="button"
                        key={t.t}
                        onClick={() => setType(t.t)}
                        aria-pressed={active}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                          active
                            ? "border-secondary bg-secondary text-secondary-foreground"
                            : "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/85 hover:border-primary-foreground/40"
                        }`}
                      >
                        <t.icon className="h-4 w-4 shrink-0" /> {t.t}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                    Full name <span className="text-secondary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Jane Doe"
                    className={inputCls(errors.name)}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="jane@company.com"
                    className={inputCls(errors.email)}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                    placeholder="Optional"
                    className={inputCls(errors.company)}
                  />
                  {errors.company && (
                    <p id="company-error" className="text-xs text-destructive">{errors.company}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                    Your message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Tell us about your inquiry…"
                    className={`${inputCls(errors.message)} resize-y min-h-[140px]`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-saffron transition-transform hover:scale-[1.03] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>Sending… <Loader2 className="h-4 w-4 animate-spin" /></>
                  ) : (
                    <>Send message <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="text-xs text-primary-foreground/65">
                  Or email us directly at{" "}
                  <a href="mailto:info@birnihigo.com" className="font-semibold text-secondary hover:underline">
                    info@birnihigo.com
                  </a>
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
