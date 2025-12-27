import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-100 px-4 pt-8 md:pt-12 lg:pt-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-8 md:pb-12">
        <div>
          <a
            href="/"
            title="heatons.design home"
            className="font-serif text-3xl"
          >
            heatons.design
          </a>
        </div>
        <div>
          <strong className="block mb-4">About</strong>
          <Link to="/about" className="border-b pb-2 block">
            Link one
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link two
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link three
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link four
          </Link>
        </div>
        <div>
          <strong className="block mb-4">About</strong>
          <Link to="/about" className="border-b pb-2 block">
            Link one
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link two
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link three
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link four
          </Link>
        </div>
        <div>
          <strong className="block mb-4">About</strong>
          <Link to="/about" className="border-b pb-2 block">
            Link one
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link two
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link three
          </Link>
          <Link to="/about" className="border-b pb-2 block">
            Link four
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row md:items-start justify-between py-8">
        &copy; {year} heatons.design | all rights reserved
      </div>
    </footer>
  );
}
