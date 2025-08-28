import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/app/data/projectsData";

export interface Project {
  id: number;
  image: string | StaticImageData;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className="border border-[#8B5A3C] bg-[#FAF6F2] rounded-lg overflow-hidden w-full cursor-pointer duration-300"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="relative w-full h-72 group">
        {/* Image */}
        <Image
          src={project.image}
          alt="Custom interior furniture project"
          fill
          className="object-cover transition-transform duration-300 cursor-pointer"
          sizes="100vw"
          loading="lazy"
          itemProp="image"
        />
      </div>
    </article>
  );
};

const ProjectSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage: number = 9;

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
        {/* Header */}
        <header className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B5A3C]"
            itemProp="name"
          >
            Custom Interior Furniture Services
          </h2>
          <p
            className="text-sm md:text-base text-[#5C4033] mt-3 max-w-2xl mx-auto"
            itemProp="description"
          >
            Explore our range of custom furniture projects that bring style and
            functionality to your interiors.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination - only show if projects > 9 */}
        {projects.length > projectsPerPage && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
            <div className="text-sm text-[#5C4033] text-center sm:text-left">
              Showing{" "}
              <span className="font-semibold">
                {indexOfFirst + 1}-{Math.min(indexOfLast, projects.length)}
              </span>{" "}
              of <span className="font-semibold">{projects.length}</span>{" "}
              projects
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-1 border border-[#8B5A3C] rounded text-[#8B5A3C] text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8B5A3C] hover:text-white transition-colors duration-200"
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
                className="flex items-center gap-1 px-3 py-1 border border-[#8B5A3C] rounded text-[#8B5A3C] text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8B5A3C] hover:text-white transition-colors duration-200"
                aria-label="Go to next page"
                type="button"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
