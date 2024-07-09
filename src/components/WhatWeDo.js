import { Container, Title, Text } from "@mantine/core";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <Container className="my-24 dark:text-white">
      <div className="flex flex-col-reverse items-center justify-between px-4 mx-auto max-w-7xl md:flex-row">
        {/* Text section */}
        <div className="w-full md:w-1/2 md:pr-8 md:ml-10">
          <Title
            order={2}
            size="xl"
            className="mb-6 text-4xl font-extrabold text-white underline dark:text-white"
          >
            What we do
          </Title>
          <Text className="mb-6 text-lg text-white dark:text-gray-300">
            Picture Our vision is to increase opportunity and equity for those
            most in need through information technology solutions that protect
            and promote well-being in every community.
          </Text>
          <Text className="mb-6 text-lg text-white dark:text-gray-300">
            Our mission is to improve quality of life through applied research
            and technical assistance to communities by pioneering technological
            solutions that yield measurable results, and that leave no one
            behind.
          </Text>
        </div>

        {/* Image section */}
        <div className="w-full mb-10 md:w-1/2 md:mb-0">
          <div className="hidden md:block">
            <Image
              src="/projects.png"
              alt="Sample Image"
              width={2070}
              height={1380}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
