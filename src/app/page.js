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

const links = [
  { link: "#hero", label: "Home" },
  { link: "#about", label: "About Us" },
  { link: "#services", label: "Services" },
  { link: "#projects", label: "Projects" },
  { link: "/contact", label: "Contact Us" },
];

export default function Home() {
  const [active, setActive] = useState("#hero");

  return (
    <div>
      <header className="sticky top-0 px-10 bg-white shadow-md dark:bg-gray-800">
        <Container size="md" className="flex items-center justify-between py-4">
          <Text className="text-gray-900 dark:text-white">Universal Perk</Text>
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
        </Container>
      </header>

      <section id="hero" className="pt-14">
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
