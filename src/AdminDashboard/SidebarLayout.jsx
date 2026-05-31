import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";


export const AdminLayout = () => {
  return (
    <div className="flex">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>

    </div>
  );
};