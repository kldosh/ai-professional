"use client";

import React, { useState } from "react";
import Image from "next/image";
import Gallery from "@/app/ui/components/Gallery/Gallery";

export default function Page() {
  const images = [
    "/Cloud solutions.jpg",
    "/DIY.png",
    "/King11.JPG",
    "/AI_Pro_Logo.jpg",
    "/Commercial-CCTV.JPG",
    "/Commercial-TV-Mounting-1.JPG",
    "/Commercial-TV-Mounting-2.JPG",
    "/Commercial-TV-Mounting-3.JPG",
    "/Cloud solutions.jpg",
    "/DIY.png",
    "/King11.JPG",
    "/AI_Pro_Logo.jpg",
    "/Commercial-CCTV.JPG",
    "/Commercial-TV-Mounting-1.JPG",
    "/Commercial-TV-Mounting-2.JPG",
  ];

  return <Gallery images={images}></Gallery>;
}
