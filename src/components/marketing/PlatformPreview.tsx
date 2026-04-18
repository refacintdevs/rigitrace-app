"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Real-time verification events",
  "Geotagged fake reports",
  "Batch-level intelligence",
  "Weekly executive briefings",
];

const metrics = [
  { label: "Scans today", value: "2,847", change: "+18%", alert: false },
  { label: "Fakes reported", value: "43", change: "+7", alert: true },
  { label: "Hotspots", value: "12", change: "Lagos", alert: false },
];

const alerts = [
  { loc: "Balogun Market, Lagos Island", batch: "A2407", time: "2m ago" },
  { loc: "Aba Road, Port Harcourt", batch: "A2406", time: "14m ago" },
  { loc: "Computer Village, Ikeja", batch: "B2208", time: "31m ago" },
];

const chartPoints = [
  [0, 60], [40, 45], [80, 50], [120, 30], [160, 35],
  [200, 20], [240, 25], [280, 10], [300, 15],
];

export function PlatformPreview() {
  return (
    <section
      id="platform"
      className="relative bg-navy-deep text-ice py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-teal-electric" />
              <p className="eyebrow-teal" style={{ color: "#00D4D4" }}>
                § 03 — The Platform
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[0.95] tracking-tight mb-8 text-ice">
              One dashboard.
              <br />
              <span className="italic font-normal" style={{ color: "#00D4D4" }}>
                Every
              </span>{" "}
              fake, mapped.
            </h2>

            <p className="text-lg text-ice/70 leading-relaxed mb-8">
              When a consumer scans your product, you know. When they report a fake, you know where. When counterfeits cluster, you see the hotspot.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00D4D4"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-ice">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="#demo"
              className="inline-flex items-center gap-2 font-display font-semibold hover:gap-3 transition-all"
              style={{ color: "#00D4D4" }}
            >
              Request full walkthrough →
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div
              className="bg-ice text-navy-deep overflow-hidden border"
              style={{
                borderColor: "rgba(0, 212, 212, 0.3)",
                boxShadow: "0 40px 80px -20px rgba(0, 212, 212, 0.3)",
              }}
            >
              <div className="bg-paper border-b border-mist px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-alert/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-signal/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-verified/40" />
                  </div>
                  <span className="font-mono text-[10px] text-slate">
                    rigitrace.com/brands/nivea
                  </span>
                </div>
                <span className="font-mono text-[10px] text-verified">
                  ● LIVE
                </span>
              </div>

              <div className="p-5 bg-ice">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="border border-mist p-3 bg-paper"
                    >
                      <p className="font-mono text-[9px] uppercase tracking-widest text-slate mb-1">
                        {m.label}
                      </p>
                      <p className="font-display text-2xl font-extrabold text-navy-deep leading-none">
                        {m.value}
                      </p>
                      <p
                        className={`font-mono text-[10px] mt-2 ${
                          m.alert ? "text-alert" : "text-verified"
                        }`}
                      >
                        {m.change}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border border-mist p-4 mb-4 bg-paper">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-slate">
                      Weekly verifications
                    </p>
                    <p className="font-mono text-[9px] text-teal-deep">
                      +24% WoW
                    </p>
                  </div>
                  <svg viewBox="0 0 300 80" className="w-full h-16">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00D4D4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00D4D4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,60 L40,45 L80,50 L120,30 L160,35 L200,20 L240,25 L280,10 L300,15 L300,80 L0,80 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M0,60 L40,45 L80,50 L120,30 L160,35 L200,20 L240,25 L280,10 L300,15"
                      fill="none"
                      stroke="#00A8A8"
                      strokeWidth="2"
                    />
                    {chartPoints.map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="3" fill="#00D4D4" />
                    ))}
                  </svg>
                </div>

                <div className="border border-mist bg-paper">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate px-4 py-2 border-b border-mist">
                    Recent counterfeit alerts
                  </p>
                  {alerts.map((alert, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-2 border-b border-mist last:border-b-0 hover:bg-alert-soft/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-alert rounded-full" />
                        <span className="text-xs text-navy-deep font-medium">
                          {alert.loc}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-slate">
                          batch {alert.batch}
                        </span>
                        <span className="font-mono text-[10px] text-slate">
                          {alert.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}