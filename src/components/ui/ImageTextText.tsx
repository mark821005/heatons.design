import type { ReactNode } from "react";

interface Props {
  heading?: string;
  alt?: string;
  image: string;
  content1?: ReactNode;
  content2?: ReactNode;
}

export default function ImageTextText({
  heading,
  image,
  alt,
  content1,
  content2,
}: Props) {
  return (
    <>
      <div className="w-full mx-auto p-4 my-4 md:my-12 lg:my-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h1 className="scroll-m-20 text-5xl">{heading}</h1>
            {content1}
          </div>
          <div>{content2}</div>
          <div>
            <div className="overflow-hidden rounded-2xl">
              <img src={image} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
