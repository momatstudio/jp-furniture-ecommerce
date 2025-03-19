import React from "react";
import { slideShow } from "../../../data";
import { FiArrowLeft } from "react-icons/fi";
import Button from "../Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-between items-center ">
      <div
        className=" bg-[#ffe2da] bg-no-repeat bg-cover bg-center w-full md:mx-[15%]"
        style={{ backgroundImage: `url(${slideShow[0].image})` }}
      >
        <div className="flex flex-col justify-center items-center md:items-start text-white py-10 px-4 md:p-10 h-full">
          <span className="text-5xl font-bold w-full md:w-2/3 leading-[60px] text-center md:text-start">
            Furniture Designed to Transform
          </span>
          <span className="text-xl md:text-[25px] pb-7 text-center md:text-start pt-10">
            View our extensive collection of luxury furniture
          </span>
          <Link href="/shop">
            <Button name="SHOP NOW" />
          </Link>
        </div>
      </div>
    </div>
  );
}
