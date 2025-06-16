import React from "react";
import { ShieldCheck, Hammer, Brush, Home } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: (
      <ShieldCheck className="h-10 w-10 text-[#4B2E2E]" aria-hidden="true" />
    ),
    title: "High-Quality Materials",
    desc: "We use only premium materials to ensure lasting durability and elegance.",
  },
  {
    icon: <Hammer className="h-10 w-10 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Custom Craftsmanship",
    desc: "Every piece is tailored to your space with precision and care.",
  },
  {
    icon: <Brush className="h-10 w-10 text-[#4B2E2E]" aria-hidden="true" />,
    title: "Elegant Designs",
    desc: "We blend function and beauty to elevate your interiors.",
  },
  {
    icon: <Home className="h-10 w-10 text-[#4B2E2E]" aria-hidden="true" />,
    title: "One-Stop Interior Solution",
    desc: "From kitchen to bedroom, we handle all your furnishing needs.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="whychooseus"
      className="w-full bg-[#F9F6F1] py-16 px-6 md:px-12 lg:px-24"
      aria-labelledby="why-choose-us-heading"
    >
      <header className="text-center mb-12">
        <h2
          id="why-choose-us-heading"
          className="text-3xl md:text-4xl font-bold text-[#4B2E2E] mb-4"
        >
          Why Choose Us
        </h2>
        <p className="text-[#4B2E2E]/80 text-base md:text-lg max-w-3xl mx-auto">
          Transforming your space with customized, elegant, and durable
          furniture solutions.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <article
            key={index}
            className="bg-[#FFFDFB] border border-[#E5D7CD] p-6 rounded-xl flex flex-col items-start space-y-4"
            aria-label={feature.title}
          >
            <div>{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#4B2E2E]">
              {feature.title}
            </h3>
            <p className="text-[#4B2E2E]/80 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
