"use client";
import { AnimatedPage } from "@/components/AnimatedPage";
import Image from "next/image";


export default function Cases() {
  return (
    <AnimatedPage>
      <main>
        <div className="min-h-screen flex flex-col items-center justify-center mx-auto w-full max-w-[800px] p-4">
          <Image
            src="/cases/under_construction.png"
            alt="Under Construction"
            width={1024}
            height={622}
            className="mt-8 rounded-lg"
          />
          <h1 className="scroll-m-20 text-5xl">page under construction</h1>
          <p className="mt-4 text-lg text-gray-600">These guys are working on this section, they promise it'll be up and running soon...</p>
        </div>
      </main>
    </AnimatedPage>
  );
}
