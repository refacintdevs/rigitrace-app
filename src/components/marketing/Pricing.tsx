"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    tagline: "One brand. One category.",
    price: "₦150,000",
    unit: "/month",
    features: [
      "Up to 50 SKUs",
      "Real-time verification events",
      "Weekly counterfeit reports",
      "Fake report notifications",
      "Email support",
    ],
    cta: "Start with a pilot",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Multi-brand portfolio.",
    price: "₦350,000",
    unit: "/month",
    features: [
      "Up to 200 SKUs",
      "Geotagged heatmap access",
      "Daily intelligence briefs",
      "Batch-level analytics",
      "Priority support + SLA",
      "Quarterly strategy review",
    ],
    cta: "Request demo",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Custom. Negotiated.",
    price: "Custom",
    unit: "",
    features: [
      "Unlimited SKUs",
      "White-label scanning portal",
      "API access",
      "Dedicated account team",
      "Legal evidence packaging",
      "Regulatory coordination (NAFDAC, SON)",
    ],
    cta: "Talk to our team",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-ice py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-teal-electric" />
            <p className="eyebrow-teal">§ 06 — Pricing</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[0.95] tracking-tight text-navy-deep mb-4">
            Brand protection, priced in naira.
          </h2>
          <p className="text-lg text-graphite">
            No dollar licensing. No overseas vendor tax. Built here, priced here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                tier.featured
                  ? "relative p-8 transition-all duration-300 bg-navy-deep text-ice md:scale-[1.03]"
                  : "relative p-8 transition-all duration-300 bg-paper border border-mist hover:border-teal-electric"
              }
              style={
                tier.featured
                  ? { boxShadow: "0 30px 60px -20px rgba(0, 212, 212, 0.4)" }
                  : {}
              }
            >
              {tier.featured && (
                <div
                  className="absolute -top-3 left-8 px-3 py-1 font-mono text-[10px] font-bold tracking-widest"
                  style={{ background: "#00D4D4", color: "#0A1628" }}
                >
                  MOST PARTNERS PICK THIS
                </div>
              )}

              <h3
                className={
                  tier.featured
                    ? "font-display text-2xl font-extrabold mb-1 text-ice"
                    : "font-display text-2xl font-extrabold mb-1 text-navy-deep"
                }
              >
                {tier.name}
              </h3>
              <p
                className={
                  tier.featured
                    ? "text-sm mb-8 text-ice/70"
                    : "text-sm mb-8 text-slate"
                }
              >
                {tier.tagline}
              </p>

              <div className="mb-8">
                <span
                  className="font-display text-4xl font-extrabold"
                  style={
                    tier.featured
                      ? { color: "#00D4D4" }
                      : { color: "#0A1628" }
                  }
                >
                  {tier.price}
                </span>
                <span
                  className={
                    tier.featured
                      ? "font-mono text-sm text-ice/60"
                      : "font-mono text-sm text-slate"
                  }
                >
                  {tier.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={
                      tier.featured
                        ? "flex items-start gap-3 text-sm text-ice/90"
                        : "flex items-start gap-3 text-sm text-graphite"
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={tier.featured ? "#00D4D4" : "#00A8A8"}
                      strokeWidth="2.5"
                      className="mt-0.5 shrink-0"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#waitlist"
                className={
                  tier.featured
                    ? "block text-center py-3 font-display font-semibold tracking-wide transition-colors"
                    : "block text-center py-3 font-display font-semibold tracking-wide transition-colors border border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-ice"
                }
                style={
                  tier.featured
                    ? { background: "#00D4D4", color: "#0A1628" }
                    : {}
                }
              >
                {tier.cta} →
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 font-mono text-xs text-slate tracking-widest uppercase">
          Pilot programs negotiable · 90-day money-back commitment
        </p>
      </div>
    </section>
  );
}