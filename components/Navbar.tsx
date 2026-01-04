"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0">
              <Image
                src="/logo.JPG"
                alt="Shiv Construction Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block text-lg sm:text-xl md:text-2xl font-bold text-primary-700">
              Shiv <span className="text-accent-500">Construction</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-primary-600 text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm lg:text-base"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-3 sm:px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium text-base active:bg-gray-200 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block px-3 py-3 bg-primary-600 text-white rounded-md font-medium text-center text-base active:bg-primary-700 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
