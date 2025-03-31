import { Product } from "@/types";
import Image from "next/image";
import React from "react";

export default function DisplayProduct({ product }: Product) {
  return (
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
  );
}
