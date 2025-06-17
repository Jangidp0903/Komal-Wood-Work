"use client";
import React from "react";
import Image from "next/image";
import HeroImg from "../../public/hero.png";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full bg-[#FAF6F2] text-[#5A3E36] py-10 px-5 lg:px-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Your Comfort <br />
            Zone Begins with <span className="text-[#5A3E36]">Furnizen</span>
          </h1>
          <p className="text-base md:text-lg text-[#5A3E36]/80 max-w-xl mb-8">
            Experience the perfect blend of quality, comfort, and design in
            every piece. We guarantee to revamp your space and cater to your
            unique taste and lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-[#5A3E36] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3E2A23] transition">
              Shop Now →
            </button>
            <button className="border border-[#5A3E36] text-[#5A3E36] px-6 py-3 rounded-full font-medium hover:bg-[#5A3E36] hover:text-white transition">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={HeroImg}
            alt="Furniture"
            className="rounded-3xl w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
