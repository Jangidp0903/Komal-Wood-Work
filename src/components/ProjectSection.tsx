"use client";

import React from "react";
import Image from "next/image";

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

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Living Room Design",
    description:
      "High-end living room interiors with elegant furniture tailored for comfort and modern luxury homes.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
    category: "Living Room",
  },
  {
    id: 2,
    title: "Elegant Bedroom Setup",
    description:
      "Custom bedroom interiors using rich wood tones and sleek furniture to create warm and restful spaces.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
    category: "Bedroom",
  },
  {
    id: 3,
    title: "Contemporary Dining Area",
    description:
      "Spacious dining setups with premium tables and chairs for elegant dining experiences.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
    category: "Dining Room",
  },
  {
    id: 4,
    title: "Home Office Elegance",
    description:
      "Functional and modern home office furniture ideal for remote work professionals.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
    category: "Office",
  },
  {
    id: 5,
    title: "Modern Kitchen Space",
    description:
      "Modular kitchen units that blend functionality and elegance for contemporary homes.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
    category: "Kitchen",
  },
  {
    id: 6,
    title: "Luxury Bathroom Vanity",
    description:
      "Stylish bathroom vanity sets crafted to bring elegance and utility to spa-like bathrooms.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
    category: "Bathroom",
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className="border border-[#8B5A3C] bg-[#FAF6F2] rounded-md overflow-hidden w-full"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative w-full h-48 md:h-60 lg:h-64 xl:h-72">
        <Image
          src={project.image}
          alt={`${project.title} by Expert Interior Designers`}
          fill
          className="object-cover"
          sizes="100vw"
          priority={project.id <= 2}
          itemProp="image"
        />
        <div className="absolute top-2 left-2">
          <span className="text-xs font-medium bg-[#8B5A3C] text-white px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3
          className="text-lg font-semibold text-[#8B5A3C] mb-2"
          itemProp="name"
        >
          {project.title}
        </h3>
        <p
          className="text-sm text-[#5C4033] leading-relaxed"
          itemProp="description"
        >
          {project.description}
        </p>
      </div>
    </article>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-12 bg-[#FFFDF9]"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold text-[#8B5A3C]"
            itemProp="name"
          >
            Interior Furniture Projects
          </h1>
          <p
            className="text-sm md:text-base text-[#5C4033] mt-2 max-w-3xl mx-auto"
            itemProp="description"
          >
            Explore our bespoke furniture work—crafted with care, elegance, and
            precision to elevate living, working, and relaxing spaces.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
