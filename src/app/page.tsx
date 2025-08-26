"use client";

import { useState, useEffect } from "react";

export default function Home() {
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
    <div className="min-h-screen">
      {/* Floating Navigation */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="bg-black/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10">
          <div className="flex items-center space-x-6">
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
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
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
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-2 rounded-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="/hero-fallback.jpg"
        >
          <source src="/barber-hero.mp4" type="video/mp4" />
          <source src="/barber-hero.webm" type="video/webm" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              RemzTrimz
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl text-white mb-4 font-bold tracking-wider">
            REMZ WAY OR NO WAY
          </p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-2 font-medium">
            Premium Mobile Barber Services
          </p>
          <p className="text-lg md:text-xl text-amber-400 mb-12 font-semibold">
            Manchester & Surrounding Areas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            {/* Primary CTA */}
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-amber-500/25 border border-amber-400/30">
              Book Your Cut
            </button>

            {/* Secondary CTA */}
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-10 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition duration-300">
              View Services
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://www.instagram.com/remztrimz/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@remstarrz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="text-sm font-medium">YouTube</span>
            </a>

            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h7V2a1 1 0 0 1 2 0v2h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm16 2H4v14h16V6zM6 8h4v4H6V8zm0 6h4v4H6v-4zm6-6h4v4h-4V8zm0 6h4v4h-4v-4z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Gallery</span>
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary placeholder sections for navigation testing */}

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About RemzTrimz
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
          </div>

          {/* Main Story */}
          <div className="mb-16">
            <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-8">
              Premium mobile barbering redefined for the modern gentleman.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Based in Manchester, RemzTrimz brings professional barbering
              directly to your doorstep. We believe every man deserves a premium
              grooming experience without the hassle of traditional salon
              visits.
            </p>

            <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 tracking-wider">
              REMZ WAY OR NO WAY
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              This isn't just our motto – it's our commitment to excellence.
              Every cut, every style, every client interaction reflects our
              dedication to premium quality and uncompromising standards.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-white font-semibold mb-2">
                Years Experience
              </div>
              <div className="text-gray-400 text-sm">
                Professional Excellence
              </div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-white font-semibold mb-2">Happy Clients</div>
              <div className="text-gray-400 text-sm">
                Premium Service Delivered
              </div>
            </div>
          </div>

          {/* Key Philosophy Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every service delivers salon-quality results using
                professional-grade tools and premium products.
              </p>
            </div>

            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                Ultimate Convenience
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Skip the salon wait times. We bring the barbershop experience
                directly to your location.
              </p>
            </div>

            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                Manchester Local
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Proudly serving Manchester and surrounding areas with
                personalized, community-focused service.
              </p>
            </div>

            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                The REMZ Standard
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our way means uncompromising quality, attention to detail, and
                exceeding expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="h-screen bg-gray-900 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300">
            Premium cuts, styling & grooming services
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="h-screen bg-gray-800 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
          <p className="text-gray-300">Our best work showcased</p>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="h-screen bg-gray-700 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-gray-300">Schedule your premium cut today</p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen bg-gray-600 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300">Get in touch for bookings & inquiries</p>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen bg-gray-600 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300">Get in touch for bookings & inquiries</p>
        </div>
      </section>
    </div>
  );
}
