"use client";

import { motion } from "framer-motion";

export function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      <div className="relative bg-navy-deep rounded-[2.5rem] p-3 shadow-[0_30px_80px_-20px_rgba(0,212,212,0.4)]">
        <div className="absolute -inset-4 bg-teal-electric/20 blur-3xl rounded-[3rem] -z-10" />

        <div className="bg-ice rounded-[2rem] overflow-hidden">
          <div className="relative bg-navy-deep h-6 flex items-center justify-center">
            <div className="w-20 h-4 bg-navy-deep rounded-b-xl" />
          </div>

          <div className="p-5 min-h-[520px] bg-gradient-to-b from-ice to-teal-soft">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[9px] font-bold text-navy-deep tracking-widest">RIGITRACE</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-verified rounded-full animate-pulse" />
                <span className="font-mono text-[9px] text-verified">LIVE</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.1, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper border-2 border-verified p-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-verified text-ice px-2 py-0.5 font-mono text-[8px] font-bold tracking-widest">
                VERIFIED
              </div>

              <div className="flex items-center gap-2 mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-display font-extrabold text-base text-verified">AUTHENTIC</span>
              </div>

              <p className="font-display font-bold text-lg text-navy-deep leading-tight mb-2">
                Nivea Soft
                <br />
                Moisturizing Cream
              </p>
              <p className="text-[10px] text-slate mb-3">Beiersdorf Nigeria Ltd.</p>

              <div className="space-y-1.5 text-[10px] font-mono">
                <div className="flex justify-between border-b border-mist pb-1">
                  <span className="text-slate">NAFDAC</span>
                  <span className="text-navy-deep">04-9572L</span>
                </div>
                <div className="flex justify-between border-b border-mist pb-1">
                  <span className="text-slate">BATCH</span>
                  <span className="text-navy-deep">A2407</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">EXPIRES</span>
                  <span className="text-navy-deep">2027-03</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-mist">
                <p className="font-mono text-[8px] text-slate">VERIFIED 14:32:08 · LAGOS</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              className="mt-5 bg-navy-deep text-ice py-3 text-center font-display font-semibold text-sm tracking-wide"
            >
              Scan another product
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="mt-4 grid grid-cols-2 gap-2"
            >
              <div className="border border-mist p-2">
                <p className="font-mono text-[8px] text-slate">TODAY</p>
                <p className="font-display font-bold text-sm text-navy-deep">12 scans</p>
              </div>
              <div className="border border-mist p-2">
                <p className="font-mono text-[8px] text-slate">ACCURACY</p>
                <p className="font-display font-bold text-sm text-teal-deep">98.2%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ top: "20%" }}
        animate={{ top: "80%" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="absolute left-6 right-6 h-0.5 bg-teal-electric shadow-[0_0_20px_#00D4D4] pointer-events-none"
      />
    </div>
  );
}