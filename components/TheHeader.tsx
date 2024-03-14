import Link from "next/link";
import { Navigation } from "./Navigation";

const mockItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header>
      <Navigation navLinks={mockItems} />
    </header>
  );
};

export { TheHeader };
