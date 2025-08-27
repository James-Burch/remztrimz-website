export default function BookingSection() {
  const services = [
    {
      id: "signature-cut",
      name: "Signature Cut",
      duration: "45-60 mins",
      price: "£35",
    },
    {
      id: "beard-trim",
      name: "Beard Trim",
      duration: "30-40 mins",
      price: "£25",
    },
    {
      id: "hot-towel",
      name: "Hot Towel Shave",
      duration: "45-60 mins",
      price: "£40",
    },
    {
      id: "full-grooming",
      name: "Full Grooming",
      duration: "90-120 mins",
      price: "£70",
      badge: "Save £30",
    },
  ];

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "1:30 PM", available: true, selected: true },
    { time: "3:00 PM", available: true },
    { time: "4:30 PM", available: true },
    { time: "6:00 PM", available: true },
    { time: "7:30 PM", available: false },
    { time: "9:00 PM", available: false },
  ];

  return (
    <section
      id="booking"
      className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 py-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Book Your Cut
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule your premium mobile barber experience. We come to you in
            Manchester and surrounding areas.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-600 shadow-2xl">
          <form className="space-y-8">
            {/* Service Selection */}
            <div>
              <label className="block text-white font-semibold mb-4 text-lg">
                Select Your Service
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={service.id} className="relative">
                    <input
                      type="radio"
                      id={service.id}
                      name="service"
                      value={service.id}
                      className="hidden peer"
                      defaultChecked={index === 0}
                    />
                    <label
                      htmlFor={service.id}
                      className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-green-700 peer-checked:to-green-800 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-white font-semibold">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {service.duration}
                          </p>
                          {service.badge && (
                            <p className="text-green-400 text-xs font-semibold">
                              {service.badge}
                            </p>
                          )}
                        </div>
                        <span className="text-white font-bold text-lg">
                          {service.price}
                        </span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-white font-semibold mb-4 text-lg">
                Choose Your Date
              </label>
              <div className="bg-gray-700 rounded-xl p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center text-gray-400 font-semibold py-2"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  <div></div>
                  <div></div>
                  <div></div>
                  {calendarDays.slice(0, 29).map((day) => (
                    <button
                      key={day}
                      type="button"
                      className={`p-3 text-white rounded-lg transition-colors ${
                        day === 15 ? "bg-green-600" : "hover:bg-green-600"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                  <div></div>
                </div>
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-white font-semibold mb-4 text-lg">
                Select Time Slot
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    className={`p-3 text-white rounded-lg transition-colors font-semibold ${
                      !slot.available
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : slot.selected
                        ? "bg-green-600"
                        : "bg-gray-700 hover:bg-green-600"
                    }`}
                    disabled={!slot.available}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Unavailable slots shown in gray
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="07XXXXXXXXX"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Service Location
              </label>
              <input
                type="text"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                placeholder="Your address in Manchester area"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors h-24 resize-none"
                placeholder="Any specific styling requests or notes..."
              ></textarea>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-white font-semibold mb-4 text-lg">
                Payment Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    id="pay-person"
                    name="payment"
                    value="pay-person"
                    className="hidden peer"
                    defaultChecked
                  />
                  <label
                    htmlFor="pay-person"
                    className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-green-600 peer-checked:to-green-700 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-green-400"
                  >
                    <div className="text-center">
                      <h3 className="text-white font-semibold">
                        Pay in Person
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Cash or Card on Service
                      </p>
                    </div>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="radio"
                    id="pay-online"
                    name="payment"
                    value="pay-online"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="pay-online"
                    className="block p-4 bg-gray-700 hover:bg-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-blue-700 rounded-xl cursor-pointer transition-all duration-300 border border-gray-600 peer-checked:border-blue-400"
                  >
                    <div className="text-center">
                      <h3 className="text-white font-semibold">Pay Online</h3>
                      <p className="text-gray-300 text-sm">
                        Secure Payment Now
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-green-500/25"
              >
                Confirm Booking
              </button>
              <p className="text-gray-400 text-sm mt-4">
                We'll contact you within 2 hours to confirm your appointment
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
