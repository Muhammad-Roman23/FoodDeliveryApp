import { Banner } from "../components/Banner"
import { products } from "../data/products"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Plus, Minus, Search } from 'lucide-react';
import { CTASection } from "../components/CTASection";

export const AllProducts = () => {



        const [hoveredCounter, setHoveredCounter] = useState(null);
        const [count, setcount] = useState(0)
        const [searchTerm, setSearchTerm] = useState("");

        const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
        useEffect(()=>{
        window.scroll(0,0)
        },[])

    return(
        <>
            <Banner
                title="Explore Our Dishes"
                description="Browse our carefully curated selection of mouthwatering meals, prepared fresh and delivered fast. Whether you're craving a hearty burger, authentic pizza, delicious cakes, or flavorful snacks, FoodDash brings the best tastes together in one place for a convenient and satisfying dining experience."
                bgImage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            />

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    
                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            Our <span className="text-[#FF6B00]">Dishes</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Freshly made • Fast delivery • Best taste
                        </p>
                    </div>


                    <div className=" max-w-2xl mx-auto mb-10 input w-full mx-auto px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] mb-8 flex justify-between items-center gap-3">
                            
                            <input
                            type="text"
                            placeholder="Search for dishes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
                            />

                            <Search
                            size={20}
                            className="text-[#FF6B00]"
                            />

                    </div>

                    {/* Products Grid - 3 Cards Per Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.length === 0 && (
                            <div className="col-span-full text-center py-16">
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                                No Dishes Found
                                </h3>

                                <p className="text-gray-500">
                                Try searching with a different keyword.
                                </p>
                            </div>
                        )}
                        {filteredProducts.map((product, index) => {
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
                </div>
            </section>
           <CTASection
  badgeText="Ready?"
  title="Explore All Foods"
  description="Browse thousands of delicious meals and order instantly."
  primaryBtnText="Start Ordering"
  primaryBtnLink="/products"
  secondaryBtnText="View Cart"
  secondaryBtnLink="/cart"
//   showAuthLinks={true}
/>
        </>
            
    )
}