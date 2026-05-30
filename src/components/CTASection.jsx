import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CTASection = ({
    badgeText = "Hungry?",
    title = "Order Now",
    description = "Get your favorite meals delivered hot and fresh in just 30-40 minutes. Thousands of customers trust us every day.",

    primaryBtnText = "Order Now - It's Free Delivery!",
    primaryBtnLink = "/products",

    secondaryBtnText = "Browse Restaurants",
    secondaryBtnLink = "/products",

   
}) => {
    return (
        <section className="py-20 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="bg-[#FF6B00] rounded-3xl p-12 md:p-16 text-center shadow-xl">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        {/* TITLE */}
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">

                            <span className='italic bg-white rounded-full px-4 py-2 me-5'>
                                {badgeText}
                            </span>

                            <span className="text-white">{title}</span>
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-gray-200 text-xl max-w-2xl mx-auto mb-10">
                            {description}
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">

                            <Link to={primaryBtnLink}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white border-2 hover:bg-transparent text-[#FF6B00] hover:border-[#fff] hover:text-[#fff] text-xl font-semibold px-12 py-5 rounded-2xl transition-all cursor-pointer"
                                >
                                    {primaryBtnText}
                                </motion.button>
                            </Link>

                            <Link to={secondaryBtnLink}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="border-2 border-white hover:border-white text-gray-100 text-xl font-semibold px-10 py-5 rounded-2xl transition-all cursor-pointer"
                                >
                                    {secondaryBtnText}
                                </motion.button>
                            </Link>

                        </div>

                        {/* TRUST / AUTH LINKS */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-200">

                            <div className="flex items-center gap-2">
                                <span className="text-[#fff] text-xl">✓</span>
                                <span>30 Min Delivery</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[#fff] text-xl">✓</span>
                                <span>100% Fresh Food</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[#fff] text-xl">✓</span>
                                <span>Secure Payment</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[#fff] text-xl">✓</span>
                                <span>24/7 Support</span>
                            </div>
                        </div>

                        

                    </motion.div>

                </div>

            </div>
        </section>
    );
};