"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const cometSize = {
  width: 240 / 2,
  height: 333 / 2,
};

export const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <footer className="md:-x12 relative mx-auto my-6 mb-6 max-w-5xl px-6 sm:mb-12 md:mt-12 md:mb-24 xl:px-0">
        {pathname !== "/contact" && (
          <Image
            src="/comet.png"
            width={cometSize.width}
            height={cometSize.height}
            className="mb-12 ml-12 mix-blend-lighten select-none sm:ml-24"
            style={{ marginTop: -cometSize.height - 48 }}
            alt=""
            loading="lazy"
          />
        )}
        <div className="bg-bg/90 relative rounded border-t px-6 py-5 shadow-2xl shadow-black sm:border sm:py-3">
          {/* Extra effects */}
          <div className="absolute -top-[1px] left-6 z-10 h-px w-1/2 bg-gradient-to-r from-transparent via-white/33 via-10% to-transparent" />
          <div className="mask-gradient md:mask-none absolute inset-0 overflow-hidden rounded">
            <div
              aria-hidden="true"
              className="user-select-none center pointer-events-none absolute top-0 -left-6 h-[200px] w-full max-w-[200px] -translate-y-1/2 md:max-w-[400px]"
              style={{
                background:
                  "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
              }}
            />
          </div>
          {/* Copyrights */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs sm:text-sm">© TerraNova Labs 2025</span>
            <a
              href="#"
              className="link variant-ghost intent-neutral hover:text-primary relative z-10 text-xs transition-colors sm:text-sm"
            >
              Privacy Policy
            </a>
          </div>
          {/* <div className="mt-3 flex flex-wrap items-center justify-between gap-4 border-t pt-3">
            <p className="text-xs opacity-50">
              Suite 310, Premier Building, Albert Street, Victoria, Mahé,
              Seychelles
            </p>
          </div> */}
        </div>
      </footer>
    </>
  );
};
