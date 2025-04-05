import { Footer, Header, Products, Hero, Breadcrumb } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="p-4 md:px-[15%]">
        <Breadcrumb currentPage="Shop" />
        <Products />
      </div>
      <Footer />
    </>
  );
}
