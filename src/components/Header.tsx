"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  Info,
  Briefcase,
  Folder,
  ShoppingBag,
  PenTool,
  Mail,
} from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: Folder },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Blog", href: "/blog", icon: PenTool },
  { name: "Contact", href: "/contact", icon: Mail },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] sm:w-[95%] max-w-7xl">
        <nav className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-amber-900 font-bold text-base sm:text-lg lg:text-xl transition-colors duration-300 flex items-center gap-2 flex-shrink-0"
          >
            Komal Wood Work
          </Link>

          {/* Desktop Navigation (only on large screens) */}
          <ul className="hidden lg:flex items-center gap-2 text-gray-800 font-medium text-sm lg:text-base">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 hover:text-amber-600 hover:bg-amber-100/50 whitespace-nowrap"
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile + Tablet Menu Button (visible below lg) */}
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

      {/* Mobile + Tablet Menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 py-6 rounded-t-3xl transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium text-sm w-full px-2 sm:px-4">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <Link
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 hover:text-amber-600 hover:bg-amber-100/50 text-center border border-gray-100 w-full"
              >
                <link.icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
