"use client";

import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "../../data";
import { ClientLoginButton, Menu } from "@/components/";
import ClientCart from "@/components/ClientCart";
import { CiPhone, CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { BiPhoneCall } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* 🔔 Top Announcement Bar */}
      <div className="bg-[#A42300] text-white text-sm font-bold py-2 px-4 overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          🚚 FREE DELIVERY ON ALL ORDERS — SHOP NOW, TAKE ON CREDIT, & GET
          CUSTOM FURNITURE MADE JUST FOR YOU! 🛋️✨
        </motion.div>
      </div>

      {/* 🧭 Main Navigation */}
      <div
        className={`flex items-center justify-between h-[120px] px-4 md:px-[15%] shadow-sm ${
          scrolled ? "bg-white" : "bg-transparent"
        } transition-all duration-300`}
      >
        {/* Phone Contact */}
        <Link href={`tel:${companyInfo.phone}`} aria-label="Call us">
          <div
            className={`flex items-center  text-sm font-light hover:text-[#A42300] transition ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <BiPhoneCall size={25} className="mr-2 md:text-[20px]" />
            <span className="hidden md:inline">{companyInfo.phone}</span>
            <span className="md:hidden">CALL US</span>
          </div>
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            aria-label="JP Furniture Home"
            className="flex flex-col items-center text-center"
          >
            <Image
              src="/logo1.svg"
              width={55}
              height={55}
              alt="JP Furniture Logo"
              className="cursor-pointer rounded-full"
              priority
            />
            <h4
              className={`mt-1 text-[18px] font-extrabold tracking-wide uppercase ${
                scrolled ? "text-[#A42300]" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              J.P FURNITURE
            </h4>
            {/* Optional Tagline */}
            {/* <p
              className="text-[11px] text-gray-500 tracking-wide"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Elegant. Affordable. Yours.
            </p> */}
          </Link>
        </div>

        {/* Right Controls */}
        <div
          className={`flex items-center space-x-4 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <CiSearch
            size={25}
            className="hidden md:block hover:text-[#A42300] cursor-pointer"
            aria-label="Search"
          />
          <ClientLoginButton />
          <ClientCart />
          <Menu />
        </div>
      </div>
    </header>
  );
}
