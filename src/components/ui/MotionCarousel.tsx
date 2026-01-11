"use client";

import { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/home/home_hero.webp",
  "/home/home_hero_2.webp",
  "/home/home_hero_3.webp",
];

const MotionImage = motion(Image);

export function MotionCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const nextStep = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

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
        <MotionImage
          key={index}
          src={images[index]}
          alt={`Carousel image ${index + 1}`}
          fill // Uses the parent aspect ratio
          priority={index === 0} // Loads the first image instantly for better speed
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className="object-cover" // Replaces w-full h-full
          sizes="(max-width: 896px) 100vw, 896px" // Helps Next.js serve the right size
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
