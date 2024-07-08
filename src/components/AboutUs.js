import { Container, Title, Text } from "@mantine/core";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Container className="dark:text-white my-24">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Image section */}
        <div className="w-1/2 h-96 hidden md:block pr-8">
          <Image
            src="/volunteer.jpg"
            alt="Sample Image"
            width={2070}
            height={1380}
            objectFit="cover"
          />
        </div>

        {/* Text section */}
        <div className="w-1/2 ml-10">
          <Title
            order={2}
            size="xl"
            className="font-extrabold text-4xl text-gray-900 dark:text-white mb-6 underline"
          >
            About Us
          </Title>
          <Text className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            NNN is a non-profit organisation registered in the USA in 1963. We
            are governed by a Board of Trustees and managed by our President,
            Executive Director, Treasurer, and Secretary. Meet our team.
          </Text>
          <Text className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We have a global network of over 120 senior advisors and technology
            partners supported by software labs in New York, New Delhi, and
            Singapore.
          </Text>
          <Text className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We have implemented more than 1650 projects in over 130 countries
            with funding from government, multilateral donors, and research
            institutes.
          </Text>
        </div>
      </div>
    </Container>
  );
}
