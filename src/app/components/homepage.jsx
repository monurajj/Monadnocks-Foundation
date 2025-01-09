"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import Link from "next/link";
import VisionSection from "./visionSection";
import SupportUs from "./supportUs";
import OurKeyInitative from "./ourKeyInitiative";
import ImpactStats from "./impactStats";
import ContactUs from "./contactUs";
import DevelopmentNotice from "@/toasts/pageunderDevelopment";
import { ChevronDown, X } from "lucide-react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const ImageArray = [
      "/educationAndYouth.jpeg",
    "/environmental.jpeg",
    "/sports.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);
    // Show updates popup after 2 seconds
    const timer = setTimeout(() => setShowUpdates(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % ImageArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const LatestUpdates = () => (
    <div
      className={`fixed top-24 right-4 z-50 transition-all duration-300 ${
        showUpdates ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-80 p-4 bg-white shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Latest Updates</h3>
          <button
            onClick={() => setShowUpdates(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/educationAndYouth.jpeg"
              alt="Education & Youth"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h4 className="font-semibold text-blue-600">
            Education & Youth Program
          </h4>
          <p className="text-sm text-gray-600">
            Join our latest initiative supporting young minds. New programs
            starting soon!
          </p>
          <div className="flex justify-center">
            <a
              href={"/education&youth"}
              className="p-4 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Join Education & Youth
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="home"
      className="text-black min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
      <Navbar />
      <DevelopmentNotice />
      <LatestUpdates />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={ImageArray[activeImageIndex]}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/90"></div>
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
            className={`transition-opacity duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-colors">
              Join Our Mission
            </button> */}

          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {ImageArray.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                activeImageIndex === index ? "bg-blue-600 w-4" : "bg-gray-400"
              }`}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>

        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 text-gray-400 z-10" />
      </section>

      <VisionSection />
      <OurKeyInitative />
      <SupportUs />
      {/* <ContactUs /> */}
    </div>
  );
};

export default HomePage;
