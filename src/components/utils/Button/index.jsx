import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "text-white bg-white/40 border border-white/40 backdrop-blur-md shadow-xs hover:border-white/80 hover:bg-transparent hover:bg-gradient-to-r hover:from-[#2cc59c] hover:via-[#00eea8] hover:to-[#2cc59c]",
        blue: "text-white bg-transparent bg-gradient-to-r from-[#0f51a9] via-[#0055e0] to-[#0f51a9] hover:bg-gradient-to-r hover:from-[#2cc59c] hover:via-[#00eea8] hover:to-[#2cc59c]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "text-[14px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[16px] leading-none font-normal text-center has-[>svg, >img]:px-3",
        lg: "text-[14px] sm:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[16px] leading-none font-normal text-center w-full h-[40px] sm:h-[35px] xl:h-[50px] 2xl:h-[60px] p-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
function ActionButton({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
export { ActionButton, buttonVariants };
