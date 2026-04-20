import { FinetuneLogo } from "@/components/icons";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=628889888158&text=Hi%20Finetune!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F";

export function Footer() {
  return (
    <footer className="relative w-full bg-zinc-950 overflow-hidden">
      <div className="md:min-h-screen flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 pt-[25rem] md:pt-[14rem] pb-20 md:pb-10">
          <div className="flex flex-col items-center space-y-8">
            <FinetuneLogo className="w-[200px] text-[#F9FAFB]" />

            <h2 className="text-[32px] font-medium text-[#F9FAFB] leading-tight text-center">
              Let&apos;s Build Something
              <br />
              Fast. Flawless. Finetuned.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-[320px] p-[1px] whitespace-nowrap"
                style={{
                  background: "linear-gradient(180deg, rgb(251,205,203) 0%, rgb(235,33,21) 100%)",
                  boxShadow: "rgba(238,62,52,0.2) 0px 2px 2px 0px",
                }}
              >
                <span
                  className="flex items-center justify-center w-full rounded-[320px] px-8 py-3 text-base text-[#F9FAFB] whitespace-nowrap"
                  style={{ background: "linear-gradient(180deg, rgb(241,95,87) 0%, rgb(235,30,19) 100%)" }}
                >
                  Free Consultation
                </span>
              </a>

              <a
                href="https://astakona.sg.larksuite.com/share/base/form/shrlgDF86d3TLy5irv1GLxa5AQb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-[320px] p-[1px] whitespace-nowrap"
                style={{
                  background: "linear-gradient(rgb(120,120,120) 0%, rgb(202,203,204) 100%)",
                  boxShadow: "rgba(36,41,50,0.2) 0px 2px 2px 0px",
                }}
              >
                <span
                  className="flex items-center justify-center w-full rounded-[320px] px-8 py-3 text-base text-[#0A0A0A] whitespace-nowrap"
                  style={{ background: "rgb(245,246,247)" }}
                >
                  Start Your Brief
                </span>
              </a>
            </div>

            <p className="text-[#AAAEBB] text-base text-center">Book a 30 Min Call</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-white text-base">
        © 2026 Finetune.id All rights reserved.
      </div>
    </footer>
  );
}
