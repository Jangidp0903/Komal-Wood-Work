import React from "react";
import Image from "next/image";
import Hero from "../../public/hero.png";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[65vh] sm:h-[80vh] lg:min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Hero}
          alt="Premium custom interior furniture design for modern homes"
          fill
          className="object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
          priority
          sizes="100vw"
          quality={95}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-8 md:px-16 text-center">
        <div className="max-w-5xl mx-auto text-white animate-in fade-in slide-in-from-bottom-8 transition-all duration-1000">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-tight mb-6 text-center sm:text-left">
            <span className="inline text-white mr-2">Luxury Furniture,</span>
            <span className="inline text-[#A9825A]">Timeless Interiors</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Elevate your interiors with handcrafted designs and timeless wooden
            pieces — where elegance meets functionality.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#5A3E36] hover:bg-[#3E2A23] text-white rounded-full text-sm sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg focus:outline-none">
              Explore Our Collection
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
