"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const initiatives = [
    {
      title: "Environmental Conservation",
      description: "100 Trees Plantation Challenge & Green Initiatives",
      image: "/images/environment.jpg",
    },
    {
      title: "Education & Youth",
      description: "Skill Development & Career Guidance",
      image: "/images/education.jpg",
    },
    {
      title: "Sports Program",
      description: "Inclusive Sports & Fitness Activities",
      image: "/images/sports.jpg",
    },
    {
      title: "Women Empowerment",
      description: "Leadership & Skill Enhancement",
      image: "/images/women.jpg",
    },
    {
      title: "Cultural Programs",
      description: "Street Plays & Community Events",
      image: "/images/culture.jpg",
    },
  ];

  return (
    <div className="mt-[-30px] text-black min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Monadnocks Foundation
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Inspiring Change, Building Tomorrow
          </p>
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Join Our Mission
            </button>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div> */}
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 text-gray-400" />
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Monadnocks Foundation, we believe in creating positive change
            through sustainable community development. Our mission extends
            beyond traditional charity – we focus on empowering individuals and
            communities to build a better tomorrow.
          </p>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Key Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Be Part of the Change</h2>
          <p className="text-xl mb-8">
            Together, we can make a difference in our communities
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Become a Volunteer <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Support Our Cause
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Website:</span> www.Monadnocks.in
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span>{" "}
              contactmonadnocks@gmail.com
            </p>
          </div>
          <div className="mt-8">
            <p className="text-gray-600">
              Follow us on social media for updates and news about our
              initiatives
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
