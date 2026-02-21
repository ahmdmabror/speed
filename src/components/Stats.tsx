"use client";

const stats = [
  {
    value: "821,000x",
    label: "Speed Increase",
    description: "From 56 Kbps dial-up (1996) to 46 Gbps Wi-Fi 7 (2024)",
    icon: "//",
  },
  {
    value: "5.44B",
    label: "Internet Users",
    description: "67.5% of the world's population is now online",
    icon: "::",
  },
  {
    value: "< 5ms",
    label: "5G Latency",
    description: "Down from 150ms on 3G — a 30x improvement",
    icon: ">>",
  },
  {
    value: "402 Tb/s",
    label: "Fiber Record",
    description: "Set in 2024 by Japan's NICT over standard fiber",
    icon: "||",
  },
  {
    value: "6,000+",
    label: "Starlink Satellites",
    description: "Providing broadband to 100+ countries from orbit",
    icon: "^^",
  },
  {
    value: "500 Zb",
    label: "Annual Data by 2025",
    description: "Global data creation expected to reach 500 zettabytes",
    icon: "##",
  },
];

const speedBars = [
  { label: "Dial-Up (1996)", speed: 0.056, max: 46000 },
  { label: "DSL (2000)", speed: 1.5, max: 46000 },
  { label: "Cable (2006)", speed: 25, max: 46000 },
  { label: "4G LTE (2012)", speed: 100, max: 46000 },
  { label: "Fiber (2015)", speed: 1000, max: 46000 },
  { label: "5G (2020)", speed: 10000, max: 46000 },
  { label: "Wi-Fi 7 (2024)", speed: 46000, max: 46000 },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-text-muted tracking-widest uppercase">
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Internet <span className="gradient-text">At a Glance</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The most fascinating numbers that define our connected world.
          </p>
        </div>

        {/* Stat cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 stagger-children">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card border border-card-border bg-card-bg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-lg font-mono text-text-muted">{stat.icon}</span>
                <div className="h-px w-16 bg-card-border mt-3" />
              </div>
              <div className="text-3xl md:text-4xl font-black font-mono text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-text-secondary mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Speed comparison bars */}
        <div className="bg-card-bg border border-card-border p-6 md:p-8">
          <h3 className="text-xl font-bold mb-2">Speed Comparison</h3>
          <p className="text-text-secondary text-sm mb-8">
            Visualizing the staggering growth in peak internet speeds (logarithmic scale).
          </p>
          <div className="space-y-4">
            {speedBars.map((bar) => {
              const logPercent =
                (Math.log10(bar.speed) / Math.log10(bar.max)) * 100;
              return (
                <div key={bar.label} className="flex items-center gap-4">
                  <div className="w-36 text-sm text-text-secondary font-mono shrink-0">
                    {bar.label}
                  </div>
                  <div className="flex-1 h-6 bg-midnight overflow-hidden">
                    <div
                      className="h-full bg-text-muted animate-grow"
                      style={{ width: `${logPercent}%` }}
                    />
                  </div>
                  <div className="w-24 text-right text-sm font-mono text-text-primary shrink-0">
                    {bar.speed >= 1000
                      ? `${bar.speed / 1000} Gbps`
                      : `${bar.speed} Mbps`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
