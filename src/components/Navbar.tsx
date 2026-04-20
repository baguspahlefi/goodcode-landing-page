import Link from "next/link";
import { FinetuneLogo, MenuIcon } from "@/components/icons";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "How it Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Testimonials", href: "/#testimonial" },
];

export function Navbar() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-[26px] bg-transparent"
        style={{ mixBlendMode: "difference" }}
      >
        <Link href="/" style={{ mixBlendMode: "difference" }}>
          <div className="w-[167px] md:w-[200px] text-[#E0E1EA]">
            <FinetuneLogo className="w-auto h-auto" />
          </div>
        </Link>

        <ul
          className="hidden md:flex gap-4 text-[#E0E1EA] font-extralight text-base leading-[20px]"
          style={{ mixBlendMode: "difference" }}
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="hover:text-white transition-colors duration-200">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="fixed top-8 right-8 z-50 md:hidden w-10 h-10 border border-gray-300 bg-[#EEEFF5] rounded-lg flex flex-col items-center justify-center gap-1.5 hover:bg-gray-300 transition-colors"
        aria-label="Open menu"
      >
        <MenuIcon className="w-5 h-3.5 text-gray-700" />
      </button>
    </>
  );
}
