import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "@/components/icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonial" },
];

export function Navbar() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-10 md:z-50 flex items-center justify-between px-6 md:px-8 py-[22px] bg-transparent md:bg-white/30 md:backdrop-blur-md md:border-b md:border-white/35 md:shadow-[0_10px_30px_rgba(31,78,136,0.10)]"
      >
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/goodcode-logo.svg"
            alt="GoodCode"
            width={230}
            height={52}
            priority
            className="w-[170px] md:w-[230px] h-auto drop-shadow-[0_8px_20px_rgba(79,132,188,0.18)]"
          />
        </Link>

        <ul className="hidden md:flex gap-5 text-[#2F5F98] font-normal text-base leading-[20px]">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="hover:text-[#1F4E88] transition-colors duration-200">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="fixed top-6 right-6 z-10 md:hidden w-10 h-10 border border-white/40 bg-white/35 backdrop-blur-md rounded-lg flex flex-col items-center justify-center gap-1.5 shadow-[0_10px_24px_rgba(31,78,136,0.18)] hover:bg-white/50 transition-all"
        aria-label="Open menu"
      >
        <MenuIcon className="w-5 h-3.5 text-[#2F5F98]" />
      </button>
    </>
  );
}
