"use client";
import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="bg-[rgba(248,245,242,0.9)] backdrop-blur-lg border border-[#e0ddd9] rounded-full px-5 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#6E4B3A] font-semibold text-lg transition-colors duration-300"
        >
          Komal Wood Work
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-[#4E342E] font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-colors duration-300 hover:text-[#B08968]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-pressed={isOpen}
          aria-label="Toggle menu"
          className="group cursor-pointer md:hidden inline-flex w-12 h-12 text-[#4E342E] items-center justify-center rounded transition duration-300"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 16 16"
          >
            <rect
              className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-[315deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-pressed:rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-y-0 group-aria-pressed:rotate-[135deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden mt-2 bg-[rgba(248,245,242,0.95)] backdrop-blur-lg border border-[#e0ddd9] rounded-xl px-5 py-3 transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3 text-[#4E342E] font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block transition-colors duration-300 hover:text-[#B08968]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
