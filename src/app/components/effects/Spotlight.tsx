import React from "react";
import { cn } from "@/utils/cn";

export const Spotlight = () => {
  const stopColor = "#717171";
  // const stopColor = "#a9f2c4";

  return (
    <svg
      className="pointer-events-none fixed top-0 -left-16 z-30 sm:left-[65%] sm:-translate-x-full sm:scale-110 md:left-[45%]"
      xmlns="http://www.w3.org/2000/svg"
      width="472"
      height="422"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <g filter="url(#illf-a)" opacity=".32">
        <path
          fill="url(#ill-b)"
          fillRule="evenodd"
          d="m64-42 344 212-166 188L64-42Z"
          clipRule="evenodd"
        ></path>
      </g>
      <g filter="url(#illf-c)" opacity=".32">
        <path
          fill="url(#ill-d)"
          fillRule="evenodd"
          d="m64-42 344 212-200-67L64-42Z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="ill-b"
          x1="218.5"
          x2="218.5"
          y1="-42"
          y2="337"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={stopColor} stopOpacity=".64"></stop>
          <stop offset="1" stopColor={stopColor} stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="ill-d"
          x1="218.5"
          x2="218.5"
          y1="-42"
          y2="337"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={stopColor} stopOpacity=".64"></stop>
          <stop offset="1" stopColor={stopColor} stopOpacity="0"></stop>
        </linearGradient>
        <filter
          id="illf-a"
          width="472"
          height="528"
          x="0"
          y="-106"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_115_9"
            stdDeviation="32"
          ></feGaussianBlur>
        </filter>
        <filter
          id="illf-c"
          width="472"
          height="340"
          x="0"
          y="-106"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_115_9"
            stdDeviation="32"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

/**
 * Animated Spotlight
 */
type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const SpotlightAnimated = ({ className, fill }: SpotlightProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -top-32 z-30 mx-auto max-w-6xl opacity-60",
        className
      )}
    >
      <svg
        className={cn(
          "animate-spotlight -ml-86 h-[150%] w-[64rem] rotate-[32deg] opacity-0 sm:-ml-32 sm:w-[96rem] sm:rotate-12",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill || "white"}
            fillOpacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
