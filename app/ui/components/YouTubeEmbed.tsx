"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface affiliateLink {
  name: string;
  link: string;
}

interface Props {
  title: string;
  src: string;
  links: affiliateLink[];
}
export function YouTubeVideo({ title, src, links }: Props) {
  return (
    <div className="bg-white m-3 shadow-[0px_0px_20px_5px] shadow-ai-blue rounded-2xl flex flex-col items-center">
      <iframe
        className="m-5 rounded-xl"
        src={src}
        width={560}
        height={315}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <p className="text-black font-bold">Affiliate Links:</p>
      <ul className="mb-5 text-center">
        {links.map((link) => (
          <li key={link.name}>
            <Link className="text-ai-blue underline" href={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const YOUTUBE_API_KEY = "AIzaSyDO0N0AYeNUshg9KEapQHK3PUiFhTycfLw";
const CHANNEL_ID = "UCQ8DbLqhEg19gt4dGnuyLoA";

interface videoProps {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
}
export function LatestYoutubeVideos() {
  const [videos, setVideos] = useState<videoProps[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const videos = await getLatestVideos();
        setVideos(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);

  const getLatestVideos = async () => {
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/search?" +
        new URLSearchParams({
          part: "snippet",
          channelId: CHANNEL_ID,
          maxResults: "12",
          order: "date",
          type: "video",
          key: YOUTUBE_API_KEY,
        }),
    );

    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }

    const data = await res.json();
    return data.items;
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {videos.map((video, index) => (
        <YouTubeVideo
          key={index}
          title={video.snippet.title}
          src={`https://youtube.com/embed/${video.id.videoId}?controls=0`}
          links={[]}
        ></YouTubeVideo>
      ))}
    </div>
  );
}
