"use client";
import { AnimatedPage } from "@/components/AnimatedPage";
import ImageTextText from "@/components/ui/ImageTextText";
import { ImageGrid } from "@/components/ui/ImageGrid";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
          heading={"pricing"}
          image={"/printing/printing_1.png"}
          alt={"alt text"}
          linkOne={"/how-it-works"}
          buttonTextOne="How it works"
          linkTwo={"/gallery"}
          buttonTextTwo="View gallery"
          content1={
            <>
              <p>
                Pricing is kept as simple as possible with single prints
                starting at £55, and subsequent singles as part of the same
                order priced at £45 each. I also offer set prices for multiples
                of 4 prints, either as 4 singles or as part of a montage on a
                larger canvas. For orders of over 4 works, usually as part of a
                montage, pricing will be kept as low as possible and made clear
                prior to work starting. Due to the premium materials used in
                producing your print, material and printing costs go up with
                respect to the number of separate canvases ordered, so 4 x
                single canvases incurs more cost than 4 x images on a single
                canvas. Please note that prices are for the print only and
                frames are not supplied.
              </p>

              <p>
                View the pricing table below and for any enquiries regarding
                cost, please{" "}
                <a href="/contact" title="Contact Heatons Design">
                  contact me
                </a>{" "}
                . For a guide on canvases and pricing, visit the{" "}
                <a href="/canvases" title="Canvases">
                  canvases
                </a>{" "}
                page.
              </p>

              <p>
                <strong>Included in all orders:</strong>
              </p>
              <ul>
                <li>
                  Production of a unique, bespoke artwork (or multiples
                  thereof).
                </li>
                <li>2 hours of customisation time of each piece.</li>
                <li>Proof copy sent via email prior to printing.</li>
                <li>
                  Creation of print artboard to ensure it meets high printing
                  standards.
                </li>
                <li>
                  Printing of artwork using the giclée method, producing an
                  archival quality print on{" "}
                  <HoverCard openDelay={10} closeDelay={100}>
                    <HoverCardTrigger className="hoverTrigger">
                      <span className="hoverTrigger cursor-help border-b border-dotted">
                        310gsm Hahnemühle Etching paper
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side="top"
                      className="flex w-64 flex-col gap-0.5"
                      data-no-blur="true"
                    >
                      <div className="font-semibold">
                        Hahnemühle Etching paper
                      </div>
                      <div>
                        This is a classic, heavy-duty paper originally made for
                        traditional copperplate printing, with an inkjet coating
                        for high-end digital art. It is entirely acid-free,
                        meaning it won't yellow or degrade over time, ensuring
                        your print stays gallery-quality for a lifetime.
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  .
                </li>
                <li>Supply of digital artwork for you to keep and re-use.</li>
                <li>Delivery to your address of choice.</li>
              </ul>
            </>
          }
        />
        <ImageGrid items={myData} />
      </main>
    </AnimatedPage>
  );
}
