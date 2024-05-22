import React from "react";
import NavLink from "@/app/ui/Layout/navigation/NavLink";
import NavDropdown from "@/app/ui/Layout/navigation/NavDropdown";
import NavLogo from "@/app/ui/Layout/navigation/NavLogo";

export default function NavBar() {
  //flex grow flex-row justify-between
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-black">
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
        <NavLink title="Trusted Brands" href="/trusted-brands"></NavLink>
        <NavLink title="Videos" href="/videos"></NavLink>
        <NavLink title="About Us" href="/about-us"></NavLink>
        <NavLink title="Contact Us" href="/contact-us"></NavLink>
      </div>
      <hr className="mt-1 border-gray-700 sm:mx-auto" />
    </div>
  );
}
