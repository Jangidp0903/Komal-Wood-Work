import React from "react";
import {
  Ruler,
  Hammer,
  LampDesk,
  Paintbrush2,
  Sofa,
  Building,
  Phone,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Custom Furniture Design",
    description:
      "Tailored furniture crafted to match your style, space, and comfort using high-quality materials.",
    icon: <Sofa className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Interior Space Planning",
    description:
      "Efficient layout planning to maximize comfort and functionality in your home or office.",
    icon: <Ruler className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Upgrade your interiors with expert renovation solutions that align with your vision.",
    icon: <Hammer className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Lighting Design",
    description:
      "Stylish and functional lighting solutions that enhance your interior aesthetics.",
    icon: <LampDesk className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Wall & Paint Finishing",
    description:
      "Elegant finishes and custom paint solutions to elevate the ambiance of any space.",
    icon: <Paintbrush2 className="w-8 h-8 text-[#8B5A3C]" />,
  },
  {
    title: "Commercial Interiors",
    description:
      "Office, retail, and studio design tailored to reflect your brand identity.",
    icon: <Building className="w-8 h-8 text-[#8B5A3C]" />,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-[#FFFDF9] px-4 py-16 sm:px-6 lg:px-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-[#8B5A3C] text-center mb-4"
        >
          Interior Furniture & Design Services
        </h2>
        <p className="text-center text-base md:text-lg text-neutral-700 mb-12 max-w-3xl mx-auto">
          Transform your space with custom furniture, elegant layouts, and
          refined finishes crafted to match your lifestyle and personality.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="flex flex-col items-start bg-white border border-neutral-200 p-6 rounded-xl"
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
              <p className="text-sm text-neutral-800" itemProp="description">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 bg-[#8B5A3C] text-white px-6 py-3 text-base font-medium rounded-full"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
