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
      status: "Published",
    },
    {
      id: 2,
      title: "How to Raise Healthy Chickens",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500",
      date: "22 Jul 2026",
      status: "Draft",
    },
    {
      id: 3,
      title: "Best Feed for Broiler Chickens",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500",
      date: "20 Jul 2026",
      status: "Published",
    },
    {
      id: 4,
      title: "Poultry Farm Management Guide",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500",
      date: "18 Jul 2026",
      status: "Draft",
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
    <div className="w-full sm:p-5 sm:pl-6 p-4 sm:text-[15px] text-sm">

      {/* Search */}
      <div className="relative mb-6 sm:mt-4 mt-1">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search Blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-[#c3c4c7] rounded-lg pl-11 pr-4 py-3 focus:outline-none bg-white text-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden border border-b-0 border-[#c3c4c7]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#fff] text-left border-b border-[#c3c4c7] text-[#2c3338]">
                <th className="py-2 px-4 font-normal">Image</th>
                <th className="py-2 px-4 font-normal">Title</th>
                <th className="py-2 px-4 font-normal">Date</th>
                <th className="py-2 px-4 font-normal">Status</th>
                <th className="py-2 px-4 font-normal text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-b border-gray-300 hover:bg-slate-50 transition bg-[#f6f7f7] text-[#50575e]"
                  >
                    <td className="px-5 py-3">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-16 h-10 rounded object-cover"
                      />
                    </td>

                    <td className="px-5 py-3 font-medium">
                      {blog.title}
                    </td>

                    <td className="px-5 py-3 text-gray-600">
                      {blog.date}
                    </td>

                    <td className="px-5 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${blog.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {blog.status}
                      </span>
                    </td>

                    <td className="px-5 py-3">
                      <div className="flex justify-end gap-3 text-[15px]">
                        <button
                          onClick={() => handleEdit(blog.id)}
                          className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 cursor-pointer"
                        >
                          <FiEdit />
                        </button>

                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 cursor-pointer"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}