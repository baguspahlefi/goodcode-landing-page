const WA = "https://wa.me/6285608537600?text=Halo%20Good.code%2C%20saya%20ingin%20konsultasi%20soal%20website%20untuk%20bisnis%20saya";
const BRIEF = "https://astakona.sg.larksuite.com/share/base/form/shrlgDF86d3TLy5irv1GLxa5AQb";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ background: "transparent" }}>
      <div className="flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-10">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div
              className="text-[32px] font-medium tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-fraunces, 'Fraunces'), serif", color: "#443627" }}
            >
              Good<span style={{ color: "#D98324" }}>.</span>code
            </div>

            <h2
              className="text-[32px] font-medium leading-tight text-center"
              style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}
            >
              Mari Bangun Sesuatu —<br />
              <em style={{ color: "#D98324" }}>Cepat. Rapi. Good.code.</em>
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="gc-warm-btn flex-1 justify-center">
                Konsultasi Gratis
              </a>
              <a href={BRIEF} target="_blank" rel="noopener noreferrer" className="gc-warm-btn-ghost flex-1 justify-center">
                Mulai Briefing
              </a>
            </div>

            <p className="text-base text-center" style={{ color: "#92724F" }}>
              Ngobrol 30 menit, gratis tanpa komitmen
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-0 right-0 text-center text-base"
        style={{ color: "#92724F" }}
      >
        © 2025 Good.code · Spesialis Ecommerce & Migrasi Marketplace · Semarang, Indonesia
      </div>
    </footer>
  );
}
