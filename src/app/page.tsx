// "use client";

// import { useState, useEffect } from "react";

// export default function Home() {
//   const [showNav, setShowNav] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowNav(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Floating Navigation */}
//       <nav
//         className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
//           showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
//         }`}
//       >
//         <div className="bg-black/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10">
//           <div className="flex items-center space-x-6">
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-white/80 hover:text-white text-sm font-medium transition-colors"
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection("services")}
//               className="text-white/80 hover:text-white text-sm font-medium transition-colors"
//             >
//               Services
//             </button>
//             <button
//               onClick={() => scrollToSection("gallery")}
//               className="text-white/80 hover:text-white text-sm font-medium transition-colors"
//             >
//               Gallery
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-white/80 hover:text-white text-sm font-medium transition-colors"
//             >
//               Contact
//             </button>
//             <button
//               onClick={() => scrollToSection("booking")}
//               className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       <nav
//         className={`md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
//           showNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//       >
//         <div className="bg-black/20 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-white/80 hover:text-white p-2 transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//               </svg>
//             </button>
//             <button
//               onClick={() => scrollToSection("services")}
//               className="text-white/80 hover:text-white p-2 transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//               </svg>
//             </button>
//             <button
//               onClick={() => scrollToSection("gallery")}
//               className="text-white/80 hover:text-white p-2 transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M4 4h7V2a1 1 0 0 1 2 0v2h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm16 2H4v14h16V6zM6 8h4v4H6V8zm0 6h4v4H6v-4zm6-6h4v4h-4V8zm0 6h4v4h-4v-4z" />
//               </svg>
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-white/80 hover:text-white p-2 transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//               </svg>
//             </button>
//             <button
//               onClick={() => scrollToSection("booking")}
//               className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-2 rounded-full"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Video Background */}
//       <section id="hero" className="relative h-screen w-full overflow-hidden">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           poster="/hero-fallback.webp"
//         >
//           <source src="/barber-hero.mp4" type="video/mp4" />
//           <source src="/barber-hero.webm" type="video/webm" />
//         </video>

//         <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

//         <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
//             <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//               RemzTrimz
//             </span>
//           </h1>

//           <p className="text-2xl md:text-3xl text-white mb-4 font-bold tracking-wider">
//             REMZ WAY OR NO WAY
//           </p>

//           <p className="text-xl md:text-2xl text-gray-200 mb-2 font-medium">
//             Premium Mobile Barber Services
//           </p>
//           <p className="text-lg md:text-xl text-amber-400 mb-12 font-semibold">
//             Manchester & Surrounding Areas
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 items-center">
//             <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-amber-500/25 border border-amber-400/30">
//               Book Your Cut
//             </button>

//             <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-10 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition duration-300">
//               View Services
//             </button>
//           </div>

//           <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
//             <a
//               href="https://www.instagram.com/remztrimz/?hl=en"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
//             >
//               <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </div>
//             </a>

//             <a
//               href="https://www.youtube.com/@remstarrz"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
//             >
//               <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                 </svg>
//               </div>
//             </a>

//             <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group">
//               <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M4 4h7V2a1 1 0 0 1 2 0v2h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1zm16 2H4v14h16V6zM6 8h4v4H6V8zm0 6h4v4H6v-4zm6-6h4v4h-4V8zm0 6h4v4h-4v-4z" />
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//           <div className="animate-bounce">
//             <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center py-20"
//       >
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <div className="mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//               About RemzTrimz
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
//           </div>

//           <div className="mb-16">
//             <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-8">
//               Premium mobile barbering redefined for the modern gentleman.
//             </p>

//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
//               Based in Manchester, RemzTrimz brings professional barbering
//               directly to your doorstep. We believe every man deserves a premium
//               grooming experience without the hassle of traditional salon
//               visits.
//             </p>

//             <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 tracking-wider">
//               REMZ WAY OR NO WAY
//             </div>

//             <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
//               This isn't just our motto – it's our commitment to excellence.
//               Every cut, every style, every client interaction reflects our
//               dedication to premium quality and uncompromising standards.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             <div className="group">
//               <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
//                 3+
//               </div>
//               <div className="text-white font-semibold mb-2">
//                 Years Experience
//               </div>
//               <div className="text-gray-400 text-sm">
//                 Professional Excellence
//               </div>
//             </div>

