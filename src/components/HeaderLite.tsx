import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderLite() {
  return (
    <div className="flex items-center justify-center h-28 bg-white p-4 md:px-[15%] ">
      <Link href="/">
        <Image
          src={"/logo1.svg"}
          height={70 / 1.2}
          width={143 / 1.2}
          alt={"JP Furniture logo"}
          className="hidden md:flex cursor-pointer"
        />
        <Image
          src={"/logo1.svg"}
          height={70 / 1.5}
          width={143 / 1.5}
          alt={"JP Furniture logo"}
          className="md:hidden cursor-pointer"
        />
      </Link>
    </div>
  );
}
