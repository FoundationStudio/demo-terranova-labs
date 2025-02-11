import Image from "next/image";
import { Images } from "../Images";
import { partners } from "@/constants/lists";

export const Partners = () => {
  return (
    <section
      id="partners"
      className="flex min-h-screen flex-col items-center justify-center text-center bg-blend-exclusion"
    >
      <div className="relative mt-0 mb-16 flex flex-col items-center sm:mt-26 sm:mb-32 md:mb-54 xl:mb-62">
        <Image
          src="/globe.svg"
          width={420}
          height={420}
          className="absolute -top-18 -left-48 -z-10 h-auto w-80 opacity-25 select-none sm:-top-26 sm:left-[initial] sm:max-h-[26rem] sm:max-w-[26rem] md:w-full"
          alt=""
          loading="lazy"
        />
        <h2 className="pretty max-w-6xl px-2 text-4xl leading-[1] font-semibold tracking-tight text-white sm:px-0 md:text-6xl">
          {"Shaping the "}
          <span className="text-primary">{"next\u00A0era"}</span>
          {/* <br /> */}
          {" of progress"}
        </h2>
        <p className="mx-auto mt-3 mb-6 max-w-3xl">
          {
            "From the cities we design to the energy we harness, our work is redefining what’s possible. The future isn’t waiting—we’re making it happen now."
          }
        </p>
      </div>

      <Images array={partners} className="max-w-5xl gap-y-8" />
    </section>
  );
};
