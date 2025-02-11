import { services } from "@/constants/lists";
import { CardRevealedPointer } from "../ui/Card";

export const Services = () => {
  return (
    <section id="services" className="text-center">
      <h2 className="text-3xl font-bold text-white uppercase sm:text-4xl">
        {"Our Services"}
      </h2>
      <p className="mx-auto mt-3 mb-8 max-w-3xl">
        {
          "We develop cutting-edge solutions to create a cleaner, more efficient, and interconnected future. From smarter cities to next-gen energy systems, we bring sustainability into the modern age."
        }
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-2 justify-center gap-2 md:grid-cols-3 md:gap-3">
        {services.map((item) => (
          <CardRevealedPointer
            key={item.name}
            tabIndex={0}
            className="flex cursor-default flex-col gap-2 px-3 py-4 text-left sm:flex-row sm:flex-nowrap sm:gap-3 sm:p-4"
          >
            <span className="text-primary">{item.icon}</span>
            <div>
              <h3 className="text-md mb-1 leading-5 font-semibold sm:text-lg sm:leading-6">
                {item.name}
              </h3>
              <p className="text-sm text-balance opacity-50">{item.desc}</p>
            </div>
          </CardRevealedPointer>
        ))}
      </div>
    </section>
  );
};
