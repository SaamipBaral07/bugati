"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/gallery";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryImages.length);
  };

  // Keyboard support
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (activeIndex === null) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Gallery</h1>
      <p className="mt-3 max-w-2xl text-black/60">
        Moments from weddings, birthdays and events across Perth.
      </p>

      <div className="mt-6 grid gap-3 grid-cols-2 sm:mt-10 sm:gap-4 md:grid-cols-3">
        {galleryImages.map((src, i) => (
          <button
            key={src}
            onClick={() => open(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-black/5 sm:rounded-3xl"
          >
            <Image
              src={src}
              alt={`DJ Bugati event photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
              {/* Top controls */}
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-white/70">
                  {activeIndex + 1} / {galleryImages.length}
                </p>

                <button
                  onClick={close}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
                >
                  <X size={18} />
                  Close
                </button>
              </div>

              {/* Image */}
              <motion.div
                key={galleryImages[activeIndex]}
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-black"
              >
                <Image
                  src={galleryImages[activeIndex]}
                  alt={`DJ Bugati event photo ${activeIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Bottom controls */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={prev}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
                >
                  <ChevronLeft size={18} />
                  Prev
                </button>

                <button
                  onClick={next}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
