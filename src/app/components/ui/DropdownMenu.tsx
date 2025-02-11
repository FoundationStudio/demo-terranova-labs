"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggleIcon } from "./MenuToggle";

import { type NavItem } from "./Header";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  const staggerMenuItems = stagger(0.075, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 12px)"
          : "inset(10% 50% 90% 50% round 12px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(30px)" },
      {
        duration: 0.15,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate, staggerMenuItems]);

  return scope;
}

type DropdownMenuProps = { nav: NavItem[] } & React.ComponentProps<"div">;

export function DropdownMenu({ nav, ...props }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <>
      <button
        type="button"
        className="cursor-pointer p-1 text-white"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <MenuToggleIcon onClick={() => setIsOpen((prevState) => !prevState)} />
      </button>
      {/* Mobile navigation */}
      <div ref={scope} {...props}>
        <ul
          role="navigation"
          className={cn(
            "bg-bg -max-w-1/2 absolute top-18 right-0 left-0 z-10 mt-1 w-full divide-y-1 rounded border px-6 py-2 shadow-xl shadow-black",
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
          style={{
            clipPath: "inset(10% 50% 90% 50% round 12px)",
            transformOrigin: "top right",
          }}
        >
          {nav.map((navItem) => (
            <li key={navItem.name}>
              <Link
                key={navItem.href}
                href={navItem.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group my-2 flex w-full items-center gap-2 py-2 font-medium text-white"
                )}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
