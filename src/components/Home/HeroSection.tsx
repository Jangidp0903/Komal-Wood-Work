import React from "react";
import Image from "next/image";
import Hero from "../../../public/hero.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Hero}
          alt="Interior furniture design"
          fill
          className="object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
          priority
          sizes="100vw"
          quality={95}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-8 md:px-16 text-center">
        <div className="max-w-5xl text-white animate-in fade-in slide-in-from-bottom-8 transition-all duration-1000">
          {/* Heading - Single line on desktop */}
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 sm:mb-8">
            <span className="text-white mr-2 inline-block md:inline">
              Elegant Interiors,
            </span>
            <span className="text-amber-200 inline-block md:inline">
              Timeless Designs
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your space with custom-crafted furniture that blends
            beauty and function.
          </p>

          {/* CTA Button */}
          <button className="group relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-amber-800 hover:bg-amber-700 text-white rounded-full text-sm sm:text-lg md:text-xl font-semibold transition-all duration-300 min-w-[200px]">
            <span className="relative z-10">Explore Collection</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
