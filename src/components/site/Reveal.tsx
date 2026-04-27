import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export const Reveal = ({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};