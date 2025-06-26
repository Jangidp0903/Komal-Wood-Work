import React from "react";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

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
        {/* ✅ SEO & Open Graph Meta Tags */}
        <Head>
          <title>Komal Wood Work | Custom Furniture & Interiors</title>
          <meta
            name="description"
            content="Custom interiors & handmade wooden furniture by Komal Wood Work in Gurugram. Modern, elegant & space-saving designs made for your needs."
          />
          <meta
            name="keywords"
            content="Interior design Gurugram, Custom furniture Gurugram, Woodwork Gurugram, Modular kitchen Gurugram, Bedroom design, Living room furniture, Wardrobe design, Office furniture Gurugram"
          />
          <meta name="author" content="Komal Wood Work" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://komalwoodwork.vercel.app/" />

          {/* ✅ Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_IN" />
          <meta
            property="og:title"
            content="Komal Wood Work | Interior Design & Furniture in Gurugram"
          />
          <meta
            property="og:description"
            content="Transform your home or office with Komal Wood Work's expert interior design and custom furniture services in Gurugram."
          />
          <meta property="og:url" content="https://komalwoodwork.vercel.app/" />
          <meta property="og:site_name" content="Komal Wood Work" />
          <meta
            property="og:image"
            content="https://komalwoodwork.vercel.app/logo.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Komal Wood Work - Interior Design & Furniture"
          />

          {/* ✅ Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Komal Wood Work | Interior Design & Custom Furniture"
          />
          <meta
            name="twitter:description"
            content="Expert interior solutions and handcrafted furniture in Gurugram. We design spaces that reflect your style and fit your budget."
          />
          <meta
            name="twitter:image"
            content="https://komalwoodwork.vercel.app/logo.png"
          />
          <meta name="twitter:site" content="@KomalWoodWork" />
          <meta name="twitter:creator" content="@KomalWoodWork" />

          {/* ✅ Favicon */}
          <link rel="icon" href="/favicon.png" />
        </Head>

        {/* ✅ Schema Markup */}
        <Script
          id="schema-komal-wood-work"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* ✅ Disable Right Click & Inspect */}
        <Script id="disable-right-click-inspect" strategy="afterInteractive">
          {`
          // Disable Right Click
          document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
          });

          // Disable Specific Keys
          document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
                (e.ctrlKey && (e.key === 'u' || e.key === 's'))) {
              e.preventDefault();
            }
          });
        `}
        </Script>
      </head>

      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}