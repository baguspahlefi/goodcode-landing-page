"use client";

import Image from "next/image";
import { SettingsGearIcon } from "@/components/icons";

const CARD_BASE = "relative rounded-2xl px-4 py-5 overflow-hidden group transition-all duration-300 cursor-pointer";
const CARD_STYLE = { background: "#F7ECCD", border: "2px solid #DCC58F" };
const CARD_IMG_BG = { background: "#EFDCAB" };
const GLOW = { background: "rgba(217,131,36,0.18)", filter: "blur(100px)" };

const marketplaces = ["Shopee", "Tokopedia", "Lazada", "TikTok Shop", "Bukalapak"];

export function ServicesSection() {
  return (
    <section id="services" className="bg-transparent mt-[160px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <h2
          className="text-2xl font-medium"
          style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}
        >
          Layanan Kami
        </h2>
        <p className="text-base font-light leading-relaxed max-w-[470px]" style={{ color: "#6B5238" }}>
          Website profesional, premium, dan eksklusif — dibangun sesuai kebutuhan bisnis kamu, bukan template massal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: Migrasi Ecommerce */}
        <div className={CARD_BASE} style={CARD_STYLE} tabIndex={0}>
          <div className="relative rounded-lg overflow-hidden h-[258px] flex flex-col items-center justify-center gap-5 px-6" style={CARD_IMG_BG}>
            <div className="absolute w-48 h-48 rounded-full pointer-events-none" style={{ background: "rgba(217,131,36,0.15)", filter: "blur(80px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            {/* Marketplace chips → arrow → brand */}
            <div className="relative z-10 flex flex-col items-center gap-3 w-full">
              <div className="flex flex-wrap justify-center gap-2">
                {marketplaces.map((mp) => (
                  <span
                    key={mp}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: "rgba(68,54,39,0.12)", color: "#443627", border: "1px solid rgba(68,54,39,0.18)" }}
                  >
                    {mp}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-1">
                <div className="h-px w-10" style={{ background: "rgba(68,54,39,0.25)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#D98324" }}>Migrasi ke</span>
                <div className="h-px w-10" style={{ background: "rgba(68,54,39,0.25)" }} />
              </div>
              <div
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-500 group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #D98324 0%, #B86B1A 100%)", color: "#fff", boxShadow: "0 8px 20px rgba(217,131,36,0.35)" }}
              >
                Website Brand Kamu
              </div>
            </div>
            <p className="relative z-10 text-xs text-center leading-relaxed" style={{ color: "#6B5238" }}>
              Domain sendiri · Checkout otomatis · Ongkir terintegrasi
            </p>
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 rounded-full pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <div className="absolute w-24 h-24 rounded-full pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#443627" }}>Migrasi Ecommerce</h3>
            <p className="text-base max-w-[320px]" style={{ color: "#6B5238" }}>
              Pindah dari marketplace ke toko online milik sendiri — tanpa kehilangan pembeli, tanpa komisi platform.
            </p>
          </div>
        </div>

        {/* Card 2: Landing Page & Company Profile */}
        <div className={CARD_BASE} style={CARD_STYLE} tabIndex={0}>
          <div
            className="relative rounded-lg overflow-hidden h-[258px]"
            style={{
              ...CARD_IMG_BG,
              maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div className="flex gap-6 min-w-max py-4" style={{ animation: "scroll 15s linear infinite" }}>
              {Array.from({ length: 3 }).flatMap((_, i) =>
                ["/services/web/Our Services 1.png", "/services/web/Our Services 2.png", "/services/web/Our Services 3.png"].map((src, j) => (
                  <Image key={`${i}-${j}`} src={src} alt="" width={290} height={190} className="h-auto w-[290px] rounded-lg flex-shrink-0 object-cover" />
                ))
              )}
            </div>
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 rounded-full pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <div className="absolute w-24 h-24 rounded-full pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#443627" }}>Landing Page & Company Profile</h3>
            <p className="text-base max-w-[320px]" style={{ color: "#6B5238" }}>
              Website profesional yang mengonversi pengunjung jadi pembeli — cepat, rapi, dan skor PageSpeed 90+.
            </p>
          </div>
        </div>

        {/* Card 3: Dashboard & Aplikasi */}
        <div className={CARD_BASE} style={CARD_STYLE} tabIndex={0}>
          <div className="relative rounded-lg overflow-hidden h-[258px]" style={CARD_IMG_BG}>
            <Image src="/services/dashboard/Ui Component - Chart.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 overflow-hidden transition-all duration-500" style={{ borderLeft: "1px solid #F7ECCD" }}>
              <Image src="/services/dashboard/Ui Component - Chart Black.png" alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover transition-transform duration-500 translate-x-[50%] group-hover:translate-x-0" />
            </div>
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 rounded-full pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <div className="absolute w-24 h-24 rounded-full pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#443627" }}>Dashboard & Aplikasi</h3>
            <p className="text-base max-w-[320px]" style={{ color: "#6B5238" }}>
              Sistem internal berbasis web untuk kelola pesanan, stok, dan data bisnis kamu dalam satu tempat.
            </p>
          </div>
        </div>

        {/* Card 4: Maintenance */}
        <div className={CARD_BASE} style={CARD_STYLE} tabIndex={0}>
          <div className="relative rounded-lg overflow-hidden h-[258px] flex items-center justify-center" style={CARD_IMG_BG}>
            <div className="flex flex-wrap gap-4 w-[200px] transition-transform duration-500 group-hover:translate-x-28">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="w-[42px] h-[42px] rounded-2xl flex items-center justify-center" style={{ background: "#F7ECCD" }}>
                  <Image src={`/services/maintenance/Maintenance Icon-${i + 1}.png`} alt="" width={28} height={28} className="w-7 h-7 object-contain mix-blend-multiply" />
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[144px] h-[142px] rounded-[2rem] shadow-2xl flex items-center justify-center" style={{ background: "linear-gradient(150deg, #D98324 0%, #B86B1A 100%)" }}>
              <div className="w-16 h-16 text-white transition-transform duration-700 group-hover:rotate-90" style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}>
                <SettingsGearIcon className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 rounded-full pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <div className="absolute w-24 h-24 rounded-full pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#443627" }}>Maintenance & Support</h3>
            <p className="text-base max-w-[320px]" style={{ color: "#6B5238" }}>
              Perawatan rutin, pembaruan keamanan, dan optimasi performa agar website tetap prima setiap saat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
