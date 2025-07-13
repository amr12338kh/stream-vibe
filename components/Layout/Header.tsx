import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import Logo from "../Logo";
import { Bell, Search } from "lucide-react";
import Sidebar from "./Sidebar";
import { navItems } from "@/data/data";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className=" fixed top-0 z-30 w-full h-24 bg-gradient-to-b from-black-8 to-transparent" />
      <header className="main-container p-4 z-50 fixed top-0 left-1/2 -translate-x-1/2 w-full">
        <div className=" flex justify-between items-center ">
          <div>
            <Logo />
          </div>
          <div className=" hidden md:block">
            <FloatingNav navItems={navItems} />
          </div>
          <div className="items-center gap-5 hidden md:flex">
            <Link href={"/search/movie"}>
              <Search className=" size-[18px] cursor-pointer" />
            </Link>
            <Bell className=" size-[18px] cursor-pointer" />
          </div>
          <div className="md:hidden flex items-center gap-4 bg-black-10 py-2 px-3 rounded-md">
            <Link href={"/search/movie"}>
              <Search className=" size-[18px] cursor-pointer" />
            </Link>
            <div className="w-[1px] h-5 bg-white opacity-50" />
            <Sidebar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
