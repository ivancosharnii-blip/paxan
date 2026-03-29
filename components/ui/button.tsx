import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "ghost";
  size?: "default" | "icon";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild, children, ...props },
    ref
  ) => {
    const styles = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      variant === "default" &&
        "bg-primary text-primary-foreground hover:bg-primary/90",
      variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
      size === "default" && "h-10 px-5 py-2",
      size === "icon" && "h-11 w-11 rounded-full",
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<{ className?: string }>,
        {
          className: cn(
            styles,
            (children.props as { className?: string }).className
          ),
        }
      );
    }

    return (
      <button ref={ref} type="button" className={styles} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
