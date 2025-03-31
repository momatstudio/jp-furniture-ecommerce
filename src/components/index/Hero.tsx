import React from "react";
import { slideShow } from "../../../data";
import Button from "../Button";
import { FiSearch } from "react-icons/fi";

export default function Hero() {
  return (
    <div
      className=" bg-[#ffe2da] bg-no-repeat bg-cover bg-center w-full h-[300px] mt-[85px]"
      style={{ backgroundImage: `url(${slideShow[0].image})` }}
    >
      <div className="flex flex-col justify-center items-center md:items-start text-white py-10 px-4 md:px-0 md:mx-[15%] h-full">
        <h1 className=" text-5xl font-bold w-full md:w-2/3 leading-[64px] text-center md:text-start pt-10">
          Furniture
        </h1>
        <div
          className="text-xl md:text-[20px] pb-7 text-center md:text-start pt-10"
          style={{ letterSpacing: 1.5 }}
        >
          View our extensive collection of luxury furniture
        </div>
      </div>
    </div>
  );
}
