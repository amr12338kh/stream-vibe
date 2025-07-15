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
        "py-8 sm:py-12",
        variant === "primary" ? "padding-l" : "padding-x",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
