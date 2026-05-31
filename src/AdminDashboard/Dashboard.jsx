import { motion } from "framer-motion";
import { ShoppingBag, Users, DollarSign, ClipboardList, LogOut, User } from "lucide-react";

export const Dashboard = () => {
  const trendingFoods = [
    {
      id: 1,
      name: "Zinger Burger",
      price: 450,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      desc: "Crispy chicken burger with spicy mayo",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 1200,
      image: "https://images.unsplash.com/photo-1601924582971-c9e5f2b4f5b4",
      desc: "Cheesy loaded pepperoni pizza",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Loaded Fries",
      price: 350,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      desc: "Fries with cheese & sauces",
      rating: 4.6,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back, Admin! Here's what's happening today.</p>
        </div>

        {/* Admin Profile - Top Right */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-10 h-10 bg-[#FF6B00] rounded-xl flex items-center justify-center text-white">
            <User size={22} />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Admin</p>
            <p className="text-xs text-gray-500 -mt-1">Super Admin</p>
          </div>
          <button
            className="ml-3 p-2 hover:bg-red-50 rounded-xl text-red-500 cursor-pointer hover:text-red-600 transition-all"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
        >
          <div className="flex justify-between items-start">
            <DollarSign className="text-[#FF6B00]" size={28} />
            <span className="text-emerald-500 text-xs font-medium">+12.4%</span>
          </div>
          <h2 className="text-3xl font-bold mt-4">Rs. 125,400</h2>
          <p className="text-gray-500 text-sm mt-1">Total Revenue</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
        >
          <div className="flex justify-between items-start">
            <ClipboardList className="text-[#FF6B00]" size={28} />
            <span className="text-emerald-500 text-xs font-medium">+8%</span>
          </div>
          <h2 className="text-3xl font-bold mt-4">1,240</h2>
          <p className="text-gray-500 text-sm mt-1">Total Orders</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
        >
          <div className="flex justify-between items-start">
            <ShoppingBag className="text-[#FF6B00]" size={28} />
          </div>
          <h2 className="text-3xl font-bold mt-4">320</h2>
          <p className="text-gray-500 text-sm mt-1">Active Foods</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
        >
          <div className="flex justify-between items-start">
            <Users className="text-[#FF6B00]" size={28} />
          </div>
          <h2 className="text-3xl font-bold mt-4">8,540</h2>
          <p className="text-gray-500 text-sm mt-1">Total Customers</p>
        </motion.div>

      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Revenue Chart */}
        <div className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-md border border-gray-100">
          <h2 className="font-bold text-lg mb-5">Revenue Analytics</h2>
          <div className="h-64 flex items-end gap-3">
            {[20, 35, 28, 45, 38, 55, 48].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div 
                  className="bg-[#FF6B00] rounded-t-xl w-full transition-all hover:bg-[#ff8a33]" 
                  style={{ height: `${h}px` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders - Updated */}
        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 col-span-2">
          <h2 className="font-bold text-lg mb-6">Recent Orders</h2>

          {/* Table Header */}
          <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 mb-4 px-2">
            <span>Customer Name</span>
            <span>Foods</span>
            <span>Price</span>
            <span>Status</span>
          </div>

          {/* Orders List */}
          <div className="space-y-1">
            {[
              { c: "Ali Khan", food: "Zinger Burger", price: 450, status: "Delivered" },
              { c: "Sara Ahmed", food: "Pepperoni Pizza", price: 1200, status: "Pending" },
              { c: "Ahmed Raza", food: "Loaded Fries", price: 350, status: "Delivered" },
              { c: "John Peter", food: "Chicken Wrap", price: 520, status: "Cancelled" },
            ].map((o, i) => (
              <div 
                key={i} 
                className="grid grid-cols-4 items-center py-4 px-2 hover:bg-gray-50 rounded-2xl transition-all"
              >
                <span className="font-medium text-gray-800">{o.c}</span>
                <span className="text-gray-700">{o.food}</span>
                <span className="font-semibold text-[#FF6B00]">Rs {o.price}</span>
                <span
                  className={`text-xs px-4 py-1.5 rounded-2xl font-medium w-fit ${
                    o.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : o.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {o.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 TRENDING FOODS */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">🔥 Trending Foods</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingFoods.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={product.name}
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <span className="text-[#FF6B00] font-bold text-lg">
                    Rs {product.price}
                  </span>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2">
                  {product.desc}
                </p>

                <div className="flex justify-between items-center mt-4 text-sm">
                  <span className="flex items-center gap-1">⭐ {product.rating}</span>
                  <span className="text-emerald-600 font-medium">30-40 min</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};