import { Container, SimpleGrid, Card, Text, Title } from "@mantine/core";

const features = [
  { title: "Feature One", description: "Description of feature one." },
  { title: "Feature Two", description: "Description of feature two." },
  // Add more features as needed
];

export default function Features() {
  return (
    <Container py="4rem">
      <Title align="center">Features</Title>
      <SimpleGrid cols={3} spacing="lg" mt="md">
        {features.map((feature, index) => (
          <Card key={index} shadow="sm" padding="lg">
            <Title order={3}>{feature.title}</Title>
            <Text mt="sm">{feature.description}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
