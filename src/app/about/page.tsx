"use client";

import { Menu, X, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import ImageSection from "../components/Imagesection";
import TeamSection from "../components/Teamsection";
import Footer from "../components/Footerr";
import StatsSection from "../components/Statssection";
import Link from "next/link";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const numbers = document.querySelectorAll(".stat-number");
    numbers.forEach((number) => {
      const element = number as HTMLElement;
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Bandage</span>
            </div>
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href={"/"} className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link href={"/product"} className="text-gray-600 hover:text-gray-900 transition-colors">Product</Link>
              <Link href={"/pricing"} className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link href={"/team"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Team</Link>
              <Link href={"/contact"} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link> 
              <button className="text-blue-500 hover:text-blue-600 transition-colors">Login</button>
              <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center">
                Become a member
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link href={"/"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Home</Link>
              <Link href={"/product"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Product</Link>
              <Link href={"/pricing"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href={"/team"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Team</Link>
              <Link href={"/contact"} className="block px-4 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
              <button className="block w-full text-left px-4 py-2 text-blue-500 hover:text-blue-600">
                Login
              </button>
              <button className="block w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Become a member
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20 relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
            <div className="w-full md:w-5/12 mb-8 md:mb-0 relative z-10 text-center md:text-left">
              <span className="text-blue-500 font-medium">ABOUT COMPANY</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 mb-5 text-gray-900">
                ABOUT US
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-all">
                Get Quote Now
              </button>
            </div>

            <div className="w-full md:w-6/12 relative">
              <img
                src="/Images/about.jpg"
                alt="Shopping woman in yellow dress"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="w-full py-12 bg-white">
        <StatsSection />
      </section>

      {/* Team Section */}
      <ImageSection />
      <TeamSection />

      {/* Companies Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Big Companies Are Here</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics.
            </p>
          </div>
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
        </div>
      </section>

      {/* Work with Us Section */}
      <section className="flex flex-col md:flex-row w-full">
  <div className="w-full md:w-1/2 bg-blue-500 text-white p-8 md:p-16">
    <div className="max-w-lg">
      <span className="text-sm font-medium tracking-widest">WORK WITH US</span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
        Now Let's grow Yours
      </h2>
      <p className="text-white/90 text-lg mb-6">
        The gradual accumulation of information about atomic and small-scale behavior during
        the first quarter of the 20th century produced an increasing confusion resolved in
        1926 with the advent of modern techniques.
      </p>
      <button className="px-6 py-3 bg-white text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  </div>
  <div className="w-full md:w-1/2">
    <img
      src="/Images/teamsection.png"
      alt="Professional woman in a pink sweater"
      className="w-full h-auto object-cover"
    />
  </div>
</section>


      <Footer />
    </div>
  );
}
