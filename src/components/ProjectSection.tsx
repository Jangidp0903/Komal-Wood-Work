"use client";

import React from "react";
import Image from "next/image";

// Define interfaces for TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

// Sample project data with SEO-friendly keywords
const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Living Room Design",
    description:
      "Premium living room furniture with modern interior design solutions for comfort and style. Perfect for luxury homes and contemporary spaces.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format",
    category: "Living Room",
  },
  {
    id: 2,
    title: "Elegant Bedroom Setup",
    description:
      "Custom bedroom furniture with high-quality craftsmanship for cozy and luxurious interiors, ideal for modern apartments.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format",
    category: "Bedroom",
  },
  {
    id: 3,
    title: "Modern Dining Area",
    description:
      "Stylish dining furniture designed for functionality and aesthetic appeal, enhancing dining experiences in modern homes.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format",
    category: "Dining Room",
  },
  {
    id: 4,
    title: "Cozy Home Office",
    description:
      "Ergonomic office furniture for productive and comfortable home workspaces, tailored for professional environments.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format",
    category: "Office",
  },
  {
    id: 5,
    title: "Modern Kitchen Design",
    description:
      "Contemporary kitchen furniture and cabinetry solutions that combine functionality with elegant design for modern cooking spaces.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format",
    category: "Kitchen",
  },
  {
    id: 6,
    title: "Luxury Bathroom Vanity",
    description:
      "Premium bathroom furniture and storage solutions designed for luxury bathrooms with modern amenities and spa-like comfort.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&auto=format",
    category: "Bathroom",
  },
];

// ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className="border border-amber-900 rounded-lg overflow-hidden w-full"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64">
        <Image
          src={project.image}
          alt={`${project.title} - Interior Furniture Design by Professional Designers`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          className="object-cover"
          priority={project.id <= 2}
          itemProp="image"
          loading={project.id <= 2 ? "eager" : "lazy"}
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <span className="bg-amber-900 text-amber-50 px-2 py-1 sm:px-3 sm:py-1 rounded text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <h3
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-amber-900 mb-2 sm:mb-3 leading-tight"
          itemProp="name"
        >
          {project.title}
        </h3>
        <p
          className="text-amber-800 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4"
          itemProp="description"
        >
          {project.description}
        </p>

        <div className="border-t border-amber-300 pt-3 sm:pt-4">
          <button
            className="w-full border-2 border-amber-900 text-amber-900 py-2 sm:py-3 px-3 sm:px-4 rounded font-medium text-xs sm:text-sm"
            aria-label={`View details for ${project.title} furniture project`}
          >
            View Project Details
          </button>
        </div>
      </div>
    </article>
  );
};

// Main ProjectSection component
const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-screen"
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <header className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <h1
            id="projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight"
            itemProp="name"
          >
            Premium Interior Furniture Projects
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-amber-900 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-800 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
            itemProp="description"
          >
            Transform your space with our high-quality interior furniture design
            and installation services. Specializing in custom furniture
            solutions for luxury homes, modern apartments, and professional
            offices. Our expert craftsmen blend traditional techniques with
            contemporary design to create furniture that perfectly matches your
            lifestyle and space requirements.
          </p>
        </header>

        {/* SEO Keywords Section */}
        <div
          className="hidden"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">Interior Furniture Design Company</span>
          <span itemProp="description">
            Custom furniture, interior design, luxury furniture, modern
            furniture, bedroom furniture, living room furniture, office
            furniture, kitchen cabinets, bathroom vanities, furniture
            installation, interior decorator, home furnishing, contemporary
            design, luxury interiors
          </span>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
