import Link from "next/link";
import React from "react";

export default function EmptyCart() {
  return (
    <div className="p-4 md:px-[15%] min-h-[60vh] mt-[85px]">
      <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
      <p>
        Your cart is empty.{" "}
        <Link href="/shop" className="text-[#A42300]">
          Continue shopping
        </Link>
      </p>
    </div>
  );
}
