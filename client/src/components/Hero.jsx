import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Egg,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import hero_image from "../assets/hero.avif";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#061109] text-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src={hero_image}
          alt="Modern poultry farm"
          className="h-full w-full object-cover object-center"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Main cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041008] via-[#07150b]/90 to-[#07150b]/30" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#061109] to-transparent" />

        {/* Soft green glow */}
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-lime-400/10 blur-[140px]" />
      </div>

      {/* ================= DECORATIVE GRID ================= */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen items-center sm:py-34 py-30 container mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 w-full items-center gap-10 xl:gap-14 md:grid-cols-[1.15fr_0.85fr]">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              Trusted Poultry Farming Solutions

              <Sparkles size={14} className="text-emerald-300" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none tracking-[-0.035em]"
            >
              Growing Better.
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Farming Smarter.
              </span>
            </motion.h1>


            {/* Accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 75 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="mt-7 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg lg:text-xl"
            >
              Modern poultry farming solutions designed to support healthier
              birds, stronger productivity, and sustainable farm growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary */}
              <Link
                to="/contact"
                onClick={() => scrollTo(0, 0)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[0_10px_35px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-[0_15px_45px_rgba(16,185,129,0.35)]"
              >
                Get a Free Quote

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary */}
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/10"
              >
                Explore Our Farm

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-x-7 gap-y-3"
            >
              {[
                "Quality Focused",
                "Sustainable Farming",
                "Trusted Solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <CheckCircle2
                    size={17}
                    className="text-emerald-400"
                  />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="relative max-md:mt-4">

              {/* Glow behind card */}
              <div className="absolute -inset-6 rounded-[40px] bg-emerald-400/10 blur-3xl" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-black/30 p-6 shadow-2xl backdrop-blur-2xl">

                {/* Top line */}
                <div className="mb-7 flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Farm Excellence
                    </div>

                    <h2 className="sm:text-3xl text-2xl font-bold tracking-tight">
                      Built for Better
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Smart farming. Better results.
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                    <Egg size={24} />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <p className="sm:text-3xl text-2xl font-black text-emerald-400">
                      100%
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                      Quality Focus
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <p className="sm:text-3xl text-2xl font-black text-emerald-400">
                      24/7
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                      Farm Care
                    </p>
                  </div>
                </div>

                {/* Feature */}
                <div className="mt-3 flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.06] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Healthy Farming
                    </p>

                    <p className="mt-0.5 text-xs leading-5 text-gray-400">
                      Focused on long-term productivity and responsible
                      farming practices.
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-gray-400">
                      Farm Performance
                    </span>

                    <span className="font-semibold text-emerald-400">
                      Excellent
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{
                        delay: 1.2,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-300"
                    />
                  </div>
                </div>
              </div>

              {/* Floating mini badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-8 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1a10]/90 px-4 py-3 shadow-xl backdrop-blur-xl xl:flex"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Trusted Quality
                  </p>

                  <p className="text-[10px] text-gray-500">
                    Every step of the way
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
          Scroll to explore
        </span>

        <motion.div
          animate={{ height: [18, 30, 18] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-px bg-gradient-to-b from-emerald-400 to-transparent"
        />
      </motion.div>

      {/* Bottom green line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
    </section>
  );
};

export default Hero;