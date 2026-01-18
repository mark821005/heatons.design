import { AnimatedPage } from "@/components/AnimatedPage";
import Leftright from "@/components/ui/leftright";
import { Steps } from "@/components/ui/Steps";

const stepData = [
  {
    heading: "browse & inspire",
    content:
      "Sed in tellus tortor. Pellentesque mattis ut lectus quis pellentesque. Donec euismod faucibus leo sed commodo. Integer aliquam ipsum nec justo consequat, sed vulputate erat tincidunt. Nam aliquet justo id lectus consectetur, ac congue urna porttitor. Nam et ornare leo, nec rutrum tellus. Quisque sed leo quis erat tincidunt vestibulum. Vivamus vel tellus quis sem blandit eleifend. In hac habitasse platea dictumst. Integer eu fermentum nibh, et sagittis ligula. Suspendisse leo arcu, varius ut consequat id, semper eu erat. Nunc mollis dui eu aliquam bibendum. Curabitur vel justo feugiat, molestie sem porta, iaculis lacus. Praesent at luctus nisl, sit amet ornare est. Proin sodales eros eget tortor fermentum, ut feugiat enim rutrum. Nam lacinia id est at dapibus.",
    image: "/method/method_1.png",
    alt: "alt text",
  },
  {
    heading: "consultation & sourcing",
    content:
      "Sed in tellus tortor. Pellentesque mattis ut lectus quis pellentesque. Donec euismod faucibus leo sed commodo. Integer aliquam ipsum nec justo consequat, sed vulputate erat tincidunt. Nam aliquet justo id lectus consectetur, ac congue urna porttitor. Nam et ornare leo, nec rutrum tellus. Quisque sed leo quis erat tincidunt vestibulum. Vivamus vel tellus quis sem blandit eleifend. In hac habitasse platea dictumst. Integer eu fermentum nibh, et sagittis ligula. Suspendisse leo arcu, varius ut consequat id, semper eu erat. Nunc mollis dui eu aliquam bibendum. Curabitur vel justo feugiat, molestie sem porta, iaculis lacus. Praesent at luctus nisl, sit amet ornare est. Proin sodales eros eget tortor fermentum, ut feugiat enim rutrum. Nam lacinia id est at dapibus.",
    image: "/home/home_hero_2.webp",
    alt: "alt text",
  },
  {
    heading: "proofing & printing",
    content:
      "Sed in tellus tortor. Pellentesque mattis ut lectus quis pellentesque. Donec euismod faucibus leo sed commodo. Integer aliquam ipsum nec justo consequat, sed vulputate erat tincidunt. Nam aliquet justo id lectus consectetur, ac congue urna porttitor. Nam et ornare leo, nec rutrum tellus. Quisque sed leo quis erat tincidunt vestibulum. Vivamus vel tellus quis sem blandit eleifend. In hac habitasse platea dictumst. Integer eu fermentum nibh, et sagittis ligula. Suspendisse leo arcu, varius ut consequat id, semper eu erat. Nunc mollis dui eu aliquam bibendum. Curabitur vel justo feugiat, molestie sem porta, iaculis lacus. Praesent at luctus nisl, sit amet ornare est. Proin sodales eros eget tortor fermentum, ut feugiat enim rutrum. Nam lacinia id est at dapibus.",
    image: "/home/home_hero_3.webp",
    alt: "alt text",
  },
  {
    heading: "delivery",
    content:
      "Sed in tellus tortor. Pellentesque mattis ut lectus quis pellentesque. Donec euismod faucibus leo sed commodo. Integer aliquam ipsum nec justo consequat, sed vulputate erat tincidunt. Nam aliquet justo id lectus consectetur, ac congue urna porttitor. Nam et ornare leo, nec rutrum tellus. Quisque sed leo quis erat tincidunt vestibulum. Vivamus vel tellus quis sem blandit eleifend. In hac habitasse platea dictumst. Integer eu fermentum nibh, et sagittis ligula. Suspendisse leo arcu, varius ut consequat id, semper eu erat. Nunc mollis dui eu aliquam bibendum. Curabitur vel justo feugiat, molestie sem porta, iaculis lacus. Praesent at luctus nisl, sit amet ornare est. Proin sodales eros eget tortor fermentum, ut feugiat enim rutrum. Nam lacinia id est at dapibus.",
    image: "/home/home_hero.webp",
    alt: "alt text",
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
