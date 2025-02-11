"use client";

import { usePathname } from "next/navigation";
// import Image from "next/image";
import Link from "next/link";
import { DropdownMenu } from "./DropdownMenu";

export type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Partners", href: "/#partners" },
  { name: "About us", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      // Pill type header
      className="fixed z-20 w-full px-4 pt-4 sm:px-6 sm:pt-6"
      // Full width header
      // className="fixed z-20 w-full border-b backdrop-blur-xl"
    >
      <div className="absolute inset-0 -bottom-8 z-0 bg-gradient-to-b from-black/90 via-black/60 to-black/0" />
      <div
        // Pill type header
        className="relative mx-auto max-w-6xl rounded border px-4 backdrop-blur-xl sm:px-6"
        // Full width header
        // className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="absolute top-[-1px] left-6 h-px w-1/2 bg-gradient-to-r from-transparent via-white/33 via-10% to-transparent sm:left-16" />

        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={pathname === "/" ? "#home" : "/"} className="text-title">
            <h1 className="flex flex-row items-center gap-1">
              {/* <Image
                src="/logo.png"
                width={96}
                height={96}
                className="w-[3.15em]"
                alt=""
                priority
              /> */}
              <div
                className="text-lg leading-3.75 font-bold text-white"
                style={{ transformOrigin: "left" }}
              >
                <span className="text-primary">{"TerraNova"}</span>
                {" Labs"}
              </div>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:-mr-4 md:flex md:items-center">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary px-4 py-2 font-sans text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <span className="sr-only">{"Toggle menu"}</span>
            <DropdownMenu nav={navigation} />
          </div>
        </nav>
      </div>
    </header>
  );
};
