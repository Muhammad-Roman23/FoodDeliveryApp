import { useState } from "react";
import { Search, Eye, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export const ListOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample Orders Data
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
    status: "Completed",
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
    status: "Completed",
    date: "3 hours ago",
  },
];

  const filteredOrders = orders.filter(order =>
    order.foodName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Status Color Helper
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
          <h1 className="text-4xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-500 mt-1">Manage and track all customer orders</p>
        </div>
        
        {/* You can add a button here if needed later */}
        {/* <button className="flex items-center gap-2 bg-[#FF6B00] text-white px-5 py-3 rounded-2xl hover:bg-[#ff8533] transition-all shadow-md">
          <Plus size={20} />
          <span className="font-medium">New Order</span>
        </button> */}
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
            className="w-full bg-gray-50 border border-gray-200 pl-11 py-3 rounded-2xl focus:outline-none focus:border-[#FF6B00]"
          />
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full  min-w-[1400px]">
     <thead>
  <tr className="border-b border-gray-100">
    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Order ID
    </th>

    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Customer
    </th>

    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Food Image
    </th>

    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Food Name
    </th>

    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Category
    </th>

    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Qty
    </th>

    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Price
    </th>

    {/* <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Total
    </th> */}

    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-500">
      Status
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
              {filteredOrders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-all group"
                >
                  {/* Order ID */}
            {/* Order ID */}
<td className="px-6 py-4 whitespace-nowrap">
  <span className="font-mono font-semibold text-gray-700">
    {order.id}
  </span>
</td>

{/* Customer */}
<td className="px-6 py-4 whitespace-nowrap">
  <p className="font-medium text-gray-800">
    {order.customer}
  </p>
</td>

{/* Food Image */}
<td className="px-6 py-4 whitespace-nowrap">
  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-100">
    <img
      src={order.image}
      alt={order.foodName}
      className="w-full h-full object-cover"
    />
  </div>
</td>

{/* Food Name */}
<td className="px-6 py-4 whitespace-nowrap">
  <p className="font-semibold text-gray-800">
    {order.foodName}
  </p>
</td>

{/* Category */}
<td className="px-6 py-4 whitespace-nowrap">
  <span className="px-4 py-1.5 bg-orange-50 text-[#FF6B00] text-sm font-medium rounded-2xl">
    {order.category}
  </span>
</td>

{/* Quantity */}
<td className="px-6 py-4 whitespace-nowrap">
  <span className="bg-slate-100 px-3 py-1 rounded-xl font-semibold">
    {order.quantity}
  </span>
</td>

{/* Price */}
<td className="px-6 py-4 whitespace-nowrap">
  <span className="font-bold text-[#FF6B00]">
    Rs {order.price}
  </span>
</td>

{/* Total */}
{/* <td className="px-6 py-4 whitespace-nowrap">
  <span className="font-bold text-emerald-600">
    Rs {order.total}
  </span>
</td> */}

{/* Status */}
<td className="px-6 py-4 whitespace-nowrap">
  <span
    className={`px-4 py-1.5 text-sm font-medium rounded-2xl ${getStatusStyle(
      order.status
    )}`}
  >
    {order.status}
  </span>
</td>

{/* Date */}
<td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
  {order.date}
</td>

{/* Actions */}
<td className="px-6 py-4 whitespace-nowrap">
  <div className="flex items-center justify-center gap-3">
    <button
      className="p-2 hover:bg-blue-50 text-blue-600 rounded-xl transition-all"
      title="View Order"
    >
      <Eye size={20} />
    </button>

    <button
      className="p-2 hover:bg-red-50 text-red-600 rounded-xl transition-all"
      title="Delete Order"
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

        {filteredOrders.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No orders found
          </div>
        )}
      </div>
    </div>
  );
};