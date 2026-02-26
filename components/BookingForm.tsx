"use client";
import { useState } from "react";

type FormData = {
  ownerName: string;
  phone: string;
  email: string;
  petName: string;
  petType: string;
  breed: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

const initialForm: FormData = {
  ownerName: "",
  phone: "",
  email: "",
  petName: "",
  petType: "",
  breed: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay (no actual backend)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 lg:py-32 bg-warm">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6 animate-float inline-block">🐾</div>
          <h3 className="font-display text-4xl font-medium text-charcoal mb-4">
            Booking Received!
          </h3>
          <p className="font-body text-charcoal/70 text-lg mb-6 leading-relaxed">
            Thank you <strong>{form.ownerName}</strong>! We'll reach out to confirm your appointment for{" "}
            <strong>{form.petName}</strong> shortly.
          </p>
          <p className="font-sans text-charcoal/50 text-sm mb-8">
            For immediate assistance, call us at{" "}
            <a href="tel:+91961880090" className="text-forest hover:underline">
              +91 98765 43210
            </a>
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); }}
            className="bg-forest text-cream font-sans text-sm tracking-wider px-8 py-3 rounded-full hover:bg-forest-light transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 lg:py-32 bg-warm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <p className="font-sans text-xs tracking-[0.3em] text-bark uppercase mb-4">
              Book an Appointment
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-medium text-charcoal leading-tight mb-6">
              Ready to Pamper
              <br />
              Your Pet?
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="font-body text-charcoal/60 text-lg leading-relaxed mb-10">
              Fill in the form and we'll get back to confirm your booking within a few hours. Walk-ins are also welcome!
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-lg flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="font-sans font-medium text-charcoal text-sm mb-1">Our Location</div>
                  <div className="font-body text-charcoal/60 text-lg font-semibold leading-relaxed">
                    Vasanth Vihar Apartment,<br />
                    Kondapur, Hyderabad – 500084,<br />
                    Telangana, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-lg flex-shrink-0">
                  📞
                </div>
                <div>
                  <div className="font-sans font-medium text-charcoal text-sm mb-1">Phone</div>
                  <a
                    href="tel:+91961880090"
                    className="font-body text-forest hover:text-forest-light transition-colors text-lg font-semibold"
                  >
                    +91 9618800990
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-lg flex-shrink-0">
                  🕐
                </div>
                <div>
                  <div className="font-sans font-medium text-charcoal text-sm mb-1">Hours</div>
                  <div className="font-body text-charcoal/60 text-lg font-semibold leading-relaxed">
                    Mon – Sat: 9:00 AM – 8:00 PM<br />
                    Sunday: 10:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-3">
            <div className="bg-cream rounded-3xl border border-sand/80 shadow-xl shadow-forest/5 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Owner details */}
                <div>
                  <h3 className="font-display text-charcoal text-lg font-medium mb-4">
                    Your Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        value={form.ownerName}
                        onChange={handleChange}
                        required
                        placeholder="Ravi Kumar"
                        className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="yourname@email.com"
                      className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-sand/60" />

                {/* Pet details */}
                <div>
                  <h3 className="font-display text-charcoal text-lg font-medium mb-4">
                    Pet Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                        Pet Name *
                      </label>
                      <input
                        type="text"
                        name="petName"
                        value={form.petName}
                        onChange={handleChange}
                        required
                        placeholder="Buddy"
                        className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                        Pet Type *
                      </label>
                      <select
                        name="petType"
                        value={form.petType}
                        onChange={handleChange}
                        required
                        className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select pet type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                      Breed
                    </label>
                    <input
                      type="text"
                      name="breed"
                      value={form.breed}
                      onChange={handleChange}
                      placeholder="Labrador, Persian, etc."
                      className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-sand/60" />

                {/* Appointment details */}
                <div>
                  <h3 className="font-display text-charcoal text-lg font-medium mb-4">
                    Appointment
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                        Service *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="bath">Signature Bath & Blow-Dry</option>
                        <option value="full">Full Grooming Package</option>
                        <option value="nail">Nail Care & Paw Spa</option>
                        <option value="ear">Ear Cleaning</option>
                        <option value="teeth">Teeth Brushing</option>
                        <option value="deshed">De-shedding Treatment</option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                          Preferred Time
                        </label>
                        <select
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm appearance-none cursor-pointer"
                        >
                          <option value="">Any time</option>
                          <option>9:00 AM</option>
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                          <option>12:00 PM</option>
                          <option>2:00 PM</option>
                          <option>3:00 PM</option>
                          <option>4:00 PM</option>
                          <option>5:00 PM</option>
                          <option>6:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-wider text-charcoal/50 uppercase mb-2">
                        Special Notes
                      </label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any allergies, special requirements, or notes for our groomers..."
                        className="w-full bg-warm border border-sand/80 rounded-xl px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all text-sm resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-forest text-cream font-sans font-medium text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-forest-light transition-all duration-300 hover:shadow-xl hover:shadow-forest/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Processing…
                    </>
                  ) : (
                    "Request Appointment 🐾"
                  )}
                </button>

                <p className="text-center font-body text-charcoal/40 text-xs">
                  We'll confirm your booking within a few hours. No payment required upfront.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
