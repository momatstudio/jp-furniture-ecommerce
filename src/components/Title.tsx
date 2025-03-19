import React from "react";
import Button from "./Button";
import Link from "next/link";

interface TitleProps {
  name: string;
  description: string;
}
export default function Title({ name, description }: TitleProps) {
  return (
    <div className="py-4">
      <h2 className="pt-5">{name}</h2>

      <div className="flex justify-between items-center">
        <span>{description}</span>
        <Link href="/shop" className="hidden md:block">
          <Button name="SHOP NOW" />
        </Link>
      </div>
    </div>
  );
}
