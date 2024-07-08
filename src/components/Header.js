"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container, Text } from "@mantine/core";

const links = [
  { link: "/", label: "Home" },
  { link: "/volunteer", label: "Volunteer" },
  { link: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [active, setActive] = useState("/about");

  return (
    <header className="sticky top-0 px-10 bg-white shadow-md dark:bg-gray-800">
      <Container size="md" className="flex items-center justify-between py-4">
        <Text className="text-white">Logo</Text>

        <nav className="hidden space-x-4 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                active === link.link ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
              onClick={() => setActive(link.link)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
