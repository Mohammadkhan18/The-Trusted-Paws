"use client";
import { useEffect, useRef } from "react";
import { Droplets, Scissors, Sparkles, Ear, SmilePlus, Wind, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  price: string;
  tag: string | null;
};

const services: Service[] = [
  {
    icon: Droplets,
    title: "Signature Bath & Blow-Dry",
    desc: "Luxurious bath with breed-appropriate shampoos and conditioners, followed by professional blow-dry and brush-out.",
    price: "From ₹499",
    tag: "Most Popular",
  },
  {
    icon: Scissors,
    title: "Full Grooming Package",
    desc: "Comprehensive groom including bath, haircut, nail trimming, ear cleaning, and a spritz of pet-safe cologne.",
    price: "From ₹999",
    tag: "Best Value",
  },
  {
    icon: Sparkles,
    title: "Nail Care & Paw Spa",
    desc: "Nail trimming, filing, and a relaxing paw massage with moisturizing balm to keep paws soft and healthy.",
    price: "From ₹199",
    tag: null,
  },
  {
    icon: Ear,
    title: "Ear Cleaning & Hygiene",
    desc: "Gentle, thorough ear cleaning to prevent infections and maintain optimal ear health for your pet.",
    price: "From ₹149",
    tag: null,
  },
  {
    icon: SmilePlus,
    title: "Teeth Brushing",
    desc: "Professional dental hygiene session using pet-safe toothpaste to keep your pet's smile bright and breath fresh.",
    price: "From ₹249",
    tag: null,
  },
  {
    icon: Wind,
    title: "De-shedding Treatment",
    desc: "Specialized de-shedding treatment to reduce hair fall, followed by a thorough conditioning session.",
    price: "From ₹699",
    tag: "Seasonal",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-forest relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        {["top-10 left-10", "top-1/3 right-20", "bottom-20 left-1/3", "bottom-10 right-10"].map((pos, i) => (
          <span key={i} className={`absolute ${pos} text-6xl`}>🐾</span>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-forest-light/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-sans text-xs tracking-[0.3em] text-gold-light/70 uppercase mb-4">
            What We Offer
          </p>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-medium text-cream leading-tight mb-6">
            Our Grooming Services
          </h2>
          <div className="reveal w-16 h-px bg-gold mx-auto mb-6" />
          <p className="reveal font-body text-cream/60 text-lg max-w-xl mx-auto leading-relaxed">
            From quick touch-ups to full luxury sessions, we offer everything your pet needs to look and feel their best.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group relative bg-forest-light/40 border border-cream/10 rounded-3xl p-8 hover:border-gold/30 hover:bg-forest-light/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
            >
              {service.tag && (
                <span className="absolute top-6 right-6 text-xs bg-gold text-charcoal font-sans font-medium px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 mb-5 rounded-2xl bg-cream/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-gold-light group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-cream text-xl font-medium mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="font-body text-cream/60 text-base leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-sans font-semibold text-gold-light text-lg">
                  {service.price}
                </span>
                <a
                  href="#booking"
                  className="text-xs font-sans tracking-wider text-cream/50 hover:text-gold-light transition-colors group-hover:text-gold-light flex items-center gap-1"
                >
                  Book →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-14">
          <p className="font-body text-cream/60 mb-6 text-base">
            Not sure what your pet needs? Give us a call and we'll help you choose.
          </p>
          <a
            href="tel:+919618800990"
            className="inline-flex items-center gap-2 border border-gold/50 text-gold-light font-sans text-sm tracking-wider px-8 py-3.5 rounded-full hover:bg-gold/10 transition-all duration-300"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            +91 9618800990
          </a>
        </div>
      </div>
    </section>
  );
}