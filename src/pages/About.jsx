import { Banner } from "../components/Banner"
import { Categories } from "../components/Categories"
import { CTASection } from "../components/CTASection"
import { FAQSection } from "../components/FAQSection"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Testimonials } from "../components/Testimonials";

export const About = () => {
      const [activeTab, setActiveTab] = useState("mission");

const data = {
    mission: {
      title: "Our Mission",
      text: "Our mission at FoodDash is to redefine the way people experience food delivery by making it faster, smarter, and more reliable. We aim to connect customers with their favorite restaurants in the most seamless way possible while ensuring freshness, quality, and convenience at every step of the journey.",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2"
    },
    vision: {
      title: "Our Vision",
      text: "Our vision is to become the most trusted and widely used food delivery platform, not just locally but globally. We see a future where ordering food is effortless, instant, and personalized for every user, empowering restaurants and delighting customers at the same time.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    values: {
      title: "Our Values",
      text: "At FoodDash, our core values are built around quality, speed, and trust. We believe in delivering excellence through teamwork, innovation, and customer-first thinking. Every decision we make is guided by integrity, consistency, and the goal of creating the best food delivery experience.",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
    }
  };


useEffect(()=>{
window.scroll(0,0)
},[])

  const current = data[activeTab];


  const aboutFaqs = [
  {
    question: "What is FoodDash?",
    answer:
      "FoodDash is a modern food delivery platform that connects customers with their favorite restaurants to provide fast, reliable, and fresh meal delivery services."
  },
  {
    question: "When was FoodDash founded?",
    answer:
      "FoodDash was founded in 2024 with a vision to revolutionize food delivery by making it faster, smarter, and more accessible for everyone."
  },
  {
    question: "What is FoodDash’s mission?",
    answer:
      "Our mission is to simplify food ordering and delivery while ensuring quality, speed, and customer satisfaction at every step."
  },
  {
    question: "What makes FoodDash different from others?",
    answer:
      "We focus on speed, reliability, and quality partnerships with top restaurants. Our user experience is designed to be simple and seamless."
  },
  {
    question: "Which cities does FoodDash operate in?",
    answer:
      "FoodDash currently operates in major cities and is rapidly expanding to new regions to serve more customers every day."
  },
  {
    question: "How does FoodDash ensure food quality?",
    answer:
      "We partner only with trusted restaurants and ensure strict quality checks, so every meal is delivered fresh and hygienic."
  }
];
    return(
        <>
         <Banner
        title="About FoodDash"
        description="FoodDash is a modern food delivery platform built to bring your favorite meals straight to your doorstep. We believe in fast service, fresh food, and a seamless experience that connects customers with the best restaurants in town. Our mission is to make food ordering simple, fast, and enjoyable for everyone."
        bgImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
      />
           <Categories/>
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          {/* Heading (now consistent with About section) */}
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            About <span className="text-[#FF6B00]">Us</span>
          </h2>

          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            {["mission", "vision", "values"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {current.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {current.text}
            </p>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-[380px] object-cover"
          />
        </motion.div>

      </div>
    </section>
      
         
             <CTASection
  badgeText="Our Story"
  title="About FoodDash"
  description="We started FoodDash to deliver happiness through food..."
  primaryBtnText="Order Now"
  primaryBtnLink="/products"
  secondaryBtnText="Learn More"
  secondaryBtnLink="/about"
/>
               <Testimonials />
             <FAQSection
  faqs={aboutFaqs}
  title={{ main: "About", highlight: "FoodDash" }}
  subtitle="Learn more about our company"
/>
      
        </>
    )
}