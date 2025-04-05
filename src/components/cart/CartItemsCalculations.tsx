"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function CartItemsCalculations({ total }: { total: number }) {
  const router = useRouter();
  return (
    <div className="lg:w-1/3">
      <div className="bg-gray-50 p-4 rounded">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>R{total}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>R{total}</span>
          </div>
        </div>
        <button
          onClick={() => router.push("/checkout")}
          className="w-full bg-[black] text-white py-3 hover:bg-[#000000c5] transition mt-4 cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
