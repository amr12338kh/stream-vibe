"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuAlignRight } from "react-icons/lu";
import { useState } from "react";
import Logo from "../Logo";
import { Separator } from "../ui/separator";
import { navItems } from "@/data/data";
import { isActiveLink } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Headset, Home, SquareChartGantt, TvMinimalPlay } from "lucide-react";

const iconMap = {
  Home: Home,
  TvMinimalPlay: TvMinimalPlay,
  Headset: Headset,
  SquareChartGantt: SquareChartGantt,
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getIcon = (iconName: keyof typeof iconMap) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="size-5" /> : null;
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="bg-black-10 text-secondary-foreground hover:bg-black-10/80 p-3 rounded-md transition-colors duration-200">
        <LuAlignRight className="size-5" />
      </SheetTrigger>
      <SheetContent className="bg-black-6 border-black-15 w-full sm:w-[380px] p-6">
        <SheetHeader className="space-y-6">
          <SheetTitle className="flex justify-center">
            <div
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Logo />
            </div>
          </SheetTitle>
          <SheetDescription className="text-center text-sm text-gray-60 leading-relaxed max-w-[280px] mx-auto">
            The best streaming experience for watching your favorite movies and
            shows on demand, anytime, anywhere.
          </SheetDescription>
          <Separator className="bg-black-15" />
          <nav>
            <ul className="flex flex-col space-y-2">
              {navItems.map(({ name, icon, link }, idx: number) => (
                <li key={`link-${idx}`}>
                  <Link
                    href={link}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center w-full p-4 rounded-lg text-base font-medium",
                      "transition-all duration-200 ease-in-out",
                      "hover:bg-black-10/60",
                      isActiveLink(link, pathname)
                        ? "bg-black-10 text-white"
                        : "text-gray-60 hover:text-white"
                    )}
                  >
                    {icon && (
                      <span className="mr-3">
                        {getIcon(icon as keyof typeof iconMap)}
                      </span>
                    )}
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
