import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-drone.asset.mp4.json";
import heroPoster from "@/assets/aerial-afar-farm.jpg";

export const VideoHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const overlay = useTransform(scrollY, [0, 600], [0.55, 0.85]);
  const contentOpacity = useTransform(scrollY, [0, 400, 600], [1, 0.6, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cafe-deep">
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          aria-label="Aerial drone footage of Birnihigo industrial poultry infrastructure in Afar, Ethiopia"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-cafe-deep/40 via-cafe-deep/35 to-cafe-deep/95"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cafe-deep/80 via-cafe-deep/30 to-transparent" />
      <div className="absolute inset-0 mix-blend-overlay opacity-25 [background-image:radial-gradient(hsl(40_100%_73%/0.18)_1px,transparent_1px)] [background-size:4px_4px]" />

      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        className="container-wide relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary"
        >
          <span className="h-px w-10 bg-secondary" />
          African Protein Infrastructure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl mt-6 max-w-5xl text-cream text-balance"
        >
          Engineered for <span className="text-secondary">scale.</span><br />
          Built for <span className="italic font-light">resilience.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-cream/75"
        >
          Birnihigo is a premium, vertically integrated protein infrastructure platform —
          delivering industrial discipline, climate-smart systems and export-grade
          quality from the Horn of Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/investors"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-secondary-foreground shadow-saffron transition-all hover:shadow-elegant hover:bg-secondary-deep"
          >
            Investor Platform
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/model"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-cream transition-all hover:bg-cream/10"
          >
            Explore the System
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/60"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-cream/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoHero;
