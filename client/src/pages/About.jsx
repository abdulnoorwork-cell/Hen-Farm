import React from "react";
import {
  FaAward,
  FaHeartbeat,
  FaTruck,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import hens_image from '../assets/hens-image.jpg'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: "05+", title: "Years Experience" },
  { number: "10K+", title: "Healthy Birds" },
  { number: "5K+", title: "Happy Customers" },
  { number: "99%", title: "Satisfaction Rate" },
];

const features = [
  {
    icon: <FaHeartbeat />,
    title: "Healthy Birds",
    desc: "Professionally raised and vaccinated poultry for maximum health.",
  },
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "High-quality poultry products with strict quality standards.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Team",
    desc: "Experienced poultry specialists and farm professionals.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Reliable and timely delivery of fresh poultry products.",
  },
];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  return (
    <div>
      {/* Hero */}

      <PageBanner page={'About Us'} title={'Building Healthy Poultry, Delivering'} bold={' Quality Products'} para={'We are committed to raising healthy poultry, providing premium products, and delivering exceptional service to our customers.'} />

      {/* About Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="relative">
              <img
                src={hens_image}
                alt=""
                className="rounded-3xl"
              />

              <div className="absolute -bottom-6 lg:-right-6 bg-lime-600 text-white sm:px-8 sm:py-6 px-6 py-4 rounded-2xl shadow-xl">
                <h3 className="sm:text-4xl text-3xl font-bold">05+</h3>
                <p className="max-sm:text-sm">Years Experience</p>
              </div>
            </div>

            <div>

              <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
                Who Are We
              </h6>

              <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
                Trusted Poultry Farm <span className="text-lime-600" style={{ fontFamily: "Merriweather" }}>Since 2010</span>
              </h2>

              <div className="w-20 h-1 bg-lime-500 mt-4"></div>

              <p className="text-slate-700 mt-6">
                Our poultry farm is dedicated to producing healthy birds and
                premium-quality poultry products. We combine modern farming
                techniques, balanced nutrition, and professional care to ensure
                the highest standards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Healthy & Vaccinated Birds",
                  "Professional Farm Management",
                  "Premium Feed & Nutrition",
                  "Quality Guaranteed Products",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-lime-600" />
                    <h6 style={{ fontFamily: "Open Sans" }}>{item}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#f7fbf1]">
        <div className="container mx-auto px-5">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                ref={ref}
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl p-8 text-center`}
              >
                <h3 className="sm:text-5xl text-4xl font-bold text-lime-600">
                  {item.number}
                </h3>
                <p className="mt-3 text-slate-600 leading-tight max-sm:text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sm:py-24 py-20 bg-white">
        <div className="container mx-auto px-5">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
              Why Choose Us
            </h6>

            <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
              Excellence In Poultry
              <span style={{ fontFamily: "Merriweather" }} className="text-lime-600"> Farming</span>
            </h2>

            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="w-16 h-[2px] bg-lime-600"></div>
              <div className="w-3 h-3 rounded-full bg-lime-600"></div>
              <div className="w-16 h-[2px] bg-lime-600"></div>
            </div>

            <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
              We focus on quality, customer satisfaction, and sustainable
              poultry farming practices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`bg-lime-50 rounded-3xl p-8 transition border border-gray-200`}
              >
                <div className="sm:w-16 sm:h-16 w-14 h-14 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center sm:text-2xl text-xl">
                  {item.icon}
                </div>

                <h3 className="font-bold sm:text-2xl text-xl sm:mt-6 mt-4">
                  {item.title}
                </h3>

                <p className="text-slate-700 sm:mt-4 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sm:py-24 py-20 bg-[#f7fbf1]">
        <div className="container mx-auto px-5">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
              Our Process
            </h6>

            <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
              How We Maintain
              <span style={{ fontFamily: "Merriweather" }} className="text-lime-600"> Quality</span>
            </h2>

            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="w-16 h-[2px] bg-lime-600"></div>
              <div className="w-3 h-3 rounded-full bg-lime-600"></div>
              <div className="w-16 h-[2px] bg-lime-600"></div>
            </div>

            <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
              We focus on quality, customer satisfaction, and sustainable
              poultry farming practices.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {[
              "Breeding",
              "Nutrition",
              "Health Monitoring",
              "Quality Delivery",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl sm:p-8 p-6 text-center border border-gray-200"
              >
                <div className="sm:w-16 sm:h-16 w-14 h-14 rounded-full bg-lime-600 text-white flex items-center justify-center mx-auto sm:text-xl text-lg font-bold">
                  0{index + 1}
                </div>

                <h3 className="sm:text-xl font-bold sm:mt-5 mt-3 leading-tight">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sm:py-24 py-20">
        <div className="container mx-auto px-5">
          <div ref={ref} className={`box ${inView ? "show" : ""} bg-gradient-to-r from-lime-700 to-lime-500 rounded-3xl sm:px-6 px-5 sm:py-16 py-12 text-white text-center w-fit max-w-4xl mx-auto`}>
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Work With A Trusted Poultry Farm?
            </h2>

            <p className="mt-5 text-lg text-lime-50 max-w-2xl mx-auto">
              Contact us today for premium poultry products and professional
              poultry farming solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="bg-white text-lime-700 px-8 py-4 rounded-xl font-semibold cursor-pointer">
                Contact Us
              </button>

              <button className="border border-white px-8 py-4 rounded-xl font-semibold cursor-pointer">
                Get A Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;