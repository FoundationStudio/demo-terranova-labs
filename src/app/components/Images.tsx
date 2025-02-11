import Image from "next/image";
import { cn } from "@/utils/cn";
import { type ImagesItem } from "@/constants/lists";

export const Images = ({
  array,
  className,
}: {
  array: Array<ImagesItem>;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex flex-wrap justify-center gap-x-6 gap-y-6 **:data-image:opacity-60 **:data-image:grayscale-100 **:data-image:transition-all **:data-image:hover:opacity-100 **:data-image:hover:grayscale-0 sm:gap-x-10",
        className
      )}
    >
      {array.map((item) => (
        <a
          key={item.title}
          href={item.url ? item.url : undefined}
          target="_blank"
          title={item.title}
          className="font-mono"
        >
          <Image
            src={item.img}
            width={160}
            height={24}
            // alt={item.title}
            alt=""
            data-image
            className="h-12 max-h-auto w-auto max-w-32 object-contain text-right select-none"
            style={{ color: "inherit" }}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};
