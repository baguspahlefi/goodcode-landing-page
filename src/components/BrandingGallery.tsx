import Image from "next/image";

const WA = "https://wa.me/6285608537600?text=Halo%20Good.code%2C%20saya%20ingin%20konsultasi%20soal%20website%20untuk%20bisnis%20saya";

const galleryImages = [
  "/images/gallery/gallery-1.webp",
  "/images/gallery/gallery-2.webp",
  "/images/gallery/gallery-3.webp",
  "/images/gallery/gallery-4.webp",
];

const doubled = [...galleryImages, ...galleryImages];

export function BrandingGallery() {
  return (
    <section style={{ color: "#443627" }}>
      <div className="flex flex-row justify-between mt-[160px] mb-8 items-end">
        <h2
          className="max-w-[370px] text-2xl font-medium leading-[1.3] tracking-[-0.02em]"
          style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}
        >
          Website, Aplikasi, Branding —{" "}
          <em style={{ color: "#D98324" }}>semua yang kamu butuhkan.</em>
        </h2>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="gc-warm-btn hidden md:inline-flex">
          Ngobrol via WA
        </a>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl py-[38px]"
        style={{ border: "2px solid #DCC58F", background: "rgba(247,236,205,0.7)" }}
      >
        <div
          className="absolute top-1/4 left-1/2 w-[32px] h-[740px] rounded-full -translate-x-1/2 rotate-[-90deg] z-0 pointer-events-none"
          style={{ background: "rgba(217,131,36,0.15)", filter: "blur(100px)" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-[32px] h-[740px] rounded-full -translate-x-1/2 rotate-[-90deg] z-0 pointer-events-none"
          style={{ background: "rgba(217,131,36,0.1)", filter: "blur(100px)" }}
        />

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden relative w-full mb-6">
          <div className="flex gap-6 whitespace-nowrap will-change-transform" style={{ animation: "marqueeLeft 40s linear infinite" }}>
            {doubled.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-52 rounded-lg overflow-hidden inline-block">
                <Image src={src} alt="" width={288} height={208} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden relative w-full">
          <div className="flex gap-6 whitespace-nowrap will-change-transform" style={{ animation: "marqueeRight 40s linear infinite" }}>
            {doubled.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-52 rounded-lg overflow-hidden inline-block">
                <Image src={src} alt="" width={288} height={208} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden max-w-[140px] mt-[38px] mx-auto flex justify-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="gc-warm-btn">
            Ngobrol via WA
          </a>
        </div>
      </div>
    </section>
  );
}
