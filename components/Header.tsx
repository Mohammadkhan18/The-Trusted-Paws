"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#booking" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-gold-light text-xl shadow-md group-hover:scale-105 transition-transform">
            🐾
          </div>
          <div>
            <div className="font-display text-lg font-semibold text-gold-light leading-tight">
              The Trusted Paws
            </div>
            <div className="text-[10px] tracking-[0.2em] text-bark uppercase font-sans">
              Premium Pet Grooming
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans tracking-wide text-gold-light hover:text-forest transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#booking"
            className="ml-4 bg-forest text-cream text-sm font-sans tracking-wider px-6 py-2.5 rounded-full hover:bg-forest-light transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-cream/98 backdrop-blur-md border-t border-sand/60 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-charcoal/80 hover:text-forest font-sans text-sm tracking-wide py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-forest text-cream text-sm font-sans text-center tracking-wider px-6 py-3 rounded-full hover:bg-forest-light transition-colors"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
