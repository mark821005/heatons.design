"use client";
import { motion } from "framer-motion";
import { AnimatedPage } from "@/components/AnimatedPage";
import Leftright from "@/components/ui/leftright";
import { Gallery } from "@/components/Gallery";
import { galleryData } from "@/data/gallery";

export default function About() {
  return (
    <AnimatedPage>
      <main>
        <Leftright
          heading={"welcome to heatons.design"}
          content={
            <div className="scrolling-text">
              <p>
                Once upon a time, in a far-off land, there was a very lazy king
                who spent all day lounging on his throne. One day, his advisors
                came to him with a problem: the kingdom was running out of
                money.
              </p>
              <p>
                Once upon a time, in a far-off land, there was a very lazy king
                who spent all day lounging on his throne. One day, his advisors
                came to him with a problem: the kingdom was running out of
                money.
              </p>
              <p>
                Once upon a time, in a far-off land, there was a very lazy king
                who spent all day lounging on his throne. One day, his advisors
                came to him with a problem: the kingdom was running out of
                money.
              </p>
            </div>
          }
        />
        <Gallery items={galleryData} />
      </main>
    </AnimatedPage>
  );
}
