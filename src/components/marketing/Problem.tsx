const incidents = [
  { year: "2018", event: "Two students died from counterfeit biscuits at an Abuja school." },
  { year: "2023", event: "NAFDAC raided 3,000+ facilities producing fake goods." },
  { year: "2025", event: "₦500M worth of fake cosmetics seized in a single warehouse raid." },
];

export function Problem() {
  return (
    <section id="problem" className="bg-ice py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-teal-electric" />
              <p className="eyebrow-teal">§ 01 — The Problem</p>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-navy-deep">
              A crisis
              <br />
              <span className="italic font-normal text-teal-deep">no one</span>
              <br />
              has solved.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-xl md:text-2xl text-graphite leading-relaxed mb-8">
              Every day, millions of Nigerians make purchasing decisions with no reliable way to confirm whether the product in their hand is genuine.
            </p>
            <p className="text-lg text-slate leading-relaxed mb-12">
              The consequences range from wasted money to permanent injury. Mercury-laced skin creams. Fake phone chargers that burn homes. Counterfeit milk that poisons children. Packaging consumers trust but cannot authenticate.
            </p>

            <div className="hairline-top pt-8" style={{ borderTopColor: "#00D4D4" }}>
              <p className="eyebrow-teal mb-6">Documented incidents</p>
              <ul className="space-y-0">
                {incidents.map((item) => (
                  <li key={item.year} className="flex gap-6 hairline-bottom py-5 last:border-b-0">
                    <span className="font-mono text-sm font-bold text-teal-deep mt-1 shrink-0 tabular-nums">
                      {item.year}
                    </span>
                    <span className="text-graphite">{item.event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}