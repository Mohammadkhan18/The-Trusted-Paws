import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Trusted Paws | Premium Pet Grooming – Kondapur, Hyderabad",
  description:
    "Luxury pet grooming salon at Vasanth Vihar Apartment, Kondapur. Expert care for dogs & cats. Book your appointment today.",
  keywords: "pet grooming Kondapur, dog grooming Hyderabad, cat grooming, The Trusted Paws",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
