import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';


import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials = () => {
    const testimonials = [
        {
            name: "Ayesha Khan",
            location: "Gulberg, Lahore",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            text: "The food was absolutely delicious and delivered within 25 minutes! Best biryani I've had in a long time.",
        },
        {
            name: "Bilal Ahmed",
            location: "DHA, Lahore",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            text: "Super fast delivery and the pizza was still hot. The quality is consistent every time. Highly recommended!",
        },
        {
            name: "Sana Malik",
            location: "Johar Town, Lahore",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            rating: 4,
            text: "Love the variety of options. The chocolate lava cake is to die for! Delivery is always on time.",
        },
        {
            name: "Hamza Farooq",
            location: "Model Town, Lahore",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: 5,
            text: "Best food delivery app in Lahore. The grilled chicken was perfectly cooked. Will order again!",
        },
        {
            name: "Fatima Zahra",
            location: "Bahria Town, Lahore",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
            rating: 5,
            text: "Amazing service! My order was delivered in 28 minutes and everything was fresh and tasty.",
        },
    ];

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-[#FF6B00]">Customers Say</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Real stories from real food lovers
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.testimonial-pagination',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    loop={true}
                      grabCursor={true}
                    className="pb-12 "
                
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full flex flex-col"
                            >
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                                    ))}
                                </div>

                                <Quote className="text-[#FF6B00] opacity-20 w-12 h-12 mb-4" />

                                <p className="text-gray-700 text-[17px] leading-relaxed flex-1">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-8">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-2xl object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Themed Pagination Dots */}
                {/* <div className="testimonial-pagination flex justify-center gap-3 mt-8"></div> */}
            </div>
        </section>
    );
};