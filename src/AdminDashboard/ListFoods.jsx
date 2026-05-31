import { useState } from "react";
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ListFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample Data
  const Foods = [
    {
      id: 1,
      name: "Zinger Burger",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      category: "Fast Food",
      price: 450,
      quantity: 84,
      lastEdited: "2 hours ago",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      image: "https://images.unsplash.com/photo-1601924582971-c9e5f2b4f5b4",
      category: "Pizza",
      price: 1200,
      quantity: 23,
      lastEdited: "Yesterday",
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Loaded Cheese Fries",
      image: "https://images.unsplash.com/photo-1630409357622-4c3c2f9e1e8f",
      category: "Snacks",
      price: 350,
      quantity: 120,
      lastEdited: "3 days ago",
      status: "In Stock",
    },
    {
      id: 4,
      name: "Chicken Shawarma",
      image: "https://images.unsplash.com/photo-1561654791-2f9e8b5c1c3f",
      category: "Fast Food",
      price: 280,
      quantity: 0,
      lastEdited: "1 week ago",
      status: "Out of Stock",
    },
  ];

  const filteredFoods = Foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Foods</h1>
          <p className="text-gray-500 mt-1">Manage your food items and inventory</p>
        </div>
<Link to={"/foods/add-foods"} >
        <button
          className="flex items-center gap-2 bg-[#FF6B00] text-white px-5 py-3 rounded-2xl hover:bg-[#ff8533] transition-all shadow-md cursor-pointer"
        >
          <Plus size={20} />
          <span className="font-medium">Add New Foods</span>
        </button>
</Link>

      </div>

      {/* SEARCH & FILTERS */}
      <div className="bg-white p-4 rounded-3xl shadow-sm mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search foods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 pl-11 py-3 rounded-2xl focus:outline-none focus:border-[#FF6B00]"
          />
        </div>
      </div>

      {/* PRODUCTS TABLE */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">

            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">Foods</th>
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">Category</th>
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">Stock</th>
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">Price</th>
                {/* <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">Last Edited</th> */}
                <th className="px-6 py-5 text-center text-sm font-semibold text-gray-500">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredFoods.map((food, index) => (
                <motion.tr
                  key={food.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-all group"
                >
                  {/* Foods Image + Name */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-100">
                        <img
                          src={food.image}
                          alt={food.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{food.name}</p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <span className="px-4 py-1.5 bg-orange-50 text-[#FF6B00] text-sm font-medium rounded-2xl">
                      {food.category}
                    </span>
                  </td>

                  {/* Stock Quantity */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${
                        food.quantity === 0 ? "text-red-600" :
                        food.quantity < 30 ? "text-yellow-600" : "text-emerald-600"
                      }`}>
                        {food.quantity}
                      </span>
                      {/* <span className="text-gray-500 text-sm">in stock</span> */}
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4">
                    <span className="font-bold text-[#FF6B00] text-lg">
                      Rs {food.price}
                    </span>
                  </td>

                  {/* Last Edited */}
                  {/* <td className="px-6 py-4 text-gray-600 text-sm">
                    {food.lastEdited}
                  </td> */}

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className="p-2 hover:bg-blue-50 cursor-pointer text-blue-600 rounded-xl transition-all"
                        title="View Details "
                      >
                        <Eye size={20} />
                      </button>
                      <button
                        className="p-2 hover:bg-yellow-50 cursor-pointer text-yellow-600 rounded-xl transition-all"
                        title="Edit Food"
                      >
                        <Edit2 size={20} />
                      </button>
                      <button
                        className="p-2 hover:bg-red-50 cursor-pointer text-red-600 rounded-xl transition-all"
                        title="Delete Food"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>

          </table>
        </div>

        {filteredFoods.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No foods found
          </div>
        )}
      </div>
    </div>
  );
};