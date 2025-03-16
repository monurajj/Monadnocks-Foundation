"use client"
import React, { useState } from "react";

const WhatsAppBulkSender = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Your WhatsApp number and recipient numbers
  const yourNumber = "7541062514"; // Replace with your number
  const recipientNumbers = ["8581974299", "9122110892"]; // Add more numbers if needed

  // Function to handle sending messages
  const handleSendMessages = async () => {
    setLoading(true);

    // Iterate through the recipient numbers and send messages
    for (let i = 0; i < recipientNumbers.length; i++) {
      const number = recipientNumbers[i];
      const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
        message
      )}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Wait for 2 seconds before opening the next tab
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    setLoading(false);
    alert("Messages sent successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        WhatsApp Bulk Message Sender
      </h1>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
        />
      </div>
      <button
        onClick={handleSendMessages}
        disabled={loading || !message}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Messages"}
      </button>
    </div>
  );
};

export default WhatsAppBulkSender;
