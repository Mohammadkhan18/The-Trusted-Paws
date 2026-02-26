"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      el.style.transform = `translateY(${scrolled * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background with parallax */}
      <div ref={heroRef} className="absolute inset-0 -top-16 will-change-transform">
        {/* Deep forest gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2F27] via-[#2C4A3E] to-[#1A2F27]" />
        {/* Organic blob shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-forest-light/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/10 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/10 opacity-20" />

        {/* Decorative paw prints scattered */}
        {["top-32 left-16", "top-20 right-40", "bottom-40 left-32", "bottom-24 right-24", "top-1/2 left-12"].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} text-gold/10 text-5xl select-none`}
            style={{ transform: `rotate(${i * 37}deg)` }}
          >
            🐾
          </span>
        ))}

        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold-light text-xs font-sans tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-8"
              style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
              Kondapur's Premier Pet Salon
            </div>

            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-cream leading-[1.05] mb-6"
              style={{ animation: "fadeUp 0.8s ease 0.3s both" }}
            >
              Where Every Pet
              <br />
              Deserves to{" "}
              <em className="text-gradient not-italic">Feel Royal</em>
            </h1>

            <p
              className="font-body text-cream/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ animation: "fadeUp 0.8s ease 0.5s both" }}
            >
              Luxury grooming crafted with care, love, and expertise. We treat your beloved companions with the gentle touch and attention they truly deserve.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ animation: "fadeUp 0.8s ease 0.7s both" }}
            >
              <a
                href="#booking"
                className="group bg-gold hover:bg-gold-light text-charcoal font-sans font-medium text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 flex items-center gap-2"
              >
                Book an Appointment
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+91961880090"
                className="bg-cream/10 hover:bg-cream/20 text-cream border border-cream/20 font-sans text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>

            {/* Stats bar */}
            <div
              className="mt-14 grid grid-cols-3 gap-6 border-t border-cream/10 pt-10"
              style={{ animation: "fadeUp 0.8s ease 0.9s both" }}
            >
              {[
                { number: "500+", label: "Happy Pets" },
                { number: "4.9★", label: "Avg Rating" },
                { number: "3+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-semibold text-gold-light mb-1">
                    {stat.number}
                  </div>
                  <div className="font-sans text-xs text-cream/50 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

         {/* Visual card */}
          <div
            className="hidden lg:flex justify-center items-center"
            style={{ animation: "fadeIn 1.2s ease 0.5s both" }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl scale-110" />

              {/* Main card */}
              <div className="relative glass rounded-3xl overflow-hidden w-80">
                {/* Pet grooming image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src="hero.avif"
                    alt="Happy dog being groomed"
                    className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay at bottom for text bleed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Card text content */}
                <div className="p-6 text-center">
                  <div className="font-display text-cream text-xl font-medium mb-2">
                    Premium Grooming
                  </div>
                  <div className="font-body text-cream/60 text-sm mb-5 leading-relaxed">
                    Tailored sessions for every breed, size, and temperament
                  </div>
                  {/* Services chips */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Bath & Dry", "Haircut", "Nail Trim", "Ear Clean", "De-shed"].map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-gold/20 text-gold-light border border-gold/20 rounded-full px-3 py-1 font-sans"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gold text-charcoal text-xs font-sans font-semibold px-4 py-2 rounded-full shadow-lg">
                Trusted ✓
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cream text-charcoal text-xs font-sans font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                📍 Kondapur, Hyd
              </div>
            </div>
          </div>
        </div>
      </div>

  
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-cream">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}
