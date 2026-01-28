import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { MenuIcon, SquareArrowOutUpRight } from "lucide-react";
import { ScrollProgress } from "./ui/ScrollProgress";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300 sticky-shrink py-0
        
        [animation-timeline:scroll(root)]
        [animation-range:0px_100px]
        animate-[shrink-header_linear_forwards]
        
        "
    >
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex md:flex-row md:items-start justify-between">
            <div className="basis-2/4 md:basis-1/4">
              <a
                href="/"
                title="heatons.design home"
                className="font-serif text-3xl"
              >
                heatons design
              </a>
            </div>
            <div className="hidden md:block">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent className="right-0 md:left-auto z-50">
                      <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <span className="relative overflow-hidden from-muted/50 to-muted flex h-full p-[0] w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md">
                              <Image
                                alt="Whimsical illustration of a German Shepherd dog"
                                src="/nav/nav_about_thumb.png"
                                fill
                                className="object-cover"
                              />
                            </span>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/about" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem href="/how-it-works" title="How it Works">
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem href="/printing" title="Printing">
                          Find out about the method used for printing and what
                          sets it apart
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Custom Work</NavigationMenuTrigger>
                    <NavigationMenuContent className="right-0 md:left-auto">
                      <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <span className="relative overflow-hidden from-muted/50 to-muted flex h-full p-[0] w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md">
                              <Image
                                alt="Playful illustration of a couple wearing their favourite football teams shirts with their black and white cat"
                                src="/nav/nav_work_thumb.png"
                                fill
                                className="object-cover"
                              />
                            </span>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/gallery" title="Example Gallery">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem href="/case-studies" title="Case Studies">
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Other Work"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                    <NavigationMenuContent className="right-0 md:left-auto">
                      <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <span className="relative overflow-hidden from-muted/50 to-muted flex h-full p-[0] w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md">
                              <Image
                                alt="Illustration of a little girl with blonde hair in the snow"
                                src="/nav/nav_pricing_thumb.png"
                                fill
                                className="object-cover"
                              />
                            </span>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/pricing" title="Pricing">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="https://www.etsy.com/"
                        target="_blank"
                        className="flex-row items-center gap-1"
                      >
                        Shop <SquareArrowOutUpRight className="size-4" />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                    <NavigationMenuContent className="right-0 md:left-auto">
                      <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                              href="/"
                            >
                              <div className="">
                                <span className="scroll-m-20 text-2xl font-serif">
                                  heatons.design
                                </span>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/about" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-4">
                  <div className="flex flex-col gap-4 mt-8">
                    <Link href="/" className="border-b pb-2">
                      Home
                    </Link>
                    <strong>About</strong>
                    <Link href="/about" className="border-b pb-2 pl-3">
                      About
                    </Link>
                    <Link href="/how-it-works" className="border-b pb-2 pl-3">
                      How it works
                    </Link>
                    <Link href="/printing" className="border-b pb-2 pl-3">
                      Printing
                    </Link>
                    <strong>Custom Work</strong>
                    <Link href="/gallery" className="border-b pb-2 pl-3">
                      Gallery
                    </Link>
                    <Link href="/contact" className="border-b pb-2">
                      Contact
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
