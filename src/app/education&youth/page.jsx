"use client";
import React, { useState } from "react";
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
  FileText,
  Video,
  Download,
  ClipboardList,
} from "lucide-react";
import JoinUs from "./joinsUs";
import Link from "next/link";

const EducationYouth = () => {
  const [activeSection, setActiveSection] = useState("ncm"); // Fixed useState declaration

  // NCM Championship Data
  const ncmChampionship = {
    title: "🏆 NCM CHAMPIONSHIP 2025",
    subtitle: "The Ultimate Quiz Battle!",
    description: "🚀 Organized by **MONADNOCKS FOUNDATION**",
    details: [
      "🎯 Calling All Young Minds!",
      "💡 Are you ready to challenge yourself?",
      "🏅 Compete with the best and win exciting prizes!",
    ],
    categories: [
      "🦸 Ninja - (Grades 6th-8th)",
      "⚔️ Challengers - (Grades 9th-10th)",
      "🎓 Masters - (Grades 11th & Above)",
    ],
    registration: "✅ Absolutely Free",
    registrationLink:
      "https://docs.google.com/forms/d/1G2g-j5YocIoW05TVg351eNFQJJ_97QpxxMwyBdeskys",
    examDate: "📅 Sunday, 09/03/2025",
    resultDate: "📢 Sunday, 16/03/2025",
    prizeCeremony: "🎉 Sunday, 16/03/2025",
    examCenter: "📍 Rajkiya Krit Madhya Vidyalaya Purhara",
    contact: "📩 contactmonadnocks@gmail.com",
    socialMedia: "📲 Instagram: **_monadnocks_official_**",
    rewards: [
      "🥇 1st Place: not available",
      "🥈 2nd Place: not available",
      "🥉 3rd Place: not available",
      "🎖️ 4th - 10th Place: not available",
    ],
  };

  // BPSC Preparation Data
  const bpscResources = [
    {
      id: 1,
      title: "BPSC Study Material",
      type: "PDF",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      link: "#",
    },
    {
      id: 2,
      title: "Video Lectures",
      type: "Videos",
      icon: <Video className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      id: 3,
      title: "Previous Year Papers",
      type: "PDF",
      icon: <ClipboardList className="h-6 w-6 text-green-500" />,
      link: "#",
    },
    {
      id: 4,
      title: "Daily Quiz PDFs",
      type: "PDF",
      icon: <Download className="h-6 w-6 text-yellow-500" />,
      link: "#",
    },
  ];

  return (
    <div className="bg-white text-black rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300">
      {/* Hero Section */}
      <div className="text-center p-12 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">
            Transforming Lives Through Education
          </h2>
          <p className="text-xl text-blue-50">
            Empowering futures through quality education and mentorship
          </p>
        </div>
      </div>

      <div className="p-8">
        {/* Section Toggle Buttons */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveSection("ncm")}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
              activeSection === "ncm"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            NCM Championship 2025
          </button>
          <button
            onClick={() => setActiveSection("bpsc")}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
              activeSection === "bpsc"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            BPSC Preparation
          </button>
        </div>

        {/* NCM Championship Section */}
        {activeSection === "ncm" && (
          <div className="space-y-8">
            {/* NCM Championship Details */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                {ncmChampionship.title}
              </h3>
              <p className="text-lg text-purple-600 mb-4">
                {ncmChampionship.subtitle}
              </p>
              <p className="text-gray-700 mb-4">
                {ncmChampionship.description}
              </p>

              {/* Additional Details */}
              <div className="space-y-2">
                {ncmChampionship.details.map((detail, index) => (
                  <p key={index} className="text-gray-700">
                    ✅ {detail}
                  </p>
                ))}
              </div>

              {/* Who Can Participate */}
              <div className="mt-6">
                <h5 className="text-xl font-semibold mb-2">
                  👥 Who Can Participate?
                </h5>
                <ul className="list-disc list-inside text-gray-700">
                  {ncmChampionship.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul>
              </div>

              {/* Registration Section */}
              <div className="mt-6">
                <h5 className="text-xl font-semibold mb-2">📝 Registration</h5>
                <p className="text-gray-700">{ncmChampionship.registration}</p>
                <a
                  href={ncmChampionship.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 bg-gray-300 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
                >
                  Register Now 🚀
                </a>
              </div>

              {/* Important Dates */}
              <div className="mt-6">
                <h5 className="text-xl font-semibold mb-2">
                  📅 Important Dates
                </h5>
                <ul className="list-disc list-inside text-gray-700">
                  <li>📝 Exam Date: {ncmChampionship.examDate}</li>
                  <li>🏆 Result Date: {ncmChampionship.resultDate}</li>
                  <li>🎉 Prize Ceremony: {ncmChampionship.prizeCeremony}</li>
                </ul>
              </div>

              {/* Exam Center */}
              <div className="mt-6">
                <h5 className="text-xl font-semibold mb-2">📍 Exam Center</h5>
                <p className="text-gray-700">{ncmChampionship.examCenter}</p>
              </div>

              {/* Rewards Section */}
              <div className="mt-6">
                <h5 className="text-xl font-semibold mb-2">🎁 Rewards</h5>
                <ul className="list-disc list-inside text-gray-700">
                  {ncmChampionship.rewards.map((reward, index) => (
                    <li key={index}>{reward}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Result Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                🎉 NCM Championship 2025 Results
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h4 className="text-2xl font-bold text-blue-700 mb-4">
                  Results Are Out!
                </h4>
                <p className="text-gray-700 mb-6">
                  Check the results of the NCM Championship 2025 and celebrate
                  the achievements of our young champions.
                </p>
                <Link
                  href="/ncmresult"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
                >
                  View Results 🚀
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* BPSC Preparation Section */}
        {activeSection === "bpsc" && (
          <div className="space-y-8">
            {/* BPSC Excellence Program */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Trophy className="mr-3 h-6 w-6 text-blue-600" />
                BPSC Excellence Program
                <span className="ml-3 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Featured
                </span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all">
                  <BookOpen className="mr-3 h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      Comprehensive Study Support
                    </h4>
                    <p className="text-gray-600">
                      Daily curated content and personalized guidance
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all">
                  <Calendar className="mr-3 h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Interactive Learning</h4>
                    <p className="text-gray-600">
                      Daily practice quizzes and mock tests
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all">
                  <Target className="mr-3 h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Rewards Program</h4>
                    <p className="text-gray-600">
                      Weekly competitions with exciting rewards
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Study Material & Resources */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Study Material & Resources
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bpscResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center mb-4">
                      {resource.icon}
                      <span className="ml-2 text-sm text-gray-600">
                        {resource.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {resource.title}
                    </h4>
                    <a
                      href={resource.link}
                      className="text-blue-600 hover:underline"
                    >
                      Download Now <ArrowRight className="inline h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Future Vision and JoinUs sections */}
        <div className="mt-16 space-y-8">
          <div className="text-center p-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Building Tomorrow's Leaders
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
              Our commitment extends beyond BPSC preparation. We're developing
              comprehensive programs that nurture leadership, innovation, and
              excellence across all domains.
            </p>
          </div>

          {/* Final Call to Action */}
          <JoinUs />
        </div>
      </div>
    </div>
  );
};

export default EducationYouth;
