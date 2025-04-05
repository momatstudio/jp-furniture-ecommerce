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
    <div className="md:col-span-1">
      <div className="bg-white rounded-lg sticky top-6">
        <h3 className="mb-6 text-2xl font-medium">Order Summary</h3>
        <div className="space-y-4">
          {cartItems.map((item) => {
            if (!item.product) return null;
            return (
              <div
                key={item.product.slug}
                className="flex items-center space-x-4 py-2 border-gray-400 border-b-1 last:border-b-0"
              >
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-normal">{item.product.name}</h3>
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
              <h3 className="font-normal">SubTotal</h3>
              <h3 className="font-normal">R{total}</h3>
            </div>
            <div className="flex justify-between text-sm">
              <h3 className="font-normal">Shipping</h3>
              <h3 className="font-normal">Free</h3>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <h3 className="font-normal">Total</h3>
              <h3 className="font-normal">R{total}</h3>
            </div>
          </div>

          <button
            className={`w-full py-3 transition mt-6  ${
              !isFormValid
                ? "bg-gray-400 cursor-not-allowed opacity-50 "
                : "bg-[black] hover:hover:bg-[#000000cf] cursor-pointer"
            } text-white`}
            onClick={handleSubmit}
            // disabled={!isFormValid}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
