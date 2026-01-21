import { AnimatedPage } from "@/components/AnimatedPage";
import Leftright from "@/components/ui/leftright";
import { Steps } from "@/components/ui/Steps";
import { link } from "fs";

const stepData = [
  {
    heading: "browse & inspire",
    content:
      "Being able to communicate what you'd like to create is key to getting the result you want! Take a moment to think about your custom composition. Whether it’s a portrait of your immediate family, a playful depiction of a cherished pet, or a meaningful gift for a relative or close friend, the possibilities are as vast as your imagination. You might even choose to immortalise a personal hero or an iconic celebrity who has left an impact on your life. If you find yourself drawing a blank, don't worry, inspiration is just a click away. Have a browse through the Gallery Page to explore a collection of past works, where you can see how different stories, personalities, and styles come to life. If you're still not sure, and you're happy to, you can even just say 'Here's a picture of my dog, make something' and leave it up to me!",
    image: "/method/method_1.png",
    alt: "alt text",
    link: "/gallery",
    buttonText: "Browse gallery",
  },
  {
    heading: "consultation & sourcing",
    content:
      "Once you've settled on a vision for your piece, the next step is to share your ideas through a creative brief. Don't be afraid to dive into the details, the more descriptive you are about the mood, personality, and specific elements you want included, the more effectively I can bring that vision to life. To get the best results, I'll also ask for pictures of your subjects, whether it's people or animals, so that your piece is representative of them. This is the secret to making sure that the cat in your artwork isn't just any cat, but your cat. I don't want to create a generic piece, but somehting that is personal to you, is unique, and makes you smile every time you look at it.",
    image: "/home/home_hero_2.webp",
    alt: "alt text",
  },
  {
    heading: "proofing & printing",
    content:
      "Once your brief is finalised and agreed, I'll get to work and create your piece. You'll receive a proof via email to approve with the opportunity to request amends if needed, but hopefully we'll be on target first time! After your approval, I'll move onto artboarding, meaning the composition will be prepared for print on your chosen canvas or chosen arrangement and supply the artboard to the printer. Prints are all giclée printed at high resolution on high quality archival paper. Click the link below to learn more about this procss and why this is the only method I offer.",
    image: "/home/home_hero_3.webp",
    alt: "alt text",
    link: "/printing",
    buttonText: "Learn about printing",
  },
  {
    heading: "delivery",
    content:
      "Your print(s) will be delivered directly to your preferred address of choice, in sturdy and protective packaging to ensure it gets to you in perfect condition, ready for you to frame or mount. In addition to your physical print, I will provide you with the original digital artwork and artboarding should you wish to order further copies in the future, or resize to share on social media. There are no hidden costs at any point - all prices listed include artboarding, printing and delivery.",
    image: "/home/home_hero.webp",
    alt: "alt text",
    link: "/contact",
    buttonText: "Get started",
  },
];

export default function Methodology() {
  return (
    <AnimatedPage>
      <main>
        <Leftright
          heading={"how it works"}
          content={
            <div className="scrolling-text">
              <p>
                <strong>Custom commissions, tailored to your story.</strong>
                <br />
                <br /> I collaborate with clients to create bespoke artwork that
                celebrates the people and passions in their lives. You don't
                need a perfect brief to start, only a subject. Whether it's a
                daughter captured in mid-dance or a tribute to a loyal pet, I
                can transform your subject into personalised art. Unsure exactly
                what you want?{" "}
                <a href="/gallery" title="Go to gallery page">
                  View the gallery
                </a>{" "}
                for inspiration or get in touch with your ideas and we can take
                it from there.
              </p>
              <p>
                Have a project in mind? Let's imagine it together. Below is a
                step by step guide to how the process might work, but ultimately
                all I need is a brief and some source images to get started.
              </p>
            </div>
          }
        />
        <Steps items={stepData} />
      </main>
    </AnimatedPage>
  );
}
