"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function NavLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "flex w-auto items-center justify-center px-2 font-medium hover:text-ai-blue",
        {
          "text-ai-blue": pathname === href,
        },
      )}
    >
      <p className="block">{title}</p>
    </Link>
  );
}
