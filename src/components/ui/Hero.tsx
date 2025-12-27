import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { MotionCarousel } from "@/components/ui/MotionCarousel";

export default function Hero() {
  return (
    <>
      <div className="md:flex md:flex-row md:justify-start md:items-center mb-24 min-h-[400px]">
        <div className="basis-3/8">
          <h1 className="scroll-m-20 text-5xl">your life, reimagined.</h1>
          <p>
            Bespoke art, customised to you.
            <br />
            Supplied as the highest quality print.
          </p>
        </div>
        <div className="basis-5/8">
          <MotionCarousel />
        </div>
      </div>
    </>
  );
}
