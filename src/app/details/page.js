"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import KeyBenefits from "@/components/keyframes";
import { Dialog, DialogPanel } from "@headlessui/react";
import { ArrowLeft, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Details = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("services")));
  }, []);

  console.log(data, "local storage data");
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/" },
    { name: "Portfolio", href: "/" },
    { name: "Contact us", href: "/" },
    { name: "about", href: "/about" },
  ];

  const services = [
    {
      title: "Real-Time Tracking",
      description:
        "Enable users to track orders, vehicles, or assets in real time with precision using Google Maps integration.",
      icon: "📍",
    },
    {
      title: "Secure Payments",
      description:
        "We ensure your app is equipped with safe and reliable payment gateways to facilitate transactions without any risk.",
      icon: "💳",
    },
    {
      title: "Scalable Solutions",
      description:
        "Whether you’re a startup or a large enterprise, our mobile apps are built to scale as your business grows.",
      icon: "📈",
    },
  ];

  // Clients Array
  const clients = [
    {
      name: "Tech Innovations Inc.",
      description:
        "Developed a custom CRM system that improved client management and increased sales.",
    },
    {
      name: "Healthcare Partners",
      description:
        "Delivered robust IT infrastructure support, ensuring seamless and secure patient data management.",
    },
    {
      name: "Green Energy Solutions",
      description:
        "Implemented advanced cybersecurity measures, safeguarding sensitive data from cyber threats.",
    },
  ];

  return (
    <>
      <div className="font-sans text-gray-800">
        <Header />

        {/* Hero Section */}
        <section className="bg-[#111827] text-white px-4 mt-20 py-8 md:py-12 md:px-16">
          <div className="flex flex-col items-start w-full mb-12">
            <a href="/" className="cursor-pointer">
              <ArrowLeft size={"40"} className="text-[#7B3FE4]" />
            </a>
            <h1 className="text-2xl md:text-3xl font-bold mt-4">
              Our Services
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              {data.title}
            </h2>
            <div className="max-w-7xl">
              {data.subheader && (
                <p className="mt-4 mx-auto text-lg text-gray-300">
                  {data.subheader}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-white py-12">
          {/* Services Section */}
          <section className="px-4 md:px-[7rem] mx-auto mb-16">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              {data.features &&
                data.features?.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-lg flex flex-col items-start border border-gray-400"
                  >
                    <div className="text-4xl mb-4 text-[#7B3FE4]">
                      {/* {service.icon} */}
                    </div>
                    <h3 className="text-xl font-semibold mt-4 text-left text-[#4F46E5]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-left">
                      {service.description}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* Clients Section */}
          <section className="px-4 md:px-[7rem]">
            {data.body && (
              <h2 className="text-3xl font-bold text-left mb-8 text-[#4F46E5]">
                {data.body}
              </h2>
            )}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              {data.innovation &&
                data.innovation.map((client, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-start shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-[#4F46E5]">
                      {client.title}
                    </h3>
                    <div className="max-w-md">
                      <p className="mt-2 text-gray-600">{client.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <KeyBenefits />

          <section className="bg-white py-8 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col items-center justify-between sm:flex-row sm:space-x-4">
              {/* Text Content */}
              <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Looking for reliable IT services?
                </h2>
              </div>

              {/* Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F46E5] rounded-full text-lg font-semibold shadow-md hover:bg-[#3b3fe4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F46E5]"
                >
                  Contact us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Details;
