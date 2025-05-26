import { cn } from "@/lib/utils";
import Link from "next/link";
interface CardProps extends React.ComponentProps<"div"> {
  className?: string;
  children?: React.ReactNode;
  variant: "default" | "link";
  to?: string;
}
const Card = ({ className, children, variant, to, ...props }: CardProps) => {
  variant = variant ?? "default";
  switch (variant) {
    case "default":
      return (
        <div
          className={cn("flex flex-col p-4 rounded-2xl shadow-2xl", className)}
          {...props}
        >
          {children}
        </div>
      );
    case "link":
      to = to ?? "/";
      return (
        <div>
          <Link
            href={to}
            className={cn(
              "w-full h-full flex flex-col p-4 rounded-2xl shadow-2xl",
              className
            )}
          >
            {children}
          </Link>
        </div>
      );
  }
};

export default Card;
