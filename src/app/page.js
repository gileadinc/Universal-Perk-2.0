import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import StatsGrid from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <StatsGrid />
      {/* <Testimonials />
      <Contact /> */}
      <Footer />
    </div>
  );
}
