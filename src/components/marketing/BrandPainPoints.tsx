"use client";

import { motion } from "framer-motion";

const pains = [
  {
    num: "01",
    title: "Revenue erosion",
    body: "Every counterfeit unit sold is a unit your brand did not sell. Multiplied across a year, this is nine-figure revenue leaking out of the category.",
    stat: "-18%",
    statLabel: "Avg. revenue loss per category",
  },
  {
    num: "02",
    title: "Reputation damage",
    body: "Consumers who buy a fake version of your product blame your brand when it fails. They do not know it was counterfeit. They just stop buying.",
    stat: "2.3x",
    statLabel: "Drop in repeat purchase",
  },
  {
    num: "03",
    title: "Zero visibility",
    body: "You know counterfeits exist. You do not know where they are sold, which batches they mimic, or how consumers are spotting them.",
    stat: "0%",
    statLabel: "Current market intelligence",
  },
];

export function BrandPainPoints() {
  return (
    <section id="brands" className="bg-ice py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-teal-electric" />
            <p className="eyebrow-teal">§ 02 — The Brand Problem</p>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-navy-deep">
            Counterfeits cost you
            <br />
            <span className="italic font-normal text-teal-deep">three</span> ways.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-paper border border-mist p-8 hover:border-teal-electric transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,212,212,0.25)]"
            >
              <span className="font-mono text-sm text-teal-deep font-bold">
                {p.num}
              </span>

              <h3 className="font-display text-2xl font-bold text-navy-deep mt-4 mb-4">
                {p.title}
              </h3>

              <p className="text-graphite leading-relaxed mb-8">{p.body}</p>

              <div className="pt-6 border-t border-mist">
                <div className="font-display text-4xl font-extrabold text-alert tracking-tight">
                  {p.stat}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate mt-1">
                  {p.statLabel}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-0 h-0.5 bg-teal-electric group-hover:w-full transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}