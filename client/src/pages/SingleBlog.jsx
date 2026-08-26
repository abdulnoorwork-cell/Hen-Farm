import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  CalendarDays,
  Search,
  Tag,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogCard from '../components/BlogCard'

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const { id } = useParams();
  const { backendUrl, blogs } = useContext(AppContext)
  const fetchBog = async () => {
    try {
      let response = await axios.get(`${backendUrl}/api/blog/${id}`, { withCredentials: true });
      if (response.data) {
        setBlog(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchRelatedBlogs = async () => {
    try {
      let response = await axios.get(`${backendUrl}/api/blog/related-blogs/${blog.category}`, { withCredentials: true })
      console.log(response.data)
      if (response.data) {
        setRelatedBlogs(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBog();
  }, [id])

  useEffect(() => {
    if (blog.category) {
      fetchRelatedBlogs()
    }
  }, [blog.category])

  const cleanHTML = blog?.description
    ?.replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, "")
    ?.replace(/color:[^;"]+;?/gi, "");

  return (
    <main className="bg-[#061109] text-white overflow-hidden">

      {/* Hero */}

      <section className="relative h-[80vh] min-h-[600px]">

        <img
          src={blog.image?.url}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#061109]" />

        <div className="relative z-10 flex h-full items-center justify-center text-center pb-20 container mx-auto px-5 md:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              <Tag size={14} />
              {blog.category}
            </div>

            <h1 className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none tracking-[-0.035em]">
              {blog.title}
            </h1>

            <div className="flex items-center gap-2 text-gray-500 justify-center mt-8">
              <CalendarDays size={16} />
              {new Date(blog.created_at).toLocaleString()}
            </div>

          </motion.div>

        </div>

      </section>

      {/* Article */}

      <section className="py-16 sm:py-20 2xl:py-24 container mx-auto">

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

          {/* Featured Image */}

          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 overflow-hidden rounded-xl border border-white/10"
          >

            <img
              src={blog.image?.url}
              alt={blog.title}
              className="h-[300px] w-full object-cover sm:h-[500px]"
            />

          </motion.div> */}

          <p className="mt-6 text-gray-400 leading-7 space-y-4 text-[15px]" dangerouslySetInnerHTML={{ __html: cleanHTML }}>
          </p>
        </div>

      </section>

      {/* Related Blogs */}

      <section className="pb-16 sm:pb-20 2xl:pb-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Continue Reading
            </p>

            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold leading-[1.1em] tracking-[-0.035em] mt-4">
              Related Articles
            </h2>

          </div>

          {/* ================= BLOG GRID ================= */}

          <div className="relative z-10">

            {/* Blog Grid */}

            {relatedBlogs.length > 0 ? (
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {relatedBlogs.map((blog, index) => (
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

          </div>

        </div>

      </section>

    </main>
  );
};

export default SingleBlog;