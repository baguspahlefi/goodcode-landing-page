const WA = "https://wa.me/6285608537600?text=Halo%20Good.code%2C%20saya%20ingin%20konsultasi%20soal%20website%20untuk%20bisnis%20saya";

interface Testimonial {
  company: string;
  industry: string;
  quote: string;
}

const row1Base: Testimonial[] = [
  {
    company: "Beauty District",
    industry: "Klinik Kecantikan",
    quote: "Kerja sama dengan Good.code benar-benar mengubah segalanya. Website kami jadi jauh lebih cantik, mudah dipakai, dan klien sekarang bisa booking perawatan langsung online. Fantastis!",
  },
  {
    company: "Beauty District",
    industry: "Klinik Kecantikan",
    quote: "Kerja sama dengan Good.code benar-benar mengubah segalanya. Website kami jadi jauh lebih cantik, mudah dipakai, dan klien sekarang bisa booking perawatan langsung online. Fantastis!",
  },
  {
    company: "Danan Wingus Sakti",
    industry: "Teknologi untuk Oil & Gas",
    quote: "Kami butuh website profesional untuk memperkenalkan solusi teknologi kami ke klien B2B. Good.code melampaui ekspektasi — desainnya bersih, fungsionalnya mulus. Sangat direkomendasikan!",
  },
];

const row2Base: Testimonial[] = [
  {
    company: "Konakoni",
    industry: "Agency",
    quote: "Good.code mengubah website lama kami jadi platform yang dinamis dan fungsional. Tim mereka profesional, efisien, dan semua disesuaikan dengan kebutuhan kami.",
  },
  {
    company: "Tangguh Trans",
    industry: "Perusahaan Travel",
    quote: "Good.code menghadirkan yang kami butuhkan — website yang memukau, mobile-friendly, dan sempurna menampilkan paket wisata kami. Prosesnya lancar dan hasilnya melebihi ekspektasi!",
  },
];

const row1 = [...row1Base, ...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base, ...row2Base];

const BG_GRAD = "linear-gradient(to right, rgb(242,246,208), transparent)";
const BG_GRAD_R = "linear-gradient(to left, rgb(242,246,208), transparent)";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[450px] h-[239px] flex-shrink-0">
      <div className="relative w-full h-full rounded-2xl p-6 shadow-sm overflow-hidden" style={{ background: "rgba(247,236,205,0.9)", border: "2px solid #DCC58F" }}>
        <div
          className="absolute top-[-10px] left-40 w-[32px] h-[180px] rounded-full rotate-[-21deg] pointer-events-none"
          style={{ background: "rgba(217,131,36,0.2)", filter: "blur(75px)" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <p className="text-sm leading-relaxed" style={{ color: "#6B5238" }}>&ldquo;{t.quote}&rdquo;</p>
          <div className="space-y-1">
            <p className="text-lg font-normal" style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}>{t.company}</p>
            <p className="text-sm" style={{ color: "#92724F" }}>{t.industry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction }: { items: Testimonial[]; direction: "left" | "right" }) {
  return (
    <div className="relative flex overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: BG_GRAD }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: BG_GRAD_R }} />
      <div
        className="flex gap-6 flex-nowrap min-w-max"
        style={{ animation: direction === "left" ? "marqueeLeft 40s linear infinite" : "marqueeRight 40s linear infinite" }}
      >
        {items.map((t, i) => <TestimonialCard key={i} t={t} />)}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonial" className="bg-transparent pb-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto mb-[38px] flex items-center justify-between flex-wrap gap-6">
        <h2
          className="text-2xl font-normal"
          style={{ color: "#443627", fontFamily: "var(--font-fraunces, 'Fraunces'), serif" }}
        >
          Dipercaya Pelanggan
        </h2>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex gc-warm-btn">
          Ngobrol via WA
        </a>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      <div className="md:hidden max-w-[140px] mx-auto mt-8 flex justify-center">
        <a href={WA} target="_blank" rel="noopener noreferrer" className="gc-warm-btn">
          Ngobrol via WA
        </a>
      </div>
    </section>
  );
}
