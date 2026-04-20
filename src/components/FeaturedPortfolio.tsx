import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

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
    <section id="portfolio" className="bg-[#0A0A0A] pt-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
        <h2 className="text-2xl font-medium text-[#F9FAFB]">Featured Portfolio</h2>
        <p className="text-base text-zinc-300 max-w-[470px]">
          Take a closer look at how we deliver professional, user-centered website solutions tailored to businesses of all sizes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {portfolioItems.map((item) => (
          <a key={item.href} href={item.href} className="group relative block overflow-hidden">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/50 transition-all duration-500 z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20">
                <ArrowUpRightIcon className="w-8 h-8 text-black" />
              </div>
            </div>
            <div className="pt-4">
              <p className="text-lg font-normal text-[#F9FAFB]">{item.title}</p>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <span>{item.year}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-400 inline-block" />
                <span>{item.cat}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="/portfolio"
          className="inline-flex items-center justify-center rounded-[320px] p-[1px] whitespace-nowrap"
          style={{
            background: "linear-gradient(180deg, rgb(251,205,203) 0%, rgb(235,33,21) 100%)",
            boxShadow: "rgba(238,62,52,0.2) 0px 2px 2px 0px",
          }}
        >
          <span
            className="flex items-center justify-center rounded-[320px] px-8 py-3 text-base text-[#F9FAFB] whitespace-nowrap"
            style={{ background: "linear-gradient(180deg, rgb(241,95,87) 0%, rgb(235,30,19) 100%)" }}
          >
            View All Portfolio
          </span>
        </a>
      </div>
    </section>
  );
}
