import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+92 300 1234567",
      description: "Mon - Sat, 9:00 AM - 6:00 PM",
      href: "tel:+923001234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@greennest.com",
      description: "We usually reply within 24 hours",
      href: "mailto:info@greennest.com",
    },
    {
      icon: MapPin,
      title: "Our Farm",
      value: "Haripur, Pakistan",
      description: "Visit us by appointment",
      href: "#location",
    },
  ];

  const faqs = [
    {
      question: "Do you provide poultry farming consultation?",
      answer:
        "Yes. Our team can help with practical poultry farming, management, health, and productivity guidance.",
    },
    {
      question: "Can I visit the farm?",
      answer:
        "Farm visits can be arranged by appointment. Please contact our team before planning your visit.",
    },
    {
      question: "How quickly will you respond?",
      answer:
        "We aim to respond to most inquiries within 24 hours during normal business hours.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#061109] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pt-32 sm:pt-34 pb-16 sm:pb-20 2xl:pb-22">

        <div className="absolute inset-0 bg-gradient-to-br from-[#07170C] via-[#061109] to-[#091A0D]" />

        <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="absolute right-[-160px] bottom-[-100px] h-96 w-96 rounded-full bg-lime-400/[0.07] blur-[130px]" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061109] to-transparent" />

        <div className="relative z-10 container mx-auto px-5 text-center md:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Get In Touch
            </div>

            <h1 className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-none tracking-[-0.035em]">
              Don&apos;t Hesitate
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                to Contact
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base sm:leading-7 text-gray-400 sm:text-lg">
              Have a question, need farming guidance, or want to learn more
              about our poultry solutions? Our team is ready to help.
            </p>

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="relative border-y border-white/[0.06] bg-[#07140B]">

        <div className="mx-auto grid container px-5 sm:grid-cols-2 lg:grid-cols-3">

          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group border-b border-white/[0.06] p-7 transition-all duration-300 hover:bg-emerald-400/[0.03] md:border-b-0 md:border-r md:p-9 md:last:border-r-0"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                      {item.title}
                    </p>

                    <h3 className="mt-1 font-bold text-gray-100">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {item.description}
                    </p>
                  </div>

                </div>

              </motion.a>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          CONTACT FORM + SIDEBAR
      ===================================================== */}

      <section className="relative py-16 sm:py-20 2xl:py-24">

        <div className="absolute left-[-180px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.05] blur-[140px]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] container mx-auto px-5 md:px-8 lg:px-12">

          {/* =================================================
              FORM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10"
          >

            <div className="mb-8">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Send A Message
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                How Can We
                <span className="text-emerald-400">
                  {" "}Help?
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] p-4"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-emerald-400"
                />

                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Message sent successfully!
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Thank you for contacting GreenNest.
                  </p>
                </div>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Email */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-2 focus:ring-emerald-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-2 focus:ring-emerald-400/10"
                  />
                </div>

              </div>

              {/* Phone + Subject */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-2 focus:ring-emerald-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-white/[0.08] bg-[#0a170e] px-4 py-3.5 text-sm text-gray-300 outline-none transition-all focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/10"
                  >
                    <option value="">
                      Select a subject
                    </option>

                    <option value="Poultry Farming">
                      Poultry Farming
                    </option>

                    <option value="Bird Health">
                      Bird Health & Care
                    </option>

                    <option value="Feed Management">
                      Feed Management
                    </option>

                    <option value="Egg Production">
                      Egg Production
                    </option>

                    <option value="Consultation">
                      Farming Consultation
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all focus:border-emerald-400/40 focus:bg-emerald-400/[0.03] focus:ring-2 focus:ring-emerald-400/10"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 sm:w-auto"
              >
                Send Message

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>
          </motion.div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >

            {/* Hours */}

            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                    Business Hours
                  </p>

                  <h3 className="mt-1 font-bold">
                    We&apos;re Available
                  </h3>
                </div>

              </div>

              <div className="mt-6 space-y-3 text-sm">

                {[
                  ["Monday - Friday", "9:00 AM - 6:00 PM"],
                  ["Saturday", "9:00 AM - 4:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-gray-500">
                      {day}
                    </span>

                    <span className="font-medium text-gray-300">
                      {time}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* Trust Card */}

            <div className="rounded-[28px] border border-emerald-400/10 bg-emerald-400/[0.035] p-6 sm:p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <ShieldCheck size={21} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Why Contact Us?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Get practical guidance and reliable information from a team
                focused on responsible poultry farming.
              </p>

              <div className="mt-5 space-y-3">

                {[
                  "Professional guidance",
                  "Fast response",
                  "Reliable solutions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400"
                    />

                    {item}
                  </div>
                ))}

              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#07140B] py-16 sm:py-20 2xl:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Frequently Asked
              </div>

              <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold leading-[1.1em] tracking-[-0.035em]">
                Got Questions?
                <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                  We Have Answers.
                </span>
              </h2>

            </motion.div>

            <div className="mx-auto max-w-4xl space-y-3">

              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >

                  <h3 className="font-bold text-lg leading-tight">
                    {faq.question}
                  </h3>

                  <p className="mt-2 text-sm sm:leading-6 text-gray-500">
                    {faq.answer}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section
        id="location"
        className="relative py-16 sm:py-20 2xl:py-24 px-5 md:px-8 lg:px-12 container mx-auto"
      >

        <div className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025]">

          <div className="grid lg:grid-cols-2">

            {/* Location info */}

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <MapPin size={22} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Find Us
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Visit Our Farm
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                We welcome visitors and potential partners by appointment.
                Contact our team to arrange your visit.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="font-semibold">
                      Location
                    </p>

                    <p className="mt-0.5 text-sm text-gray-500">
                      Haripur, Khyber Pakhtunkhwa, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="font-semibold">
                      Phone
                    </p>

                    <p className="mt-0.5 text-sm text-gray-500">
                      +92 300 1234567
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Map placeholder */}

            <div className="relative min-h-[350px] overflow-hidden bg-[#0a170e]">

              <div className="absolute inset-0 opacity-30">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(52,211,153,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.12) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 shadow-xl shadow-emerald-500/10">
                    <MapPin size={28} />
                  </div>

                  <p className="mt-4 font-bold text-lg">
                    GreenNest Farm
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Haripur, Pakistan
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 md:px-8 lg:px-12 sm:px-8 pb-16 sm:pb-20 2xl:pb-24 container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.12] via-white/[0.025] to-lime-400/[0.05] px-6 py-12 text-center sm:px-10 sm:py-16"
        >

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative">

            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Let&apos;s Grow
              <span className="text-emerald-400">
                {" "}Together.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Have a question or need professional poultry farming support?
              We&apos;re just a message away.
            </p>

            <Link
              to="/services"
              onClick={() => scrollTo(0, 0)}
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400"
            >
              Explore Our Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
};

export default Contact;