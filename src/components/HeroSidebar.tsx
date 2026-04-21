const brandLogos = [
  { src: "/images/brands/devin.png", alt: "Devin" },
  { src: "/images/brands/tangguh.png", alt: "Tangguh" },
  { src: "/images/brands/wisnu.png", alt: "Wisnu" },
  { src: "/images/brands/arcelon.png", alt: "Arcelon" },
  { src: "/images/brands/jawa-arta.png", alt: "Jawa Arta" },
  { src: "/images/brands/dws.png", alt: "DWS" },
];

const doubled = [...brandLogos, ...brandLogos];

export function HeroSidebar() {
  return (
    <aside className="md:fixed md:left-0 md:top-0 md:h-screen md:max-w-[33vw] w-full bg-[#eaf1f9]/80 backdrop-blur-sm border-r border-[#aec5dd] flex flex-col overflow-y-auto p-[32px]">
      {/* Spacer matching navbar logo height */}
      <span className="inline-block mb-[41px] h-[24px]" />

      <h1 className="text-[32px] font-medium text-[#1F4E88] leading-[38.4px] tracking-[-0.96px] mb-2 max-w-[480px]">
        Get a website that loads 3x faster and converts 20% more visitors
      </h1>

      <p className="text-base text-[#2F5F98] max-w-[480px]">
        Your business deserves a website that works as your 24/7 salesperson attracting traffic,
        building credibility, and converting leads into paying customers
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-8 mb-8">
        <a
          href="https://api.whatsapp.com/send?phone=628889888158&text=Hi%20Finetune!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="gc-glass-btn"
        >
          Free Consultation
        </a>

        <a
          href="https://astakona.sg.larksuite.com/share/base/form/shrlgDF86d3TLy5irv1GLxa5AQb"
          target="_blank"
          rel="noopener noreferrer"
          className="gc-glass-btn-light"
        >
          Start Your Brief
        </a>
      </div>

      {/* Trusted by section */}
      <div className="md:absolute md:bottom-10 md:left-8 mt-[10vh]">
        <p className="text-lg font-normal text-[#1F4E88] mb-3 leading-[120%] tracking-[-0.001em]">
          Trusted by industry leaders
        </p>

        <div className="relative overflow-hidden h-[32px] md:max-w-[27.865vw]">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgb(234,241,249), transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, rgb(234,241,249), transparent)" }}
          />
          <div className="flex gap-4 items-center h-[40px] animate-scroll">
            {doubled.map((logo, i) => (
              <div key={i} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all flex items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
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
