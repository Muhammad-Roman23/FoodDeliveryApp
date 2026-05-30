import { motion } from 'framer-motion';
import { Pizza, Sandwich, UtensilsCrossed, Coffee, Flame, Cake } from 'lucide-react';
import pizza from "../assets/images/pizza.avif";
import biryani from "../assets/images/biryani.avif";
import burger from "../assets/images/burger.jpg";
import drinks from "../assets/images/drinks.avif";
import bbq from "../assets/images/bbq.jpg";
import deserts from "../assets/images/deserts.jpg";

export const Categories = () => {
    const categories = [
        {
            image: pizza,
            name: "Pizza",
            items: "120+ Items",
            icon: <Pizza size={28} />
        },
        {
            image: burger,
            name: "Burger",
            items: "85+ Items",
            icon: <Sandwich size={28} />
        },
        {
            image: biryani,
            name: "Biryani",
            items: "65+ Items",
            icon: <UtensilsCrossed size={28} />
        },
        {
            image: drinks,
            name: "Drinks",
            items: "45+ Items",
            icon: <Coffee size={28} />
        },
        {
            image: bbq,
            name: "BBQ & Grill",
            items: "70+ Items",
            icon: <Flame size={28} />
        },
        {
            image: deserts,
            name: "Desserts",
            items: "50+ Items",
            icon: <Cake size={28} />
        },
    ];

    return (
        <section className="py-16 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Browse Our <span className="text-[#FF6B00]">Menus</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover delicious categories from top restaurants
                    </p>
                </div>

                {/* Categories - 2 Cards Per Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex group cursor-pointer"
                        >
                            {/* Left Side - Image */}
                            <div className="w-2/5 relative">
                                <img 
                                    src={category.image} 
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="w-3/5 p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-[#FF6B00]">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {category.name}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-lg">{category.items}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};