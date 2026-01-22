"use client";
import { AnimatedPage } from "@/components/AnimatedPage";
import ImageTextText from "@/components/ui/ImageTextText";
import { ImageGrid } from "@/components/ui/ImageGrid";

const myData = [
  {
    src: "/printing/printing_2.png",
    alt: "Project Alpha",
  },
  {
    src: "/printing/printing_3.png",
    alt: "Project Beta",
  },
  {
    src: "/printing/printing_4.png",
    alt: "Project Beta",
  },
  {
    src: "/printing/printing_5.png",
    alt: "Project Alpha",
  },
  {
    src: "/printing/printing_6.png",
    alt: "Project Beta",
  },
  {
    src: "/printing/printing_7.png",
    alt: "Project Beta",
  },
];

export default function Printing() {
  return (
    <AnimatedPage>
      <main>
        <ImageTextText
          heading={"printing"}
          image={"/printing/printing_1.png"}
          alt={"alt text"}
          linkOne={"/how-it-works"}
          buttonTextOne="How it works"
          linkTwo={"/gallery"}
          buttonTextTwo="View gallery"
          content1={
            <>
              <p>
                One thing I won't compromise on is the standard of printing.
                When you invest in a piece of art, you want the colors to be
                just as punchy and the details just as crisp as they looked on
                the day they were created. That's where Giclée printing comes
                in. Unlike your standard home or office printer which normally
                has 4 ink cartridges, a Giclée printer has 12. This means it can
                catch those tiny shifts in shadow and light that other printers
                simply miss. It's the difference between a simple print and
                something that captures the original colours and intricacies as
                intended.
              </p>

              <p>
                Prints are supplied at 'archival' quality, meaning that they are
                fit for galleries and archives. By using archival-grade,
                pigment-based inks and heavy-weight, acid-free papers, these
                prints are built to last a lifetime. Literally. In fact, under
                the right conditions, a Giclée print can stay vibrant for over
                100 years. While this method is slightly more expensive, the
                difference in product quality is well worth it. Giclée printing
                doesn't use the tiny "dots" you might see in a magazine.
                Instead, it sprays a microscopic mist of ink, creating a smooth,
                continuous finish that looks incredibly natural, resulting in
                extremely high resolution and detail that's beyond comparison
                with other methods.
              </p>

              <p>
                Printing is fulfilled by a trusted 3rd party with whom I've only
                had positive experiences and excellent results. The cost of
                printing is included in the price for all prints, along with
                delivery.
              </p>
            </>
          }
        />
        <ImageGrid items={myData} />
      </main>
    </AnimatedPage>
  );
}
