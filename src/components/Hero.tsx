"use client";

import { useEffect, useState } from "react";

const speedMilestones = [
  { label: "Dial-up", speed: "56 Kbps", year: 1996 },
  { label: "DSL", speed: "1.5 Mbps", year: 2000 },
  { label: "Cable", speed: "25 Mbps", year: 2006 },
  { label: "4G LTE", speed: "100 Mbps", year: 2012 },
  { label: "Fiber", speed: "1 Gbps", year: 2015 },
  { label: "5G", speed: "10 Gbps", year: 2020 },
  { label: "Wi-Fi 7", speed: "46 Gbps", year: 2024 },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % speedMilestones.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const current = speedMilestones[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Main content — centered vertically */}
      <div
        className={`flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 pt-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-card-border bg-card-bg mb-8">
          <span className="w-2 h-2 bg-text-muted" />
          <span className="text-sm text-text-secondary font-mono">
            From 56 Kbps to 46 Gbps — A 821,000x increase
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
          The Speed of
          <br />
          <span className="gradient-text">The Internet</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          An interactive journey through three decades of connectivity — from
          the screech of dial-up modems to the promise of terabit networks.
        </p>

        {/* Animated speed ticker */}
        <div className="inline-flex flex-col items-center gap-3 p-6 border border-card-border bg-card-bg">
          <div className="flex items-center gap-3 text-text-muted text-sm font-mono">
            <span className="text-text-secondary">{current.year}</span>
            <span>—</span>
            <span>{current.label}</span>
          </div>
          <div className="text-4xl md:text-5xl font-bold font-mono text-text-primary transition-all duration-500">
            {current.speed}
          </div>
          <div className="flex gap-1.5 mt-2">
            {speedMilestones.map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-text-secondary"
                    : "w-1.5 bg-card-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — pinned to bottom of section, outside content flow */}
      <div className="pb-8 pt-6 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-xs font-mono">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-text-muted flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-text-muted animate-bounce" />
        </div>
      </div>
    </section>
  );
}
