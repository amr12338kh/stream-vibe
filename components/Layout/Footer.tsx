"use client";

import { footerLinks } from "@/data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const shouldUsePaddingX =
    pathname.startsWith("/movies") || pathname.startsWith("/search");

  return (
    <div className="py-16 bg-black-6">
      <div className={shouldUsePaddingX ? "padding-x" : "main-container"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-10 xl:gap-y-0">
          {footerLinks.map(({ title, links }, index) => (
            <div key={index} className="space-y-4">
              <h3 className="capitalize font-medium text-[18px]">{title}</h3>
              <ul
                className={cn(
                  "space-y-2",
                  index === footerLinks.length - 1 &&
                    "space-y-0 flex gap-4 items-center"
                )}
              >
                {links.map(({ title: Title, link }, j) => (
                  <li
                    key={j}
                    className={cn(
                      index === footerLinks.length - 1 &&
                        "p-[10px] rounded-lg bg-black-10 border border-black-15"
                    )}
                  >
                    <Link
                      href={link}
                      className={cn(
                        "text-gray-60 capitalize hover:text-white/80 transition-colors"
                      )}
                    >
                      {typeof Title === "string" ? (
                        Title
                      ) : (
                        <Title className="size-5" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="mt-20 mb-5" />
        <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 justify-between items-center">
          <p className="text-sm md:text-base text-gray-60">
            @{year} StreamVibe, All Rights Reserved
          </p>
          <div className="text-xs sm:text-sm md:text-base flex items-center text-gray-60 gap-2 sm:gap-4">
            <span>Terms of Use</span>
            <Separator orientation="vertical" className="h-6" />
            <span>Privacy Policy</span>
            <Separator orientation="vertical" className="h-6" />
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
