import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  BedDouble,
  CookingPot,
  Sofa,
  Bath,
  Building2,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Bedroom from "../../public/bedroom.png";
import Kitchen from "../../public/kitchen.png";
import Sofaa from "../../public/sofa.png";
import Bathroom from "../../public/bathroom.png";
import Office from "../../public/office.png";
import Interior from "../../public/interior.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Custom Bedroom Furniture",
    description:
      "Tailor-made beds, side tables, and wardrobes designed for comfort and elegance.",
    image: Bedroom,
    category: "Bedroom",
    icon: <BedDouble className="text-white w-4 h-4" />,
  },
  {
    id: 2,
    title: "Modular Kitchen Setup",
    description:
      "Modern kitchen cabinets and countertops that combine style and utility.",
    image: Kitchen,
    category: "Kitchen",
    icon: <CookingPot className="text-white w-4 h-4" />,
  },
  {
    id: 3,
    title: "Luxury Sofa Design",
    description:
      "Plush sofas crafted with premium materials to enhance your living space.",
    image: Sofaa,
    category: "Sofa",
    icon: <Sofa className="text-white w-4 h-4" />,
  },
  {
    id: 4,
    title: "Modern Bathroom Vanity",
    description:
      "Elegant vanities and storage designed to bring style to your bathroom.",
    image: Bathroom,
    category: "Bathroom",
    icon: <Bath className="text-white w-4 h-4" />,
  },
  {
    id: 5,
    title: "Home Office Setup",
    description:
      "Functional and aesthetic furniture tailored for productivity at home.",
    image: Office,
    category: "Office",
    icon: <Briefcase className="text-white w-4 h-4" />,
  },
  {
    id: 6,
    title: "Full Interior Projects",
    description:
      "Complete space transformation—from concept to execution—for homes & studios.",
    image: Interior,
    category: "Interior",
    icon: <Building2 className="text-white w-4 h-4" />,
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article
      className="border border-[#8B5A3C] bg-[#FAF6F2] rounded-lg overflow-hidden w-full"
      itemScope
      itemType="https://schema.org/Service"
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
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#8B5A3C] text-white text-xs px-2 py-1 rounded">
          {project.icon}
          <span itemProp="serviceType">{project.category}</span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#8B5A3C] mb-2" itemProp="name">
          {project.title}
        </h2>
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 3;

  // Pagination Logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section
      id="projects"
      className="min-h-screen py-14 bg-[#FFFDF9]"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#8B5A3C]"
            itemProp="name"
          >
            Custom Interior Furniture Services
          </h2>
          <p
            className="text-sm md:text-base text-[#5C4033] mt-3 max-w-2xl mx-auto"
            itemProp="description"
          >
            From modular kitchens to custom sofas, explore how we transform
            interiors with functional, stylish furniture made just for you.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
          {/* Left Side Info */}
          <div className="text-sm text-[#5C4033] text-center sm:text-left">
            Showing{" "}
            <span className="font-semibold">
              {indexOfFirst + 1}-{Math.min(indexOfLast, projects.length)}
            </span>{" "}
            of <span className="font-semibold">{projects.length}</span> projects
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1 border border-[#8B5A3C] rounded text-[#8B5A3C] text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1 border border-[#8B5A3C] rounded text-[#8B5A3C] text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
