import { Link } from "react-router";
import { AnimatedPage } from "@/components/AnimatedPage";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function About() {
  return (
    <AnimatedPage>
      <Header />
      <div className="p-10">
        <h1 className="text-3xl font-bold">About Page</h1>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Back to Home
        </Link>
      </div>
      <Footer />
    </AnimatedPage>
  );
}
