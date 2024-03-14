"use client";

import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
  title: ReactElement;
  text: ReactElement;
  image: ReactElement;
  link: ReactElement;
}
export default function ImageCard({ title, text, image, link }: Props) {
  return (
    <div className="h-[200vh] relative">
      <div className="sticky inset-y-40">
        <div className="m-10 mb-96">
          <div className="flex justify-evenly gap-12">
            <div className="flex flex-col pt-5 justify-evenly gap-6 w-1/2">
              {title}
              {text}
              {link}
            </div>
            {image}
          </div>
        </div>
      </div>
    </div>
  );
}
