"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

export default function ClientCart() {
  const { cartItems } = useCart();
  return (
    <Link href="/cart" className="flex items-center text-black relative ml-4">
      <CiShoppingCart className="hover:text-[#A42300] text-[25px] md:text-[20px]" />
      {cartItems && cartItems.length > 0 && (
        <span className="absolute -top-1.5 -right-2 bg-[#A42300] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
}
