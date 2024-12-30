"use client";
import React, { useState, useEffect } from "react";
import { Link2, Menu, X } from "lucide-react";
import LogoImage from "../../assets/logoImage01.jpeg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About Us", href: "#aboutUs" },
    { title: "Initiatives", href: "#initiatives" },
    {
      title: "Get Involved",
      href: "#getInvolved",
      children: [
        { title: "Volunteer", href: "#" },
        { title: "Donate", href: "#" },
        { title: "Partner With Us", href: "#" },
      ],
    },
    // { title: "Impact", href: "#impact" },
    { title: "Contact", href: "#contactUs" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              {/* <img
                src={LogoImage} // Use the actual logo image here
                alt="Monadnocks Logo"
                className="h-10 w-10 rounded-full"
              /> */}
              <Image
                src={LogoImage}
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-yellow-500"
              />
              <span
                className={`ml-3 font-bold text-xl ${
                  isScrolled ? "text-blue-600" : "text-gray-800"
                }`}
              >
                Monadnocks
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <a
                  href={link.href}
                  className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                    isScrolled ? "text-gray-600" : "text-gray-800"
                  }`}
                >
                  {link.title}
                </a>
                {/* {link.children && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {link.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            ))}
            <Link
              href={"helpus"}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-600" : "text-gray-800"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="pt-4 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {link.title}
                </a>
                {link.children && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                Support Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
