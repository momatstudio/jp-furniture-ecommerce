"use client";
import React, { useState } from "react";
import ClientHeader from "@/components/ClientHeader";
import { products } from "../../../../../data";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);
  const router = useRouter();

  if (!product) return <div>Product not found</div>;

  const [selectedFeature, setSelectedFeature] = useState<
    keyof typeof product.features | null
  >(null);

  return (
    <>
      <ClientHeader />
      <div className="p-4 md:px-[15%]">
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/shop" className="text-gray-500 hover:text-gray-700">
            Shop
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-2xl font-medium">R{product.price}</p>
            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button
                  className="px-3 py-1 border rounded-md"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="px-3 py-1 border rounded-md"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  className="flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                  onClick={() => addToCart(product, quantity)}
                >
                  Add to Cart
                </button>
                <button
                  className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-500 transition"
                  onClick={() => {
                    addToCart(product, quantity);
                    router.push("/checkout");
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="flex justify-between gap-4">
              {Object.keys(product.features).map((feature) => (
                <button
                  key={feature}
                  className={`p-4 text-center flex-1 rounded-t-lg transition-colors
                    ${
                      selectedFeature === feature
                        ? "bg-gray-100 font-medium"
                        : "hover:bg-gray-50"
                    }`}
                  onClick={() =>
                    setSelectedFeature(feature as keyof typeof product.features)
                  }
                >
                  <h3 className="font-medium">{feature}</h3>
                </button>
              ))}
            </div>

            {selectedFeature && (
              <div className="bg-gray-100 p-6 rounded-lg animate-fade-in">
                <p className="text-gray-600 text-center">
                  {selectedFeature && product.features[selectedFeature]}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
