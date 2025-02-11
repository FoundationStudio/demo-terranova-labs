export const About = () => {
  return (
    <section id="about" className="mb-16 text-center">
      <span className="border-primary/50 rounded border px-4 py-2 text-sm text-white">
        {"About us"}
      </span>
      <h2 className="mt-6 mb-3 text-3xl font-bold text-white uppercase sm:text-4xl">
        {/* {"Our "}
        <span className="text-primary">{"Approach"}</span> */}
        {"How We Work"}
      </h2>
      <p className="max-w-ch mx-auto mt-3 mb-6">
        {
          "We forge partnerships across industries, blending expertise in artificial intelligence, material science, and environmental engineering to create breakthrough solutions. Our think tanks, innovation hubs, and research facilities operate at the cutting edge of scientific discovery."
        }
      </p>
    </section>
  );
};
