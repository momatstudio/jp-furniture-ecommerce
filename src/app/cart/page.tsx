"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div className="p-4 md:px-[15%] min-h-[60vh] mt-[85px]">
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <p>
            Your cart is empty.{" "}
            <Link href="/shop" className="text-[#A42300]">
              Continue shopping
            </Link>
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="p-4 md:px-[15%] mt-[85px]">
        <Breadcrumb lastPage={"Shop"} currentPage="Cart" />
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b py-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div className="flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">R{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 border"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(0, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 border"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">R{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
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
                className="w-full bg-[#A42300] text-white py-3 hover:bg-red-700 transition mt-4"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
