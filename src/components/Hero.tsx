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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[200px]" />

      <div
        className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
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
        <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl border border-card-border bg-card-bg/60 backdrop-blur-md glow-violet">
          <div className="flex items-center gap-3 text-text-muted text-sm font-mono">
            <span className="text-accent-violet">{current.year}</span>
            <span>—</span>
            <span>{current.label}</span>
          </div>
          <div className="text-4xl md:text-5xl font-bold font-mono text-accent-cyan transition-all duration-500">
            {current.speed}
          </div>
          <div className="flex gap-1.5 mt-2">
            {speedMilestones.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-accent-violet"
                    : "w-1.5 bg-card-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs font-mono">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-text-muted flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-text-muted animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
