import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Finetune — Premium Web Design & Development",
  description:
    "Get a website that loads 3x faster and converts 20% more visitors. Professional, premium & exclusive web designs with high quality for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
