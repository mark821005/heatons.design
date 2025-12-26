import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Leftright from "@/components/ui/leftright";
import { Button } from "@/components/ui/button";
import Hero from "@/components/ui/Hero";
import { Link } from "react-router";
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
    heading: "01 Browse",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/about",
    buttonText: "Browse styles",
  },
  {
    heading: "02 Consultation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "03 Sourcing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "04 Proof",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "05 Print",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "06 Delivery",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export default function Home() {
  return (
    <AnimatedPage>
      <header className="relative z-10">
        <Header />
      </header>
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
          <div>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              The king's plan
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The king thought long and hard, and finally came up with{" "}
              <a
                href="#"
                className="text-primary font-medium underline underline-offset-4"
              >
                a brilliant plan
              </a>
              : he would tax the jokes in the kingdom.
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "After all," he said, "everyone enjoys a good joke, so it's only
              fair that they should pay for the privilege."
            </blockquote>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              The joke tax
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The king's subjects were not amused. They grumbled and complained,
              but the king was firm:
            </p>
            <ul className="my-6 ml-6 list-disc [&amp;&gt;li]:mt-2">
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king's foolishness get him down: a court jester named Jokester.
            </p>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Jokester's Revolt
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn't help but
              laugh. And once they started laughing, they couldn't stop.
            </p>
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              The People's Rebellion
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again, and soon the entire kingdom
              was in on the joke.
            </p>
            <div className="my-6 w-full overflow-y-auto">
              <table className="w-full">
                <thead>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <th className="border px-4 py-2 text-left font-bold [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      King's Treasury
                    </th>
                    <th className="border px-4 py-2 text-left font-bold [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      People's happiness
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Empty
                    </td>
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Overflowing
                    </td>
                  </tr>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Modest
                    </td>
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Satisfied
                    </td>
                  </tr>
                  <tr className="even:bg-muted m-0 border-t p-0">
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Full
                    </td>
                    <td className="border px-4 py-2 text-left [&amp;[align=center]]:text-center [&amp;[align=right]]:text-right">
                      Ecstatic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax. Jokester was declared
              a hero, and the kingdom lived happily ever after.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </AnimatedPage>
  );
}
