import { cn } from "@/lib/utils";

export const MovieBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex items-center gap-2 py-1 px-2 rounded-full border border-black-15 bg-black-8 text-gray-60 text-[10px] sm:text-xs",
      className
    )}
  >
    {children}
  </div>
);
