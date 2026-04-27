import Image from "next/image";

const WA = "https://wa.me/6285608537600?text=Halo%20Good.code%2C%20saya%20ingin%20konsultasi%20soal%20website%20untuk%20bisnis%20saya";
const BRIEF = "https://astakona.sg.larksuite.com/share/base/form/shrlgDF86d3TLy5irv1GLxa5AQb";

const brandLogos = [
  { src: "/images/brands/react.png", alt: "React" },
  { src: "/images/brands/supabase.png", alt: "Supabase" },
  { src: "/images/brands/vercel.png", alt: "vercel" },
  { src: "/images/brands/github.png", alt: "Github" },
  { src: "/images/brands/next.png", alt: "Next.js" },
  { src: "/images/brands/laravel.png", alt: "Laravel" }
];

const doubled = [...brandLogos, ...brandLogos];

export function HeroSidebar() {
  return (
    <aside
      className="sticky top-0 h-[100svh] md:fixed md:left-0 md:top-0 md:h-screen md:max-w-[33vw] w-full flex flex-col overflow-hidden md:overflow-y-auto p-[32px]"
      style={{
        background: "rgba(247,236,205,0.92)",
        backdropFilter: "blur(12px)",
        borderRight: "1px solid #DCC58F",
        fontFamily: "var(--font-dm-sans, 'DM Sans'), sans-serif",
      }}
    >
      {/* Spacer matching navbar height */}
      <span className="inline-block mb-[41px] h-[24px]" />

      <h1
        className="text-[30px] font-medium leading-[1.12] tracking-[-0.03em] mb-3"
        style={{
          color: "#443627",
          fontFamily: "var(--font-fraunces, 'Fraunces'), serif",
          maxWidth: "480px",
        }}
      >
        Website yang bekerja sebagai mesin penjualan{" "}
        <em style={{ color: "#D98324" }}>24 jam nonstop.</em>
      </h1>

      <p className="text-[15px] font-light leading-[1.75] mb-8 max-w-[440px]" style={{ color: "#6B5238" }}>
        Bukan sekadar tampilan online. Kami bangun website yang menarik traffic, membangun kepercayaan, dan mengkonversi pengunjung jadi pelanggan tetap — untuk bisnis kamu.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a href={WA} target="_blank" rel="noopener noreferrer" className="gc-warm-btn">
          Konsultasi Gratis
        </a>
        <a href={BRIEF} target="_blank" rel="noopener noreferrer" className="gc-warm-btn-ghost">
          Mulai Briefing
        </a>
      </div>

      {/* Trust items */}
      <div className="flex gap-4 flex-wrap mb-2">
        {["Balas < 2 jam", "Tanpa komitmen", "Harga transparan"].map((t) => (
          <span
            key={t}
            className="text-[12px] flex items-center gap-1"
            style={{ color: "#92724F" }}
          >
            <span style={{ color: "#8C7A2A", fontWeight: 700, fontSize: "11px" }}>✓</span>
            {t}
          </span>
        ))}
      </div>

      {/* Trusted by section */}
      <div className="md:absolute md:bottom-10 md:left-8 mt-[10vh]">
        <p
          className="text-[15px] font-normal mb-3 leading-[120%]"
          style={{ color: "#443627" }}
        >
          Dibangun dengan teknologi modern
        </p>

        <div className="relative overflow-hidden h-[32px] md:max-w-[27.865vw]">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(247,236,205,1), transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, rgba(247,236,205,1), transparent)" }}
          />
          <div className="flex gap-4 items-center h-[40px] animate-scroll">
            {doubled.map((logo, i) => (
              <div key={i} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all flex items-center" style={{ mixBlendMode: "multiply" }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={75}
                  height={32}
                  className="object-contain w-auto max-h-[32px] max-w-[75px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
