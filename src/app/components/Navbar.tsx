import {
    Search,
    ShoppingCart,
    User,
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
  } from "lucide-react";
  import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  import React, { useState } from "react";
import Link from "next/link";


  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    return (
      <nav className="w-full">
        {/* Promo Bar */}
        <div className="bg-gray-900 text-white py-2 px-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+12255550118"
                className="flex items-center text-sm hover:text-gray-300"
              >
                <Phone size={14} className="mr-1" />
                (225) 555-0118
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center text-sm hover:text-gray-300"
              >
                <Mail size={14} className="mr-1" />
                contact@example.com
              </a>
            </div>
  
            <p className="hidden md:block text-sm">
              Follow Us and get a chance to win 80% off
            </p>
  
            <div className="flex items-center space-x-4">
              <a aria-label="Facebook" className="hover:text-gray-300">
                <FaFacebook size={16} />
              </a>
              <a aria-label="Twitter" className="hover:text-gray-300">
                <FaTwitter size={16} />
              </a>
              <a aria-label="Instagram" className="hover:text-gray-300">
                <FaInstagram size={16} />
              </a>
              <a aria-label="Youtube" className="hover:text-gray-300">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Main Navbar */}
        <div className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <a href="/" className="text-2xl font-bold">
                Bandage
              </a>
  
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
  
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-gray-900">
                    Shop
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white shadow-lg rounded-md py-2">
                    <a href="/product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Product
                    </a>
                  </div>
                </div>
  
                <Link href={"/about"} className="text-gray-700 hover:text-gray-900">About</Link>
                <Link href={"/contact"} className="text-gray-700 hover:text-gray-900">Contact</Link>              </div>
  
              {/* Search, Cart, Account */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
  
                <a
                  href="/cart"
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <ShoppingCart size={20} />
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    2
                  </span>
                </a>
  
                <a href="/account" className="p-2 hover:bg-gray-100 rounded-full">
                  <User size={20} />
                </a>
  
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Menu"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
  
            {/* Search Bar */}
            {searchOpen && (
              <div className="py-4 border-t">
                <div className="max-w-3xl mx-auto">
                  <input
                    type="search"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
  
            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden border-t py-4">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="text-gray-700 hover:text-gray-900 px-4">
                    Home
                  </Link>
                  <Link href={"/shop"} className="text-gray-700 hover:text-gray-900 px-4">Shop</Link>
                  <Link href={"/about"} className="text-gray-700 hover:text-gray-900 px-4">About</Link>
                  <Link href={"/contact"} className="text-gray-700 hover:text-gray-900 px-4">
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }

  