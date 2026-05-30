import { motion } from "framer-motion";
import { ShoppingBag, Users, DollarSign, ClipboardList } from "lucide-react";

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-500">
          FoodDash admin analytics & insights
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-5 rounded-2xl shadow">
          <DollarSign className="text-[#FF6B00]" />
          <h2 className="text-xl font-bold mt-2">Rs. 125,400</h2>
          <p className="text-gray-500 text-sm">Total Revenue</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <ClipboardList className="text-[#FF6B00]" />
          <h2 className="text-xl font-bold mt-2">1,240</h2>
          <p className="text-gray-500 text-sm">Orders</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <ShoppingBag className="text-[#FF6B00]" />
          <h2 className="text-xl font-bold mt-2">320</h2>
          <p className="text-gray-500 text-sm">Products</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <Users className="text-[#FF6B00]" />
          <h2 className="text-xl font-bold mt-2">8,540</h2>
          <p className="text-gray-500 text-sm">Customers</p>
        </div>

      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 📉 CHART (WIDTH REDUCED) */}
        <div className="lg:col-span-1 bg-white p-5 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Revenue Analytics</h2>

          <div className="h-52 flex items-end gap-2">
            <div className="w-4 h-20 bg-[#FF6B00] rounded"></div>
            <div className="w-4 h-32 bg-[#FF6B00]/80 rounded"></div>
            <div className="w-4 h-24 bg-[#FF6B00]/70 rounded"></div>
            <div className="w-4 h-40 bg-[#FF6B00]/90 rounded"></div>
            <div className="w-4 h-28 bg-[#FF6B00]/60 rounded"></div>
            <div className="w-4 h-44 bg-[#FF6B00] rounded"></div>
          </div>
        </div>

        {/* 📋 RECENT ORDERS (UPGRADED) */}
        <div className="bg-white p-5 col-span-2 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Recent Orders</h2>

          {/* HEADERS */}
          <div className="grid grid-cols-4 text-xs font-bold text-gray-500 border-b pb-2 mb-3">
            <span>Customer</span>
            <span>Food</span>
            <span>Price</span>
            <span>Status</span>
          </div>

          {[
            { c: "Ali", food: "Burger", price: 450, status: "Delivered" },
            { c: "Sara", food: "Pizza", price: 1200, status: "Pending" },
            { c: "Ahmed", food: "Fries", price: 300, status: "Delivered" },
            { c: "John", food: "Wrap", price: 500, status: "Cancelled" },
          ].map((o, i) => (
            <div
              key={i}
              className="grid grid-cols-4 text-sm py-2 border-b last:border-none"
            >
              <span>{o.c}</span>
              <span>{o.food}</span>
              <span className="text-[#FF6B00] font-semibold">
                Rs {o.price}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full w-fit ${
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

      {/* 🔥 TRENDING FOODS */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-5">🔥 Trending Foods</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {trendingFoods.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all group"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{product.name}</h3>
                  <span className="text-[#FF6B00] font-bold">
                    Rs {product.price}
                  </span>
                </div>

                <p className="text-gray-500 text-sm">
                  {product.desc}
                </p>

                <div className="flex justify-between text-sm mt-3">
                  <span>★ {product.rating}</span>
                  <span className="text-emerald-600">30-40 min</span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
};