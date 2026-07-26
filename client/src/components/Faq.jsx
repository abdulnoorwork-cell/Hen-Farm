import { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "Do you provide vaccinated chicks?",
    answer:
      "Yes, all our chicks are properly vaccinated and monitored by poultry health experts to ensure healthy growth and disease prevention.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "We offer flexible order quantities for both small farmers and large commercial poultry businesses.",
  },
  {
    question: "Do you provide delivery services?",
    answer:
      "Yes, we provide safe and reliable delivery services to ensure birds and products arrive in excellent condition.",
  },
  {
    question: "What feed do you use?",
    answer:
      "We use premium-quality feed formulated with balanced nutrition to support healthy growth and productivity.",
  },
  {
    question: "Are your poultry products quality tested?",
    answer:
      "Absolutely. All products undergo strict quality control and health inspections before delivery.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);
  const {ref,inView}=useInView({threshold:0.2,triggerOnce:true})

  return (
    <section className="sm:py-24 py-20">

      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h6 className="text-lime-600 uppercase tracking-[3px] font-semibold">
            FAQ
          </h6>

          <h2 className="2xl:text-5xl sm:text-[40px] text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
            Frequently Asked
            <span style={{ fontFamily: "Merriweather" }} className="text-lime-600"> Questions</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="w-16 h-[2px] bg-lime-600"></div>
            <div className="w-3 h-3 rounded-full bg-lime-600"></div>
            <div className="w-16 h-[2px] bg-lime-600"></div>
          </div>

          <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
            Find answers to common questions about our poultry products, farming practices and delivery services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:gap-14 md:gap-8 gap-12 items-center">

          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 text-lime-600 font-semibold mb-5">
              <span>🌱</span>
              FAQ
            </div>

            <h3 className="2xl:text-5xl sm:text-4xl text-3xl font-bold 2xl:mt-3 mt-2 leading-tight">
              Everything You Need To Know About Our
              <span className="text-lime-600" style={{fontFamily:"Merriweather"}}> Poultry Farm</span>
            </h3>

            <div className="mt-10 relative">

              <div className="w-72 h-72 mx-auto rounded-full bg-lime-100 flex items-center justify-center">
                <span className="text-[180px] font-bold text-lime-600">
                  ?
                </span>
              </div>

              <div className="absolute top-6 left-20 bg-lime-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                •••
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div ref={ref} className={`box ${inView ? "show" : ""} space-y-4`}>

            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className={`w-full flex justify-between items-center p-5 text-left font-medium transition duration-200 sm:text-[15px] text-sm cursor-pointer ${active === index
                    ? "bg-lime-600 text-white"
                    : ""
                    }`}
                >
                  <span style={{fontFamily:"Poppins"}}>{item.question}</span>

                  {active === index ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </button>

                {active === index && (
                  <p className="p-5 text-gray-600 leading-relaxed sm:text-[15px] text-sm">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}