//             <div className="group">
//               <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
//                 500+
//               </div>
//               <div className="text-white font-semibold mb-2">Happy Clients</div>
//               <div className="text-gray-400 text-sm">
//                 Premium Service Delivered
//               </div>
//             </div>

//             <div className="group">
//               <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
//                 5.0★
//               </div>
//               <div className="text-white font-semibold mb-2">Client Rating</div>
//               <div className="text-gray-400 text-sm">
//                 Consistently Excellent
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div className="text-left">
//               <h3 className="text-xl font-bold text-amber-400 mb-3">
//                 Premium Quality
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Every service delivers salon-quality results using
//                 professional-grade tools and premium products.
//               </p>
//             </div>

//             <div className="text-left">
//               <h3 className="text-xl font-bold text-amber-400 mb-3">
//                 Ultimate Convenience
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Skip the salon wait times. We bring the barbershop experience
//                 directly to your location.
//               </p>
//             </div>

//             <div className="text-left">
//               <h3 className="text-xl font-bold text-amber-400 mb-3">
//                 Manchester Local
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Proudly serving Manchester and surrounding areas with
//                 personalized, community-focused service.
//               </p>
//             </div>

//             <div className="text-left">
//               <h3 className="text-xl font-bold text-amber-400 mb-3">
//                 The REMZ Standard
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Our way means uncompromising quality, attention to detail, and
//                 exceeding expectations every time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="min-h-screen bg-gray-900 py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//               Our Services
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Premium mobile barbering services delivered to your location.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Signature Cut
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Premium precision haircut with styling
//               </p>
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-3xl font-bold text-amber-400">£35</span>
//                 <span className="text-gray-400">45-60 mins</span>
//               </div>
//               <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
//                 Book This Service
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
//               <h3 className="text-2xl font-bold text-white mb-4">Beard Trim</h3>
//               <p className="text-gray-300 mb-6">
//                 Professional beard shaping and trimming
//               </p>
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-3xl font-bold text-amber-400">£25</span>
//                 <span className="text-gray-400">30-40 mins</span>
//               </div>
//               <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
//                 Book This Service
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Hot Towel Shave
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Traditional wet shave experience
//               </p>
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-3xl font-bold text-amber-400">£40</span>
//                 <span className="text-gray-400">45-60 mins</span>
//               </div>
//               <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
//                 Book This Service
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Full Grooming
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Complete cut, beard, and styling package
//               </p>
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <span className="text-3xl font-bold text-amber-400">£70</span>
//                   <div className="text-sm text-green-400 font-semibold">
//                     Save £30
//                   </div>
//                 </div>
//                 <span className="text-gray-400">90-120 mins</span>
//               </div>
//               <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
//                 Book This Service
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Event Styling
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Special occasion styling and cuts
//               </p>
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-3xl font-bold text-amber-400">£50</span>
//                 <span className="text-gray-400">60-90 mins</span>
//               </div>
//               <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
//                 Book This Service
//               </button>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
//               <h3 className="text-2xl font-bold text-white mb-4">Add-Ons</h3>
//               <p className="text-gray-300 mb-6">
//                 Hair wash, premium products, extras
//               </p>
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-3xl font-bold text-amber-400">
//                   From £5
//                 </span>
//                 <span className="text-gray-400">Various</span>
//               </div>
//               <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
//                 Customize
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="min-h-screen bg-gray-800 py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//               Our Work
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               See the REMZ difference. Premium cuts and styling that speak for
//               themselves.
//             </p>
//             <div className="flex items-center justify-center gap-2 text-gray-400">
//               <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
//                 <svg
//                   className="w-4 h-4 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </div>
//               <span className="text-sm">Live from @remztrimz</span>
//             </div>
//           </div>

