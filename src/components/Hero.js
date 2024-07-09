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
            className="mb-4 text-4xl font-extrabold leading-tight text-white dark:text-white"
          >
            Data-driven sustainable development
            <span className="block mt-2 text-2xl text-white dark:text-blue-500">
              Better data. Better lives.
            </span>
          </Title>
          <Text className="mb-6 text-lg text-white dark:text-gray-300">
            Universal Perk is a technology company dedicated to providing
            services for charities and non-profit organizations. We are governed
            by a Board of Trustees and managed by our President, Executive
            Director, Treasurer, and Secretary. Meet our team.
          </Text>
          <Text className="mb-6 text-lg text-white dark:text-gray-300">
            We have a global network of over 30 senior advisors and technology
            partners supported by software labs in New York, New Delhi, and
            Singapore.
          </Text>

          {/* Button group */}
          <Group className="mt-8 sm:flex">
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
