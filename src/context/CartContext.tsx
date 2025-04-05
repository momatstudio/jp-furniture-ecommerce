"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
};

type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  product: Product;
};

type CartContextType = {
  items: CartItem[];
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [storedItems, setStoredItems] = useLocalStorage<CartItem[]>(
    "cart-items",
    []
  );

  useEffect(() => {
    if (isClient) {
      // Only update items when on the client
      setItems(storedItems || []);
    }
  }, [isClient, storedItems]);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setStoredItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.slug
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...currentItems,
        {
          id: product.slug,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity,
          product: product,
        },
      ];
    });
  };

  const removeFromCart = (productId: string) => {
    setStoredItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setStoredItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setStoredItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
