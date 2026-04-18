import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";

const footerLinks = {
  Platform: [
    { label: "How it works", href: "#platform" },
    { label: "Intelligence", href: "#intelligence" },
    { label: "Pricing", href: "#pricing" },
    { label: "API access", href: "#" },
  ],
  Solutions: [
    { label: "For cosmetics brands", href: "#" },
    { label: "For food brands", href: "#" },
    { label: "For electronics brands", href: "#" },
    { label: "For retailers", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Press kit", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#waitlist" },
  ],
  Legal: [
    { label: "Privacy policy", href: "#" },
    { label: "Terms of service", href: "#" },
    { label: "Data processing", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ice relative">
      <div className="h-0.5 bg-teal-electric" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={40} className="text-navy-deep" />
              <div>
                <p className="font-display font-extrabold text-xl tracking-tight text-navy-deep">
                  RIGI
                  <span className="font-normal italic text-teal-deep">TRACE</span>
                </p>
                <p className="data-label">Endgame to counterfeit</p>
              </div>
            </div>

            <p className="text-sm text-slate mt-6 max-w-xs leading-relaxed">
              Nigeria&apos;s brand protection and counterfeit intelligence platform. Built in Lagos. Deployed nationwide.
            </p>

            <div className="mt-8 pt-6 border-t border-mist">
              <p className="eyebrow-teal mb-3">In partnership with</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-display font-bold text-xs text-slate tracking-wider">
                <span>NAFDAC</span>
                <span className="text-hairline">·</span>
                <span>SON</span>
                <span className="text-hairline">·</span>
                <span>GS1 NG</span>
                <span className="text-hairline">·</span>
                <span>FCCPC</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="eyebrow-teal mb-4">{section}</p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-graphite hover:text-teal-deep transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-chevron mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="data-label">
            © {new Date().getFullYear()} RIGITRACE · All rights reserved
          </p>
          <p className="data-label">Lagos · Nigeria · v0.1.0</p>
        </div>
      </div>
    </footer>
  );
}