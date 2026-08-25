import React from "react";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    PlusCircle,
    FileText,
    PenSquare,
} from "lucide-react";

const Sidebar = () => {
    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Add Product",
            path: "/dashboard/add-product",
            icon: PlusCircle,
        },
        {
            name: "Products",
            path: "/dashboard/products",
            icon: Package,
        },
        {
            name: "Add Post",
            path: "/dashboard/add-post",
            icon: PenSquare,
        },
        {
            name: "Post List",
            path: "/dashboard/posts",
            icon: FileText,
        },
    ];

    return (
        <aside className="h-screen w-[260px] bg-white border-r border-gray-200 flex flex-col">

            {/* Logo */}
            <div className="flex flex-col justify-center border-b border-gray-100 p-6">
                <h2 className="text-3xl font-extrabold tracking-tight">
                    Dashboard
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                    Welcome back, Abdul Noor 👋
                </p>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-4 py-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-4">
                    Main Menu
                </p>

                <div className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end
                                className={({ isActive }) =>
                                    `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`
                                }
                            >
                                <Icon size={20} />

                                <span className="font-medium text-sm">
                                    {item.name}
                                </span>
                            </NavLink>
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-4">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                        A
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm">
                            Abdul Noor
                        </h4>
                        <p className="text-xs text-gray-500">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;