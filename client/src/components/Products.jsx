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
import ProductCard from "./ProductCard";

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");

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

            return categoryMatch;
        });
    }, [activeCategory]);

    return (
        <section className="overflow-hidden bg-[#061109] text-white">

            {/* =====================================================
          PRODUCTS
      ===================================================== */}

            <section className="relative py-16 sm:py-20 2xl:py-22">

                <div className="absolute left-[-180px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.04] blur-[140px]" />

                <div className="relative z-10 container mx-auto px-5 py-4 md:px-8 lg:px-12">

                    <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between max-md:gap-6">

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                                Farm Collection
                            </p>

                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Our Products
                            </h2>
                        </div>

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

        </section>
    );
};

export default Products;