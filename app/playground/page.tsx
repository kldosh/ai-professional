import TitleCard from "@/app/ui/home/TitleCard";
import VideoHero from "@/app/ui/components/VideoHero";
import {
  SaveTheDayTitle,
  SaveTheDayText,
} from "@/app/ui/components/Animation/VideoHeroAnimations";

export default function Page() {
  return (
    <>
      <TitleCard></TitleCard>
      <VideoHero
        title={<SaveTheDayTitle />}
        text={<SaveTheDayText />}
        src="/AI_Professional_2022_Promo_Edit_1-HD_1080p.mp4"
      ></VideoHero>
    </>
  );
}
