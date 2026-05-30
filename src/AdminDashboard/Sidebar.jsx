import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  Users,
  ListOrdered,
  Image,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Products", path: "/admin/products", icon: ShoppingBag },
    { name: "Orders", path: "/admin/orders", icon: ClipboardList },
    { name: "Customers", path: "/admin/users", icon: Users },
    { name: "Categories", path: "/admin/categories", icon: ListOrdered },
    { name: "Banners", path: "/admin/banners", icon: Image },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

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
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MENU */}
      <div className="mt-6 flex flex-col gap-2 px-3">

        {menu.map((item, i) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={i}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all
                ${
                  active
                    ? "bg-[#FF6B00] text-white shadow-md"
                    : "text-gray-600 hover:bg-orange-50 hover:text-[#FF6B00]"
                }`}
            >
              <Icon size={20} />
              {open && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-5 w-full px-3">

        <button
          className={`flex items-center gap-3 w-full p-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all`}
        >
          <LogOut size={20} />
          {open && <span className="font-medium">Logout</span>}
        </button>

      </div>
    </div>
  );
};