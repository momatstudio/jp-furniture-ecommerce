"use client";
import {
  Breadcrumb,
  CartItem,
  CartItemsCalculations,
  EmptyCart,
  Footer,
  Header,
} from "@/components";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <>
        <Header />
        <EmptyCart />
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
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <CartItemsCalculations total={total} />
        </div>
      </div>
      <Footer />
    </>
  );
}
