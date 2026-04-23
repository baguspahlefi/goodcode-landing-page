import Image from "next/image";

interface FeatureCard {
  title: string;
  desc: string;
  img: string;
  imgClass: string;
}

const cards: FeatureCard[] = [
  {
    title: "Desain Web",
    desc: "Tampilan yang memadukan estetika dan fungsi — bukan template, tapi identitas brand kamu.",
    img: "/features/Container.png",
    imgClass: "w-full",
  },
  {
    title: "Web Development",
    desc: "Website berperforma tinggi, cepat load, dan stabil dibangun oleh developer berpengalaman.",
    img: "/features/Code Block.png",
    imgClass: "w-full",
  },
  {
    title: "Copywriting",
    desc: "Tulisan yang persuasif, relevan, dan menggerakkan pembaca untuk jadi pelanggan.",
    img: "/features/Skeleton.png",
    imgClass: "w-full py-8 px-5",
  },
  {
    title: "CMS Management",
    desc: "Kelola konten website sendiri dengan mudah — tanpa harus paham kode sama sekali.",
    img: "/features/Illustration.png",
    imgClass: "w-full py-4 px-5",
  },
];

const doubled = [...cards, ...cards];

const BG_GRAD = "linear-gradient(to right, rgb(242,246,208), transparent)";
const BG_GRAD_R = "linear-gradient(to left, rgb(242,246,208), transparent)";

export function HowItWorksSection() {
  return (
    <section id="process" className="mt-[237px]" style={{ color: "#443627" }}>
      <div className="max-w-6xl mb-8">
        <h2
          className="text-2xl font-medium mb-2"
          style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}
        >
          Cara Kerja
        </h2>
        <p className="text-base font-light" style={{ color: "#6B5238" }}>
          Kami bangun website kamu — Cepat. Rapi. Good.code.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: BG_GRAD }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: BG_GRAD_R }} />

        <div className="flex gap-6 min-w-max px-4" style={{ animation: "scroll 20s linear infinite" }}>
          {doubled.map((card, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[360px] h-[420px] flex-shrink-0 rounded-2xl overflow-hidden flex flex-col justify-between group relative"
              style={{ border: "2px solid #DCC58F", background: "#F7ECCD" }}
            >
              <div
                className="absolute top-[-10px] left-40 w-[32px] h-[180px] rounded-full rotate-[-21deg] pointer-events-none"
                style={{ background: "rgba(217,131,36,0.25)", filter: "blur(75px)" }}
              />
              <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                <h3 className="text-xl font-semibold" style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B5238" }}>{card.desc}</p>
              </div>
              <div className="relative w-full h-auto mt-auto flex items-end justify-end">
                <Image src={card.img} alt={card.title} width={360} height={220} className={card.imgClass} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
