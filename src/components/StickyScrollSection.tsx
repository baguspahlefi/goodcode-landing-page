"use client";

import { useEffect, useRef, useState } from "react";

export function StickyScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = el.offsetHeight;
      const windowHeight = window.innerHeight;
      const raw = (window.scrollY - sectionTop) / (sectionHeight - windowHeight);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const p1 = Math.min(1, progress / 0.33);
  const p2 = Math.min(1, Math.max(0, (progress - 0.33) / 0.33));
  const p3 = Math.min(1, Math.max(0, (progress - 0.66) / 0.34));

  const card1Style: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    opacity: p1,
    transform: `translate(-50%, calc(-50% - ${(1 - p1) * 60}px)) scale(${0.6 + p1 * 0.4}) rotateX(${(1 - p1) * 80}deg)`,
  };

  const card2Style: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    opacity: p2,
    transform: `translate(calc(-50% + ${(1 - p2) * 200}px), -50%) scale(${1.1 - p2 * 0.1}) rotateY(${(1 - p2) * 25}deg)`,
  };

  const card3Style: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    opacity: p3,
    transform: `translate(calc(-50% + ${(1 - p3) * 350}px), -50%) scale(${1.1 - p3 * 0.1}) rotateY(${(1 - p3) * 25}deg)`,
  };

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-[5vh] md:top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div
          className="relative w-[300px] md:w-[450px] mb-[83px]"
          style={{ aspectRatio: "1.4 / 1", perspective: "1000px" }}
        >
          <div style={card1Style}>
            <img src="/images/scroll-card-1.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div style={card2Style}>
            <img src="/images/scroll-card-2.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div style={card3Style}>
            <img src="/images/scroll-card-3.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex space-x-2 text-[28px] md:text-[40px] font-medium text-[#1F4E88]">
          <span style={{ opacity: 0.2 + p1 * 0.8 }}>Fast.</span>
          <span style={{ opacity: 0.2 + p2 * 0.8 }}>Flawless.</span>
          <span style={{ opacity: 0.2 + p3 * 0.8 }}>Finetuned.</span>
        </div>

        <p className="text-[#2F5F98] text-center max-w-[400px] font-thin mt-3 mb-6 text-base">
          Delivering user-focused website solutions that drive impact and set you apart from the competition.
        </p>

        <a
          href="https://astakona.sg.larksuite.com/share/base/form/shrlgDF86d3TLy5irv1GLxa5AQb"
          target="_blank"
          rel="noopener noreferrer"
          className="gc-glass-btn"
        >
          Start Your Project Today
        </a>
      </div>
    </div>
  );
}
