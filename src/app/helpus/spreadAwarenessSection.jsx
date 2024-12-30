"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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
              At Monadnocks, we believe that the power to change the world lies
              within each one of us. By sharing our mission with your network,
              you are becoming an essential part of this movement. Together, we
              can raise awareness for the causes that matter most, from
              community building to environmental sustainability and education
              for all.
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

            <p className="text-lg text-gray-700 mb-6">
              Spreading awareness is one of the most powerful tools we have in
              bringing about change. Every post, every share, and every
              conversation you start can create ripples of positive impact.
              Together, we can help build a future filled with compassion,
              opportunity, and equality.
            </p>

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