//           {/* Gallery Grid - Placeholder Images */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
//             {/* Row 1 */}
//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">Fresh Cut</p>
//                 <p className="text-gray-300 text-xs">Signature Style</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">Beard Sculpt</p>
//                 <p className="text-gray-300 text-xs">Precision Trim</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-6h4v2h-4v-2zm0-4h4v2h-4v-2z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300 md:block hidden">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">
//                   Style Transform
//                 </p>
//                 <p className="text-gray-300 text-xs">Before & After</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300 lg:block hidden">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">
//                   Wedding Ready
//                 </p>
//                 <p className="text-gray-300 text-xs">Event Styling</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
//                 </svg>
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">Hot Towel</p>
//                 <p className="text-gray-300 text-xs">Traditional Shave</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">Clean Fade</p>
//                 <p className="text-gray-300 text-xs">Modern Style</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300 md:block hidden">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">Client Happy</p>
//                 <p className="text-gray-300 text-xs">5 Star Result</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 aspect-square cursor-pointer hover:scale-105 transition-transform duration-300 lg:block hidden">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
//               <div className="absolute bottom-4 left-4 z-20">
//                 <p className="text-white font-semibold text-sm">Mobile Setup</p>
//                 <p className="text-gray-300 text-xs">We Come To You</p>
//               </div>
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <svg
//                   className="w-12 h-12 text-gray-400"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Instagram CTA */}
//           <div className="text-center">
//             <p className="text-gray-300 mb-6">
//               Follow us for daily updates, styling tips, and fresh cuts
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
//               <a
//                 href="https://www.instagram.com/remztrimz/?hl=en"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//                 Follow @remztrimz
//               </a>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full border-2 border-white/30 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
//                 View All Work
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Booking Section */}
//       <section
//         id="booking"
//         className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 py-20"
//       >
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//               Book Your Cut
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Schedule your premium mobile barber experience. We come to you in
//               Manchester and surrounding areas.
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-600 shadow-2xl">
//             <form className="space-y-8">
//               {/* Service Selection */}
//               <div>
//                 <label className="block text-white font-semibold mb-4 text-lg">
//                   Select Your Service
//                 </label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="relative">
//                     <input
//                       type="radio"
//                       id="signature-cut"
//                       name="service"
//                       value="signature-cut"
//                       className="hidden peer"
//                       defaultChecked
//                     />
//                     <label
//                       htmlFor="signature-cut"
//                       className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-orange-600 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-amber-400"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <h3 className="text-white font-semibold">
//                             Signature Cut
//                           </h3>
//                           <p className="text-gray-300 text-sm">45-60 mins</p>
//                         </div>
//                         <span className="text-white font-bold text-lg">
//                           £35
//                         </span>
//                       </div>
//                     </label>
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="radio"
//                       id="beard-trim"
//                       name="service"
//                       value="beard-trim"
//                       className="hidden peer"
//                     />
//                     <label
//                       htmlFor="beard-trim"
//                       className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-orange-600 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-amber-400"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <h3 className="text-white font-semibold">
//                             Beard Trim
//                           </h3>
//                           <p className="text-gray-300 text-sm">30-40 mins</p>
//                         </div>
//                         <span className="text-white font-bold text-lg">
//                           £25
//                         </span>
//                       </div>
//                     </label>
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="radio"
//                       id="hot-towel"
//                       name="service"
//                       value="hot-towel"
//                       className="hidden peer"
//                     />
//                     <label
//                       htmlFor="hot-towel"
//                       className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-orange-600 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-amber-400"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <h3 className="text-white font-semibold">
//                             Hot Towel Shave
//                           </h3>
//                           <p className="text-gray-300 text-sm">45-60 mins</p>
//                         </div>
//                         <span className="text-white font-bold text-lg">
//                           £40
//                         </span>
//                       </div>
//                     </label>
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="radio"
//                       id="full-grooming"
//                       name="service"
//                       value="full-grooming"
//                       className="hidden peer"
//                     />
//                     <label
//                       htmlFor="full-grooming"
//                       className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-orange-600 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-amber-400"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <h3 className="text-white font-semibold">
//                             Full Grooming
//                           </h3>
//                           <p className="text-gray-300 text-sm">90-120 mins</p>
//                           <p className="text-green-400 text-xs font-semibold">
//                             Save £30
//                           </p>
//                         </div>
//                         <span className="text-white font-bold text-lg">
//                           £70
//                         </span>
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Date Selection */}
//               <div>
//                 <label className="block text-white font-semibold mb-4 text-lg">
//                   Choose Your Date
//                 </label>
//                 <div className="bg-gray-700 rounded-xl p-6">
//                   <div className="grid grid-cols-7 gap-2 mb-4">
//                     <div className="text-center text-gray-400 font-semibold py-2">
//                       Sun
//                     </div>
//                     <div className="text-center text-gray-400 font-semibold py-2">
//                       Mon
//                     </div>
//                     <div className="text-center text-gray-400 font-semibold py-2">
//                       Tue
//                     </div>
//                     <div className="text-center text-gray-400 font-semibold py-2">
//                       Wed
//                     </div>
//                     <div className="text-center text-gray-400 font-semibold py-2">
//                       Thu
//                     </div>
//                     <div className="text-center text-gray-400 font-semibold py-2">
//                       Fri
//                     </div>
//                     <div className="text-center text-gray-400 font-semibold py-2">
//                       Sat
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-7 gap-2">
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       1
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       2
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       3
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       4
//                     </button>

