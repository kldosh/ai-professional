"use client";

import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
  title: ReactElement;
  text: ReactElement;
  image: ReactElement;
}
export default function ImageCard({ title, text, image }: Props) {
  return (
    <div className="h-[200vh] relative">
      <div className="sticky top-1/2 transform -translate-y-1/3">
        <div className="mx-10 mb-10">
          <div className="flex justify-evenly gap-12">
            <div className="flex flex-col pt-5 gap-6">
              {title}
              {text}
            </div>
            {image}
          </div>
        </div>
      </div>
    </div>
  );
}
