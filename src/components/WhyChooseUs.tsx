import React from "react";
import { BedDouble, Sofa, UtensilsCrossed, Brush } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: <BedDouble className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Custom Bed Design",
    desc: "We craft wooden beds tailored to your space, comfort, and lifestyle.",
  },
  {
    icon: <Sofa className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Sofa & Seating",
    desc: "Luxurious and durable sofas designed to elevate your living room.",
  },
  {
    icon: (
      <UtensilsCrossed className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />
    ),
    title: "Modular Kitchens",
    desc: "Functional, elegant kitchens with modern storage and finishes.",
  },
  {
    icon: <Brush className="h-8 w-8 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Wall & Texture Work",
    desc: "Textured wall finishes and custom paintwork to match your decor.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="whychooseus"
      className="w-full bg-[#FFFDF9] py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
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
          From beds to kitchens, we specialize in handcrafted furniture and
          elegant interior finishes built to match your vision and lifestyle.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
