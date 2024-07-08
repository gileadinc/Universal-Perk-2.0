import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import StatsGrid from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ArticleCard } from "@/components/ArticleCard";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <StatsGrid />
      <ArticleCard />
      <Footer />
    </div>
  );
}
