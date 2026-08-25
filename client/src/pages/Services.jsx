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
  Stethoscope,
  Wheat,
} from "lucide-react";
import { Link } from "react-router-dom";

// import servicesImage from "../assets/services.avif";

const stats = [
  {
    value: "6+",
    label: "Core Services",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "50K+",
    label: "Birds Managed",
  },
  {
    value: "24/7",
    label: "Farm Care",
  },
];

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

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We first understand your farm requirements, goals, challenges, and production needs.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Our team develops a practical approach based on your specific farming requirements.",
    },
    {
      number: "03",
      title: "Implement",
      description:
        "We put proven farming practices and management strategies into action.",
    },
    {
      number: "04",
      title: "Monitor",
      description:
        "Regular monitoring helps maintain quality, identify challenges, and improve performance.",
    },
  ];

  const benefits = [
    "Professional farm management",
    "Health-focused poultry practices",
    "Reliable quality standards",
    "Responsible farming methods",
    "Practical farming guidance",
    "Long-term productivity focus",
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
            src='/src/assets/about.jpg'
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

            <h1
              className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none tracking-[-0.035em]"
            >
              Complete
              <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 bg-clip-text text-transparent">
                Poultry Solutions.
              </span>
              <span className="block">
                Built For Growth.
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
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="relative py-16 sm:py-20 2xl:py-22"
      >

        <div className="absolute left-[-180px] top-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.05] blur-[140px]" />

        <div className="absolute right-[-150px] bottom-1/4 h-96 w-96 rounded-full bg-lime-400/[0.04] blur-[140px]" />

        <div className="relative z-10 container mx-auto py-4 px-5 md:px-8 lg:px-12">

          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              What We Offer
            </div>

            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
              Solutions Designed
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Around Your Farm.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base sm:leading-7 text-gray-400 sm:text-lg">
              Our services combine practical farming knowledge, careful
              management, and modern approaches to help poultry farms achieve
              better results.
            </p>

          </motion.div>

          {/* Service cards */}

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
                  className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-500 ${service.featured
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
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${service.featured
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                        : "border-white/10 bg-white/[0.05] text-emerald-400 group-hover:border-emerald-400/20 group-hover:bg-emerald-400/10"
                        }`}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    {/* Number */}
                    <span className="text-sm font-bold tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-emerald-400/60">
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
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
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

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="relative bg-[#07140B] py-16 sm:py-20 2xl:py-22">

        <div className="container mx-auto py-4 grid items-center gap-14 lg:grid-cols-2 lg:gap-20 px-5 md:px-8 lg:px-12">

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Why Choose Us
            </div>
            
            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
              More Than A Farm.
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                A Trusted Partner.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base sm:leading-7 text-gray-400">
              We focus on building reliable farming systems that combine
              animal care, productivity, quality, and responsible management.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm text-gray-400">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          {/* Visual */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-emerald-400/[0.08] to-transparent p-8 sm:p-10">

              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative">

                <div className="grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-5">
                    <Sprout
                      size={23}
                      className="text-emerald-400"
                    />

                    <p className="mt-5 sm:text-xl font-extrabold">
                      Sustainable
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Farming practices
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-5">
                    <HeartPulse
                      size={23}
                      className="text-emerald-400"
                    />

                    <p className="mt-5 sm:text-xl font-extrabold">
                      Healthy
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Bird focused care
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.05] p-6">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                        <ShieldCheck size={23} />
                      </div>

                      <div>
                        <p className="font-bold sm:text-lg">
                          Quality You Can Trust
                        </p>

                        <p className="mt-1 text-xs sm:text-sm leading-5 text-gray-500">
                          Consistent standards across every stage of our
                          farming operations.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative py-16 sm:py-20 2xl:py-22">

        <div className="container mx-auto py-4 px-5 md:px-8 lg:px-12 ">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Our Process
            </div>

            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
              Simple Process.
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Better Results.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Our approach keeps farming management clear, practical, and
              focused on continuous improvement.
            </p>

          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20"
              >

                <div className="flex items-center justify-between">

                  <span className="text-3xl font-black text-emerald-400/30 transition-colors group-hover:text-emerald-400">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
                  />

                </div>

                <h3 className="mt-7 sm:text-2xl text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 md:px-8 lg:px-12 pb-16 sm:pb-20 2xl:pb-24 container mx-auto">

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

            <h2 className="mx-auto mt-6 max-w-3xl font-extrabold tracking-tight text-4xl lg:text-5xl">
              Ready To Improve Your
              <span className="text-emerald-400">
                {" "}Farm?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              Talk to our team today and discover how our poultry farming
              services can support your goals.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                onClick={() => scrollTo(0, 0)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
              >
                Get In Touch

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                onClick={() => scrollTo(0, 0)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                Learn About Us

                <ArrowRight size={17} />
              </Link>

            </div>

          </div>
        </motion.div>

      </section>

    </main>
  );
};

export default Services;