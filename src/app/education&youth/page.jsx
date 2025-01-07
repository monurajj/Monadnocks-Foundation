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
} from "lucide-react";
import { useState } from "react";

import JoinUs from "./joinsUs";

const EducationYouth = () => {
      
  return (
    <div className="text-black  mx-auto p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
        {/* Hero Section */}
        <div className="text-center p-12 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Transforming Lives Through Education
            </h2>
            <p className="text-xl text-blue-50">
              Join us in building a future where every dream has the power to
              become reality
            </p>
          </div>
        </div>

        <div className="p-8">
          {/* Vision Statement */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <HandHeart className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Empowering Dreams, Enriching Lives
            </h3>
            <p className="text-gray-700 text-center text-lg max-w-3xl mx-auto leading-relaxed">
              At Monadnocks Foundation, we believe in the transformative power
              of education. Together, we're building bridges to opportunities
              and fostering a community where every aspirant finds the support
              they need to succeed.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group">
                <BookMarked className="h-8 w-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-all" />
                <h4 className="text-xl font-semibold mb-3">Impact Today</h4>
                <p className="text-gray-600">
                  240+ lives are being transformed through our BPSC programs and
                  community initiatives
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group">
                <Target className="h-8 w-8 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-all" />
                <h4 className="text-xl font-semibold mb-3">Vision Forward</h4>
                <p className="text-gray-600">
                  Creating comprehensive career development ecosystems for
                  tomorrow's leaders
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group">
                <Globe className="h-8 w-8 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-all" />
                <h4 className="text-xl font-semibold mb-3">Global Impact</h4>
                <p className="text-gray-600">
                  Building a community that transcends boundaries and transforms
                  lives
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="relative group">
                <img
                  src="/educationYouthImage.png"
                  alt="Transforming Lives Through Education"
                  className="rounded-xl shadow-xl w-full hover:shadow-2xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                  <p className="text-white p-6 text-lg font-medium">
                    Empowering futures through quality education and mentorship
                  </p>
                </div>
              </div>

              {/* Added: Impact Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-all">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">
                    250+
                  </h4>
                  <p className="text-gray-700">Active Community Members</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-all">
                  <h4 className="text-3xl font-bold text-purple-600 mb-2">
                    95%
                  </h4>
                  <p className="text-gray-700">Conversion Rate</p>
                </div>
              </div>

              {/* Added: Success Stories */}
              {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                  Recent Success Stories
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      "Monadnocks Foundation's support was crucial in my BPSC
                      journey. Their guidance made all the difference."
                    </p>
                    <p className="text-blue-600 font-medium mt-2">
                      - Rahul K., BPSC 2024
                    </p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      "The community support and daily updates helped me stay
                      focused and motivated."
                    </p>
                    <p className="text-blue-600 font-medium mt-2">
                      - Priya M., BPSC 2023
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100 transform hover:scale-[1.02] transition-all duration-300">
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
                    <Users className="mr-3 h-5 w-5 text-blue-500" />A community
                    that believes in your potential
                  </li>
                </ul>
              </div>

              {/* Added: Upcoming Events */}
              {/* <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Mock Test Series</h4>
                    <p className="text-gray-600">Starting from 15th January</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">Career Counseling Session</h4>
                    <p className="text-gray-600">20th January, 2024</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium">
                      Interview Preparation Workshop
                    </h4>
                    <p className="text-gray-600">25th January, 2024</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
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
                      <h4 className="font-semibold mb-1">
                        Interactive Learning
                      </h4>
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

              {/* Community Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Join Our Growing Community
                </h3>
                <div className="grid gap-4">
                  <button
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:scale-[1.02] transition-all group"
                    onClick={() =>
                      window.open(
                        "https://t.me/testseries_bymonadnocks",
                        "_blank"
                      )
                    }
                  >
                    <div className="flex items-center">
                      <MessageCircle className="h-6 w-6 mr-4" />
                      <div className="text-left">
                        <h4 className="font-semibold">Join Our Learning Channel</h4>
                        <p className="text-blue-100 text-sm">
                          Join 240+ aspirants
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:scale-[1.02] transition-all group"
                    onClick={() =>
                      window.open(
                        "https://t.me/todayupdatebymonadnocksp",
                        "_blank"
                      )
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
            </div>
          </div>

          {/* Future Vision */}
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
            <JoinUs/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationYouth;
