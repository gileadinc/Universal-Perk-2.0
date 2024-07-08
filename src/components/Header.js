"use client";
import { useState } from "react";
import { Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
        active === link.link ? "bg-gray-200 dark:bg-gray-700" : ""
      }`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 px-10">
      <Container size="md" className="flex items-center justify-between py-4 ">
        <Text>Logo</Text>

        <nav className="hidden md:flex space-x-4">{items}</nav>

        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className="md:hidden"
        />
      </Container>
    </header>
  );
}
