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

export function ArticleCard({ articles }) {
  const linkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <>
      <Title className="text-center text-3xl text-white mt-10">
        Our Stories
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="col-span-1">
            <Card
              withBorder
              radius="md"
              className="relative bg-white dark:bg-white shadow-md rounded-lg p-4 m-10"
            >
              <Badge
                className="absolute top-2 right-2 text-gray-500"
                variant="gradient"
                gradient={{ from: "yellow", to: "red" }}
              >
                {article.badge}
              </Badge>

              <Text
                className="block mt-4 mb-2 font-semibold text-lg text-gray-900 dark:text-gray-600"
                component="a"
                href={article.link}
                {...linkProps}
              >
                {article.title}
              </Text>

              <Text className="text-sm text-gray-700 dark:text-gray-400 leading-6 mb-4">
                {article.description}
              </Text>

              <Group justify="between" className="text-center items-center">
                <Center className="mb-10 items-center">
                  <Avatar
                    src={article.avatar}
                    size={24}
                    radius="xl"
                    className="mr-2"
                  />
                </Center>
                <Button
                  href={article.link}
                  component="a"
                  size="sm"
                  radius="sm"
                  variant="outline"
                  color="blue"
                  className="bg-green-400 text-gray-900 py-3 px-10 rounded-lg mx-auto text-center"
                  {...linkProps}
                >
                  View
                </Button>
              </Group>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

// Use the component and pass the articles data
export default function App() {
  return <ArticleCard articles={articles} />;
}
