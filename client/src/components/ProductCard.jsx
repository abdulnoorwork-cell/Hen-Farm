import React from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowUpRight,
    Star,
} from "lucide-react";

const ProductCard = ({product}) => {
    return (
        <div className="group overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20 hover:shadow-2xl hover:shadow-emerald-950/30">
            {/* Image */}

            <div className="relative aspect-square overflow-hidden bg-[#0b190f]">

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge */}

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-xl">
                    {product.badge}
                </span>

                {/* Quick button */}

                <Link
                    // to={`/products/${product.id}`}
                    onClick={() => scrollTo(0, 0)}
                    className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-emerald-500 text-white opacity-0 shadow-lg shadow-emerald-500/20 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-emerald-400"
                >
                    <ArrowUpRight size={18} />
                </Link>

            </div>

            {/* Content */}

            <div className="p-5">

                <div className="flex items-center justify-between">

                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600">
                        {product.category}
                    </span>

                    <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Star
                            size={13}
                            fill="currentColor"
                            className="text-amber-400"
                        />
                        {product.rating}
                    </span>

                </div>

                <h3 className="mt-3 text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-emerald-300">
                    {product.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600">
                    {product.description}
                </p>

                <div className="mt-5 flex items-end justify-between border-t border-white/[0.06] pt-5">

                    <div>
                        <p className="text-xl font-black text-emerald-400">
                            {product.price}
                        </p>

                        <p className="mt-0.5 text-[10px] text-gray-600">
                            {product.unit}
                        </p>
                    </div>

                    <Link
                        // to={`/products/${product.id}`}
                        onClick={() => scrollTo(0, 0)}
                        className="group/details flex items-center gap-1.5 text-xs font-semibold text-gray-400 transition-colors hover:text-emerald-400"
                    >
                        View Details

                        <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover/details:translate-x-1"
                        />
                    </Link>

                </div>

            </div>

            <div className="h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-lime-300 transition-all duration-500 group-hover:w-full" />
        </div>
    )
}

export default ProductCard