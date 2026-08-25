import React from "react";
import {
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
  FiPackage,
  FiArrowUpRight,
  FiArrowDownRight,
  FiPlus,
  FiList,
  FiEdit3,
  FiMoreVertical,
} from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "Rs. 284,500",
      change: "+12.5%",
      positive: true,
      icon: <FiDollarSign />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+8.2%",
      positive: true,
      icon: <FiShoppingBag />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Total Products",
      value: "356",
      change: "+5.4%",
      positive: true,
      icon: <FiPackage />,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Customers",
      value: "2,845",
      change: "-2.4%",
      positive: false,
      icon: <FiUsers />,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1024",
      customer: "Abdul Noor",
      product: "Premium Cotton T-Shirt",
      amount: "Rs. 4,500",
      status: "Completed",
    },
    {
      id: "#ORD-1023",
      customer: "Ali Khan",
      product: "Running Sneakers",
      amount: "Rs. 8,200",
      status: "Processing",
    },
    {
      id: "#ORD-1022",
      customer: "Hamza Ahmed",
      product: "Gym Training Jacket",
      amount: "Rs. 6,800",
      status: "Completed",
    },
    {
      id: "#ORD-1021",
      customer: "Usman Shah",
      product: "Relaxed Fit Trousers",
      amount: "Rs. 5,200",
      status: "Pending",
    },
    {
      id: "#ORD-1020",
      customer: "Saad Khan",
      product: "Sports Running Shoes",
      amount: "Rs. 9,500",
      status: "Completed",
    },
  ];

  const topProducts = [
    {
      name: "One Degree Interlock Tee",
      category: "Men",
      sales: "124 sold",
      price: "Rs. 3,499",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
    },
    {
      name: "Harbor Sneakers",
      category: "Footwear",
      sales: "98 sold",
      price: "Rs. 8,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
    },
    {
      name: "Cropped Jacket",
      category: "Women",
      sales: "86 sold",
      price: "Rs. 6,499",
      image:
        "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=200",
    },
    {
      name: "Yoga Pants",
      category: "Activewear",
      sales: "72 sold",
      price: "Rs. 4,299",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9f7e0b0a0d0?w=200",
    },
  ];

  return (
    <div className="w-full">

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-5
                transition
              "
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-2">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-lg
                    ${stat.iconBg}
                    ${stat.iconColor}
                  `}
              >
                {stat.icon}
              </div>

            </div>

            <div className="flex items-center gap-2 mt-4">

              <span
                className={`
                    flex
                    items-center
                    gap-1
                    text-xs
                    font-semibold
                    px-2
                    py-1
                    rounded-lg
                    ${stat.positive
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-600"
                  }
                  `}
              >
                {stat.positive ? (
                  <FiArrowUpRight />
                ) : (
                  <FiArrowDownRight />
                )}

                {stat.change}
              </span>

              <span className="text-xs text-slate-400">
                vs last month
              </span>

            </div>

          </div>
        ))}

      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid xl:grid-cols-[1fr_380px] gap-6 mb-6">

        {/* SALES OVERVIEW */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

            <div>
              <h2 className="font-semibold text-slate-900 text-lg">
                Sales Overview
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Revenue performance over the last 7 months
              </p>
            </div>

            <select
              className="
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  outline-none
                  text-slate-600
                "
            >
              <option>Last 7 months</option>
              <option>Last 30 days</option>
              <option>Last 12 months</option>
            </select>

          </div>

          {/* Chart */}
          <div className="h-[280px] flex items-end gap-3 sm:gap-6 border-b border-slate-100 px-2">

            {[
              ["Jan", 42],
              ["Feb", 58],
              ["Mar", 48],
              ["Apr", 75],
              ["May", 63],
              ["Jun", 88],
              ["Jul", 96],
            ].map(([month, height], index) => (
              <div
                key={index}
                className="flex-1 h-full flex flex-col justify-end items-center gap-3"
              >

                <div className="w-full flex justify-center">
                  <div
                    style={{ height: `${height * 2}px` }}
                    className="
                        w-7
                        sm:w-10
                        max-h-[230px]
                        rounded-t-lg
                        bg-blue-600
                        hover:bg-blue-700
                        transition
                        cursor-pointer
                      "
                  />
                </div>

                <span className="text-xs text-slate-400">
                  {month}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white">

          <h2 className="text-lg font-semibold">
            Quick Actions
          </h2>

          <p className="text-sm text-slate-400 mt-1 mb-6">
            Manage your store quickly.
          </p>

          <div className="space-y-3">

            <button className="
                w-full
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                bg-white/5
                hover:bg-white/10
                border
                border-white/10
                transition
                text-left
              ">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <FiPlus />
              </div>

              <div>
                <p className="text-sm font-medium">
                  Add Product
                </p>

                <p className="text-xs text-slate-500">
                  Create a new product
                </p>
              </div>

              <FiArrowUpRight className="ml-auto text-slate-500" />
            </button>

            <button className="
                w-full
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                bg-white/5
                hover:bg-white/10
                border
                border-white/10
                transition
                text-left
              ">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <FiEdit3 />
              </div>

              <div>
                <p className="text-sm font-medium">
                  Add Blog Post
                </p>

                <p className="text-xs text-slate-500">
                  Publish new content
                </p>
              </div>

              <FiArrowUpRight className="ml-auto text-slate-500" />
            </button>

            <button className="
                w-full
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                bg-white/5
                hover:bg-white/10
                border
                border-white/10
                transition
                text-left
              ">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <FiShoppingBag />
              </div>

              <div>
                <p className="text-sm font-medium">
                  View Orders
                </p>

                <p className="text-xs text-slate-500">
                  Manage customer orders
                </p>
              </div>

              <FiArrowUpRight className="ml-auto text-slate-500" />
            </button>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM GRID ================= */}
      <div className="grid xl:grid-cols-[1fr_420px] gap-6">

        {/* RECENT ORDERS */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

          <div className="flex items-center justify-between p-6 border-b border-slate-100">

            <div>
              <h2 className="font-semibold text-slate-900 text-lg">
                Recent Orders
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Latest customer orders
              </p>
            </div>

            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View all
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead>
                <tr className="bg-slate-50 text-left">

                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Order
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Customer
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Product
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Amount
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody>

                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-t border-slate-100 hover:bg-slate-50 transition"
                  >

                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                      {order.id}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {order.product}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                      {order.amount}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`
                            px-3
                            py-1.5
                            rounded-full
                            text-xs
                            font-medium
                            ${order.status === "Completed"
                            ? "bg-emerald-50 text-emerald-600"
                            : order.status === "Processing"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-amber-50 text-amber-600"
                          }
                          `}
                      >
                        {order.status}
                      </span>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* TOP PRODUCTS */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

          <div className="flex items-center justify-between p-6 border-b border-slate-100">

            <div>
              <h2 className="font-semibold text-slate-900 text-lg">
                Top Products
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Best selling products
              </p>
            </div>

            <FiMoreVertical className="text-slate-400" />

          </div>

          <div className="p-4">

            {topProducts.map((product, index) => (
              <div
                key={index}
                className="
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-xl
                    hover:bg-slate-50
                    transition
                  "
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                      w-14
                      h-14
                      rounded-xl
                      object-cover
                      bg-slate-100
                    "
                />

                <div className="flex-1 min-w-0">

                  <h3 className="text-sm font-semibold text-slate-800 truncate">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    {product.category} • {product.sales}
                  </p>

                  <p className="text-sm font-semibold text-slate-700 mt-1">
                    {product.price}
                  </p>

                </div>

                <span className="
                    w-7
                    h-7
                    rounded-lg
                    bg-slate-100
                    text-xs
                    font-semibold
                    text-slate-500
                    flex
                    items-center
                    justify-center
                  ">
                  {index + 1}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;