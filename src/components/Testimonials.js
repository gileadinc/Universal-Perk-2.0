import { Container, Title, Text, Card, SimpleGrid } from "@mantine/core";

const testimonials = [
  { name: "Client One", feedback: "Amazing service!" },
  { name: "Client Two", feedback: "Highly recommend!" },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <Container py="4rem" style={{ backgroundColor: "#f8f9fa" }}>
      <Title align="center">Testimonials</Title>
      <SimpleGrid cols={2} spacing="lg" mt="md">
        {testimonials.map((testimonial, index) => (
          <Card key={index} shadow="sm" padding="lg">
            <Text size="lg" weight={500}>
              {testimonial.name}
            </Text>
            <Text mt="sm">{testimonial.feedback}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
