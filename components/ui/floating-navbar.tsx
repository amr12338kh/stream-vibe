"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HeaderLinksProps } from "@/types/types";
import { usePathname } from "next/navigation";
import { isActiveLink } from "@/lib/helpers";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: HeaderLinksProps[];
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex gap-5 p-2 rounded-xl bg-black-6 border border-black-12",
        className
      )}
    >
      {navItems.map((navItem: HeaderLinksProps, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "text-white py-3 px-4 rounded-md text-sm",
            isActiveLink(navItem.link, pathname) && "bg-black-10"
          )}
        >
          <span>{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};
