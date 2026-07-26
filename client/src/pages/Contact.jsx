import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import {useInView} from 'react-intersection-observer'

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us Anytime",
    info: "+92 318 587 8868",
    desc: "Mon - Sat (8:00 AM - 8:00 PM)",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    info: "info@poultryfarm.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Our Farm",
    info: "Haripur, Pakistan",
    desc: "We’d love to see you!",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    info: "Mon - Sat: 8AM - 8PM",
    desc: "Sunday: Closed",
  },
];

const faqs = [
  "What types of poultry products do you offer?",
  "Do you vaccinate chicks before delivery?",
  "Do you provide delivery services?",
  "Can I visit your farm?",
];

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  return (
    <div className="bg-white">

      {/* Hero */}
      <PageBanner page={'Contact Us'} title={'We Are Here To Help You'} bold={'Grow Better'} para={'Have questions about our poultry products or services? Get in touch with our team — we’re always happy to help.'} />

      {/* Contact Cards */}
      <section className="py-14">
        <div className="container mx-auto px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-300"
              >
                <div className="w-16 h-16 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.info}
                </p>

                {/* <p className="text-gray-500 mt-2">
                  {item.desc}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-14">
        <div className="container mx-auto px-5">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Contact Form */}
            <div className={`bg-[#f7fbf1] rounded-3xl p-10 h-fit`}>
              <h2 className="sm:text-4xl text-3xl font-bold text-center">
                Send Us A
                <span className="text-lime-600"> Message</span>
              </h2>

              <div className="w-20 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>

              <form className="mt-10 space-y-5 text-sm">

                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 px-5 rounded-xl border border-gray-200 outline-none focus:border-lime-600 bg-white"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-14 px-5 rounded-xl border border-gray-200 outline-none focus:border-lime-600 bg-white"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none focus:border-lime-600 bg-white"
                />

                <select className="w-full h-14 px-5 rounded-xl border border-gray-200 outline-none focus:border-lime-600 bg-white">
                  <option>Select Subject</option>
                  <option>Product Inquiry</option>
                  <option>Bulk Order</option>
                  <option>Support</option>
                </select>

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full p-5 rounded-xl border border-gray-200 outline-none focus:border-lime-600 bg-white"
                ></textarea>

                <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition">
                  Send Message
                  <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="space-y-6">

              <div className="bg-[#f7fbf1] rounded-3xl p-8">
                <h2 className="sm:text-4xl text-3xl font-bold text-center">
                  Find Us On
                  <span className="text-lime-600"> Map</span>
                </h2>

                <div className="w-20 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>

                <iframe
                  title="map"
                  className="w-full h-[300px] rounded-2xl mt-8"
                  src="https://maps.google.com/maps?q=Haripur%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>

              <div className="bg-[#f7fbf1] rounded-2xl p-8 border border-lime-100">
                <h3 className="font-bold text-2xl mb-4">
                  Our Farm Address
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Poultry Farm, University Road,
                  Near KTS, Haripur,
                  Khyber Pakhtunkhwa,
                  Pakistan
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="container mx-auto px-5">

          <div ref={ref} className={`box ${inView ? "show" : ""} bg-gradient-to-r from-lime-50 to-white rounded-3xl sm:p-10 py-8 px-6 border border-slate-200`}>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

              <div>
                <p className="text-lime-500">
                  Need Instant Help?
                </p>

                <h2 className="md:text-4xl text-3xl font-bold mt-2">
                  Call Us Now:
                  <span className="text-lime-600">
                    {" "}
                    +92 318 587 8868
                  </span>
                </h2>

                <p className="mt-3 text-gray-600">
                  Our team is ready to assist you with all your poultry needs.
                </p>
              </div>

              <button className="bg-lime-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-lime-700 transition cursor-pointer">
                Call Us Now
              </button>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;