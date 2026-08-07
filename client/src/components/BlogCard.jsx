import React from 'react'
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";

const BlogCard = ({blog}) => {
    
    return (
        <article
            key={blog.id}
            className={`overflow-hidden transition duration-300 group rounded-2xl bg-[#f7fbf1]`}
        >
            <div className="overflow-hidden">
                <img
                    src={blog.image.url}
                    alt={blog.title}
                    className="w-full 2xl:h-68 sm:h-64 h-60 object-cover transition duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-6">
                {/* <span className="inline-block bg-lime-100 text-lime-600 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                                        {blog.category}
                                    </span> */}

                <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                    <span className="flex items-center gap-2">
                        <FiCalendar />
                        {blog.date}
                    </span>

                    <span className="flex items-center gap-2">
                        <FiUser />
                        {blog.author}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-3 leading-snug group-hover:text-lime-600 transition line-clamp-2">
                    {blog.title}
                </h3>

                <p className="text-slate-600 mt-3 line-clamp-2">
                    Discover practical poultry farming tips and expert guidance
                    to improve your farm productivity.
                </p>

                <button className="mt-5 inline-flex items-center gap-2 bg-lime-600 px-6 py-3 text-white font-medium cursor-pointer transition hover:text-lime-900 rounded sm:text-sm text-xs">
                    Read More
                    <FiArrowRight />
                </button>
            </div>
        </article>
    )
}

export default BlogCard