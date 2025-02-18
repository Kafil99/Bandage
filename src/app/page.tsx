"use client"

import { ArrowRight, ShoppingCart, Calendar, MessageSquare  } from "lucide-react";
// import React from "react";
import Footer from "./components/Footerr";
// import Navbar from "./components/Navbar";

import {
  Search,
  // ShoppingCart,
  User,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { seven } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";






export default function Hero() {

   
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(seven);
        console.log('Fetched Products:', fetchedProducts); // Debugging
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

      
        const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
        const [isSearchOpen, setSearchoOpen] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(false);
      

  return (
    <>
    <div>
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
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>

              {/* Dropdown Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  Shop
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                    <Link
                      href="/product"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Product
                    </Link>
                    {/* <Link
                      href="/shop/category2"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Category 2
                    </Link>
                    <Link
                      href="/shop/category3"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Category 3
                    </Link> */}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>

            {/* Search, Cart, Account */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchoOpen(!isSearchOpen)}
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
              </a>

              <a href="/account" className="p-2 hover:bg-gray-100 rounded-full">
                <User size={20} />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
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
          {isMenuOpen && (
            <div className="md:hidden border-t py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-4">
                  Home
                </Link>
                <Link href="/shop" className="text-gray-700 hover:text-gray-900 px-4">
                  Shop
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-gray-900 px-4">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 px-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
    </div>

    <section 
  className="relative min-h-[800px] w-full bg-cover bg-center bg-no-repeat bg-gradient-to-br from-cyan-400 to-cyan-600" 
  style={{ backgroundImage: "url('/Images/hero.jpg')" }}
>
  <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 md:flex-row md:justify-between md:px-8">
    {/* Left Content */}
    <div className="z-10 mb-12 w-full max-w-xl text-white md:mb-0">
      <p className="mb-4 animate-fade-in font-medium tracking-widest">
        SUMMER 2020
      </p>

      <h1 className="mb-6 animate-slide-up text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        NEW COLLECTION
      </h1>

      <p className="mb-8 animate-fade-in text-lg opacity-90">
        We know how large objects will act, but things on a small scale.
      </p>

      <button
        className="group inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-cyan-600 transition-all hover:bg-opacity-90"
        aria-label="Shop Now"
      >
        SHOP NOW
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
</section>

      
    {/* Best seller products */}

    <section className="w-full bg-white px-4 py-8">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
        BESTSELLER PRODUCTS
      </h2>
      <div className="mx-auto max-w-7xl">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-600">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="w-full aspect-square overflow-hidden relative">
                  {product.productImage && (
                    <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.title}
                      height={500}
                      width={500}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4">
                  {/* Product Title with Link */}
                  <Link href={`/details/${product._id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600">${product.price}</p>

                  {/* View Details Button (Replaces Add to Cart Button) */}
                  <Link href={`/details/${product._id}`}>
                    <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

    <section className="relative min-h-[500px] bg-gradient-to-br from-emerald-500 to-emerald-700 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <span className="inline-block text-sm tracking-wider font-medium">
              SUMMER 2020
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Vita Classic Product
            </h1>

            <p className="text-lg opacity-90 max-w-lg">
              Experience timeless elegance with our signature Vita Classic
              collection. Meticulously crafted for those who appreciate refined
              aesthetics and superior quality.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-3xl font-bold">$16.48</span>

              <button
                className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg 
                font-medium transition-transform hover:scale-105 active:scale-95"
                aria-label="Add to cart"
              >
                <ShoppingCart size={20} />
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/Images/image.jpg"
              alt="Product showcase"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent 
      pointer-events-none"
      />

      <div
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-white/10 rounded-full 
      blur-3xl"
      />

      <div
        className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-400/20 rounded-full 
      blur-3xl"
      />
    </section>

    <section className="container mx-auto px-4 py-12 md:py-24">
  <div className="flex flex-col md:flex-row items-center gap-12">
    <div className="w-full md:w-1/2">
      <img
        src="/Images/winter.jpg"
        alt="Lifestyle photography"
        className="w-full max-h-[500px] object-contain rounded-lg"
      />
    </div>

    <div className="w-full md:w-1/2 space-y-6">
      <span className="text-sm font-medium tracking-wider text-gray-500">
        SUMMER 2020
      </span>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        Part of the Neural Universe
      </h1>

      <p className="text-xl text-gray-600">
        We know how large objects will act, but things on a small scale.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          className="px-8 py-4 bg-green-600 text-white font-medium rounded-lg 
                     transition-colors duration-200 hover:bg-green-700
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Buy now"
        >
          BUY NOW
        </button>

        <button
          className="px-8 py-4 border border-green-300 text-green-800 font-medium rounded-lg
                     inline-flex items-center gap-2 transition-colors duration-200
                     hover:bg-gray-100 hover:border-gray-400
                     focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          aria-label="Read more"
        >
          READ MORE
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</section>


    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-sm text-sky-500 font-medium">
          Practice Advice
        </span>
        <h2 className="text-3xl font-bold mt-2">Featured Posts</h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src="/Images/fixed-height.jpg"
              alt="Featured post"
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="text-sky-500 text-sm">Google</span>
              <span className="text-gray-600 text-sm">Trending</span>
              <span className="text-gray-600 text-sm">New</span>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L'integral)
            </h3>

            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>22 April 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>10 comments</span>
              </div>
            </div>

            <button className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 group">
              Learn More
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src="/Images/car.jpg"
              alt="Featured post"
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="text-sky-500 text-sm">Google</span>
              <span className="text-gray-600 text-sm">Trending</span>
              <span className="text-gray-600 text-sm">New</span>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L'integral)
            </h3>

            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>22 April 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>10 comments</span>
              </div>
            </div>

            <button className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 group">
              Learn More
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src="/Images/umbrella.jpg"
              alt="Featured post"
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="text-sky-500 text-sm">Google</span>
              <span className="text-gray-600 text-sm">Trending</span>
              <span className="text-gray-600 text-sm">New</span>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L'integral)
            </h3>

            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>22 April 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>10 comments</span>
              </div>
            </div>

            <button className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 group">
              Learn More
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
          <div>
            <Footer />
          </div>
    
      </>
  );
}

