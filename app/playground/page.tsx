import { LatestYoutubeVideos } from "@/app/ui/components/YouTubeEmbed";

export default function Page() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="h-36"></div>
      <LatestYoutubeVideos></LatestYoutubeVideos>
    </div>
  );
}
