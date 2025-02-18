"use client"

import {
    Menu,
    Search,
    ShoppingCart,
    User,
    ChevronLeft,
    ChevronRight,
    Heart,
    Eye,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    ChevronDown,
  } from "lucide-react";
  import React, { useState } from "react";
import Footer from "../components/Footerr";
import Link from "next/link";
  export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState("description");
    const slides = [
      {
        id: 1,
        image: "/Images/phone.png",
        alt: "Yellow modern sofa",
      },
      {
        id: 2,
        image: "/Images/phone2.jpg",
        alt: "Grey chair",
      },
    ];
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    return (
      <div className="min-h-screen">
        <div className="hidden md:block bg-emerald-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-sm">(225) 555-0118</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">michelle.rivera@example.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">
                Follow Us and get a chance to win 80% off
              </span>
              <div className="flex items-center gap-6">
                <Instagram
                  size={16}
                  className="cursor-pointer hover:opacity-80"
                />
                <Youtube size={16} className="cursor-pointer hover:opacity-80" />
                <Facebook size={16} className="cursor-pointer hover:opacity-80" />
                <Twitter size={16} className="cursor-pointer hover:opacity-80" />
              </div>
            </div>
          </div>
        </div>
  
        <header className="border-b">
  <div className="container mx-auto px-4 py-4">
    <nav className="flex justify-between items-center">
      <div className="text-2xl font-bold">Bandage</div>

      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu size={24} />
      </button>

      <div
        className={`absolute md:static inset-0 bg-white md:bg-transparent transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out md:flex md:items-center md:space-x-12`}
      >
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 p-8 md:p-0">
          <Link href={"/"} className="text-sm hover:text-emerald-600">Home</Link>
          <Link href={"/"} className="text-sm hover:text-emerald-600 flex items-center gap-1">
            Shop
            <ChevronDown size={16} />
          </Link>
          <Link href={"/about"} className="text-sm hover:text-emerald-600">About</Link>
          <Link href={"/"} className="text-sm hover:text-emerald-600">Blog</Link>
          <Link href={"/contact"} className="text-sm hover:text-emerald-600">Contact</Link>
          <Link href={"/pages"} className="text-sm hover:text-emerald-600">Pages</Link>
        </div>

        <div className="flex items-center space-x-6 p-8 md:p-0">
          <button className="flex items-center text-[#23A6F0] text-sm">
            <User size={16} className="mr-2" />
            <span>Login / Register</span>
          </button>
          <Search size={20} className="text-[#23A6F0]" />
          <div className="relative">
            <Heart size={20} className="text-[#23A6F0]" />
            <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              1
            </span>
          </div>
          <div className="relative">
            <ShoppingCart size={20} className="text-[#23A6F0]" />
            <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              1
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>

  
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href={"/"} className="text-gray-600 hover:text-[#23A6F0]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">Shop</span>
          </div>
        </div>
  
        <main className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative">
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-50"
                >
                  <ChevronLeft size={20} />
                </button>
  
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-gray-50"
                >
                  <ChevronRight size={20} />
                </button>
  
                <div className="relative h-[500px] overflow-hidden rounded-lg">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="flex gap-4">
                {slides.map((slide) => (
                  <button
                    key={slide.id}
                    className="w-[100px] h-[100px] rounded-lg overflow-hidden"
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
  
            <div className="space-y-6">
              <h1 className="text-2xl font-medium">Floating Phone</h1>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-300 text-lg">★</span>
                </div>
                <span className="text-sm text-gray-500">10 Reviews</span>
              </div>
              <div className="text-2xl font-bold text-[#23A6F0]">$1,139.33</div>
              <div className="text-sm font-medium text-green-600">
                Availability : <span className="text-[#23A6F0]">In Stock</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.
              </p>
  
              <div className="h-[1px] bg-gray-200" />
  
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-[#23A6F0] ring-4 ring-blue-100"></button>
                <button className="w-8 h-8 rounded-full bg-green-500 ring-4 ring-green-100"></button>
                <button className="w-8 h-8 rounded-full bg-orange-500 ring-4 ring-orange-100"></button>
                <button className="w-8 h-8 rounded-full bg-black ring-4 ring-gray-100"></button>
              </div>
  
              <div className="flex items-center gap-4">
                <button className="bg-[#23A6F0] text-white px-8 py-3 rounded hover:bg-[#1f95d8] font-medium">
                  Select Options
                </button>
                <button className="p-3 rounded-full border hover:bg-gray-50">
                  <Heart size={20} className="text-gray-500" />
                </button>
                <button className="p-3 rounded-full border hover:bg-gray-50">
                  <Eye size={20} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </main>
  
        <section className="container mx-auto px-4 py-12">
  <div className="border-b">
    <nav className="flex gap-8">
      <button
        className={`pb-4 text-sm font-medium border-b-2 -mb-[2px] transition-colors ${
          activeTab === "description"
            ? "border-[#23A6F0] text-[#23A6F0]"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => setActiveTab("description")}
      >
        Description
      </button>
      <button
        className={`pb-4 text-sm font-medium border-b-2 -mb-[2px] transition-colors ${
          activeTab === "additional"
            ? "border-[#23A6F0] text-[#23A6F0]"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => setActiveTab("additional")}
      >
        Additional Information
      </button>
      <button
        className={`pb-4 text-sm font-medium border-b-2 -mb-[2px] transition-colors ${
          activeTab === "reviews"
            ? "border-[#23A6F0] text-[#23A6F0]"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
        onClick={() => setActiveTab("reviews")}
      >
        Reviews (0)
      </button>
    </nav>
  </div>

  <div className="py-8">
    {activeTab === "description" && (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src="/Images/chair.png"
            alt="Pink chair in modern setting"
            className="max-w-full max-h-[300px] object-contain rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">The Quick Fox Jumps Over</h2>
          <p className="text-gray-600 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
      </div>
    )}

    {activeTab === "additional" && (
      <div className="space-y-4">
        <h2 className="text-2xl font-medium">The Quick Fox Jumps Over</h2>
        <ul className="space-y-2 text-gray-600">
          {Array.from({ length: 4 }).map((_, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
              <span>The quick fox jumps over the lazy dog</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {activeTab === "reviews" && (
      <div className="space-y-4">
        <h2 className="text-2xl font-medium">The Quick Fox Jumps Over</h2>
        <p className="text-gray-600">No reviews yet.</p>
      </div>
    )}
  </div>
</section>


        {/* Best seller products */}
  
        <section className="container mx-auto px-4 py-12">
  <h2 className="text-2xl font-bold text-center mb-12">BESTSELLER PRODUCTS</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      "/Images/bs1.png",
      "/Images/bs2.png",
      "/Images/bs3.png",
      "/Images/bs4.png",
      "/Images/bs5.png",
      "/Images/bs6.png",
      "/Images/bs1.png",
      "/Images/bs2.png",
    ].map((imageSrc, index) => (
      <div
        key={index}
        className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
      >
        <div className="aspect-square w-full overflow-hidden rounded-t-lg">
          <img
            src={imageSrc}
            alt={`Product ${index + 1}`}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <h3 className="font-medium text-lg">Graphic Design</h3>
          <p className="text-sm text-gray-500 mt-1">English Department</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-gray-500 line-through text-sm">$16.48</span>
            <span className="text-[#23A6F0] font-bold">$6.48</span>
          </div>
        </div>
      </div>
    ))}
  </div>
 </section>

            {/* companies */}
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

          {/* Footer */}
          <Footer />
      </div>
    );
  }
  