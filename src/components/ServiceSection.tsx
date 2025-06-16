import React from "react";
import {
  Ruler,
  Hammer,
  LampDesk,
  Paintbrush2,
  Sofa,
  Building,
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
      "Discover bespoke custom furniture design solutions crafted with premium, sustainable materials to match your unique space, style, and personality.",
    icon: <Sofa className="w-10 h-10 text-primary" />,
  },
  {
    title: "Interior Space Planning",
    description:
      "Expert interior space planning for efficient, elegant, and functional living or working spaces, tailored to optimize your interior layout.",
    icon: <Ruler className="w-10 h-10 text-primary" />,
  },
  {
    title: "Interior Renovation & Remodeling",
    description:
      "Transform your interiors with expert interior renovation and home remodeling services, blending aesthetics, functionality, and modern space transformation.",
    icon: <Hammer className="w-10 h-10 text-primary" />,
  },
  {
    title: "Interior Lighting Solutions",
    description:
      "Elegant interior lighting design solutions to enhance ambiance and complement your furniture and decor with ambient lighting.",
    icon: <LampDesk className="w-10 h-10 text-primary" />,
  },
  {
    title: "Wall & Paint Finishing",
    description:
      "Creative wall finishing and interior painting services, offering decorative textures to add character and sophistication to every room.",
    icon: <Paintbrush2 className="w-10 h-10 text-primary" />,
  },
  {
    title: "Commercial Interior Design",
    description:
      "Professional commercial interior design for offices, studios, and retail spaces, customized to reflect your brand with expert office and retail space design.",
    icon: <Building className="w-10 h-10 text-primary" />,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-neutral-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6 text-center"
        >
          Premium Interior Design & Furniture Services
        </h2>
        <p className="text-neutral-600 text-base sm:text-lg mb-12 text-center">
          Explore our expert interior design and furniture services, creating
          timeless, personalized spaces for homes and businesses with custom
          furniture and innovative layouts.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="flex flex-col bg-white border border-neutral-200 p-8 rounded-2xl"
              itemScope
              itemType="http://schema.org/Service"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-6 w-fit">
                {service.icon}
              </div>
              <h3
                className="text-xl font-semibold text-neutral-900 mb-3"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p
                className="text-base text-neutral-600 leading-relaxed"
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
