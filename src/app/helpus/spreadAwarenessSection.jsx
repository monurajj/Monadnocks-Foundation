"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"; // Correct import for Font Awesome icons

function SpreadAwareness() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Spread Awareness
      </h2>
      <p className="mt-4 text-center text-gray-600">
        Help us reach more people! Share our mission with your friends, family,
        and followers on social media.
      </p>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-500"
        >
          Share on Social Media
        </button>
      </div>

      {/* Modal for spreading awareness details */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg w-11/12 max-w-lg relative"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2"
            >
              <span className="text-2xl">×</span>
            </button>

            <h3 className="text-2xl font-semibold text-center mb-6 text-green-600">
              Why Spread Awareness for Monadnocks?
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              Spreading awareness is one of the most powerful tools we have in
              bringing about change. Every post, every share, and every
              conversation you start can create ripples of positive impact.
              Together, we can help build a future filled with compassion,
              opportunity, and equality.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-xl text-green-600">🌍</span>
                <span className="text-gray-700">Make a Global Impact</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-green-600">❤️</span>
                <span className="text-gray-700">
                  Help Empower Communities in Need
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-green-600">📚</span>
                <span className="text-gray-700">
                  Support Education and Awareness Programs
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-green-600">🤝</span>
                <span className="text-gray-700">
                  Join a Network of Like-Minded Changemakers
                </span>
              </li>
            </ul>

            {/* Social Media Sharing Buttons */}
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.monadnocks.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
                aria-label="Share on Facebook"
              >
                <FaFacebookF size={32} />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https://www.monadnocks.org&text=Join%20Monadnocks%20in%20making%20a%20difference!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
                aria-label="Share on Twitter"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://www.instagram.com/?url=https://www.monadnocks.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
                aria-label="Share on Instagram"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.monadnocks.org&title=Join%20Monadnocks%20in%20making%20a%20difference!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedinIn size={32} />
              </a>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowModal(false)}
                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-500"
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

export default SpreadAwareness;
