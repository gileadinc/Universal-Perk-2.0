import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import StatsGrid from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ArticleCard } from "@/components/ArticleCard";

const articles = [
  {
    title: "First Article Title",
    description: "This is a brief description of the first article.",
    badge: "outstanding",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    link: "https://mantine.dev",
  },
  {
    title: "Second Article Title",
    description: "This is a brief description of the second article.",
    badge: "featured",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    link: "https://mantine.dev",
  },
  {
    title: "Third Article Title",
    description: "This is a brief description of the third article.",
    badge: "recommended",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    link: "https://mantine.dev",
  },
  {
    title: "Fourth Article Title",
    description: "This is a brief description of the fourth article.",
    badge: "recommended",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    link: "https://mantine.dev",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <StatsGrid />
      <Testimonials />
      <ArticleCard articles={articles} />
      <Footer />
    </div>
  );
}
