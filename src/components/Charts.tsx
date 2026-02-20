"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  LineChart,
  Line,
} from "recharts";

const speedEvolutionData = [
  { year: "1991", speed: 0.0024, label: "2.4 Kbps" },
  { year: "1996", speed: 0.056, label: "56 Kbps" },
  { year: "1999", speed: 1.5, label: "1.5 Mbps" },
  { year: "2003", speed: 11, label: "11 Mbps" },
  { year: "2006", speed: 25, label: "25 Mbps" },
  { year: "2008", speed: 50, label: "50 Mbps" },
  { year: "2010", speed: 100, label: "100 Mbps" },
  { year: "2013", speed: 1000, label: "1 Gbps" },
  { year: "2016", speed: 2000, label: "2 Gbps" },
  { year: "2020", speed: 10000, label: "10 Gbps" },
  { year: "2024", speed: 46000, label: "46 Gbps" },
];

const globalAvgData = [
  { country: "Monaco", speed: 319.59, color: "#e0e0e0" },
  { country: "Singapore", speed: 300.83, color: "#c0c0c0" },
  { country: "Hong Kong", speed: 292.21, color: "#a8a8a8" },
  { country: "Romania", speed: 275.98, color: "#909090" },
  { country: "Denmark", speed: 270.73, color: "#808080" },
  { country: "S. Korea", speed: 267.45, color: "#707070" },
  { country: "France", speed: 262.76, color: "#606060" },
  { country: "USA", speed: 242.35, color: "#555555" },
  { country: "Japan", speed: 225.61, color: "#484848" },
  { country: "Germany", speed: 210.23, color: "#3a3a3a" },
];

const technologyComparisonData = [
  { tech: "Speed", "5G": 95, "Wi-Fi 7": 100, Fiber: 90, Starlink: 40 },
  { tech: "Latency", "5G": 85, "Wi-Fi 7": 90, Fiber: 95, Starlink: 45 },
  { tech: "Coverage", "5G": 60, "Wi-Fi 7": 30, Fiber: 50, Starlink: 95 },
  { tech: "Reliability", "5G": 75, "Wi-Fi 7": 85, Fiber: 98, Starlink: 65 },
  { tech: "Mobility", "5G": 95, "Wi-Fi 7": 50, Fiber: 5, Starlink: 70 },
  { tech: "Cost", "5G": 55, "Wi-Fi 7": 75, Fiber: 70, Starlink: 45 },
];

const downloadTimeData = [
  { file: "Photo (5MB)", dialup: 714, dsl: 27, cable: 1.6, fiber: 0.04, fiveG: 0.004 },
  { file: "Song (50MB)", dialup: 7143, dsl: 267, cable: 16, fiber: 0.4, fiveG: 0.04 },
  { file: "Movie (4GB)", dialup: 571429, dsl: 21333, cable: 1280, fiber: 32, fiveG: 3.2 },
  { file: "Game (100GB)", dialup: 14285714, dsl: 533333, cable: 32000, fiber: 800, fiveG: 80 },
];

const globalGrowthData = [
  { year: "2000", users: 413, avgSpeed: 0.256 },
  { year: "2003", users: 778, avgSpeed: 1.5 },
  { year: "2006", users: 1153, avgSpeed: 5.0 },
  { year: "2009", users: 1752, avgSpeed: 10.5 },
  { year: "2012", users: 2497, avgSpeed: 21.0 },
  { year: "2015", users: 3366, avgSpeed: 34.5 },
  { year: "2018", users: 4208, avgSpeed: 55.0 },
  { year: "2021", users: 4901, avgSpeed: 107.5 },
  { year: "2024", users: 5440, avgSpeed: 195.0 },
];

function formatDownloadTime(seconds: number): string {
  if (seconds < 1) return `${(seconds * 1000).toFixed(0)}ms`;
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(1)}m`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(1)}h`;
  return `${(seconds / 86400).toFixed(0)}d`;
}

