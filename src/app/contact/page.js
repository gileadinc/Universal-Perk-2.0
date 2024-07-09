"use client";
import React, { useState } from "react";
import { Container, Title, Button, Group, Text } from "@mantine/core";
import Footer from "@/components/Footer";
import Image from "next/image";

const links = [
  { link: "/#hero", label: "Home" },
  { link: "/#about", label: "About Us" },
  { link: "/#services", label: "Services" },
  { link: "/#projects", label: "Projects" },
  { link: "/contact", label: "Contact Us" },
];

export default function ContactUs() {
  const [active, setActive] = useState("/contact");
  return (
    <>
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
      <Container className="pt-20 pb-24 dark:text-white">
        <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
          {/* Text section */}
          <div className="w-full md:w-1/2">
            <Title
              order={2}
              size="xl"
              className="mb-6 text-4xl font-extrabold text-gray-900 underline dark:text-white"
            >
              Contact Us
            </Title>
            <form className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-full px-2 mb-4 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-gray-700 dark:text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    className="w-full py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                  />
                </div>
                <div className="w-full px-2 mb-4 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-gray-700 dark:text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="w-full py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-700 dark:text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-700 dark:text-gray-700"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Universal Perks"
                  required
                  className="w-full py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-700 dark:text-gray-700"
                  htmlFor="jobRole"
                >
                  Job Role
                </label>
                <input
                  type="text"
                  id="jobRole"
                  name="jobRole"
                  placeholder="Marketing Manager"
                  required
                  className="w-full py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-900 dark:text-gray-700"
                  htmlFor="message"
                >
                  Project description
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="I want to donate ..."
                  required
                  rows="6"
                  className="w-full py-3 pl-2 pr-3 border border-black rounded-lg resize-none dark:text-gray-600"
                />
              </div>
              <Group justify="flex-end" mt="md">
                <Button className="px-5 py-3 rounded-lg control dark:bg-blue-500">
                  Send message
                </Button>
              </Group>
            </form>
          </div>
          {/* Image section */}
          <div className="hidden w-full pr-8 ml-10 rounded-lg shadow-lg md:w-1/2 h-96 md:block">
            <Image
              src="/home.jpg"
              alt="Sample Image"
              width={2070}
              height={1380}
              objectFit="cover"
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
