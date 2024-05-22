import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavLogo() {
  return (
    <div className="flex justify-center">
      <Link href="/" className="w-24">
        <Image
          src={"/AI_Pro_Logo.jpg"}
          width={582}
          height={327}
          alt="AI Professionl Logo"
          className="hover:animate-pulse object-contain"
        ></Image>
      </Link>
    </div>
  );
}
