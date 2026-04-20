const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=628889888158&text=Hi%20Finetune!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F";

const galleryImages = [
  "/images/gallery/gallery-1.webp",
  "/images/gallery/gallery-2.webp",
  "/images/gallery/gallery-3.webp",
  "/images/gallery/gallery-4.webp",
];

const doubled = [...galleryImages, ...galleryImages];

function RedButton({ className }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-[320px] p-[1px] whitespace-nowrap ${className ?? ""}`}
      style={{
        background: "linear-gradient(180deg, rgb(251,205,203) 0%, rgb(235,33,21) 100%)",
        boxShadow: "rgba(238,62,52,0.2) 0px 2px 2px 0px",
      }}
    >
      <span
        className="flex items-center justify-center rounded-[320px] px-8 py-3 text-base text-[#F9FAFB] whitespace-nowrap"
        style={{ background: "linear-gradient(180deg, rgb(241,95,87) 0%, rgb(235,30,19) 100%)" }}
      >
        Book a call
      </span>
    </a>
  );
}

export function BrandingGallery() {
  return (
    <section className="text-white">
      <div className="flex flex-row justify-between mt-[160px] mb-8 items-end">
        <h2 className="max-w-[370px] text-2xl font-medium leading-[33.6px] tracking-[-0.48px] text-[#F9FAFB]">
          Apps, Websites, Branding Everything You Need About Design
        </h2>
        <RedButton className="hidden md:inline-flex" />
      </div>

      <div className="relative overflow-hidden rounded-2xl border-2 border-[#1F1F1F] py-[38px]">
        <div
          className="absolute top-1/4 left-1/2 w-[32px] h-[740px] bg-[#F9FAFB] rounded-full blur-[100px] -translate-x-1/2 rotate-[-90deg] z-0 pointer-events-none"
          style={{ opacity: 0.15 }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-[32px] h-[740px] bg-[#F9FAFB] rounded-full blur-[100px] -translate-x-1/2 rotate-[-90deg] z-0 pointer-events-none"
          style={{ opacity: 0.15 }}
        />

        {/* Row 1 - scrolls left */}
        <div className="overflow-hidden relative w-full mb-6">
          <div
            className="flex gap-6 whitespace-nowrap will-change-transform"
            style={{ animation: "marqueeLeft 40s linear infinite" }}
          >
            {doubled.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-52 rounded-lg overflow-hidden inline-block">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="overflow-hidden relative w-full">
          <div
            className="flex gap-6 whitespace-nowrap will-change-transform"
            style={{ animation: "marqueeRight 40s linear infinite" }}
          >
            {doubled.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-52 rounded-lg overflow-hidden inline-block">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden max-w-[140px] mt-[38px] mx-auto flex justify-center">
          <RedButton />
        </div>
      </div>
    </section>
  );
}
