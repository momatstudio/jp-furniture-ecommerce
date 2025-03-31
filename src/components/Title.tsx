import React from "react";

interface TitleProps {
  name: string;
}
export default function Title({ name }: TitleProps) {
  return (
    <div className=" flex justify-center py-16">
      <h2 className="">{name}</h2>
    </div>
  );
}
