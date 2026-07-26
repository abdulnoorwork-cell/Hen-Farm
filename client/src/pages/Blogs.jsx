import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import PageBanner from '../components/PageBanner'
import BlogCard from '../components/BlogCard'
import { useInView } from "react-intersection-observer";

const categories = [
  "Broiler Farming",
  "Layer Farming",
  "Poultry Feed",
  "Vaccination",
  "Health Care",
  "Farm Management",
];

const blogs = [
  {
    id: 1,
    title: "Best Feeding Practices For Healthy Broilers",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
    date: "July 15, 2026",
    author: "Admin",
  },
  {
    id: 2,
    title: "Prevent Common Poultry Diseases",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
    date: "July 12, 2026",
    author: "Admin",
  },
  {
    id: 3,
    title: "Modern Poultry Farm Management Guide",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    date: "July 10, 2026",
    author: "Admin",
  },
  {
    id: 4,
    title: "Essential Vaccination Schedule For Poultry",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    date: "July 08, 2026",
    author: "Admin",
  },
  {
    id: 5,
    title: "How To Improve Egg Production Naturally",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=80",
    date: "July 05, 2026",
    author: "Admin",
  },
  {
    id: 6,
    title: "Top Poultry Nutrition Tips For Farmers",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    date: "July 02, 2026",
    author: "Admin",
  },
];

const tags = [
  "Broilers",
  "Layers",
  "Vaccination",
  "Feed",
  "Nutrition",
  "Health",
  "Farm Management",
  "Poultry Business",
];

const Blogs = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div>
      {/* Hero */}

      <PageBanner page={'Our Blog'} title={'Poultry Farming'} bold={' Insights'} para={'Stay updated with expert poultry farming guides, nutrition tips, disease prevention strategies, and modern farm management practices.'} />

      {/* Featured Blog */}
      <section className="sm:pb-24 pb-20 pt-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:gap-10 sm:gap-6 gap-1 items-center bg-[#f8faf5] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="sm:p-10 p-8">
              <h6 className="bg-lime-600 w-fit text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured Article
              </h6>

              <h2 className="lg:text-4xl text-3xl font-bold mt-6">
                Complete Guide To Modern Poultry Farming
              </h2>

              <p className="text-slate-600 mt-5 leading-relaxed">
                Learn everything about successful poultry farming, healthy bird
                management, vaccination schedules, feeding strategies, and farm
                productivity improvement.
              </p>

              <button className="mt-8 bg-lime-600 hover:bg-lime-700 text-white px-8 py-3.5 cursor-pointer rounded-xl font-semibold transition max-sm:text-sm">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {/* <section className="sm:pb-24 pb-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[4px] text-lime-600 font-semibold">
              Categories
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Explore Topics
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#f8faf5] rounded-2xl p-6 text-center font-semibold hover:bg-lime-600 hover:text-white transition duration-300 cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Blogs Grid */}
      <section>
        <div className="container mx-auto px-5">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
              Our Articles
            </h6>

            <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
              Poultry Farming
              <span style={{ fontFamily: "Merriweather" }} className="text-lime-600"> Insights</span>
            </h2>

            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="w-16 h-[2px] bg-lime-600"></div>
              <div className="w-3 h-3 rounded-full bg-lime-600"></div>
              <div className="w-16 h-[2px] bg-lime-600"></div>
            </div>

            {/* <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
              We provide comprehensive poultry farming services focused on
              quality, animal welfare, and customer satisfaction.
              satisfaction.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} ref={ref} style={{ transitionDelay: `${blog.id * 120}ms` }} className={`box ${inView ? "show" : ""}`}>
                <BlogCard key={index} blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="sm:py-24 py-20 bg-white">
        <div className="container mx-auto px-5">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
              Popular Tags
            </h6>

            <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
              Trending Topics
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag, index) => (
              <h6
                key={index}
                className="px-6 py-3 rounded-full max-sm:text-sm bg-[#f8faf5] text-gray-600 hover:bg-lime-600 hover:text-white transition cursor-pointer"
              >
                {tag}
              </h6>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;