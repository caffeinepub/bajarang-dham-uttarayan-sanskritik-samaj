import { useEffect, useState } from "react";

const navLinks = [
  { label: "होम", en: "Home", href: "#home" },
  { label: "हमारे बारे में", en: "About", href: "#about" },
  { label: "पदाधिकारी", en: "Leaders", href: "#leadership" },
  { label: "आरती समय", en: "Aarti", href: "#aarti" },
  { label: "कार्यक्रम", en: "Events", href: "#events" },
  { label: "गैलरी", en: "Gallery", href: "#gallery" },
  { label: "समाचार", en: "News", href: "#announcements" },
  { label: "दान", en: "Donate", href: "#donation" },
  { label: "संपर्क", en: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.99 0.01 80 / 0.97)"
          : "oklch(0.99 0.01 80 / 0.95)",
        boxShadow: scrolled ? "0 2px 16px oklch(0.38 0.14 22 / 0.15)" : "none",
        borderBottom: scrolled
          ? "1px solid oklch(0.84 0.06 75)"
          : "1px solid transparent",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          data-ocid="nav.link"
        >
          {/* Uttarayan logo */}
          <img
            src="/assets/image-019d42b8-1532-7583-85db-100556f55fce.png"
            alt="उत्तरायण"
            className="h-9 w-auto flex-shrink-0 rounded-md object-contain"
            style={{ maxWidth: 48 }}
          />
          <div>
            <div
              className="font-hindi font-bold text-sm leading-tight"
              style={{ color: "var(--color-maroon)" }}
            >
              बजरंग धाम
            </div>
            <div
              className="text-xs leading-tight"
              style={{ color: "var(--color-saffron)" }}
            >
              Uttarayan Sanskritik Samaj
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-orange-50"
              style={{ color: "var(--color-text-dark)" }}
            >
              <span
                className="font-hindi block text-xs leading-tight"
                style={{ color: "var(--color-maroon)" }}
              >
                {link.label}
              </span>
              <span
                className="block text-[9px] leading-tight"
                style={{ color: "var(--color-text-muted)" }}
              >
                {link.en}
              </span>
            </a>
          ))}
          <a
            href="#donation"
            data-ocid="nav.donate_button"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 font-hindi"
            style={{ background: "var(--color-saffron)", color: "white" }}
          >
            दान / Donate ₹
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          data-ocid="nav.toggle"
        >
          <div
            className="w-5 h-0.5 mb-1.5"
            style={{ background: "var(--color-maroon)" }}
          />
          <div
            className="w-5 h-0.5 mb-1.5"
            style={{ background: "var(--color-maroon)" }}
          />
          <div
            className="w-5 h-0.5"
            style={{ background: "var(--color-maroon)" }}
          />
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t px-4 py-4 flex flex-col gap-2"
          style={{
            background: "oklch(0.99 0.01 80)",
            borderColor: "oklch(0.84 0.06 75)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg"
              style={{ color: "var(--color-maroon)" }}
            >
              <span className="font-hindi font-semibold">{link.label}</span>
              <span
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                / {link.en}
              </span>
            </a>
          ))}
          <button
            type="button"
            data-ocid="nav.donate_button"
            onClick={() => {
              setOpen(false);
              window.location.hash = "donation";
            }}
            className="mt-2 py-2 px-4 rounded-lg text-center font-semibold font-hindi"
            style={{ background: "var(--color-saffron)", color: "white" }}
          >
            दान / Donate ₹
          </button>
        </div>
      )}
    </header>
  );
}
