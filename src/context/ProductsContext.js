"use client";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../lib/firebase";

// 1.Create context
const ProductsContext = createContext();

// 2.Create custom hook for easy access
export const useProducts = () => useContext(ProductsContext);

// 3.create a provider Component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(false);
    try {
      const querySnapshop = await getDocs(collection(db, "items"));
      const itemsList = querySnapshop.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(itemsList);
    } catch (error) {
      console.error("Error fetching items: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const value = {
    products,
    loading,
    fetchItems,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
