"use client";
import { AnimatedPage } from "@/components/AnimatedPage";
import ImageTextText from "@/components/ui/ImageTextText";
import { ImageGrid } from "@/components/ui/ImageGrid";

const myData = [
  {
    src: "/about/about_2.png",
    alt: "Project Alpha",
  },
  {
    src: "/about/about_3.png",
    alt: "Project Beta",
  },
  {
    src: "/about/about_4.webp",
    alt: "Project Beta",
  },
  {
    src: "/about/about_5.png",
    alt: "Project Alpha",
  },
  {
    src: "/about/about_6.png",
    alt: "Project Beta",
  },
  {
    src: "/about/about_7.png",
    alt: "Project Beta",
  },
];

export default function About() {
  return (
    <AnimatedPage>
      <main>
        <ImageTextText
          heading={"welcome to heatons design"}
          image={"/about/about_1.png"}
          alt={"alt text"}
          linkOne={"/how-it-works"}
          buttonTextOne="How it works"
          linkTwo={"/gallery"}
          buttonTextTwo="View gallery"
          content1={
            <>
              <p>
                Hello! I'm Mark, a designer and web developer based in Heaton
                Moor, Stockport, where I live with my partner and our dog,
                Stilton. If you're local, there's a good chance you've spotted
                us out on our daily dog walks.
              </p>

              <p>
                With over 20 years of experience in the design industry, I
                created this site to offer bespoke, personalised artwork for
                homes and workplaces - custom pieces designed around you and
                produced as high-quality prints. If you're in the area, feel
                free to drop into La Charcuterie in Heaton Moor, where you can
                see one of my prints displayed on their wall.
              </p>

              <p>
                The process is simple. You tell me what you'd like to feature
                and provide a reference photos or two, and I'll take care of the
                rest. Every piece is created digitally and tailored to your
                brief, allowing me to produce original, one-of-a-kind artwork at
                a fraction of the cost of traditional methods, with prices
                starting at just £65.
              </p>

              <p>
                You can specify the subject, setting, colours, clothing—every
                detail is up to you. A range of sizes and formats is available,
                from small 6x6 inch prints to larger pieces such as a 20x20 inch
                multi-image montage. I handle all layout and artboarding to
                ensure a precise, polished result. Before printing, you'll
                receive a proof for approval, with the opportunity to request a
                round of amendments if needed.
              </p>

              <p>
                <strong>What's included in the cost?</strong>
              </p>

              <p>Inlcuded in all pieces:</p>
              <ul>
                <li>
                  Production of a unique, bespoke artwork (or multiples
                  thereof).
                </li>
                <li>
                  Customisation of the piece - this usually takes around 2
                  hours.
                </li>
                <li>Proof copy sent via email prior to printing.</li>
                <li>
                  Creation of print artboard to ensure it meets high printing
                  standards.
                </li>
                <li>
                  Printing of artwork using the giclée method, producing an
                  archival quality print on 310gsm Hahnemühle Etching paper.
                </li>
                <li>Delivery to your address of choice.</li>
              </ul>

              <p>
                Thanks for visiting. If you'd like to create something truly
                personal, head over to the{" "}
                <a href="/contact" title="Contact Heatons Design">
                  contact page
                </a>
                &nbsp;and get in touch.
              </p>
            </>
          }
        />
        <ImageGrid items={myData} />
      </main>
    </AnimatedPage>
  );
}
