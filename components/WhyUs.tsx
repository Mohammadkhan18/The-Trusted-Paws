"use client";
import { useEffect, useRef } from "react";
import { FlaskConical, Music2, BadgeCheck, Camera, Clock3, RefreshCcw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: FlaskConical,
    title: "Premium, Pet-Safe Products",
    desc: "We use only vet-approved, paraben-free shampoos and conditioners sourced from trusted brands. Zero harmful chemicals.",
  },
  {
    icon: Music2,
    title: "Stress-Free Environment",
    desc: "Our salon is designed to keep your pet calm — soft music, gentle lighting, and soothing scents throughout.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Groomers",
    desc: "Every groomer is trained and certified with hands-on experience across all breeds, sizes, and temperaments.",
  },
  {
    icon: Camera,
    title: "Photo Updates",
    desc: "We send you adorable before-and-after photos so you can see the transformation while you wait.",
  },
  {
    icon: Clock3,
    title: "On-Time Promise",
    desc: "We respect your time. Appointments run on schedule and your pet is ready when promised.",
  },
  {
    icon: RefreshCcw,
    title: "Satisfaction Guarantee",
    desc: "Not happy with the groom? We'll make it right, no questions asked. Your satisfaction is our priority.",
  },
];

export default function WhyUs() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-warm relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="reveal font-sans text-xs tracking-[0.3em] text-bark uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-medium text-charcoal leading-tight mb-6">
            The <em>Trusted Paws</em> Difference
          </h2>
          <div className="reveal w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="reveal group">
              <div className="bg-cream rounded-3xl p-8 border border-sand/80 hover:border-forest/20 hover:shadow-xl hover:shadow-forest/5 transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-forest/8 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-forest/15 transition-all duration-300">
                  <feat.icon className="w-6 h-6 text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-charcoal text-lg font-semibold mb-3">
                  {feat.title}
                </h3>
                <p className="font-body text-charcoal/60 text-base leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}