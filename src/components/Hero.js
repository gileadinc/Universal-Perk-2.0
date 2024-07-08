import { Container, Title, Text, Button } from "@mantine/core";

export default function Hero() {
  return (
    <div
      style={{ backgroundColor: "#4C6EF5", color: "white", padding: "4rem 0" }}
    >
      <Container>
        <Title align="center">Welcome to Universal Perk</Title>
        <Text align="center" size="lg" mt="md">
          Empowering Non-Profits and International Organizations with
          Cutting-Edge Technology
        </Text>
        <Button
          variant="filled"
          color="yellow"
          size="md"
          mt="xl"
          mx="auto"
          display="block"
        >
          Get Started
        </Button>
      </Container>
    </div>
  );
}
