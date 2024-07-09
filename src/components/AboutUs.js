import { Container, Title, Text } from "@mantine/core";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Container className="my-24 dark:text-white">
      <div className="flex flex-col items-center justify-between px-4 mx-auto md:flex-row max-w-7xl">
        {/* Image section (visible on medium screens and larger) */}
        <div className="hidden w-1/2 pr-8 md:block h-96">
          <Image
            src="/volunteer.jpg"
            alt="Sample Image"
            width={2070}
            height={1380}
            objectFit="cover"
          />
        </div>

        {/* Text section */}
        <div className="w-full ml-10 md:w-1/2">
          <Title
            order={2}
            size="xl"
            className="mb-6 text-4xl font-extrabold text-white underline dark:text-white"
          >
            About Us
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
          <Text className="mb-6 text-lg text-white dark:text-gray-300">
            We have implemented more than 500 projects in over 100 countries
            with funding from government, multilateral donors, and research
            institutes.
          </Text>
        </div>
      </div>
    </Container>
  );
}
