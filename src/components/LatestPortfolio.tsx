import Image from "next/image";

const items = [
  {
    type: "video" as const,
    src: "https://cms.finetune.id/uploads/Finetune_Web_Compile_Ending_New_60_FPS_e6f8d3b4e8.mp4",
  },
  {
    type: "image" as const,
    src: "/images/latestporto1.webp",
    alt: "Portfolio item",
  },
  {
    type: "video" as const,
    src: "https://cms.finetune.id/uploads/Landing_Page_120_Comp_2_f1de563a53.mp4",
  },
  {
    type: "image" as const,
    src: "/images/latestporto2.avif",
    alt: "Portfolio item",
  },
] as const;

export function LatestPortfolio() {
  return (
    <section id="hero" className="pt-[100px] pb-16">
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-medium text-[#1F4E88]">Latest Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {items.map((item, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
            {item.type === "video" ? (
              <video
                src={item.src}
                loop
                autoPlay
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-500"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
