import { AnimatedPage } from "@/components/AnimatedPage";
import Leftright from "@/components/ui/leftright";
import { Steps } from "@/components/ui/Steps";

const stepData = [
  {
    heading: "browse & inspire",
    content:
      "Sed in tellus tortor. Pellentesque mattis ut lectus quis pellentesque. Donec euismod faucibus leo sed commodo. Integer aliquam ipsum nec justo consequat, sed vulputate erat tincidunt. Nam aliquet justo id lectus consectetur, ac congue urna porttitor. Nam et ornare leo, nec rutrum tellus. Quisque sed leo quis erat tincidunt vestibulum. Vivamus vel tellus quis sem blandit eleifend. In hac habitasse platea dictumst. Integer eu fermentum nibh, et sagittis ligula. Suspendisse leo arcu, varius ut consequat id, semper eu erat. Nunc mollis dui eu aliquam bibendum. Curabitur vel justo feugiat, molestie sem porta, iaculis lacus. Praesent at luctus nisl, sit amet ornare est. Proin sodales eros eget tortor fermentum, ut feugiat enim rutrum. Nam lacinia id est at dapibus.",
    image: "/home/home_hero.webp",
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
          heading={"welcome to heatons.design"}
          content={
            <div className="scrolling-text">
              <p>
                Do you have something you'd like to create? You might have a
                strong idea already of what you would like to make and that's
                great if so, the stronger the brief you can supply, the better.
                If not, however, it's no problem. You might find inspiration by
                browsing the examples on this site or you might simply know that
                you want to include a person and something they do, for example
                a daughter who loves to dance, a son who is into dinosaurs or a
                grandad who loves to garden.
              </p>
              <p>
                Whatever your ideas might be, they can be imagined and created.
              </p>
            </div>
          }
        />
        <Steps items={stepData} />
      </main>
    </AnimatedPage>
  );
}
