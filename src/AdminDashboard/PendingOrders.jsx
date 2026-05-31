import { useState } from "react";
import { Search, Eye, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export const PendingOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    {
      id: "ORD-1001",
      customer: "Ali Khan",
      foodName: "Zinger Burger",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      category: "Fast Food",
      quantity: 2,
      price: 450,
      total: 900,
      status: "Pending",
      date: "2 hours ago",
    },
    {
      id: "ORD-1002",
      customer: "Ahmed Raza",
      foodName: "Pepperoni Pizza",
      image: "https://images.unsplash.com/photo-1601924582971-c9e5f2b4f5b4",
      category: "Pizza",
      quantity: 1,
      price: 1200,
      total: 1200,
      status: "Pending",
      date: "Yesterday",
    },
    {
      id: "ORD-1003",
      customer: "Usman Ali",
      foodName: "Loaded Cheese Fries",
      image: "https://images.unsplash.com/photo-1630409357622-4c3c2f9e1e8f",
      category: "Snacks",
      quantity: 3,
      price: 350,
      total: 1050,
      status: "Pending",
      date: "3 hours ago",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.foodName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-700";
      case "Pending":
        return "bg-amber-50 text-amber-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
           Pending Orders
          </h1>
          <p className="text-gray-500 mt-1 font-medium">
            Manage and track all pending  orders
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-3xl shadow-sm mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by Order ID or Food Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 pl-11 py-3 rounded-2xl focus:outline-none focus:border-[#FF6B00] text-gray-700 font-medium"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">

          <table className="min-w-[1200px] w-full">

            <thead>
              <tr className="border-b border-gray-100">
                {[
                  "Order ID",
                  "Customer",
                  "Food Image",
                  "Food Name",
                  "Category",
                  "Qty",
                  "Price",
                  "Status",
                  "Date",
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-6 py-5 text-left text-sm font-semibold text-gray-500 whitespace-nowrap"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                >

                  {/* ID */}
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-gray-700 font-semibold">
                    {order.id}
                  </td>

                  {/* CUSTOMER */}
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                    {order.customer}
                  </td>

                  {/* IMAGE */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border border-gray-100">
                      <img
                        src={order.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>

                  {/* FOOD NAME */}
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">
                    {order.foodName}
                  </td>

                  {/* CATEGORY */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-4 py-1.5 bg-orange-50 text-[#FF6B00] text-sm font-medium rounded-2xl">
                      {order.category}
                    </span>
                  </td>

                  {/* QTY */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-slate-100 px-3 py-1 rounded-xl font-semibold">
                      {order.quantity}
                    </span>
                  </td>

                  {/* PRICE */}
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-[#FF6B00]">
                    Rs {order.price}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-4 py-1.5 text-sm font-medium rounded-2xl ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm font-medium">
                    {order.date}
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-xl transition-all">
                        <Eye size={20} />
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

        {filteredOrders.length === 0 && (
          <div className="text-center py-12 text-gray-500 font-medium">
            No orders found
          </div>
        )}
      </div>
    </div>
  );
};