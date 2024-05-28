import React from "react";
import TitleCard from "@/app/ui/home/TitleCard";
import VideoHero from "@/app/ui/components/VideoHero";
import {
  AbsoluteInstallationsText,
  AbsoluteInstallationsTitle,
  ContactUsLink,
  SolutionsText,
  SolutionsTitle,
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
        src="https://www.youtube.com/embed/8cHCL5jLFHM?si=j2zM0iV1TWJCnXQU"
      ></VideoHero>
      <ImageCard
        title={<DIYTitle />}
        text={<DIYText />}
        image={<DIYImage />}
        link={<DIYLink />}
      ></ImageCard>
      <div className="h-96"></div>
      <VideoHero
        title={<SolutionsTitle />}
        text={<SolutionsText />}
        link={<ServicesLink />}
        src="https://www.youtube.com/embed/wltObP0JJm8?si=TFJWvGgn8QHpcqCd"
      ></VideoHero>
    </>
  );
}
