"use client";
import React, { useEffect, useState } from "react";
import {
  Info,
  Briefcase,
  Folder,
  ShoppingBag,
  PenTool,
  Mail,
  Home,
  LucideIcon,
} from "lucide-react";

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
  { name: "Products", targetId: "products", icon: ShoppingBag },
  { name: "Blog", targetId: "blog", icon: PenTool },
  { name: "Contact", targetId: "contact", icon: Mail },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMenu = () => setIsOpen((prev) => !prev);
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
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const { targetId } of navLinks) {
        const section = document.getElementById(targetId);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] sm:w-[95%] max-w-7xl">
        <nav className="bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border border-[#4E342E]">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-amber-900 cursor-pointer font-bold text-base sm:text-lg lg:text-xl transition-colors duration-300 flex items-center gap-2"
          >
            Komal Wood Work
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-2 text-gray-800 font-medium text-sm lg:text-base">
            {navLinks.map(({ name, targetId, icon: Icon }) => (
              <li key={name}>
                <button
                  onClick={() => scrollToSection(targetId)}
                  className={`flex items-center cursor-pointer gap-1 px-3 py-2 rounded-full transition-all duration-300 border ${
                    activeSection === targetId
                      ? "bg-amber-100 text-amber-600 border-amber-300"
                      : "text-gray-800 hover:text-amber-600 hover:bg-amber-100/50 border-transparent"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#f3f1ef] text-[#4E342E] transition"
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
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#4E342E] py-6 rounded-t-3xl transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium text-sm w-full px-2 sm:px-4">
          {navLinks.map(({ name, targetId, icon: Icon }) => (
            <li key={name} className="w-full">
              <button
                onClick={() => scrollToSection(targetId)}
                className={`flex items-center cursor-pointer gap-2 px-4 py-3 rounded-xl border w-full transition-all duration-300 ${
                  activeSection === targetId
                    ? "bg-amber-100 text-amber-600 border-amber-200"
                    : "text-gray-800 hover:text-amber-600 hover:bg-amber-100/50 border-gray-200"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
