"use client";
import Header from "@/components/Header";
import Hero from "@/components/index/Hero";
import Products from "@/components/index/Products";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ClientHome() {
  const { user, error, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    );

  return (
    <>
      <Header />

      <Hero />
      <div className="p-4 md:px-[15%]">
        <Products />
      </div>
      <Footer />
    </>
  );
}
