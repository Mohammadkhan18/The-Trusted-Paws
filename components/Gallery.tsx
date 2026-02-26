"use client";
import { useEffect, useRef } from "react";

const galleryItems = [
  { emoji: "🐩", label: "Poodle Groom", size: "large" },
  { emoji: "🦮", label: "Golden Retriever", size: "small" },
  { emoji: "🐱", label: "Cat Spa Day", size: "small" },
  { emoji: "🐕", label: "Full Groom", size: "small" },
  { emoji: "🐈", label: "Persian Cat", size: "large" },
  { emoji: "🦴", label: "Happy Pup", size: "small" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="reveal font-sans text-xs tracking-[0.3em] text-bark uppercase mb-4">
            Our Work
          </p>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-medium text-charcoal leading-tight mb-6">
            Fresh from the Salon
          </h2>
          <div className="reveal w-16 h-px bg-gold mx-auto mb-6" />
          <p className="reveal font-body text-charcoal/60 text-lg">
            Every groom is a masterpiece. Here's a glimpse of our happy clients.
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-3xl bg-gradient-to-br cursor-pointer
                ${i % 3 === 0 ? "md:row-span-2" : ""}
                ${i === 0 ? "from-forest/20 to-forest/5" : ""}
                ${i === 1 ? "from-gold/20 to-gold/5" : ""}
                ${i === 2 ? "from-bark/20 to-bark/5" : ""}
                ${i === 3 ? "from-forest-light/20 to-forest/5" : ""}
                ${i === 4 ? "from-sand/60 to-sand/20" : ""}
                ${i === 5 ? "from-gold/10 to-cream" : ""}
                border border-sand/80 hover:border-forest/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1
              `}
              style={{ minHeight: i % 3 === 0 ? "280px" : "180px" }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 mb-3">
                  {item.emoji}
                </span>
                <span className="font-sans text-sm text-charcoal/60 tracking-wide">
                  {item.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-3xl">
                <span className="text-cream font-display text-lg italic">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
