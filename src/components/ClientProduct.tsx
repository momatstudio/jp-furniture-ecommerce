"use client";
import Product from "./Product";

export default function ClientProduct({ product }: { product: any }) {
  return <Product product={product} />;
}
