import Image from "next/image";

interface PortfolioItem {
  title: string;
  img: string;
  year: string;
  cat: string;
  href: string;
}

const portfolioItems: PortfolioItem[] = [
  { title: "Quaka Logistic", img: "/images/portfolio/quaka-logistic.webp", year: "2025", cat: "B2C", href: "/portfolio/quaka-logistic" },
  { title: "Praglas Raya", img: "/images/portfolio/praglas-raya.webp", year: "2025", cat: "Chemical", href: "/portfolio/praglas-raya" },
  { title: "Artmosphere Design", img: "/images/portfolio/artmosphere-design.webp", year: "2025", cat: "Agency", href: "/portfolio/artmosphere-design" },
  { title: "Arcelon Residence", img: "/images/portfolio/arcelon.webp", year: "2024", cat: "Real Estate", href: "/portfolio/arcelon" },
  { title: "PT Danan Wingus Sakti", img: "/images/portfolio/danan.webp", year: "2024", cat: "Oil & Gas", href: "/portfolio/pt-danan-wingus-sakti" },
  { title: "Multi Power Aditama", img: "/images/portfolio/multi-power-aditama.webp", year: "2025", cat: "Heavy Equipment", href: "/portfolio/multi-power-aditama" },
  { title: "Katiga Consulting", img: "/images/portfolio/katiga.webp", year: "2025", cat: "Consulting", href: "/portfolio/katiga" },
  { title: "PMTS", img: "/images/portfolio/pmts.webp", year: "2025", cat: "Engineering", href: "/portfolio/pmts" },
];

export function FeaturedPortfolio() {
  return (
    <section id="portfolio" className="bg-transparent pt-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
        <h2
          className="text-2xl font-medium"
          style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}
        >
          Portofolio Pilihan
        </h2>
        <p className="text-base font-light leading-relaxed max-w-[470px]" style={{ color: "#6B5238" }}>
          Lihat langsung bagaimana kami membangun website yang profesional dan berfungsi sebagai mesin penjualan untuk berbagai industri.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {portfolioItems.map((item) => (
          <a key={item.href} href={item.href} className="group relative block overflow-hidden">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl" style={{ border: "1px solid #DCC58F" }}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 group-hover:bg-[#443627]/40 transition-all duration-500 z-10" style={{ background: "transparent" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20" style={{ background: "#F7ECCD" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#443627" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-lg font-normal" style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}>{item.title}</p>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#92724F" }}>
                <span>{item.year}</span>
                <span className="w-1 h-1 rounded-full inline-block" style={{ background: "#92724F" }} />
                <span>{item.cat}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
