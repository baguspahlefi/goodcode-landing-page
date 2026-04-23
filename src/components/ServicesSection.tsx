"use client";

import Image from "next/image";
import { SettingsGearIcon } from "@/components/icons";

const CARD_BASE = "relative rounded-2xl px-4 py-5 overflow-hidden group transition-all duration-300 cursor-pointer";
const CARD_STYLE = { background: "#F7ECCD", border: "2px solid #DCC58F" };
const CARD_IMG_BG = { background: "#EFDCAB" };
const GLOW = { background: "rgba(217,131,36,0.18)", filter: "blur(100px)" };

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
        {/* Card 1: Website Development */}
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
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#443627" }}>Pembuatan Website</h3>
            <p className="text-base max-w-[320px]" style={{ color: "#6B5238" }}>
              Website teroptimasi yang terbukti meraih skor 90+ di Google PageSpeed.
            </p>
          </div>
        </div>

        {/* Card 2: Dashboard App */}
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
              Dashboard berbasis data yang mempermudah pengelolaan bisnis dan pengambilan keputusan.
            </p>
          </div>
        </div>

        {/* Card 3: UI/UX & Mobile */}
        <div className={CARD_BASE} style={CARD_STYLE} tabIndex={0}>
          <div className="relative rounded-lg overflow-hidden h-[258px] flex items-end justify-center" style={CARD_IMG_BG}>
            <Image src="/services/mobile/Mobile 2.png" alt="" width={180} height={232} className="absolute bottom-0 w-auto h-[90%] object-contain transition-all duration-500 opacity-0 scale-[0.85] translate-x-0 group-hover:opacity-100 group-hover:translate-x-[70px] group-hover:translate-y-[70px]" style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }} />
            <Image src="/services/mobile/Mobile 1.png" alt="" width={180} height={232} className="relative z-10 w-auto h-[90%] object-contain transition-all duration-500 scale-[2] translate-y-[150px] group-hover:scale-[1.5] group-hover:translate-y-[70px] group-hover:-translate-x-[50px]" style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }} />
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 rounded-full pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <div className="absolute w-24 h-24 rounded-full pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" style={GLOW} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#443627" }}>UI/UX &amp; Mobile App</h3>
            <p className="text-base max-w-[320px]" style={{ color: "#6B5238" }}>
              Antarmuka yang berpusat pada pengguna — dirancang untuk pengalaman digital yang mulus.
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
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#443627" }}>Maintenance Website</h3>
            <p className="text-base max-w-[320px]" style={{ color: "#6B5238" }}>
              Perawatan rutin, pembaruan keamanan, dan optimasi performa agar website tetap prima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
