"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMenu,
  FiPhone,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { companyInfo } from "../../data";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

// interface HeaderProps {
//   user: {
//     family_name?: String;
//     given_name?: String;
//     name?: String;
//     nickname?: String;
//     picture?: string;
//     sid?: String;
//     sub?: String;
//     updated_at?: String;
//   };
// }
export default function Header() {
  const router = useRouter();
  const { user } = useUser();
  const { cartItems } = useCart();

  return (
    <>
      <div className="flex items-center justify-between h-6 p-4 md:px-[15%] border-t-6 border-[#A42300] bg-white">
        <div className="flex items-center font-[200] text-black">
          <FiPhone size={20} className="mr-2" />
          <span>{companyInfo.phone}</span>
        </div>
        <ul className="hidden md:flex space-x-4 ml-4">
          <li>
            <FiFacebook className="cursor-pointer  hover:text-[#A42300]" />
          </li>
          <li>
            <FiInstagram className="cursor-pointer  hover:text-[#A42300]" />
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between h-20 bg-white drop-shadow-sm p-4 md:px-[15%] ">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            height={70 / 0.75}
            width={143 / 0.75}
            alt={"JP Furniture logo"}
            className="flex cursor-pointer"
          />
          {/* <Image
            src={"/logo.svg"}
            height={70 * 0.16}
            width={1438 * 0.16}
            alt={"JP Furniture logo"}
            className="md:hidden cursor-pointer"
          /> */}
        </Link>

        {/* Search box */}
        {/* <div className="hidden md:flex items-center p-1.5 border-1 border-[#A42300]">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-0"
            />
            <button className="pl-1">
              <FiSearch />
            </button>
          </form>
        </div> */}

        <ul className="hidden md:flex space-x-4  text-sm font-[300]">
          <li className="flex items-center h-26 hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="flex items-center h-26  hover:text-[#A42300] cursor-pointer hover:underline">
            <Link href={"/api/auth/logout"}>Logout</Link>
          </li>
        </ul>

        {user ? (
          <div
            className="hidden md:flex h-[40px] w-[40px] rounded-full"
            onClick={() => router.push("/profile")}
          >
            {/* {user?.name} */}
            <Image
              src={user?.picture || "/default-avatar.png"}
              width={40}
              height={40}
              className="rounded-full"
              alt={user?.name || "User avatar"}
            />
          </div>
        ) : (
          <div
            className="hidden md:flex items-center text-sm cursor-pointer  hover:text-white hover:bg-[#A42300] bg-white  border-1 px-4 py-2"
            onClick={() => router.push("/api/auth/login")}
          >
            <FiUser className="text-[14px] mx-1" />
            <span>Sign in</span>
          </div>
        )}

        <div className=" flex items-center text-black cursor-pointer">
          {/* <FiSearch
            size={25}
            className="mr-6 md:hidden block hover:text-[#A42300]"
          /> */}
          <div className="flex items-center text-black relative">
            <Link href="/cart">
              <FiShoppingCart size={25} className="hover:text-[#A42300]" />
              {cartItems && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#A42300] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          <FiMenu size={30} className="ml-4 md:hidden" />
        </div>
      </div>
    </>
  );
}
