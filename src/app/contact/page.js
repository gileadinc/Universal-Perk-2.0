import { Container, Title, Button, Group } from "@mantine/core";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <>
      <Header />
      <Container className="dark:text-white pb-24 pt-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Text section */}
          <div className="w-1/2">
            <Title
              order={2}
              size="xl"
              className="font-extrabold text-4xl text-gray-900 dark:text-white mb-6 underline"
            >
              Contact Us
            </Title>
            <form className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-700 mb-2"
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
                  className="border border-black pr-3 pl-2 py-3 dark:text-gray-600 w-2/3 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-700 mb-2"
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
                  className="border border-black pr-3 pl-2 py-3 dark:text-gray-600 w-2/3 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-900 dark:text-gray-700 mb-2"
                  htmlFor="message"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="I want to donate ..."
                  required
                  rows="6"
                  className="border border-black pr-3 pl-2 py-3 dark:text-gray-600 w-2/3 rounded-lg resize-none"
                />
              </div>

              <Group justify="flex-end" mt="md">
                <Button className="control dark:bg-blue-500 px-5 py-3 rounded-lg">
                  Send message
                </Button>
              </Group>
            </form>
          </div>
          {/* Image section */}
          <div className="w-1/2 h-96 bg-gray-200 hidden md:block pr-8 rounded-lg shadow-lg ml-10">
            {/* Replace with actual image component */}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
