import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from '../assets/logo.png'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { FaFilePen } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileNavLinks, setMobileNavLinks] = useState("Home");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  })

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white 2xl:text-xs text-[11px] sm:block hidden">
        <div className="flex justify-between items-center 2xl:px-8 px-6 py-1.5">
          <div className="flex gap-6 font-medium uppercase">
            <Link>Privacy Policy</Link>
            <Link>Term,s & Conditions</Link>
          </div>

          <div className="flex items-center 2xl:text-sm text-[12.8px]">
            <span>
              <a href="#" className="cursor-pointer flex items-center justify-center 2xl:w-7 2xl:h-7 w-6 h-6 rounded-full border border-white/50 hover:bg-white hover:text-black transition duration-100 hover:shadow-none hover:border-none">
                <FaFacebookF />
              </a>
            </span>
            <a href="#" className="cursor-pointer mx-2.5 flex items-center justify-center 2xl:w-7 2xl:h-7 w-6 h-6 rounded-full border border-white/50 hover:bg-white hover:text-black transition duration-100 hover:shadow-none hover:border-none">
              <FaLinkedinIn />
            </a>
            <span>
              <a href="#" className="cursor-pointer flex items-center justify-center 2xl:w-7 2xl:h-7 w-6 h-6 rounded-full border border-white/50 hover:bg-white hover:text-black transition duration-100 hover:shadow-none hover:border-none">
                <FaYoutube />
              </a>
            </span>
            <a href="#" className="cursor-pointer ml-2.5 text-md flex items-center justify-center 2xl:w-7 2xl:h-7 w-6 h-6 rounded-full border border-white/50 hover:bg-white hover:text-black transition duration-100 hover:shadow-none hover:border-none">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`max-lg:bg-gray-200 bg-white shadow-sm z-40 sticky top-0 ${sticky ? "shadow-xl max-lg:bg-white" : "shadow-none max-lg:bg-gray-200"}`}>
        <div className="container mx-auto px-5 flex items-center justify-between 2xl:h-[90px] sm:h-[80px] h-[77px]">

          {/* Logo */}
          <figure className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="logo"
              onClick={() => { scrollTo(0, 0) }}
              className="max-h-[70px] w-full"
            />
          </figure>

          {/* Menu */}
          <ul className={`xl:flex hidden items-center gap-10 text-sm uppercase text-slate-900 tracking-widest font-medium`}>
            <NavLink onClick={() => { scrollTo(0, 0) }} to={'/'} className="group relative hover:text-lime-600 transition flex items-center gap-2">
              <span className="text-xl text-lime-800"><IoHomeSharp /></span>
              Home
              <span className="absolute -bottom-3 left-1 h-1 bg-lime-500 group-hover:w-[80%] w-0 rounded-full transition-all duration-300" />
            </NavLink>

            <NavLink onClick={() => { scrollTo(0, 0) }} to={'/about'} className="group relative hover:text-lime-600 transition flex items-center gap-2">
              <span className="text-xl text-lime-800"><HiUsers /></span>
              About
              <span className="absolute -bottom-3 left-1 h-1 bg-lime-500 group-hover:w-[80%] w-0 rounded-full transition-all duration-300" />
            </NavLink>

            <NavLink onClick={() => { scrollTo(0, 0) }} to={'/services'} className="group relative hover:text-lime-600 transition flex items-center gap-2">
              <span className="text-xl text-lime-800"><RiSettings3Fill /></span>
              Services
              <span className="absolute -bottom-3 left-1 h-1 bg-lime-500 group-hover:w-[80%] w-0 rounded-full transition-all duration-300" />
            </NavLink>

            <NavLink onClick={() => { scrollTo(0, 0) }} to={'/blogs'} className="group relative hover:text-lime-600 transition flex items-center gap-2">
              <span className="text-xl text-lime-800"><FaFilePen /></span>
              Blogs
              <span className="absolute -bottom-3 left-1 h-1 bg-lime-500 group-hover:w-[80%] w-0 rounded-full transition-all duration-300" />
            </NavLink>

            <NavLink onClick={() => { scrollTo(0, 0) }} to={'/contact'} className="group relative hover:text-lime-600 transition flex items-center gap-2">
              <span className="text-xl text-lime-800"><BsFillTelephoneFill /></span>
              Contact
              <span className="absolute -bottom-3 left-1 h-1 bg-lime-500 group-hover:w-[80%] w-0 rounded-full transition-all duration-300" />
            </NavLink>

          </ul>

          {/* Mobile Menu */}
          <ul className={`mobile_nav_links w-[70%] md:max-w-[350px] sm:max-w-[330px] max-w-[270px] mx-auto pt-16 xl:hidden flex flex-col justify-center text-[13.3px] uppercase text-slate-900 tracking-[0.2px] font-medium bg-white z-50 fixed top-0 right-0 min-h-screen transition-all duration-200 ${menu ? "right-0" : "right-[-100%]"}`}>

            {/* close menu */}
            <span onClick={() => { setMenu(false) }} className="absolute top-0 left-0 bg-red-500 text-white cursor-pointer text-lg w-8 h-8 flex items-center justify-center">
              <IoClose />
            </span>
            {/* Logo */}
            <figure className="flex items-center 2xl:pl-16 sm:pl-10 pl-6 cursor-pointer mb-8">
              <img
                src={logo}
                alt="logo"
                className="max-h-[70px]"
              />
            </figure>
            <div>
              <Link to={'/'} onClick={() => { scrollTo(0, 0); setMenu(false); setMobileNavLinks("Home") }} className={`flex items-center gap-2 px-5 py-4 ${mobileNavLinks === "Home" ? "bg-indigo-50 text-lime-600" : "bg-none"}`}>
                <span className="text-xl text-lime-800"><IoHomeSharp /></span>
                Home
              </Link>

              <Link to={'/about'} onClick={() => { scrollTo(0, 0); setMenu(false); setMobileNavLinks("About") }} className={`flex items-center gap-2 px-5 py-4 ${mobileNavLinks === "About" ? "bg-indigo-50 text-lime-600" : "bg-none"}`}>
                <span className="text-xl text-lime-800"><HiUsers /></span>
                About Us
              </Link>

              <Link to={'/services'} onClick={() => { scrollTo(0, 0); setMenu(false); setMobileNavLinks("Services") }} className={`flex items-center gap-2 px-5 py-4 ${mobileNavLinks === "Services" ? "bg-indigo-50 text-lime-600" : "bg-none"}`}>
                <span className="text-xl text-lime-800"><RiSettings3Fill /></span>
                Services
              </Link>

              <Link to={'/blogs'} onClick={() => { scrollTo(0, 0); setMenu(false); setMobileNavLinks("Blogs") }} className={`flex items-center gap-2 px-5 py-4 ${mobileNavLinks === "Blogs" ? "bg-indigo-50 text-lime-600" : "bg-none"}`}>
                <span className="text-xl text-lime-800"><FaFilePen /></span>
                Blogs
              </Link>

              <Link to={'/contact'} onClick={() => { scrollTo(0, 0); setMenu(false); setMobileNavLinks("Contact") }} className={`flex items-center gap-2 px-5 py-4 ${mobileNavLinks === "Contact" ? "bg-indigo-50 text-lime-600" : "bg-none"}`}>
                <span className="text-xl text-lime-800"><BsFillTelephoneFill /></span>
                Contact Us
              </Link>

              {/* Mobile Siginin */}
              <div
                className="sm:hidden flex justify-center w-fit mx-5 bg-lime-600 hover:bg-lime-500 cursor-pointer transition duration-200 text-white items-center px-10 2xl:py-4 py-3.5 font-medium h-full rounded-xl text-sm tracking-wider my-4"
              >
                <h5 style={{fontFamily:"Poppins"}} className="flex items-center gap-2 font-semibold uppercase tracking-[1.6px]"><span><FaUser /></span> Login</h5>
              </div>
            </div>

            <div className="bg-lime-800 text-white px-5 py-8 mt-4 flex flex-col items-center">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <span className="text-lg border border-white/50 w-10 h-10 rounded-full flex items-center justify-center"><BsFillTelephoneFill /></span>
                <div>
                  <p className="capitalize">Call Us Anytime</p>
                  <h4 className="text-base leading-[1.3em]">+92 318 587 8868</h4>
                </div>
              </div>
            </div>

          </ul>


          {/* Phone Section */}
          <div className="flex items-center">

            {/* Menu Icon */}
            <span onClick={() => { setMenu(true) }} className="text-2xl block xl:hidden cursor-pointer text-gray-950 md:mr-8 sm:mr-6">
              <RiMenu3Line />
            </span>
            <div
              className="sm:flex justify-center hidden min-w-[150px] 2xl:min-w-[160px] bg-lime-600 hover:bg-lime-500 cursor-pointer transition duration-200 text-white items-center px-10 2xl:py-4 py-3.5 font-medium h-full rounded-xl text-[15px]"
            >
              <h5 style={{fontFamily:"Poppins"}} className="flex items-center gap-2 font-semibold uppercase tracking-[1.6px] text-sm"><span><FaUser /></span> Login</h5>
            </div>
          </div>

        </div>
        {/* Overlay */}
        <div onClick={() => { setMenu(false) }} className={`w-full h-screen bg-green-950/50 fixed top-0 left-0 z-40 xl:hidden ${menu ? "block" : "hidden"}`}></div>
      </nav>
    </>
  );
};

export default Navbar;