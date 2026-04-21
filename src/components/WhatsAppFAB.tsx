"use client";

import { WhatsAppIcon } from "@/components/icons";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=628889888158&text=Hi%20GoodCode!%20I%20need%20a%20professional%20website%20that%20fits%20my%20brand%20and%20I%20am%20interested%20in%20the%20services%20you%20offer.%20Can%20you%20help%3F";

export function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[99999] md:hidden rounded-full p-2 border border-white/45 bg-white/35 backdrop-blur-md text-[#2F5F98] shadow-[0_12px_30px_rgba(31,78,136,0.22)] hover:bg-white/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}
