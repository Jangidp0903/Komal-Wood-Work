"use client";

import React from "react";
import Image from "next/image";
import { Phone, Award, Truck, Shield } from "lucide-react";
import HeroImg from "../../public/hero.png";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section
      id="home"
      className={`
        min-h-screen bg-[#FFFDF9] text-[#5A3E36]
        flex items-center justify-center
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
        py-10 w-full
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Premium Interior <br />
            <span className="text-[#8B5A3C]">Furniture Collection</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#5A3E36]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover handcrafted luxury for your home. Our curated range of
            sofas, dining sets, beds, and workspaces is designed to enhance
            comfort and elevate aesthetics. Crafted for modern interiors with
            timeless appeal.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#8B5A3C]" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#8B5A3C]" />
              <span className="text-sm font-medium">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#8B5A3C]" />
              <span className="text-sm font-medium">2 Year Warranty</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 bg-[#5A3E36] text-white px-6 py-3 rounded-md text-sm font-semibold focus:outline-none"
              aria-label="Call now for interior furniture consultation"
            >
              <Phone className="w-5 h-5" />
              Call for Consultation
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full max-w-md md:max-w-lg">
          <div className="relative">
            <Image
              src={HeroImg}
              alt="Interior furniture in a modern living room setup with wooden chairs, sofa, and soft décor"
              className="w-full h-auto rounded-xl object-cover"
              priority
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-md border border-[#5A3E36]/10">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#8B5A3C]" />
                <span className="text-xs font-medium text-[#5A3E36]">
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
