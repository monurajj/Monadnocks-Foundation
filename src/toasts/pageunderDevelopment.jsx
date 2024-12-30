"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ToastNotification() {
  const [showToast, setShowToast] = useState(true);
  const [text, setText] = useState("");
  const fullMessage =
    "This website is currently under development. Some features may not work as expected. Thank you for your patience!";

  // Auto-dismiss the toast after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  // Typing effect for the message
  useEffect(() => {
    let index = 0;
    let typing = true;

    const typingEffect = setInterval(() => {
      if (typing) {
        setText((prev) => fullMessage.slice(0, index++));
        if (index > fullMessage.length) {
          typing = false;
          index = fullMessage.length;
        }
      } else {
        setText((prev) => fullMessage.slice(0, --index));
        if (index === 0) {
          typing = true;
        }
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showToast && (
        <motion.div
          className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-black flex items-start gap-4">
            <div className="text-2xl">🚧</div>
            <div>
              <h3 className="font-semibold text-lg">Under Development 🚀</h3>
              <p className="text-sm">{text}</p>
            </div>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-4 bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default ToastNotification;
