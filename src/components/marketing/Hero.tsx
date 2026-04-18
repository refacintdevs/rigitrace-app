"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden teal-glow">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="absolute top-20 left-0 right-0 border-b border-mist bg-ice/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="eyebrow">File · RGT-2026-001</span>
          <span className="eyebrow hidden sm:inline">Lagos · Nigeria</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-verified rounded-full animate-pulse" />
            <span className="eyebrow-teal">System Live</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-px bg-teal-electric" />
              <p className="eyebrow-teal">Brand Protection Infrastructure — Nigeria</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight text-navy-deep"
            >
              Your brand is being
              <br />
              <span className="italic font-normal text-teal-deep">counterfeited</span>
              <br />
              right now.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-xl text-graphite max-w-xl leading-relaxed"
            >
              RIGITRACE gives Nigerian brands a direct line to the consumers buying their fakes — with a verification app, counterfeit intelligence, and real-time market heatmaps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#demo"
                className="group relative px-7 py-3.5 bg-navy-deep text-ice font-display font-semibold tracking-wide overflow-hidden transition-all duration-200 text-center hover:bg-navy"
              >
                <span className="relative z-10">Request Brand Demo →</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-electric" />
              </Link>
              <Link
                href="#platform"
                className="px-7 py-3.5 border border-navy-deep text-navy-deep font-display font-semibold tracking-wide hover:bg-teal-soft hover:border-teal-deep transition-colors text-center"
              >
                See the platform
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-mist max-w-md"
            >
              <p className="eyebrow mb-3">Built for</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-display font-semibold text-sm text-slate">
                <span>Cosmetics</span>
                <span className="text-hairline">/</span>
                <span>Packaged Food</span>
                <span className="text-hairline">/</span>
                <span>Electronics</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}