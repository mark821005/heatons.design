import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface Steps {
  heading: string;
  content: string;
  image: string;
  alt: string;
  link?: string;
  buttonText?: string;
}

interface StepProps {
  items: Steps[];
}

export function Steps({ items }: StepProps) {
  return (
    <div className="w-full mx-auto my-4 md:my-12 lg:my-24">
      {items.map((item, index) => (
        <div
          key={index}
          className=" grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 overflow-x-clip"
        >
          <div className="md:col-span-1 scrollLeft rounded-2xl overflow-hidden">
            <Image
              alt={item.alt}
              src={item.image}
              className="object-cover"
              fill
            />
          </div>
          <div className="scrollRight md:col-span-2 group relative overflow-hidden rounded-2xl bg-zinc-100 p-8 md:p-12">
            <h2 className="scroll-m-20 text-4xl mb-12">
              {index + 1}: {item.heading}
            </h2>
            {item.content}
            {item.link && (
              <div className="mt-6">
                <a href={item.link} rel="noopener noreferrer">
                  <Button size="sm" className="mt-2">
                    {item.buttonText || "Learn More"} <ArrowUpRight />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
