export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-card-border bg-midnight">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-card-border flex items-center justify-center text-sm font-bold">
                S
              </div>
              <span className="font-bold text-lg tracking-tight">
                Speed<span className="text-text-muted">.</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              An interactive exploration of how internet speeds have evolved over
              three decades, transforming communication, entertainment, and
              daily life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-text-primary">
              Sections
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#timeline"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Timeline
              </a>
              <a
                href="#charts"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Charts & Data
              </a>
              <a
                href="#stats"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Statistics
              </a>
              <a
                href="#future"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Future Tech
              </a>
            </div>
          </div>

          {/* Sources */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-text-primary">
              Data Sources
            </h4>
            <div className="flex flex-col gap-2 text-sm text-text-secondary">
              <span>Speedtest Global Index (Ookla)</span>
              <span>ITU World Telecom Indicators</span>
              <span>IEEE Spectrum</span>
              <span>3GPP Release Documents</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            Built with Next.js, Tailwind CSS & Recharts. Data compiled from
            public sources.
          </p>
          <p className="text-xs text-text-muted font-mono">
            {new Date().getFullYear()} — The Speed of the Internet
          </p>
        </div>
      </div>
    </footer>
  );
}
