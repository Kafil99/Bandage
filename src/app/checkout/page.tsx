"use client";

import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { client } from "@/sanity/lib/client";
import Footer from "../components/Footerr";

const CheckOut = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [fromValues, setFromValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    });

    const [fromErrors, setFromErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory,
        0
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFromValues({
            ...fromValues,
            [id]: value,
        });
        setFromErrors({
            ...fromErrors,
            [id]: value.trim() === "",
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !fromValues.firstName,
            lastName: !fromValues.lastName,
            email: !fromValues.email,
            phone: !fromValues.phone,
            address: !fromValues.address,
            zipCode: !fromValues.zipCode,
            city: !fromValues.city,
        };
        setFromErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = async () => {
        if (!validateForm()) {
            alert("Please fill all required fields.");
        }

        const orderData = {
            _type: 'order',
            firstName: fromValues.firstName,
            lastName: fromValues.lastName,
            address: fromValues.address,
            city: fromValues.city,
            zipCode: fromValues.zipCode,
            phone: fromValues.phone,
            email: fromValues.email,
            cartItems: cartItems.map(item => ({
                _type: 'reference',
                _ref: item._id,
            })),
            total: subTotal - discount, 
            discount: discount,
            status: 'pending',
            shippingMethod: 'Standard',
            paymentMethod: 'Credit Card',
            orderDate: new Date().toISOString(),
        };

        try {
            await client.create(orderData);
            localStorage.removeItem("appliedDiscount");
            alert("Order placed successfully!");
            window.location.href = "/"
        } catch (error) {
            console.error("Error creating order:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center gap-2 py-4">
                        <Link
                            href={"/Cart"}
                            className="text-gray-600 hover:text-black transition text-sm"
                        >
                            Cart
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-black">Check Out</span>
                    </nav>

                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Order Summary Section */}
                        <div className="bg-white border rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex items-center gap-4 py-4 border-b last:border-b-0"
                                    >
                                        <div className="w-16 h-16 rounded-lg overflow-hidden">
                                            {item.productImage && (
                                                <Image
                                                    src={urlFor(item.productImage).url()}
                                                    alt={item.title}
                                                    height={64}
                                                    width={64}
                                                    className="object-cover w-full h-full" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium">{item.title}</h3>
                                            <p className="text-xs text-gray-500">
                                                Quantity: {item.inventory}
                                            </p>
                                            <p className="text-sm font-semibold">
                                                ${(item.price * item.inventory).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">No items in cart</p>
                            )}

                            {/* Order Total */}
                            <div className="pt-6 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <p>SubTotal:</p>
                                    <p className="font-medium">${subTotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <p>Discount:</p>
                                    <p className="font-medium">-${discount.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <p>Total:</p>
                                    <p>${(subTotal - discount).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Billing Information Section */}
                        <div className="bg-white border rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-6">Billing Information</h2>
                            <div className="space-y-4">
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Enter Your First Name"
                                        value={fromValues.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border ${fromErrors.firstName ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {fromErrors.firstName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            First Name is Required
                                        </p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Enter Your Last Name"
                                        value={fromValues.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border ${fromErrors.lastName ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {fromErrors.lastName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            Last Name is Required
                                        </p>
                                    )}
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        placeholder="Enter Your Address"
                                        value={fromValues.address}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border ${fromErrors.address ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {fromErrors.address && (
                                        <p className="text-red-500 text-sm mt-1">
                                            Address is Required
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        value={fromValues.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border ${fromErrors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {fromErrors.email && (
                                        <p className="text-red-500 text-sm mt-1">Email is Required</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Enter Your Phone"
                                        value={fromValues.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border ${fromErrors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {fromErrors.phone && (
                                        <p className="text-red-500 text-sm mt-1">Phone is Required</p>
                                    )}
                                </div>

                                {/* Zip Code */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Zip Code
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        placeholder="Enter Your Zip Code"
                                        value={fromValues.zipCode}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border ${fromErrors.zipCode ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {fromErrors.zipCode && (
                                        <p className="text-red-500 text-sm mt-1">
                                            Zip Code is Required
                                        </p>
                                    )}
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        placeholder="Enter Your City"
                                        value={fromValues.city}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border ${fromErrors.city ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    {fromErrors.city && (
                                        <p className="text-red-500 text-sm mt-1">City is Required</p>
                                    )}
                                </div>

                                {/* Place Order Button */}
                                <div className="mt-6">
                                    <button
                                        onClick={handlePlaceOrder}
                                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckOut;