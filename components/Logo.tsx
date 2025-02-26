import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("", className)}>
      <Image
        src="/logo.svg"
        alt="StreamVibe Logo"
        width={140}
        height={140}
        priority
      />
    </Link>
  );
};

export default Logo;
