import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaStar,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const TeamSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const teamMembers = [
    { id: 1, img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: 'Morgan Lee', role: 'UX Designer', desc: 'Shapes seamless user journeys through deep research and empathetic experience design.' },
    { id: 3, img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/team/user-3.png", name: 'Parker Smith', role: 'Frontend Developer', desc: 'Crafts responsive, high-performance web applications with clean and maintainable code.' },
    { id: 4, img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: 'Watson Cley', role: 'UI Engineer', desc: 'Bridges design and engineering by building robust, pixel-perfect component libraries.' }
  ];

  return (
    <>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
      </style>
      <section className='container mx-auto px-5 flex flex-col items-center justify-center gap-6 sm:pt-24 pt-20'>
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold"> Our Expert Team </h6>
          <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight"> The People Behind <span className="text-lime-600" style={{ fontFamily: "Merriweather" }}> Our Success</span></h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-20 h-[2px] bg-lime-600"></div>
            <div className="w-3 h-3 rounded-full bg-lime-600"></div>
            <div className="w-20 h-[2px] bg-lime-600"></div>
          </div>
          <p className="mt-6 text-slate-700 max-w-2xl mx-auto"> Our dedicated team works with passion and commitment to ensure healthy poultry, premium quality products, and excellent customer satisfaction. </p>
        </div>

        <div className="team_parent grid lg:grid-cols-3 grid-cols-2 gap-8 items-center justify-center w-full">
          {teamMembers.map((team, index) => (
            <div ref={ref} style={{transitionDelay:`${index * 120}ms`}} className={`box ${inView ? "show" : ""} group min-h-[350px] flex flex-col items-center justify-center px-4 py-10 sm:bg-lime-50 bg-[#f7fbf1] rounded-3xl w-full cursor-pointer border border-slate-200 hover:border-slate-300 hover:shadow-lime-200 transition`}>
              <img className="w-24 h-24 rounded-full" src={team.img} alt={team.name} />
              <h2 className="text-xl font-semibold mt-2.5 mb-0.5 text-gray-900">{team.name}</h2>
              <p className="text-gray-500 font-medium">{team.role}</p>
              <p className="text-center text-gray-500 w-3/4 mt-4 text-[15px]">{team.desc}</p>
              {/* <div className="flex items-center space-x-4 mt-6 text-gray-500">
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z" fill="currentColor" />
                  </svg>
                </a>
              </div> */}
            </div>
          ))}

        </div>

      </section>
    </>
  )
};

export default TeamSection;