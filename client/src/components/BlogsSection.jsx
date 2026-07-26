import React from "react";
import Button from "./Button";
import BlogCard from "./BlogCard";
import { Link } from 'react-router-dom'
import { useInView } from "react-intersection-observer";

const blogs = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
        title: "Best Feeding Practices For Healthy Broilers",
        date: "July 15, 2026",
        author: "Admin",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
        title: "Prevent Common Poultry Diseases",
        date: "July 12, 2026",
        author: "Admin",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?auto=format&fit=crop&w=1200&q=80",
        title: "Modern Poultry Farm Management Guide",
        date: "July 10, 2026",
        author: "Admin",
    },
    // {
    //     id: 4,
    //     image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
    //     title: "Best Feeding Practices For Healthy Broilers",
    //     date: "July 15, 2026",
    //     author: "Admin",
    // },
];

const Blogs = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section className="2xl:py-24 py-20">
            <div className="container mx-auto px-5">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
                        Latest Articles
                    </h6>

                    <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
                        Poultry Farming <span className="text-lime-600" style={{ fontFamily: "Merriweather" }}>Insights</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4 mt-5">
                        <div className="w-16 h-[2px] bg-lime-600"></div>
                        <div className="w-3 h-3 rounded-full bg-lime-600"></div>
                        <div className="w-16 h-[2px] bg-lime-600"></div>
                    </div>

                    <p className="text-slate-700 mt-6 max-w-xl mx-auto">
                        Stay updated with expert poultry care guides, industry
                        trends, and modern farm management tips.
                    </p>
                </div>

                {/* Blogs Layout */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} ref={ref} style={{ transitionDelay: `${blog.id * 120}ms` }} className={`box ${inView ? "show" : ""}`}>
                            <BlogCard key={index} blog={blog} />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <Link to={`/blogs`} onClick={() => scrollTo(0, 0)} className="text-center mt-16 flex justify-center">
                    <Button text={"View All Articles"} />
                </Link>
            </div>
        </section>
    );
};

export default Blogs;