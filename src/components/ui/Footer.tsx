import { Button } from "@/components/ui/button";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-10">
        &copy; {year} heatons.design | all rights reserved
      </div>
      <Button className="mt-4">Go to About</Button>
      <div className="fixed right-0 bottom-0 left-0 z-50 w-full">
        POSS PROGRESS BAR
      </div>
    </>
  );
}
