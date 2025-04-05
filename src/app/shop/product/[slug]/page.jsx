"use client";
import React from "react";
import Header from "@/components/Header";
import { useProducts } from "@/context/ProductsContext";
import {
  Footer,
  UniqueProduct,
  UniqueProductSpecs,
  Breadcrumb,
} from "@/components";

export default function ProductPage({ params }) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;
  const { products } = useProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Header />
      <div className="p-4 md:px-[15%] mt-[85px]">
        <Breadcrumb lastPage={"Shop"} currentPage={product.name} />

        <UniqueProduct product={product} />

        <UniqueProductSpecs product={product} />
      </div>
      <Footer />
    </>
  );
}
