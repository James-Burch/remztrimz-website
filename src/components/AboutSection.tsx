export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About RemzTrimz
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
        </div>

        <div className="mb-16">
          <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-8">
            Premium mobile barbering redefined for the modern gentleman.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Based in Manchester, RemzTrimz brings professional barbering
            directly to your doorstep. We believe every man deserves a premium
            grooming experience without the hassle of traditional salon visits.
          </p>

          <div className="text-2xl md:text-3xl font-bold text-green-400 mb-8 tracking-wider">
            REMZ WAY OR NO WAY
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            This isn't just our motto – it's our commitment to excellence. Every
            cut, every style, every client interaction reflects our dedication
            to premium quality and uncompromising standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="text-white font-semibold mb-2">
              Years Experience
            </div>
            <div className="text-gray-400 text-sm">Professional Excellence</div>
          </div>

          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-white font-semibold mb-2">Happy Clients</div>
            <div className="text-gray-400 text-sm">
              Premium Service Delivered
            </div>
          </div>

          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              5.0★
            </div>
            <div className="text-white font-semibold mb-2">Client Rating</div>
            <div className="text-gray-400 text-sm">Consistently Excellent</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-xl font-bold text-green-400 mb-3">
              Premium Quality
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Every service delivers salon-quality results using
              professional-grade tools and premium products.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-green-400 mb-3">
              Ultimate Convenience
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Skip the salon wait times. We bring the barbershop experience
              directly to your location.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-green-400 mb-3">
              Manchester Local
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Proudly serving Manchester and surrounding areas with
              personalized, community-focused service.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-green-400 mb-3">
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
  );
}
