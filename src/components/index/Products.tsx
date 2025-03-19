import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Product from "../Product";
import Button from "../Button";
import Title from "../Title";
import { products } from "../../../data";

export default function Products() {
  return (
    <>
      <Title
        name="Products"
        description="View our extensive collection of luxury furniture"
      />
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
