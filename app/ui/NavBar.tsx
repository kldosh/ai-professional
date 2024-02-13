import React from "react";
import NavLink from "@/app/ui/NavLink";
import NavDropdown from "@/app/ui/NavDropdown";
import NavLogo from "@/app/ui/NavLogo";

export default function NavBar() {
  //flex grow flex-row justify-between
  return (
    <div>
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
    </div>
  );
}
