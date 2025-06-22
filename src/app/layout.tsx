import React from "react";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script"; // For injecting structured schema

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Komal Wood Work | Interior & Custom Furniture Design Gurugram",
  description:
    "Komal Wood Work offers custom interior design and handmade wooden furniture services in Gurugram. Elegant, modern, and space-saving designs tailored to your needs.",
  keywords: [
    "Interior design Gurugram",
    "Custom furniture Gurugram",
    "Woodwork Gurugram",
    "Modular kitchen Gurugram",
    "Bedroom design",
    "Living room furniture",
    "Wardrobe design",
    "Office furniture Gurugram",
  ],
  authors: [{ name: "Komal Wood Work" }],
  robots: "index, follow",
  metadataBase: new URL("https://komalwoodwork.vercel.app"),
  alternates: {
    canonical: "https://komalwoodwork.vercel.app",
  },
  openGraph: {
    title: "Komal Wood Work | Interior Design & Furniture in Gurugram",
    description:
      "Transform your home or office with Komal Wood Work's expert interior design and custom furniture services in Gurugram.",
    url: "https://komalwoodwork.vercel.app",
    siteName: "Komal Wood Work",
    images: [
      {
        url: "https://komalwoodwork.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Komal Wood Work - Interior Design & Furniture",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Komal Wood Work | Interior Design & Custom Furniture",
    description:
      "Expert interior solutions and hand-crafted furniture in Gurugram. We design spaces that reflect your style and fit your budget.",
    images: ["https://komalwoodwork.vercel.app/logo.png"],
    site: "@KomalWoodWork",
    creator: "@KomalWoodWork",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Komal Wood Work",
    image: "https://komalwoodwork.vercel.app/logo.png",
    url: "https://komalwoodwork.vercel.app",
    telephone: "+91-9873126033",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wazirabad",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-20:00",
    description:
      "Komal Wood Work is a premium interior design and custom furniture studio based in Gurugram. We create modern wooden furniture and design beautiful homes and workspaces.",
    priceRange: "$$",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4595",
      longitude: "77.0266",
    },
    areaServed: {
      "@type": "Place",
      name: "Gurugram, Haryana",
    },
  };

  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <Script
          id="schema-komal-wood-work"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
