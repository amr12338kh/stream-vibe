import { cn } from "@/lib/utils";

const Section = ({
  id,
  className,
  children,
  variant = "primary",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-14 sm:py-20 sm:main-container mx-auto",
        variant === "primary" ? "px-4" : "pl-4 sm:px-4",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
