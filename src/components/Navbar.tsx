"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 px-8 py-4 flex justify-between items-center transition-colors ${
        scrolled ? "bg-gray-900 bg-opacity-90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="text-xl font-bold text-blue-400">Naveen Gupta</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 font-bold text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center md:hidden py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
