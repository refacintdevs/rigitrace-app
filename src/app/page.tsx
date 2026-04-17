export default function Home() {
  return (
    <main className="min-h-screen bg-bone grain">
      {/* Top hairline bar with eyebrow metadata */}
      <div className="hairline-bottom">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="eyebrow reveal reveal-1">
            File · RGT-2026-001
          </span>
          <span className="eyebrow reveal reveal-1">
            Lagos, NG
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="max-w-4xl">
          <p className="eyebrow reveal reveal-2 mb-8">
            Product Authenticity Infrastructure — Est. 2026
          </p>

          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-tight text-obsidian reveal reveal-3">
            Counterfeits
            <br />
            <span className="italic font-normal">end</span> here.
          </h1>

          <div className="divider-chevron my-12 reveal reveal-4" />

          <p className="text-xl md:text-2xl text-ink max-w-2xl leading-relaxed reveal reveal-5">
            Scan any product. Know if it&apos;s real. In seconds.
            <br />
            <span className="text-steel">
              Nigeria&apos;s product authenticity verification platform.
            </span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal reveal-6">
            <button
              type="button"
              className="px-8 py-4 bg-obsidian text-bone font-display font-semibold tracking-wide hover:bg-graphite transition-colors duration-200"
            >
              Verify a product →
            </button>
            <button
              type="button"
              className="px-8 py-4 hairline text-obsidian font-display font-semibold tracking-wide hover:bg-hairline/40 transition-colors duration-200"
            >
              For brands
            </button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="hairline-top hairline-bottom bg-paper">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "₦2.5T", label: "Annual counterfeit market" },
            { value: "60%", label: "Fake drugs in circulation" },
            { value: "200M+", label: "Consumers exposed" },
            { value: "5", label: "Verification methods" },
          ].map((stat, i) => (
            <div key={stat.label} className="reveal" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
              <div className="font-display text-4xl md:text-5xl font-bold text-obsidian">
                {stat.value}
              </div>
              <p className="data-label mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer tag */}
      <footer className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="data-label">RIGITRACE · v0.1.0</span>
        <span className="data-label">Endgame to counterfeit</span>
      </footer>
    </main>
  );
}