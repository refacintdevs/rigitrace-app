const methods = [
  { num: "01", title: "Barcode Scan", desc: "Cross-check barcode against GS1 Nigeria and manufacturer databases." },
  { num: "02", title: "NAFDAC Lookup", desc: "Instantly validate the NAFDAC registration number against the official registry." },
  { num: "03", title: "Serial Verification", desc: "For electronics, validate serial/IMEI against manufacturer production records." },
  { num: "04", title: "AI Photo Analysis", desc: "Computer vision compares packaging against known authentic signatures." },
  { num: "05", title: "Crowd Intelligence", desc: "Surfaces verified counterfeit sightings from users in your area." },
];

function HexCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="group relative bg-paper p-8 hairline hover:border-teal-electric transition-all duration-300 hover:shadow-[0_8px_24px_-12px_rgba(0,212,212,0.3)]">
      <div className="absolute -top-5 left-8">
        <svg width="48" height="54" viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 2 L42 13 L42 35 L24 46 L6 35 L6 13 Z"
            className="fill-paper stroke-navy-deep group-hover:fill-teal-electric group-hover:stroke-teal-electric transition-all"
            strokeWidth="1.5"
          />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            className="fill-navy-deep group-hover:fill-navy-deep font-mono font-bold text-sm transition-colors"
          >
            {num}
          </text>
        </svg>
      </div>

      <h3 className="font-display text-xl font-bold mt-6 mb-3 text-navy-deep group-hover:text-teal-deep transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate leading-relaxed">{desc}</p>

      <div className="mt-5 h-px w-8 bg-mist group-hover:w-full group-hover:bg-teal-electric transition-all duration-500" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="bg-paper hairline-top hairline-bottom py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-teal-electric" />
            <p className="eyebrow-teal">§ 02 — The Method</p>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-navy-deep">
            Five ways
            <br />
            to verify
            <br />
            <span className="italic font-normal text-teal-deep">anything.</span>
          </h2>
          <p className="text-lg text-slate mt-6 leading-relaxed">
            Open the app. Scan, enter, or photograph. Get a definitive verdict in seconds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {methods.map((m) => (
            <HexCard key={m.num} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}