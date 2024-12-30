import { ChevronDown, ArrowRight, Users, Heart, Handshake } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"; // For animations

function SupportUs() {
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
    <section id="getInvolved" className="py-20 px-4 relative">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-blue-800/95"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Support Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Volunteer Card */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl font-semibold text-center mb-6 text-white">
              Become a Volunteer
            </h3>
            <ul className="space-y-4 mb-6 text-white">
              {[
                "Join community programs",
                "Participate in events",
                "Lead initiatives",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleJoinButtonClick}
              className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-lg transition-colors"
              aria-label="Join as Volunteer"
            >
              Join as Volunteer
            </button>
          </div>

          {/* Support Card */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <h3 className="text-xl font-semibold text-center mb-6 text-white">
              Support Our Cause
            </h3>
            <ul className="space-y-4 mb-6 text-white">
              {["Make a donation", "Partner with us", "Spread awareness"].map(
                (item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
            <Link
              href="/helpus"
              className="block w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-lg text-center transition-colors"
              aria-label="Support Now"
            >
              Support Now
            </Link>
          </div>
        </div>
      </div>

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
    </section>
  );
}

export default SupportUs;
