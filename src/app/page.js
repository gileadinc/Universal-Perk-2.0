"use client"
import LandingPage from "./features/landing_page/page";
import ValueProposition from "./features/value_proposition/page"; // Import the new component

export default function Home() {
  return (
    <main className="pt-24 overflow-x-hidden">
      <LandingPage />
      <ValueProposition /> {/* Add ValueProposition component */}
    </main>
  );
}