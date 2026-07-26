import React, { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Authentication = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="min-h-screen bg-green-600/90 flex items-center justify-center py-12 bg-no-repeat bg-left" style={{backgroundImage:`url(https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80)`}}>
      <div className="container mx-auto px-5 grid grid-cols-2">
        <div></div>
        {/* Right Side */}
        <div className="flex items-center justify-center p-8 md:p-12 bg-white rounded-4xl shadow-xl">
          <div className="w-full max-w-xl">
            <div className="text-center mb-10">
              <h5 className="text-lime-600 tracking-widest uppercase font-medium">
                Welcome
              </h5>

              <h2
                className="sm:text-4xl text-3xl font-bold mt-3"
                style={{ fontFamily: "Merriweather" }}
              >
                Create Account
              </h2>
            </div>

            <form className="space-y-5 text-[15px]">
              {/* Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-slate-700 mb-2 block">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Ahmed"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-lime-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-slate-700 mb-2 block">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Khan"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-lime-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="font-medium text-slate-700 mb-2 block">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-lime-600 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-medium text-slate-700 mb-2 block">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+92 300 1234567"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-lime-600 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-slate-700 mb-2 block">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 focus:border-lime-600 focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="font-medium text-slate-700 mb-2 block">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="********"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 focus:border-lime-600 focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="mt-1 accent-lime-600"
                />

                <span>
                  I agree with{" "}
                  <span className="text-lime-600">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-lime-600">
                    Terms & Conditions
                  </span>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-lime-600 hover:bg-lime-700 text-white py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200"></div>

                <span className="text-slate-500 text-sm">
                  Or Sign Up With
                </span>

                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Social */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50"
                >
                  <FaFacebookF className="text-blue-600" />
                  <span className="hidden sm:block">
                    Facebook
                  </span>
                </button>

                <button
                  type="button"
                  className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50"
                >
                  <FaGoogle className="text-red-500" />
                  <span className="hidden sm:block">
                    Google
                  </span>
                </button>

                <button
                  type="button"
                  className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50"
                >
                  <FaLinkedinIn className="text-blue-700" />
                  <span className="hidden sm:block">
                    LinkedIn
                  </span>
                </button>
              </div>

              {/* Login */}
              <p className="text-center text-slate-600">
                Already have an account?
                <a
                  href="/login"
                  className="ml-2 text-lime-600 font-semibold hover:underline"
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;