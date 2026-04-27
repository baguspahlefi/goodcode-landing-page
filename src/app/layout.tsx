import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const interDisplay = localFont({
  src: [
    { path: "../../public/fonts/InterDisplay_ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/InterDisplay_Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/InterDisplay_Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/InterDisplay_Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/InterDisplay_SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/InterDisplay_Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
  fallback: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: false,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Good.code — Website Ecommerce untuk UMKM Indonesia",
  description:
    "Spesialis migrasi marketplace ke website sendiri. Saya bantu pemilik toko online migrasi dari Shopee, Tokopedia ke website ecommerce milik sendiri.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${interDisplay.variable} ${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
