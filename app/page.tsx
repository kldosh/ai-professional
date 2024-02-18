import React from "react";
import TitleCard from "@/app/ui/home/TitleCard";
import VideoHero from "@/app/ui/components/VideoHero";
import {
  SaveTheDayText,
  SaveTheDayTitle,
} from "@/app/ui/components/Animation/VideoHeroAnimations";
import ImageCard from "@/app/ui/components/ImageCard";
import {
  ServicesImage,
  ServicesText,
  ServicesTitle,
} from "@/app/ui/components/Animation/ImageCardAnimations";

export default function Home() {
  return (
    <>
      <TitleCard></TitleCard>{" "}
      <VideoHero
        title={<SaveTheDayTitle />}
        text={<SaveTheDayText />}
        src="/AI_Professional_2022_Promo_Edit_1-HD_1080p.mp4"
      ></VideoHero>
      <div className="h-96"></div>
      <ImageCard
        title={<ServicesTitle />}
        text={<ServicesText />}
        image={<ServicesImage />}
      ></ImageCard>
    </>
  );
}
