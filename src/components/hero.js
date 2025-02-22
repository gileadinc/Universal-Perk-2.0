"use client";
import React from "react";


const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transforming your needs with Innovative{" "}
                <span className="text-blue-600">Software</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Incorporate industries such as government sector, startups,
                corporations, travel industry, and telecommunications industry
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  onClick={() => scrollToSection("contact")}
                  className="rounded-[10rem] bg-blue-600 cursor-pointer px-20 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
