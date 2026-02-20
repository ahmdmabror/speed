"use client";

const timelineData = [
  {
    year: "1991",
    title: "The World Wide Web",
    speed: "2.4 Kbps",
    description:
      "Tim Berners-Lee launches the first website. Most users connect via dial-up modems at painfully slow speeds. Loading a single image could take minutes.",
    color: "text-accent-orange",
    bgColor: "bg-accent-orange/10",
    borderColor: "border-accent-orange/30",
    icon: "🌐",
    funFact: "A 5MB MP3 would take ~4.6 hours to download",
  },
  {
    year: "1996",
    title: "56K Dial-Up Modems",
    speed: "56 Kbps",
    description:
      "The iconic screech of connecting becomes a cultural touchstone. US Robotics and 3Com battle for modem supremacy. You couldn't use the phone and internet simultaneously.",
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
    borderColor: "border-accent-pink/30",
    icon: "📞",
    funFact: "The famous dial-up sound was actually a handshake protocol negotiation",
  },
  {
    year: "1999",
    title: "DSL & Cable Broadband",
    speed: "256 Kbps – 1.5 Mbps",
    description:
      "Always-on internet arrives. No more dialing in. DSL runs over phone lines while cable internet shares TV infrastructure. The broadband revolution begins.",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    borderColor: "border-accent-blue/30",
    icon: "🔌",
    funFact: "Napster launched this year — broadband made music sharing explode",
  },
  {
    year: "2003",
    title: "Wi-Fi Goes Mainstream",
    speed: "11–54 Mbps (802.11b/g)",
    description:
      "Starbucks starts offering Wi-Fi. Laptops gain built-in wireless cards. The era of cutting the cord begins, and coffee shop culture merges with internet culture.",
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    borderColor: "border-accent-green/30",
    icon: "📶",
    funFact: "Wi-Fi was originally called \"WaveLAN\" by NCR/AT&T",
  },
  {
    year: "2007",
    title: "Mobile Internet & 3G",
    speed: "2–14 Mbps",
    description:
      "The iPhone launches, redefining mobile internet. 3G networks make web browsing on phones actually usable. App stores create a new software economy.",
    color: "text-accent-violet",
    bgColor: "bg-accent-violet/10",
    borderColor: "border-accent-violet/30",
    icon: "📱",
    funFact: "The original iPhone didn't even support 3G — it launched on 2G EDGE",
  },
  {
    year: "2010",
    title: "4G LTE Arrives",
    speed: "10–50 Mbps",
    description:
      "Real-time video streaming becomes viable on mobile. Netflix, YouTube, and social media explode. Mobile internet usage begins overtaking desktop.",
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    borderColor: "border-accent-cyan/30",
    icon: "🎬",
    funFact: "4G enabled the rise of Uber, Instagram, and mobile-first apps",
  },
  {
    year: "2013",
    title: "Fiber to the Home",
    speed: "100 Mbps – 1 Gbps",
    description:
      "Google Fiber launches in Kansas City, pushing incumbents to upgrade. South Korea and Japan lead with nationwide fiber. Gigabit becomes the new benchmark.",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    borderColor: "border-accent-blue/30",
    icon: "💎",
    funFact: "Google Fiber offered 1 Gbps for $70/mo — 100x faster than the average US speed",
  },
  {
    year: "2016",
    title: "5G Development Begins",
    speed: "1–10 Gbps (theoretical)",
    description:
      "Standards bodies begin defining 5G NR. Millimeter wave and massive MIMO technologies promise unprecedented speeds and ultra-low latency for IoT and autonomous vehicles.",
    color: "text-accent-pink",
    bgColor: "bg-accent-pink/10",
    borderColor: "border-accent-pink/30",
    icon: "🏗️",
    funFact: "5G uses frequencies up to 39 GHz — 10x higher than 4G",
  },
  {
    year: "2020",
    title: "5G Rolls Out Globally",
    speed: "50 Mbps – 4 Gbps",
    description:
      "COVID-19 makes fast internet essential. 5G networks go live worldwide. Starlink begins satellite internet service, bringing broadband to rural areas.",
    color: "text-accent-green",
    bgColor: "bg-accent-green/10",
    borderColor: "border-accent-green/30",
    icon: "🛰️",
    funFact: "Global internet traffic surged 40% in 2020 due to the pandemic",
  },
  {
    year: "2024",
    title: "Wi-Fi 7 & 10G Broadband",
    speed: "Up to 46 Gbps",
    description:
      "Wi-Fi 7 (802.11be) brings multi-link operation and 320 MHz channels. Cable providers push DOCSIS 4.0 for 10 Gbps symmetric speeds. The gap between wired and wireless narrows.",
    color: "text-accent-violet",
    bgColor: "bg-accent-violet/10",
    borderColor: "border-accent-violet/30",
    icon: "⚡",
    funFact: "Wi-Fi 7 can deliver speeds 4.8x faster than Wi-Fi 6",
  },
];

export default function SpeedTimeline() {
  return (
    <section id="timeline" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-mono text-accent-violet tracking-widest uppercase">
            A Journey Through Time
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Evolution of <span className="gradient-text">Speed</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From the screeching tones of dial-up modems to multi-gigabit fiber
            optics, here&apos;s how internet speeds have transformed our world.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-accent-green" />

          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex items-start mb-16 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`pulse-dot relative w-4 h-4 rounded-full ${item.color} bg-current`}
                />
              </div>

              {/* Content card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                }`}
              >
                <div
                  className={`card-shine rounded-2xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm p-6 stat-card`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`font-mono text-sm ${item.color}`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div
                    className={`inline-block font-mono text-sm px-3 py-1 rounded-full ${item.bgColor} ${item.color} border ${item.borderColor} mb-3`}
                  >
                    {item.speed}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 text-xs text-text-muted bg-midnight/40 rounded-lg p-3">
                    <span className="text-accent-orange">💡</span>
                    <span>{item.funFact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
