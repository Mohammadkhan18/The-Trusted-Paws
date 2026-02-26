import Link from "next/link";
import { PawPrint, Instagram, MessageCircle, Facebook, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: "Instagram", icon: Instagram },
    { label: "WhatsApp", icon: MessageCircle },
    { label: "Facebook", icon: Facebook },
  ];

  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Top wave */}
      <div className="overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-warm">
          <path d="M0,0 L0,40 Q360,60 720,30 Q1080,0 1440,40 L1440,0 Z" />
        </svg>
      </div>

      {/* Decorative paws */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["top-10 left-10", "top-20 right-20", "bottom-20 left-1/4", "bottom-10 right-1/3"].map((pos, i) => (
          <PawPrint
            key={i}
            className={`absolute ${pos} w-8 h-8 text-cream opacity-5`}
            strokeWidth={1.5}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-gold-light" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-cream">The Trusted Paws</div>
                <div className="text-[10px] tracking-[0.2em] text-cream/40 uppercase font-sans">
                  Premium Pet Grooming
                </div>
              </div>
            </div>
            <p className="font-body text-cream/50 text-sm leading-relaxed mb-6 max-w-xs">
              Kondapur's most trusted pet grooming salon, where every pet receives the royal treatment they deserve.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="w-10 h-10 rounded-full border border-cream/10 hover:border-gold/40 hover:bg-gold/10 flex items-center justify-center transition-all duration-200 group"
                  title={label}
                >
                  <Icon className="w-4 h-4 text-cream/50 group-hover:text-gold-light transition-colors duration-200" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-semibold text-sm tracking-wider text-cream/80 uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Book Appointment", href: "#booking" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-cream/50 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-sm tracking-wider text-cream/80 uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold-light" strokeWidth={1.5} />
                </div>
                <p className="font-body text-white text-sm leading-relaxed">
                  Vasanth Vihar Apartment,<br />
                  Kondapur, Hyderabad – 500084,<br />
                  Telangana, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-light flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+919618800990"
                  className="font-body text-white hover:text-gold-light transition-colors text-sm"
                >
                  +91 9618800990
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-light flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="font-body text-white text-sm">
                  Mon–Sat: 9AM–8PM<br />
                  Sunday: 10AM–6PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream/30 text-lg text-center">
            © {year} The Trusted Paws. All rights reserved.
          </p>
          <p className="font-body text-cream/30 text-lg text-center">
            Design and Developed By{" "}
            <Link href="https://bixeltek.com" className="hover:text-gold-light transition-colors underline">
              BixelTek
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}