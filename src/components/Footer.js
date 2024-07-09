import React from "react";
import { Container, Text } from "@mantine/core";

const links = [
  { link: "/#hero", label: "Home" },
  { link: "/#about", label: "About Us" },
  { link: "/#services", label: "Services" },
  { link: "/#projects", label: "Projects" },
  { link: "/contact", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="px-10 bg-gray-100 dark:bg-gray-800">
      <Container
        size="lg"
        className="flex flex-col items-center justify-between py-8 md:flex-row"
      >
        <div className="mb-4 md:mb-0">
          <Text className="mt-2 text-gray-600 dark:text-gray-300">
            © 2024 Universal Perk. All rights reserved.
          </Text>
        </div>
        <nav className="flex flex-wrap gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
