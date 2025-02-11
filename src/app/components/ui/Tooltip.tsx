"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type TooltipProps = {
  anchor?: "top" | "bottom" | "left" | "right";
  text?: string;
  node?: React.ReactNode;
} & React.ComponentProps<"div">;

export function Tooltip({
  anchor = "top",
  text,
  node,
  children,
  className,
}: TooltipProps) {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsToastVisible(true)}
      onMouseLeave={() => setIsToastVisible(false)}
      className="relative inline-block"
    >
      {children}
      <motion.div
        className={cn(
          "absolute left-1/2 border whitespace-nowrap",
          "bg-bg pointer-events-none text-xs text-balance",
          text ? "rounded-lg px-2 py-1" : "rounded-btn px-4 py-3",
          anchor === "top"
            ? "-top-1 [translate:-50%_-100%]"
            : "-bottom-1 [translate:-50%_100%]",
          className
        )}
        initial={{ opacity: 0, y: 5, filter: "blur(4px)", scale: 0.9 }}
        animate={{
          opacity: isToastVisible ? 1 : 0,
          y: isToastVisible ? 0 : 5,
          filter: isToastVisible ? "blur(0px)" : "blur(4px)",
          scale: isToastVisible ? 1 : 0.3,
        }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        {text ? <span>{text}</span> : node}
      </motion.div>
    </div>
  );
}

// export function TooltipExample() {
//   return (
//     <Tooltip text="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
//       <button className="rounded-btn border px-4 py-2 text-sm font-medium text-white">
//         Hover Me
//       </button>
//     </Tooltip>
//   );
// }
