"use client";

import Image from "next/image";
import { SettingsGearIcon } from "@/components/icons";

export function ServicesSection() {
  return (
    <section id="services" className="bg-transparent mt-[160px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 mb-8">
        <h2 className="text-2xl font-medium text-[#1F4E88]">Our Services</h2>
        <p className="text-base text-[#2F5F98] max-w-[470px]">
          Providing Professional, Premium, &amp; Exclusive Web Designs With High Quality for Your Business Purposes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: Website Development */}
        <div
          className="relative bg-[#E7EEF7] border-2 border-[#AEC5DD] rounded-2xl px-4 py-5 overflow-hidden group hover:border-[#6B9BCB] focus:border-[#6B9BCB] focus:outline-none transition-all duration-300"
          tabIndex={0}
        >
          <div
            className="relative bg-[#C5D3E2] rounded-lg overflow-hidden h-[258px]"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div
              className="flex gap-6 min-w-max py-4"
              style={{ animation: "scroll 15s linear infinite" }}
            >
              {Array.from({ length: 3 }).flatMap((_, i) =>
                [
                  "/services/web/Our Services 1.png",
                  "/services/web/Our Services 2.png",
                  "/services/web/Our Services 3.png",
                ].map((src, j) => (
                  <Image
                    key={`${i}-${j}`}
                    src={src}
                    alt=""
                    width={290}
                    height={190}
                    className="h-auto w-[290px] rounded-lg flex-shrink-0 object-cover"
                  />
                ))
              )}
            </div>
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" />
            <h3 className="text-xl font-semibold text-[#1F4E88] mb-2">Website Development</h3>
            <p className="text-base text-[#2F5F98] max-w-[320px]">
              Optimized websites proven to score 90+ on Google PageSpeed
            </p>
          </div>
        </div>

        {/* Card 2: Dashboard App Design */}
        <div
          className="relative bg-[#E7EEF7] border-2 border-[#AEC5DD] rounded-2xl px-4 py-5 overflow-hidden group hover:border-[#6B9BCB] focus:border-[#6B9BCB] focus:outline-none transition-all duration-300"
          tabIndex={0}
        >
          <div className="relative bg-[#C5D3E2] rounded-lg overflow-hidden h-[258px]">
            <Image
              src="/services/dashboard/Ui Component - Chart.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 overflow-hidden border-l border-[#eaf1f9] group-hover:border-transparent transition-all duration-500">
              <Image
                src="/services/dashboard/Ui Component - Chart Black.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-500 translate-x-[50%] group-hover:translate-x-0"
              />
            </div>
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" />
            <h3 className="text-xl font-semibold text-[#1F4E88] mb-2">Dashboard App Design</h3>
            <p className="text-base text-[#2F5F98] max-w-[320px]">
              Data-driven dashboards enhancing user experience and decision-making.
            </p>
          </div>
        </div>

        {/* Card 3: UI/UX Design & Mobile App */}
        <div
          className="relative bg-[#E7EEF7] border-2 border-[#AEC5DD] rounded-2xl px-4 py-5 overflow-hidden group hover:border-[#6B9BCB] focus:border-[#6B9BCB] focus:outline-none transition-all duration-300"
          tabIndex={0}
        >
          <div className="relative bg-[#C5D3E2] rounded-lg overflow-hidden h-[258px] flex items-end justify-center">
            <Image
              src="/services/mobile/Mobile 2.png"
              alt=""
              width={180}
              height={232}
              className="absolute bottom-0 w-auto h-[90%] object-contain transition-all duration-500 opacity-0 scale-[0.85] translate-x-0 group-hover:opacity-100 group-hover:translate-x-[70px] group-hover:translate-y-[70px]"
              style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
            />
            <Image
              src="/services/mobile/Mobile 1.png"
              alt=""
              width={180}
              height={232}
              className="relative z-10 w-auto h-[90%] object-contain transition-all duration-500 scale-[2] translate-y-[150px] group-hover:scale-[1.5] group-hover:translate-y-[70px] group-hover:-translate-x-[50px]"
              style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
            />
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" />
            <h3 className="text-xl font-semibold text-[#1F4E88] mb-2">UI/UX Design &amp; Mobile App</h3>
            <p className="text-base text-[#2F5F98] max-w-[320px]">
              User-centered interfaces crafted for seamless digital experiences.
            </p>
          </div>
        </div>

        {/* Card 4: Website Maintenance */}
        <div
          className="relative bg-[#E7EEF7] border-2 border-[#AEC5DD] rounded-2xl px-4 py-5 overflow-hidden group hover:border-[#6B9BCB] focus:border-[#6B9BCB] focus:outline-none transition-all duration-300"
          tabIndex={0}
        >
          <div className="relative bg-[#C5D3E2] rounded-lg overflow-hidden h-[258px] flex items-center justify-center">
            <div className="flex flex-wrap gap-4 w-[200px] transition-transform duration-500 group-hover:translate-x-28">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="w-[42px] h-[42px] bg-[#eaf1f9] rounded-2xl flex items-center justify-center">
                  <Image
                    src={`/services/maintenance/Maintenance Icon-${i + 1}.png`}
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[144px] h-[142px] rounded-[2rem] shadow-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(150deg, rgb(107,155,203) 0%, rgb(31,78,136) 100%)" }}
            >
              <div
                className="w-16 h-16 text-white transition-transform duration-700 group-hover:rotate-90"
                style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
              >
                <SettingsGearIcon className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="relative pt-6 flex flex-col items-center text-center z-10">
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-24 h-24 bg-[#6B9BCB] rounded-full blur-[100px] opacity-20 pointer-events-none right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2" />
            <h3 className="text-xl font-semibold text-[#1F4E88] mb-2">Website Maintenance</h3>
            <p className="text-base text-[#2F5F98] max-w-[320px]">
              Ongoing maintenance, security updates, and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
