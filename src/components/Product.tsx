"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

interface ProductProps {
  product: {
    name: string;
    price: number;
    imageUrl: string;
    slug: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col items-center bg-white border-gray-400 border-1 hover:border-black py-4 font-light cursor-pointer relative h-full p-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        alt="product"
        width={250}
        height={250}
        src={product.imageUrl}
        className="object-contain"
      />
      <span className="text-center mt-auto">{product.name}</span>
      <span className="py-2">R{product.price}.00</span>
      <button
        onClick={() => addToCart(product)}
        className="flex items-center border-1 border-gray-400 h-[40] px-4 cursor-pointer mt-auto"
        style={{
          backgroundColor: hover ? "black" : "white",
          borderColor: hover ? "black" : "gray",
          color: hover ? "white" : "black",
        }}
      >
        Add to cart{" "}
        <FiArrowRight style={{ color: hover ? "white" : "black" }} />
      </button>
    </div>
  );
}
