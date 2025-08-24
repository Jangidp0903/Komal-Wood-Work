// app/data/projectsData.ts
import { StaticImageData } from "next/image";

import Bedroom from "../../../public/bedroom.png";
import Kitchen from "../../../public/kitchen.png";
import Sofaa from "../../../public/sofa.png";
import Bathroom from "../../../public/bathroom.png";
import Office from "../../../public/office.png";
import Interior from "../../../public/interior.png";

export interface Project {
  id: number;
  title: string;
  image: string | StaticImageData;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Custom Bedroom Furniture",
    image: Bedroom,
  },
  {
    id: 2,
    title: "Modular Kitchen Setup",
    image: Kitchen,
  },
  {
    id: 3,
    title: "Luxury Sofa Design",
    image: Sofaa,
  },
  {
    id: 4,
    title: "Modern Bathroom Vanity",
    image: Bathroom,
  },
  {
    id: 5,
    title: "Home Office Setup",
    image: Office,
  },
  {
    id: 6,
    title: "Full Interior Projects",
    image: Interior,
  },
];
