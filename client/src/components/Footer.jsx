import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bird,
  // Facebook,
  // Instagram,
  // Linkedin,
  Mail,
  MapPin,
  Phone,
  // Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Poultry Farming",
    "Bird Health & Care",
    "Feed Management",
    "Egg Production",
    "Sustainable Farming",
    "Quality Control",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#07140B] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-[-180px] top-20 h-96 w-96 rounded-full bg-emerald-500/[0.05] blur-[140px]" />

      <div className="absolute right-[-180px] bottom-20 h-96 w-96 rounded-full bg-lime-400/[0.04] blur-[140px]" />

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative z-10 pt-24 pb-14 container mx-auto px-5 md:px-8 lg:px-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">

          {/* ================= BRAND ================= */}

          <div>

            <Link
              to="/"
              onClick={() => scrollTo(0, 0)}
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
                <Bird size={22} />
              </div>

              <div className="leading-none">
                <p className="text-lg font-extrabold tracking-tight">
                  Green<span className="text-emerald-400">Nest</span>
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-gray-500">
                  Poultry Farm
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Modern poultry farming focused on healthier birds, better
              productivity, responsible practices, and long-term farm growth.
            </p>

            {/* Socials */}
            {/* <div className="mt-6 flex items-center gap-2">

              {[
                {
                  icon: Facebook,
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  icon: Twitter,
                  label: "Twitter",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div> */}
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => scrollTo(0, 0)}
                    className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">

              {/* Location */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="mt-0.5 text-sm text-gray-400">
                    Haripur, Khyber Pakhtunkhwa
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+923000000000"
                className="group flex gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="mt-0.5 text-sm text-gray-400 transition-colors group-hover:text-emerald-400">
                    +92 300 0000000
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@greennest.com"
                className="group flex gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="mt-0.5 break-all text-sm text-gray-400 transition-colors group-hover:text-emerald-400">
                    info@greennest.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-16 border-t border-white/[0.07] pt-7">

          <div className="flex flex-col gap-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {currentYear} GreenNest Poultry Farm. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-emerald-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-emerald-400"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;