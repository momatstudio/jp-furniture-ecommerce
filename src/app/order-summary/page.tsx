"use client";
import React, { useState } from "react";
import Header from "@/components/Header";

export default function OrderSummaryPage() {
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Order Summary & Payment</h1>
        {/* ...existing order details... */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Details</h2>
          <p>Order #123456</p>
          <p>Total Amount: R1234</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setPaymentMethod("transfer")}
              className={
                paymentMethod === "transfer"
                  ? "px-4 py-2 bg-[#A42300] text-white rounded"
                  : "px-4 py-2 bg-gray-200 text-black rounded"
              }
            >
              Transfer
            </button>
            <button
              onClick={() => setPaymentMethod("eft")}
              className={
                paymentMethod === "eft"
                  ? "px-4 py-2 bg-[#A42300] text-white rounded"
                  : "px-4 py-2 bg-gray-200 text-black rounded"
              }
            >
              EFT
            </button>
            <button
              onClick={() => setPaymentMethod("credit")}
              className={
                paymentMethod === "credit"
                  ? "px-4 py-2 bg-[#A42300] text-white rounded"
                  : "px-4 py-2 bg-gray-200 text-black rounded"
              }
            >
              Credit Card
            </button>
          </div>
        </section>

        <section className="mb-6">
          {paymentMethod === "credit" ? (
            <div>
              <h3 className="text-lg font-medium mb-2">Credit Card Payment</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border p-2 rounded"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="w-1/2 border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 border p-2 rounded"
                  />
                </div>
              </form>
            </div>
          ) : paymentMethod === "transfer" ? (
            <div>
              <h3 className="text-lg font-medium mb-2">
                Bank Transfer Payment
              </h3>
              <p>Please transfer the total amount to:</p>
              <p>Account Number: 123456789</p>
              <p>Bank: ABC Bank</p>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-medium mb-2">EFT Payment</h3>
              <p>Please use the following EFT details:</p>
              <p>Account Number: 987654321</p>
              <p>Bank: XYZ Bank</p>
            </div>
          )}
        </section>

        <button
          onClick={() => alert("Payment Successful!")}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500 transition"
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
