import React, { useContext } from 'react'
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const BlogCard = ({ blog }) => {
    const {navigate} = useContext(AppContext)
    return (
        <article
            className="group overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20"
        >

            {/* Image */}

            <Link
                to={`/blogs/${blog.id}`}
                onClick={() => scrollTo(0, 0)}
                className="relative block aspect-[16/10] overflow-hidden"
            >

                <img
                    src={blog.image?.url}
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

                <div className="flex items-center gap-3 text-xs text-gray-500">

                    <span className="flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {new Date(blog.created_at).toDateString()}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-gray-700" />

                    {/* <span className="flex items-center gap-1.5">
                        <Clock3 size={13} />
                        {blog.readTime}
                      </span> */}

                </div>

                <h3
                 onClick={() => {navigate(`/blogs/${blog.id}`);scrollTo(0, 0)}}
                 className="mt-4 cursor-pointer line-clamp-2 text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-emerald-300">
                    {blog.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500" dangerouslySetInnerHTML={{
                    __html: blog?.description
                        ?.replace(
                            /style="[^"]*color:[^";]+;?[^"]*"/gi,
                            ""
                        )
                        ?.replace(/color:[^;"]+;?/gi, "")
                }}>
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">

                    <Link
                        to={`/blogs/${blog.id}`}
                        onClick={() => scrollTo(0, 0)}
                        className="group/read flex items-center gap-1.5 text-[13px] font-semibold text-emerald-400"
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

        </article>
    )
}

export default BlogCard