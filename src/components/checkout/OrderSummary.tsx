"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface OrderSummaryProps {
  total: number;
  isFormValid: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function OrderSummary({
  total,
  isFormValid,
  handleSubmit,
}: OrderSummaryProps) {
  const { cartItems } = useCart();
  return (
    <div className="bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item) => {
          if (!item.product) return null;
          return (
            <div
              key={item.product.slug}
              className="flex items-center space-x-4 py-2 border-gray-400 border-b-1 last:border-b-0"
            >
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="">R{item.product.price * item.quantity}</div>
            </div>
          );
        })}

        {/* <PaymentMethods /> */}
        <div className="pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>R{total}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>R{total}</span>
          </div>
        </div>

        <button
          className={`w-full py-3 transition mt-6  ${
            !isFormValid
              ? "bg-gray-400 cursor-not-allowed opacity-50 "
              : "bg-[#A42300] hover:bg-[#A42400] cursor-pointer"
          } text-white`}
          onClick={handleSubmit}
          // disabled={!isFormValid}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
