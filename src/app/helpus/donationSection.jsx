"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoImage from "../../assets/qrcode.jpeg";
import emailjs from "emailjs-com";

function DonationSection() {
  // States for modal, form data, thank you message, and loading state
  const [showModal, setShowModal] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    canUseDetails: false,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start the loading spinner

    try {
      // Validate form fields
      if (!formData.name || !formData.amount) {
        alert("Please fill in all the fields!");
        setIsLoading(false);
        return;
      }

      const result = await emailjs.send(
        "service_krgqzjr",
        "template_hvb36wu",
        {
          name: formData.name,
          amount: formData.amount,
          canUseDetails: formData.canUseDetails ? "Yes" : "No",
        },
        "PUYULeXlwF1-NbWZN"
      );

      console.log(result.text);
      setThankYouMessage(true);
      setShowModal(false);

      // Automatically hide the thank-you message after 10 seconds
      setTimeout(() => {
        setThankYouMessage(false);
      }, 10000);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }

  };


  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Make a Donation
      </h2>
      <p className="mt-4 text-center text-gray-600">
        Your support helps us fund critical programs and initiatives. Every
        donation, big or small, makes a difference.
      </p>

      <div className="mt-8 flex justify-center">
        <Image
          src={LogoImage}
          alt="Payment QR Code"
          className="w-48 h-48 object-contain border border-gray-300 rounded-lg"
        />
      </div>

      <p className="mt-4 text-center text-gray-600">
        Scan the QR code to donate directly!
      </p>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-lg transition-colors"
        >
          Send Us Love ❤️
        </button>
      </div>

      {/* Modal for Donation Information */}
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

            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-600">
              Share Your Donation Details
            </h3>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="amount">
                  Amount Donated
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="canUseDetails"
                  id="canUseDetails"
                  checked={formData.canUseDetails}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="canUseDetails" className="text-gray-800">
                  Can we use your details to increase awareness?
                </label>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            className="border-t-4 border-blue-600 w-16 h-16 rounded-full border-solid animate-spin"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>
      )}

      {/* Thank You Message */}
      {thankYouMessage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg w-11/12 max-w-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-4 text-green-600">
              Thank You for Your Support! 🎉
            </h3>
            <p className="text-lg text-center mb-6 text-gray-700">
              We appreciate your generosity and look forward to the positive
              impact your donation will make!
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setThankYouMessage(false)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
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

export default DonationSection;
