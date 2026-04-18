"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString();
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, to, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  {
    value: 2.5,
    decimals: 1,
    prefix: "₦",
    suffix: "T",
    label: "Annual counterfeit market in Nigeria",
    context: "NAFDAC estimate · 2024",
    emphasis: true,
  },
  {
    value: 60,
    suffix: "%",
    label: "Fake drugs in sub-Saharan Africa",
    context: "WHO global data",
    emphasis: false,
  },
  {
    value: 200,
    suffix: "M+",
    label: "Nigerian consumers exposed",
    context: "Across all income levels",
    emphasis: false,
  },
  {
    value: 40,
    suffix: "%",
    label: "Fake tech goods in open markets",
    context: "Alaba · Computer Village",
    emphasis: true,
  },
];

export function Stats() {
  return (
    <section className="relative bg-navy-deep text-ice overflow-hidden py-24">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 212, 0.12) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-teal-electric" />
            <p className="eyebrow-teal" style={{ color: "#00D4D4" }}>
              § 01 — Market Reality
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-ice">
            Every day your brand sits on a shelf, a fake version sits beside it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-6"
              style={{
                borderLeft: stat.emphasis
                  ? "2px solid #00D4D4"
                  : "1px solid rgba(226, 232, 240, 0.15)",
              }}
            >
              <div
                className="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-none"
                style={{ color: stat.emphasis ? "#00D4D4" : "#F8FAFC" }}
              >
                <Counter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="mt-4 text-sm text-ice font-medium leading-snug">
                {stat.label}
              </p>
              <p
                className="mt-2 font-mono text-[10px] uppercase tracking-widest"
                style={{ color: "#94A3B8" }}
              >
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}