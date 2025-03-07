"use client";
import React, { useState } from "react";
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
  MessageSquare,  // Replaced ChatAlt2 with MessageSquare
  TrendingUp,
  Sun,
  Moon
} from "lucide-react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 relative">
      {/* Background animated icons container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear"
          }}
          className="flex flex-col items-center space-y-4"
          style={{ height: "200%", width: "100%" }}
        >
          {/* Render a series of icons */}
          <Rocket className="w-8 h-8 text-blue-400 opacity-70" />
          <Users className="w-8 h-8 text-blue-400 opacity-70" />
          <Clock className="w-8 h-8 text-blue-400 opacity-70" />
          <ChartBar className="w-8 h-8 text-blue-400 opacity-70" />
          <Headset className="w-8 h-8 text-blue-400 opacity-70" />
          <QuestionMarkCircle className="w-8 h-8 text-blue-400 opacity-70" />
          <Cog className="w-8 h-8 text-blue-400 opacity-70" />
          <ShieldCheck className="w-8 h-8 text-blue-400 opacity-70" />
          <UserCheck className="w-8 h-8 text-blue-400 opacity-70" />
          <Search className="w-8 h-8 text-blue-400 opacity-70" />
          <ClipboardCheck className="w-8 h-8 text-blue-400 opacity-70" />
          <Calendar className="w-8 h-8 text-blue-400 opacity-70" />
          <CalendarCheck className="w-8 h-8 text-blue-400 opacity-70" />
          <Bell className="w-8 h-8 text-blue-400 opacity-70" />
          <MessageSquare className="w-8 h-8 text-blue-400 opacity-70" />
          <TrendingUp className="w-8 h-8 text-blue-400 opacity-70" />
          <Sun className="w-8 h-8 text-blue-400 opacity-70" />
          <Moon className="w-8 h-8 text-blue-400 opacity-70" />
        </motion.div>
      </div>

      <div className="relative isolate pt-14 overflow-hidden z-10">
        <div className="absolute inset-0 -z-10 opacity-10 pattern-grid-lg text-blue-600/10"></div>

        <div className="py-24 relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center relative">
              <div className="relative inline-block">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Turn Conversations into Conversions with AI-Powered Voice &amp; Chat Agents
                </h1>
                {/* Additional icons positioned around the title */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <Rocket className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <Headset className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <Cog className="w-10 h-10 text-blue-600" />
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
}

export default Hero;