import { Header } from "../components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Categories } from "../components/Categories";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import  slider1  from  "../assets/images/slider1image.avif";
import  slider2  from  "../assets/images/slider2image.avif";
import  slider3  from  "../assets/images/slider3image.jpg";
import { Products } from "../components/Products";
import { CTASection } from "../components/CTASection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { FAQSection } from "../components/FAQSection";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export const Home = () => {
    useEffect(()=>{
    window.scroll(0,0)
    },[])
 const homeFaqs = [
  {
    question: "How long does FoodDash delivery take?",
    answer:
      "Our average delivery time is 30-40 minutes depending on your location, traffic, and restaurant preparation time. You can track your order live in the app."
  },
  {
    question: "Does FoodDash deliver 24/7?",
    answer:
      "Yes, we operate 24/7 in selected areas. However, delivery hours may vary depending on restaurant availability in your region."
  },
  {
    question: "Can I track my order in real-time?",
    answer:
      "Absolutely! FoodDash provides real-time tracking so you can see exactly where your order is from preparation to delivery."
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept cash on delivery, debit/credit cards, and online wallet payments depending on your location."
  },
  {
    question: "Is there a minimum order amount?",
    answer:
      "Minimum order requirements depend on the restaurant. You can view this information before placing your order."
  },
  {
    question: "What if my order is late or missing?",
    answer:
      "If your order is delayed or missing, contact our support team immediately. We ensure quick resolution or refund where applicable."
  }
];
  const slides = [
        {
            image: slider1,
            title: "Craving Something Delicious?",
            subtitle: "Order fresh and tasty food from top restaurants near you",
            buttonText: "Order Now"
        },
        {
            image: slider2,
            title: "Pizza Love Delivered Fast",
            subtitle: "Hot, cheesy, and straight to your door in minutes",
            buttonText: "Order Pizza"
        },
        {
            image: slider3,
            title: "Desi Flavors at Your Doorstep",
            subtitle: "Authentic biryani, karahi & more with love",
            buttonText: "Browse Menu"
        }
    ];
    return(
        <>
        {/* <Header /> */}
        <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            {/* Background Image */}
                            <img 
                                src={slide.image} 
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/55"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center">
                                <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full ">
                                    <motion.div
                                        key={index}                    // Fixed overlapping issue
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 30 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="w-full "
                                    >
                                        <h1 className="text-5xl text-center lg:text-6xl font-bold text-white leading-tight mb-4">
                                            {slide.title}
                                        </h1>
                                        <p className="text-xl text-center text-gray-200 mb-8 w-full">
                                            {slide.subtitle}
                                        </p>
                                        <div className="button-parent w-fit mx-auto ">

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-[#FF6B00] hover:bg-[#FF5500] text-center text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
                                        >
                                            {slide.buttonText}
                                        </motion.button>
                                        </div>

                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination - Center Bottom */}
            <div className="custom-pagination absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3"></div>
        </section>
        <AboutUs />
        <Categories/>
        <Products />
        <CTASection />
        <WhyChooseUs />
        <Testimonials />
       <FAQSection
  faqs={homeFaqs}
  title={{ main: "About", highlight: "FoodDash" }}
  subtitle="Learn more about our company"
/>
        {/* <Footer /> */}
        </>
        
    )
}