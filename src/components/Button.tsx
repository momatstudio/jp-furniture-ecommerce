import React from "react";

interface ButtonProps {
  name: string;
  color: string;
}
export default function Button({ name, color }: ButtonProps) {
  return (
    <button
      className="w-[180px] h-[50px] border-1 cursor-pointer border-[whites] hover:border-[#A42300] hover:bg-[#A42300] hover:text-white"
      style={{ borderColor: color }}
    >
      {name}
    </button>
  );
}
