"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import HeaderLite from "@/components/HeaderLite";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

interface OrderData {
  items: {
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  customerDetails: {
    firstName: string;
    lastName: string;
    email: string;
    primaryPhone: string;
    secondaryPhone: string;
  };

  deliveryInfo: {
    address: string;
    city: string;
    region: string;
    postalCode: string;
  };
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

function OrderSummaryContent() {
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [orderData, setOrderData] = useState<OrderData>({
    items: [],
    customerDetails: {
      firstName: "",
      lastName: "",
      email: "",
      primaryPhone: "",
      secondaryPhone: "",
    },
    deliveryInfo: {
      address: "",
      region: "",
      city: "",
      postalCode: "",
    },
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  });
  const [error, setError] = useState<string>("");

  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const orderParam = searchParams.get("order");
      if (!orderParam) throw new Error("No order data found");

      const parsedOrder = JSON.parse(decodeURIComponent(orderParam));
      if (!parsedOrder.items || !parsedOrder.deliveryInfo) {
        throw new Error("Invalid order data");
      }

      setOrderData(parsedOrder);
    } catch (err) {
      console.error("Error parsing order data:", err);
      setError("Failed to load order details");
    }
  }, [searchParams]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">{error}</h2>
          <Link href="/checkout" className="text-blue-600 hover:underline">
            Return to checkout
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderLite />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Breadcrumb lastPage="Checkout" currentPage="Order Summary" />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Column - Order Details */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-lg ">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
                  Order Details
                </h2>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {orderData.items?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          // fill
                          width={40}
                          height={40}
                          className="object-cover rounded-md"
                          priority
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="font-medium text-gray-900">
                        R{item.price.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Delivery Information */}
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold mb-4">
                    Delivery Information
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      {orderData.customerDetails.firstName}
                    </p>
                    <p className="text-gray-700">
                      {orderData.customerDetails.lastName}
                    </p>
                    <p className="text-gray-600">
                      {orderData.deliveryInfo.address}
                    </p>
                    <p className="text-gray-600">
                      {orderData.deliveryInfo.city}
                    </p>
                    <p className="text-gray-600">
                      {orderData.deliveryInfo.region},{" "}
                      {orderData.deliveryInfo.postalCode}
                    </p>
                    <p className="text-gray-600">
                      Phone: {orderData.customerDetails.primaryPhone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white p-6 rounded-lg ">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Select Payment Method
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod("transfer")}
                    className={`flex flex-col items-center p-4 border transition-all ${
                      paymentMethod === "transfer"
                        ? "border-black"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    <FaMoneyBillWave
                      className={`text-2xl mb-2 ${
                        paymentMethod === "transfer"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    />
                    <span className="text-sm font-medium">Bank Transfer</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("eft")}
                    className={`flex flex-col items-center p-4 border transition-all ${
                      paymentMethod === "eft"
                        ? "border-black"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    <BsCashCoin
                      className={`text-2xl mb-2 ${
                        paymentMethod === "eft" ? "text-black" : "text-gray-400"
                      }`}
                    />
                    <span className="text-sm font-medium">EFT</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("credit")}
                    className={`flex flex-col items-center p-4 border transition-all ${
                      paymentMethod === "credit"
                        ? "border-black"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    <FaCreditCard
                      className={`text-2xl mb-2 ${
                        paymentMethod === "credit"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    />
                    <span className="text-sm font-medium">Credit Card</span>
                  </button>
                </div>

                {/* Payment Details */}
                <div className="mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    {paymentMethod === "credit" ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">
                          Credit Card Details
                        </h3>
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="px-4 py-2 border border-gray-300 rounded-md"
                            />
                            <input
                              type="text"
                              placeholder="CVV"
                              className="px-4 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">
                          {paymentMethod === "transfer"
                            ? "Bank Transfer Details"
                            : "EFT Details"}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Bank Name</span>
                            <span className="font-medium text-gray-900">
                              Capitec Bank
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">
                              Account Holder
                            </span>
                            <span className="font-medium text-gray-900">
                              Phillmon
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">
                              Account Number
                            </span>
                            <span className="font-medium text-gray-900">
                              123456789
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Cell Number</span>
                            <span className="font-medium text-gray-900">
                              076 252 4329
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Reference</span>
                            <span className="font-medium text-gray-900">
                              ORDER-123456
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg  sticky top-6">
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>R{orderData.subtotal?.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>R{orderData.shipping?.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>R{orderData.tax?.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>R{orderData.total?.toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert("Payment Confirmed!")}
                    className="w-full bg-black text-white py-3 hover:bg-[#000000cf] transition-colors font-medium text-lg mt-6 cursor-pointer"
                  >
                    Proceed to Payment
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
}

// Main page component
export default function OrderSummaryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSummaryContent />
    </Suspense>
  );
}
