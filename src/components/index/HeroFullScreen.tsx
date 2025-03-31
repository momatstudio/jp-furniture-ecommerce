import React from "react";
import { slideShow } from "../../../data";
import Button from "../Button";

export default function HeroFullScreen() {
  return (
    <div
      className=" bg-[#ffe2da] bg-no-repeat bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${slideShow[0].image})` }}
    >
      <div className="flex flex-col justify-center items-center md:items-start text-white px-4 md:px-0 md:mx-[15%] h-full">
        <h1 className="absolute font-bold text-5xl leading-[60px] left-0 right-0 text-center">
          Furniture
        </h1>
        <div className="absolute flex justify-center  bottom-20 left-0 right-0 ">
          <Button name="SHOP NOW" color={"#ffffff"} route="/shop" />
          <div className="hidden md:block">
            <Button name="CONTACT US" color={"#ffffff"} route="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
