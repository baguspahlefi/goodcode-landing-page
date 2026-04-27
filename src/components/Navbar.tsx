"use client";

import { useState } from "react";
import Link from "next/link";

const WA = "https://wa.me/6285608537600?text=Halo%20Good.code%2C%20saya%20ingin%20konsultasi%20soal%20website%20untuk%20bisnis%20saya";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Layanan", href: "/#services" },
  { label: "Cara Kerja", href: "/#process" },
  { label: "Testimoni", href: "/#testimonial" },
  { label: "Kalkulator", href: "/kalkulator" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-300"
        style={{
          background: "rgba(242,246,208,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #DCC58F",
          fontFamily: "var(--font-dm-sans, 'DM Sans'), sans-serif",
        }}
      >
        <Link
          href="/"
          className="text-[20px] font-medium tracking-[-0.01em] text-[#443627]"
          style={{ fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}
        >
          Good<span style={{ color: "#D98324" }}>.</span>code
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[13px] font-normal text-[#92724F] hover:text-[#443627] transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-px"
          style={{
            background: "#D98324",
            boxShadow: "0 6px 16px rgba(217,131,36,0.28)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#B86B1A")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#D98324")}
        >
          Konsultasi Gratis
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-base text-[#6B5238] transition-colors duration-200"
          style={{ border: "1px solid #DCC58F", background: "#FFFFFF" }}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div
          className="fixed top-[57px] left-0 right-0 z-[99] px-6 pt-4 pb-6 flex flex-col gap-0.5"
          style={{
            background: "rgba(247,236,205,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid #DCC58F",
            fontFamily: "var(--font-dm-sans, 'DM Sans'), sans-serif",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[15px] py-3 text-[#6B5238] hover:text-[#443627] transition-colors"
              style={{ borderBottom: "1px solid #DCC58F" }}
            >
              {label}
            </Link>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 rounded-full text-white text-[14px] font-medium text-center"
            style={{ background: "#D98324" }}
            onClick={() => setOpen(false)}
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </>
  );
}
