import React, { useState } from "react";
import {
    FiSearch,
    FiEdit,
    FiTrash2,
    FiPlus,
} from "react-icons/fi";

const Products = () => {
    const [search, setSearch] = useState("");

    const products = [
        {
            id: 1,
            name: "Black & White Swap Sneakers",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
            category: "Footwear",
            price: 4999,
            stock: 24,
        },
        {
            id: 2,
            name: "One Degree Interlock Tee",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
            category: "T-Shirts",
            price: 2499,
            stock: 16,
        },
        {
            id: 3,
            name: "Cropped Jacket For Women",
            image:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
            category: "Jackets",
            price: 6999,
            stock: 8,
        },
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-5">

                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <p className="text-slate-500 text-sm">
                        Total Products
                    </p>
                    <h3 className="text-3xl font-bold mt-2">
                        128
                    </h3>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <p className="text-slate-500 text-sm">
                        Categories
                    </p>
                    <h3 className="text-3xl font-bold text-blue-600 mt-2">
                        12
                    </h3>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <p className="text-slate-500 text-sm">
                        In Stock
                    </p>
                    <h3 className="text-3xl font-bold text-green-600 mt-2">
                        102
                    </h3>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <p className="text-slate-500 text-sm">
                        Out of Stock
                    </p>
                    <h3 className="text-3xl font-bold text-red-600 mt-2">
                        26
                    </h3>
                </div>

            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5">

                <div className="relative">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

            </div>

            {/* Product Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">

                                <th className="px-6 py-4 text-left">
                                    Product
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Category
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Price
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Stock
                                </th>

                                <th className="px-6 py-4 text-right">
                                    Actions
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            {filteredProducts.map((product) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-slate-100 hover:bg-slate-50 transition"
                                >

                                    <td className="px-6 py-4">

                                        <div className="flex items-center gap-4">

                                            <img
                                                src={product.image}
                                                alt=""
                                                className="w-16 h-16 rounded-xl object-cover"
                                            />

                                            <div>
                                                <h3 className="font-semibold text-slate-900">
                                                    {product.name}
                                                </h3>

                                                <p className="text-sm text-slate-500">
                                                    Product Item
                                                </p>
                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-6 py-4">

                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                                            {product.category}
                                        </span>

                                    </td>

                                    <td className="px-6 py-4 font-semibold">
                                        Rs. {product.price.toLocaleString()}
                                    </td>

                                    <td className="px-6 py-4">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${product.stock > 10
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {product.stock} Items
                                        </span>

                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-end gap-2">

                                            <button className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center">
                                                <FiEdit />
                                            </button>

                                            <button className="w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center">
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
};

export default Products;