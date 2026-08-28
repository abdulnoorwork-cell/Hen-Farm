import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Egg,
  Filter,
  Leaf,
  Search,
  ShoppingBasket,
  Star,
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Fresh Eggs",
    "Poultry",
    "Feed",
    "Farm Products",
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Farm Eggs",
      category: "Fresh Eggs",
      price: "Rs. 450",
      unit: "Dozen",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=1000&q=85",
      description:
        "Fresh, carefully collected farm eggs with excellent quality and natural nutrition.",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Premium Brown Eggs",
      category: "Fresh Eggs",
      price: "Rs. 520",
      unit: "Dozen",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1569288052389-dac9b01c9c98?auto=format&fit=crop&w=1000&q=85",
      description:
        "Premium quality brown eggs sourced from healthy and well-managed poultry.",
      badge: "Premium",
    },
    {
      id: 3,
      name: "Healthy Broiler Chicken",
      category: "Poultry",
      price: "Rs. 850",
      unit: "Per Kg",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1000&q=85",
      description:
        "Fresh farm-raised poultry produced under carefully managed farming conditions.",
      badge: "Fresh",
    },
    {
      id: 4,
      name: "Layer Poultry",
      category: "Poultry",
      price: "Rs. 1,850",
      unit: "Per Bird",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=85",
      description:
        "Healthy layer birds raised with careful nutrition and responsible farm practices.",
      badge: "Available",
    },
    {
      id: 5,
      name: "Premium Poultry Feed",
      category: "Feed",
      price: "Rs. 3,200",
      unit: "50 Kg",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1605339940396-4a9b2f1a5c0f?auto=format&fit=crop&w=1000&q=85",
      description:
        "Nutritionally balanced feed designed to support healthy poultry development.",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Layer Feed",
      category: "Feed",
      price: "Rs. 3,400",
      unit: "50 Kg",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
      description:
        "Specially managed feed for supporting healthy layers and consistent egg production.",
      badge: "Quality",
    },
    {
      id: 7,
      name: "Organic Farm Fertilizer",
      category: "Farm Products",
      price: "Rs. 1,500",
      unit: "25 Kg",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=85",
      description:
        "Farm-based organic fertilizer suitable for improving soil quality and supporting crops.",
      badge: "Eco",
    },
    {
      id: 8,
      name: "Fresh Farm Manure",
      category: "Farm Products",
      price: "Rs. 900",
      unit: "Bag",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1592982537447-6f1a9f2a1f95?auto=format&fit=crop&w=1000&q=85",
      description:
        "Naturally sourced farm manure suitable for responsible agricultural use.",
      badge: "Natural",
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchValue = search.toLowerCase().trim();

      const searchMatch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue);

      return categoryMatch && searchMatch;
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
              Our Products
            </div>

            <h1 className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none tracking-[-0.035em]">
              Fresh From
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Our Farm.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base sm:leading-7 text-gray-400 sm:text-lg">
              Explore our range of fresh poultry, quality eggs, nutritious
              feed, and responsible farm products.
            </p>

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY / SEARCH
      ===================================================== */}

      <section className="border-y border-white/[0.06] bg-[#07140B]">

        <div className="container mx-auto flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between px-5 md:px-8 lg:px-12">

          {/* Categories */}

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">

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

          {/* Search */}

          <div className="relative w-full lg:max-w-xs">

            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-emerald-400/30 focus:ring-2 focus:ring-emerald-400/10"
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="relative py-16 sm:py-20 2xl:py-22">

        <div className="absolute left-[-180px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.04] blur-[140px]" />

        <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-12">

          <div className="mb-10 flex items-end justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Farm Collection
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Products
              </h2>
            </div>

            <div className="hidden items-center gap-2 text-xs text-gray-600 sm:flex">
              <Filter size={14} />
              {filteredProducts.length} Products
            </div>

          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product.id}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                >
                  <ProductCard key={product.id} product={product} />
                </motion.article>
              ))}

            </div>
          ) : (
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] py-20 text-center">

              <ShoppingBasket
                size={35}
                className="mx-auto text-gray-700"
              />

              <h3 className="mt-4 text-xl font-bold">
                No Products Found
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Try another category or search term.
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

      {/* =====================================================
          QUALITY SECTION
      ===================================================== */}

      <section className="relative bg-[#07140B] py-16 sm:py-20 2xl:py-22">

        <div className="container mx-auto py-4 grid items-center gap-14 lg:grid-cols-2 lg:gap-20 px-5 md:px-8 lg:px-12">

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <Leaf size={14} />
              Farm Quality
            </div>

            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
              Quality Starts
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                At The Farm.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base sm:leading-7 text-gray-400">
              Every product we offer comes from carefully managed farming
              practices focused on quality, freshness, animal care, and
              responsible production.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Fresh farm products",
                "Quality-focused production",
                "Responsible farming",
                "Carefully managed operations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <Leaf
                    size={17}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm text-gray-400">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          {/* Visual */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-emerald-400/[0.08] to-transparent p-7 sm:p-9">

              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">

                  <Egg
                    size={25}
                    className="text-emerald-400"
                  />

                  <p className="mt-5 text-xl sm:text-2xl font-extrabold">
                    Fresh
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Farm products
                  </p>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">

                  <Wheat
                    size={25}
                    className="text-emerald-400"
                  />

                  <p className="mt-5 text-xl sm:text-2xl font-extrabold">
                    Quality
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Carefully managed
                  </p>

                </div>

                <div className="col-span-2 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-6">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                        Our Promise
                      </p>

                      <p className="mt-2 text-lg font-bold leading-tight">
                        From Our Farm To You
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                      <Leaf size={21} />
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 md:px-8 lg:px-12 py-16 sm:py-20 2xl:py-24 container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.12] via-white/[0.025] to-lime-400/[0.05] px-6 py-12 text-center sm:px-10 sm:py-16"
        >

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
              <ShoppingBasket size={26} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl font-extrabold tracking-tight text-4xl lg:text-5xl leading-tight">
              Looking For Something
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                {" "}Specific?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              Contact our team for product availability, bulk orders, pricing,
              and more information about our farm products.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                onClick={() => scrollTo(0, 0)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
              >
                Contact Us

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                onClick={() => scrollTo(0, 0)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                Learn About Us

                <ArrowRight size={17} />
              </Link>

            </div>

          </div>
        </motion.div>

      </section>

    </main>
  );
};

export default Products;