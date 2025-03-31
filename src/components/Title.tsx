import React from "react";

interface TitleProps {
  name: string;
  description?: string;
  show?: Boolean;
}
export default function Title({ name, show }: TitleProps) {
  return (
    <div className=" flex justify-center py-16">
      <h2 className="">{name}</h2>
    </div>
  );
}
