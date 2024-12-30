"use client"
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
// import LogoImage from "src/assets/plantationImage.jpeg";
import Image from "next/image";
import Link from "next/link";
import VisionSection from "./visionSection";
import SupportUs from "./supportUs";
import OurKeyInitative from "./ourKeyInitiative";
import ImpactStats from "./impactStats";
import ContactUs from "./contactUs";
import DevelopmentNotice from "@/toggles/pageunderDevelopment";
import {
  ChevronDown,
  ArrowRight,
  Mail,
  MapPin,
  Users,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  

  return (
    <div
      id="home"
      className="text-black min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
        <Navbar/>

        <DevelopmentNotice/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src=""
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
        </div>
        <div className="max-w-4xl mx-auto z-10">
          <h1
            className={`text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Monadnocks Foundation
          </h1>
          <p
            className={`text-2xl text-gray-600 mb-8 transition-opacity duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Inspiring Change, Building Tomorrow
          </p>
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-opacity duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-colors">
              Join Our Mission
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 text-gray-400 z-10" />
      </section>

      {/* Impact Stats */}
      {/* <ImpactStats></ImpactStats> */}

      {/* Vision Section with Image */}
      <VisionSection />

      {/* Initiatives Section */}
      <OurKeyInitative />

      {/* Support Section with Background Image */}
      <SupportUs />

      {/* Contact Section */}
      <ContactUs />
    </div>
  );
};

export default HomePage;
