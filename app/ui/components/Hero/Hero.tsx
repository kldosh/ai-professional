import Image from "next/image";
import React from "react";

interface Props {
  title: React.ReactElement;
  text: React.ReactElement;
  image: React.ReactElement;
}
export default function Hero({ title, text, image }: Props) {
  return (
    <div className="relative h-[75vh] text-ai-blue overflow-hidden">
      <div className="absolute inset-0">
        {image}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="relative z-10 flex flex-col p-8 justify-between items-center h-full text-center">
        {title}
        {text}
      </div>
    </div>
  );
}
