import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "@/app/ui/Layout/footer/icons";

export default function Socials() {
  return (
    <div className="flex mt-4 sm:justify-center sm:items-center sm:mt-0">
      <Link href={"#"} className="text-white hover:text-gray-500">
        <FacebookIcon></FacebookIcon>
      </Link>
      <Link href={"#"} className="text-white hover:text-gray-500">
        <YouTubeIcon></YouTubeIcon>
      </Link>
      <Link href={"#"} className="text-white hover:text-gray-500">
        <XIcon></XIcon>
      </Link>
      <Link href={"#"} className="text-white hover:text-gray-500">
        <InstagramIcon></InstagramIcon>
      </Link>
    </div>
  );
}
