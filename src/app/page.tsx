"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <div className="mt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
