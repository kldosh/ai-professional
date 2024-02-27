import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NavLogo() {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Image
          src={"/AI_Pro_Logo.jpg"}
          width={125}
          height={125}
          alt="AI Professionl Logo"
          className="hover:animate-pulse"
        ></Image>
      </Link>
    </div>
  );
}
