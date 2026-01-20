import Leftright from "@/components/ui/leftright";
import Hero from "@/components/ui/Hero";
import RoundBox from "@/components/ui/roundbox";
import { ImageGrid } from "@/components/ui/ImageGrid";
import { AnimatedPage } from "@/components/AnimatedPage";

const myData = [
  {
    src: "/home/grid_1.png",
    alt: "Project Alpha",
  },
  {
    src: "/home/grid_2.png",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_3.png",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_4.png",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_5.png",
    alt: "Project Beta",
  },
  {
    src: "/home/grid_6.png",
    alt: "Project Beta",
  },
];
const roundBoxData = [
  {
    heading: "01 Browse & Inspire",
    content:
      "Think about what you want to depict in your composition - your family, your pet, a relative or friend, even your favourite iconic celebrity. If you need some inspiration, have a look through the gallery page to give you a helping hand.",
    link: "/gallery",
    buttonText: "Browse examples",
  },
  {
    heading: "02 Consultation / Sourcing",
    content:
      "Once you've decided what you'd like to create, I just need a brief from you to get started. The more descriptive you can be, the better! I'll also request some source images to work from so that if it's your cat in your piece, the result actually looks like your cat! Every piece is customised to you.",
  },
  {
    heading: "03 Proofing & Printing",
    content:
      "Once your brief is finalised, I'll get to work and create your piece. You'll receive a proof via email to approve with amends available of anything isn't quite right. After your approval, I'll move onto artboarding and arrange printing. All pieces are giclée printed on high quality archival paper.",
  },
  {
    heading: "04 Delivery",
    content:
      "Your print will be delivered directly to your door at your address of choice, in sturdy and protective packaging to ensure it gets to you in perfect condition. I'll also send you the original artwork digitally which is yours to keep and re-use as you wish. All printing and delivery costs are included in the price of all pieces.",
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