type ChartTab = "evolution" | "global" | "comparison" | "downloads" | "growth";

const tabs: { key: ChartTab; label: string }[] = [
  { key: "evolution", label: "Speed Evolution" },
  { key: "global", label: "By Country" },
  { key: "comparison", label: "Tech Comparison" },
  { key: "downloads", label: "Download Times" },
  { key: "growth", label: "Global Growth" },
];

const tooltipStyle = {
  backgroundColor: "#1a1a1a",
  border: "1px solid #2a2a2a",
  borderRadius: "0px",
  color: "#e0e0e0",
};

export default function Charts() {
  const [activeTab, setActiveTab] = useState<ChartTab>("evolution");

  return (
    <section id="charts" className="py-24 px-6 bg-deep-purple relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-text-muted tracking-widest uppercase">
            Data & Visualization
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Numbers Behind{" "}
            <span className="gradient-text">The Speed</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Explore interactive charts that tell the story of how internet
            speeds have grown exponentially over the decades.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-card-border text-text-primary"
                  : "bg-card-bg border border-card-border text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chart container */}
        <div className="bg-card-bg border border-card-border p-6 md:p-8">
          {activeTab === "evolution" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Peak Internet Speed Over Time
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Logarithmic scale showing the exponential growth of maximum
                available internet speeds (in Mbps).
              </p>
              <ResponsiveContainer width="100%" height={420}>
                <AreaChart data={speedEvolutionData}>
                  <defs>
                    <linearGradient
                      id="speedGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#808080"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="#808080"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis
                    dataKey="year"
                    stroke="#505050"
                    tick={{ fill: "#808080", fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#505050"
                    tick={{ fill: "#808080", fontSize: 12 }}
                    scale="log"
                    domain={[0.001, 100000]}
                    tickFormatter={(v) =>
                      v >= 1000 ? `${v / 1000}G` : v >= 1 ? `${v}M` : `${v * 1000}K`
                    }
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(value: number | undefined) => {
                      const v = value ?? 0;
                      if (v >= 1000) return [`${v / 1000} Gbps`, "Speed"];
                      if (v >= 1) return [`${v} Mbps`, "Speed"];
                      return [`${v * 1000} Kbps`, "Speed"];
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="speed"
                    stroke="#aaaaaa"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#speedGradient)"
                    dot={{ fill: "#aaaaaa", stroke: "#1a1a1a", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#aaaaaa", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === "global" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Fastest Countries by Average Speed (2024)
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Average fixed broadband download speeds in Mbps by country.
              </p>
              <ResponsiveContainer width="100%" height={420}>
                <BarChart
                  data={globalAvgData}
                  layout="vertical"
                  margin={{ left: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#2a2a2a"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    stroke="#505050"
                    tick={{ fill: "#808080", fontSize: 12 }}
                    tickFormatter={(v) => `${v} Mbps`}
                  />
                  <YAxis
                    dataKey="country"
                    type="category"
                    stroke="#505050"
                    tick={{ fill: "#808080", fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(value: number | undefined) => [`${value ?? 0} Mbps`, "Avg Speed"]}
                  />
                  <Bar dataKey="speed" radius={[0, 0, 0, 0]} barSize={24}>
                    {globalAvgData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} fillOpacity={0.9} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === "comparison" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Technology Comparison Radar
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                How modern connectivity technologies stack up across key metrics
                (higher is better).
              </p>
              <ResponsiveContainer width="100%" height={420}>
                <RadarChart data={technologyComparisonData}>
                  <PolarGrid stroke="#2a2a2a" />
                  <PolarAngleAxis
                    dataKey="tech"
                    tick={{ fill: "#808080", fontSize: 12 }}
                  />
                  <Radar
                    name="5G"
                    dataKey="5G"
                    stroke="#e0e0e0"
                    fill="#e0e0e0"
                    fillOpacity={0.08}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Wi-Fi 7"
                    dataKey="Wi-Fi 7"
                    stroke="#aaaaaa"
                    fill="#aaaaaa"
                    fillOpacity={0.08}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Fiber"
                    dataKey="Fiber"
                    stroke="#777777"
                    fill="#777777"
                    fillOpacity={0.08}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Starlink"
                    dataKey="Starlink"
                    stroke="#505050"
                    fill="#505050"
                    fillOpacity={0.08}
                    strokeWidth={2}
                  />
                  <Legend
                    wrapperStyle={{ color: "#808080", fontSize: "13px" }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === "downloads" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Download Time Comparison
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                How long common files take to download across different eras of
                connectivity.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-card-border">
                      <th className="text-left py-3 px-4 text-text-secondary font-medium">
                        File
                      </th>
                      <th className="text-center py-3 px-4 text-text-muted font-medium">
                        Dial-Up
                      </th>
                      <th className="text-center py-3 px-4 text-text-muted font-medium">
                        DSL
                      </th>
                      <th className="text-center py-3 px-4 text-text-muted font-medium">
                        Cable
                      </th>
                      <th className="text-center py-3 px-4 text-text-secondary font-medium">
                        Fiber
                      </th>
                      <th className="text-center py-3 px-4 text-text-primary font-medium">
                        5G
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {downloadTimeData.map((row) => (
                      <tr
                        key={row.file}
                        className="border-b border-card-border/50 hover:bg-card-border/10 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium">{row.file}</td>
                        <td className="py-4 px-4 text-center font-mono text-text-muted">
                          {formatDownloadTime(row.dialup)}
                        </td>
                        <td className="py-4 px-4 text-center font-mono text-text-muted">
                          {formatDownloadTime(row.dsl)}
                        </td>
                        <td className="py-4 px-4 text-center font-mono text-text-secondary">
                          {formatDownloadTime(row.cable)}
                        </td>
                        <td className="py-4 px-4 text-center font-mono text-text-secondary">
                          {formatDownloadTime(row.fiber)}
                        </td>
                        <td className="py-4 px-4 text-center font-mono text-text-primary">
                          {formatDownloadTime(row.fiveG)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-muted text-xs mt-4">
                * Based on theoretical max speeds: Dial-up 56Kbps, DSL 1.5Mbps,
                Cable 25Mbps, Fiber 1Gbps, 5G 10Gbps
              </p>
            </div>
          )}

          {activeTab === "growth" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Internet Users vs Average Speed Growth
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                The dual growth of internet adoption (millions of users) and
                average global connection speed.
              </p>
              <ResponsiveContainer width="100%" height={420}>
                <LineChart data={globalGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis
                    dataKey="year"
                    stroke="#505050"
                    tick={{ fill: "#808080", fontSize: 12 }}
                  />
                  <YAxis
                    yAxisId="users"
                    stroke="#505050"
                    tick={{ fill: "#aaaaaa", fontSize: 12 }}
                    tickFormatter={(v) => `${v}M`}
                  />
                  <YAxis
                    yAxisId="speed"
                    orientation="right"
                    stroke="#505050"
                    tick={{ fill: "#666666", fontSize: 12 }}
                    tickFormatter={(v) => `${v} Mbps`}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend
                    wrapperStyle={{ color: "#808080", fontSize: "13px" }}
                  />
                  <Line
                    yAxisId="users"
                    type="monotone"
                    dataKey="users"
                    stroke="#aaaaaa"
                    strokeWidth={2}
                    name="Users (Millions)"
                    dot={{ fill: "#aaaaaa", stroke: "#1a1a1a", strokeWidth: 2 }}
                  />
                  <Line
                    yAxisId="speed"
                    type="monotone"
                    dataKey="avgSpeed"
                    stroke="#555555"
                    strokeWidth={2}
                    name="Avg Speed (Mbps)"
                    dot={{
                      fill: "#555555",
                      stroke: "#1a1a1a",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
