import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Egg,
  Leaf,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

// import about_image from "../assets/about.avif";

const About = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      text: "We maintain high standards across every stage of poultry production.",
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      text: "Responsible farming practices designed for healthier birds and a better future.",
    },
    {
      icon: Target,
      title: "Better Productivity",
      text: "Smart farming methods focused on consistent performance and growth.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#061109] text-white py-16 sm:py-20 2xl:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-emerald-500/[0.06] blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-400/[0.05] blur-[140px]" />

      {/* Subtle grid */}
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

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            About Our Farm
          </div>

          <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
            Farming with
            <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
              Purpose & Care.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base sm:leading-7 text-gray-400">
            We combine responsible farming practices, modern techniques,
            and genuine care to create a healthier and more productive
            poultry environment.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2 2xl:gap-20">

          {/* ================= IMAGE SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30">
              <div className="relative overflow-hidden rounded-[26px]">
                <img
                  src="/src/assets/about.jpg"
                  alt="Poultry farming"
                  className="h-[450px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[550px] xl:h-[600px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061109]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute -bottom-7 left-5 max-w-[250px] rounded-2xl border border-white/10 bg-[#0b1a10]/90 p-4 shadow-2xl backdrop-blur-xl sm:left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Egg size={22} />
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-white">
                    15+
                  </p>

                  <p className="text-xs text-gray-400">
                    Years of Farming Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating green circle */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-5 hidden h-20 w-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 backdrop-blur-xl sm:flex"
            >
              <Leaf size={28} />
            </motion.div>
          </motion.div>

          {/* ================= CONTENT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small heading */}
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Who We Are
            </p>

            <h3 className="mt-3 font-extrabold leading-[1.1em] tracking-tight text-4xl sm:text-5xl">
              Building a healthier future for
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent"> poultry farming.</span>
            </h3>

            <p className="mt-5 text-sm sm:leading-7 text-gray-400">
              Our farm is built around a simple philosophy: healthier birds,
              responsible farming, and better results. We continuously improve
              our methods to create an efficient environment where quality
              comes first.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              From daily farm care to production management, every decision
              is made with long-term sustainability and productivity in mind.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.5,
                    }}
                    className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/about"
                onClick={() => scrollTo(0, 0)}
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
              >
                Discover Our Story

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2
                  size={17}
                  className="text-emerald-400"
                />

                Trusted Farming Practices
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="2xl:mt-24 sm:mt-20 mt-16 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ["15+", "Years Experience"],
            ["100%", "Quality Focus"],
            ["24/7", "Farm Care"],
            ["10K+", "Healthy Birds"],
          ].map(([number, label], index) => (
            <div
              key={label}
              className={`p-7 text-center ${
                index !== 3
                  ? "border-b border-white/10 sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <p className="text-3xl font-black text-emerald-400">
                {number}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;