import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import {
  FiArrowRight,
  FiClock,
  FiShield,
  FiTruck,
  FiHeadphones,
} from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import logo from '../assets/logo.png'
import background_img from '../assets/about.jpg'

const Footer = () => {
  return (
    <footer>
      {/* CTA Section */}
      <div className="overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              `linear-gradient(rgba(0,60,0,.85),rgba(0,60,0,.85)),url(${background_img})`,
          }}>
        <div className="container mx-auto px-5">
          <div className="flex xl:flex-row flex-col items-center lg:justify-between lg:gap-6 gap-8 sm:py-12 py-16">
            <div className="footer_contact flex items-center gap-5">
              <div className="sm:w-18 sm:h-18 w-16 h-16 rounded-full bg-lime-500 flex items-center justify-center">
                <FaPhoneAlt className="text-white text-[26px]" />
              </div>

              <div>
                <h3 className="text-white sm:text-3xl text-2xl font-bold">
                  Need Help? We're Here for You!
                </h3>
                <p className="text-white/80 mt-2 leading-tight">
                  Our team is always ready to support you.
                </p>
              </div>
            </div>

            <div className="2xl:space-y-3 space-y-2 text-white">
              <div className="flex items-center sm:gap-3 gap-2">
                <BsTelephone className="text-xl" />
                <span className="sm:text-base text-sm">+92 318 587 8868</span>
              </div>

              <div className="flex items-center sm:gap-3 gap-2">
                <LuMail className="text-xl" />
                <span className="sm:text-base text-sm">info@poultryfarm.com</span>
              </div>
            </div>

            <div className="lg:text-right">
              <button className="bg-lime-500 hover:bg-lime-600 transition px-10 py-4 cursor-pointer rounded-full 2xl:text-base text-white font-semibold inline-flex items-center gap-3 tracking-wide sm:text-base text-sm">
                GET A FREE QUOTE
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-5 2xl:py-20 py-16">
        <div className="main_footer grid lg:grid-cols-4 grid-cols-2 gap-12">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-40 sm:w-44 mb-6"
            />

            <p className="text-gray-700 text-sm sm:text-base">
              We are committed to providing high-quality poultry
              products and excellent customer service.
            </p>

            <div className="flex gap-3 2xl:mt-8 mt-6">
              {[
                <FaFacebookF />,
                <FaLinkedinIn />,
                <FaYoutube />,
                <FaWhatsapp />,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="sm:w-10 sm:h-10 w-9 h-9 rounded-full border border-lime-500 text-lime-600 hover:bg-lime-500 hover:text-white transition flex items-center justify-center cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="sm:text-2xl text-xl font-bold 2xl:mb-8 mb-6">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {[
                "Home",
                "About Us",
                "Services",
                "Products",
                "Blogs",
                "Contact Us",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-700 sm:text-[15px] text-sm hover:text-lime-600 cursor-pointer"
                >
                  <FiArrowRight />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="sm:text-2xl text-xl font-bold 2xl:mb-8 mb-6">
              Our Products
            </h3>

            <ul className="space-y-5">
              {[
                "Live Broilers",
                "Hatching Eggs",
                "Chicken Meat",
                "Poultry Feed",
                "Day Old Chicks",
                "Vaccines & Supplements",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-700 sm:text-[15px] text-sm hover:text-lime-600 cursor-pointer"
                >
                  <FiArrowRight />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="sm:text-2xl text-xl font-bold 2xl:mb-8 mb-6">
              Contact Info
            </h3>

            <div className="space-y-6 text-gray-700">
              <div className="flex sm:gap-4 gap-3">
                <FaMapMarkerAlt className="text-lime-600 mt-1" />
                <span className={"sm:text-[15px] text-sm"}>Haripur, Pakistan</span>
              </div>

              <div className="flex sm:gap-4 gap-3">
                <FaPhoneAlt className="text-lime-600 mt-1" />
                <span className={"sm:text-[15px] text-sm"}>+92 318 587 8868</span>
              </div>

              <div className="flex sm:gap-4 gap-3">
                <FaEnvelope className="text-lime-600 mt-1" />
                <span className={"sm:text-[15px] text-sm"}>info@poultryfarm.com</span>
              </div>

              <div className="flex sm:gap-4 gap-3">
                <FiClock className="text-lime-600 mt-1" />
                <span className={"sm:text-[15px] text-sm"}>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>

              <div className="flex sm:gap-4 gap-3">
                <FaGlobe className="text-lime-600 mt-1" />
                <span className={"sm:text-[15px] text-sm"}>www.poultryfarm.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="border-t border-slate-300">
        <div className="container mx-auto px-4 py-10">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {[
              {
                icon: <FiShield />,
                title: "100% Quality",
                desc: "Premium quality products",
              },
              {
                icon: <FiShield />,
                title: "Safe & Healthy",
                desc: "Hygienic & safe environment",
              },
              {
                icon: <FiHeadphones />,
                title: "24/7 Support",
                desc: "Always here for your help",
              },
              {
                icon: <FiTruck />,
                title: "Fast Delivery",
                desc: "On-time delivery guaranteed",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center 2xl:gap-5 gap-4"
              >
                <div className="sm:w-16 sm:h-16 w-13 h-13 rounded-full bg-lime-600 text-white flex items-center justify-center sm:text-2xl text-xl">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold sm:text-xl text-lg">
                    {item.title}
                  </h4>
                  <p className="text-slate-700 max-sm:leading-tight text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-lime-950 text-white">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center sm:gap-4 gap-2 text-sm">
          <h6>
            © 2025 Poultry Farm. All Rights Reserved.
          </h6>

          <div className="flex 2xl:gap-8 sm:gap-6 gap-4">
            <a href="#" className="hover:text-lime-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-lime-500 transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;