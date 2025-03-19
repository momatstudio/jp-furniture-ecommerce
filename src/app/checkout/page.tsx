"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + (item?.product?.price ?? 0) * item.quantity,
    0
  );

  const router = useRouter();

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/cart" className="text-gray-500 hover:text-gray-700">
              Cart
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </nav>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <Link
                href="/"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-500"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Shipping Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">
                  Shipping Information
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cell Number (Primary) *
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="0123456789"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cell Number (Secondary)
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="0123456789"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      rows={3}
                      required
                    />
                    <button
                      type="button"
                      className="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      onClick={() => {
                        // Add map selection functionality here
                        alert("Map selection feature will be implemented here");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Select Location on Map
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred Payment Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      *Only applicable if you order with credit
                    </p>
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    if (!item.product) return null;
                    return (
                      <div
                        key={item.product.slug}
                        className="flex items-center space-x-4 py-4 border-gray-200 border-b last:border-b-0"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="text-lg font-semibold">
                          R{item.product.price * item.quantity}
                        </div>
                      </div>
                    );
                  })}

                  {/* Payment Methods Section */}
                  <div className="mt-8 border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-medium mb-4">
                      Payment Methods Available
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <FaCreditCard className="text-2xl mb-2" color="blue" />
                        <span className="text-sm text-center">Credit Card</span>
                      </div>
                      <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <BsCashCoin className="text-2xl mb-2 " color="green" />
                        <span className="text-sm text-center">
                          Cash on Delivery
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <FaMoneyBillWave
                          className="text-2xl mb-2 "
                          color="red"
                        />
                        <span className="text-sm text-center">EFT Payment</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>R{total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>R{total}</span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500 transition mt-6"
                    onClick={() => {
                      // clearCart();
                      // alert("Order placed successfully!");
                      router.push("/order-summary");
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
