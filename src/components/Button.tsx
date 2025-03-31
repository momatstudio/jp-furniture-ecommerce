"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  name: string;
  color: string;
  route?: string;
}
export default function Button({ name, color, route }: ButtonProps) {
  const router = useRouter();
  return (
    <button
      className="w-[160px] h-[50px] border-1 cursor-pointer border-[whites] hover:border-[#4C0000] hover:bg-[white] hover:text-black mx-1"
      style={{ borderColor: color }}
      onClick={() => router.push(route)}
    >
      {name}
    </button>
  );
}
