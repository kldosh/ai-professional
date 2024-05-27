"use client";

import Review from "@/app/ui/components/Reviews/Review";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { ReactElement, useState } from "react";
import ReviewCarousel from "@/app/ui/components/Reviews/ReviewCarousel";

export default function Page() {
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col justify-center items-center">
      <div className="h-36"></div>
      <ReviewCarousel></ReviewCarousel>
    </div>
  );
}
