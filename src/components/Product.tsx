"use client";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

interface ProductProps {
  product: {
    name: string;
    price: number;
    image: string;
    slug: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center bg-white border-[#A42300] border-1 hover:border-red-700 py-4 font-light cursor-pointer relative h-full p-4">
      <Image
        alt="product"
        width={250}
        height={250}
        src={product.image}
        className="object-contain"
      />
      <span className="text-center mt-auto">{product.name}</span>
      <span className="py-2">R{product.price}.00</span>
      <button
        onClick={() => addToCart(product)}
        className="flex items-center border-1 border-red-800 h-[40] px-4 hover:bg-[#A42300] hover:text-white cursor-pointer mt-auto"
      >
        Add to cart{" "}
        <FiArrowRight className="ml-1 text-red-800 hover:text-white" />
      </button>
    </div>
  );
}
