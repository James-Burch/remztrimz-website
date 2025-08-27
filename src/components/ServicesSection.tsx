function ServicesSection() {
  return (
    <section id="services" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium mobile barbering services delivered to your location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              Signature Cut
            </h3>
            <p className="text-gray-300 mb-6">
              Premium precision haircut with styling
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-green-400">£35</span>
              <span className="text-gray-400">45-60 mins</span>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Book This Service
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">Beard Trim</h3>
            <p className="text-gray-300 mb-6">
              Professional beard shaping and trimming
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-green-400">£25</span>
              <span className="text-gray-400">30-40 mins</span>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Book This Service
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              Hot Towel Shave
            </h3>
            <p className="text-gray-300 mb-6">
              Traditional wet shave experience
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-green-400">£40</span>
              <span className="text-gray-400">45-60 mins</span>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Book This Service
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              Full Grooming
            </h3>
            <p className="text-gray-300 mb-6">
              Complete cut, beard, and styling package
            </p>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-3xl font-bold text-green-400">£70</span>
                <div className="text-sm text-green-400 font-semibold">
                  Save £30
                </div>
              </div>
              <span className="text-gray-400">90-120 mins</span>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Book This Service
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              Event Styling
            </h3>
            <p className="text-gray-300 mb-6">
              Special occasion styling and cuts
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-green-400">£50</span>
              <span className="text-gray-400">60-90 mins</span>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Book This Service
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">Add-Ons</h3>
            <p className="text-gray-300 mb-6">
              Hair wash, premium products, extras
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-green-400">From £5</span>
              <span className="text-gray-400">Various</span>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Customize
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
