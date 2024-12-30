"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InformationCircleIcon } from "@heroicons/react/solid";

function DevelopmentNotice() {
  const [showNotice, setShowNotice] = useState(false);

  // Automatically hide the notice after 10 seconds
  useEffect(() => {
    if (showNotice) {
      const timer = setTimeout(() => {
        setShowNotice(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showNotice]);

  return (
    <div>
      {/* Button to toggle the notice */}
      <button
        onClick={() => setShowNotice(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Notice
      </button>

      {/* Popup notice */}
      {showNotice && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <InformationCircleIcon className="w-12 h-12 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                Under Development 🚧
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              This website is currently under development. Some features may not
              work as expected. Thank you for your patience!
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowNotice(false)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default DevelopmentNotice;
