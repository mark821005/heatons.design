import Leftright from "@/components/ui/leftright";
import Hero from "@/components/ui/Hero";
import RoundBox from "@/components/ui/roundbox";
import { ImageGrid } from "@/components/ui/ImageGrid";
import { AnimatedPage } from "@/components/AnimatedPage";

const myData = [
  {
    src: "/home/grid_1.webp",
    alt: "Project Alpha",
  },
  {
    src: "/home/grid_2.webp",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_3.webp",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_4.webp",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_5.webp",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_6.webp",
    alt: "Project Beta",
  },
];
const roundBoxData = [
  {
    heading: "01 Browse & Inspire",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/about",
    buttonText: "Browse examples",
  },
  {
    heading: "02 Consultation / Sourcing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "03 Proofing & Printing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "04 Delivery",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export default function Home() {
  return (
    <AnimatedPage>
      <main>
        <Hero />
        <div className="">
          <Leftright
            heading={"welcome to heatons.design"}
            content={
              <div className="scrolling-text">
                <p>
                  Once upon a time, in a far-off land, there was a very lazy
                  king who spent all day lounging on his throne. One day, his
                  advisors came to him with a problem: the kingdom was running
                  out of money.
                </p>
                <p>
                  Once upon a time, in a far-off land, there was a very lazy
                  king who spent all day lounging on his throne. One day, his
                  advisors came to him with a problem: the kingdom was running
                  out of money.
                </p>
                <p>
                  Once upon a time, in a far-off land, there was a very lazy
                  king who spent all day lounging on his throne. One day, his
                  advisors came to him with a problem: the kingdom was running
                  out of money.
                </p>
              </div>
            }
          />
          <RoundBox
            blockheading={"in brief: how it works"}
            items={roundBoxData}
          />
          <ImageGrid items={myData} />
        </div>
      </main>
    </AnimatedPage>
  );
}
