"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface GridItem {
  src: string;
  alt?: string;
  ref: string;
  categories: string[];
}

interface ImageGridProps {
  items: GridItem[];
}

export function Gallery({ items }: ImageGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  // Track which image is currently being viewed in the modal
  const [selectedImage, setSelectedImage] = useState<GridItem | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) =>
          item.categories.some(
            (cat) => cat.toLowerCase() === activeFilter.toLowerCase()
          )
        );

  // --- NAVIGATION LOGIC ---
  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.ref === selectedImage.ref
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  }, [selectedImage, filteredItems]);

  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.ref === selectedImage.ref
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  }, [selectedImage, filteredItems]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  const filterOptions = [
    "all",
    "people",
    "kids",
    "animals",
    "interests",
    "seasonal",
    "celebrity",
  ];

  return (
    <div className="w-full">
      {/* 1. STICKY FILTER BAR */}
      <div className="sticky top-17 z-40 w-full bg-white/80 backdrop-blur-md py-3 mb-8 border-b border-zinc-100/50">
        <div className="flex flex-wrap justify-center gap-3">
          {filterOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                activeFilter === cat
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-zinc-600 border-zinc-200 hover:border-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. THE DIALOG ROOT */}
      {/* onOpenChange cleans up state when the modal closes */}
      <Dialog onOpenChange={(open) => !open && setSelectedImage(null)}>
        <div
          key={activeFilter}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10 mb-24"
        >
          {filteredItems.map((item) => (
            <div key={item.ref} className="animate-in fade-in duration-500">
              <span className="block mb-2 font-mono text-sm text-zinc-600 uppercase tracking-tight">
                {item.ref}
              </span>

              <DialogTrigger asChild>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 cursor-zoom-in"
                >
                  <Image
                    src={item.src}
                    alt={item.alt || ""}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </DialogTrigger>
            </div>
          ))}
        </div>

        {/* 3. MODAL CONTENT */}
        <DialogContent className="max-w-[95vw] lg:max-w-[85vw] h-[90vh] p-0 border-none bg-transparent shadow-none focus:outline-none flex items-center justify-center">
          <VisuallyHidden.Root>
            <DialogTitle>View {selectedImage?.ref}</DialogTitle>
          </VisuallyHidden.Root>

          {/* Custom Close Button */}
          <DialogClose className="fixed right-6 top-6 z-[60] rounded-full bg-black/40 p-2 text-white backdrop-blur-md hover:bg-black/80 transition-all">
            <X size={24} />
          </DialogClose>

          {selectedImage && (
            <div className="relative flex items-center justify-center w-full h-full group">
              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 z-[60] p-3 rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
              >
                <ChevronLeft size={32} />
              </button>

              <div className="relative w-full h-full p-4 lg:p-12">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.ref}
                  fill
                  className="object-contain"
                  priority
                  sizes="90vw"
                />
              </div>

              {/* Right Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 z-[60] p-3 rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
              >
                <ChevronRight size={32} />
              </button>

              {/* Ref Label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white font-mono text-xs uppercase tracking-widest">
                {selectedImage.ref}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
