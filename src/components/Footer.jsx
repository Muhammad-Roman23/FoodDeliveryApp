import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Link2, Share2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] text-gray-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold">
              Food<span className="text-[#FF6B00]">Dash</span>
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Fast, reliable and delicious food delivery at your doorstep.
              Your favorite meals delivered hot and fresh anytime.
            </p>

            {/* Social Icons (lucide v1 compatible) */}
            <div className="flex gap-3 mt-5">

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm hover:text-[#FF6B00] hover:shadow-md cursor-pointer transition">
                <Globe className="w-4 h-4" />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm hover:text-[#FF6B00] hover:shadow-md cursor-pointer transition">
                <Link2 className="w-4 h-4" />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm hover:text-[#FF6B00] hover:shadow-md cursor-pointer transition">
                <Share2 className="w-4 h-4" />
              </div>

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#FF6B00] cursor-pointer">Home</li>
              <li className="hover:text-[#FF6B00] cursor-pointer">About Us</li>
              <li className="hover:text-[#FF6B00] cursor-pointer">Products</li>
              <li className="hover:text-[#FF6B00] cursor-pointer">Contact Us</li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Fast Delivery</li>
              <li>24/7 Support</li>
              <li>Live Order Tracking</li>
              <li>Best Restaurant Deals</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <ul className="space-y-4 text-gray-600">

              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                Lahore, Pakistan
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                +92 300 1234567
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                support@fooddash.com
              </li>

            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FoodDash. All rights reserved.
        </div>

      </div>
    </footer>
  );
};