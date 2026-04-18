"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoWordmark } from "@/components/ui/LogoMark";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "For Brands", href: "#brands" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "backdrop-blur-xl border-b"
          : ""
      }`}
      style={{
        backgroundColor: scrolled || mobileOpen ? "rgba(248, 250, 252, 0.95)" : "transparent",
        borderColor: scrolled || mobileOpen ? "#E2E8F0" : "transparent",
        colorScheme: "light",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="hover:opacity-70 transition-opacity"
          style={{ color: "#0A1628" }}
        >
          <LogoWordmark />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-teal-deep transition-colors relative group"
              style={{ color: "#334155" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-electric group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          <Link
            href="#demo"
            className="px-5 py-2 text-sm font-display font-semibold hover:text-teal-deep transition-colors"
            style={{ color: "#0A1628" }}
          >
            Request Demo
          </Link>

          <Link
            href="#waitlist"
            className="relative px-5 py-2 text-sm font-display font-semibold tracking-wide transition-colors overflow-hidden group"
            style={{ backgroundColor: "#0A1628", color: "#F8FAFC" }}
          >
            <span className="relative z-10">Protect Your Brand</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-electric" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-10"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-5 h-0.5 transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
            style={{ backgroundColor: "#0A1628" }}
          />
          <span
            className={`w-5 h-0.5 transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: "#0A1628" }}
          />
          <span
            className={`w-5 h-0.5 transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            style={{ backgroundColor: "#0A1628" }}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "#F8FAFC",
            borderColor: "#E2E8F0",
            colorScheme: "light",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium hover:text-teal-deep transition-colors py-3 border-b border-mist"
                style={{ color: "#334155" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-5 py-3.5 text-sm font-display font-semibold tracking-wide text-center border-b-2 border-teal-electric"
              style={{ backgroundColor: "#0A1628", color: "#F8FAFC" }}
            >
              Protect Your Brand
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}