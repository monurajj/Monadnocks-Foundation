"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Leaf,
  Award,
  Users,
  Music,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Heart,
} from "lucide-react";

const AboutPage = () => {
  const { scrollY } = useScroll();
  const heroControls = useAnimation();

  // Parallax effect for hero section
  useEffect(() => {
    return scrollY.onChange((latest) => {
      heroControls.start({ y: latest / 3 });
    });
  }, [scrollY, heroControls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gray-100 text-gray-900 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative w-full h-screen flex items-center justify-center text-center p-6 overflow-hidden">
        <motion.div animate={heroControls} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90" />
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          className="max-w-4xl text-white z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.8 },
            }}
            className="mx-auto mb-6 relative"
          >
            <Heart className="w-16 h-16 mx-auto text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.8 },
            }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Monadnocks Foundation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.8, duration: 0.8 },
            }}
            className="text-lg md:text-xl font-light"
          >
            Inspiring Change, Building Tomorrow
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.2, duration: 0.8 },
            }}
            className="mt-8"
          >
            <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0.3, 0.5, 0],
            transition: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-10 left-0 right-0 mx-auto text-center text-white"
        >
          <ArrowRight className="w-6 h-6 mx-auto transform rotate-90" />
          <p className="text-sm font-light">Scroll to explore</p>
        </motion.div>
      </section>

      {/* Our Vision with Reveal Animation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-16 px-6 md:px-20 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 transform -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full opacity-30 transform translate-x-24 translate-y-24" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-semibold mb-6 inline-block relative">
            Our Vision
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 absolute bottom-0 left-0"
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We believe in creating positive change through sustainable community
            development. Our mission extends beyond traditional charity – we
            focus on empowering individuals and communities to build a better
            tomorrow through innovative solutions and active participation.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Key Initiatives with Card Animations */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold text-center mb-3"
          >
            Our Key Initiatives
          </motion.h2>

          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-10"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white p-8 rounded-xl shadow-lg text-center relative overflow-hidden group"
              >
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -8 }}
                  className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  {index === 0 && <BookOpen className="w-8 h-8" />}
                  {index === 1 && <Leaf className="w-8 h-8" />}
                  {index === 2 && <Award className="w-8 h-8" />}
                  {index === 3 && <Users className="w-8 h-8" />}
                  {index === 4 && <Music className="w-8 h-8" />}
                </motion.div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {initiative.title}
                </h3>
                <p className="text-gray-600">{initiative.description}</p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-3 right-3"
                >
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline Section with Advanced Animations */}
      <section className="py-16 px-6 md:px-20 text-center bg-gray-100 relative">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-2"
          >
            Our Journey
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-500 mx-auto mb-10"
          />

          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-blue-500 h-full"
            />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`mb-16 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center relative`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="md:w-1/2 relative z-10 mb-6 md:mb-0"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white z-10">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mt-6">
                      {event.title}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-3">
                      {event.date}
                    </p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </motion.div>

                <div className="md:w-1/2 relative">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: index % 2 === 0 ? 3 : -3,
                    }}
                    className="w-12 h-12 bg-white rounded-full border-4 border-blue-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    className="relative"
                  >
                    <div className="max-w-xs mx-auto relative overflow-hidden rounded-lg shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20" />
                      <Image
                        src={event.image || "/images/placeholder.jpg"}
                        alt={event.title}
                        width={400}
                        height={250}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved with Particle Effect */}
      <section className="py-16 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500" />

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100 + "%"],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5,
            }}
            className="absolute w-4 h-4 rounded-full bg-white opacity-20"
          />
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 text-white max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-6">
            Get Involved
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Join us in making a difference. Whether you volunteer, donate, or
            spread awareness, your contribution counts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              <span>Donate Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:bg-opacity-10 transition-all flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              <span>Volunteer</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section (New) */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold text-center mb-12"
          >
            Connect With Us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl shadow-md bg-gray-50 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Community Avenue, Monadnock City, MC 12345
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl shadow-md bg-gray-50 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">info@monadnocksfoundation.org</p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl shadow-md bg-gray-50 text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const initiatives = [
  {
    title: "Education & Youth",
    description:
      "Skill development programs, mentoring, and career guidance for the next generation.",
  },
  {
    title: "Environmental Conservation",
    description:
      "100 Trees Plantation Challenge & sustainable initiatives for a greener planet.",
  },
  {
    title: "Sports Program",
    description:
      "Inclusive sports & fitness activities promoting health and teamwork.",
  },
  {
    title: "Women Empowerment",
    description:
      "Leadership workshops & skill enhancement programs for women in our communities.",
  },
  {
    title: "Cultural Programs",
    description:
      "Street plays, art exhibitions & community events celebrating diversity.",
  },
];

const timelineEvents = [
  {
    title: "Foundation Launched",
    date: "Jan 2020",
    description:
      "The beginning of Monadnocks Foundation with a vision to create lasting change in our communities.",
    image: "/images/timeline1.jpg",
  },
  {
    title: "First Community Event",
    date: "July 2020",
    description:
      "Organized our first successful youth development program reaching over 500 participants.",
    image: "/images/timeline2.jpg",
  },
  {
    title: "Expanded Initiatives",
    date: "March 2021",
    description:
      "Introduced new initiatives across education, environmental conservation, and inclusive sports programs.",
    image: "/images/timeline3.jpg",
  },
];

export default AboutPage;
