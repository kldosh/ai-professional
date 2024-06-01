import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  onClick: (src: string) => void;
}

export default function ImgContainer({ src, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(src)}
      className="h-72 as bg-gray-200 rounded-xl relative overflow-hidden group"
    >
      <Image
        src={src}
        alt=""
        fill={true}
        sizes="(min-width: 2760px) 14.17vw, (min-width: 2360px) 16.58vw, (min-width: 1980px) 20vw, (min-width: 1580px) 25vw, (min-width: 1200px) 33.33vw, (min-width: 800px) 50vw, (min-width: 440px) 100vw, calc(16.67vw + 334px)"
        className="object-cover group-hover:opacity-75"
      ></Image>
    </button>
  );
}
