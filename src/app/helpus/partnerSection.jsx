"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function PartnerSection() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Partner With Us
      </h2>
      <p className="mt-4 text-center text-gray-600">
        We welcome businesses, organizations, and individuals to partner with
        us. Together, we can create a lasting impact.
      </p>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-500"
        >
          Learn More About Partnership
        </button>
      </div>

      {/* Modal for partnership details */}
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

            <h3 className="text-2xl font-semibold text-center mb-6 text-blue-600">
              Why Partner with Monadnocks Foundation?
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              Our foundation is more than just a charity – we’re a movement
              towards a future where everyone has access to opportunities,
              education, and hope. Partnering with us means you’re supporting
              this vision and helping to bring positive change to the world.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-xl text-blue-600">🤝</span>
                <span className="text-gray-700">
                  Create a Positive Social Impact
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-blue-600">🌱</span>
                <span className="text-gray-700">
                  Grow Your Brand While Giving Back
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-blue-600">💡</span>
                <span className="text-gray-700">
                  Innovate Together for a Brighter Tomorrow
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-blue-600">❤️</span>
                <span className="text-gray-700">
                  Be Part of a Community that Cares
                </span>
              </li>
            </ul>

            {/* Write us an email */}
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700">
                Have questions or want to discuss a partnership?{" "}
              </p>
              <p className="text-lg text-gray-700">
                Directly reach us at:{" "}
                <a
                  href="mailto:contactmonadnocks@gmail.com"
                  className="text-blue-600"
                >
                  contactmonadnocks@gmail.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500"
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

export default PartnerSection;
