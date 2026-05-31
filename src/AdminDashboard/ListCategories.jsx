import { useState } from "react";
import { Search, Eye, Trash2, Edit, Edit2 } from "lucide-react";
import { motion } from "framer-motion";

export const ListCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: "CAT-1001",
      name: "Fast Food",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      foodsCount: 12,
      date: "2 hours ago",
    },
    {
      id: "CAT-1002",
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1601924582971-c9e5f2b4f5b4",
      foodsCount: 8,
      date: "Yesterday",
    },
    {
      id: "CAT-1003",
      name: "Snacks",
      image: "https://images.unsplash.com/photo-1630409357622-4c3c2f9e1e8f",
      foodsCount: 5,
      date: "3 hours ago",
    },
  ];

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Categories</h1>
          <p className="text-gray-500 mt-1">
            Manage all food categories
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-3xl shadow-sm mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by Category ID or Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 pl-11 py-3 rounded-2xl focus:outline-none focus:border-[#FF6B00]"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
                  Category ID
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
                  Image
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
                  Category Name
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
                  Foods Count
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
                  Date
                </th>

                <th className="px-6 py-5 text-center text-sm font-semibold text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.map((cat, index) => (
                <motion.tr
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                >

                  {/* ID */}
                  <td className="px-6 py-4 whitespace-nowrap font-mono font-semibold text-gray-700">
                    {cat.id}
                  </td>

                  {/* IMAGE */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-100">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>

                  {/* NAME */}
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">
                    {cat.name}
                  </td>

                  {/* FOODS COUNT */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-slate-100 px-3 py-1 rounded-xl font-semibold text-gray-700">
                      {cat.foodsCount} Foods
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                    {cat.date}
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-3">

                      <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-xl transition-all">
                        <Eye size={20} />
                      </button>
                      <button className="p-2 hover:bg-yellow-50 text-yellow-600 rounded-xl transition-all">
                        <Edit2 size={20} />
                      </button>

                      <button className="p-2 hover:bg-red-50 text-red-600 rounded-xl transition-all">
                        <Trash2 size={20} />
                      </button>

                    </div>
                  </td>

                </motion.tr>
              ))}
            </tbody>

          </table>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No categories found
          </div>
        )}
      </div>
    </div>
  );
};