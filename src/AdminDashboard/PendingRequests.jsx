import { useState } from "react";
import { Search, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export const PendingRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample Pending Users
  const requests = [
    {
      id: "USR-2001",
      name: "Ali Khan",
      email: "ali@gmail.com",
      contact: "0301-1234567",
      status: "Pending",
    },
    {
      id: "USR-2002",
      name: "Ahmed Raza",
      email: "ahmed@gmail.com",
      contact: "0302-9876543",
      status: "Pending",
    },
    {
      id: "USR-2003",
      name: "Sara Ali",
      email: "sara@gmail.com",
      contact: "0311-5554443",
      status: "Pending",
    },
  ];

  const filteredRequests = requests.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Pending Requests
          </h1>
          <p className="text-gray-500 mt-1 font-medium">
            Approve or reject new user registrations
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-3xl shadow-sm mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by ID, Name or Email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 pl-11 py-3 rounded-2xl focus:outline-none focus:border-[#FF6B00] text-gray-700 font-medium"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">

          <table className="min-w-[1000px] w-full">

            <thead>
              <tr className="border-b border-gray-100">
                {[
                  "User ID",
                  "Username",
                  "Email",
                  "Contact",
                  "Status",
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
              {filteredRequests.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                >

                  {/* ID */}
                  <td className="px-6 py-4 whitespace-nowrap font-mono font-semibold text-gray-700">
                    {user.id}
                  </td>

                  {/* NAME */}
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                    {user.name}
                  </td>

                  {/* EMAIL */}
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">
                    {user.email}
                  </td>

                  {/* CONTACT */}
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">
                    {user.contact}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-medium rounded-2xl">
                      Pending
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">

                      {/* ALLOW */}
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all text-sm font-medium">
                        <CheckCircle size={16} />
                        Allow
                      </button>

                      {/* DECLINE */}
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-all text-sm font-medium">
                        <XCircle size={16} />
                        Decline
                      </button>

                    </div>
                  </td>

                </motion.tr>
              ))}
            </tbody>

          </table>
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12 text-gray-500 font-medium">
            No pending requests found
          </div>
        )}
      </div>
    </div>
  );
};