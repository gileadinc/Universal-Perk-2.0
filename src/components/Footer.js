import { Container, Text, Group, Anchor } from "@mantine/core";

export default function Footer() {
  return (
    <Container py="4rem" style={{ borderTop: "1px solid #eaeaea" }}>
      <Group position="apart">
        <Text>© 2024 Universal Perk. All rights reserved.</Text>
        <Group>
          <Anchor href="/about">About Us</Anchor>
          <Anchor href="/services">Services</Anchor>
          <Anchor href="/privacy">Privacy Policy</Anchor>
        </Group>
      </Group>
    </Container>
  );
}
