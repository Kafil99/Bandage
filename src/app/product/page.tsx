"use client"

import {
  Menu,
  Search,
  User,
  ShoppingCart,
  Heart,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  X,
  LayoutGrid,
  List,
  ChevronDown,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footerr";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/action";
import Swal from "sweetalert2";
export default function EcommerceNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProduct(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  const handelAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(product);
  }
  return (
    <><header className="w-full">
      <div className="bg-emerald-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-1" />
              <span>(555) 555-0110</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-1" />
              <span>hello@example.com</span>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-4">
              Follow Us and get a chance to win 80% off
            </span>
            <div className="flex space-x-3">
              <Facebook size={14} className="cursor-pointer hover:opacity-80" />
              <Twitter size={14} className="cursor-pointer hover:opacity-80" />
              <Instagram
                size={14}
                className="cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl">Bandage</div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="hover:text-emerald-600 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-emerald-600 transition-colors">
                Contact
              </Link>
              <Link href="/pages" className="hover:text-emerald-600 transition-colors">
                Pages
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-emerald-600">
                <User size={20} className="mr-2" />
                <span>Login / Register</span>
              </div>
              <Search
                size={20}
                className="text-gray-600 hover:text-emerald-600 cursor-pointer"
              />
              <div className="flex items-center">
                <ShoppingCart
                  href="/cart"
                  size={20}
                  className="text-gray-600 hover:text-emerald-600 cursor-pointer"
                />
              </div>
              <div className="flex items-center">
                <Heart
                  size={20}
                  className="text-gray-600 hover:text-emerald-600 cursor-pointer"
                />
                <span className="ml-1 text-xs">1</span>
              </div>
            </div>

            <button
              className="md:hidden rounded-md p-2 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Home
                </Link>
                <Link href="/shop" className="hover:text-emerald-600 transition-colors">
                  Shop
                </Link>
                <Link href="/about" className="hover:text-emerald-600 transition-colors">
                  About
                </Link>
                <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="hover:text-emerald-600 transition-colors">
                  Contact
                </Link>
                <Link href="/pages" className="hover:text-emerald-600 transition-colors">
                  Pages
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>


      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Shop</h2>
          <div className="flex items-center text-sm">
            <span className="text-gray-600">Home</span>
            <X size={14} className="mx-2 text-gray-400" />
            <span>Shop</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              image: "/Images/clothes1.png",
            },
            {
              image: "/Images/clothes2.png",
            },
            {
              image: "/Images/clothes3.png",
            },
            {
              image: "/Images/clothes4.png",
            },
            {
              image: "/Images/clothes5.png",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={category.image}
                className="w-full h-[360px] object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-6 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">Showing all 12 results</div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Views:</span>
              <button
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="Grid view"
              >
                <LayoutGrid size={20} className="text-emerald-600" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="List view"
              >
                <List size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-md py-2 pl-4 pr-10 text-gray-600 cursor-pointer focus:outline-none focus:border-emerald-600">
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Latest</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 border-t">
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
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-200" />
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-white px-4 py-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : product.length === 0 ? (
            <p className="text-center text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {product.map((product) => {
                const productImageUrl = product.productImage ? urlFor(product.productImage).url() : null;

                return (
                  <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="block">
                      {productImageUrl && (
                        <div className="w-full aspect-square overflow-hidden">
                          <Link href={`/details/${product._id}`}>
                          <Image
                            src={productImageUrl}
                            alt={product.title}
                            height={500}
                            width={500}
                            className="w-full h-full object-contain"
                          />
                          </Link>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600">${product.price}</p>
                      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                        onClick={(e) => handelAddToCart(e, product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </header>
      <Footer /></>
  );
}

