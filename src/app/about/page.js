"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Building, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/" },
  { name: "Portfolio", href: "/" },
  { name: "Contact us", href: "/" },
  { name: "about", href: "/about" },
];

const footer = {
  solutions: [
    { name: "ERP Development", href: "#" },
    { name: "Customer Relationship Management", href: "#" },
    { name: "Volunteer Coordination Tools", href: "#" },
    { name: "Data-Driven Insights", href: "#" },
  ],

  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const features = [
  {
    title: "Innovation",
    description:
      "We push the boundaries of technology to create solutions that drive growth and efficiency.",
  },
  {
    title: "Excellence",
    description:
      "We are dedicated to delivering high-quality work in every project, ensuring we meet and exceed expectations with precision and attention to detail.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, both within our organization and with our clients, to achieve shared success.",
  },
  {
    title: "Quality",
    description:
      "From concept to deployment, we prioritize excellence in everything we do, ensuring that our solutions are robust, scalable, and secure.",
  },
  {
    title: "Customer-Centric",
    description:
      "Our clients are at the heart of everything we do. We strive to deeply understand their needs and deliver tailored solutions that drive real business value",
  },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  return (
    <>
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
                  <Image src="/logo.svg" alt="Universal Perk Logo" width={50} height={50} className="h-20 w-auto" />
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
                    <Image src="/logo.svg" alt="Universal Perk Logo" width={50} height={50} className="h-8 w-auto" />
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
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-[#4F46E5] tracking-tight text-white sm:text-6xl">
                  About Us
                </h1>
                <p className="mt-6 text-lg  leading-8 text-white">
                  Empowering Bussiness with Cutting-Edge Software Solutions
                </p>

                <p className="mt-6 text-sm leading-8 text-gray-300">
                  At Universal Perk, we’re dedicated to revolutionizing how
                  businesses operate through innovative software development and
                  IT services. With expertise in mobile and web app development,
                  custom CRM integrations, cloud solutions, and cybersecurity,
                  we are committed to delivering high-quality, tailored
                  solutions that meet the unique needs of each client`
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-x-4 p-10 sm:p-40  items-start sm:items-center">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-[#4F46E5] text-[50px] sm:text-[80px] font-[700] ">
            Our Mission
          </h1>
        </div>
        <div className="w-full flex justify-start ">
          <p className="text-[#6B7280] text-base sm:text-[24px] font-[400]">
             is to empower businesses by delivering cutting-edge
            technology and tailored software solutions that help them thrive in
            today’s dynamic market. With a client-focused approach, we
            specialize in enhancing operational efficiency, improving business
            processes, and providing secure and scalable IT infrastructure.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse bg-[#E0DEFF] gap-x-4 p-10 sm:p-40  items-start sm:items-center">
        <div className="w-full sm:w-[50%]">
          <h1 className="text-[#4F46E5] text-[50px] sm:text-[80px] font-[700]">
            Our Vision
          </h1>
        </div>
        <div className="w-full flex justify-start ">
          <p className="text-[#6B7280] text-base sm:text-[24px] font-[400]">
            Our vision is to be a global leader in delivering transformative IT
            solutions that empower businesses to achieve their fullest
            potential. By continuously innovating and providing best-in-class
            technology, we aim to be the go-to partner for companies seeking
            long-term digital transformation and growth.
          </p>
        </div>
      </div>

      <div className="sm:pb-40 sm:pl-40 sm:pr-40 sm:pt-10 p-10 flex flex-col">
        <div>
          <h1 className="text-[#4F46E5] text-[80px] font-[700] ">
            Core Values
          </h1>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8 bg-[#111827]">
                  <div className="-mt-6 py-10">
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-x-4 p-10 sm:pb-40 sm:pl-40 sm:pr-40 items-start sm:items-center">
        <div className="w-full sm:w-[60%]">
          <h1 className="text-[#4F46E5] text-[50px] sm:text-[80px] font-[700]">
            Our Expertise
          </h1>
        </div>
        <div className="w-full flex justify-start ">
          <p className="text-[#6B7280] text-base sm:text-[24px] font-[400]">
            With years of experience serving diverse industries, including
            transportation, healthcare, e-commerce, and retail, Universal Perk
            is a trusted partner for businesses looking to leverage technology
            for growth. Our team brings deep technical knowledge combined with a
            creative approach to problem-solving, ensuring we deliver solutions
            that are both effective and easy to use.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}