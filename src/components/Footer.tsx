import Link from "next/link";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-100 px-4 md:px-8 lg:px-12 pt-8 md:pt-12 lg:pt-24">
      <div className="container mx-auto px-4">
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
            <Link href="/about" className="border-b pb-2 block">
              Link one
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link two
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link three
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link four
            </Link>
          </div>
          <div>
            <strong className="block mb-4">About</strong>
            <Link href="/about" className="border-b pb-2 block">
              Link one
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link two
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link three
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link four
            </Link>
          </div>
          <div>
            <strong className="block mb-4">About</strong>
            <Link href="/about" className="border-b pb-2 block">
              Link one
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link two
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link three
            </Link>
            <Link href="/about" className="border-b pb-2 block">
              Link four
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row md:items-start justify-between py-8">
          &copy; {year} heatons.design | all rights reserved
        </div>
      </div>
    </footer>
  );
}
