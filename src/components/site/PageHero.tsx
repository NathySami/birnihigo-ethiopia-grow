import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const PageHero = ({ eyebrow, title, subtitle, align = "left" }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-cream pt-36 pb-20 md:pt-44 md:pb-28">
    <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_70%_30%,black,transparent)]">
      <div className="absolute -top-32 right-1/4 h-[28rem] w-[28rem] rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-[24rem] w-[24rem] rounded-full bg-bronze/20 blur-3xl" />
    </div>
    <div className={`container-wide ${align === "center" ? "text-center" : ""}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className={`eyebrow ${align === "center" ? "justify-center" : ""}`}
      >{eyebrow}</motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-primary md:text-6xl text-balance"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className={`mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);