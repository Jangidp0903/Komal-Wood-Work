import React from "react";
import Image from "next/image";
import { Phone, Award, PenToolIcon, Shield } from "lucide-react";
import HeroImg from "../../public/hero.png";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section
      id="home"
      className={`bg-[#FFFDF9] text-[#4A2C24] flex items-center justify-center px-4 py-12 w-full min-h-[calc(100vh-80px)] sm:px-6 md:px-8 lg:px-12 xl:px-16 ${className}`}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 w-full">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Crafted Interior <br />
            <span className="text-[#8B4A2F]">Furniture Creations</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#4A2C24]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We specialize in designing and crafting premium custom furniture
            including modular kitchens, luxury beds, elegant sofas, wardrobes,
            and full home interiors—built with passion and precision.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#8B4A2F]" aria-hidden="true" />
              <span className="text-sm font-medium">
                Handcrafted Excellence
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PenToolIcon
                className="w-5 h-5 text-[#8B4A2F]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">Custom Designs</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#8B4A2F]" aria-hidden="true" />
              <span className="text-sm font-medium">3 Year Guarantee</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="tel:+919971377441"
              className="inline-flex items-center gap-2 bg-[#4A2C24] text-[#FFFDF9] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#8B4A2F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B4A2F] focus:ring-offset-2"
              aria-label="Call now for custom furniture consultation"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="relative aspect-[4/3]">
            <Image
              src={HeroImg}
              alt="Custom-crafted furniture in a modern living room with bespoke sofa, bed, and kitchen elements"
              className="w-full h-full rounded-lg object-cover"
              priority
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              quality={85}
            />
            <div className="absolute top-4 left-4 bg-[#FFFDF9] px-3 py-1.5 rounded-md border border-[#4A2C24]/10">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#8B4A2F]" aria-hidden="true" />
                <span className="text-xs font-medium text-[#4A2C24]">
                  Premium Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
