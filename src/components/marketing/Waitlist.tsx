"use client";

import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"consumer" | "brand" | "retailer">("consumer");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, role });
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative bg-navy-deep text-ice py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 212, 0.15) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px" style={{ background: "#00D4D4" }} />
            <p className="eyebrow-teal" style={{ color: "#00D4D4" }}>§ 04 — Join</p>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight mb-8 text-ice">
            Be first
            <br />
            to the{" "}
            <span className="italic font-normal" style={{ color: "#00D4D4" }}>
              endgame.
            </span>
          </h2>

          <p className="text-xl text-ice/70 mb-12 leading-relaxed">
            RIGITRACE launches in Lagos — cosmetics first, food and electronics close behind. Get early access before public release.
          </p>

          {submitted ? (
            <div
              className="p-8 border-l-4"
              style={{
                borderLeftColor: "#00D4D4",
                background: "rgba(0, 212, 212, 0.08)",
              }}
            >
              <p className="eyebrow-teal mb-2" style={{ color: "#00D4D4" }}>
                ✓ Registered
              </p>
              <p className="text-lg text-ice">
                Your place is held. We&apos;ll reach out when early access opens.
              </p>
              <p className="data-label mt-4" style={{ color: "#CBD5E1" }}>
                Confirmation · {new Date().toISOString().slice(0, 19).replace("T", " ")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="eyebrow-teal block mb-3" style={{ color: "#00D4D4" }}>
                  I am a
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["consumer", "brand", "retailer"] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className="py-3 px-4 text-sm font-display font-semibold capitalize tracking-wide transition-all"
                      style={
                        role === r
                          ? { background: "#00D4D4", color: "#0A1628", border: "1px solid #00D4D4" }
                          : { background: "transparent", color: "#CBD5E1", border: "1px solid rgba(226, 232, 240, 0.2)" }
                      }
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="eyebrow-teal block mb-3" style={{ color: "#00D4D4" }}>
                  Email address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="flex-1 bg-transparent px-4 py-3 text-ice placeholder:text-ice/40 outline-none transition-colors"
                    style={{ border: "1px solid rgba(226, 232, 240, 0.2)" }}
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 font-display font-semibold tracking-wide transition-colors"
                    style={{ background: "#00D4D4", color: "#0A1628" }}
                  >
                    Join the waitlist →
                  </button>
                </div>
              </div>

              <p className="data-label" style={{ color: "#CBD5E1" }}>
                Your email stays ours. Ours stays off ad networks.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}