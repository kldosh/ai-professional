import { LatestYoutubeVideos } from "@/app/ui/components/YouTubeEmbed";
import YouTubeLogo from "/public/YouTube-Logo.svg";
import Image from "next/image";
import Link from "next/link";

interface affiliateLink {
  name: string;
  link: string;
}

const youTubeChannel =
  "https://www.youtube.com/channel/UCQ8DbLqhEg19gt4dGnuyLoA";
export default function Page() {
  return (
    <div>
      <div className="h-28"></div>
      <div className="flex justify-center items-center">
        <span className="text-center text-4xl">Check us out on</span>
        <Link href={youTubeChannel}>
          <Image src={YouTubeLogo} alt="YouTube Logo" className=""></Image>
        </Link>
      </div>
      <LatestYoutubeVideos></LatestYoutubeVideos>
    </div>
  );
}
