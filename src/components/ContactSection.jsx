import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Submit a <span className="text-[#FF6B00]">Complaint</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Facing an issue with your order or delivery? Let us know and our support team will resolve it quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-2"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Support Info
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                <div className="bg-[#FFF1E8] p-3 rounded-xl">
                  <Phone className="text-[#FF6B00]" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Helpline</h4>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                <div className="bg-[#FFF1E8] p-3 rounded-xl">
                  <Mail className="text-[#FF6B00]" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">support@fooddash.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                <div className="bg-[#FFF1E8] p-3 rounded-xl">
                  <Clock className="text-[#FF6B00]" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Support Hours</h4>
                  <p className="text-gray-600">9:00 AM - 11:00 PM</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Complaint Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Complaint Form
            </h3>

            <form className="space-y-5">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />

              {/* Phone */}
              <input
                type="text"
                placeholder="Phone Number *"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />

              {/* Order ID */}
              <input
                type="text"
                placeholder="Order ID *"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              />

              {/* Complaint */}
              <textarea
                rows="5"
                placeholder="Write your complaint *"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#e65f00] text-white py-4 rounded-2xl font-semibold transition-all cursor-pointer"
              >
                Submit Complaint
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};  