import { StaticImageData } from "next/image";
import {
  BedDouble,
  CookingPot,
  Sofa,
  Bath,
  Building2,
  Briefcase,
} from "lucide-react";
import React from "react";

import Bedroom from "../../../public/bedroom.png";
import Kitchen from "../../../public/kitchen.png";
import Sofaa from "../../../public/sofa.png";
import Bathroom from "../../../public/bathroom.png";
import Office from "../../../public/office.png";
import Interior from "../../../public/interior.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
  icon: React.ReactNode; // Correct type for JSX elements
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Custom Bedroom Furniture",
    description:
      "Tailor-made beds, side tables, and wardrobes designed for comfort and elegance.",
    image: Bedroom,
    category: "Bedroom",
    icon: React.createElement(BedDouble),
  },
  {
    id: 2,
    title: "Modular Kitchen Setup",
    description:
      "Modern kitchen cabinets and countertops that combine style and utility.",
    image: Kitchen,
    category: "Kitchen",
    icon: React.createElement(CookingPot),
  },
  {
    id: 3,
    title: "Luxury Sofa Design",
    description:
      "Plush sofas crafted with premium materials to enhance your living space.",
    image: Sofaa,
    category: "Sofa",
    icon: React.createElement(Sofa),
  },
  {
    id: 4,
    title: "Modern Bathroom Vanity",
    description:
      "Elegant vanities and storage designed to bring style to your bathroom.",
    image: Bathroom,
    category: "Bathroom",
    icon: React.createElement(Bath),
  },
  {
    id: 5,
    title: "Home Office Setup",
    description:
      "Functional and aesthetic furniture tailored for productivity at home.",
    image: Office,
    category: "Office",
    icon: React.createElement(Briefcase),
  },
  {
    id: 6,
    title: "Full Interior Projects",
    description:
      "Complete space transformation—from concept to execution—for homes & studios.",
    image: Interior,
    category: "Interior",
    icon: React.createElement(Building2),
  },
];
