import { LogoMark } from "@/components/ui/LogoMark";

const footerLinks = {
  Product: [
    { label: "Verify a product", href: "#" },
    { label: "Report a fake", href: "#" },
    { label: "Counterfeit heatmap", href: "#" },
  ],
  Business: [
    { label: "For brands", href: "#" },
    { label: "For retailers", href: "#" },
    { label: "API access", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Press kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
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
                  RIGI<span className="font-normal italic text-teal-deep">TRACE</span>
                </p>
                <p className="data-label">Endgame to counterfeit</p>
              </div>
            </div>
            <p className="text-sm text-slate mt-6 max-w-xs leading-relaxed">
              Nigeria&apos;s product authenticity verification platform. Built in Lagos.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="eyebrow-teal mb-4">{section}</p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-graphite hover:text-teal-deep transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-chevron mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="data-label">© {new Date().getFullYear()} RIGITRACE · All rights reserved</p>
          <p className="data-label">Lagos · Nigeria · v0.1.0</p>
        </div>
      </div>
    </footer>
  );
}