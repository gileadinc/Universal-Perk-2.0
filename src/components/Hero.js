import { Container, Title, Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Container size="md" className="p-16 text-white">
      <div className="flex items-center justify-between">
        {/* Content section */}
        <div className="max-w-lg mr-8">
          <Title
            order={1}
            className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Data-driven sustainable development
            <span className="block mt-2 text-2xl text-blue-500 dark:text-blue-500">
              Better data. Better lives.
            </span>
          </Title>
          <Text className="mb-6 text-gray-600 dark:text-gray-400">
            NNN is a nonprofit organization established in 1963 that engages
            with communities to build information technology solutions that lead
            to good development outcomes sustained by reliable development
            processes.
          </Text>

          <Text className="mb-6 text-gray-600 dark:text-gray-400">
            We increase people’s choices through innovations that harness the
            power of data to benefit communities economically, socially, and
            environmentally, in support of the 2030 Agenda.
          </Text>

          {/* Button group */}
          <Group className="mt-8">
            <Link href="/contact">
              <Button
                radius="xl"
                size="md"
                className="flex-1 px-5 py-3 bg-blue-500 md:flex-none rounded-3xl"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                radius="xl"
                size="md"
                className="flex-1 px-5 py-3 ml-4 border border-gray-500 md:flex-none rounded-3xl"
              >
                Contact Us
              </Button>
            </Link>
          </Group>
        </div>

        {/* Image section */}
        <div className="hidden w-1/2 h-96 md:block">
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
  );
}
