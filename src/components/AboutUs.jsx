import { motion } from 'framer-motion';

export const AboutUs = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34b4" 
                                alt="FoodDash Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Only Paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            About <span className="text-[#FF6B00]">FoodDash</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            FoodDash is a modern food delivery platform founded in 2024 with a simple goal — 
                            to bring delicious food from the best restaurants straight to your doorstep quickly and reliably.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            We work with carefully selected restaurants and passionate chefs who share our commitment 
                            to quality and customer satisfaction. Whether you're craving local desi food, fast food, 
                            or something sweet — we've got you covered.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our mission is to make food ordering effortless, delivery lightning fast, and every meal 
                            a delightful experience. We believe good food should be accessible to everyone, anytime.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            With thousands of happy customers across Lahore and growing rapidly, FoodDash is more than 
                            just a delivery app — we're your food companion.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};