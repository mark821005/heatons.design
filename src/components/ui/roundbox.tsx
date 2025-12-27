import type { ReactNode } from "react";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";

interface RoundBoxItem {
  heading: string;
  content: ReactNode;
  link?: string;
  buttonText?: string;
}

interface RoundBoxProps {
  blockheading?: string;
  items: RoundBoxItem[];
}

export default function RoundBox({ blockheading, items }: RoundBoxProps) {
  return (
    <div className="scrollAnim bg-slate-100 hover:bg-slate-50 transition delay-150 duration-300 ease-in-out rounded-2xl md:rounded-4xl p-4 md:p-12 lg:p-24 my-4 md:my-12 lg:my-24">
      <h1 className="scroll-m-20 text-4xl">{blockheading}</h1>
      <div className="md:flex md:flex-row md:flex-wrap md:justify-start md:items-start">
        {items.map((item, index) => (
          <div key={index} className="md:basis-1/2 xl:basis-1/4 pr-16 my-6">
            <strong>{item.heading}</strong>
            <p className="my-4">{item.content}</p>
            {item.link && (
              <a href={item.link} rel="noopener noreferrer">
                <Button size="sm" className="mt-2">
                  {item.buttonText || "Learn More"} <ArrowUpRight />
                </Button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
