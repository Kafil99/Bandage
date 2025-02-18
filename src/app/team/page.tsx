"use client"

import { Menu, X, ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import ImageGallery from "../components/Imagegallery";
import Footer from "../components/Footerr";
export default function HeroWithNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl">Bandage</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Product
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/team"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Team
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Become a member →
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Product
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
              <Link
                href="/team"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Team
              </Link>
              <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900">
                Login
              </button>
              <button className="block w-full text-left px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Become a member →
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <li>
                <a className="text-gray-500 hover:text-gray-700">Team</a>
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4 animate-fade-in">
              WHAT WE DO
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Innovation tailored for you
            </h1>
          </div>
        </div>
      </main>

      {/* Image gallery section */}
      <ImageGallery />

      {/* Team section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Johnson",
            role: "Creative Director",
            image:
              "/Images/team4.png",
          },
          {
            name: "Emily Chen",
            role: "Lead Designer",
            image:
              "/Images/team5.jpg",
          },
          {
            name: "Jessica Taylor",
            role: "Product Manager",
            image:
              "/Images/team6.jpg",
          },
          {
            name: "Michael Roberts",
            role: "Senior Developer",
            image:
              "/Images/team3.jpg",
          },
          {
            name: "Maria Garcia",
            role: "UI Designer",
            image:
              "/Images/team7.jpg",
          },
          {
            name: "Anna Smith",
            role: "Marketing Lead",
            image:
              "/Images/team1.png",
          },
          {
            name: "Rachel Wilson",
            role: "Content Strategist",
            image:
              "/Images/team2.jpg",
          },
          {
            name: "Sophie Anderson",
            role: "UX Researcher",
            image:
              "/Images/team8.jpg",
          },
          {
            name: "Jasmine Lee",
            role: "Product Designer",
            image:
              "/Images/team9.jpg",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>

            <div className="flex gap-4">
              <a
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label={`${member.name}'s Facebook`}
              >
                <FaFacebook size={20} />
              </a>
              <a
                className="text-gray-600 hover:text-pink-500 transition-colors"
                aria-label={`${member.name}'s Instagram`}
              >
                <FaInstagram size={20} />
              </a>
              <a
                className="text-gray-600 hover:text-blue-400 transition-colors"
                aria-label={`${member.name}'s Twitter`}
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Trail section */}
    <section className="flex flex-col items-center justify-center min-h-[400px] px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Start your 14 days free trial
          </h2>
    
          <p className="max-w-xl mb-8 text-gray-600">
            Experience our complete platform with a risk-free 14-day trial. No
            credit card required. Unlock all features and see how we can help
            transform your workflow.
          </p>
    
          <button
            className="px-8 py-3 mb-12 bg-blue-500 text-white rounded-md transition-all 
                       hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-offset-2"
          >
            Try it free now
          </button>
    
          <div className="flex items-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter size={24} />
            </a>
    
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FaFacebook size={24} />
            </a>
    
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={24} />
            </a>
    
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
    </div>
  );
}
