"use client"; // Mark this as a client component

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useState } from 'react'; // Import useState for modal functionality
import Navbar from './Navbar';
import Footer from './Footerr';
import { Product } from '../../../types/products';

export default function ProductDetails({ product }: { product: Product }) {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50 bg-white">
        <Navbar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 mb-40">
        {/* Left Side: Product Image */}
        <div className="relative h-96 w-full">
          {product.productImage?.asset && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Right Side: Product Details */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          {/* Description (Limited to 3 lines) */}
          <p className="text-gray-700 line-clamp-3">{product.description}</p>

          {/* Read More Button */}
          <button
            onClick={toggleModal}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Read More
          </button>

          {/* Price and Discount */}
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold text-gray-900">${product.price}</p>
            {product.discountPercentage && (
              <span className="text-sm text-white bg-red-500 px-2 py-1 rounded-full">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* Inventory and Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Inventory</p>
              <p className="text-lg font-semibold text-gray-900">
                {product.inventory !== undefined ? product.inventory : 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Quantity</p>
              <p className="text-lg font-semibold text-gray-900">
                {product.quantity !== undefined ? product.quantity : 'N/A'}
              </p>
            </div>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* New Arrival Badge */}
          {product.isNew && (
            <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              New Arrival!
            </span>
          )}
        </div>

        {/* Modal for Full Description */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <button
                onClick={toggleModal}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="w-full bottom-0 left-0">
        <Footer />
      </div>
    </>
  );
}