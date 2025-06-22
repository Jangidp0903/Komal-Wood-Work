import React from "react";
import {
  BedDouble,
  Ruler,
  Sofa,
  CookingPot,
  Paintbrush2,
  LampDesk,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Custom Bed & Wardrobe",
    description:
      "Design and build beds and wardrobes tailored to your room size and storage needs.",
    icon: <BedDouble className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Modular Kitchen Design",
    description:
      "Efficient, stylish modular kitchens with optimized layouts and smart storage.",
    icon: <CookingPot className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Sofa & Lounge Furniture",
    description:
      "Comfortable and stylish sofas crafted to fit your interiors and lifestyle.",
    icon: <Sofa className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Interior Space Planning",
    description:
      "Smart layout planning to enhance flow, space utilization, and design aesthetics.",
    icon: <Ruler className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Painting & Wall Finishes",
    description:
      "Premium wall treatments and textures to elevate the feel of your space.",
    icon: <Paintbrush2 className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Lighting & False Ceiling",
    description:
      "Elegant ceiling design with integrated lighting to add warmth and style.",
    icon: <LampDesk className="w-8 h-8 text-[#8B5A3C]" />,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFDF9] px-4 py-16 sm:px-6 lg:px-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-[#8B5A3C] text-center mb-4"
        >
          Interior Furniture Services
        </h2>
        <p className="text-center text-base md:text-lg text-neutral-700 mb-12 max-w-3xl mx-auto">
          Expertly crafted interiors tailored to your taste — from custom
          wardrobes to stylish kitchens and lighting solutions.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="flex flex-col h-full justify-start bg-white border border-neutral-300 p-6 rounded-xl"
              itemScope
              itemType="http://schema.org/Service"
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                className="text-lg font-semibold text-[#8B5A3C] mb-2"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p
                className="text-sm text-neutral-800 leading-relaxed"
                itemProp="description"
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
