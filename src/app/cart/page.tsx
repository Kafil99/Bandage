"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/action";
import Swal from "sweetalert2";
import { Minus, Plus } from "react-feather";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const items = getCartItems();
    setCartItems(Array.isArray(items) ? items : []);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartItems.filter((item) => item._id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, inventory: quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout!",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully placed!", "success");
          router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <>

    <Navbar />
    
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-normal text-gray-900 mb-8">Your shopping cart</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between pb-4 border-b border-gray-200">
            <span className="text-sm text-gray-600">Product</span>
            <div className="flex space-x-16">
              <span className="text-sm text-gray-600">Quantity</span>
              <span className="text-sm text-gray-600">Total</span>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex justify-between py-4">
                  <div className="flex space-x-4">
                    {/* Product Image */}
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage).url()}
                        alt="image"
                        className="w-16 h-16 object-cover"
                        width={500}
                        height={500} />
                    )}
                    <div>
                      <p className="text-sm text-gray-600">{item.title}</p>
                      <p className="text-sm text-gray-600">£{item.price}</p>
                    </div>
                  </div>
                  <div className="flex space-x-8">
                    <div className="flex items-center space-x-2">
                      {/* Decrement Button */}
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4">{item.inventory}</span>
                      {/* Increment Button */}
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-600">£{(item.price * item.inventory).toFixed(2)}</span>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="mt-8 flex flex-col items-end">
              <div className="flex justify-between w-full max-w-md">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">£{calculateTotal().toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Taxes and shipping are calculated at checkout
              </p>
              <button
                onClick={handleProceed}
                className="mt-6 bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Go to checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
