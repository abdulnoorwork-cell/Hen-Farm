import React from "react";

const Testimonial = () => {
    const testimonials = [
        { text: "PrebuiltUI helped us move faster without sacrificing design quality. The components feel production-ready.", name: "Cristofer Levin", role: "Frontend engineer", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
        { text: "The attention to detail in PrebuiltUI is impressive. Saved me hours of repetitive work and time. Highly recommended.", name: "Rohan Mehta", role: "Startup founder", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
        { text: "We were able ship faster using PrebuiltUI. The consistency across components made UI feel polished.", name: "Jason Kim", role: "Product designer", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60" },
        { text: "PrebuiltUI feels like it was built by people who actually ship products. Components are clean and easy to use.", name: "Alex Turner", role: "Full stack developer", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60" },
        { text: "PrebuiltUI helped us maintain design consistency across multiple projects. It's now a core part of design.", name: "Sofia Martinez", role: "UX designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" },
        { text: "Our team productivity improved noticeably after adopting PrebuiltUI. It reduced design handoff friction.", name: "Daniel Wong", role: "UI designer", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png" },
        { text: "PrebuiltUI helped us move faster without sacrificing design quality. The components feel production-ready.", name: "Cristofer Levin", role: "Frontend engineer", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
        { text: "The attention to detail in PrebuiltUI is impressive. Saved me hours of repetitive work and time. Highly recommended.", name: "Rohan Mehta", role: "Startup founder", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
        { text: "We were able ship faster using PrebuiltUI. The consistency across components made UI feel polished.", name: "Jason Kim", role: "Product designer", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60" },
    ];

    const rows = [
        { start: 0, end: 3, className: "animate-scroll" },
        { start: 3, end: 6, className: "animate-scroll-reverse" }
    ];

    const renderCard = (testimonial, index) => (
        <div key={index} className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-5 py-8 shrink-0 max-w-[400px]">
            <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-[#737373]" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                ))}
            </div>
            <p className="text-neutral-700 text-sm mb-8">{testimonial.text}</p>
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                    <p className="font-medium text-neutral-800 text-sm">{testimonial.name}</p>
                    <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }

                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes scrollReverse {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    .animate-scroll {
                        animation: scroll 15s linear infinite;
                    }
                    .animate-scroll-reverse {
                        animation: scrollReverse 15s linear infinite;
                    }
                `}
            </style>
            <section className="sm:py-24 py-20 bg-[#f7fbf1] relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-lime-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-100 rounded-full blur-3xl opacity-50"></div>
                <div>

                    <div className="max-w-4xl mx-auto text-center mb-14 px-5">
                        <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
                            Loved by clients
                        </h6>

                        <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight capitalize">
                            What people are
                            <span style={{ fontFamily: "Merriweather" }} className="text-lime-600"> saying</span>
                        </h2>

                        <div className="flex items-center justify-center gap-4 mt-5">
                            <div className="w-16 h-[2px] bg-lime-600"></div>
                            <div className="w-3 h-3 rounded-full bg-lime-600"></div>
                            <div className="w-16 h-[2px] bg-lime-600"></div>
                        </div>

                        <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
                            Real feedback from founders, developers and teams building production-ready products.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

                                <div className={`flex gap-6 ${row.className}`}>
                                    {[...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end)].map((testimonial, index) =>
                                        renderCard(testimonial, index)
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial;