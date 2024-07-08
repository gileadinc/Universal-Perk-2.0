import { Container, Title, Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Container size="md" className="p-16 text-white">
      <div className="flex justify-between items-center">
        {/* Content section */}
        <div className="max-w-lg mr-8">
          <Title
            order={1}
            className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
          >
            Data-driven sustainable development
            <span className="block text-2xl mt-2 text-blue-100 dark:text-blue-900">
              Better data. Better lives.
            </span>
          </Title>
          <Text className="text-gray-600 dark:text-gray-400 mb-6">
            CSF is a nonprofit organization established in 1963 that engages
            with communities to build information technology solutions that lead
            to good development outcomes sustained by reliable development
            processes.
          </Text>

          <Text className="text-gray-600 dark:text-gray-400 mb-6">
            We increase people’s choices through innovations that harness the
            power of data to benefit communities economically, socially, and
            environmentally, in support of the 2030 Agenda.
          </Text>

          {/* Button group */}
          <Group className="mt-8">
            <Link href="/donate">
              <Button
                radius="xl"
                size="md"
                className="flex-1 md:flex-none bg-blue-500 rounded-3xl py-3 px-5"
              >
                Donate
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                radius="xl"
                size="md"
                className="flex-1 md:flex-none ml-4 border border-gray-500 py-3 px-5 rounded-3xl"
              >
                Contact Us
              </Button>
            </Link>
          </Group>
        </div>

        {/* Image section */}
        <div className="w-1/2 h-96 hidden md:block">
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
