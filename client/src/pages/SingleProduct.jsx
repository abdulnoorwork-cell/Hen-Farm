import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Leaf,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  const product = {
    id,
    name: "Fresh Farm Eggs",
    category: "Fresh Eggs",
    price: 450,
    unit: "Per Dozen",
    rating: 4.9,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=1400&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1569288052389-dac9b01c9c98?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=1400&q=90",
    ],
    description:
      "Fresh farm eggs collected daily from healthy poultry birds. Rich in protein, vitamins and essential nutrients.",
  };

  const [selectedImage, setSelectedImage] = useState(
    product.gallery[0]
  );

  const [quantity, setQuantity] = useState(1);

  const relatedProducts = [
    {
      id: 2,
      name: "Premium Brown Eggs",
      image:
        "https://images.unsplash.com/photo-1569288052389-dac9b01c9c98?auto=format&fit=crop&w=1000&q=90",
      price: 520,
    },
    {
      id: 3,
      name: "Layer Feed",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=90",
      price: 3400,
    },
    {
      id: 4,
      name: "Organic Fertilizer",
      image:
        "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=90",
      price: 1500,
    },
  ];

  return (
    <main className="bg-[#061109] text-white">

      {/* Product */}

      <section className="pt-32 sm:pt-38 pb-16 sm:pb-20 2xl:pb-22">

        <div className="mx-auto grid container gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-12">

          {/* Gallery */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <div className="overflow-hidden rounded-[32px] border border-white/10">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">

              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    selectedImage === image
                      ? "border-emerald-400"
                      : "border-white/10"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-28 w-full object-cover"
                  />
                </button>
              ))}

            </div>

          </motion.div>

          {/* Details */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              {product.category}
            </span>

            <h1 className="mt-5 text-4xl font-black sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-3">

              <div className="flex items-center gap-1 text-amber-400">
                <Star size={18} fill="currentColor" />
                {product.rating}
              </div>

              <span className="text-gray-500">
                ({product.reviews} Reviews)
              </span>

            </div>

            <div className="mt-6">

              <h2 className="text-4xl font-black text-emerald-400">
                Rs. {product.price.toLocaleString()}
              </h2>

              <p className="mt-1 text-gray-500">
                {product.unit}
              </p>

            </div>

            <p className="mt-8 leading-8 text-gray-400">
              {product.description}
            </p>

            {/* Quantity */}

            <div className="mt-8 flex items-center gap-5">

              <div className="flex items-center rounded-xl border border-white/10">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="p-3"
                >
                  <Minus size={18} />
                </button>

                <span className="w-12 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="p-3"
                >
                  <Plus size={18} />
                </button>

              </div>

              <button className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold transition-all hover:bg-emerald-400">
                Contact For Order
              </button>

            </div>

            {/* Features */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                {
                  icon: ShieldCheck,
                  title: "Quality Checked",
                },
                {
                  icon: Leaf,
                  title: "Farm Fresh",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                },
                {
                  icon: CheckCircle2,
                  title: "Healthy Product",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <item.icon
                    size={20}
                    className="text-emerald-400"
                  />

                  <span>{item.title}</span>
                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* Description */}

      <section className="border-y border-white/10 py-20">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <h2 className="text-3xl font-extrabold">
            Product Description
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Our fresh farm eggs are produced from healthy poultry
            birds raised under carefully managed farming conditions.
            Rich in nutrients and collected daily to ensure freshness
            and quality.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-bold">
                Product Type
              </h3>
              <p className="mt-2 text-gray-400">
                Fresh Farm Eggs
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-bold">
                Origin
              </h3>
              <p className="mt-2 text-gray-400">
                Poultry Farm
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Related Products */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              More Products
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              Related Products
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold group-hover:text-emerald-300">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-emerald-400 font-bold">
                    Rs. {product.price.toLocaleString()}
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default SingleProduct;