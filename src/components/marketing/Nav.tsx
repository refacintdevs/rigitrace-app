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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ice/90 backdrop-blur-xl border-b border-mist"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-navy-deep hover:text-teal-deep transition-colors">
          <LogoWordmark />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite hover:text-teal-deep transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-electric group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          <Link
            href="#demo"
            className="px-5 py-2 text-sm font-display font-semibold text-navy-deep hover:text-teal-deep transition-colors"
          >
            Request Demo
          </Link>

          <Link
            href="#waitlist"
            className="relative px-5 py-2 bg-navy-deep text-ice text-sm font-display font-semibold tracking-wide hover:bg-navy transition-colors overflow-hidden group"
          >
            <span className="relative z-10">Protect Your Brand</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-electric" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-navy-deep transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-navy-deep transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-navy-deep transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-ice border-t border-mist">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-graphite hover:text-teal-deep transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-navy-deep text-ice text-sm font-display font-semibold tracking-wide text-center border-b-2 border-teal-electric"
            >
              Protect Your Brand
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}