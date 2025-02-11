"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type TextShineProps = {
  duration?: number;
  delay?: number;
} & React.ComponentProps<"div">;

export function TextShine({
  duration = 6,
  delay = 0,
  className,
  children,
}: TextShineProps) {
  return (
    <motion.div
      className={cn(
        "bg-[linear-gradient(110deg,#626262,35%,#fff,50%,#626262,75%,#626262)]",
        "bg-[length:200%_100%] bg-clip-text bg-repeat-x font-medium text-transparent",
        className
      )}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}
