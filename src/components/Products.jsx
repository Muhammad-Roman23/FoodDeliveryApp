import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
    const [hoveredCounter, setHoveredCounter] = useState(null);
    const [count, setcount] = useState(0)

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Our Popular <span className="text-[#FF6B00]">Dishes</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Freshly made • Fast delivery • Best taste
                    </p>
                </div>

                {/* Products Grid - 3 Cards Per Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.slice(0,12).map((product, index) => {
                        const isCounterHovered = hoveredCounter === product.id;

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    
                                    {/* Counter Area - Hover only on this area */}
                                    <div 
                                        className="absolute bottom-4 right-4 transition-all duration-200"
                                        onMouseEnter={() => setHoveredCounter(product.id)}
                                        onMouseLeave={() => setHoveredCounter(null)}
                                    >
                                        {isCounterHovered ? (
                                            <div className="bg-white rounded-2xl shadow-lg flex items-center gap-1 p-1">
                                            <button
                                                className={`w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-colors text-gray-600 ${count < 1 ? "hidden" : "block"}`}
                                                onClick={() => setcount(count - 1)}
                                            >
                                                    
                                                    <Minus size={18} />
                                                </button>
                                                <span className="font-semibold text-lg px-3 text-gray-800 min-w-[28px] text-center">
                                                    {count}
                                                </span>
                                                <button className="w-8 h-8 flex items-center justify-center hover:bg-[#FF6B00] hover:text-white rounded-xl transition-all text-[#FF6B00]"
                                                    onClick={()=>setcount(count+1)}
                                                    >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        ) : (
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                className="bg-white hover:bg-[#FF6B00] hover:text-white text-[#FF6B00] w-10 h-10 rounded-2xl shadow-lg flex items-center justify-center transition-all"
                                            >
                                                <Plus size={22} />
                                            </motion.button>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900 leading-tight pr-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-[#FF6B00] font-bold text-lg whitespace-nowrap">
                                            Rs. {product.price}
                                        </p>
                                    </div>

                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                        {product.desc}
                                    </p>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">★ {product.rating}</span>
                                        <span className="text-emerald-600 font-medium">30-40 min</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Explore All Products Button */}
                <div className="flex justify-center mt-14">
                    <Link to={"/productscta"} >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#FF6B00] hover:bg-[#FF5500] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-200 transition-all cursor-pointer"
                    >
                        Explore All Products
                    </motion.button>
                    </Link>

                </div>
            </div>
        </section>
    );
};