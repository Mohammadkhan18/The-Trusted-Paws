"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sand/60 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="reveal">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-sand/80 shadow-2xl shadow-forest/10">
                <img
                  src="/family.jpg"
                  alt="Professional pet groomer caring for a dog"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />

                {/* Quote overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-cream text-lg font-medium italic drop-shadow-lg">
                    "Every pet is family"
                  </div>
                </div>
              </div>

              {/* Overlapping accent card */}
              <div className="absolute -bottom-6 -right-6 bg-forest rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-display font-bold text-gold-light">3+</div>
                <div className="text-cream/80 text-sm font-sans mt-1">Years of Excellence</div>
              </div>

              {/* Small floating badge — Trophy replaced with Lucide icon */}
              <div className="absolute -top-4 -left-4 bg-gold rounded-xl p-4 shadow-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <p className="reveal font-sans text-xs tracking-[0.3em] text-bark uppercase mb-4">
              Our Story
            </p>
            <h2 className="reveal font-display text-4xl lg:text-5xl font-medium text-charcoal leading-tight mb-6">
              Born from a Love
              <br />
              for <span className="italic text-forest">Every Animal</span>
            </h2>
            <div className="reveal w-16 h-px bg-gold mb-8" />
            <p className="reveal font-body text-charcoal/70 text-lg leading-relaxed mb-6">
              Nestled in the heart of Kondapur, The Trusted Paws was founded with one simple belief: 
              every pet deserves to feel cherished, comfortable, and beautiful. We're more than a grooming 
              salon — we're your pet's home away from home.
            </p>
            <p className="reveal font-body text-charcoal/70 text-lg leading-relaxed mb-10">
              Our certified groomers bring years of experience handling all breeds with patience and love. 
              We use only premium, pet-safe products that leave your furry friend looking and feeling their absolute best.
            </p>

            {/* Values row */}
            <div className="reveal grid md:grid-cols-3 gap-4">
              {[
                { icon: "💚", title: "Eco-Safe", desc: "Natural products only" },
                { icon: "🎓", title: "Certified", desc: "Expert groomers" },
                { icon: "❤️", title: "Loving Care", desc: "Stress-free sessions" },
              ].map((val) => (
                <div key={val.title} className="text-center p-4 rounded-2xl bg-warm border border-sand/60 hover:border-forest/20 transition-colors">
                  <div className="text-2xl mb-2">{val.icon}</div>
                  <div className="font-sans font-medium text-charcoal text-sm mb-1">{val.title}</div>
                  <div className="font-body text-charcoal/50 text-xs">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
