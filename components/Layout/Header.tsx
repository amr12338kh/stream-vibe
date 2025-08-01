"use client";

import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import Logo from "../Logo";
import { Bell, Search } from "lucide-react";
import Sidebar from "./Sidebar";
import { navItems } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const shouldUsePaddingX =
    pathname.startsWith("/movies") || pathname.startsWith("/search");

  const isSearchPage = pathname === "/search";

  return (
    <>
      <div className=" fixed top-0 z-40 w-full h-20 bg-linear-to-b from-black-8 via-black-10/50 to-transparent" />
      <header
        className={`${shouldUsePaddingX ? "padding-x" : "main-container"} py-4 z-50 fixed top-0 left-1/2 -translate-x-1/2 w-full`}
      >
        <div className=" flex justify-between items-center ">
          <div>
            <Logo />
          </div>
          <div className=" hidden md:block">
            <FloatingNav navItems={navItems} />
          </div>
          <div className="items-center gap-5 hidden md:flex">
            <Link href={"/search"}>
              <Search
                className={`size-[18px] cursor-pointer ${isSearchPage && "text-primary"} hover:text-primary transition-colors duration-200`}
              />
            </Link>
            <Bell className=" size-[18px] cursor-pointer hover:text-primary transition-colors duration-200" />
          </div>
          <div className="md:hidden flex items-center gap-4 bg-black-10 py-2 px-3 rounded-md">
            <Link href={"/search"}>
              <Search
                className={`size-[18px] cursor-pointer ${isSearchPage && "text-primary"} hover:text-primary transition-colors duration-200`}
              />
            </Link>
            <div className="w-px h-5 bg-white opacity-50" />
            <Sidebar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
