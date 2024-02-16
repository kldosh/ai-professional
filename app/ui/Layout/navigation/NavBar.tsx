import React from "react";
import NavLink from "@/app/ui/Layout/navigation/NavLink";
import NavDropdown from "@/app/ui/Layout/navigation/NavDropdown";
import NavLogo from "@/app/ui/Layout/navigation/NavLogo";

export default function NavBar() {
  //flex grow flex-row justify-between
  return (
    <div className="absolute top-0 left-0 right-0 z-10">
      <NavLogo></NavLogo>
      <div className="flex flex-row justify-center">
        <NavLink title="Welcome" href="/"></NavLink>
        <NavDropdown title="Services">
          <ul className="py-1">
            <li>
              <NavLink
                title="Commercial Services"
                href="/commercial-services"
              ></NavLink>
            </li>
            <li>
              <NavLink
                title="Residential Services"
                href="/residential-services"
              ></NavLink>
            </li>
          </ul>
        </NavDropdown>
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
      <hr className="my-3 border-gray-700 sm:mx-auto" />
    </div>
  );
}
