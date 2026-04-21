const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=628889888158&text=Hi%20GoodCode!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F";

interface Testimonial {
  company: string;
  industry: string;
  quote: string;
}

const row1Base: Testimonial[] = [
  {
    company: "Beauty District",
    industry: "Beauty Clinic",
    quote:
      "Working with GoodCode has been a game-changer for our clinic. They crafted a beautiful, user-friendly website that truly reflects our brand. Our clients now enjoy the ease of booking treatments online; it's been a fantastic upgrade!",
  },
  {
    company: "Beauty District",
    industry: "Beauty Clinic",
    quote:
      "Working with GoodCode has been a game-changer for our clinic. They crafted a beautiful, user-friendly website that truly reflects our brand. Our clients now enjoy the ease of booking treatments online; it's been a fantastic upgrade!",
  },
  {
    company: "Danan Wingus Sakti",
    industry: "Technology Provider for Oil & Gas",
    quote:
      "We needed a professional website to showcase our technology solutions, and GoodCode exceeded our expectations. The design is clean, and the functionality is seamless. Highly recommended for B2B industries!",
  },
];

const row2Base: Testimonial[] = [
  {
    company: "Konakoni",
    industry: "Agency",
    quote:
      "GoodCode's expertise turned our outdated website into a dynamic and functional platform. The team was professional and efficient, ensuring everything was tailored to our needs.",
  },
  {
    company: "Tangguh Trans",
    industry: "Travel Company",
    quote:
      "GoodCode delivered exactly what we needed; a stunning, mobile-friendly website that perfectly showcases our travel packages. The process was smooth, efficient, and exceeded our expectations!",
  },
];

const row1 = [...row1Base, ...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base, ...row2Base];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[450px] h-[239px] flex-shrink-0">
      <div className="relative w-full h-full bg-[#e7eef7]/90 border-2 border-[#aec5dd] rounded-2xl p-6 shadow-lg overflow-hidden">
        <div
          className="absolute top-[-10px] left-40 w-[32px] h-[180px] rounded-full rotate-[-21deg] pointer-events-none"
          style={{ background: "rgba(107,155,203,0.4)", filter: "blur(75px)" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <p className="text-sm text-[#4F84BC] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="space-y-1">
            <p className="text-lg font-normal text-[#1F4E88]">{t.company}</p>
            <p className="text-sm text-[#4F84BC]">{t.industry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgb(213,223,234), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgb(213,223,234), transparent)" }}
      />
      <div
        className="flex gap-6 flex-nowrap min-w-max"
        style={{
          animation: direction === "left" ? "marqueeLeft 40s linear infinite" : "marqueeRight 40s linear infinite",
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonial" className="bg-transparent pb-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto mb-[38px] flex items-center justify-between flex-wrap gap-6">
        <h2 className="text-2xl font-normal text-[#1F4E88]">Trusted By Customers</h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex gc-glass-btn"
        >
          Book a call
        </a>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      <div className="md:hidden max-w-[140px] mx-auto mt-8 flex justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="gc-glass-btn"
        >
          Book a call
        </a>
      </div>
    </section>
  );
}
