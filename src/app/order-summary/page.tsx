"use client";
import React, { useState } from "react";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import HeaderLite from "@/components/HeaderLite";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function OrderSummaryPage() {
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  return (
    <>
      <HeaderLite />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Breadcrumb lastPage={"Checkout"} currentPage="Order Summary" />

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary & Payment
            </h2>

            {/* Order Details Section */}
            <section className="mb-8 border-b pb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Order Details
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Order Number</p>
                    <p className="font-medium text-gray-900">#123456</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="font-medium text-gray-900">R1234</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Date</p>
                    <p className="font-medium text-gray-900">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-medium text-[#A42300]">
                      Pending Payment
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method Selection */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Select Payment Method
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setPaymentMethod("transfer")}
                  className={`flex flex-col items-center p-4 border transition-all ${
                    paymentMethod === "transfer"
                      ? "border-[#A42300]"
                      : "border-gray-200 hover:border-[#cb8471]"
                  }`}
                >
                  <FaMoneyBillWave
                    className={`text-2xl mb-2 ${
                      paymentMethod === "transfer"
                        ? "text-[#A42300]"
                        : "text-gray-400"
                    }`}
                  />
                  <span className="text-sm font-medium">Bank Transfer</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("eft")}
                  className={`flex flex-col items-center p-4 border transition-all ${
                    paymentMethod === "eft"
                      ? "border-[#A42300]"
                      : "border-gray-200 hover:border-[#cb8471]"
                  }`}
                >
                  <BsCashCoin
                    className={`text-2xl mb-2 ${
                      paymentMethod === "eft"
                        ? "text-[#A42300]"
                        : "text-gray-400"
                    }`}
                  />
                  <span className="text-sm font-medium">EFT</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("credit")}
                  className={`flex flex-col items-center p-4 border transition-all ${
                    paymentMethod === "credit"
                      ? "border-[#A42300]"
                      : "border-gray-200 hover:border-[#cb8471]"
                  }`}
                >
                  <FaCreditCard
                    className={`text-2xl mb-2 ${
                      paymentMethod === "credit"
                        ? "text-[#A42300]"
                        : "text-gray-400"
                    }`}
                  />
                  <span className="text-sm font-medium">Credit Card</span>
                </button>
              </div>
            </section>

            {/* Payment Details Section */}
            <section className="mb-8">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-gray-700">
                      {paymentMethod === "transfer"
                        ? "Bank Transfer Details"
                        : "EFT Details"}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Bank Name</span>
                        <span className="font-medium">Capitec Bank</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Account Holder</span>
                        <span className="font-medium">Phillmon</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Account Number</span>
                        <span className="font-medium">123456789</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Reference</span>
                        <span className="font-medium">ORDER-123456</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <button
              onClick={() => alert("Payment Confirmed!")}
              className="w-full bg-[#A42300] text-white py-3  hover:bg-[#A42400] transition-colors font-medium text-lg cursor-pointer"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
