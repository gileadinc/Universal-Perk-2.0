"use client"
import LandingPage from "./features/landing_page/page";
import ValueProposition from "@/components/value_proposition"; // Placeholder import
import ProcessSection from "@/components/process_section"; // Placeholder import

export default function Home() {
  return (
    <main className="pt-24 overflow-x-hidden">
      <LandingPage />
      <ValueProposition /> 
      <ProcessSection />
    </main>
  );
}