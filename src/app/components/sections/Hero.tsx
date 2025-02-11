import { GlowingLine } from "../effects/GlowingLine";
import { Send } from "lucide-react";
import { TextGradient } from "../effects/TextGradient";

export const Hero = () => {
  return (
    <section className="relative -mb-36 flex min-h-screen items-center sm:-mt-16 sm:pb-24">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
          {"Revolutionizing how we "}
          <TextGradient>{"build"}</TextGradient>
          {", "}
          <span className="relative inline-block">
            {"power and connect"}
            <GlowingLine />
          </span>
          {"  The World."}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-7">
          {
            "Building the foundations of tomorrow with smarter, cleaner, and more connected solutions."
          }
        </p>
        <div className="mt-12 text-center">
          <a href="/contact" className="">
            <button
              // Shine effect
              className="animate-button-shine rounded-btn border-primary/80 hover:border-primary hover:outline-primary/80 shadow-primary-600 inline-flex h-10 cursor-pointer items-center justify-center gap-2 border bg-[linear-gradient(110deg,rgb(0,201,80,0.5),45%,rgb(0,201,80,0.95),55%,rgb(0,201,80,0.5))] bg-[length:400%_100%] px-4 py-2 text-lg font-medium text-white shadow-2xl outline-[1.5px] outline-offset-4 outline-transparent transition-all duration-500"
              // Basic button styling
              // className="bg-primary/60 hover:bg-primary/50 border-primary/80 rounded-btn inline-flex h-10 cursor-pointer items-center gap-2 border-1 px-4 text-lg font-medium text-white shadow-2xl shadow-yellow-600 transition-colors duration-500 hover:transition-colors"
            >
              <Send color="currentColor" size={16} />
              {"Contact us"}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
