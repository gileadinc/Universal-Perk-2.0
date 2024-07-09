import { Container, Title, Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Container size="md" className="p-16 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Content section */}
        <div className="max-w-lg mb-8 md:mb-0 md:mr-8">
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
          <Group className="mt-8">
            <Link href="/contact">
              <Button
                radius="xl"
                size="lg" // Adjusted size for better readability
                className="w-full md:w-auto mb-4 md:mb-0 md:mr-4"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                radius="xl"
                size="lg" // Adjusted size for better readability
                variant="outline"
                className="w-full md:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </Group>
        </div>

        {/* Image section */}
        <div className="hidden w-full md:w-1/2 h-96 md:block">
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
