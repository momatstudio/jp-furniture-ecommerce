import Image from "next/image";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
}

export default function CartItem({
  item,
  updateQuantity,
  removeFromCart,
}: CartItemProps) {
  return (
    <div key={item.id} className="flex gap-4 border-b py-4">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={100}
        height={100}
        className="object-cover"
      />
      <div className="flex-grow">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">R{item.price}</p>
        <div className="flex items-center justify-between gap-2 mt-2">
          <div>
            <button
              className="px-2 py-1 border"
              onClick={() =>
                updateQuantity(item.id, Math.max(0, item.quantity - 1))
              }
            >
              -
            </button>
            <span className="mx-3">{item.quantity}</span>
            <button
              className="px-2 py-1 border"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
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
  );
}
