import Header from "@/components/Header";
import HeroFullScreen from "@/components/index/HeroFullScreen";
import Products from "@/components/index/Products";
// import ProductAd from "@/components/index/ProductAd";
import Title from "@/components/Title";
import Footer from "@/components/footer/Footer";

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
