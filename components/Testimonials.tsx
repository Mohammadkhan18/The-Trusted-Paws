"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    pet: "Labrador – Bruno",
    rating: 5,
    text: "Absolutely love The Trusted Paws! Bruno comes back looking like a totally different, much happier dog every single time. The team is so gentle and patient with him.",
    avatar: "🧑‍💼",
  },
  {
    name: "Rahul Menon",
    pet: "Persian Cat – Luna",
    rating: 5,
    text: "Luna is notoriously shy around strangers, but the groomers here make her feel so comfortable. The results are always flawless and the communication is excellent.",
    avatar: "👨‍💻",
  },
  {
    name: "Ananya Reddy",
    pet: "Poodle – Coco",
    rating: 5,
    text: "Best grooming salon in Kondapur, no contest. Coco's coat looks immaculate after every visit. They truly care about the animals, not just the business.",
    avatar: "👩‍🎨",
  },
  {
    name: "Vikram Iyer",
    pet: "Beagle – Max",
    rating: 5,
    text: "Professional, punctual, and wonderful with pets. Max actually gets excited when we park near the salon — that says everything! Highly recommend.",
    avatar: "👨‍🔬",
  },
  {
    name: "Sneha Kapoor",
    pet: "Golden Retriever – Buddy",
    rating: 5,
    text: "The staff here is incredibly knowledgeable. They noticed a small skin issue on Buddy and advised me to see a vet. That extra care means the world to me.",
    avatar: "👩‍⚕️",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-forest relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-light/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-16">
          <p className="reveal font-sans text-xs tracking-[0.3em] text-gold-light/60 uppercase mb-4">
            Testimonials
          </p>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-medium text-cream leading-tight mb-6">
            What Pet Parents Say
          </h2>
          <div className="reveal w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Featured testimonial */}
        <div className="reveal">
          <div className="glass rounded-3xl p-10 md:p-14 text-center relative">
            {/* Quote mark */}
            <div className="absolute top-8 left-10 text-6xl text-gold/20 font-serif leading-none select-none">
              "
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array(testimonials[active].rating).fill(null).map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="font-display text-cream/90 text-xl md:text-2xl italic leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-500">
              "{testimonials[active].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-2xl">
                <Image
                src='/Avatar_cat.png'               
                alt="avatar"
                width={100}
                height={100}
                className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="text-left">
                <div className="font-sans font-medium text-cream text-sm">
                  {testimonials[active].name}
                </div>
                <div className="font-body text-cream/50 text-xs italic">
                  {testimonials[active].pet}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-cream/20 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All reviews preview */}
        {/* <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-4 rounded-2xl border text-center transition-all duration-200 ${
                i === active
                  ? "border-gold/50 bg-gold/10"
                  : "border-cream/10 hover:border-cream/20 bg-cream/5"
              }`}
            >
              <div className="text-2xl mb-1">{t.avatar}</div>
              <div className="text-cream/70 text-xs font-sans">{t.name.split(" ")[0]}</div>
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
}
