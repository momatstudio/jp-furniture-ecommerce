"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ShippingForm from "@/components/checkout/ShippingForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/Footer";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    primaryPhone: "",
    secondaryPhone: "",
    address: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.primaryPhone.trim()) {
      newErrors.primaryPhone = "Primary phone number is required";
    } else if (!/^\d{10}$/.test(formData.primaryPhone)) {
      newErrors.primaryPhone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      router.push("/order-summary");
    } else {
      alert("Please fill in all required fields correctly");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item?.product?.price ?? 0) * item.quantity,
    0
  );

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.primaryPhone.trim() !== "" &&
      /^\d{10}$/.test(formData.primaryPhone) &&
      formData.address.trim() !== ""
    );
  };

  console.log(isFormValid());
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-28 py-8">
          <Breadcrumb lastPage={"Cart"} currentPage="Checkout" />

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <Link
                href="/"
                className="inline-block bg-[#A42300] text-white px-6 py-2 rounded-md hover:bg-[#a42400]"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ShippingForm
                formData={formData}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
              <OrderSummary
                total={total}
                isFormValid={isFormValid()}
                handleSubmit={handleSubmit}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
