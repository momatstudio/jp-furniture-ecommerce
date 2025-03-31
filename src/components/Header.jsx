import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "../../data";

import ClientLoginButton from "@/components/ClientLoginButton";
import ClientCart from "@/components/ClientCart";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";

export default function Header() {
  return (
    <div className=" w-full z-50">
      {/* <div className="flex items-center justify-between h-4 p-4 md:px-[15%] border-b-0 border-[#A42300] bg-white">
        <div className="flex items-center font-[200] text-black">
          <FiPhone size={20} className="mr-2" />
          <span>{companyInfo.phone}</span>
        </div>
        <ul className="hidden md:flex space-x-4 ml-4">
          <li>
            <FiFacebook className="cursor-pointer hover:text-[#A42300]" />
          </li>
          <li>
            <FiInstagram className="cursor-pointer hover:text-[#A42300]" />
          </li>
        </ul>
      </div> */}
      <div className="flex items-center justify-between h-28 bg-white p-4 md:px-[15%] ">
        {/* <ul className="hidden md:flex space-x-4  text-sm font-[300]">
          <li className="flex items-center h-26 hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/">
              <b>Home</b>
            </Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/shop">
              <b>Shop</b>
            </Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/about">
              <b>About</b>
            </Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/contact">
              <b>Contact</b>
            </Link>
          </li>
        </ul> */}
        <Link href={`tel:${companyInfo.phone}`}>
          <div className="flex items-center font-[200] text-black">
            <BsPhone size={20} className="mr-2 hover:text-[#A42300]" />
            <span className="hidden md:block">{companyInfo.phone}</span>
          </div>
        </Link>

        <div className=" absolute top-0 left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src={"/logo1.svg"}
              height={70 / 1.3}
              width={143 / 1.3}
              alt={"JP Furniture logo"}
              className=" cursor-pointer rounded-full"
            />
          </Link>
        </div>

        <div className=" flex items-center text-black cursor-pointer">
          <CiSearch
            size={22}
            className="hidden md:block hover:text-[#A42300]"
          />
          <ClientLoginButton />
          <ClientCart />
          <div className=" flex ml-6">
            <CiMenuBurger size={22} />
            <span className="hidden md:block ml-2">MENU</span>
          </div>
        </div>
      </div>
    </div>
  );
}
