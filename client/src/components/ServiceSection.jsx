import React from "react";
import {
    FaEgg,
    FaTruck,
    FaShieldAlt,
    FaLeaf,
    FaArrowRight,
    FaUserMd,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import {Link} from 'react-router-dom'
import Button from '../components/Button'

const ServiceSection = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
    const services = [
        {
            id: 1,
            icon: <FaEgg />,
            title: "Hatching Eggs",
            description:
                "Premium fertile eggs with high hatchability rates and strict quality control.",
        },
        {
            id: 2,
            icon: <FaLeaf />,
            title: "Poultry Feed",
            description:
                "Balanced nutrition feed formulated to support healthy growth and productivity.",
        },
        {
            id: 3,
            icon: <FaUserMd />,
            title: "Veterinary Care",
            description:
                "Professional health monitoring, vaccination, and disease prevention services.",
        },
        {
            id: 4,
            icon: <FaShieldAlt />,
            title: "Quality Assurance",
            description:
                "Maintaining high standards of hygiene, safety, and poultry welfare.",
        },
        {
            id: 5,
            icon: <FaTruck />,
            title: "Fast Delivery",
            description:
                "Reliable transportation ensuring fresh and timely product delivery.",
        },
        {
            id: 6,
            icon: <FaEgg />,
            title: "Day Old Chicks",
            description:
                "Healthy and vaccinated chicks raised under expert supervision.",
        },
    ];

    return (
        <section className="sm:py-24 py-20 bg-[#f7fbf1] relative overflow-hidden sm:mt-24 mt-20">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-lime-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-100 rounded-full blur-3xl opacity-50"></div>
            <div className="container mx-auto px-5">

                {/* Heading */}
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
                        Our Services
                    </h6>

                    <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
                        Premium Poultry
                        <span style={{ fontFamily: "Merriweather" }} className="text-lime-600"> Solutions</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4 mt-5">
                        <div className="w-16 h-[2px] bg-lime-600"></div>
                        <div className="w-3 h-3 rounded-full bg-lime-600"></div>
                        <div className="w-16 h-[2px] bg-lime-600"></div>
                    </div>

                    <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
                        We provide comprehensive poultry farming services focused on
                        quality, animal welfare, and customer satisfaction.
                        satisfaction.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            ref={ref}
                            key={service.id}
                            style={{ transitionDelay: `${index * 120}ms` }}
                            className={`box ${inView ? "show" : ""} group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-slate-300 hover:shadow-lime-200 hover:-translate-y-2 transition-all duration-300 z-10`}
                        >
                            {/* Icon */}
                            <div className="sm:w-20 sm:h-20 w-18 h-18 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center sm:text-3xl text-[28px] group-hover:bg-lime-600 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="sm:text-2xl text-xl font-bold mt-6">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 mt-4">
                                {service.description}
                            </p>

                            <button className="mt-6 flex items-center gap-2 text-lime-600 font-semibold group-hover:gap-3 transition-all cursor-pointer">
                                Learn More
                                <FaArrowRight />
                            </button>
                        </div>
                    ))}
                </div>

                <Link to={'/about'} onClick={() => { scrollTo(0, 0) }} className="flex items-center justify-center mt-14">
                    <Button text={'View All Services'} />
                </Link>
            </div>
        </section>
    );
};

export default ServiceSection;