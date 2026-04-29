import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import scrollEgg from "@/assets/real-farm-landscape.jpg";
import scrollChick from "@/assets/real-broiler-house-silo.jpg";
import scrollChicken from "@/assets/real-broiler-house-interior.jpg";
import scrollProduct from "@/assets/market-ready-delivery.jpg";

const stages = [
  { src: scrollEgg, alt: "Birnihigo farm landscape in Afar, Ethiopia", label: "Foundation", caption: "Building from the ground up" },
  { src: scrollChick, alt: "Automated feed silos at Birnihigo poultry house", label: "Infrastructure", caption: "Modern facilities, precision care" },
  { src: scrollChicken, alt: "Chickens inside Birnihigo bio-secure broiler house", label: "Growing", caption: "Raised to the highest standards" },
  { src: scrollProduct, alt: "Birnihigo delivering fresh poultry directly to community customers", label: "Market Ready", caption: "Delivered fresh to your table" },
];

const ScrollytellingHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.6, 0]);
  const cardY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.55, 0.35, 0.2]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background images */}
        {stages.map((stage, i) => (
          <StageImage key={stage.label} stage={stage} index={i} activeIndex={activeIndex} />
        ))}

        {/* Dynamic overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-primary-deep/80 via-primary-deep/50 to-primary-deep/85"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/30 via-transparent to-secondary/10" />

        {/* Glassmorphism Content Card */}
        <motion.div
          style={{ opacity: cardOpacity, y: cardY }}
          className="relative z-10 flex h-full items-center justify-center px-6"
        >
          <div className="w-full max-w-5xl rounded-[2rem] border border-primary-foreground/15 bg-primary-deep/35 px-6 py-12 text-center shadow-elegant backdrop-blur-md md:px-12 md:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-secondary md:text-sm">
              A National Protein Platform
            </p>
            <h1 className="mt-8 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem] text-balance">
              A System.<br />
              Not Just a <span className="text-secondary">Farm.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-primary-foreground/85 md:text-lg text-pretty">
              Birnihigo is a fully integrated, climate-resilient agribusiness platform — engineered to solve Ethiopia's protein challenge at national scale.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/about" className="group inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-8 py-4 text-base font-bold text-secondary-foreground shadow-saffron transition-all hover:scale-[1.03] hover:shadow-elegant">
                The Strategic Thesis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/investors" className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-primary-deep/40 px-8 py-4 text-base font-bold text-primary-foreground backdrop-blur-md transition-all hover:bg-secondary hover:text-secondary-foreground hover:border-secondary">
                Investor Relations
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stage indicators */}
        <StageIndicators activeIndex={activeIndex} />

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: cardOpacity }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/70"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
            <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/40 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-secondary"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StageImage = ({
  stage,
  index,
  activeIndex,
}: {
  stage: (typeof stages)[0];
  index: number;
  activeIndex: MotionValue<number>;
}) => {
  const opacity = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 1 : dist < 1 ? 1 - (dist - 0.5) * 2 : 0;
  });

  const scale = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 1 ? 1 + (1 - dist) * 0.05 : 1;
  });

  return (
    <motion.img
      src={stage.src}
      alt={stage.alt}
      style={{ opacity, scale }}
      className="absolute inset-0 h-full w-full object-cover"
      loading={index === 0 ? "eager" : "lazy"}
    />
  );
};

const StageIndicators = ({ activeIndex }: { activeIndex: MotionValue<number> }) => {
  return (
    <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-6 md:flex">
      {stages.map((stage, i) => (
        <StageIndicator
          key={stage.label}
          index={i}
          label={stage.label}
          caption={stage.caption}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
};

const StageIndicator = ({
  index,
  label,
  caption,
  activeIndex,
}: {
  index: number;
  label: string;
  caption: string;
  activeIndex: MotionValue<number>;
}) => {
  const opacity = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1 : 0.4));
  const dotScale = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1.5 : 1));

  return (
    <motion.div style={{ opacity }} className="flex items-center gap-3 text-right text-primary-foreground">
      <div className="text-right">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">{label}</p>
        <p className="text-[11px] text-primary-foreground/70">{caption}</p>
      </div>
      <motion.span
        style={{ scale: dotScale }}
        className="inline-block h-2.5 w-2.5 rounded-full bg-secondary shadow-saffron"
      />
    </motion.div>
  );
};

export default ScrollytellingHero;