"use client";
import React from "react";
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
  GraduationCap,
  BookMarked,
  Globe,
  Sparkles,
  HandHeart,
  Award,
  Gift,
  PenTool,
  Zap,
  FileText,
  Video,
  Download,
  ClipboardList,
} from "lucide-react";
import { useState } from "react";

import JoinUs from "./joinsUs";

const EducationYouth = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const competitions = {
    upcoming: [],
    ongoing: [
      {
        id: 1,
        title: "🏆 NCM CHAMPIONSHIP",
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
          "https://docs.google.com/forms/d/1G2g-j5YocIoW05TVg351eNFQJJ_97QpxxMwyBdeskys", // Update this link with the actual registration URL
        examDate: "📅 Sunday, 09/03/2025",
        resultDate: "📢 Sunday, 16/03/2025",
        prizeCeremony: "🎉 Sunday, 16/03/2025",
        examCenter: "📍 Rajkiya Krit Madhya Vidyalaya Purhara",
        contact: "📩 contactmonadnocks@gmail.com",
        socialMedia: "📲 Instagram: **_monadnocks_official_**",
        rewards: [
          "🥇 1st Place: Premium Gift Hamper + Certificate of Excellence",
          "🥈 2nd Place: Exclusive Stationery Set + Certificate",
          "🥉 3rd Place: LED Study Lamp + Certificate",
          "🎖️ 4th - 10th Place: Branded Gel Pens + Achievement Certificate",
        ],
      },
    ],
    previous: [],
  };


  const resources = [
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
        {/* Impact Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all">
            <h4 className="text-3xl font-bold text-blue-600 mb-2">250+</h4>
            <p className="text-gray-700">Active Community Members</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-all">
            <h4 className="text-3xl font-bold text-purple-600 mb-2">95%</h4>
            <p className="text-gray-700">Conversion Rate</p>
          </div>
        </div>

        {/* Our Promise to You */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100 transform hover:scale-[1.02] transition-all duration-300 mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Sparkles className="mr-3 h-6 w-6 text-blue-600" />
            Our Promise to You
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700 text-lg">
              <Heart className="mr-3 h-5 w-5 text-red-500" />
              Unwavering support in your educational journey
            </li>
            <li className="flex items-center text-gray-700 text-lg">
              <Star className="mr-3 h-5 w-5 text-yellow-500" />
              Quality resources accessible to all
            </li>
            <li className="flex items-center text-gray-700 text-lg">
              <Users className="mr-3 h-5 w-5 text-blue-500" />A community that
              believes in your potential
            </li>
          </ul>
        </div>

        {/* BPSC Excellence Program */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all mb-12">
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

        {/* Join Our Growing Community */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-semibold">Join Our Growing Community</h3>
          <div className="grid gap-4">
            <button
              className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:scale-[1.02] transition-all group"
              onClick={() =>
                window.open("https://t.me/testseries_bymonadnocks", "_blank")
              }
            >
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-4" />
                <div className="text-left">
                  <h4 className="font-semibold">Join Our Learning Channel</h4>
                  <p className="text-blue-100 text-sm">Join 240+ aspirants</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:scale-[1.02] transition-all group"
              onClick={() =>
                window.open("https://t.me/todayupdatebymonadnocks", "_blank")
              }
            >
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-4" />
                <div className="text-left">
                  <h4 className="font-semibold">Daily Updates Channel</h4>
                  <p className="text-purple-100 text-sm">
                    Never miss important updates
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="flex items-center justify-between p-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:scale-[1.02] transition-all group"
              onClick={() =>
                window.open(
                  "https://whatsapp.com/channel/0029VawLPf0B4hdTzP5QBB39",
                  "_blank"
                )
              }
            >
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-4" />
                <div className="text-left">
                  <h4 className="font-semibold">WhatsApp Community</h4>
                  <p className="text-green-100 text-sm">
                    Connect with fellow aspirants
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Quiz and Competition Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            🎯 Quizzes & Competitions
          </h3>

          {/* Tabs for filtering competitions */}
          <div className="flex space-x-4 mb-6">
            {["upcoming", "ongoing", "previous"].map((tab) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full text-lg font-medium transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-blue-600 hover:bg-blue-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Competition Details */}
          <div className="space-y-6">
            {competitions[activeTab].length === 0 ? (
              <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <p className="text-gray-700 text-lg">
                  🚀 No competitions available
                </p>
              </div>
            ) : (
              competitions[activeTab].map((competition) => (
                <div
                  key={competition.id}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Title and Subtitle */}
                  <h4 className="text-2xl font-bold text-blue-700 mb-2">
                    {competition.title}
                  </h4>
                  <p className="text-lg text-purple-600 mb-4">
                    {competition.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 mb-4">
                    {competition.description}
                  </p>

                  {/* Additional Details */}
                  <div className="space-y-2">
                    {competition.details.map((detail, index) => (
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
                      {competition.categories.map((category, index) => (
                        <li key={index}>{category}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Registration Section with Working Button */}
                  <div className="mt-6">
                    <h5 className="text-xl font-semibold mb-2">
                      📝 Registration
                    </h5>
                    <p className="text-gray-700">{competition.registration}</p>
                    <a
                      href={competition.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
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
                      <li>📝 Exam Date: {competition.examDate}</li>
                      <li>🏆 Result Date: {competition.resultDate}</li>
                      <li>🎉 Prize Ceremony: {competition.prizeCeremony}</li>
                    </ul>
                  </div>

                  {/* Exam Center */}
                  <div className="mt-6">
                    <h5 className="text-xl font-semibold mb-2">
                      📍 Exam Center
                    </h5>
                    <p className="text-gray-700">{competition.examCenter}</p>
                  </div>

                  {/* Rewards Section */}
                  <div className="mt-6">
                    <h5 className="text-xl font-semibold mb-2">🎁 Rewards</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>
                        🏆🥇 1st Place: Trophy + Gold Medal + Certificate of
                        Excellence + Premium Gift Hamper
                      </li>
                      <li>
                        🏆🥈 2nd Place: Trophy + Silver Medal + Certificate +
                        Premium Gift Hamper
                      </li>
                      <li>
                        🏆🥉 3rd Place: Trophy + Bronze Medal + Certificate +
                        Premium Gift Hamper
                      </li>
                      <li>
                        🎖️ 4th - 10th Place: Medal + Achievement Certificate
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Material and Resources Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Study Material & Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
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
                <h4 className="text-xl font-semibold mb-2">{resource.title}</h4>
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
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <Lightbulb className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Career Development
                </h3>
                <p className="text-gray-600">
                  Expert mentorship and professional growth programs
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Skill Enhancement
                </h3>
                <p className="text-gray-600">
                  Comprehensive technical and soft skills training
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <Target className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Competitive Success
                </h3>
                <p className="text-gray-600">
                  Expanding support for various competitive examinations
                </p>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <JoinUs />
        </div>
      </div>
    </div>
  );
};

export default EducationYouth;
