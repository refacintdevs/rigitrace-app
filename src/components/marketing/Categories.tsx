const categories = [
  {
    num: "I",
    name: "Cosmetics & Personal Care",
    tagline: "Skin deep, but the damage runs deeper.",
    stat: "$8.3B",
    statLabel: "Nigerian market size",
    risks: ["Mercury in skin creams", "Chemical burns", "Hormone disruption"],
    accentColor: "#00A8A8",
  },
  {
    num: "II",
    name: "Packaged Food & Beverages",
    tagline: "What you feed your family should not be a gamble.",
    stat: "Daily",
    statLabel: "Purchase frequency",
    risks: ["Adulterated milk", "Fake seasonings", "Unhygienic production"],
    accentColor: "#F59E0B",
  },
  {
    num: "III",
    name: "Electronics & Accessories",
    tagline: "A fake charger can destroy a ₦300,000 phone.",
    stat: "~40%",
    statLabel: "Tech fakes in open markets",
    risks: ["Battery fires", "Device damage", "Electric shock"],
    accentColor: "#1E3A5F",
  },
];

export function Categories() {
  return (
    <section id="categories" className="bg-ice py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-teal-electric" />
            <p className="eyebrow-teal">§ 03 — The Scope</p>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-navy-deep">
            Three categories.
            <br />
            <span className="italic font-normal text-teal-deep">Zero</span> tolerance.
          </h2>
        </div>

        <div className="space-y-0">
          {categories.map((cat) => (
            <article
              key={cat.num}
              className="group relative hairline-top last:hairline-bottom py-12 md:py-16 grid md:grid-cols-12 gap-8 transition-all duration-300 hover:bg-paper"
              style={{ borderLeftColor: cat.accentColor }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: cat.accentColor }}
              />

              <div className="md:col-span-2 md:pl-4">
                <span
                  className="font-display text-5xl md:text-6xl font-extrabold"
                  style={{ color: cat.accentColor }}
                >
                  {cat.num}
                </span>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-deep mb-3">
                  {cat.name}
                </h3>
                <p className="text-lg text-graphite italic mb-6">&ldquo;{cat.tagline}&rdquo;</p>
                <p className="eyebrow mb-3">Known risks</p>
                <ul className="flex flex-wrap gap-2">
                  {cat.risks.map((r) => (
                    <li
                      key={r}
                      className="text-xs font-mono text-graphite px-3 py-1.5 border transition-colors"
                      style={{
                        borderColor: "#CBD5E1",
                      }}
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4 md:text-right">
                <div
                  className="font-display text-4xl md:text-5xl font-extrabold"
                  style={{ color: cat.accentColor }}
                >
                  {cat.stat}
                </div>
                <p className="data-label mt-2">{cat.statLabel}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}