import React from 'react'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { GrUserExpert } from "react-icons/gr";
import { FiAward } from "react-icons/fi";
import { TbVirus } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import Button from './Button';
import about_image from '../assets/about.jpg'
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';

const AboutSection = () => {

    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    const data = [
        {
            icon: <MdOutlineHealthAndSafety />,
            title: "Healthy Nutrition",
            para: "Balanced feed for stronger growth"
        },
        {
            icon: <TbVirus />,
            title: "Disease Free",
            para: "Hygienic & safe environment"
        },
        {
            icon: <GrUserExpert />,
            title: "Expert Care",
            para: "Professional team & modern practices"
        },
        {
            icon: <FiAward />,
            title: "Best Quality",
            para: "100% top quality guaranteed"
        },
    ]

    return (
        <section className='container mx-auto px-5'>
            <div className='why_choose_parent bg-white rounded-xl grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 items-start gap-5 px-4 2xl:py-8 sm:py-7 pt-12 pb-16 2xl:mt-[-70px] sm:mt-[-60px] relative sm:shadow-xl sm:divide-x sm:divide-gray-300'>
                {data.map((v, i) => (
                    <div key={i} className='why_choose flex items-center justify-center gap-3'>
                        <span className='text-white bg-lime-600 w-16 h-16 rounded-full flex items-center justify-center sm:text-[28px] text-[26px]'>{v.icon}</span>
                        <div>
                            <h4 className='font-bold sm:text-xl text-lg leading-tight mb-1.5'>{v.title}</h4>
                            <p className='text-slate-700 max-w-[180px] leading-tight sm:text-base text-[15px]'>{v.para}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sm:pt-24 pt-20 max-sm:pt-0 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div ref={ref} className={`box ${inView ? "show" : ""} flex flex-col max-lg:items-center max-lg:text-center`}>
                        <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
                            About Us
                        </h6>

                        <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
                            We Provide The Best Care
                            For Your <span className="text-lime-600" style={{ fontFamily: "Merriweather" }}>Poultry</span>
                        </h2>

                        <div className="w-20 h-1 bg-lime-500 mt-4"></div>

                        <p className="text-slate-700 mt-6">
                            Our farm is equipped with modern technology and adheres to
                            international standards to produce healthy and high-quality
                            poultry products. Customer satisfaction and animal welfare are
                            our top priorities.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-10">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-lime-600 text-lg" />
                                    <span className='leading-tight tracking-[-0.2px] text-slate-800'>Modern & Hygienic Poultry Farm</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-lime-600 text-lg" />
                                    <span className='leading-tight tracking-[-0.2px] text-slate-800'>High Quality Feed & Nutrition</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-lime-600 text-lg" />
                                    <span className='leading-tight tracking-[-0.2px] text-slate-800'>Experienced & Professional Team</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-lime-600 text-lg" />
                                    <span className='leading-tight tracking-[-0.2px] text-slate-800'>Commitment To Animal Welfare</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-lime-600 text-lg" />
                                    <span className='leading-tight tracking-[-0.2px] text-slate-800'>Sustainable Practices</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-lime-600 text-lg" />
                                    <span className='leading-tight tracking-[-0.2px] text-slate-800'>Customer Satisfaction</span>
                                </div>
                            </div>
                        </div>

                        <Link to={'/about'} onClick={()=>{scrollTo(0,0)}}>
                            <Button text={'More About Us'} />
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center">
                        <img
                            src={about_image}
                            alt="Poultry"
                            className="w-full max-h-[500px] max-w-[500px] object-cover rounded-2xl"
                        />

                        {/* Experience Card */}
                        <div className="absolute bottom-6 right-6 flex items-center gap-2.5 bg-green-700 text-white px-8 py-6 shadow-xl rounded-xl">
                            <span className='text-5xl'><FaAward /></span>
                            <div>
                                <h3 className="text-4xl font-bold text-lime-500">05+</h3>
                                <h6 className="text-[15px] font-medium">
                                    Years Of Experience
                                </h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection