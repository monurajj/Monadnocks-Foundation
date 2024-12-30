"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5"; // Correct icon import
import { useRouter } from "next/navigation"; // Correct for Next.js 13+ App Router (otherwise use next/router for pages directory)
import DonationSection from "./donationSection";
import PartnerSection from "./partnerSection";
import SpreadAwareness from "./spreadAwarenessSection";

const SupportPage = () => {
  const router = useRouter(); // Using the App Router hook

  // Function to navigate back
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="text-black bg-gray-50 min-h-screen">
      <header className="bg-blue-900 text-white py-6 text-center relative">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 text-2xl"
          aria-label="Go back"
        >
          <IoArrowBack />
        </button>
        <h1 className="text-3xl font-bold">Support Monadnocks Foundation</h1>
        <p className="mt-2">
          Help us empower communities and create lasting change.
        </p>
      </header>

      <main className="py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <DonationSection />
          <PartnerSection />
          <SpreadAwareness />
        </div>
      </main>

      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>
          Monadnocks Foundation &copy; {new Date().getFullYear()} | All Rights
          Reserved
        </p>
      </footer>
    </div>
  );
};

export default SupportPage;
