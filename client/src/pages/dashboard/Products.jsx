import React, { useContext, useState } from "react";
import {
    FiSearch,
    FiEdit,
    FiTrash2,
    FiPlus,
} from "react-icons/fi";
import {toast} from 'react-hot-toast'
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const Products = () => {
    const { backendUrl, fetchProducts, products, loading } = useContext(AppContext);
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`${backendUrl}/api/product/delete/${id}`, {
                // headers: {
                //     Authorization: `${isAdmin}`
                // },
                withCredentials: true
            });
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchProducts();
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

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
                                                src={product.images?.[0]?.url}
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

                                            <button className="cursor-pointer w-10 h-10 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center">
                                                <FiEdit />
                                            </button>

                                            <button
                                                onClick={() => deleteProduct(product?.id)}
                                                className="cursor-pointer w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center">
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