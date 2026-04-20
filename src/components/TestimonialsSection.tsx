const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=628889888158&text=Hi%20Finetune!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F";

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
      "Working with Finetune has been a game-changer for our clinic. They crafted a beautiful, user-friendly website that truly reflects our brand. Our clients now enjoy the ease of booking treatments online—it's been a fantastic upgrade!",
  },
  {
    company: "Beauty District",
    industry: "Beauty Clinic",
    quote:
      "Working with Finetune has been a game-changer for our clinic. They crafted a beautiful, user-friendly website that truly reflects our brand. Our clients now enjoy the ease of booking treatments online—it's been a fantastic upgrade!",
  },
  {
    company: "Danan Wingus Sakti",
    industry: "Technology Provider for Oil & Gas",
    quote:
      "We needed a professional website to showcase our technology solutions, and Finetune exceeded our expectations. The design is clean, and the functionality is seamless. Highly recommended for B2B industries!",
  },
];

const row2Base: Testimonial[] = [
  {
    company: "Konakoni",
    industry: "Agency",
    quote:
      "Finetune's expertise turned our outdated website into a dynamic and functional platform. The team was professional and efficient, ensuring everything was tailored to our needs.",
  },
  {
    company: "Tangguh Trans",
    industry: "Travel Company",
    quote:
      "Finetune delivered exactly what we needed—a stunning, mobile-friendly website that perfectly showcases our travel packages. The process was smooth, efficient, and exceeded our expectations!",
  },
];

const row1 = [...row1Base, ...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base, ...row2Base];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[450px] h-[239px] flex-shrink-0">
      <div className="relative w-full h-full bg-[#141414] border-2 border-[#1F1F1F] rounded-2xl p-6 shadow-lg overflow-hidden">
        <div
          className="absolute top-[-10px] left-40 w-[32px] h-[180px] rounded-full rotate-[-21deg] pointer-events-none"
          style={{ background: "rgba(247,247,255,0.3)", filter: "blur(75px)" }}
        />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <p className="text-sm text-[#AAAEBB] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="space-y-1">
            <p className="text-lg font-normal text-[#F9FAFB]">{t.company}</p>
            <p className="text-sm text-[#AAAEBB]">{t.industry}</p>
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
        style={{ background: "linear-gradient(to right, rgb(10,10,10), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgb(10,10,10), transparent)" }}
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
    <section id="testimonial" className="bg-zinc-950 pb-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto mb-[38px] flex items-center justify-between flex-wrap gap-6">
        <h2 className="text-2xl font-normal text-[#F9FAFB]">Trusted By Customers</h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center rounded-[320px] p-[1px] whitespace-nowrap"
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
            Book a call
          </span>
        </a>
      </div>
    </section>
  );
}
