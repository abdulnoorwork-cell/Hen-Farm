import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Egg,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border border-white/10 bg-[#07130B]/75 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <nav className="container mx-auto px-5 py-4 md:px-8 lg:px-12">

        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => {
              scrollTo(0, 0);
              setIsOpen(false);
            }}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
              <Egg size={22} strokeWidth={2.3} />

              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="leading-none">
              <p className="text-lg font-extrabold tracking-tight text-white leading-none">
                Green<span className="text-emerald-400">Nest</span>
              </p>

              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
                Poultry Farm
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => scrollTo(0, 0)}
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2 font-medium transition-all duration-200 text-[15px] ${
                    isActive
                      ? "text-emerald-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-emerald-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              onClick={() => scrollTo(0, 0)}
              className="group inline-flex items-center gap-2 rounded-xl text-sm bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
            >
              Get Started

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-3 border-t border-white/10 pt-3">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => {
                          scrollTo(0, 0);
                          setIsOpen(false);
                        }}
                        className={({ isActive }) =>
                          `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-emerald-400/10 text-emerald-400"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`
                        }
                      >
                        {item.name}

                        <ArrowUpRight size={15} />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  onClick={() => {
                    scrollTo(0, 0);
                    setIsOpen(false);
                  }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400"
                >
                  Get Started
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;