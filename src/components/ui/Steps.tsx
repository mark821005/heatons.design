import React from "react";

interface Steps {
  heading: string;
  content: string;
}

interface StepProps {
  items: Steps[];
}

export function Steps({ items }: StepProps) {
  return (
    <div className="w-full mx-auto my-4 md:my-12 lg:my-24">
      {items.map((item, index) => (
        <div className="scrollScale grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-1">IMAGE</div>
          <div
            key={index}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-zinc-100 p-8 md:p-12"
          >
            <h2 className="scroll-m-20 text-4xl mb-12">
              {index + 1}: {item.heading}
            </h2>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
