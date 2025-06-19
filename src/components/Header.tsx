"use client";
import React, { useEffect, useState } from "react";
import {
  Info,
  Briefcase,
  Folder,
  Mail,
  Home,
  LucideIcon,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import Logo from "../../public/logo.png";

interface NavLink {
  name: string;
  targetId: string;
  icon: LucideIcon;
}

const navLinks: NavLink[] = [
  { name: "Home", targetId: "home", icon: Home },
  { name: "About", targetId: "about", icon: Info },
  { name: "Services", targetId: "services", icon: Briefcase },
  { name: "Projects", targetId: "projects", icon: Folder },
  { name: "Why Choose Us", targetId: "whychooseus", icon: BadgeCheck },
  { name: "Contact", targetId: "contact", icon: Mail },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const scrollPosition = scrollY + window.innerHeight / 2;
      for (const { targetId } of navLinks) {
        const section = document.getElementById(targetId);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest("header")) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FFFDF9] shadow-sm" : "bg-[#FFFDF9]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Komal Wood Work Logo"
              className="focus:outline-none"
            >
              <Image
                src={Logo}
                alt="Komal Wood Work Logo"
                width={240}
                height={90}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map(({ name, targetId, icon: Icon }) => (
              <button
                key={name}
                onClick={() => scrollToSection(targetId)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === targetId
                    ? "bg-[#5C4033] text-white"
                    : "text-[#5C4033] hover:text-white hover:bg-[#5C4033]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md bg-[#5C4033] text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
              <rect
                className={`origin-center transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "translate-x-0 translate-y-0 rotate-[315deg]"
                    : "-translate-y-[5px] translate-x-[7px]"
                }`}
                y="7"
                width="9"
                height="2"
                rx="1"
              />
              <rect
                className={`origin-center transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45" : ""
                }`}
                y="7"
                width="16"
                height="2"
                rx="1"
              />
              <rect
                className={`origin-center transition-all duration-300 ease-in-out ${
                  isOpen ? "translate-y-0 rotate-[135deg]" : "translate-y-[5px]"
                }`}
                y="7"
                width="9"
                height="2"
                rx="1"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[600px] pt-2 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-2 bg-[#FDF6F0] rounded-xl p-4 border border-[#e2cbb7]">
            {navLinks.map(({ name, targetId, icon: Icon }) => (
              <button
                key={name}
                onClick={() => scrollToSection(targetId)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === targetId
                    ? "bg-[#5C4033] text-white"
                    : "text-[#5C4033] hover:text-white hover:bg-[#5C4033]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
