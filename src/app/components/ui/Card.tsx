"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { cn } from "@/utils/cn";

type CardRevealedPointerProps = React.ComponentProps<"div">;

export function CardRevealedPointer({
  children,
  className,
}: CardRevealedPointerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 100%)`;

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group bg-bg rounded-btn relative overflow-hidden shadow-xl shadow-black/50"
    >
      <div className="absolute top-0 right-1/8 h-px w-1/2 bg-gradient-to-l from-transparent via-white/33 via-10% to-transparent" />
      <motion.div
        className="rounded-btn pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-75"
        style={{
          background: background,
        }}
      />
      <div
        className={cn(
          "rounded-btn relative h-full border border-white/10 px-6 py-3",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
