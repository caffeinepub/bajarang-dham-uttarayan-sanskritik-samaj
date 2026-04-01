const dots = [
  { left: 60, top: 20 },
  { left: 13, top: 38 },
  { left: 80, top: 14 },
  { left: 26, top: 69 },
  { left: 47, top: 7 },
  { left: 34, top: 55 },
  { left: 72, top: 82 },
  { left: 6, top: 91 },
  { left: 55, top: 33 },
  { left: 19, top: 12 },
  { left: 41, top: 78 },
  { left: 65, top: 50 },
  { left: 77, top: 30 },
  { left: 10, top: 60 },
  { left: 50, top: 90 },
  { left: 23, top: 24 },
  { left: 84, top: 5 },
  { left: 38, top: 45 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 70% 50%, oklch(0.48 0.18 55 / 0.3) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, oklch(0.38 0.14 22 / 0.4) 0%, transparent 50%),
          linear-gradient(135deg, oklch(0.30 0.13 22) 0%, oklch(0.42 0.16 28) 40%, oklch(0.52 0.18 45) 70%, oklch(0.62 0.19 55) 100%)
        `,
      }}
    >
      {/* Hanuman Ji image — right side visual */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:flex items-center justify-end"
        aria-hidden="true"
      >
        <div className="relative w-full h-full flex items-center justify-end">
          {/* Soft glow behind image */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: "oklch(0.78 0.14 78)" }}
          />
          <img
            src="/assets/image-019d42b8-19fa-760a-bcc0-9c78c2b1e4dc.png"
            alt="जय हनुमान — ॐ राम रामाया नमः"
            className="relative z-10 object-contain h-full max-h-screen w-auto opacity-90"
            style={{
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.6) 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.6) 70%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Decorative dots */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {dots.map((dot) => (
          <div
            key={`${dot.left}-${dot.top}`}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              background: "oklch(0.78 0.14 78)",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-px flex-1 max-w-12"
              style={{ background: "oklch(0.78 0.14 78 / 0.6)" }}
            />
            <span
              className="font-hindi text-sm font-medium px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.78 0.14 78 / 0.2)",
                border: "1px solid oklch(0.78 0.14 78 / 0.4)",
                color: "oklch(0.92 0.10 78)",
              }}
            >
              श्री हनुमान जी की कृपा से
            </span>
            <div
              className="h-px flex-1 max-w-12"
              style={{ background: "oklch(0.78 0.14 78 / 0.6)" }}
            />
          </div>

          <h1
            className="font-hindi text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            style={{ color: "oklch(0.98 0.02 80)" }}
          >
            जय बजरंगबली!
          </h1>

          <p
            className="font-hindi text-xl sm:text-2xl font-semibold mb-2"
            style={{ color: "oklch(0.88 0.10 65)" }}
          >
            बजरंग धाम — उत्तरायण संस्कृतिक समाज
          </p>
          <p
            className="font-hindi text-base sm:text-lg mb-6"
            style={{ color: "oklch(0.78 0.08 70)" }}
          >
            मलाँजखंड, बालाघाट, मध्यप्रदेश — 481116
          </p>

          <p
            className="text-base sm:text-lg mb-10 max-w-lg"
            style={{ color: "oklch(0.85 0.05 70)" }}
          >
            Bajarang Dham — A Centre of Faith, Culture &amp; Community. Serving
            the people of Malanjkhand and Balaghat with devotion since its
            founding.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#aarti"
              data-ocid="hero.aarti_button"
              className="px-6 py-3 rounded-xl font-semibold font-hindi text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "var(--color-saffron)",
                color: "white",
                boxShadow: "0 4px 16px oklch(0.63 0.19 52 / 0.4)",
              }}
            >
              आरती समय देखें
            </a>
            <a
              href="#about"
              data-ocid="hero.about_button"
              className="px-6 py-3 rounded-xl font-semibold font-hindi text-sm transition-all hover:bg-white/20"
              style={{
                border: "2px solid oklch(0.78 0.14 78 / 0.7)",
                color: "oklch(0.92 0.10 78)",
                backdropFilter: "blur(4px)",
              }}
            >
              हमारे बारे में जानें
            </a>
            <a
              href="#contact"
              data-ocid="hero.contact_button"
              className="px-6 py-3 rounded-xl font-semibold font-hindi text-sm transition-all hover:bg-white/20"
              style={{
                border: "2px solid oklch(0.78 0.14 78 / 0.5)",
                color: "oklch(0.85 0.08 70)",
                backdropFilter: "blur(4px)",
              }}
            >
              संपर्क करें
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-cream))",
        }}
      />
    </section>
  );
}
