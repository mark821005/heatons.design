import Image from "next/image";

interface GridItem {
  src: string;
  alt?: string;
}

interface ImageGridProps {
  items: GridItem[];
}

export function ImageGrid({ items }: ImageGridProps) {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 my-4 md:my-12 lg:my-24">
      <div className="grid grid-cols-2 {cols} lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="scrollScale group relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200"
          >
            {/* Image Container */}
            <Image
              src={item.src}
              alt={item.alt || "Grid image"}
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
