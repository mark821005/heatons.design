import "./globals.css";
import type { Metadata } from "next";
import { Montez, Inter } from "next/font/google"; // Note: Use the actual package name if Zalando Sans is local
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Setup Montez (Serif)
const montez = Montez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif", // Matches your globals.css variable
});

const zalandoSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
import "./globals.css"; // This applies Tailwind and your animations to the whole site

export const metadata: Metadata = {
  title: "Heaton's Design",
  description: "Portfolio of Heaton - Creative Design & Visuals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* We inject the CSS variables into the HTML class list here */
    <html lang="en" className={`${montez.variable} ${zalandoSans.variable}`}>
      <body className="antialiased">
        <Header />
        <div className="container mx-auto px-4">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
