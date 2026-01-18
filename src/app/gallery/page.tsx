"use client";
import { motion } from "framer-motion";
import { AnimatedPage } from "@/components/AnimatedPage";
import Leftright from "@/components/ui/leftright";
import { Gallery } from "@/components/Gallery";
import { galleryData } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <AnimatedPage>
      <main>
        <Leftright
          heading={"artwork examples gallery"}
          content={
            <div className="scrolling-text">
              <p>
                Get inspired by browsing the gallery below. Keep in mind things
                like composition, colour, clothing, art style when ordering in
                order to get a result that you really love and represents you. I
                always aim to get as close to the style you want as possible!
              </p>
              <p>
                Click any image to view a larger version and make a note of any
                of the HD reference numbers that stand out to you or that you
                want to use as an influence on your piece. When you're ready,
                drop me an email at{" "}
                <a
                  href="mailto:heatons.design@gmail.com"
                  title="Email Heatons Design"
                >
                  heatons.design@gmail.com
                </a>{" "}
                with either your full brief or the idea you've got. Often its
                best for us to speak directly to get your requirements nailed
                down prior to work starting.
              </p>
              <a href="/contact" title="Contact Heatons Design">
                <Button size="sm" className="mt-6 mr-6">
                  Contact <ArrowUpRight />
                </Button>
              </a>
            </div>
          }
        />
        <Gallery items={galleryData} />
      </main>
    </AnimatedPage>
  );
}
