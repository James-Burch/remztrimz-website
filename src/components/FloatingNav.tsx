"use client";

import { useState, useEffect } from "react";

export default function FloatingNav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="bg-black/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white/80 hover:text-white p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h7V2a1 1 0 0 1 2 0v2h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm16 2H4v14h16V6zM6 8h4v4H6V8zm0 6h4v4H6v-4zm6-6h4v4h-4V8zm0 6h4v4h-4v-4z" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-gradient-to-r from-green-700 to-green-800 text-white p-2 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
