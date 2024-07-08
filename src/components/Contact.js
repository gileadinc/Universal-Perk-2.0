import {
  Container,
  Title,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";

export default function Contact() {
  return (
    <Container py="4rem">
      <Title align="center">Contact Us</Title>
      <form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <TextInput label="Name" placeholder="Your name" required mt="md" />
        <TextInput label="Email" placeholder="Your email" required mt="md" />
        <Textarea label="Message" placeholder="Your message" required mt="md" />
        <Group position="center" mt="xl">
          <Button type="submit">Send Message</Button>
        </Group>
      </form>
    </Container>
  );
}
