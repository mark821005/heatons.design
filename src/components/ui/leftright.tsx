import type { ReactNode } from "react";

interface Props {
  heading: string;
  content: ReactNode;
}

export default function Leftright({ heading, content }: Props) {
  return (
    <>
      <div className="md:flex md:flex-row md:justify-start md:items-start my-24">
        <div className="basis-1/2">
          <h1 className="scroll-m-20 text-4xl">{heading}</h1>
        </div>
        <div className="basis-1/2">{content}</div>
      </div>
    </>
  );
}
