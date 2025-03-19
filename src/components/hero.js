"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import InquiryModal from "./inquiry_modal";
import {
  Rocket,
  Users,
  Clock,
  BarChart as ChartBar,
  Headset,
  HelpCircle as QuestionMarkCircle,
  Cog,
  ShieldCheck,
  UserCheck,
  Search,
  ClipboardCheck,
  Calendar,
  CalendarCheck,
  Bell,
  MessageSquare,
  TrendingUp,
  Sun,
  Moon
} from "lucide-react";
import VoiceAI from './voice-ai'
import { DeepgramContextProvider } from "../context/DeepgramContextProvider";
import { MicrophoneContextProvider } from "../context/MicrophoneContextProvider";
/**
 * Utility to get a random integer between min and max (inclusive).
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * List of icons to display. Each entry is just the JSX element.
 */
const iconList = [
  <Rocket className="w-24 h-24 text-blue-400 opacity-70" />,
  // <Users className="w-24 h-24 text-blue-400 opacity-70" />,
  // <Clock className="w-24 h-24 text-blue-400 opacity-70" />,
  <ChartBar className="w-24 h-24 text-blue-400 opacity-70" />,
  // <Headset className="w-24 h-24 text-blue-400 opacity-70" />,
  // <QuestionMarkCircle className="w-24 h-24 text-blue-400 opacity-70" />,
  // <Cog className="w-24 h-24 text-blue-400 opacity-70" />,
  // <ShieldCheck className="w-24 h-24 text-blue-400 opacity-70" />,
  // <UserCheck className="w-24 h-24 text-blue-400 opacity-70" />,
  <Search className="w-24 h-24 text-blue-400 opacity-70" />,
  <ClipboardCheck className="w-24 h-24 text-blue-400 opacity-70" />,
  // <Calendar className="w-24 h-24 text-blue-400 opacity-70" />,
  <CalendarCheck className="w-24 h-24 text-blue-400 opacity-70" />,
  <Bell className="w-24 h-24 text-blue-400 opacity-70" />,
  // <MessageSquare className="w-24 h-24 text-blue-400 opacity-70" />,
  <TrendingUp className="w-24 h-24 text-blue-400 opacity-70" />,
  // <Sun className="w-24 h-24 text-blue-400 opacity-70" />,
  <Moon className="w-24 h-24 text-blue-400 opacity-70" />
];


/**
 * Single animated icon that floats from bottom to top continuously.
 * We randomize its horizontal position and speed for a lively effect.
 */
function AnimatedIcon({ icon }) {
  // Random horizontal position (0% to 90%)
  const randomX = getRandomInt(0, 90);
  // Animation duration from 6 to 10 seconds
  const randomDuration = getRandomInt(6, 10);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${randomX}%`, bottom: 0 }}
      // Animate upward off the screen indefinitely
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      transition={{
        repeat: Infinity,
        duration: randomDuration,
        ease: "linear"
      }}
    >
      {icon}
    </motion.div>
  );
}

/**
 * TypewriterText Component
 * Rotates through an array of phrases with a typewriter effect.
 */
function TypewriterText() {
  const phrases = [
    "Lead Generation",
    "Customer Support",
    "Staffing Automation",
    "Market Research",
    "Content Creation",
    "Virtual Assistant",
    "Business Intelligence",
    "Real Estate Agent",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;
    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        // Pause at the end of the phrase
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 15);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <span className="text-blue-600">
      {displayedText}
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </span>
  );
}

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iconsToDisplay, setIconsToDisplay] = useState([]);
  const iconIndexRef = useRef(0);

  /**
   * Add the first icon immediately (index=0).
   * Then, every 2 minutes, add the next icon until we reach the end of the array.
   */
  useEffect(() => {
    // Show the first icon right away
    setIconsToDisplay([iconList[0]]);
    iconIndexRef.current = 1;

    // Interval for adding a new icon every 2 minutes (120000 ms).
    // Reduce this to e.g. 5000 ms for quicker testing.
    const interval = setInterval(() => {
      if (iconIndexRef.current < iconList.length) {
        // Add next icon from the list
        setIconsToDisplay((prev) => [...prev, iconList[iconIndexRef.current]]);
        iconIndexRef.current += 1;
      } else {
        // If we reached the end, clear interval or reset.
        clearInterval(interval);
      }
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br mt-[-8px] from-blue-50 to-white relative">
      {/* Container for floating icons. 
          50px from the bottom to not overlap the CTA buttons. 
          Full height so they float top-to-bottom. */}
      <div
        className="absolute inset-x-0 pointer-events-none z-0"
        style={{ bottom: "50px", top: 0 }}
      >
        {iconsToDisplay.map((icon, idx) => (
          <AnimatedIcon key={idx} icon={icon} />
        ))}
      </div>
      <>
        <DeepgramContextProvider>  
          <MicrophoneContextProvider>
          <VoiceAI />
          </MicrophoneContextProvider>
        </DeepgramContextProvider>
      </>

      <div className="relative isolate pt-14 overflow-hidden z-10">
        <div className="absolute inset-0 -z-10 opacity-10 pattern-grid-lg text-blue-600/10"></div>

        <div className="py-24 relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center relative">
              <div className="relative inline-block">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Custom AI That Sells, Supports, and Scales With You.
                </h1>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                   {" "}
                </h1>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <TypewriterText />
                </h1>
                {/* Decorative icons around the title */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  {/* <Rocket className="w-10 h-10 text-blue-600" /> */}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  {/* <Headset className="w-10 h-10 text-blue-600" /> */}
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                  {/* <Users className="w-10 h-10 text-blue-600" /> */}
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                  {/* <Cog className="w-10 h-10 text-blue-600" /> */}
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Close more deals, cut response times, and slash costs—24/7 automation that sounds human and works non-stop.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-[10rem] bg-blue-600 cursor-pointer px-20 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get a Quote
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-[10rem] border-2 border-blue-600 cursor-pointer px-20 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Talk to Us
                </button>
                <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
