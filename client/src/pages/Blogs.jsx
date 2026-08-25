import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Search,
  Sprout,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Poultry Farming",
    "Bird Health",
    "Nutrition",
    "Sustainability",
  ];

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
    {
      id: 4,
      title: "Simple Ways to Make Your Poultry Farm More Sustainable",
      excerpt:
        "Explore responsible farming practices that can improve efficiency while reducing unnecessary resource waste.",
      category: "Sustainability",
      date: "Aug 06, 2026",
      readTime: "5 min read",
      author: "Sustainability Team",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 5,
      title: "Why Farm Hygiene Should Be Your Top Priority",
      excerpt:
        "A clean and controlled farm environment helps reduce risks and supports better overall poultry performance.",
      category: "Bird Health",
      date: "Jul 30, 2026",
      readTime: "4 min read",
      author: "Farm Care Team",
      image:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 6,
      title: "Daily Poultry Farm Management Checklist",
      excerpt:
        "Use this practical checklist to keep track of important daily tasks and maintain smooth farm operations.",
      category: "Poultry Farming",
      date: "Jul 26, 2026",
      readTime: "6 min read",
      author: "GreenNest Team",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 7,
      title: "The Role of Clean Water in Poultry Production",
      excerpt:
        "Clean and accessible drinking water is one of the simplest but most important parts of poultry management.",
      category: "Nutrition",
      date: "Jul 21, 2026",
      readTime: "4 min read",
      author: "Farm Care Team",
      image:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 8,
      title: "Building a More Efficient Poultry Operation",
      excerpt:
        "Small improvements in planning, monitoring, and resource management can lead to better farm efficiency.",
      category: "Sustainability",
      date: "Jul 16, 2026",
      readTime: "6 min read",
      author: "GreenNest Team",
      image:
        "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        blog.title.toLowerCase().includes(searchText) ||
        blog.excerpt.toLowerCase().includes(searchText) ||
        blog.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch && !blog.featured;
    });
  }, [activeCategory, search]);

  return (
    <main className="overflow-hidden bg-[#061109] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pt-32 sm:pt-34 pb-16 sm:pb-20 2xl:pb-22">

        <div className="absolute inset-0 bg-gradient-to-br from-[#07170C] via-[#061109] to-[#091A0D]" />

        <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="absolute right-[-160px] bottom-[-100px] h-96 w-96 rounded-full bg-lime-400/[0.07] blur-[130px]" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061109] to-transparent" />

        <div className="relative z-10 container mx-auto px-5 text-center md:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Our Blog
            </div>

            <h1 className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none tracking-[-0.035em]">
              Ideas For A
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Better Farm.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base sm:leading-7 text-gray-400 sm:text-lg">
              Explore practical poultry farming knowledge, bird care tips,
              nutrition advice, and sustainable farming ideas.
            </p>

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BLOGS
      ===================================================== */}

      <section className="relative py-16 sm:py-20 2xl:py-24 border-t border-white/[0.06]">

        <div className="absolute left-[-180px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.04] blur-[140px]" />

        <div className="relative z-10 px-5 md:px-8 lg:px-12 container mx-auto">

          {/* Header */}

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Latest Articles
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Fresh From The
                <span className="text-emerald-400">
                  {" "}Farm.
                </span>
              </h2>

            </motion.div>

            {/* Search */}

            <div className="relative w-full lg:max-w-xs">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-emerald-400/30 focus:ring-2 focus:ring-emerald-400/10"
              />

            </div>

          </div>

          {/* Categories */}

          <div className="mt-9 flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${activeCategory === category
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-white/[0.08] bg-white/[0.02] text-gray-500 hover:border-emerald-400/20 hover:text-gray-300"
                  }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Blog Grid */}

          {filteredBlogs.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {filteredBlogs.map((blog, index) => (
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

        </div>
      </section>

    </main>
  );
};

export default Blogs;