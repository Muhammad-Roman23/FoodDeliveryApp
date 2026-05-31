import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  Users,
  ListOrdered,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export const Sidebar = () => {
  
  const [open, setOpen] = useState(true);

  const [openDropdown, setOpenDropdown] = useState(null);

  const location = useLocation();

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const isActive = (path) => location.pathname === path;

  // 🔥 FIX: active route helper (parent highlight)
  const isPathActive = (paths) =>
    paths.some((p) => location.pathname === p);
  useEffect(() => {
  if (!open) {
    setOpenDropdown(null); // sidebar close => all dropdowns close
  }
}, [open]);

  return (
    <div
      className={`bg-white shadow-xl border-r transition-all duration-300 min-h-screen ${
        open ? "w-72" : "w-20"
      } flex flex-col`}
    >
      {/* TOP */}
      <div className="flex items-center justify-between p-4 border-b">
        {open && (
          <h1 className="text-2xl font-bold text-[#FF6B00]">
            Food<span className="text-gray-900">Dash</span>
          </h1>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {open ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* MENU */}
      <div className="mt-6 flex flex-col gap-2 px-3">

        {/* DASHBOARD */}
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
            isActive("/dashboard")
              ? "bg-[#FF6B00] text-white shadow-md"
              : "text-gray-600 hover:bg-orange-50 hover:text-[#FF6B00]"
          }`}
        >
          <LayoutDashboard size={20} />
          {open && <span className="font-medium">Dashboard</span>}
        </Link>

        {/* FOODS */}
        <div>
          <button
            onClick={() => toggleDropdown("foods")}
            className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl transition-all ${
              isPathActive(["/foods/listfoods", "/foods/add-foods"])
                ? "bg-[#FF6B00] text-white shadow-md"
                : "text-gray-600 hover:bg-orange-50 hover:text-[#FF6B00]"
            }`}
          >
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} />
              {open && <span className="font-medium">Foods</span>}
            </div>

            {open && (
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openDropdown === "foods" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openDropdown === "foods" ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="ml-8 mt-1 flex flex-col gap-1 pb-2">
              <Link
                to="/foods/listfoods"
                className={`p-2.5 rounded-xl text-sm ${
                  isActive("/foods/listfoods")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600 hover:text-[#FF6B00]"
                }`}
              >
                View Foods
              </Link>

              <Link
                to="/foods/add-foods"
                className={`p-2.5 rounded-xl text-sm ${
                  isActive("/foods/add-foods")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600 hover:text-[#FF6B00]"
                }`}
              >
                Add Food
              </Link>
            </div>
          </div>
        </div>

        {/* ORDERS */}
        <div>
          <button
            onClick={() => toggleDropdown("orders")}
            className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl ${
              isPathActive([
                "/orders/list-orders",
                "/orders/pending",
                "/orders/completed",
              ])
                ? "bg-[#FF6B00] text-white shadow-md"
                : "text-gray-600 hover:bg-orange-50 hover:text-[#FF6B00]"
            }`}
          >
            <div className="flex items-center gap-3">
              <ClipboardList size={20} />
              {open && <span className="font-medium">Orders</span>}
            </div>

            {open && (
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === "orders" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all ${
              openDropdown === "orders" ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="ml-8 mt-1 flex flex-col gap-1 pb-2">
              <Link
                to="/orders/list-orders"
                className={`p-2.5 text-sm ${
                  isActive("/orders/list-orders")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600"
                }`}
              >
                List Orders
              </Link>

              <Link
                to="/orders/pending"
                className={`p-2.5 text-sm ${
                  isActive("/orders/pending")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600"
                }`}
              >
                Pending Orders
              </Link>

              <Link
                to="/orders/completed"
                className={`p-2.5 text-sm ${
                  isActive("/orders/completed")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600"
                }`}
              >
                Completed Orders
              </Link>
            </div>
          </div>
        </div>

        {/* USERS */}
        <div>
          <button
            onClick={() => toggleDropdown("users")}
            className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl ${
              isPathActive([
                "/users/list-users",
                "/users/pending",
              ])
                ? "bg-[#FF6B00] text-white shadow-md"
                : "text-gray-600 hover:bg-orange-50 hover:text-[#FF6B00]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Users size={20} />
              {open && <span className="font-medium">Customers</span>}
            </div>

            {open && (
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === "users" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all ${
              openDropdown === "users" ? "max-h-32" : "max-h-0"
            }`}
          >
            <div className="ml-8 mt-1 flex flex-col gap-1 pb-2">
              <Link
                to="/users/list-users"
                className={`p-2.5 text-sm ${
                  isActive("/users/list-users")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600"
                }`}
              >
                All Users
              </Link>

              <Link
                to="/users/pending"
                className={`p-2.5 text-sm ${
                  isActive("/users/pending")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600"
                }`}
              >
                Pending Requests
              </Link>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div>
          <button
            onClick={() => toggleDropdown("categories")}
            className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl ${
              isPathActive([
                "/categories/list-categories",
                "/categories/add-category",
              ])
                ? "bg-[#FF6B00] text-white shadow-md"
                : "text-gray-600 hover:bg-orange-50 hover:text-[#FF6B00]"
            }`}
          >
            <div className="flex items-center gap-3">
              <ListOrdered size={20} />
              {open && <span className="font-medium">Categories</span>}
            </div>

            {open && (
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === "categories" ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all ${
              openDropdown === "categories" ? "max-h-32" : "max-h-0"
            }`}
          >
            <div className="ml-8 mt-1 flex flex-col gap-1 pb-2">
              <Link
                to="/categories/list-categories"
                className={`p-2.5 text-sm ${
                  isActive("/categories/list-categories")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600"
                }`}
              >
                List Categories
              </Link>

              <Link
                to="/categories/add-category"
                className={`p-2.5 text-sm ${
                  isActive("/categories/add-category")
                    ? "text-[#FF6B00] font-medium"
                    : "text-gray-600"
                }`}
              >
                Create Category
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};