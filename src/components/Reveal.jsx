import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Reveal sutil no scroll. Reutilizável entre seções.
// Respeita prefers-reduced-motion (apenas fade, sem deslocamento).
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  className = "",
  amount = 0.4,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
