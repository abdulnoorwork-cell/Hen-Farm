import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bird,
  CheckCircle2,
  Egg,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sprout,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import aboutImage from "../assets/about.jpg";

const About = () => {
  const values = [
    {
      icon: HeartPulse,
      title: "Bird Health",
      description:
        "We prioritize proper care, nutrition, hygiene, and healthy living conditions for every bird.",
    },
    {
      icon: ShieldCheck,
      title: "Quality First",
      description:
        "From farm operations to production, we maintain consistent standards focused on quality.",
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description:
        "We believe responsible farming should support productivity while respecting our environment.",
    },
    {
      icon: Users,
      title: "Trusted Partnership",
      description:
        "We work closely with our customers to provide practical and dependable farming solutions.",
    },
  ];

  const stats = [
    {
      value: "10+",
      label: "Years Experience",
    },
    {
      value: "50K+",
      label: "Healthy Birds",
    },
    {
      value: "98%",
      label: "Quality Focus",
    },
    {
      value: "24/7",
      label: "Farm Care",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Healthy Environment",
      description:
        "We maintain clean, controlled, and comfortable environments designed around bird wellbeing.",
    },
    {
      number: "02",
      title: "Balanced Nutrition",
      description:
        "Carefully managed nutrition helps support healthy development and consistent productivity.",
    },
    {
      number: "03",
      title: "Daily Monitoring",
      description:
        "Our team continuously monitors birds, facilities, hygiene, and overall farm conditions.",
    },
    {
      number: "04",
      title: "Quality Production",
      description:
        "Every stage is managed with attention to quality, consistency, and responsible farming.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#061109] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex items-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="GreenNest poultry farm"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061109]/95 via-[#061109]/75 to-[#061109]/30" />

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061109] to-transparent" />
        </div>

        {/* Glow */}
        <div className="absolute left-[-150px] top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative z-10 w-full container mx-auto px-5 md:px-8 lg:px-12 pt-32 sm:pt-34 pb-16 sm:pb-20 2xl:pb-22">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              About GreenNest
            </div>

            <h1 className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none tracking-[-0.035em]">
              Farming With
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Purpose.
              </span>
              <span className="block">
                Growing With Care.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base sm:leading-7 text-gray-300 sm:text-lg lg:text-xl">
              We are a modern poultry farming team committed to healthier
              birds, responsible farming practices, and better productivity
              for the future.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                onClick={() => scrollTo(0, 0)}
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
              >
                Talk To Our Team

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-gray-200 backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                Our Story

                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative border-y border-white/[0.06] bg-[#07140B]">

        <div className="container mx-auto px-5 py-4 md:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="border-r border-white/[0.06] px-5 py-8 first:border-l sm:px-8 lg:py-10"
            >
              <p className="text-4xl font-extrabold sm:text-5xl block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                {stat.value}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section
        id="story"
        className="relative py-16 sm:py-20 2xl:py-22"
      >

        <div className="absolute left-[-180px] top-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.05] blur-[140px]" />

        <div className="relative z-10 grid items-center lg:grid-cols-2 2xl:gap-20 gap-14 container mx-auto px-5 py-4 md:px-8 lg:px-12">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10">
              <img
                src={aboutImage}
                alt="Our poultry farm"
                className="sm:h-[500px] w-full h-[420px] object-cover 2xl:h-[550px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061109]/80 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-white/10 bg-[#0a170e]/90 p-5 shadow-2xl backdrop-blur-xl sm:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Bird size={21} />
                </div>

                <div>
                  <p className="text-xl font-black">
                    Better
                  </p>

                  <p className="text-xs text-gray-400">
                    Every single day
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Our Story
            </div>

            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
              Built On Care.
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Driven By Growth.
              </span>
            </h2>

            <p className="mt-6 text-base sm:leading-7 text-gray-400">
              GreenNest was built around a simple idea: poultry farming can
              be productive, responsible, and deeply focused on animal care
              at the same time.
            </p>

            <p className="mt-4 text-base sm:leading-7 text-gray-400">
              Our team combines practical farming experience with modern
              management techniques to create healthier environments,
              improve productivity, and deliver consistent quality.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Healthy and carefully managed birds",
                "Responsible and sustainable farming",
                "Consistent quality standards",
                "Long-term relationships with customers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="relative bg-[#07140B] py-16 sm:py-20 2xl:py-22">

        <div className="container mx-auto px-5 py-4 md:px-8 lg:px-12">

          <div className="max-w-7xl mx-auto grid gap-5 md:grid-cols-2">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl transition duration-500 group-hover:bg-emerald-400/15" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                  <Target size={26} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Our Mission
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Raising Standards In Poultry Farming.
                </h3>

                <p className="mt-5 text-sm sm:leading-7 text-gray-400 sm:text-base">
                  Our mission is to provide reliable poultry solutions by
                  combining responsible farming, quality management, modern
                  practices, and genuine care for animal wellbeing.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-300">
                  <Sprout size={26} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
                  Our Vision
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  A Smarter Future For Farming.
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  We envision a future where modern technology, sustainable
                  practices, and responsible animal care work together to
                  create stronger and more efficient farms.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="relative py-16 sm:py-20 2xl:py-22">

        <div className="container mx-auto px-5 py-4 md:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              What We Believe
            </div>

            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
              Our Core
              <span className="text-emerald-400">
                {" "}Values.
              </span>
            </h2>

            <p className="mt-5 text-gray-400">
              The principles that guide every decision we make on the farm.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20 hover:bg-emerald-400/[0.035]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FARMING PROCESS
      ===================================================== */}

      <section className="relative bg-[#07140B] py-16 sm:py-20 2xl:py-22">

        <div className="container mx-auto px-5 py-4 md:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Our Approach
              </div>

              <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
                How We Create
                <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                  Better Results.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base sm:leading-7 text-gray-400">
                Every part of our farming process is designed around
                consistency, care, efficiency, and long-term productivity.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Egg size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Quality From Start To Finish
                  </p>

                  <p className="text-xs text-gray-600">
                    Carefully managed farming
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process */}
            <div className="space-y-3">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.035] sm:p-6"
                >
                  <span className="text-sm font-black text-emerald-400/50 transition-colors group-hover:text-emerald-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative px-5 sm:px-8 lg:px-12 py-16 sm:py-20 2xl:py-24 container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.12] via-white/[0.025] to-lime-400/[0.05] px-6 py-12 text-center sm:px-10 sm:py-16"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
              <Bird size={26} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s Build A Better
              <span className="text-emerald-400">
                {" "}Farming Future.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              Whether you are looking for poultry solutions, farming guidance,
              or a trusted partner, our team is ready to help.
            </p>

            <Link
              to="/contact"
              onClick={() => scrollTo(0, 0)}
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 mt-7"
            >
              Get In Touch

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default About;