import React from "react";
import { ArrowRight, Users, Award, Target } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Designers",
      description:
        "Our interior designers bring vision and creativity to every furniture layout and space transformation.",
    },
    {
      icon: Award,
      title: "Premium Craftsmanship",
      description:
        "We use high-quality wood and materials to ensure durability and elegance in all custom furniture.",
    },
    {
      icon: Target,
      title: "Client Satisfaction",
      description:
        "Our goal is to turn your dream interior into reality with personalized service and attention to detail.",
    },
  ];

  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#5A3E36] leading-tight">
                Transforming Spaces with
                <span className="block text-[#A9825A]">Elegant Furniture</span>
              </h2>

              <div className="w-20 h-1 bg-[#A9825A] rounded-full"></div>

              <p className="text-lg text-[#5A3E36] leading-relaxed max-w-2xl">
                At Shree Interiors, we specialize in interior design and
                high-quality wooden furniture tailored to modern homes and
                offices. From modular kitchens to luxurious living rooms, our
                rich brown and white aesthetic speaks sophistication.
              </p>

              <p className="text-[#5A3E36] leading-relaxed">
                With over a decade of experience, our expert team combines
                traditional craftsmanship with innovative design to deliver
                bespoke interiors that enhance your lifestyle.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 bg-[#5A3E36] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#3E2A23] focus:outline-none focus:ring-4 focus:ring-[#A9825A]/50">
                Learn More About Us
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-[#FAF8F6] p-6 rounded-xl transition-all duration-300 border border-[#EDE7E3]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#A9825A] rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold text-[#5A3E36] group-hover:text-[#A9825A] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-[#5A3E36] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="bg-[#FAF8F6] rounded-xl p-6 border border-[#EDE7E3]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-[#5A3E36]">
                    500+
                  </div>
                  <div className="text-sm text-[#A9825A]">
                    Satisfied Clients
                  </div>
                </div>
                <div className="space-y-2 border-x border-[#EDE7E3]">
                  <div className="text-2xl md:text-3xl font-bold text-[#5A3E36]">
                    10+ Yrs
                  </div>
                  <div className="text-sm text-[#A9825A]">Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-[#5A3E36]">
                    24/7
                  </div>
                  <div className="text-sm text-[#A9825A]">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#A9825A] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
