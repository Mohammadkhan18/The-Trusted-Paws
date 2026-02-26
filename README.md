# 🐾 The Trusted Paws – Premium Pet Grooming Website

A luxury pet grooming landing page for **The Trusted Paws**, Kondapur, Hyderabad.
Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### 1. Extract the project folder

Unzip/copy the `trusted-paws` folder to your desired location.

### 2. Install dependencies

```bash
cd trusted-paws
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
trusted-paws/
├── app/
│   ├── globals.css       # Global styles + Google Fonts
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (imports all sections)
├── components/
│   ├── Header.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Full-screen hero with parallax
│   ├── About.tsx         # Story / About section
│   ├── Services.tsx      # Services grid (dark forest bg)
│   ├── WhyUs.tsx         # Feature cards
│   ├── Gallery.tsx       # Photo grid (replace with real images)
│   ├── Testimonials.tsx  # Auto-rotating testimonials carousel
│   ├── BookingForm.tsx   # Appointment form (UI only, no backend)
│   └── Footer.tsx        # Links, contact, copyright
├── public/
│   └── gallery/          # ← Add your pet photos here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Customization

### Update Contact Details
Search for `+91 98765 43210` in the codebase and replace with the real number.

### Add Real Gallery Photos
Place `.jpg` or `.webp` images in `/public/gallery/` and update `components/Gallery.tsx`:

```tsx
// Replace emoji placeholders with:
<Image src="/gallery/dog1.jpg" alt="Groomed dog" fill className="object-cover" />
```

### Update Business Hours / Address
Both are in `BookingForm.tsx` and `Footer.tsx`.

### Connect a Real Form Backend
In `BookingForm.tsx`, replace the `setTimeout` in `handleSubmit` with a real API call:

```tsx
// Example with EmailJS or your own API:
const res = await fetch("/api/book", {
  method: "POST",
  body: JSON.stringify(form),
});
```

---

## 🌐 Deployment

### Vercel (Recommended – Free)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Deploy in one click

### Netlify
```bash
npm run build
# Upload the `.next` folder to Netlify
```

---

## 📦 Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom config with brand colors)
- **Google Fonts**: Playfair Display, Cormorant Garamond, DM Sans

---

## 🎨 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| `cream` | `#FAF6F0` | Background |
| `forest` | `#2C4A3E` | Primary dark |
| `gold` | `#C9A84C` | Accent |
| `bark` | `#8B6F47` | Warm accent |
| `charcoal` | `#1A1A1A` | Text |
