import { StaticImageData } from "next/image";

import Project1 from "../../../public/project1.webp";
import Project2 from "../../../public/project2.webp";
import Project3 from "../../../public/project3.webp";
import Project4 from "../../../public/project4.webp";
import Project5 from "../../../public/project5.webp";
import Project6 from "../../../public/project6.webp";
import Project7 from "../../../public/project7.webp";
import Project8 from "../../../public/project8.webp";
import Project9 from "../../../public/project9.webp";

export interface Project {
  id: number;
  image: string | StaticImageData;
}

export const projects: Project[] = [
  { id: 1, image: Project1 },
  { id: 2, image: Project2 },
  { id: 3, image: Project3 },
  { id: 4, image: Project4 },
  { id: 5, image: Project5 },
  { id: 6, image: Project6 },
  { id: 7, image: Project7 },
  { id: 8, image: Project8 },
  { id: 9, image: Project9 },
];
