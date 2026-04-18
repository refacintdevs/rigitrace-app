"use client";

import { motion } from "framer-motion";

const categories = [
  {
    num: "I",
    name: "Cosmetics & Personal Care",
    market: "$8.3B",
    marketNote: "Nigerian market",
    growth: "13.2%",
    growthNote: "CAGR",
    threat: "Mercury poisoning",
    brands: ["Nivea", "L'Oréal", "PZ Cussons", "Unilever"],
    accent: "#00A8A8",
    illustration: "cosmetics",
  },
  {
    num: "II",
    name: "Packaged Food & Beverages",
    market: "Daily",
    marketNote: "Purchase rate",
    growth: "200M+",
    growthNote: "consumers",
    threat: "Child fatalities",
    brands: ["Indomie", "Peak Milk", "Milo", "Dangote"],
    accent: "#F59E0B",
    illustration: "food",
  },
  {
    num: "III",
    name: "Electronics & Accessories",
    market: "₦300K+",
    marketNote: "Per phone destroyed",
    growth: "~40%",
    growthNote: "are fake",
    threat: "Battery fires",
    brands: ["Samsung", "Tecno", "Oraimo", "Anker"],
    accent: "#1E3A5F",
    illustration: "electronics",
  },
];

function CategoryIllustration({ type }: { type: string }) {
  if (type === "cosmetics") {
    return (
      <svg viewBox="0 0 80 100" className="w-20 h-24">
        <defs>
          <linearGradient id="cosmGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D4D4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00A8A8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="25" y="15" width="30" height="6" fill="#1E3A5F" />
        <rect
          x="20"
          y="21"
          width="40"
          height="70"
          fill="url(#cosmGrad)"
          stroke="#00A8A8"
          strokeWidth="1.5"
        />
        <rect x="28" y="35" width="24" height="12" fill="#00A8A8" opacity="0.4" />
        <text
          x="40"
          y="43"
          textAnchor="middle"
          fill="#0A1628"
          fontSize="5"
          fontFamily="monospace"
          fontWeight="bold"
        >
          NIVEA
        </text>
        <rect x="26" y="55" width="28" height="1" fill="#00A8A8" opacity="0.6" />
        <rect x="26" y="60" width="20" height="1" fill="#00A8A8" opacity="0.4" />
      </svg>
    );
  }

  if (type === "food") {
    return (
      <svg viewBox="0 0 80 100" className="w-20 h-24">
        <defs>
          <linearGradient id="foodGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M15 25 L65 25 L60 90 L20 90 Z"
          fill="url(#foodGrad)"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <rect x="20" y="35" width="40" height="18" fill="#F59E0B" opacity="0.4" />
        <text
          x="40"
          y="47"
          textAnchor="middle"
          fill="#0A1628"
          fontSize="7"
          fontFamily="monospace"
          fontWeight="bold"
        >
          PEAK
        </text>
        <line x1="22" y1="60" x2="58" y2="60" stroke="#F59E0B" strokeOpacity="0.5" strokeWidth="0.5" />
        <line x1="22" y1="66" x2="50" y2="66" stroke="#F59E0B" strokeOpacity="0.4" strokeWidth="0.5" />
        <line x1="22" y1="72" x2="54" y2="72" stroke="#F59E0B" strokeOpacity="0.4" strokeWidth="0.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 100" className="w-20 h-24">
      <defs>
        <linearGradient id="elecGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect
        x="22"
        y="18"
        width="36"
        height="72"
        rx="4"
        fill="url(#elecGrad)"
        stroke="#1E3A5F"
        strokeWidth="1.5"
      />
      <rect x="26" y="26" width="28" height="48" fill="#1E3A5F" opacity="0.15" />
      <circle cx="40" cy="82" r="2" fill="#1E3A5F" opacity="0.5" />
      <rect x="34" y="22" width="12" height="1.5" fill="#1E3A5F" opacity="0.5" />
      <rect x="30" y="40" width="20" height="2" fill="#00A8A8" opacity="0.6" />
      <rect x="30" y="46" width="14" height="2" fill="#00A8A8" opacity="0.4" />
    </svg>
  );
}

export function Categories() {
  return (
    <section className="bg-paper border-y border-mist py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-teal-electric" />
            <p className="eyebrow-teal">§ 05 — Category Coverage</p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-navy-deep">
            Three categories.
            <br />
            <span className="italic font-normal text-teal-deep">Every</span> brand.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-ice border border-mist p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,212,212,0.2)] transition-all duration-500"
              style={{ borderTopWidth: "3px", borderTopColor: cat.accent }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-display text-5xl font-extrabold"
                  style={{ color: cat.accent }}
                >
                  {cat.num}
                </span>
                <CategoryIllustration type={cat.illustration} />
              </div>

              <h3 className="font-display text-xl font-bold text-navy-deep mb-6 leading-tight">
                {cat.name}
              </h3>

              <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-mist">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate">
                    {cat.marketNote}
                  </p>
                  <p className="font-display text-2xl font-extrabold text-navy-deep">
                    {cat.market}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate">
                    {cat.growthNote}
                  </p>
                  <p
                    className="font-display text-2xl font-extrabold"
                    style={{ color: cat.accent }}
                  >
                    {cat.growth}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-[9px] uppercase tracking-widest text-alert mb-2">
                  ⚠ Top threat
                </p>
                <p className="text-sm text-graphite font-medium">{cat.threat}</p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate mb-3">
                  Covering brands like
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.brands.map((b) => (
                    <span
                      key={b}
                      className="text-xs font-display font-semibold text-navy-deep border border-mist px-2.5 py-1"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}