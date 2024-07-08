// src/app/page.js
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
