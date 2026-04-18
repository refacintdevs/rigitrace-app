"use client";

import { motion } from "framer-motion";

const partners = ["NAFDAC", "SON", "GS1 NIGERIA", "FCCPC", "LAGOS.GOV"];

export function TrustStack() {
  return (
    <section className="bg-paper border-y border-mist py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="eyebrow-teal whitespace-nowrap">
            Partnerships in progress
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner, i) => (
              <motion.span
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.55, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="font-display font-bold text-lg text-slate tracking-wider hover:opacity-100 transition-opacity cursor-default"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}