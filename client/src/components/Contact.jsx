import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Add your API request here
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07130B] text-white py-16 sm:py-20 2xl:py-22"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-[-180px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.06] blur-[140px]" />

      <div className="absolute right-[-180px] bottom-1/4 h-96 w-96 rounded-full bg-lime-400/[0.05] blur-[140px]" />

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

      <div className="relative z-10 py-4 container mx-auto px-5 md:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Get In Touch
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.1em] tracking-[-0.035em] sm:text-5xl 2xl:text-6xl">
            Let&apos;s Talk About
            <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
              Your Farm.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:leading-7 text-gray-400 sm:text-lg">
            Have a question, need farming advice, or looking for reliable
            poultry solutions? Our team is ready to help.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= CONTACT INFO ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            {/* Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Contact Information
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                We&apos;d love to hear from you.
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                Reach out to our team and let&apos;s discuss how we can support
                your poultry farming goals.
              </p>

              {/* Contact items */}
              <div className="mt-8 space-y-3">

                {/* Location */}
                <div className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-300">
                      Haripur, Khyber Pakhtunkhwa, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:+923000000000"
                  className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-300 transition-colors group-hover:text-emerald-400">
                      +92 300 0000000
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@greennest.com"
                  className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Email Us
                    </p>

                    <p className="mt-1 break-all text-sm font-medium text-gray-300 transition-colors group-hover:text-emerald-400">
                      info@greennest.com
                    </p>
                  </div>
                </a>

                {/* Working hours */}
                <div className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Working Hours
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-300">
                      Mon - Sat · 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust */}
              <div className="mt-7 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.05] p-4">
                <div className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="max-sm:text-sm font-semibold text-white">
                      Reliable Farming Support
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Our team is committed to providing practical and
                      professional support for your farming needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTACT FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Send a Message
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                How can we help?
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-1 focus:ring-emerald-400/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-1 focus:ring-emerald-400/20"
                  />
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-1 focus:ring-emerald-400/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-medium text-gray-400"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#0a170e] px-4 py-3.5 text-sm text-gray-300 outline-none transition-all focus:border-emerald-400/40 focus:ring-1 focus:ring-emerald-400/20"
                  >
                    <option value="">Select a service</option>
                    <option value="Poultry Farming">
                      Poultry Farming
                    </option>
                    <option value="Bird Health & Care">
                      Bird Health & Care
                    </option>
                    <option value="Feed Management">
                      Feed Management
                    </option>
                    <option value="Egg Production">
                      Egg Production
                    </option>
                    <option value="Sustainable Farming">
                      Sustainable Farming
                    </option>
                    <option value="Quality Control">
                      Quality Control
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-gray-400"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your requirements..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-1 focus:ring-emerald-400/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-emerald-500/30"
              >
                Send Message

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-[11px] text-gray-600">
                We&apos;ll get back to you as soon as possible.
              </p>
            </form>
          </motion.div>
        </div>

        {/* ================= MAP / LOCATION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025]"
        >
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#0a170e]">

            {/* Decorative circles */}
            <div className="absolute h-72 w-72 rounded-full border border-emerald-400/10" />
            <div className="absolute h-48 w-48 rounded-full border border-emerald-400/10" />
            <div className="absolute h-24 w-24 rounded-full border border-emerald-400/15" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Location */}
            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-xl shadow-emerald-500/30">
                <MapPin size={25} />
              </div>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold">
                GreenNest Poultry Farm
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Haripur, Khyber Pakhtunkhwa, Pakistan
              </p>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Get Directions

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;