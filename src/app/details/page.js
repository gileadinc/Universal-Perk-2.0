"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Dialog, DialogPanel } from "@headlessui/react";
import { ArrowLeft, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Details = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="bg-gray-900">
          <div className="relative isolate pt-14">
            <header className="absolute inset-x-0 top-0 z-50">
              <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-8"
              >
                <div className="flex lg:flex-1">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Universal Perk</span>
                    <img
                      alt=""
                      src="https://www.universalperk.com/images/logo4.png"
                      className="h-20 w-auto"
                    />
                  </a>
                </div>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Menu aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="hidden lg:flex justify-center w-[90%] lg:gap-x-12">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-semibold leading-6 text-white`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
              <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
              >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Universal Perk</span>
                      <img
                        alt=""
                        src="https://www.universalperk.com/images/logo4.png"
                        className="h-8 w-auto"
                      />
                    </a>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>
                      <X aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </Dialog>
            </header>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#111827] text-white px-4 py-12 md:px-16">
          <div className="text-left flex flex-col items-start w-full mb-12">
            <ArrowLeft size={"40"} className="text-[#7B3FE4]"  />
            <h1 className="text-2xl md:text-3xl font-bold mt-4">Our Services</h1>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Mobile App Development
            </h2>
            <div>
              <p className="mt-4 max-w-2xl mx-auto text-lg  text-gray-300">
                At Universal Perk, we specialize in creating bespoke mobile apps
                that cater to the specific needs of your business, whether
                you’re in transportation, healthcare, retail, or any other
                sector. Our apps are designed to be scalable, secure, and
                feature-rich, ensuring your business stands out in a competitive
                digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-white px-4 py-12 md:px-16">
          {/* Services Section */}
          <section className="max-w-7xl mx-auto mb-16">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-lg flex flex-col items-start border border-gray-400"
                >
                  <div className="text-4xl mb-4 text-[#7B3FE4]">
                    {service.icon}
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
          <section className="px-8">
            <h2 className="text-3xl font-bold text-left mb-8 text-[#4F46E5]">
              Universal Perk has successfully collaborated with various esteemed
              clients
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-start shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#4F46E5]">
                    {client.name}
                  </h3>
                  <div className="max-w-md">
                    <p className="mt-2 text-gray-600">{client.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Details;
