import React, { useContext, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Search,
} from "lucide-react";
import { AppContext } from "../context/AppContext";
import BlogCard from "../components/BlogCard";

export const blogs = [
  {
    id: 1,
    title: "Modern Poultry Farming: A Complete Guide To Better Productivity",
    category: "Poultry Farming",
    created_at: "2026-08-25",
    image: {
      url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Discover modern poultry farming techniques that improve bird health, productivity, and overall farm profitability through better management practices."
  },

  {
    id: 2,
    title: "How To Maintain Healthy Poultry Birds Throughout The Year",
    category: "Bird Health",
    created_at: "2026-08-22",
    image: {
      url: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Learn essential health management strategies including vaccination, disease prevention, and daily care routines for stronger poultry flocks."
  },

  {
    id: 3,
    title: "Poultry Nutrition And Feed Management Best Practices",
    category: "Nutrition",
    created_at: "2026-08-18",
    image: {
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Proper nutrition is key to poultry success. Explore feed management techniques that maximize growth, egg production, and bird performance."
  },

  {
    id: 4,
    title: "The Importance Of Biosecurity In Poultry Farms",
    category: "Farm Safety",
    created_at: "2026-08-15",
    image: {
      url: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Understand how effective biosecurity measures protect your poultry farm from diseases and improve long-term sustainability."
  },

  {
    id: 5,
    title: "Egg Production Tips For Higher Quality And Better Yield",
    category: "Egg Production",
    created_at: "2026-08-10",
    image: {
      url: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Improve egg quality and production efficiency with proven management strategies used by successful poultry farms."
  },

  {
    id: 6,
    title: "Sustainable Poultry Farming Practices For Future Growth",
    category: "Sustainability",
    created_at: "2026-08-05",
    image: {
      url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Explore environmentally responsible poultry farming methods that enhance productivity while reducing waste and resource consumption."
  },

  {
    id: 7,
    title: "Essential Equipment Every Poultry Farm Should Have",
    category: "Farm Equipment",
    created_at: "2026-07-30",
    image: {
      url: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "From feeders to ventilation systems, discover the equipment required to maintain efficient and productive poultry operations."
  },

  {
    id: 8,
    title: "Common Poultry Diseases And How To Prevent Them",
    category: "Disease Prevention",
    created_at: "2026-07-25",
    image: {
      url: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Learn about common poultry diseases, their symptoms, and preventive measures to protect your flock and maintain productivity."
  },

  {
    id: 9,
    title: "Choosing The Right Poultry Breed For Your Farm",
    category: "Poultry Breeds",
    created_at: "2026-07-20",
    image: {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=90",
    },
    description:
      "Selecting the right breed is crucial for success. Compare popular poultry breeds for meat production, egg laying, and dual-purpose farming."
  }
];

const Blogs = () => {
  // const { blogs } = useContext(AppContext)
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Poultry Farming",
    "Bird Health",
    "Nutrition",
    "Sustainability",
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        blog.title.toLowerCase().includes(searchText)

      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, search]);

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