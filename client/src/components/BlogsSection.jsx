import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Search,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Modern Poultry Farming: A Practical Guide for Better Productivity",
    excerpt:
      "Discover practical strategies for creating a healthier, more productive, and efficiently managed poultry farm.",
    category: "Poultry Farming",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    author: "GreenNest Team",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 2,
    title: "How to Maintain a Healthy Environment for Poultry",
    excerpt:
      "Farm hygiene, ventilation, temperature, and daily monitoring can make a major difference in bird health.",
    category: "Bird Health",
    date: "Aug 14, 2026",
    readTime: "5 min read",
    author: "Farm Care Team",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Understanding Poultry Nutrition and Feed Management",
    excerpt:
      "Learn why balanced nutrition and proper feed management are essential for healthy bird development.",
    category: "Nutrition",
    date: "Aug 10, 2026",
    readTime: "7 min read",
    author: "GreenNest Team",
    image:
      "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=1000&q=85",
  },
];

const Blogs = () => {

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

          {blogs.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {blogs.map((blog, index) => (
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
                  className="group overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20"
                >

                  {/* Image */}

                  <Link
                    to={`/blogs/${blog.id}`}
                    onClick={() => scrollTo(0, 0)}
                    className="relative block aspect-[16/10] overflow-hidden"
                  >

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-xl">
                      {blog.category}
                    </span>

                  </Link>

                  {/* Content */}

                  <div className="p-6">

                    <div className="flex items-center gap-3 text-[11px] text-gray-600">

                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {blog.date}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-700" />

                      <span className="flex items-center gap-1.5">
                        <Clock3 size={13} />
                        {blog.readTime}
                      </span>

                    </div>

                    <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-emerald-300">
                      {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {blog.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">

                      <span className="text-xs text-gray-600">
                        By {blog.author}
                      </span>

                      <Link
                        to={`/blogs/${blog.id}`}
                        onClick={() => scrollTo(0, 0)}
                        className="group/read flex items-center gap-1.5 text-xs font-semibold text-emerald-400"
                      >
                        Read More

                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover/read:translate-x-1"
                        />
                      </Link>

                    </div>

                  </div>

                  <div className="h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-lime-300 transition-all duration-500 group-hover:w-full" />

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

              <p className="mt-2 text-sm text-gray-600">
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