//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       5
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       6
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       7
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       8
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       9
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       10
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       11
//                     </button>

//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       12
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       13
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       14
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 bg-amber-500 text-white rounded-lg"
//                     >
//                       15
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       16
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       17
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       18
//                     </button>

//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       19
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       20
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       21
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       22
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       23
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       24
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       25
//                     </button>

//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       26
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       27
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       28
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       29
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       30
//                     </button>
//                     <button
//                       type="button"
//                       className="p-3 text-white hover:bg-amber-500 rounded-lg transition-colors"
//                     >
//                       31
//                     </button>
//                     <div></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Time Selection */}
//               <div>
//                 <label className="block text-white font-semibold mb-4 text-lg">
//                   Select Time Slot
//                 </label>
//                 <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
//                   <button
//                     type="button"
//                     className="p-3 bg-gray-700 hover:bg-amber-500 text-white rounded-lg transition-colors font-semibold"
//                   >
//                     9:00 AM
//                   </button>
//                   <button
//                     type="button"
//                     className="p-3 bg-gray-700 hover:bg-amber-500 text-white rounded-lg transition-colors font-semibold"
//                   >
//                     10:30 AM
//                   </button>
//                   <button
//                     type="button"
//                     className="p-3 bg-gray-700 hover:bg-amber-500 text-white rounded-lg transition-colors font-semibold"
//                   >
//                     12:00 PM
//                   </button>
//                   <button
//                     type="button"
//                     className="p-3 bg-amber-500 text-white rounded-lg font-semibold"
//                   >
//                     1:30 PM
//                   </button>
//                   <button
//                     type="button"
//                     className="p-3 bg-gray-700 hover:bg-amber-500 text-white rounded-lg transition-colors font-semibold"
//                   >
//                     3:00 PM
//                   </button>

//                   <button
//                     type="button"
//                     className="p-3 bg-gray-700 hover:bg-amber-500 text-white rounded-lg transition-colors font-semibold"
//                   >
//                     4:30 PM
//                   </button>
//                   <button
//                     type="button"
//                     className="p-3 bg-gray-700 hover:bg-amber-500 text-white rounded-lg transition-colors font-semibold"
//                   >
//                     6:00 PM
//                   </button>
//                   <button
//                     type="button"
//                     className="p-3 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed"
//                   >
//                     7:30 PM
//                   </button>
//                   <button
//                     type="button"
//                     className="p-3 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed"
//                   >
//                     9:00 PM
//                   </button>
//                   <div></div>
//                 </div>
//                 <p className="text-gray-400 text-sm mt-2">
//                   Unavailable slots shown in gray
//                 </p>
//               </div>

//               {/* Contact Details */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-white font-semibold mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
//                     placeholder="Your full name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-white font-semibold mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
//                     placeholder="07XXXXXXXXX"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-white font-semibold mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-white font-semibold mb-2">
//                   Service Location
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
//                   placeholder="Your address in Manchester area"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-white font-semibold mb-2">
//                   Special Requests (Optional)
//                 </label>
//                 <textarea
//                   className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors h-24 resize-none"
//                   placeholder="Any specific styling requests or notes..."
//                 ></textarea>
//               </div>

