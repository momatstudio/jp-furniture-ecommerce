"use client";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProductSummary({ product }: Product) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <div className="text-2xl font-medium">R{product.price}</div>
      <p>{product.description}</p>

      <div className="space-y-4">
        <div className="flex items-center gap-4 pb-4">
          <button
            className="px-3 py-1 border rounded-md cursor-pointer"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="px-3 py-1 border rounded-md cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <div className="flex gap-4">
          <button
            className="flex-1 bg-black text-white py-2  hover:bg-gray-800 transition cursor-pointer"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>
          <button
            className="flex-1 bg-[#A42300] text-white py-2  hover:bg-red-700 transition cursor-pointer"
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
  );
}
