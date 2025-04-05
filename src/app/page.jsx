import { Header, HeroFullScreen, Products, Title, Footer } from "@/components/";

export default function Home() {
  return (
    <>
      <Header />

      <HeroFullScreen />
      <div className="p-4 md:px-[15%]">
        <Title name="Custom Design" />
        <Products />
        {/* <ProductAd /> */}
      </div>
      <Footer />
    </>
  );
}
