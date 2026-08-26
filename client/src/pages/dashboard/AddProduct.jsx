import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { LuPlus, LuUpload } from "react-icons/lu";
import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from '../../context/AppContext'

const AddProduct = () => {
    const { backendUrl, isAdmin, fetchProducts, navigate } = useContext(AppContext);
    const [error, setError] = useState('')
    const editorRef = useRef(null);
    const quillRef = useRef(null)

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(null);
    const [images, setImages] = useState([]);
    const [previewImage, setPreviewImage] = useState([])

    const file = useRef()

    const imagesHandler = async (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        const previewUrls = files.map(file => URL.createObjectURL(file))
        setPreviewImage(previewUrls)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
                reader.onload = error => reject(error);
            }
        })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const base64Images = [];

            for (const img of images) {
                const base64 = await convertBase64(img);
                base64Images.push(base64);
            }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('category', category);
            formData.append('price', price);
            formData.append('description', quillRef.current.root.innerHTML);
            base64Images.forEach((img) => {
                formData.append("images", img);
            })

            const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
                headers: {
                    Authorization: `${isAdmin}`
                },
                withCredentials: true
            })
            if (response.data) {
                toast.success(response.data.message);
                setLoading(false);
                setImages([]);
                setPreviewImage([]);
                setName('');
                setCategory('');
                setPrice('');
                quillRef.current.root.innerHTML = ''
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error)
            setError(error.response.data.message)
            if (error.response.status === 500) {
                localStorage.removeItem('token');
                window.location.href = "/dashboard"
                setError(error.response.data.message)
            }
        }
    }

    // initiate Quill only once
    useEffect(() => {
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
        }
    }, [])

    return (
        <form
            onSubmit={onSubmitHandler}
            className="max-w-7xl mx-auto"
        >

            {/* Main Layout */}
            <div className="grid lg:grid-cols-[1fr_340px] gap-6">

                {/* ================= LEFT CONTENT ================= */}
                <div className="space-y-6">

                    {/* Product Images */}
                    <section className="bg-white rounded-2xl border border-slate-200">
                        <div className="px-6 py-5 border-b border-slate-100">
                            <h2 className="text-base font-semibold text-slate-900">
                                Product Images
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Upload high-quality images of your product.
                            </p>
                        </div>

                        <div className="p-6">

                            {previewImage.length === 0 ? (
                                <div
                                    onClick={() => file.current.click()}
                                    className="
                    group
                    h-64
                    w-full
                    rounded-2xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-50
                    flex
                    flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    hover:border-blue-500
                    hover:bg-blue-50/40
                    transition-all
                    duration-300
                  "
                                >
                                    <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-white
                    border
                    border-slate-200
                    flex
                    items-center
                    justify-center
                    group-hover:scale-105
                    transition
                  ">
                                        <LuUpload
                                            size={28}
                                            className="text-slate-400 group-hover:text-blue-600 transition"
                                        />
                                    </div>

                                    <h3 className="font-semibold text-slate-700 mt-4">
                                        Upload product images
                                    </h3>

                                    <p className="text-sm text-slate-400 mt-1">
                                        Drag & drop or click to browse
                                    </p>

                                    <span className="text-xs text-slate-400 mt-3">
                                        PNG, JPG, JPEG, WEBP
                                    </span>
                                </div>
                            ) : (
                                <div className="space-y-4">

                                    {/* Preview Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                                        {previewImage.map((img, index) => (
                                            <div
                                                key={index}
                                                className="relative group aspect-square"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Product ${index + 1}`}
                                                    className="
                            w-full
                            h-full
                            object-cover
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-100
                          "
                                                />

                                                {/* Image Number */}
                                                <span className="
                          absolute
                          top-2
                          left-2
                          w-7
                          h-7
                          rounded-lg
                          bg-black/60
                          text-white
                          text-xs
                          flex
                          items-center
                          justify-center
                        ">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        ))}

                                        {/* Add More */}
                                        <button
                                            type="button"
                                            onClick={() => file.current.click()}
                                            className="
                        aspect-square
                        rounded-xl
                        border-2
                        border-dashed
                        border-slate-300
                        hover:border-blue-500
                        hover:bg-blue-50
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-slate-400
                        hover:text-blue-600
                        transition
                      "
                                        >
                                            <LuPlus size={24} />

                                            <span className="text-xs mt-2 font-medium">
                                                Add More
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            )}

                            <input
                                type="file"
                                ref={file}
                                multiple
                                accept="image/png,image/jpeg,image/jpg,image/webp"
                                onChange={imagesHandler}
                                hidden
                            />

                            {(error === "Please fill required fields" ||
                                error === "Invalid format (jpg, jpeg, png, webp only)") && (
                                    <p className="text-red-500 text-[13px] mt-3">
                                        {error}
                                    </p>
                                )}

                        </div>
                    </section>

                    {/* Product Information */}
                    <section className="bg-white rounded-2xl border border-slate-200">

                        <div className="px-6 py-5 border-b border-slate-100">
                            <h2 className="text-base font-semibold text-slate-900">
                                Product Information
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Add the basic information about your product.
                            </p>
                        </div>

                        <div className="p-6 space-y-6">

                            {/* Product Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Product Name
                                    <span className="text-red-500 ml-1">*</span>
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Premium Cotton T-Shirt"
                                    className="
                    w-full
                    h-12
                    px-4
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    text-sm
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                    placeholder:text-slate-400
                  "
                                />

                                {(error === "Please fill required fields" ||
                                    error === "Name must be between 8-120 characters") && (
                                        <p className="text-red-500 text-[13px] mt-2">
                                            {error}
                                        </p>
                                    )}
                            </div>

                            {/* Category + Price */}
                            <div className="grid md:grid-cols-2 gap-5">

                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Category
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>

                                    <select
                                        defaultValue={0}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="
                      w-full
                      h-12
                      px-4
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      text-sm
                      text-slate-700
                      outline-none
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/10
                    "
                                    >
                                        <option disabled value={0}>
                                            Select Category
                                        </option>

                                        <option value="Fresh Eggs">
                                            Fresh Eggs
                                        </option>

                                        <option value="Poultry">
                                            Poultry
                                        </option>

                                        <option value="Feed">
                                            Feed
                                        </option>

                                        <option value="Farm Products">
                                            Farm Products
                                        </option>
                                    </select>

                                    {error === "Please fill required fields" && (
                                        <p className="text-red-500 text-[13px] mt-2">
                                            {error}
                                        </p>
                                    )}
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Price
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>

                                    <div className="relative">
                                        <span className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-sm
                      font-medium
                      text-slate-400
                    ">
                                            Rs.
                                        </span>

                                        <input
                                            type="number"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="4999"
                                            className="
                        w-full
                        h-12
                        pl-12
                        pr-4
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        text-sm
                        outline-none
                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-500/10
                        placeholder:text-slate-400
                      "
                                        />
                                    </div>

                                    {(error === "Please fill required fields" ||
                                        error === "Price must be greater than 10" ||
                                        error === "Offer price must be less than price") && (
                                            <p className="text-red-500 text-[13px] mt-2">
                                                {error}
                                            </p>
                                        )}
                                </div>

                            </div>

                        </div>
                    </section>

                    {/* Description */}
                    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

                        <div className="px-6 py-5 border-b border-slate-100">
                            <h2 className="text-base font-semibold text-slate-900">
                                Product Description
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Describe your product, features and benefits.
                            </p>
                        </div>

                        <div className="p-6">

                            <div
                                ref={editorRef}
                                className="
                  bg-white
                  min-h-[250px]
                  max-h-[470px]
                  border
                  border-slate-300
                  rounded-xl
                  overflow-hidden
                  overflow-y-auto
                "
                            />

                            {(
                                error === "Please fill required fields" ||
                                error === "Description must be at least 500 characters"
                            ) && (
                                    <p className="text-red-500 text-[13px] mt-2">
                                        {error}
                                    </p>
                                )}

                        </div>

                    </section>

                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="space-y-6">

                    {/* Publish Card */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 sticky top-0">

                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h2 className="font-semibold text-slate-900">
                                    Publish Product
                                </h2>

                                <p className="text-xs text-slate-500 mt-1">
                                    Ready to add this product?
                                </p>
                            </div>

                            <div className="
                w-9
                h-9
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              ">
                                <LuPlus size={19} />
                            </div>
                        </div>

                        <div className="space-y-3 mb-5">

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">
                                    Images
                                </span>

                                <span className="font-semibold text-slate-700">
                                    {previewImage.length}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">
                                    Category
                                </span>

                                <span className="font-semibold text-slate-700">
                                    {category || "Not selected"}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">
                                    Price
                                </span>

                                <span className="font-semibold text-slate-700">
                                    {price ? `Rs. ${Number(price).toLocaleString()}` : "Not set"}
                                </span>
                            </div>

                        </div>

                        <div className="border-t border-slate-100 pt-5">

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                  w-full
                  h-12
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  disabled:bg-blue-400
                  disabled:cursor-not-allowed
                  text-white
                  font-semibold
                  text-sm
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-300
                  cursor-pointer
                "
                            >
                                <LuPlus size={18} />

                                {loading
                                    ? "Adding Product..."
                                    : "Add Product"}
                            </button>

                        </div>

                    </div>

                    {/* Product Tips */}
                    <div className="bg-slate-900 rounded-2xl p-5 text-white">

                        <h3 className="font-semibold">
                            Product Tips
                        </h3>

                        <div className="mt-4 space-y-3">

                            <div className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />

                                <p className="text-xs text-slate-300 leading-5">
                                    Use clear and high-quality product images.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />

                                <p className="text-xs text-slate-300 leading-5">
                                    Choose the most relevant product category.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />

                                <p className="text-xs text-slate-300 leading-5">
                                    Write a detailed description to help customers.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </form>
    );
};

export default AddProduct;