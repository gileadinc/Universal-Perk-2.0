import { Container, Text, Group, Anchor } from "@mantine/core";

export default function Footer() {
  return (
    <Container
      style={{
        borderTop: "1px solid #eaeaea",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="p-6 dark:bg-white"
    >
      <Group align="center">
        <Text style={{ fontSize: "0.9rem", color: "#666" }}>
          © 2024 Universal Perk. All rights reserved.
        </Text>
      </Group>
      <Group align="center">
        <Anchor href="/about" style={{ marginRight: "1rem" }}>
          About Us
        </Anchor>
        <Anchor href="/volunteer" style={{ marginRight: "1rem" }}>
          Volunteer
        </Anchor>
        <Anchor href="/contact">Contact Us</Anchor>
      </Group>
    </Container>
  );
}
