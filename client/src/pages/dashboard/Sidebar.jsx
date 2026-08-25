import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    PlusCircle,
    FileText,
    PenSquare,
    X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {

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

    // Prevent background scrolling when mobile sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* ================= MOBILE OVERLAY ================= */}

            <div
                onClick={() => setIsOpen(false)}
                className={`
                    fixed
                    inset-0
                    bg-black/40
                    backdrop-blur-[2px]
                    z-40
                    lg:hidden
                    transition-opacity
                    duration-300
                    ${
                        isOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }
                `}
            />

            {/* ================= SIDEBAR ================= */}

            <aside
                className={`
                    fixed
                    lg:sticky
                    top-0
                    left-0
                    z-50
                    h-screen
                    w-[250px]
                    sm:w-[260px]
                    lg:w-[240px]
                    bg-white
                    border-r
                    border-gray-200
                    flex
                    flex-col
                    shrink-0

                    transform
                    transition-transform
                    duration-300
                    ease-in-out

                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >

                {/* ================= LOGO ================= */}

                <div className="
                    relative
                    border-b
                    border-gray-100
                    px-5
                    py-6
                ">

                    {/* Mobile Close */}

                    <button
                        onClick={() => setIsOpen(false)}
                        className="
                            lg:hidden
                            absolute
                            right-4
                            top-5
                            w-9
                            h-9
                            rounded-lg
                            flex
                            items-center
                            justify-center
                            text-gray-500
                            hover:bg-gray-100
                            hover:text-gray-900
                            transition
                        "
                    >
                        <X size={20} />
                    </button>

                    {/* Brand */}

                    <div className="flex items-center gap-3">

                        <div className="
                            w-11
                            h-11
                            rounded-xl
                            bg-blue-600
                            text-white
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            shadow-blue-600/20
                        ">
                            <LayoutDashboard size={21} />
                        </div>

                        <div>

                            <h2 className="
                                text-lg
                                font-bold
                                tracking-tight
                                text-gray-900
                            ">
                                Dashboard
                            </h2>

                            <p className="
                                text-xs
                                text-gray-400
                                mt-0.5
                            ">
                                Admin Panel
                            </p>

                        </div>

                    </div>

                </div>


                {/* ================= NAVIGATION ================= */}

                <div className="
                    flex-1
                    overflow-y-auto
                    px-4
                    py-6
                ">

                    <p className="
                        text-xs
                        font-bold
                        text-gray-600
                        uppercase
                        tracking-[0.15em]
                        px-3
                        mb-3
                    ">
                        Main Menu
                    </p>


                    <div className="space-y-1.5">

                        {menuItems.map((item) => {

                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `
                                        group
                                        relative
                                        flex
                                        items-center
                                        gap-3
                                        px-3.5
                                        py-3
                                        rounded-xl
                                        transition-all
                                        duration-200

                                        ${
                                            isActive
                                                ? `
                                                    bg-blue-600
                                                    text-white
                                                    shadow-md
                                                    shadow-blue-600/20
                                                `
                                                : `
                                                    text-gray-700
                                                    hover:bg-gray-50
                                                    hover:text-gray-900
                                                `
                                        }
                                        `
                                    }
                                >

                                    <Icon
                                        size={19}
                                        strokeWidth={2}
                                        className="
                                            shrink-0
                                        "
                                    />

                                    <span className="
                                        font-medium
                                        text-sm
                                    ">
                                        {item.name}
                                    </span>

                                </NavLink>
                            );
                        })}

                    </div>

                </div>


                {/* ================= USER ================= */}

                <div className="
                    border-t
                    border-gray-100
                    p-4
                ">

                    <div className="
                        flex
                        items-center
                        gap-3
                        bg-gray-50
                        hover:bg-gray-100
                        rounded-xl
                        p-3
                        transition
                    ">

                        <div className="
                            w-10
                            h-10
                            shrink-0
                            rounded-full
                            bg-blue-600
                            flex
                            items-center
                            justify-center
                            text-white
                            font-semibold
                        ">
                            A
                        </div>

                        <div className="min-w-0">

                            <h4 className="
                                font-semibold
                                text-sm
                                text-gray-900
                                truncate
                            ">
                                Abdul Noor
                            </h4>

                            <p className="
                                text-xs
                                text-gray-500
                                mt-0.5
                            ">
                                Administrator
                            </p>

                        </div>

                    </div>

                </div>

            </aside>
        </>
    );
};

export default Sidebar;