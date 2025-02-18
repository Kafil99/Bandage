import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";
export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 py-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Bandage</h2>
          <div className="flex gap-4">
            <a className="text-[#23A6F0] hover:opacity-80 transition-opacity">
              <FaFacebook size={24} />
            </a>
            <a className="text-[#23A6F0] hover:opacity-80 transition-opacity">
              <FaInstagram size={24} />
            </a>
            <a className="text-[#23A6F0] hover:opacity-80 transition-opacity">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  Carrier
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  We are hiring
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  Carrier
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  We are hiring
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  Business Marketing
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  User Analytic
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  Live Chat
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  IOS & Android
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  Watch a Demo
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a className="hover:text-[#23A6F0] transition-colors">API</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <form className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 border border-r-0 rounded-l focus:outline-none"
                  aria-label="Email subscription"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#23A6F0] text-white rounded-r hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500">Lore imp sum dolor Amit</p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t">
          <p className="text-center text-sm text-gray-500">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

