import React from "react";
import {
  FaEgg,
  FaTruck,
  FaShieldAlt,
  FaHeartbeat,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

import { GiChicken, GiWheat } from "react-icons/gi";
import PageBanner from '../components//PageBanner'
import farm_image from '../assets/farm.avif'
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <GiChicken />,
    title: "Day Old Chicks",
    desc: "Healthy and vaccinated chicks raised under expert supervision for better growth and productivity.",
  },
  {
    icon: <FaEgg />,
    title: "Hatching Eggs",
    desc: "Premium quality fertile eggs with high hatchability rates and strict quality control.",
  },
  {
    icon: <GiWheat />,
    title: "Poultry Feed",
    desc: "Balanced nutritional feed designed to improve bird health and maximize production.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Veterinary Care",
    desc: "Professional healthcare services including vaccination and disease prevention.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    desc: "Maintaining the highest standards of hygiene, safety, and poultry welfare.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Reliable transportation ensuring fresh and timely delivery of poultry products.",
  },
];

const benefits = [
  "Healthy & Vaccinated Birds",
  "Modern Poultry Farming",
  "Premium Quality Products",
  "Experienced Farm Experts",
  "Customer Satisfaction",
  "Fast & Reliable Delivery",
];

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div>
      {/* Hero Section */}
      <PageBanner page={'Our Services'} title={'Premium Poultry Solutions For'} bold={' Every Farm'} para={'Providing healthy birds, quality feed, veterinary care and reliable delivery services to help your farm grow successfully.'} />

      {/* Intro */}
      <section className="sm:pt-24 pt-20 bg-[#f8faf5]">
        <div className="max-w-4xl mx-auto text-center pb-14">
          <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
            What We Offer
          </h6>

          <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
            Complete Poultry
            <span style={{ fontFamily: "Merriweather" }} className="text-lime-600"> Solutions</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="w-16 h-[2px] bg-lime-600"></div>
            <div className="w-3 h-3 rounded-full bg-lime-600"></div>
            <div className="w-16 h-[2px] bg-lime-600"></div>
          </div>

          <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
            We provide comprehensive poultry farming services focused on
            quality, productivity, sustainability, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="sm:pb-24 pb-20 bg-[#f8faf5]">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={ref}
                style={{transitionDelay:`${index * 120}ms`}}
                className={`box ${inView ? "show" : ""} bg-white p-8 rounded-2xl hover:shadow-2xl shadow-lime-200 transition-all duration-500 group border border-gray-200`}
              >
                <div className="w-16 h-16 rounded-full bg-lime-100 text-lime-600 text-3xl flex items-center justify-center mb-6 group-hover:bg-lime-600 group-hover:text-white transition">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-6 text-lime-600 font-semibold hover:translate-x-1 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sm:py-24 py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={farm_image}
                alt="farm_image"
                className="rounded-3xl"
              />
            </div>

            <div>
              <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
                Why Choose Us
              </h6>

              <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
                Trusted Poultry Farm
                For Your <span className="text-lime-600" style={{ fontFamily: "Merriweather" }}>Solutions</span>
              </h2>

              <div className="w-20 h-1 bg-lime-500 mt-4"></div>

              <p className="text-slate-700 mt-6">
                We combine modern poultry farming techniques with years of
                experience to deliver healthy birds and premium poultry products.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-lime-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="sm:py-20 py-16 bg-lime-600">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              ["15+", "Years Experience"],
              ["10K+", "Healthy Birds"],
              ["5K+", "Happy Customers"],
              ["99%", "Satisfaction Rate"],
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-5xl font-bold text-lime-400">
                  {item[0]}
                </h3>

                <p className="mt-2 text-lime-100/90">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sm:py-24 py-20 bg-[#f8faf5]">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center pb-10">
            <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
              Our Process
            </h6>

            <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
              How We Work
            </h2>

          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
            {[
              "Breeding & Selection",
              "Nutrition Management",
              "Health Monitoring",
              "Safe Delivery",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-slate-200"
              >
                <div className="w-16 h-16 rounded-full bg-lime-600 text-white text-2xl font-semibold flex items-center justify-center mx-auto">
                  {index + 1}
                </div>

                <h3 className="font-bold text-xl 2xl:mt-6 mt-5">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-lime-700 to-lime-500">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-white">
            Need Premium Poultry Services?
          </h2>

          <p className="text-white/90 mt-4 max-w-2xl mx-auto">
            Our experts are ready to help your farm grow with healthy birds,
            quality products and professional support.
          </p>

          <button className="mt-8 bg-white text-lime-600 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;