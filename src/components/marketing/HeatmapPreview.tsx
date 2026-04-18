"use client";

import { motion } from "framer-motion";

const hotspots = [
  { cx: 180, cy: 200, r: 18, intensity: 0.9, name: "Balogun" },
  { cx: 220, cy: 230, r: 14, intensity: 0.7, name: "Lagos Island" },
  { cx: 150, cy: 180, r: 22, intensity: 1, name: "Alaba" },
  { cx: 260, cy: 170, r: 12, intensity: 0.5, name: "Ikeja" },
  { cx: 200, cy: 260, r: 10, intensity: 0.4, name: "Mushin" },
  { cx: 280, cy: 220, r: 16, intensity: 0.8, name: "Computer Village" },
];

const bullets = [
  "6 active Lagos hotspots identified",
  "Weighted by fake-report density",
  "Cross-referenced with batch codes",
  "Exportable as PDF briefings",
];

export function HeatmapPreview() {
  return (
    <section id="intelligence" className="bg-ice py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-navy-deep p-8 overflow-hidden"
            >
              <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                <span className="w-1.5 h-1.5 bg-verified rounded-full animate-pulse" />
                <p
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: "#00D4D4" }}
                >
                  Live · Lagos Metropolitan
                </p>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <p className="font-mono text-[10px] text-ice/60">
                  6.5244° N, 3.3792° E
                </p>
              </div>

              <svg viewBox="0 0 400 400" className="w-full h-auto mt-8">
                <defs>
                  <pattern
                    id="grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="#00D4D4"
                      strokeOpacity="0.1"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <radialGradient id="heatGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="400" height="400" fill="url(#grid)" />

                <path
                  d="M0,320 Q80,300 160,310 T320,290 Q380,295 400,280 L400,400 L0,400 Z"
                  fill="#00D4D4"
                  fillOpacity="0.08"
                  stroke="#00D4D4"
                  strokeOpacity="0.2"
                  strokeWidth="0.5"
                />

                {hotspots.map((spot, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={spot.cx}
                      cy={spot.cy}
                      r={spot.r * 2}
                      fill="url(#heatGrad)"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: spot.intensity, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                    />
                    <motion.circle
                      cx={spot.cx}
                      cy={spot.cy}
                      r="2"
                      fill="#DC2626"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                    >
                      <animate
                        attributeName="r"
                        values="2;6;2"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="1;0.3;1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </motion.circle>
                    <motion.text
                      x={spot.cx + 10}
                      y={spot.cy + 3}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.6 }}
                      className="fill-ice font-mono"
                      fontSize="9"
                    >
                      {spot.name}
                    </motion.text>
                  </g>
                ))}
              </svg>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-teal-electric/20">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-alert rounded-full" />
                    <span className="font-mono text-[10px] text-ice/70">
                      High density
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-signal rounded-full" />
                    <span className="font-mono text-[10px] text-ice/70">
                      Emerging
                    </span>
                  </div>
                </div>
                <p className="font-mono text-[10px] text-ice/50">
                  Last sync 00:47 ago
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-teal-electric" />
              <p className="eyebrow-teal">§ 04 — Counterfeit Intelligence</p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[0.95] tracking-tight text-navy-deep mb-8">
              The first heatmap of Nigerian counterfeit trade.
            </h2>

            <p className="text-lg text-graphite leading-relaxed mb-8">
              Every scan, every fake report, every suspicious batch plotted to a living map. Updated in real time. Delivered to your intelligence team monthly.
            </p>

            <ul className="space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-graphite">
                  <span className="mt-2 w-1 h-1 bg-teal-electric rounded-full shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}