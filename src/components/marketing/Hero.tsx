export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden teal-glow">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="absolute top-20 left-0 right-0 hairline-bottom bg-ice/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="eyebrow reveal reveal-1">File · RGT-2026-001</span>
          <span className="eyebrow reveal reveal-1 hidden sm:inline">Lagos · Nigeria</span>
          <span className="eyebrow-teal reveal reveal-1">◉ System Live</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center gap-3 reveal reveal-2 mb-8">
          <span className="w-12 h-px bg-teal-electric" />
          <p className="eyebrow-teal">Product Authenticity Infrastructure — Est. 2026</p>
        </div>

        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-tight text-navy-deep reveal reveal-3 max-w-5xl">
          Counterfeits
          <br />
          <span className="italic font-normal text-teal-deep">end</span> here.
        </h1>

        <div className="divider-chevron my-12 max-w-3xl reveal reveal-4" />

        <p className="text-xl md:text-2xl text-graphite max-w-2xl leading-relaxed reveal reveal-5">
          Scan any product. Know if it&apos;s real. In seconds.
        </p>
        <p className="text-lg md:text-xl text-slate max-w-2xl mt-2 reveal reveal-5">
          Nigeria&apos;s product authenticity verification platform — for cosmetics, packaged food, and electronics.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal reveal-6">
          <a href="#waitlist" className="group relative px-8 py-4 bg-navy-deep text-ice font-display font-semibold tracking-wide overflow-hidden transition-all duration-200 text-center hover:bg-navy">
            <span className="relative z-10">Get Early Access →</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-electric" />
          </a>
          <a href="#how" className="px-8 py-4 hairline-teal text-navy-deep font-display font-semibold tracking-wide hover:bg-teal-soft transition-colors duration-200 text-center">
            See how it works
          </a>
        </div>

        <div className="mt-20 flex items-center gap-4 reveal reveal-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-verified rounded-full pulse-teal" />
            <span className="data-label text-verified">System Online</span>
          </div>
          <span className="data-label">v0.1.0 · {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}