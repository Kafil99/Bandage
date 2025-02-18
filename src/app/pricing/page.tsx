"use client"

import { Menu, X, ChevronRight } from "lucide-react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import PricingFAQs from "../components/Pricingfaqs";
import Footer from "../components/Footerr";
export default function PricingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold">Bandage</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href={"/"} className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href={"/product"} className="text-gray-600 hover:text-gray-900">Product</Link>
              <Link href={"/pricing"} className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href={"/team"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Team</Link>
              <Link href={"/contact"} className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-blue-500 hover:text-blue-600">
                Login
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
                Become a member
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href={"/"} className="block px-3 py-2 text-gray-600">Home</Link>
              <Link href={"/product"} className="block px-3 py-2 text-gray-600">Product</Link>
              <Link href={"/pricing"} className="block px-3 py-2 text-gray-600">Pricing</Link>
              <Link href={"/team"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Team</Link>
              <Link href={"/contact"} className="block px-3 py-2 text-gray-600">Contact</Link>
              <div className="px-3 py-2 space-y-2">
                <button className="w-full text-blue-500 text-left">
                  Login
                </button>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">
                  Become a member
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-blue-500 font-semibold mb-4">PRICING</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h1>

            <div className="flex items-center justify-center space-x-2 text-sm mb-8">
              <span className="text-gray-600">Home</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">Pricing</span>
            </div>

            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={`${!isYearly ? "text-gray-900" : "text-gray-500"}`}
              >
                Monthly
              </span>
              <button
                onClick={toggleBilling}
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-gray-200"
                role="switch"
                aria-checked={isYearly}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isYearly ? "translate-x-5" : "translate-x-0"}`}
                />
              </button>
              <span
                className={`${isYearly ? "text-gray-900" : "text-gray-500"}`}
              >
                Yearly
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Save 25%
              </span>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Tier */}
              <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">FREE</h3>
                <p className="text-gray-600 mb-4">
                  Organize across all apps by hand
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500">Per Month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited product updates
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  Try for free
                </button>
              </div>

              {/* Standard Tier */}
              <div className="border rounded-lg p-8 bg-gray-900 text-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">STANDARD</h3>
                <p className="text-gray-300 mb-4">
                  Organize across all apps by hand
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? "7.99" : "9.99"}
                  </span>
                  <span className="text-gray-300">Per Month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited product updates
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited product updates
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  Try for free
                </button>
              </div>

              {/* Premium Tier */}
              <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">PREMIUM</h3>
                <p className="text-gray-600 mb-4">
                  Organize across all apps by hand
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? "14.99" : "19.99"}
                  </span>
                  <span className="text-gray-500">Per Month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited product updates
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {[
              { name: "Hooli", logo: "/Images/hooli.jpg" },
              { name: "Lyft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png" },
              { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo.svg.png" },
              { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
              { name: "Reddit", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Reddit_logo.svg/2560px-Reddit_logo.svg.png" },
              { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" },
            ].map((company) => (
              <div
                key={company.name}
                className="w-24 h-12 relative flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>

          {/* PricingFAQs */}
          <PricingFAQs />

          {/* Free Trail Section */}
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

