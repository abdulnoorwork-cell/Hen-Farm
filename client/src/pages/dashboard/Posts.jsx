import React, { useState } from "react";
import { FiEdit, FiTrash2, FiSearch, FiPlus } from "react-icons/fi";

export default function BlogList() {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      id: 1,
      title: "Benefits of Organic Poultry Farming",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500",
      date: "23 Jul 2026",
      category: "Published",
    },
    {
      id: 2,
      title: "How to Raise Healthy Chickens",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500",
      date: "22 Jul 2026",
      category: "Draft",
    },
    {
      id: 3,
      title: "Best Feed for Broiler Chickens",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500",
      date: "20 Jul 2026",
      category: "Published",
    },
    {
      id: 4,
      title: "Poultry Farm Management Guide",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500",
      date: "18 Jul 2026",
      category: "Draft",
    },
  ];

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
      <div className="bg-white rounded-2xl border border-slate-200 p-5">

        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Post
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Date
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {filteredBlogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-4">

                      <img
                        src={blog.image}
                        alt=""
                        className="w-20 h-14 rounded-xl object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {blog.title}
                        </h3>

                        <p className="text-sm text-slate-500">
                          Blog Article
                        </p>
                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {blog.date}
                  </td>

                  <td className="px-6 py-4">

                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                      {blog.category}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-2">

                      <button className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
                        <FiEdit />
                      </button>

                      <button className="w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition">
                        <FiTrash2 />
                      </button>

                    </div>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}