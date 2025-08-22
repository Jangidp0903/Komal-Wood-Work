import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project, projects } from "@/app/data/projectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
          loading={project.id <= 2 ? "eager" : "lazy"}
          itemProp="image"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#8B5A3C] text-white text-xs px-2 py-1 rounded">
          <span className="text-white w-4 h-4 flex items-center justify-center">
            {project.icon}
          </span>
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
  const projectsPerPage: number = 3;

  const indexOfLast: number = currentPage * projectsPerPage;
  const indexOfFirst: number = indexOfLast - projectsPerPage;
  const currentProjects: Project[] = projects.slice(indexOfFirst, indexOfLast);
  const totalPages: number = Math.ceil(projects.length / projectsPerPage);

  const handlePreviousPage = (): void => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
          <div className="text-sm text-[#5C4033] text-center sm:text-left">
            Showing{" "}
            <span className="font-semibold">
              {indexOfFirst + 1}-{Math.min(indexOfLast, projects.length)}
            </span>{" "}
            of <span className="font-semibold">{projects.length}</span> projects
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1 border border-[#8B5A3C] rounded text-[#8B5A3C] text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8B5A3C] hover:text-white transition-colors duration-200"
              aria-label="Go to previous page"
              type="button"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>

            <span className="text-sm text-[#5C4033] px-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1 border border-[#8B5A3C] rounded text-[#8B5A3C] text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8B5A3C] hover:text-white transition-colors duration-200"
              aria-label="Go to next page"
              type="button"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
