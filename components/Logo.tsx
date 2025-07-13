/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn(className)}>
      <img
        src="/main-logo.png"
        alt="StreamVibe Logo"
        className="max-w-[110px] max-h-[110px]"
      />
    </Link>
  );
};

export default Logo;
