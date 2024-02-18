import TitleCard from "@/app/ui/home/TitleCard";
import VideoHero from "@/app/ui/components/VideoHero";
import {
  SaveTheDayTitle,
  SaveTheDayText,
} from "@/app/ui/components/Animation/VideoHeroAnimations";
import ImageCard from "@/app/ui/components/ImageCard";
import {
  ServicesImage,
  ServicesText,
  ServicesTitle,
} from "@/app/ui/components/Animation/ImageCardAnimations";

export default function Page() {
  return (
    <>
      <TitleCard></TitleCard>
      <ImageCard
        title={<ServicesTitle />}
        text={<ServicesText />}
        image={<ServicesImage />}
      ></ImageCard>
    </>
  );
}
