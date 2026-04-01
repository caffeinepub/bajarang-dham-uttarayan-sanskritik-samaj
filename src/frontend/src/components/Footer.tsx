const quickLinks = [
  { hi: "होम", en: "Home", href: "#home" },
  { hi: "हमारे बारे में", en: "About", href: "#about" },
  { hi: "आरती समय", en: "Aarti", href: "#aarti" },
  { hi: "कार्यक्रम", en: "Events", href: "#events" },
  { hi: "गैलरी", en: "Gallery", href: "#gallery" },
  { hi: "दान / सहयोग", en: "Donate", href: "#donation" },
  { hi: "समाचार", en: "News", href: "#announcements" },
  { hi: "संपर्क", en: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-maroon-dark)",
        borderTop: "4px solid var(--color-saffron)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/image-019d42b8-1532-7583-85db-100556f55fce.png"
                alt="उत्तरायण"
                className="h-10 w-auto rounded-md object-contain flex-shrink-0"
                style={{ maxWidth: 44 }}
              />
              <div>
                <div
                  className="font-hindi font-bold text-base"
                  style={{ color: "oklch(0.98 0.02 80)" }}
                >
                  बजरंग धाम
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.78 0.14 78)" }}
                >
                  Uttarayan Sanskritik Samaj
                </div>
              </div>
            </div>
            <p
              className="font-hindi text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.78 0.08 65)" }}
            >
              धर्म, संस्कृति एवं समाज सेवा का केंद्र। मलाँजखंड, बालाघाट, म.प्र.
            </p>
            <div className="space-y-1">
              <p
                className="font-hindi text-sm"
                style={{ color: "oklch(0.78 0.08 65)" }}
              >
                📞 श्री आशीष कुमार:{" "}
                <a
                  href="tel:7694062153"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "oklch(0.88 0.12 70)" }}
                >
                  7694062153
                </a>
              </p>
              <p
                className="font-hindi text-sm"
                style={{ color: "oklch(0.78 0.08 65)" }}
              >
                📞 श्री अनिल पांडेय:{" "}
                <a
                  href="tel:9575526867"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "oklch(0.88 0.12 70)" }}
                >
                  9575526867
                </a>
              </p>
            </div>
            <p
              className="font-hindi text-lg font-bold mt-5"
              style={{ color: "oklch(0.88 0.12 70)" }}
            >
              जय श्री राम — जय बजरंगबली
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-hindi font-bold text-base mb-5"
              style={{ color: "oklch(0.88 0.12 70)" }}
            >
              त्वरित लिंक / Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="flex items-center gap-2 text-sm transition-colors hover:opacity-80 group"
                    style={{ color: "oklch(0.78 0.08 65)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-transform group-hover:scale-150"
                      style={{ background: "var(--color-saffron)" }}
                    />
                    <span className="font-hindi">{link.hi}</span>
                    <span
                      className="text-xs"
                      style={{ color: "oklch(0.58 0.06 55)" }}
                    >
                      / {link.en}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Address */}
          <div>
            <h4
              className="font-hindi font-bold text-base mb-5"
              style={{ color: "oklch(0.88 0.12 70)" }}
            >
              सोशल मीडिया / Social Media
            </h4>
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "oklch(0.55 0.12 250 / 0.8)" }}
                aria-label="Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
                </svg>
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.65 0.19 52), oklch(0.50 0.20 340))",
                }}
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "oklch(0.55 0.22 30 / 0.9)" }}
                aria-label="YouTube"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="oklch(0.38 0.14 22)"
                  />
                </svg>
              </button>
            </div>
            <p
              className="font-hindi text-sm"
              style={{ color: "oklch(0.78 0.08 65)" }}
            >
              📍 बैहर-सालेटेकरी मार्ग, मलांजखण्ड, बालाघाट, म.प्र.
            </p>
          </div>
        </div>
      </div>

      <div
        className="border-t py-5 px-4 sm:px-6"
        style={{
          borderColor: "oklch(0.50 0.10 22 / 0.5)",
          background: "oklch(0.22 0.10 20)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-hindi text-xs text-center"
            style={{ color: "oklch(0.62 0.06 50)" }}
          >
            &copy; {new Date().getFullYear()} बजरंग धाम, उत्तरायण संस्कृतिक समाज —
            सर्वाधिकार सुरक्षित।
          </p>
          <p className="text-xs" style={{ color: "oklch(0.50 0.05 50)" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "oklch(0.68 0.10 65)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
