import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/app/ui/NavLink";

export default function NavBar() {
  //flex grow flex-row justify-between
  return (
    <div>
      <Link href="/" className="flex justify-center mb-2">
        <Image
          src={"/AI_Pro_Logo.jpg"}
          width={125}
          height={125}
          alt="AI Professionl Logo"
        ></Image>
      </Link>
      <div className="flex flex-row justify-center">
        <NavLink title="Welcome" href="/"></NavLink>
        <NavLink title="Services" href="/commercial-services"></NavLink>
        <NavLink
          title="Preferred Equipment Brands"
          href="/preferred-equipment-brands"
        ></NavLink>
        <NavLink title="DIY Tips and Tricks" href="/diy"></NavLink>
        <NavLink
          title="Discounts and Specials"
          href="/discounts-and-specials"
        ></NavLink>
        <NavLink title="About Us" href="/about-us"></NavLink>
        <NavLink title="Contact Us" href="/contact-us"></NavLink>
      </div>
    </div>
  );
}
