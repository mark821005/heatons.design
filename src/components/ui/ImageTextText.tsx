import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";

interface Props {
  heading?: string;
  alt?: string;
  image: string;
  content1?: ReactNode;
  linkOne?: string;
  buttonTextOne?: string;
  linkTwo?: string;
  buttonTextTwo?: string;
}

export default function ImageTextText({
  heading,
  image,
  alt,
  content1,
  linkOne,
  buttonTextOne,
  linkTwo,
  buttonTextTwo,
}: Props) {
  return (
    <>
      <div className="w-full mx-auto p-4 my-4 md:my-12 lg:my-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="max-w-xl">
            <h1 className="scroll-m-20 text-5xl mb-12">{heading}</h1>
            {content1}
            {linkOne ? (
              <a href={linkOne}>
                <Button size="sm" className="mt-6 mr-6">
                  {buttonTextOne} <ArrowUpRight />
                </Button>
              </a>
            ) : null}
            {linkTwo ? (
              <a href={linkTwo}>
                <Button size="sm" className="mt-6">
                  {buttonTextTwo} <ArrowUpRight />
                </Button>
              </a>
            ) : null}
          </div>
          <div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={alt || "Test alt"}
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
