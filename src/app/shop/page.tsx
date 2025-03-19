"use client";
import Header from "@/components/Header";
import Products from "@/components/index/Products";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <div className="p-4 md:px-[15%]">
        <Products />
        {/* <Footer/> */}
      </div>
    </>
  );
}
