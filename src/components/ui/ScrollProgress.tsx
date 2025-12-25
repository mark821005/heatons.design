import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // useSpring makes the bar move smoothly instead of snapping
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="h-1 bg-orange-600 z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
}
