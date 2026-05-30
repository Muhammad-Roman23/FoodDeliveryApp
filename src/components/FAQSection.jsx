import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

export const FAQSection = ({ faqs, title, subtitle }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="text-[#FF6B00]" > Frequently </span> Aasked Questions ( FAQ's )
            {/* <span className="text-[#FF6B00]">{title?.highlight}</span> */}
          </h2>

          <p className="text-gray-600 text-lg">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-3xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-6">
                  {faq.question}
                </h3>

                <div className="text-[#FF6B00] cursor-pointer">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Still have questions?{" "}
            <Link to={"/contact"} >
            <span className="text-[#FF6B00] font-medium cursor-pointer hover:underline">
              Contact Us
            </span>
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};