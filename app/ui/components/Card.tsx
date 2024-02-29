import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  image: React.ReactElement;
  title: string;
  description: string;
}
export default function Card({ link, image, title, description }: Props) {
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow">
      <Link href={link}>
        {image}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-ai-blue text-center">
            {title}
          </h5>
          <p className="mb-3 font-normal text-black">{description}</p>
        </div>
      </Link>
    </div>
  );
}
