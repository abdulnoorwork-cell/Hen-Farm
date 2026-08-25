import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Bird,
  Egg,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      number: "01",
      icon: Bird,
      title: "Poultry Farming",
      description:
        "Professional poultry farming focused on healthy birds, efficient management, and consistent production.",
      tags: ["Farm Management", "Bird Care"],
      featured: true,
    },
    {
      number: "02",
      icon: HeartPulse,
      title: "Bird Health & Care",
      description:
        "Comprehensive daily care practices designed to maintain healthier birds and support better farm performance.",
      tags: ["Health Monitoring", "Daily Care"],
    },
    {
      number: "03",
      icon: Wheat,
      title: "Feed Management",
      description:
        "Balanced feeding strategies that support healthy growth, improved productivity, and efficient farm operations.",
      tags: ["Nutrition", "Feed Planning"],
    },
    {
      number: "04",
      icon: Egg,
      title: "Egg Production",
      description:
        "Quality-focused egg production with careful handling, monitoring, and responsible farming practices.",
      tags: ["Quality Control", "Production"],
    },
    {
      number: "05",
      icon: Leaf,
      title: "Sustainable Farming",
      description:
        "Responsible farming methods that help reduce waste, improve efficiency, and create a healthier environment.",
      tags: ["Eco Friendly", "Sustainability"],
    },
    {
      number: "06",
      icon: ShieldCheck,
      title: "Farm Quality Control",
      description:
        "Reliable farm processes and quality standards designed to maintain consistency throughout production.",
      tags: ["Quality Standards", "Monitoring"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07130B] text-white py-16 sm:py-20 2xl:py-22"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-[-150px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.06] blur-[140px]" />

      <div className="absolute right-[-150px] bottom-1/4 h-96 w-96 rounded-full bg-lime-400/[0.05] blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 container mx-auto px-5 py-4 md:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            What We Provide
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold leading-[1.1em] tracking-[-0.035em] sm:text-5xl 2xl:text-6xl">
            Complete Solutions for
            <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
              Better Poultry Farming.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:leading-7 text-gray-400 sm:text-lg">
            From daily bird care to sustainable farm management, we provide
            practical solutions designed to improve quality, productivity,
            and long-term farm performance.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-500 ${
                  service.featured
                    ? "border-emerald-400/25 bg-gradient-to-br from-emerald-400/[0.12] to-white/[0.025]"
                    : "border-white/[0.08] bg-white/[0.025] hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]"
                }`}
              >
                {/* Hover glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${
                      service.featured
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                        : "border-white/10 bg-white/[0.05] text-emerald-400 group-hover:border-emerald-400/20 group-hover:bg-emerald-400/10"
                    }`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  {/* Number */}
                  <span className="text-sm font-bold tracking-wider text-gray-600 transition-colors duration-300 group-hover:text-emerald-400/60">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-600 transition-colors duration-300 group-hover:text-gray-400">
                    Learn More
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10 group-hover:text-emerald-400">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* Bottom hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-lime-300 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;