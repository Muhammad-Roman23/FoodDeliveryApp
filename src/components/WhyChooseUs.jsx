import { motion } from 'framer-motion';
import { Clock, UtensilsCrossed, ShieldCheck, Award, Truck, Heart } from 'lucide-react';

export const WhyChooseUs = () => {
    const features = [
        {
            icon: <Truck size={42} />,
            title: "Lightning Fast Delivery",
            desc: "30-40 minutes average delivery time",
            color: "text-[#FF6B00]"
        },
        {
            icon: <UtensilsCrossed size={42} />,
            title: "Fresh & Hygienic Food",
            desc: "Prepared with premium ingredients",
            color: "text-emerald-600"
        },
        {
            icon: <ShieldCheck size={42} />,
            title: "Secure Payment",
            desc: "100% safe & multiple payment options",
            color: "text-blue-600"
        },
        {
            icon: <Award size={42} />,
            title: "Best Quality",
            desc: "Handpicked restaurants & chefs",
            color: "text-amber-600"
        },
        {
            icon: <Clock size={42} />,
            title: "24/7 Support",
            desc: "Always here to help you",
            color: "text-purple-600"
        },
        {
            icon: <Heart size={42} />,
            title: "Love Every Bite",
            desc: "Satisfaction guaranteed",
            color: "text-pink-600"
        },
    ];

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-[#FF6B00]">FoodDash</span>?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-md mx-auto">
                        We don’t just deliver food, we deliver happiness
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                        >
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gray-50 group-hover:bg-orange-50 transition-colors ${feature.color}`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};