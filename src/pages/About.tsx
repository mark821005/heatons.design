import { Link } from "react-router";
import { AnimatedPage } from "@/components/AnimatedPage";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ImageTextText from "@/components/ui/ImageTextText";

export default function About() {
  return (
    <AnimatedPage>
      <main>
        <ImageTextText
          heading={"welcome blah blah"}
          image={"/home/grid_1.webp"}
          alt={"alt text"}
          content2={
            "Sed in tellus tortor. Pellentesque mattis ut lectus quis pellentesque. Donec euismod faucibus leo sed commodo. Integer aliquam ipsum nec justo consequat, sed vulputate erat tincidunt. Nam aliquet justo id lectus consectetur, ac congue urna porttitor. Nam et ornare leo, nec rutrum tellus. Quisque sed leo quis erat tincidunt vestibulum. Vivamus vel tellus quis sem blandit eleifend. In hac habitasse platea dictumst. Integer eu fermentum nibh, et sagittis ligula. Suspendisse leo arcu, varius ut consequat id, semper eu erat. Nunc mollis dui eu aliquam bibendum. Curabitur vel justo feugiat, molestie sem porta, iaculis lacus. Praesent at luctus nisl, sit amet ornare est. Proin sodales eros eget tortor fermentum, ut feugiat enim rutrum. Nam lacinia id est at dapibus."
          }
        />
      </main>
    </AnimatedPage>
  );
}
