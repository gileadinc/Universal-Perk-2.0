"use client";
import React, { useState } from "react";
import { Container, Text, Group, Anchor } from "@mantine/core";

const links = [
  { link: "/#hero", label: "Home" },
  { link: "/#about", label: "About Us" },
  { link: "/#services", label: "Services" },
  { link: "/#projects", label: "Projects" },
  { link: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <Container
      style={{
        borderTop: "1px solid #eaeaea",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="p-6 dark:bg-white"
    >
      <Group align="center">
        <Text style={{ fontSize: "0.9rem", color: "#666" }}>
          © 2024 Universal Perk. All rights reserved.
        </Text>
      </Group>
      <header className="sticky top-0 px-10 text-black">
        <Container size="md" className="flex items-center justify-between py-4">
          <Text className="text-gray-900 dark:text-white">Universal Perk</Text>
          <nav className="hidden space-x-4 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.link}
                className={`cursor-pointer text-gray-700 dark:text-black hover:text-gray-900 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium `}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </header>
    </Container>
  );
}