//               {/* Payment Option */}
//               <div>
//                 <label className="block text-white font-semibold mb-4 text-lg">
//                   Payment Method
//                 </label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="relative">
//                     <input
//                       type="radio"
//                       id="pay-person"
//                       name="payment"
//                       value="pay-person"
//                       className="hidden peer"
//                       defaultChecked
//                     />
//                     <label
//                       htmlFor="pay-person"
//                       className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-green-600 peer-checked:to-green-700 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-green-400"
//                     >
//                       <div className="text-center">
//                         <h3 className="text-white font-semibold">
//                           Pay in Person
//                         </h3>
//                         <p className="text-gray-300 text-sm">
//                           Cash or Card on Service
//                         </p>
//                       </div>
//                     </label>
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="radio"
//                       id="pay-online"
//                       name="payment"
//                       value="pay-online"
//                       className="hidden peer"
//                     />
//                     <label
//                       htmlFor="pay-online"
//                       className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-blue-700 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-blue-400"
//                     >
//                       <div className="text-center">
//                         <h3 className="text-white font-semibold">Pay Online</h3>
//                         <p className="text-gray-300 text-sm">
//                           Secure Payment Now
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="text-center pt-4">
//                 <button
//                   type="submit"
//                   className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-amber-500/25"
//                 >
//                   Confirm Booking
//                 </button>
//                 <p className="text-gray-400 text-sm mt-4">
//                   We'll contact you within 2 hours to confirm your appointment
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="min-h-screen bg-gray-600 py-20">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//               Get In Touch
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
//             <p className="text-xl text-gray-200 max-w-3xl mx-auto">
//               Ready to experience the REMZ difference? Contact us for bookings,
//               questions, or custom grooming packages.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-gray-500">
//                 <h3 className="text-2xl font-bold text-white mb-6">
//                   Contact Information
//                 </h3>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold">Email</h4>
//                       <p className="text-gray-300">info@remztrimz.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold">Phone</h4>
//                       <p className="text-gray-300">07XXX XXX XXX</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold">Service Area</h4>
//                       <p className="text-gray-300">
//                         Manchester & Surrounding Areas
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
//                         <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold">
//                         Operating Hours
//                       </h4>
//                       <p className="text-gray-300">Mon-Sun: 9AM - 9PM</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="mt-8 pt-6 border-t border-gray-600">
//                   <h4 className="text-white font-semibold mb-4">Follow Us</h4>
//                   <div className="flex gap-4">
//                     <a
//                       href="https://www.instagram.com/remztrimz/?hl=en"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
//                     >
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                       </svg>
//                     </a>
//                     <a
//                       href="https://www.youtube.com/@remstarrz"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
//                     >
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Contact Form */}
//             <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-gray-500">
//               <h3 className="text-2xl font-bold text-white mb-6">
//                 Quick Message
//               </h3>

//               <form className="space-y-4">
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-4 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-4 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <textarea
//                     placeholder="Your Message"
//                     rows={4}
//                     className="w-full p-4 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors resize-none"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black py-12">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//             {/* Brand Column */}
//             <div className="md:col-span-2">
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   RemzTrimz
//                 </span>
//               </h3>
//               <p className="text-xl font-bold text-white mb-4 tracking-wider">
//                 REMZ WAY OR NO WAY
//               </p>
//               <p className="text-gray-400 max-w-md leading-relaxed mb-4">
//                 Manchester's premium mobile barber service. We bring
//                 professional grooming directly to your doorstep with
//                 uncompromising quality and style.
//               </p>
//               <div className="flex gap-4">
//                 <a
//                   href="https://www.instagram.com/remztrimz/?hl=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="https://www.youtube.com/@remstarrz"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* Services Column */}
//             <div>
//               <h4 className="text-white font-bold text-lg mb-4">Services</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a
//                     href="#services"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Signature Cut
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#services"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Beard Trim
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#services"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Hot Towel Shave
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#services"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Full Grooming
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#services"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Event Styling
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Quick Links Column */}
//             <div>
//               <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a
//                     href="#about"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#gallery"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Gallery
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#booking"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Book Now
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#contact"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#hero"
//                     className="hover:text-amber-400 transition-colors"
//                   >
//                     Home
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-400 text-sm mb-4 md:mb-0">
//               © 2024 RemzTrimz. All rights reserved.
//             </div>
//             <div className="text-gray-500 text-xs">
//               Website built by James @{" "}
//               <a
//                 href="#"
//                 className="text-amber-400 hover:text-amber-300 transition-colors"
//               >
//                 Burch Studio
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
