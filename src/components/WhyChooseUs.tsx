"use client";

import React from "react";
import { ShieldCheck, Hammer, Brush, Home } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />,
    title: "High-Quality Materials",
    desc: "We use only premium materials for durable and elegant furniture.",
  },
  {
    icon: <Hammer className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Custom Craftsmanship",
    desc: "Tailored furniture that fits your space and your style.",
  },
  {
    icon: <Brush className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Elegant Designs",
    desc: "We blend functionality with aesthetic beauty in every design.",
  },
  {
    icon: <Home className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Complete Interior Solutions",
    desc: "From planning to furnishing – all under one roof.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="whychooseus"
      className="min-h-screen w-full bg-[#FFFDF9] py-16 px-6 md:px-12 lg:px-24"
      aria-labelledby="why-choose-us-heading"
    >
      <header className="text-center mb-12">
        <h2
          id="why-choose-us-heading"
          className="text-3xl md:text-4xl font-bold text-[#4B2E2E]"
        >
          Why Choose Us
        </h2>
        <p className="text-[#4B2E2E]/80 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          We specialize in premium interior furniture that is customized,
          elegant, and built to last. Trust us to transform your space into a
          refined living experience.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <article
            key={index}
            className="bg-[#FFFDFB] border border-[#E2D4C8] p-6 rounded-xl"
            aria-label={feature.title}
          >
            <div>{feature.icon}</div>
            <h3 className="text-lg font-semibold text-[#4B2E2E] mt-4">
              {feature.title}
            </h3>
            <p className="text-sm text-[#4B2E2E]/80 mt-2 leading-relaxed">
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
