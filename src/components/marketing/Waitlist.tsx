"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const benefits = [
  { k: "First 5 partners", v: "50% pilot pricing, Year 1" },
  { k: "Data ownership", v: "Your intelligence, your property" },
  { k: "Launch support", v: "Co-announcement with press" },
];

const roles = [
  { value: "brand-protection", label: "Brand Protection / Legal" },
  { value: "marketing", label: "Marketing / Brand" },
  { value: "executive", label: "Executive / C-Suite" },
  { value: "operations", label: "Operations / Supply Chain" },
  { value: "other", label: "Other" },
];

export function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "brand-protection",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="waitlist"
      className="relative bg-navy-deep text-ice py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 212, 0.18) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 168, 168, 0.1) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px" style={{ background: "#00D4D4" }} />
              <p className="eyebrow-teal" style={{ color: "#00D4D4" }}>
                § 07 — Partner With Us
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight mb-8 text-ice">
              Protect your brand
              <br />
              <span
                className="italic font-normal"
                style={{ color: "#00D4D4" }}
              >
                before
              </span>{" "}
              launch.
            </h2>

            <p className="text-xl text-ice/70 mb-10 leading-relaxed">
              Founding brand partners get locked-in pilot pricing, direct access to our product team, and first-right on the counterfeit intelligence for their category.
            </p>

            <div
              className="space-y-5 pt-8 border-t"
              style={{ borderColor: "rgba(226, 232, 240, 0.15)" }}
            >
              {benefits.map((item) => (
                <div key={item.k} className="flex items-start gap-4">
                  <span
                    className="mt-2 w-1 h-1 rounded-full shrink-0"
                    style={{ background: "#00D4D4" }}
                  />
                  <div>
                    <p className="font-display font-semibold text-ice">
                      {item.k}
                    </p>
                    <p className="text-sm text-ice/60">{item.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative backdrop-blur-xl p-8 md:p-10"
              style={{
                background: "rgba(20, 35, 61, 0.6)",
                border: "1px solid rgba(0, 212, 212, 0.3)",
              }}
            >
              {submitted ? (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "#00D4D4" }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0A1628"
                        strokeWidth="3"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p
                      className="eyebrow-teal"
                      style={{ color: "#00D4D4" }}
                    >
                      Request received
                    </p>
                  </div>
                  <p className="font-display text-2xl text-ice font-bold mb-4">
                    Thank you, {formData.name || "partner"}.
                  </p>
                  <p className="text-ice/70 mb-6">
                    Our partnerships team will reach out within 2 business days to schedule your demo.
                  </p>
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "#94A3B8" }}
                  >
                    Reference · RGT-{Date.now().toString().slice(-6)}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="eyebrow-teal block mb-2"
                      style={{ color: "#00D4D4" }}
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Oluwatobi Adekunle"
                      className="w-full bg-transparent px-4 py-3 text-ice placeholder:text-ice/30 outline-none focus:border-teal-electric transition-colors"
                      style={{
                        border: "1px solid rgba(226, 232, 240, 0.2)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="eyebrow-teal block mb-2"
                      style={{ color: "#00D4D4" }}
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-transparent px-4 py-3 text-ice placeholder:text-ice/30 outline-none transition-colors"
                      style={{
                        border: "1px solid rgba(226, 232, 240, 0.2)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="eyebrow-teal block mb-2"
                      style={{ color: "#00D4D4" }}
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="PZ Cussons Nigeria"
                      className="w-full bg-transparent px-4 py-3 text-ice placeholder:text-ice/30 outline-none transition-colors"
                      style={{
                        border: "1px solid rgba(226, 232, 240, 0.2)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="eyebrow-teal block mb-2"
                      style={{ color: "#00D4D4" }}
                    >
                      Your role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-transparent px-4 py-3 text-ice outline-none transition-colors appearance-none cursor-pointer"
                      style={{
                        border: "1px solid rgba(226, 232, 240, 0.2)",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2300D4D4' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        paddingRight: "2.5rem",
                      }}
                    >
                      {roles.map((r) => (
                        <option
                          key={r.value}
                          value={r.value}
                          style={{
                            background: "#14233D",
                            color: "#F8FAFC",
                          }}
                        >
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 font-display font-semibold tracking-wide transition-all hover:opacity-90"
                    style={{ background: "#00D4D4", color: "#0A1628" }}
                  >
                    Request brand demo →
                  </button>

                  <p
                    className="data-label text-center pt-2"
                    style={{ color: "#94A3B8" }}
                  >
                    We respond within 2 business days. No spam. Ever.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}