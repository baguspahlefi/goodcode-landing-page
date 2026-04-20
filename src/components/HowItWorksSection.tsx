interface FeatureCard {
  title: string;
  desc: string;
  img: string;
  imgClass: string;
}

const cards: FeatureCard[] = [
  {
    title: "Web Design",
    desc: "Unleash captivating designs that blend aesthetics with functionality.",
    img: "/features/Container.png",
    imgClass: "w-full",
  },
  {
    title: "Web Development",
    desc: "Build robust, high-performance websites with our expert developers.",
    img: "/features/Code Block.png",
    imgClass: "w-full",
  },
  {
    title: "Copywriting",
    desc: "Craft compelling and persuasive copy that engages your audience and drives conversions.",
    img: "/features/Skeleton.png",
    imgClass: "w-full py-8 px-5",
  },
  {
    title: "CMS Management",
    desc: "Implement flexible and easy-to-use platforms to manage your content effortlessly.",
    img: "/features/Illustration.png",
    imgClass: "w-full py-4 px-5",
  },
];

const doubled = [...cards, ...cards];

export function HowItWorksSection() {
  return (
    <section id="process" className="text-white mt-[237px]">
      <div className="max-w-6xl mb-8">
        <h2 className="text-2xl font-medium mb-2 text-[#F9FAFB]">How It Works</h2>
        <p className="text-base text-[#E0E1EA]">
          Let&apos;s Build Your Professional Website Fast. Flawless. Finetuned.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgb(10,10,10), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgb(10,10,10), transparent)" }}
        />

        <div
          className="flex gap-6 min-w-max px-4"
          style={{ animation: "scroll 20s linear infinite" }}
        >
          {doubled.map((card, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[360px] h-[420px] flex-shrink-0 rounded-2xl border-2 border-[#1F1F1F] bg-[#141414] overflow-hidden flex flex-col justify-between group relative"
            >
              <div
                className="absolute top-[-10px] left-40 w-[32px] h-[180px] rounded-full rotate-[-21deg] pointer-events-none"
                style={{ background: "rgba(247,247,255,0.3)", filter: "blur(75px)" }}
              />
              <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                <h3 className="text-xl font-semibold text-[#F9FAFB]">{card.title}</h3>
                <p className="text-sm text-[#AAAEBB] leading-relaxed">{card.desc}</p>
              </div>
              <div className="relative w-full h-auto mt-auto flex items-end justify-end">
                <img src={card.img} alt={card.title} className={card.imgClass} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
