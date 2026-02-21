"use client";

const technologies = [
  {
    name: "6G Networks",
    timeline: "Expected 2030",
    speed: "Up to 1 Tbps",
    status: "Research Phase",
    statusColor: "bg-card-border text-text-muted border-card-border",
    description:
      "The next generation of mobile networks promises terabit speeds, sub-millisecond latency, and native AI integration. Key features include terahertz frequencies, holographic communication, and digital twin networking.",
    features: [
      "Terahertz (THz) spectrum utilization",
      "AI-native network architecture",
      "Holographic telepresence",
      "Sub-0.1ms latency",
      "Integrated sensing & communication",
    ],
    icon: "[1]",
  },
  {
    name: "Li-Fi (Light Fidelity)",
    timeline: "Commercial 2025–2027",
    speed: "Up to 224 Gbps",
    status: "Early Deployment",
    statusColor: "bg-card-border text-text-secondary border-card-border",
    description:
      "Using visible light for data transmission, Li-Fi offers ultra-fast speeds with zero electromagnetic interference. Perfect for hospitals, aircraft, and secure facilities where RF is restricted.",
    features: [
      "Uses LED lights as access points",
      "No RF interference",
      "Inherently secure (light can't pass walls)",
      "10,000x wider spectrum than Wi-Fi",
      "Ideal for dense indoor environments",
    ],
    icon: "[2]",
  },
  {
    name: "Quantum Internet",
    timeline: "2035+",
    speed: "Instantaneous (entanglement)",
    status: "Experimental",
    statusColor: "bg-card-border text-text-muted border-card-border",
    description:
      "A fundamentally new type of network using quantum entanglement for unhackable communication. China has demonstrated satellite-based quantum key distribution over 1,200 km.",
    features: [
      "Quantum key distribution (QKD)",
      "Physically unhackable encryption",
      "Quantum teleportation of information",
      "Quantum repeaters for long-distance links",
      "Distributed quantum computing",
    ],
    icon: "[3]",
  },
  {
    name: "Satellite Mega-Constellations",
    timeline: "Ongoing (2020–2030)",
    speed: "10+ Gbps (next-gen)",
    status: "Active Deployment",
    statusColor: "bg-card-border text-text-primary border-card-border",
    description:
      "SpaceX Starlink, Amazon Kuiper, and OneWeb are deploying thousands of LEO satellites to blanket Earth in broadband. Starlink V2 satellites will offer 10x more capacity.",
    features: [
      "Low Earth Orbit (LEO) for low latency",
      "Global coverage including oceans & poles",
      "Direct-to-cell phone connectivity",
      "Laser inter-satellite links",
      "Disrupting rural broadband economics",
    ],
    icon: "[4]",
  },
  {
    name: "DOCSIS 4.0 (10G Cable)",
    timeline: "2024–2026 Rollout",
    speed: "Up to 10 Gbps",
    status: "Deploying",
    statusColor: "bg-card-border text-text-secondary border-card-border",
    description:
      "The latest cable internet standard brings symmetrical multi-gigabit speeds over existing coaxial infrastructure. Full Duplex DOCSIS enables simultaneous upstream and downstream at full speed.",
    features: [
      "10 Gbps over existing coax cables",
      "Full Duplex for symmetric speeds",
      "Extended Spectrum DOCSIS (ESD)",
      "Low latency gaming support",
      "Backward compatible with DOCSIS 3.1",
    ],
    icon: "[5]",
  },
  {
    name: "Terabit Ethernet",
    timeline: "Standardization 2025–2028",
    speed: "800 Gbps – 1.6 Tbps",
    status: "Standardization",
    statusColor: "bg-card-border text-text-muted border-card-border",
    description:
      "IEEE is developing 800GbE and 1.6TbE standards to meet explosive data center demand driven by AI training, cloud computing, and video streaming at scale.",
    features: [
      "800 Gbps & 1.6 Tbps Ethernet standards",
      "Essential for AI/ML data center interconnects",
      "New modulation and FEC techniques",
      "Co-packaged optics integration",
      "Powers next-gen cloud infrastructure",
    ],
    icon: "[6]",
  },
];

export default function EmergingTech() {
  return (
    <section id="future" className="py-24 px-6 bg-deep-purple relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-text-muted tracking-widest uppercase">
            What&apos;s Coming Next
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Future of <span className="gradient-text">Connectivity</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From terabit wireless to quantum networks, these technologies will
            define the next era of the internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="stat-card border border-card-border bg-card-bg p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-text-muted">{tech.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold">{tech.name}</h3>
                    <span className="text-xs text-text-muted font-mono">
                      {tech.timeline}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1 border ${tech.statusColor}`}
                >
                  {tech.status}
                </span>
              </div>

              {/* Speed badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-midnight border border-card-border mb-4">
                <span className="text-xs text-text-muted">Peak Speed:</span>
                <span className="text-sm font-bold font-mono text-text-primary">
                  {tech.speed}
                </span>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {tech.description}
              </p>

              {/* Features list */}
              <div className="space-y-2">
                {tech.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-text-secondary"
                  >
                    <div className="w-1 h-1 bg-text-muted shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
