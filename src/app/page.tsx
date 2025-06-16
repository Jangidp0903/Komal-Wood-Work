"use client";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </>
  );
};

export default HomePage;
