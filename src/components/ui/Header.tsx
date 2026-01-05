import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import { ScrollProgress } from "./ScrollProgress";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300
        
        [animation-timeline:scroll()]
        [animation-range:0px_100px]
        animate-[shrink-header_linear_forwards]
        
        py-0"
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
                heatons.design
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
                            <span className="overflow-hidden from-muted/50 to-muted flex h-full p-[0] w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md">
                              <img
                                src="/nav/nav_about.png"
                                className="h-full w-full object-cover"
                              />
                            </span>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/about" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem href="/methodology" title="Methodology">
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Printing"
                        >
                          All you need to know about the final print you recieve
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Work</NavigationMenuTrigger>
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
                        <ListItem href="/about" title="Example Gellery">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Case Studies"
                        >
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
                    <Link to="/" className="border-b pb-2">
                      Home
                    </Link>
                    <Link to="/about" className="border-b pb-2">
                      About
                    </Link>
                    <div>
                      <Link to="/about" className=" px-2 text-sm">
                        About
                      </Link>
                    </div>
                    <Link to="/contact" className="border-b pb-2">
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
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
