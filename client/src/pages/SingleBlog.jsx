import React from "react";
import { motion } from "motion/react";
import {
  CalendarDays,
  Clock3,
  User,
  ArrowLeft,
  ArrowRight,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  const blog = {
    title: "Modern Poultry Farming: A Complete Guide",
    category: "Poultry Farming",
    author: "GreenNest Team",
    date: "24 Aug 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1600&q=90",
  };

  const relatedBlogs = [
    {
      id: 1,
      title: "Healthy Poultry Management",
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 2,
      title: "Farm Feed Optimization",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 3,
      title: "Sustainable Farming Practices",
      image:
        "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  return (
    <main className="bg-[#061109] text-white">

      {/* Hero */}
      <section className="relative">

        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-10">

          <div className="max-w-4xl">

            <Link
              to="/blogs"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              <ArrowLeft size={16} />
              Back To Blogs
            </Link>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              <Tag size={14} />
              {blog.category}
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              {blog.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <User size={16} />
                {blog.author}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                {blog.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                {blog.readTime}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Content */}
      <section className="py-20">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          {/* Featured Image */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 overflow-hidden rounded-[32px] border border-white/10"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[300px] w-full object-cover sm:h-[450px] lg:h-[550px]"
            />
          </motion.div>

          {/* Article */}

          <article className="prose prose-invert max-w-none">

            <p className="text-lg leading-8 text-gray-300">
              Poultry farming has become one of the most profitable and
              essential agricultural sectors. Modern poultry operations
              focus on bird health, nutrition, efficiency, and
              sustainability.
            </p>

            <h2>Why Modern Poultry Farming Matters</h2>

            <p>
              Modern poultry farming combines technology, nutrition,
              and management practices to improve productivity while
              maintaining high standards of welfare and quality.
            </p>

            <blockquote>
              Healthy birds are the foundation of a successful poultry farm.
            </blockquote>

            <h2>Key Success Factors</h2>

            <ul>
              <li>Balanced nutrition</li>
              <li>Clean water systems</li>
              <li>Proper ventilation</li>
              <li>Biosecurity measures</li>
              <li>Regular health monitoring</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=90"
              alt=""
              className="rounded-3xl"
            />

            <h2>Sustainable Farming Practices</h2>

            <p>
              Sustainability improves farm efficiency while reducing
              environmental impact. Waste management, water conservation,
              and responsible feeding practices contribute to long-term
              success.
            </p>

          </article>

          {/* Tags */}

          <div className="mt-12 border-t border-white/10 pt-10">

            <h3 className="mb-4 text-lg font-bold">
              Tags
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Poultry",
                "Egg Production",
                "Feed",
                "Farm Management",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

          {/* Author */}

          <div className="mt-12 rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="h-20 w-20 rounded-full object-cover"
              />

              <div>

                <h3 className="text-xl font-bold">
                  GreenNest Team
                </h3>

                <p className="mt-2 text-gray-400">
                  Sharing practical poultry farming knowledge,
                  sustainable practices, and industry insights.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Related Blogs */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Continue Reading
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              Related Articles
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {relatedBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
              >

                <div className="aspect-[16/10] overflow-hidden">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold group-hover:text-emerald-300">
                    {blog.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-emerald-400">
                    Read Article
                    <ArrowRight size={16} />
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default SingleBlog;