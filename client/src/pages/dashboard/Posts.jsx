import React, { useContext, useState } from "react";
import {
  FiEdit,
  FiTrash2,
  FiSearch,
  FiPlus,
  FiCalendar,
} from "react-icons/fi";
import { AppContext } from "../../context/AppContext";

export default function BlogList() {
  const [search, setSearch] = useState("");

  const { blogs, navigate } = useContext(AppContext);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (id) => {
    console.log("Edit Blog:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Blog:", id);
  };

  return (
    <div className="space-y-6">

      {/* Search */}
      <div className="bg-white sm:border sm:border-slate-200 rounded-2xl sm:p-5">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 pl-12 pr-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-sm"
          />
        </div>
      </div>

      {/* Blogs */}
      {filteredBlogs.length > 0 ? (
        <div className="grid gap-4">
          {filteredBlogs.reverse().map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row gap-5">
                {/* Image */}
                <img
                  src={blog.image?.url}
                  alt={blog.title}
                  className="w-full lg:w-56 h-40 object-cover rounded-xl"
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-3">
                    {blog.title}
                  </h3>

                  <p className="text-slate-500 line-clamp-2 text-sm" dangerouslySetInnerHTML={{
                    __html: blog?.description
                      ?.replace(
                        /style="[^"]*color:[^";]+;?[^"]*"/gi,
                        ""
                      )
                      ?.replace(/color:[^;"]+;?/gi, "")
                  }}>
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                    <FiCalendar />
                    {new Date(blog.created_at).toLocaleString()}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <button
                    onClick={() => handleEdit(blog.id)}
                    className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center"
                  >
                    <FiEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center"
                  >
                    <FiTrash2 />
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl">
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
            <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center mb-6">
              <FiPlus size={40} className="text-slate-400" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              No Blogs Found
            </h2>

            <p className="text-slate-500 mt-3 max-w-md">
              You haven't created any blog posts yet. Start writing your first
              article and grow your content library.
            </p>

            <button
              onClick={() => { navigate('/dashboard/add-post'); scrollTo(0, 0) }} className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition flex items-center gap-2">
              <FiPlus />
              Create First Blog
            </button>
          </div>
        </div>
      )}
    </div>
  );
}