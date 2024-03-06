import Card from "@/app/ui/components/Card";
import Image from "next/image";

export function TVBrands() {
  return (
    <div>
      <h1 className="text-center text-7xl p-5 text-ai-blue">TV Brands</h1>
      <div className="flex justify-evenly gap-3 p-5">
        <Image
          src="/lg-logo.png"
          alt=""
          width={512}
          height={512}
          className="w-32 h-32"
        ></Image>
        <Image
          src="/tcl-logo.png"
          alt=""
          width={2560}
          height={1526}
          className="w-52 h-32"
        ></Image>
        <Image
          src="/hisense-logo.png"
          alt=""
          width={1332}
          height={240}
          className="w-96 h-32"
        ></Image>
        <Image
          src="/vizio-logo.jpeg"
          alt=""
          width={747}
          height={195}
          className="w-96 h-32"
        ></Image>
        <Image
          src="/samsung-logo.png"
          alt=""
          width={300}
          height={155}
          className="w-60 h-32"
        ></Image>
      </div>
    </div>
  );
}

export function TVMountBrands() {
  return (
    <div>
      <h1 className="text-center text-7xl mt-5 p-5 text-ai-blue">
        TV Mount Brands
      </h1>
      <div className="flex justify-evenly gap-3 p-5">
        <Image
          src="/echogear-logo.png"
          alt=""
          width={6487}
          height={6487}
          className="w-32 h-32"
        ></Image>
        <Image
          src="/sanus.jpg"
          alt=""
          width={343}
          height={153}
          className="w-72 h-32"
        ></Image>
        <Image
          src="/mountingdream-logo.jpg"
          alt=""
          width={179}
          height={168}
          className="w-32 h-32"
        ></Image>
      </div>
    </div>
  );
}

export function AudioSystemBrands() {
  return (
    <div>
      <h1 className="text-center text-7xl mt-5 p-5 text-ai-blue">
        Audio System Brands
      </h1>
      <div className="flex justify-evenly gap-3 p-5">
        <Image
          src="/bose-logo.jpg"
          alt=""
          width={174}
          height={163}
          className="w-32 h-32"
        ></Image>
        <Image
          src="/mackie-logo.png"
          alt=""
          width={1200}
          height={630}
          className="w-60 h-32"
        ></Image>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="800"
          width="1200"
          viewBox="-6.015 -1.95 52.13 11.7"
          className="w-48 h-32"
        >
          <path
            clipRule="evenodd"
            d="M21.7 4.5L17 .1v7.4h1.4V3.4l4.7 4.4V.4h-1.4zM10.8 0C8.6 0 6.9 1.7 6.9 3.9c0 2.1 1.8 3.9 3.9 3.9 2.2 0 3.9-1.7 3.9-3.9S13 0 10.8 0m0 6.4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M4.5 3.9c-.4-.3-.9-.5-1.6-.7-1.4-.4-1.4-.8-1.4-1 0-.4.5-.8 1.2-.8.6 0 1.1.3 1.3.4l.1.1 1.1-.8-.1-.1s-.9-1-2.4-1C2 0 1.3.2.8.6.3 1 0 1.6 0 2.2c0 .6.3 1.2.8 1.6.4.3.9.5 1.6.7 1.4.4 1.4.8 1.4 1 0 .4-.5.8-1.2.8-.6 0-1.1-.3-1.3-.4l-.1-.1-1.1.8.1.1s.9 1 2.4 1c.7 0 1.4-.2 1.9-.6.5-.4.8-1 .8-1.6 0-.6-.3-1.1-.8-1.6M29.3 0c-2.2 0-3.9 1.7-3.9 3.9s1.8 3.9 3.9 3.9c2.2 0 3.9-1.7 3.9-3.9S31.4 0 29.3 0m0 6.4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.2 2.5-2.5 2.5m6.3-2.6c.4.3.9.5 1.6.7 1.4.4 1.4.8 1.4 1 0 .4-.5.8-1.2.8-.6 0-1.1-.3-1.3-.4H36l-1.1.8.1.1s.9 1 2.4 1c.7 0 1.4-.2 1.9-.6.5-.4.8-1 .8-1.6 0-.6-.3-1.2-.8-1.6-.4-.3-.9-.5-1.6-.7-1.4-.4-1.4-.8-1.4-1 0-.4.5-.8 1.2-.8.6 0 1.1.3 1.3.4l.1.1 1.1-.8-.1-.1s-.9-1-2.4-1c-.7 0-1.4.2-1.9.6-.5.4-.8 1-.8 1.6-.1.6.2 1.1.8 1.5"
            fillRule="evenodd"
            fill="#fff"
          />
        </svg>
        <Image
          src="/jbl-logo.png"
          alt=""
          width={500}
          height={281}
          className="w-56 h-32"
        ></Image>
      </div>
    </div>
  );
}
