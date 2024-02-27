import React from "react";
import TitleCard from "@/app/ui/home/TitleCard";
import VideoHero from "@/app/ui/components/VideoHero";
import {
  AbsoluteInstallationsText,
  AbsoluteInstallationsTitle,
  ContactUsLink,
  SaveTheDayText,
  SaveTheDayTitle,
  ServicesLink,
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
        link={<ServicesLink />}
        src="/AI_Professional_2022_Promo_Edit_1-HD_1080p.mp4"
      ></VideoHero>
      <div className="h-96"></div>
      <ImageCard
        title={<ServicesTitle />}
        text={<ServicesText />}
        image={<ServicesImage />}
      ></ImageCard>
      <div className="h-96"></div>
      <VideoHero
        title={<AbsoluteInstallationsTitle />}
        text={<AbsoluteInstallationsText />}
        link={<ContactUsLink />}
        src="/1080p.mp4"
      ></VideoHero>
    </>
  );
}
