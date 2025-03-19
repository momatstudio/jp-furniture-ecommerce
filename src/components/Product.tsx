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
    <div className="flex flex-col items-center border-1 bg-white border-[#dedede] hover:border-[#A42300] py-4 font-light cursor-pointer relative h-full">
      <Image
        alt="product"
        width={250}
        height={250}
        src={product.image}
        className="object-contain"
      />
      <span>{product.name}</span>
      <span className="py-2">R{product.price}</span>
      <button
        onClick={() => addToCart(product)}
        className="flex items-center border-1 h-[40] px-4 hover:bg-[#A42300] hover:text-white cursor-pointer mt-auto"
      >
        Add to cart <FiArrowRight className="ml-1" />
      </button>
    </div>
  );
}
