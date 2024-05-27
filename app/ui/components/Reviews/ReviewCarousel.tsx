import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import Review from "@/app/ui/components/Reviews/Review";
import { useState } from "react";

const reviews: string[] = [];
reviews.push("Review 1");
reviews.push("Review 2");
reviews.push("Review 3");
reviews.push("Review 4");
reviews.push("Review 5");
reviews.push("Review 6");
reviews.push("Review 7");
reviews.push("Review 8");
reviews.push("Review 9");
reviews.push("Review 10");

export default function ReviewCarousel() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(1);
  const [rightIndex, setRightIndex] = useState(2);

  const leftClicked = () => {
    const left = leftIndex;
    const center = centerIndex;

    setLeftIndex(left - 1);
    setCenterIndex(left);
    setRightIndex(center);
  };

  const rightClicked = () => {
    const center = centerIndex;
    const right = rightIndex;

    setLeftIndex(center);
    setCenterIndex(right);
    setRightIndex(right + 1);
  };

  return (
    <div className="flex justify-center space-x-8">
      <button
        onClick={leftClicked}
        className={leftIndex === 0 ? "hidden" : "visible"}
      >
        <ArrowLeftCircleIcon className="w-8"></ArrowLeftCircleIcon>
      </button>
      <Review text={reviews[leftIndex]}></Review>
      <Review text={reviews[centerIndex]}></Review>
      <Review text={reviews[rightIndex]}></Review>
      <button
        onClick={rightClicked}
        className={rightIndex === reviews.length - 1 ? "hidden" : "visible"}
      >
        <ArrowRightCircleIcon className="w-8"></ArrowRightCircleIcon>
      </button>
    </div>
  );
}
