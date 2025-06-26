import React from "react";
import { Sofa, Users, Award, Target } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description:
        "Our skilled artisans handcraft bespoke beds, modular kitchens, and luxurious sofas with unmatched precision.",
    },
    {
      icon: Award,
      title: "Premium Materials",
      description:
        "We use top-grade wood and fabrics to create durable, stylish furniture for your home.",
    },
    {
      icon: Target,
      title: "Tailored Designs",
      description:
        "Every piece is customized to fit your style, ensuring a perfect blend of form and function.",
    },
  ];

  const stats = [
    { value: "700+", label: "Custom Projects" },
    { value: "15+ Yrs", label: "Crafting Expertise" },
    { value: "100%", label: "Satisfied Clients" },
  ];

  return (
    <section
      id="about"
      className="bg-[#FFFDF9] text-[#5A3E36] px-4 py-16 sm:py-20 md:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6 sm:space-y-7 md:space-y-8">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            Komal Wood Work
            <span className="block text-[#8B5A3C]">Custom Furniture</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-prose">
            At Komal Wood Work, we specialize in crafting custom wooden beds,
            modern kitchens, and elegant sofas that elevate your living spaces.
            Our designs merge timeless craftsmanship with contemporary
            aesthetics.
          </p>
          <p className="text-sm sm:text-base leading-relaxed max-w-prose">
            Using rich brown tones and off-white accents, we create warm,
            inviting interiors for bedrooms, kitchens, and living rooms,
            tailored to your unique vision.
          </p>
          <a
            href="tel:+919971377441"
            className="inline-flex items-center gap-2 bg-[#5A3E36] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#6B4A3F] transition-colors duration-200 w-fit"
            aria-label="Contact Komal Wood Work for custom furniture"
          >
            <Sofa className="w-5 h-5" />
            Request a Quote
          </a>
        </div>

        {/* Features and Stats Section */}
        <div className="flex flex-col space-y-6 sm:space-y-7 md:space-y-8">
          {/* Features */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F4EFEB] p-4 sm:p-5 rounded-md border border-[#E5DDD7]"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-[#8B5A3C] rounded-md flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="bg-[#F4EFEB] p-4 sm:p-5 rounded-md border border-[#E5DDD7]">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-xl sm:text-2xl font-bold leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8B5A3C] mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
