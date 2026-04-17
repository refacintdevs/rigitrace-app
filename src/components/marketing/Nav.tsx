"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoWordmark } from "@/components/ui/LogoMark";

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "How It Works", href: "#how" },
  { label: "Categories", href: "#categories" },
  { label: "For Brands", href: "#brands" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-ice/90 backdrop-blur-md hairline-bottom" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-navy-deep hover:opacity-70 transition-opacity">
          <LogoWordmark />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-graphite hover:text-teal-deep transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#waitlist" className="px-5 py-2 bg-navy-deep text-ice text-sm font-display font-semibold tracking-wide hover:bg-navy transition-colors border-b-2 border-teal-electric">
            Get Early Access
          </a>
        </div>

        <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Toggle menu">
          <span className={`w-5 h-0.5 bg-navy-deep transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`w-5 h-0.5 bg-navy-deep transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-navy-deep transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-ice hairline-top">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-base font-medium text-graphite hover:text-teal-deep transition-colors py-2">
                {link.label}
              </a>
            ))}
            <a href="#waitlist" onClick={() => setMobileOpen(false)} className="mt-2 px-5 py-3 bg-navy-deep text-ice text-sm font-display font-semibold tracking-wide text-center border-b-2 border-teal-electric">
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}