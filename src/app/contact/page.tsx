"use client"

import { Menu, X, Twitter, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Footer from "../components/Footerr";
import Link from "next/link";
export default function NavbarHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold">
                  Bandage
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/product"
                    className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Product
                  </Link>
                  <Link
                    href="/pricing"
                    className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/team"
                    className="px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-3 py-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
                Become a member →
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
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
                className="block px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="block px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Product
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/team"
                className="block px-3 py-2 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Team
              </Link>
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
                Login
              </button>
              <button className="w-full px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
                Become a member →
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-16">
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold tracking-wider">
              CONTACT US
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              Get in touch today!
            </h1>
            <p className="mt-4 text-gray-600">
              We know how large objects will act, but things on a small scale
            </p>
            <div className="mt-8 space-y-4">
              <p className="flex items-center">
                <span className="font-semibold">Phone: </span>
                <a
                  href="tel:+451215215"
                  className="ml-2 hover:text-blue-600 transition-colors"
                >
                  +451 215 215
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold">Fax: </span>
                <span className="ml-2">+451 215 215</span>
              </p>
            </div>
            <div className="mt-8 flex space-x-6">
              <a className="hover:text-blue-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a className="hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a className="hover:text-blue-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a className="hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            
            <img
              src="/Images/contact.jpg"
              alt="Happy family shopping"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>

      {/* office contact */}
      <section className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <p className="text-sm font-semibold tracking-wider text-gray-600 mb-4">
          VISIT OUR OFFICE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We help small businesses
          <br className="hidden md:block" />
          with big ideas
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Card */}
        <article className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Phone className="w-8 h-8 text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Get Support</h2>
          <div className="space-y-2 mb-6">
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@ple.com</p>
          </div>
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
            aria-label="Submit support request"
          >
            Submit Request
          </button>
        </article>

        {/* Location Card */}
        <article className="bg-gray-900 text-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <MapPin className="w-8 h-8 text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Get Support</h2>
          <div className="space-y-2 mb-6">
            <p className="text-gray-300">georgia.young@example.com</p>
            <p className="text-gray-300">georgia.young@ple.com</p>
          </div>
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
            aria-label="Submit location request"
          >
            Submit Request
          </button>
        </article>

        {/* Email Card */}
        <article className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Mail className="w-8 h-8 text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Get Support</h2>
          <div className="space-y-2 mb-6">
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@ple.com</p>
          </div>
          <button
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
            aria-label="Submit email request"
          >
            Submit Request
          </button>
        </article>
      </div>
    </section>

    {/* lets talk */}

    <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24 text-center">
      <ChevronDown
        size={32}
        className="text-blue-500 mb-6 animate-bounce"
        aria-hidden="true"
      />

      <p className="uppercase text-sm tracking-wider mb-4 text-gray-600">
        WE Can't WAIT TO MEET YOU
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">
        Let's Talk
      </h2>

      <button
        className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium
        transition-all duration-200 hover:bg-blue-600 hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => {
          // Add click handler
        }}
      >
        Try it free now
      </button>
    </section>

    {/* Footer */}
    <Footer />
    </div>
  );
}

