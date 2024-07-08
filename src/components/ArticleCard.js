import {
  Card,
  Text,
  Badge,
  Group,
  Center,
  Avatar,
  Button,
  useMantineTheme,
  Title,
} from "@mantine/core";

export function ArticleCard() {
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <>
      <Title className="text-center text-3xl text-white mt-10">
        Our Stories
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First column */}

        <div className="col-span-1">
          <Card
            withBorder
            radius="md"
            className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 m-10"
          >
            <Badge
              className="absolute top-2 right-2 text-gray-500"
              variant="gradient"
              gradient={{ from: "yellow", to: "red" }}
            >
              outstanding
            </Badge>

            <Text
              className="block mt-4 mb-2 font-semibold text-lg text-gray-900 dark:text-white"
              component="a"
              {...linkProps}
            >
              Resident Evil Village review
            </Text>

            <Text className="text-sm text-gray-700 dark:text-gray-400 leading-6 mb-4">
              This is a brief description of the first article.
            </Text>

            <Group justify="between" className="text-center items-center">
              <Center className="mb-10 items-center">
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                  size={24}
                  radius="xl"
                  className="mr-2"
                />
              </Center>
              <Button
                {...linkProps}
                component="a"
                size="sm"
                radius="sm"
                variant="outline"
                color="blue"
                className="bg-white py-3 px-10 rounded-lg mx-auto text-center"
              >
                View
              </Button>
            </Group>
          </Card>
        </div>

        {/* Second column */}
        <div className="col-span-1">
          <Card
            withBorder
            radius="md"
            className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 m-10"
          >
            <Badge
              className="absolute top-2 right-2 text-gray-500"
              variant="gradient"
              gradient={{ from: "yellow", to: "red" }}
            >
              featured
            </Badge>

            <Text
              className="block mt-4 mb-2 font-semibold text-lg text-gray-900 dark:text-white"
              component="a"
              {...linkProps}
            >
              Second Article Title
            </Text>

            <Text className="text-sm text-gray-700 dark:text-gray-400 leading-6 mb-4">
              This is a brief description of the second article.
            </Text>

            <Group justify="between" className="items-center text-center">
              <Center className="items-center mb-10">
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                  size={24}
                  radius="xl"
                  className="mr-2"
                />
              </Center>
              <Button
                {...linkProps}
                component="a"
                size="sm"
                radius="sm"
                variant="outline"
                color="blue"
                className="bg-white py-3 px-10 rounded-lg mx-auto text-center"
              >
                View
              </Button>
            </Group>
          </Card>
        </div>

        {/* Third column */}
        <div className="col-span-1">
          <Card
            withBorder
            radius="md"
            className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 m-10"
          >
            <Badge
              className="absolute top-2 right-2 text-gray-500"
              variant="gradient"
              gradient={{ from: "yellow", to: "red" }}
            >
              recommended
            </Badge>

            <Text
              className="block mt-4 mb-2 font-semibold text-lg text-gray-900 dark:text-white"
              component="a"
              {...linkProps}
            >
              Third Article Title
            </Text>

            <Text className="text-sm text-gray-700 dark:text-gray-400 leading-6 mb-4">
              This is a brief description of the third article.
            </Text>

            <Group justify="between" className="items-center text-center">
              <Center className="items-center mb-10">
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
                  size={24}
                  radius="xl"
                  className="mr-2"
                />
              </Center>
              <Button
                {...linkProps}
                component="a"
                size="sm"
                radius="sm"
                variant="outline"
                color="blue"
                className="bg-white py-3 px-10 rounded-lg mx-auto text-center"
              >
                View
              </Button>
            </Group>
          </Card>
        </div>

        {/* Fourth column */}
        <div className="col-span-1">
          <Card
            withBorder
            radius="md"
            className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 m-10"
          >
            <Badge
              className="absolute top-2 right-2 text-gray-500"
              variant="gradient"
              gradient={{ from: "yellow", to: "red" }}
            >
              recommended
            </Badge>

            <Text
              className="block mt-4 mb-2 font-semibold text-lg text-gray-900 dark:text-white"
              component="a"
              {...linkProps}
            >
              Fourth Article Title
            </Text>

            <Text className="text-sm text-gray-700 dark:text-gray-400 leading-6 mb-4">
              This is a brief description of the fourth article.
            </Text>

            <Group justify="between" className="items-center text-center">
              <Center className="items-center mb-10">
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
                  size={24}
                  radius="xl"
                  className="mr-2"
                />
              </Center>
              <Button
                {...linkProps}
                component="a"
                size="sm"
                radius="sm"
                variant="outline"
                color="blue"
                className="bg-white py-3 px-10 rounded-lg mx-auto text-center"
              >
                View
              </Button>
            </Group>
          </Card>
        </div>
      </div>
    </>
  );
}
