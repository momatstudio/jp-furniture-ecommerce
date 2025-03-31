"use client";
import React, { useState } from "react";
import ShippingForm from "@/components/checkout/ShippingForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/Footer";
import HeaderLite from "@/components/HeaderLite";
import Breadcrumb from "@/components/Breadcrumb";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    primaryPhone: "",
    secondaryPhone: "",

    address: "",
    city: "",
    region: "",
    postalCode: "",
  });

  console.log(formData);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
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

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.region.trim()) {
      newErrors.city = "Region is required";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    } else if (!/^\d{4}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Please enter a valid 4-digit postal code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      const orderData = {
        items: cartItems.map((item) => ({
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          image: item.product.image,
        })),
        customerDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          primaryPhone: formData.primaryPhone,
          secondaryPhone: formData.secondaryPhone,
        },
        deliveryInfo: {
          address: formData.address,
          city: formData.city,
          region: formData.region,
          postalCode: formData.postalCode,
        },
        subtotal: total,
        shipping: 100,
        tax: total * 0.1,
        total: total + 100 + total * 0.1,
      };

      const encodedOrder = encodeURIComponent(JSON.stringify(orderData));
      router.push(`/order-summary?order=${encodedOrder}`);
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
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.primaryPhone.trim() !== "" &&
      /^\d{10}$/.test(formData.primaryPhone) &&
      formData.address.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.region.trim() !== "" &&
      /^\d{4}$/.test(formData.postalCode)
    );
  };

  console.log(isFormValid());
  return (
    <>
      <HeaderLite />
      <h2 className="text-center pt-10">Checkout</h2>

      <div className="min-h-screen mt-[85px]">
        <div className="max-w-7xl mx-auto px-4 md:px-28 py-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <Link
                href="/"
                className="inline-block bg-[#A42300] text-white px-6 py-3 hover:bg-[#a42400]"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div>
              <Breadcrumb lastPage="Cart" currentPage="Checkout" />
              <span className="">
                Have an account?{" "}
                <Link
                  href="/api/auth/login"
                  className="text-indigo-700 hover:underline"
                >
                  <b>Login in</b>
                </Link>
              </span>
              <br />
              <br />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
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
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
