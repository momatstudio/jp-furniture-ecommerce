"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { HeaderLite, Footer, Breadcrumb } from "@/components";

import Link from "next/link";
import Image from "next/image";

interface OrderData {
  client: {
    firstName: string;
    lastName: string;
    email: string;
    primaryPhone: string;
    secondaryPhone: string;
    address: string;
    city: string;
    region: string;
    postalCode: string;
    latitude: string;
    longitude: string;
    preferredPaymentDate: string;
  };
  items: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }[];
  orderInfo: {
    orderDate: string;
    orderNumber: string;
  };
  payments: any[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: string;
}

function OrderSummaryContent() {
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [orderData, setOrderData] = useState<OrderData>({
    client: {
      firstName: "",
      lastName: "",
      email: "",
      primaryPhone: "",
      secondaryPhone: "",
      address: "",
      region: "",
      city: "",
      postalCode: "",
      latitude: "",
      longitude: "",
      preferredPaymentDate: "01",
    },
    items: [{ id: "", title: "", price: 0, quantity: 0, imageUrl: "" }],
    orderInfo: {
      orderDate: "",
      orderNumber: "",
    },
    payments: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
    status: "",
  });
  const [error, setError] = useState<string>("");

  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const orderParam = searchParams.get("order");
      if (!orderParam) throw new Error("No order data found");

      const parsedOrder = JSON.parse(decodeURIComponent(orderParam));
      if (!parsedOrder.items || !parsedOrder.client) {
        throw new Error("Invalid order data");
      }

      setOrderData(parsedOrder);
    } catch (err) {
      console.error("Error parsing order data:", err);
      setError("Failed to load order details");
    }
  }, [searchParams]);

  const handlePayment = () => {
    if (paymentMethod === "payfast") {
      // PayFast Configuration
      const paymentData = {
        merchant_id: "10038071", // Replace with your PayFast merchant ID
        merchant_key: "r1y2ikfcgyd80", // Replace with your PayFast merchant key
        amount: orderData.total.toFixed(2),
        item_name: `Order ${orderData.orderInfo.orderNumber}`,
        name_first: orderData.client.firstName,
        name_last: orderData.client.lastName,
        email_address: orderData.client.email,
        cell_number: orderData.client.primaryPhone,
        return_url: `${window.location.origin}/payment-success`,
        cancel_url: `${window.location.origin}/payment-cancelled`,
        notify_url: `${window.location.origin}/api/payfast-notify`, // Your webhook endpoint
      };

      // Create and submit form
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://sandbox.payfast.co.za/eng/process"; // Use https://www.payfast.co.za/eng/process for production

      Object.entries(paymentData).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } else {
      // Handle bank transfer
      alert("Bank transfer details have been displayed");
    }
  };

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
                        {item.imageUrl ? (
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="object-cover rounded-md"
                            priority
                          />
                        ) : (
                          <div className="w-[40px] h-[40px] bg-gray-200 rounded-md" />
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="font-medium text-gray-900">R{item.price}</p>
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
                      {orderData.client.firstName}
                    </p>
                    <p className="text-gray-700">{orderData.client.lastName}</p>
                    <p className="text-gray-600">{orderData.client.address}</p>
                    <p className="text-gray-600">{orderData.client.city}</p>
                    <p className="text-gray-600">
                      {orderData.client.region}, {orderData.client.postalCode}
                    </p>
                    <p className="text-gray-600">
                      Phone: {orderData.client.primaryPhone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg sticky top-6">
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
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>R{orderData.total?.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-3 text-gray-700">
                      Select Payment Method
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setPaymentMethod("transfer")}
                        className={`flex justify-center items-center p-3 border rounded-md transition-all ${
                          paymentMethod === "transfer"
                            ? "border-black bg-gray-50"
                            : "border-gray-200 hover:border-black"
                        }`}
                      >
                        <Image
                          src={"/bank tranfer.png"}
                          alt="bank transfer"
                          width={40}
                          height={40}
                        />
                      </button>
                      <button
                        onClick={() => setPaymentMethod("payfast")}
                        className={`flex justify-center items-center p-3 border rounded-md transition-all ${
                          paymentMethod === "payfast"
                            ? "border-black bg-gray-50"
                            : "border-gray-200 hover:border-black"
                        }`}
                      >
                        <Image
                          src={"/Payfast Logo.png"}
                          alt="PayFast"
                          width={100}
                          height={40}
                          className="object-contain"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Bank Transfer Details - Show only when transfer is selected */}
                  {paymentMethod === "transfer" && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="text-sm font-medium mb-3 text-gray-700">
                        Bank Transfer Details
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Bank Name</span>
                          <span className="font-medium text-gray-900">
                            Capitec Bank
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Account Holder</span>
                          <span className="font-medium text-gray-900">
                            Phillmon
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Account Number</span>
                          <span className="font-medium text-gray-900">
                            123456789
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Reference</span>
                          <span className="font-medium text-gray-900">
                            {orderData.orderInfo.orderNumber || "ORDER-123456"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handlePayment}
                    className="w-full bg-black text-white py-3 hover:bg-[#000000cf] transition-colors font-medium text-lg mt-6 cursor-pointer rounded-md"
                  >
                    {paymentMethod === "payfast"
                      ? "Pay with PayFast"
                      : "Confirm Order"}
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
