"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Products from "@/components/index/Products";
import Hero from "@/components/index/Hero";

export default function Home() {
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
