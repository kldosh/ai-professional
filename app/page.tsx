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
  DIYImage,
  DIYText,
  DIYTitle,
  DIYLink,
} from "@/app/ui/components/Animation/ImageCardAnimations";

export default function Home() {
  return (
    <>
      <TitleCard></TitleCard>{" "}
      <VideoHero
        title={<AbsoluteInstallationsTitle />}
        text={<AbsoluteInstallationsText />}
        link={<ContactUsLink />}
        src="/1080p.mp4"
        posterSrc="/AI_Pro_Logo_wide.jpg"
      ></VideoHero>
      <ImageCard
        title={<DIYTitle />}
        text={<DIYText />}
        image={<DIYImage />}
        link={<DIYLink />}
      ></ImageCard>
      <div className="h-96"></div>
      <VideoHero
        title={<SaveTheDayTitle />}
        text={<SaveTheDayText />}
        link={<ServicesLink />}
        src="/AI_Professional_2022_Promo_Edit_1-HD_1080p.mp4"
        posterSrc="/superlogo.png"
      ></VideoHero>
    </>
  );
}
