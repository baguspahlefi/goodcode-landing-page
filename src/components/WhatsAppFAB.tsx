"use client";

import Image from "next/image";

const WA = "https://wa.me/6285608537600?text=Halo%20Good.code%2C%20saya%20ingin%20konsultasi%20soal%20website%20untuk%20bisnis%20saya";

export function WhatsAppFAB() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className="flex md:hidden"
      style={{
        position: "fixed",
        left: 14,
        right: 14,
        bottom: "calc(12px + env(safe-area-inset-bottom))",
        alignItems: "center",
        gap: 12,
        background: "linear-gradient(145deg,#6A4A30 0%,#4B3424 100%)",
        border: "1px solid rgba(239,220,171,0.38)",
        borderRadius: 999,
        padding: "10px 12px",
        zIndex: 130,
        boxShadow: "0 14px 34px rgba(30,20,10,0.34)",
        textDecoration: "none",
      }}
      aria-label="Konsultasi via WhatsApp"
    >
      <span
        style={{
          position: "relative",
          width: 42,
          height: 42,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          background: "#1fa855",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <Image src="/images/wa-icon.png" alt="" width={24} height={24} aria-hidden style={{ objectFit: "cover", transform: "scale(1.55)", display: "block" }} />
      </span>

      <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <strong style={{ fontSize: 17, lineHeight: 1.05, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" }}>Konsultasi Gratis</strong>
        <span style={{ fontSize: 11, lineHeight: 1.25, color: "rgba(255,244,224,0.8)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          Balas &lt; 2 jam · Tanpa komitmen
        </span>
      </span>

      <span
        style={{
          marginLeft: "auto",
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#D98324",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          fontSize: 16,
          fontWeight: 700,
          flexShrink: 0,
          boxShadow: "0 6px 16px rgba(217,131,36,0.42)",
        }}
      >
        →
      </span>
    </a>
  );
}
