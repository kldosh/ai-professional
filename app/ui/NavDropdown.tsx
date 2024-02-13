"use client";

import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function NavDropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="group relative">
      <button
        className={clsx(
          "flex w-auto items-center justify-center px-2 font-medium hover:text-ai-blue",
          {
            "text-ai-blue": pathname.includes("services"),
          },
        )}
      >
        <p className="block">{title}</p>
        <ChevronRightIcon className="h-4 w-6 transition-transform duration-500 group-focus-within:rotate-90"></ChevronRightIcon>
      </button>
      <nav
        tabIndex={0}
        className="border-2 bg-gray-700 invisible border-gray-800 rounded w-48 absolute left-0 top-full transition-all duration-500 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
      >
        {children}
      </nav>
    </div>
  );
}
