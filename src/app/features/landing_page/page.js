"use client";
import Accomplishments from "@/components/accomplishments";
import Client from "@/components/client";
import FeaturesSection from "@/components/features_section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero_section";
import Points from "@/components/points";
import Requirements from "@/components/requirements";
import Tools from "@/components/tools";

import { useRef, useState } from "react";




const LandingPage = () => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Client />
      <FeaturesSection />
      <Requirements />
      <Points />
      <Tools />
      <Accomplishments />
      <Footer />
    </div>
  );
};


export default LandingPage;
