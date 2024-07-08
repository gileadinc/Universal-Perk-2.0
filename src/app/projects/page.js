import React from "react";
import {
  Card,
  Text,
  Badge,
  Group,
  Center,
  Avatar,
  Button,
  Title,
} from "@mantine/core";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Project = [
  {
    title: "First Project Title",
    description: "This is a brief description of the first Project.",
    badge: "outstanding",
    avatar: "/projects.png",
    link: "https://mantine.dev",
  },
  {
    title: "Second Project Title",
    description: "This is a brief description of the second Project.",
    badge: "featured",
    avatar: "/projects.png",
    link: "https://mantine.dev",
  },
  {
    title: "Third Project Title",
    description: "This is a brief description of the third Project.",
    badge: "On Progress",
    avatar: "/projects.png",
    link: "https://mantine.dev",
  },
  {
    title: "Fourth Project Title",
    description: "This is a brief description of the fourth Project.",
    badge: "Featured",
    avatar: "/projects.png",
    link: "https://mantine.dev",
  },
];

export default function Projects() {
  const linkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <>
      <Header />
      <Title className="my-10 text-3xl text-center text-white">
        Our Projects
      </Title>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {Project.map((Project, index) => (
          <div key={index} className="col-span-1">
            <Card
              withBorder
              radius="md"
              className="relative p-4 m-10 bg-white rounded-lg shadow-md dark:bg-white"
            >
              <Badge
                className="absolute text-gray-500 top-2 right-2"
                variant="gradient"
                gradient={{ from: "yellow", to: "red" }}
              >
                {Project.badge}
              </Badge>

              <Text
                className="block mt-4 mb-2 text-lg font-semibold text-gray-900 dark:text-gray-600"
                component="a"
                href={Project.link}
                {...linkProps}
              >
                {Project.title}
              </Text>

              <Text className="mb-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
                {Project.description}
              </Text>

              <Group justify="between" className="items-center text-center">
                <Center className="items-center mb-10">
                  <Avatar
                    src={Project.avatar}
                    size={24}
                    radius="xl"
                    className="mr-2"
                  />
                </Center>
                <Button
                  href={Project.link}
                  component="a"
                  size="sm"
                  radius="sm"
                  variant="outline"
                  color="blue"
                  className="px-10 py-3 mx-auto text-center text-gray-900 bg-green-400 rounded-lg"
                  {...linkProps}
                >
                  View
                </Button>
              </Group>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
