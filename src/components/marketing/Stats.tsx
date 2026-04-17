const stats = [
  { value: "₦2.5T", label: "Annual counterfeit market", emphasis: false },
  { value: "60%", label: "Fake drugs in sub-Saharan Africa", emphasis: true },
  { value: "200M+", label: "Nigerian consumers exposed", emphasis: false },
  { value: "40%", label: "Fake tech goods in open markets", emphasis: true },
];

export function Stats() {
  return (
    <section className="relative bg-navy-deep text-ice overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-teal-electric" />
          <p className="eyebrow-teal" style={{ color: "#00D4D4" }}>
            The Crisis — by the numbers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative border-l-2 pl-5 md:pl-6"
              style={{
                borderColor: stat.emphasis ? "#00D4D4" : "rgba(226, 232, 240, 0.2)",
              }}
            >
              <div
                className="font-display text-4xl md:text-6xl font-extrabold tracking-tight"
                style={{ color: stat.emphasis ? "#00D4D4" : "#F8FAFC" }}
              >
                {stat.value}
              </div>
              <p className="data-label mt-3" style={{ color: "#CBD5E1" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}