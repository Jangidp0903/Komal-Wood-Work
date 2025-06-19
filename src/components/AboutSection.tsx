import React from "react";
import { Phone, Users, Award, Target } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Designers",
      description:
        "Our team blends creativity and function to craft furniture that elevates your interior space.",
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description:
        "We use premium wood and skilled artisanship to create durable, timeless pieces.",
    },
    {
      icon: Target,
      title: "Client-Centered Service",
      description:
        "Every project is tailored to your style and needs to ensure complete satisfaction.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#FFFDF9] text-[#5A3E36] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Elegant Interiors
            <span className="block text-[#8B5A3C]">Timeless Furniture</span>
          </h2>

          <p className="text-lg leading-relaxed">
            At Shree Interiors, we craft bespoke wooden furniture and design
            modern interiors that reflect your lifestyle. Whether it&apos;s your
            living room, kitchen, or workspace — we bring harmony through design
            and utility.
          </p>

          <p className="leading-relaxed">
            Our rich brown tones and off-white finishes offer warmth, style, and
            comfort, while our expert designers ensure your vision is brought to
            life with precision and elegance.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 bg-[#5A3E36] text-white px-6 py-3 rounded-lg text-lg font-medium"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F4EFEB] p-5 border border-[#E5DDD7] rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                    {/* Square Icon Box */}
                    <div className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] bg-[#8B5A3C] rounded-md flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Text Content */}
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-wrap">
                        {feature.title}
                      </h3>
                      <p className="text-sm mt-1 text-wrap">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="bg-[#F4EFEB] p-5 border border-[#E5DDD7] rounded-lg">
            <div className="grid grid-cols-3 text-center divide-x divide-[#E5DDD7]">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-[#8B5A3C]">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold">10+ Yrs</p>
                <p className="text-sm text-[#8B5A3C]">Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-[#8B5A3C]">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
