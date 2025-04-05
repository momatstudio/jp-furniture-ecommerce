"use client";
import Product from "./Product";

interface ProductProps {
  product: {
    name: string;
    slug: string;
    price: number;
    imageUrl: string;
    description: string;
    category: string;
    inStock: boolean;
    dimensions: string;
    features: {
      Features: string;
      Benefits: string;
      DIMENSIONS: string;
      "Credit Terms": string;
      Delivery: string;
      Returns: string;
    };
  };
}

export default function ClientProduct({ product }: ProductProps) {
  return <Product product={product} />;
}
