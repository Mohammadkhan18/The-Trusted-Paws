"use client";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryItems = [
  { src: "/gallery/pet-1.jpeg",  label: "Fresh & Fluffy",          span: "col-span-2 row-span-2" }, // big hero
  { src: "/gallery/pet-2.jpeg",  label: "Post-Groom Glow",         span: "" },
  { src: "/gallery/pet-3.jpeg",  label: "Spa Day Done Right",       span: "" },
  { src: "/gallery/pet-4.jpeg",  label: "Perfect Trim",             span: "col-span-2" },            // wide
  { src: "/gallery/pet-5.jpeg",  label: "Happy Client",             span: "row-span-2" },
  { src: "/gallery/pet-6.jpeg",  label: "All Clean!",               span: "row-span-2" },            // tall
  { src: "/gallery/pet-7.jpeg",  label: "Silky Coat",               span: "" },
  { src: "/gallery/pet-8.jpeg",  label: "Bath & Blow-Dry",          span: "" },
  { src: "/gallery/pet-9.jpeg",  label: "Nail Day",                 span: "col-span-2" },            // wide
  { src: "/gallery/pet-10.jpeg", label: "Good Boy ✓",               span: "" },
  { src: "/gallery/pet-11.jpeg", label: "Pampered Pup",             span: "" },
  { src: "/gallery/pet-12.jpeg", label: "Groomed to Perfection",    span: "" },
    { src: "/gallery/pet-16.jpeg", label: "Pure Joy",                 span: "" },
  { src: "/gallery/pet-13.jpeg", label: "Happy Tails",              span: "col-span-2" },            // wide
  { src: "/gallery/pet-14.jpeg", label: "Shiny & Bright",           span: "" },
  { src: "/gallery/pet-15.jpeg", label: "Salon Fresh",              span: "" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const total = galleryItems.length;

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 55);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightbox((l) => ((l! + 1) % total));
      if (e.key === "ArrowLeft")  setLightbox((l) => ((l! - 1 + total) % total));
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, total]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#FAF6F0] relative overflow-hidden"
    >
      {/* BG blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A84C]/6 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2C4A3E]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal font-sans text-xs tracking-[0.3em] text-[#8B6F47] uppercase mb-4">Our Work</p>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-tight mb-5">
            Fresh from the Salon
          </h2>
          <div className="reveal w-16 h-px bg-[#C9A84C] mx-auto mb-5" />
          <p className="reveal font-body text-[#1A1A1A]/60 text-lg">
            Every groom is a masterpiece. Here's a glimpse of us.
          </p>
        </div>

        {/* ── Bento Grid (desktop 4-col, mobile 2-col) ── */}
        <div
          className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          style={{ gridAutoRows: "180px" }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl cursor-zoom-in
                border border-[#E8DDD0]/60 hover:border-[#2C4A3E]/20
                transition-all duration-500 hover:shadow-xl hover:shadow-[#2C4A3E]/10 hover:-translate-y-0.5
                ${item.span}
              `}
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.07]"
                loading="lazy"
                draggable={false}
              />

              {/* Persistent bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            
              {/* Zoom pill */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/25 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-1.5 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn className="w-3 h-3 text-white/80" strokeWidth={1.5} />
                <span className="text-white/60 text-[10px] font-sans hidden sm:block">View</span>
              </div>

              {/* Forest overlay */}
              <div className="absolute inset-0 bg-[#2C4A3E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-20">
            <span className="font-sans text-white/35 text-xs tracking-widest">
              {lightbox + 1} / {total}
            </span>
            <button
              onClick={() => setLightbox(null)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" strokeWidth={1.5} />
            </button>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => ((l! - 1 + total) % total)); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>

          {/* Main image */}
          <div
            className="relative w-full max-w-4xl mx-12 md:mx-20 rounded-2xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "72vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightbox}
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].label}
              className="w-full h-full object-contain bg-black"
              style={{ maxHeight: "72vh" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
              <p className="font-sans text-white/30 text-xs mt-0.5">
                ← → navigate · Esc close
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => ((l! + 1) % total)); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 px-4 py-3 overflow-x-auto z-20"
            onClick={(e) => e.stopPropagation()}
            style={{ scrollbarWidth: "none" }}
          >
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`flex-shrink-0 w-11 h-11 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  i === lightbox
                    ? "border-[#C9A84C] scale-110 opacity-100"
                    : "border-white/10 opacity-40 hover:opacity-75 hover:scale-105"
                }`}
              >
                <img src={item.src} alt="" className="w-full h-full object-cover" draggable={false} />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}