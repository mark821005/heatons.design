import { Button } from "@/components/ui/button";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <>
      <div className="flex md:flex-row md:items-start justify-between py-8">
        &copy; {year} heatons.design | all rights reserved
      </div>
      <Button className="mt-4">Go to About</Button>
    </>
  );
}
