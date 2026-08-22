import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

const offsets: Record<Direction, { opacity: number; x?: number; y?: number; scale?: number }> = {
  up: { opacity: 0, y: 40 },
  left: { opacity: 0, x: -30 },
  right: { opacity: 0, x: 30 },
  scale: { opacity: 0, scale: 0.95 },
};

type RevealProps = MotionProps & {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

/** Entrada suave quando o bloco encosta na viewport. Dispara uma vez só. */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.8,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={offsets[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
