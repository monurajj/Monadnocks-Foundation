"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import LogoImage from "../../assets/logoImage01.jpeg";

import {
  Phone,
  Mail,
  Globe,
  Heart,
  TreePine,
  Rocket,
  Languages,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

// Multilingual Content with Image Paths
const content = {
  english: {
    pageTitle: "Monadnocks Foundation",
    tagline: "Inspiring Change, Building Tomorrow",
    missionStatement:
      "We believe in creating positive change through sustainable community development. Our mission extends beyond traditional charity – we focus on empowering individuals and communities to build a better tomorrow through innovative solutions and active participation.",
    teamTitle: "Our Core Team",
    teamQuote:
      "These are our core team for Monadnocks Foundation, and we are a team of passionate people.",
    joinMission: "Join Our Mission",
    joinMissionDescription:
      "Together, we can create meaningful impact. Whether you're a potential partner, supporter, or future team member, your contribution matters.",
    getInvolved: "Get Involved",
    FormLink:
      "https://docs.google.com/forms/d/1aAfb9WJhaylzrG2Qcv86lN-bQVtySsrWhZP6smdAtek/viewform?edit_requested=true",
    teamMembers: [
      {
        name: "Karambeer Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "karmbeerk16@gmail.com",
        phone: "+91 74610 41054",
        image: "karambeersir.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "not available",
      },
      {
        name: "Avinash Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "kravinash198@gmail.com",
        phone: "+91 9113491977",
        image: "avinashkumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/worldofavii/",
      },

      {
        name: "Rajiv Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "kravinash198@gmail.com",
        phone: "+91 6202252272",
        image: "rajivkumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "not available",
      },
      {
        name: "Ranbeer Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "ranbeersingh4560@gmail.com",
        phone: "+91 9113491977",
        image: "Ranbeerkumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/ranbeer8661/",
      },
      {
        name: "Karan Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "karankumar36985241@gmail.com",
        phone: "+91 6204453942",
        image: "karankumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/karankushwaha83/",
      },
      {
        name: "Rahul kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "divyaprakashkumar72@gmail.com",
        phone: "+91 7479929663",
        image: "rahulkumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/ssf_prakash/",
      },
      {
        name: "Mitul Raj",
        title: "Core Member of Monadnocks Foundation",
        email: "mitulrazz@gmail.com",
        phone: "+91 9122110892",
        image: "mitulrajj01.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/mitul_rajj13/",
      },
      {
        name: "Binit Kishor",
        title: "Core Member of Monadnocks Foundation",
        email: "binitkishor289@gmail.com",
        phone: "+91 8002919435",
        image: "binitkumarr.png",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/binit_kishor_09/",
      },
      {
        name: "Vivek Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "vassu6939@gmail.com",
        phone: "+91 78701 33227",
        image: "vivekkumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "not available",
      },
      {
        name: "Ranjan Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "ranjanku28896@gmail.com",
        phone: "+91 9631947073",
        image: "ranjankumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "not available",
      },
      {
        name: "Mantosh Kumar",
        title: "Core Member of Monadnocks Foundation",
        email: "mantoshpurhara672@gmail.com",
        phone: "+91 7004718392",
        image: "mantoshkumar.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/mantoshkumar5600/",
      },
      {
        name: "Archana Kumari",
        title: "Core Member of Monadnocks Foundation",
        email: "Kumariarchna903gmail.com",
        phone: "+91 7479727885",
        image: "archanakumari.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "https://www.instagram.com/verma7260gudiya/",
      },
      {
        name: "Sonali Kumari",
        title: "Core Member of Monadnocks Foundation",
        email: "Kumarisalonigmail.com",
        phone: "+91 8434727333",
        image: "sonalikumari.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "not available",
      },
      {
        name: "Anshu Kumari",
        title: "Core Member of Monadnocks Foundation",
        email: "anhukumari7280@gmail.com",
        phone: "+91 7280011106",
        image: "anshukumari.jpeg",
        bio: "No bio available",
        passion: "No bio available",
        InstaLink: "not available",
      },
    ],
  },
  hindi: {
    pageTitle: "मोनाडनॉक्स फाउंडेशन",
    tagline: "परिवर्तन को प्रेरित करना, कल को बनाना",
    missionStatement:
      "हम सतत सामुदायिक विकास के माध्यम से सकारात्मक परिवर्तन लाने में विश्वास रखते हैं। हमारा मिशन पारंपरिक दान से आगे है - हम नवीन समाधानों और सक्रिय भागीदारी के माध्यम से व्यक्तियों और समुदायों को सशक्त बनाने पर ध्यान केंद्रित करते हैं।",
    teamTitle: "हमारी मुख्य टीम",
    teamQuote:
      "ये मोनाडनॉक्स फाउंडेशन की हमारी मुख्य टीम है, और हम जुनूनी लोगों की एक टीम हैं।",
    joinMission: "हमारे मिशन में शामिल हों",
    joinMissionDescription:
      "साथ में, हम सार्थक प्रभाव बना सकते हैं। चाहे आप संभावित साझेदार, समर्थक या भविष्य के टीम सदस्य हैं, आपका योगदान महत्वपूर्ण है।",
    getInvolved: "शामिल हों",
    FormLink:
      "https://docs.google.com/forms/d/1aAfb9WJhaylzrG2Qcv86lN-bQVtySsrWhZP6smdAtek/viewform?edit_requested=true",
    teamMembers: [
      {
        name: "करमबीर कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "karmbeerk16@gmail.com",
        phone: "+91 74610 41054",
        image: "KarambeerImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "not available",
      },

      {
        name: "अविनाश कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "kravinash198@gmail.com",
        phone: "+91 9113491977",
        image: "AvinashImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/worldofavii/",
      },

      {
        name: "राजीव कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "kravinash198@gmail.com",
        phone: "+91 6202252272",
        image: "RajivImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "not available",
      },
      {
        name: "रणबीर कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "ranbeersingh4560@gmail.com",
        phone: "+91 9113491977",
        image: "RanbeerImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/ranbeer8661/",
      },
      {
        name: "करन कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "karankumar36985241@gmail.com",
        phone: "+91 6204453942",
        image: "KaranImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/karankushwaha83/",
      },
      {
        name: "राहुल कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "divyaprakashkumar72@gmail.com",
        phone: "+91 7479929663",
        image: "RahulImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/ssf_prakash/",
      },
      {
        name: "मितुल राज",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "mitulrazz@gmail.com",
        phone: "+91 9122110892",
        image: "MitulImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/mitul_rajj13/",
      },
      {
        name: "बिनीत किशोर",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "binitkishor289@gmail.com",
        phone: "+91 8002919435",
        image: "BinitImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/binit_kishor_09/",
      },
      {
        name: "विवेक कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "vassu6939@gmail.com",
        phone: "+91 78701 33227",
        image: "VivekImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "not available",
      },
      {
        name: "रणजन कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "ranjanku28896@gmail.com",
        phone: "+91 9631947073",
        image: "RanjanImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "not available",
      },
      {
        name: "मंतोष कुमार",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "mantoshpurhara672@gmail.com",
        phone: "+91 7004718392",
        image: "MantoshImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/mantoshkumar5600/",
      },
      {
        name: "अर्चना कुमारी",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "Kumariarchna903gmail.com",
        phone: "+91 7479727885",
        image: "ArchanaImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "https://www.instagram.com/verma7260gudiya/",
      },
      {
        name: "सोनाली कुमारी",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "Kumarisalonigmail.com",
        phone: "+91 8434727333",
        image: "SonaliImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "not available",
      },
      {
        name: "अंशु कुमारी",
        title: "मोनाडनॉक्स फाउंडेशन के कोर सदस्य",
        email: "anhukumari7280@gmail.com",
        phone: "+91 7280011106",
        image: "AnshuImage",
        bio: "कोई विवरण उपलब्ध नहीं",
        passion: "कोई विवरण उपलब्ध नहीं",
        InstaLink: "not available",
      },
    ],
  },
};

const TeamMemberCard = ({
  member,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  language,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`w-full max-w-sm mx-auto transform transition-all 
        bg-white rounded-xl shadow-lg
        ${isHovered ? "scale-105 shadow-2xl" : "scale-100"}
        hover:scale-105 hover:shadow-2xl
        relative overflow-hidden`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Team Member Content */}
      <div className="p-6">
        <div className="flex flex-col items-center">
          <div
            className={`
            w-36 h-36 rounded-full border-4 transition-all duration-500
            ${isHovered ? "border-blue-500 rotate-6" : "border-green-500"}
            overflow-hidden mb-4`}
          >
            {!imageLoaded && (
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            )}
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover transform scale-110 hover:scale-125 transition-transform ${
                imageLoaded ? "block" : "hidden"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 transition-colors">
              {member.name}
            </h3>
            <p
              className={`
              text-sm font-medium transition-all duration-500
              ${isHovered ? "text-blue-600" : "text-gray-600"}
            `}
            >
              {member.title}
            </p>
          </div>
        </div>

        <div
          className={`
          text-sm text-gray-700 mb-4 text-center mt-4
          transition-all duration-500 
          ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        `}
        >
          {isHovered && (
            <div className="flex justify-center items-center mb-3 space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <TreePine className="w-5 h-5 text-green-600" />
              <Rocket className="w-5 h-5 text-blue-500" />
            </div>
          )}
          <p className="italic">{member.bio}</p>
          {isHovered && (
            <p className="mt-2 font-semibold text-blue-700">
              {language === "english" ? "Passion: " : "जुनून: "}
              {member.passion}
            </p>
          )}
        </div>

        <div className="space-y-2 border-t pt-4 mt-4">
          <div className="flex items-center justify-center text-gray-700">
            <Mail className="mr-2 w-5 h-5" />
            <a
              href={`mailto:${member.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              {member.email}
            </a>
          </div>
          <div className="flex items-center justify-center text-gray-700">
            <Phone className="mr-2 w-5 h-5" />
            <span>{member.phone}</span>
          </div>
          <div className="flex items-center justify-center">
            {member.InstaLink === "not available" ? (
              <span className="text-gray-500 flex items-center">
                <FaInstagram className="w-5 h-5 mr-2" />
                No Insta link available
              </span>
            ) : (
              <a
                href={member.InstaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors flex items-center"
              >
                <FaInstagram className="w-5 h-5 mr-2" />
                {language === "english" ? "Insta Profile" : "Insta Profile"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const [language, setLanguage] = useState("english");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "hindi" : "english"
    );
  };

  const currentContent = content[language];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Language Toggle Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Languages className="mr-2 w-5 h-5" />
            {language === "english" ? "हिंदी" : "English"}
          </button>
        </div>

        {/* Mission Statement Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Globe className="w-12 h-12 text-blue-600 mr-4" />
            <Rocket className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {currentContent.pageTitle}
          </h1>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            {currentContent.tagline}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {currentContent.missionStatement}
          </p>
        </div>

        {/* Team Grid Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {currentContent.teamTitle}
          </h2>
          <p className="text-xl text-gray-700 italic">
            {currentContent.teamQuote}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
              language={language}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-blue-50 p-12 rounded-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.joinMission}
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            {currentContent.joinMissionDescription}
          </p>
          <a
            href={currentContent.FormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {currentContent.getInvolved}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
