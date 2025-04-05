"use client";
import Link from "next/link";
import React from "react";
import Product from "../Product";
// import { products } from "../../../data";
import { useProducts } from "@/context/ProductsContext";

export default function Products() {
  const { products } = useProducts();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map(
          (
            item: {
              slug: string;
              name?: string;
              price?: number;
              imageUrl?: string;
            },
            index: React.Key
          ) => (
            <Link href={`/shop/product/${item.slug}`} key={index}>
              <Product
                product={{
                  id: item.slug,
                  name: item.name || "Unnamed Product",
                  price: item.price || 0,
                  imageUrl: item.imageUrl || "/default-image.jpg",
                  slug: item.slug,
                }}
              />
            </Link>
          )
        )}
      </div>
    </>
  );
}
