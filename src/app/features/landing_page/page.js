"use client";
import Footer from "@/components/footer";
import Header from "@/components/header_section";
import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Projects from "@/components/projects";
import Schedule from "@/components/schedule";
import Contact from "@/components/contact_us";
import Features from "@/components/features";
import ValueProposition from "@/components/value_proposition";
import ProcessSection from "@/components/process_section";

const LandingPage = () => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        <Hero />
        <Clients />
        <ValueProposition />
        <ProcessSection />
        <Features />
        <Projects />
        <Schedule />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
