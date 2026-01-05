import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // useSpring makes the bar move smoothly instead of snapping
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 1.5,
  });

  return (
    <motion.div
      className="h-0.75 bg-linear-to-r from-cyan-400 via-green-300 to-red-600 z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
}
