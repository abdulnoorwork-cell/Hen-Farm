import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";

import {
  LogOut,
  Bell,
  Search,
  Home,
} from "lucide-react";

import blank_profile from "../../assets/blank-profile.png";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex bg-[#f0f0f0] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">

          {/* Left */}
          <div>
            {/* Search */}
            <div className="hidden lg:flex items-center gap-3 bg-slate-100 px-4 py-3.5 rounded-xl h-full">
              <Search size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-52 h-full"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Notifications */}
            <button className="relative h-11 w-11 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Home */}
            <button
              onClick={() => navigate("/")}
              className="h-11 w-11 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
            >
              <Home size={18} />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <img
                src={blank_profile}
                alt=""
                className="w-11 h-11 rounded-full border object-cover"
              />

              <div className="hidden md:block">
                <h4 className="font-semibold text-sm text-slate-900">
                  Abdul Noor
                </h4>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={logout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-xl font-medium transition"
            >
              <LogOut size={18} />
              <span className="hidden lg:block">
                Logout
              </span>
            </button>

          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;