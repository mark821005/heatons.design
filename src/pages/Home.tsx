import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <Link to="/about">
          <Button className="mt-4">Go to About</Button>
        </Link>
      </div>
    </>
  );
}
