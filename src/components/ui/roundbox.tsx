import type { ReactNode } from "react";

interface RoundBoxItem {
  heading: string;
  content: ReactNode;
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
          <div key={index} className="md:basis-1/2 lg:basis-1/3 pr-16 my-6">
            <strong>{item.heading}</strong>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
