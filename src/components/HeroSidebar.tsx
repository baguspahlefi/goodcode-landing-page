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
    <aside className="md:fixed md:left-0 md:top-0 md:h-screen md:max-w-[33vw] w-full bg-white flex flex-col overflow-y-auto p-[32px]">
      {/* Spacer matching navbar logo height */}
      <span className="inline-block mb-[41px] h-[24px]" />

      <h1 className="text-[32px] font-medium text-[#0A0A0A] leading-[38.4px] tracking-[-0.96px] mb-2 max-w-[480px]">
        Get a website that loads 3x faster and converts 20% more visitors
      </h1>

      <p className="text-base text-[#383C46] max-w-[480px]">
        Your business deserves a website that works as your 24/7 salesperson attracting traffic,
        building credibility, and converting leads into paying customers
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-8 mb-8">
        <a
          href="https://api.whatsapp.com/send?phone=628889888158&text=Hi%20Finetune!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[320px] p-[1px] whitespace-nowrap"
          style={{
            background: "linear-gradient(180deg, rgb(251,205,203) 0%, rgb(235,33,21) 100%)",
            boxShadow: "rgba(238,62,52,0.2) 0px 2px 2px 0px",
          }}
        >
          <span
            className="flex items-center justify-center rounded-[320px] px-8 py-3 text-base leading-[22.4px] text-[#F9FAFB] whitespace-nowrap"
            style={{ background: "linear-gradient(180deg, rgb(241,95,87) 0%, rgb(235,30,19) 100%)" }}
          >
            Free Consultation
          </span>
        </a>

        <a
          href="https://astakona.sg.larksuite.com/share/base/form/shrlgDF86d3TLy5irv1GLxa5AQb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[320px] p-[1px] whitespace-nowrap"
          style={{
            background: "linear-gradient(rgb(120,120,120) 0%, rgb(202,203,204) 100%)",
            boxShadow: "rgba(36,41,50,0.2) 0px 2px 2px 0px",
          }}
        >
          <span
            className="flex items-center justify-center rounded-[320px] px-8 py-3 text-base text-[#0A0A0A] whitespace-nowrap"
            style={{ background: "rgb(245,246,247)" }}
          >
            Start Your Brief
          </span>
        </a>
      </div>

      {/* Trusted by section */}
      <div className="md:absolute md:bottom-10 md:left-8 mt-[10vh]">
        <p className="text-lg font-normal text-[#0A0A0A] mb-3 leading-[120%] tracking-[-0.001em]">
          Trusted by industry leaders
        </p>

        <div className="relative overflow-hidden h-[32px] md:max-w-[27.865vw]">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, white, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, white, transparent)" }}
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
