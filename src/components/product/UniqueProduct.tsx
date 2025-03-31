import React from "react";
import DisplayProduct from "./DisplayProduct";
import ProductSummary from "./ProductSummary";
import { Product } from "@/types";

export default function UniqueProduct({ product }: Product) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <DisplayProduct product={product} />
      <ProductSummary product={product} />
    </div>
  );
}
