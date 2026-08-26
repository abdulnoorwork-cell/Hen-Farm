import React, { useContext, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Search,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogCard from "./BlogCard";

const Blogs = () => {

  const { latestBlogs } = useContext(AppContext);
  
  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-[#061109] text-white py-16 sm:py-20 2xl:py-22"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-[-180px] top-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.06] blur-[140px]" />

      <div className="absolute right-[-150px] bottom-1/4 h-96 w-96 rounded-full bg-lime-400/[0.05] blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 container mx-auto px-5 py-4 md:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Farm Journal
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
              Insights for
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Better Farming.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-end">

            {/* View all */}
            <Link
              to="/blogs"
              onClick={() => scrollTo(0, 0)}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[0_10px_35px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-[0_15px_45px_rgba(16,185,129,0.35)] text-sm max-lg:hidden"
            >
              View All Articles

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </motion.div>

        {/* ================= BLOG GRID ================= */}

        <div className="relative z-10">

          {/* Blog Grid */}

          {latestBlogs.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {latestBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <BlogCard key={blog.id} blog={blog} />

                </motion.article>
              ))}

            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.025] py-20 text-center">

              <Search
                size={32}
                className="mx-auto text-gray-700"
              />

              <h3 className="mt-4 text-xl font-bold">
                No Articles Found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search term or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Clear Filters
              </button>

            </div>
          )}

          {/* View all */}
          <Link
            to="/blogs"
            onClick={() => scrollTo(0, 0)}
            className="group items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[0_10px_35px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-[0_15px_45px_rgba(16,185,129,0.35)] text-sm max-lg:inline-flex hidden mt-12"
          >
            View All Articles

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Blogs;