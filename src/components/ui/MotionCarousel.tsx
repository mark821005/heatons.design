import { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "/home/home_hero.png",
  "/home/home_hero_2.png",
  "/home/home_hero_3.png",
];

export function MotionCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const nextStep = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevStep = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // --- Autorotate Logic ---
  useEffect(() => {
    // If user is hovering, don't start the timer
    if (isHovered) return;

    const interval = setInterval(() => {
      nextStep();
    }, 4000); // 6000ms = 6 seconds

    // Cleanup: This clears the timer if the component unmounts
    // or if the index changes manually (resetting the 6s window)
    return () => clearInterval(interval);
  }, [index, isHovered]);
  // ------------------------

  return (
    <div
      className="relative w-full max-w-4xl mx-auto aspect-[683/512] overflow-hidden rounded-2xl group z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === i ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
