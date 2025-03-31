import Link from "next/link";
import React from "react";
import Product from "../Product";
import { products } from "../../../data";
import Breadcrumb from "../Breadcrumb";

export default function Products() {
  return (
    <>
      <Breadcrumb currentPage="Shop" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((item, index) => (
          <Link href={`/shop/product/${item.slug}`} key={index}>
            <Product product={item} />
          </Link>
        ))}
      </div>
    </>
  );
}
