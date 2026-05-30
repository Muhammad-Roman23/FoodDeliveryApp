import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
      const initialCart = [
    {
      id: 1,
      name: "Chicken Burger",
      price: 450,
      qty: 2,
    },
    {
      id: 2,
      name: "Zinger Wrap",
      price: 350,
      qty: 1,
    },
    {
      id: 3,
      name: "Fries Large",
      price: 250,
      qty: 1,
    },
  ];


    return (
        <header 
            className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'sticky  top-5 ' 
                    : 'absolute bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                
                <div className={`flex items-center justify-between py-5 transition-all duration-300 ${
                    isScrolled ? 'rounded-3xl bg-white shadow-sm  md:px-6 px-3' : ''
                }`}>
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-[#FF6B00] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                            🍔
                        </div>
                        <h1 className={`text-3xl font-bold tracking-tight transition-colors ${
                            isScrolled ? 'text-gray-900' : 'text-white'
                        }`}>
                            Food<span className={`${isScrolled ? 'text-[#FF6B00]' : 'text-[#FFC300]'}`}>Dash</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium">
                        <Link to={"/"} className={`transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white hover:text-[#FF6B00]'
                        }`}>Home</Link>
                        <Link to={"/about"} className={`transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white hover:text-[#FF6B00]'
                        }`}>About</Link>
                        <Link to={"/products"} className={`transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white hover:text-[#FF6B00]'
                        }`}>Products</Link>
                        <Link to={"/contact"} className={`transition-colors ${
                            isScrolled ? 'text-gray-700 hover:text-[#FF6B00]' : 'text-white hover:text-[#FF6B00]'
                        }`}>Contact Us</Link>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center md:gap-4  gap-0">
                         
                        {/* Cart Icon */}
                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCartOpen(true)}
                        className={`relative p-3 rounded-2xl cursor-pointer transition-all ${
                            isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                        }`}
                    >
                        <ShoppingCart size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
                        <span className="absolute -top-1 -right-1 bg-[#22C55E] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {initialCart.length}
                        </span>
                    </motion.div>
                    <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} initialCart={initialCart} />


                        {/* Login Button */}
                        <Link to={"/login"} >
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mob-login flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF5500] text-white px-6 py-3 rounded-2xl font-semibold text-sm cursor-pointer transition-all"
                        >
                            <User size={20} />
                            <span>Login</span>
                        </motion.div>
                        </Link>


                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-3 rounded-2xl transition-all ${
                                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                            }`}
                        >
                            {isOpen ? <X size={28} className={isScrolled ? 'text-gray-700' : 'text-white'} /> 
                                   : <Menu size={28} className={isScrolled ? 'text-gray-700' : 'text-white'} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white mx-6 rounded-3xl shadow-lg py-6 px-6 mt-2"
                >
                    <div className="flex flex-col gap-5 text-[16px] font-medium text-gray-700">
                        <Link to={"/"} className="hover:text-[#FF6B00] transition-colors">Home</Link>
                        <Link to={"/about"} className="hover:text-[#FF6B00] transition-colors">About</Link>
                        <Link to={"/products"} className="hover:text-[#FF6B00] transition-colors">Products</Link>
                        <Link to={"/contact"} className="hover:text-[#FF6B00] transition-colors">Contact Us</Link>
                    </div>
                     {/* Login Button */}
                     <Link to={"/login"} > 
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF5500] text-white px-6 py-3 rounded-2xl font-semibold text-sm cursor-pointer transition-all mt-6 text-center justify-center"
                        >
                            <User size={20} />
                            <span>Login</span>
                        </motion.div>
                        </Link>
                </motion.div>
            )}
        </header>
    );
};