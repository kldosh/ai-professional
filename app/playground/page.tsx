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
import Image from "next/image";
import YouTubeVideo from "@/app/ui/components/YouTubeEmbed";
import {
  AudioSystemBrands,
  TVBrands,
  TVMountBrands,
} from "@/app/ui/components/BrandSections";
import Special from "@/app/ui/components/Special";

export default function Page() {
  return (
    <div>
      <div className="h-36"></div>
      <div className="flex flex-col divide-y divide-white gap-12 px-5">
        <Special
          title="Fourth of July Special"
          description="15% off all installations"
          expiration={new Date("04/05/24 00:00:00")}
        ></Special>
        <Special
          title="Flash Discount"
          description="10% off home theater systems - Today only!"
          expiration={new Date("03/07/24 23:59:59")}
        ></Special>
      </div>
    </div>
  );
}
