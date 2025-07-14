import React from "react";
import { slideShow } from "../../../data";
import Button from "../Button";

export default function HeroFullScreen() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${slideShow[0].image})` }}
      role="banner"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center md:items-start h-full px-6 md:px-[15%] text-white text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl animate-fadeIn pt-10">
          Discover Exquisite Quality Furniture for Your Home
        </h1>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <Button name="SHOP NOW" color="#ffffff" route="/shop" />
          <Button name="CONTACT US" color="#ffffff" route="/contact" />
        </div>
      </div>
    </section>
  );
}
