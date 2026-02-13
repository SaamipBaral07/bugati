"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryLightbox({ images }: { images: string[] }) {
  const [active, setActive] = useState<number | null>(null);

  function close() {
    setActive(null);
  }

  function prev() {
    if (active === null) return;
    setActive((active - 1 + images.length) % images.length);
  }

  function next() {
    if (active === null) return;
    setActive((active + 1) % images.length);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (active === null) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={src}
                alt={`DJ Bugati Gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={close}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X />
          </button>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight />
          </button>

          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={images[active]}
                alt={`DJ Bugati Large ${active + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
