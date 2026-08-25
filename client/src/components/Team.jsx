import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  // Facebook,
  // Instagram,
  // Linkedin,
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmed Khan",
      role: "Farm Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
      description:
        "Leading our farm operations with a focus on quality, innovation, and sustainable growth.",
    },
    {
      name: "Sarah Williams",
      role: "Poultry Specialist",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
      description:
        "Focused on bird health, farm care, and maintaining high standards across our operations.",
    },
    {
      name: "James Wilson",
      role: "Farm Operations Manager",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
      description:
        "Managing daily operations and ensuring efficient, consistent, and reliable farm performance.",
    },
    {
      name: "Maria Anderson",
      role: "Quality & Sustainability",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
      description:
        "Driving responsible farming practices and maintaining our commitment to quality.",
    },
  ];

  const socials = [
    // {
    //   icon: Linkedin,
    //   label: "LinkedIn",
    // },
    // {
    //   icon: Instagram,
    //   label: "Instagram",
    // },
    // {
    //   icon: Facebook,
    //   label: "Facebook",
    // },
  ];

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#07130B] text-white py-16 sm:py-20 2xl:py-22"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-[-180px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.06] blur-[140px]" />

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
            Meet Our Team
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold leading-[1.1em] tracking-[-0.035em] sm:text-5xl 2xl:text-6xl">
            The People Behind
            <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
              Better Farming.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:leading-7 text-gray-400 sm:text-lg">
            Our experienced team works together every day to maintain healthy
            birds, reliable operations, and the highest standards of poultry
            farming.
          </p>
        </motion.div>

        {/* ================= TEAM GRID ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
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
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/20 hover:bg-emerald-400/[0.035]"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061109] via-[#061109]/10 to-transparent" />

                {/* Role badge */}
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-xl">
                  {member.role}
                </div>

                {/* Social icons */}
                <div className="absolute bottom-4 right-4 flex translate-y-3 gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {socials.map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`${member.name} ${label}`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-emerald-500 hover:text-white"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm font-medium text-emerald-400">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10 group-hover:text-emerald-400">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {member.description}
                </p>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-lime-300 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;