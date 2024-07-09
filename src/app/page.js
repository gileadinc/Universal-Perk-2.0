"use client";
import React, { useState } from "react";
import Link from "next/link";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import StatsGrid from "../components/Stats";
import Services from "../components/Services";
import WhatWeDo from "../components/WhatWeDo";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Container, Text } from "@mantine/core";
import Image from "next/image"; // Import Image from Next.js

const links = [
  { link: "#hero", label: "Home" },
  { link: "#about", label: "About Us" },
  { link: "#services", label: "Services" },
  { link: "#projects", label: "Projects" },
  { link: "/contact", label: "Contact Us" },
];

export default function Home() {
  const [active, setActive] = useState("#hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <header className="sticky top-0 px-4 bg-white shadow-md md:px-10 dark:bg-gray-800">
        <Container size="md" className="flex items-center justify-between py-4">
          <Link href="#hero">
            <Image src="/logo2.png" alt="Logo" width={120} height={40} />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-4 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className={`cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                  active === link.link ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
                onClick={() => setActive(link.link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute inset-x-0 bg-white shadow-md md:hidden top-16 dark:bg-gray-800">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.link}
                  className={`block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700`}
                  onClick={() => {
                    setActive(link.link);
                    toggleMobileMenu();
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </Container>
      </header>

      {/* Conditionally render Hero section */}
      <section id="hero" className="pt-14 md:hidden">
        <Hero />
      </section>
      <section id="hero" className="hidden pt-14 md:block">
        <Hero />
      </section>

      <section id="about" className="pt-14">
        <AboutUs />
      </section>

      <StatsGrid />

      <section id="services" className="pt-14">
        <Services />
      </section>

      <WhatWeDo />

      <Testimonials />

      <section id="projects" className="pt-14">
        <Projects />
      </section>

      <section id="contact" className="pt-14">
        <Footer />
      </section>
    </div>
  );
}
