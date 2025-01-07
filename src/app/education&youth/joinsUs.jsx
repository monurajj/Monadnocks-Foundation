"use client";
import React from "react";
import {
  BookOpen,
  MessageCircle,
  Star,
  Trophy,
  Calendar,
  Target,
  ArrowRight,
  Rocket,
  Heart,
  Users,
  Lightbulb,
  GraduationCap,
  BookMarked,
  Globe,
  Sparkles,
  HandHeart,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

function JoinUs() {
  const [showModal, setShowModal] = useState(false);

  const handleJoinButtonClick = () => {
    setShowModal(true);
  };

  const handleContinueClick = () => {
    try {
      // Redirect to the Google Form
      window.location.href =
        "https://docs.google.com/forms/d/1aAfb9WJhaylzrG2Qcv86lN-bQVtySsrWhZP6smdAtek/viewform?edit_requested=true";
    } catch (error) {
      console.error("Redirection failed: ", error);
    }
  };

  return (
    <div>
      {/* Modal Section */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg w-11/12 max-w-lg"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-600">
              You’re Just One Step Away!
            </h3>
            <p className="text-lg text-center mb-6 text-gray-700">
              By filling out the form, you’ll be joining a passionate community
              that works towards making a lasting impact. You’ll be connected
              with our team within 24 hours to kickstart your journey with the
              Monadnocks Foundation.
            </p>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-red-500" />
              <span className="text-xl text-gray-800 font-semibold">
                Join our caring community
              </span>
            </div>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Handshake className="w-8 h-8 text-green-500" />
              <span className="text-xl text-gray-800 font-semibold">
                Make a meaningful impact
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleContinueClick}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Continue to Form"
              >
                Continue
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
                aria-label="Close Modal"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Final Call to Action */}
      <div className="text-center p-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Your Success, Our Mission
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
          Join us in our mission to create positive change. Together, we're
          building a future where education empowers, opportunities abound, and
          success knows no bounds.
        </p>
        {/* <button
          onClick={handleJoinButtonClick}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all"
        >
          Start Your Journey Today
        </button> */}
      </div>
    </div>
  );
}

export default JoinUs;
