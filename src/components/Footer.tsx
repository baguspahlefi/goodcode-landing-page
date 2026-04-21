import Image from "next/image";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=628889888158&text=Hi%20Finetune!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F";

export function Footer() {
  return (
    <footer className="relative w-full bg-transparent overflow-hidden">
      <div className="md:min-h-screen flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 pt-[25rem] md:pt-[14rem] pb-20 md:pb-10">
          <div className="flex flex-col items-center space-y-8">
            <Image
              src="/images/goodcode-logo.svg"
              alt="GoodCode"
              width={230}
              height={52}
              className="w-[200px] md:w-[230px] h-auto"
            />

            <h2 className="text-[32px] font-medium text-[#1F4E88] leading-tight text-center">
              Let&apos;s Build Something
              <br />
              Fast. Flawless. GoodCode.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gc-glass-btn flex-1"
              >
                Free Consultation
              </a>

              <a
                href="https://astakona.sg.larksuite.com/share/base/form/shrlgDF86d3TLy5irv1GLxa5AQb"
                target="_blank"
                rel="noopener noreferrer"
                className="gc-glass-btn-light flex-1"
              >
                Start Your Brief
              </a>
            </div>

            <p className="text-[#4F84BC] text-base text-center">Book a 30 Min Call</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-[#2F5F98] text-base">
        © 2026 GoodCode. All rights reserved.
      </div>
    </footer>
  );
}
