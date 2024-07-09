import { Container, Title, Button, Group } from "@mantine/core";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Donate() {
  return (
    <>
      <Container className="pt-20 pb-24 dark:text-white">
        <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
          <div className="hidden w-1/2 pr-8 rounded-lg shadow-lg h-96 md:block">
            <Image
              src="/volunteer.jpg"
              alt="Sample Image"
              width={2070}
              height={1380}
              objectFit="cover"
            />
          </div>
          <div className="w-1/2 ml-10">
            <Title
              order={2}
              size="xl"
              className="mb-6 text-4xl font-extrabold text-gray-900 underline dark:text-white"
            >
              Donation Form
            </Title>
            <form className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-700 dark:text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-2/3 py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-700 dark:text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-2/3 py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-700 dark:text-gray-700"
                  htmlFor="name"
                >
                  Amount you want to donate
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="0911..."
                  required
                  className="w-2/3 py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-gray-700 dark:text-gray-700"
                  htmlFor="name"
                >
                  Bank Account
                </label>
                <input
                  type="number"
                  id="bank"
                  name="bank"
                  placeholder="1675713267..."
                  required
                  className="w-2/3 py-3 pl-2 pr-3 border border-black rounded-lg dark:text-gray-600"
                />
              </div>

              <Group justify="flex-end" mt="md">
                <Button className="px-5 py-3 rounded-lg control dark:bg-blue-500">
                  Donate
                </Button>
              </Group>
            </form>
          </div>
          {/* Image section */}
        </div>
      </Container>
      <Footer />
    </>
  );
}
