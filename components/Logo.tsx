/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn(className)}>
      <img
        src="/main-logo.png"
        alt="StreamVibe Logo"
        className="max-w-[140px] max-h-[140px]"
      />
    </Link>
  );
};

export default Logo;
