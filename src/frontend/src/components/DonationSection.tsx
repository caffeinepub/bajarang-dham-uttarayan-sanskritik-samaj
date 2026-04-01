import {
  Building2,
  Landmark,
  Phone,
  QrCode,
  Users,
  Wrench,
} from "lucide-react";

const renovationItems = [
  {
    icon: Landmark,
    text: "भगवान शिवजी एवं हनुमान जी के मंदिर का नवीनीकरण / रंगरोगन",
  },
  {
    icon: Building2,
    text: "बाउंड्रीवाल एवं फेंसिंग की मरम्मत",
  },
];

export default function DonationSection() {
  return (
    <section
      id="donation"
      className="py-20 px-4 sm:px-6"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="font-hindi text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4"
            style={{
              background: "oklch(0.63 0.19 52 / 0.12)",
              color: "var(--color-saffron)",
              border: "1px solid oklch(0.63 0.19 52 / 0.25)",
            }}
          >
            धर्म एवं सेवा
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-2"
            style={{ color: "var(--color-maroon)" }}
          >
            दान एवं सहयोग
          </h2>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Donate &amp; Support
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        {/* Doha */}
        <div
          className="relative rounded-2xl p-6 sm:p-8 mb-12 overflow-hidden text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.38 0.14 22) 0%, oklch(0.50 0.16 32) 100%)",
            boxShadow: "0 8px 32px oklch(0.38 0.14 22 / 0.25)",
          }}
        >
          <div
            className="absolute top-3 left-6 text-5xl opacity-10 font-hindi select-none"
            aria-hidden="true"
            style={{ color: "oklch(0.78 0.14 78)" }}
          >
            ❝
          </div>
          <div
            className="absolute bottom-3 right-6 text-5xl opacity-10 font-hindi select-none"
            aria-hidden="true"
            style={{ color: "oklch(0.78 0.14 78)" }}
          >
            ❞
          </div>
          <blockquote className="relative z-10">
            <p
              className="font-hindi text-lg sm:text-xl leading-relaxed"
              style={{ color: "oklch(0.93 0.08 75)" }}
            >
              तुलसी पंक्षी के पिये घटे न सरिता नीर,
            </p>
            <p
              className="font-hindi text-lg sm:text-xl leading-relaxed"
              style={{ color: "oklch(0.93 0.08 75)" }}
            >
              धर्म किए धन ना घटे जो सहाय रघुवीर।
            </p>
            <footer
              className="mt-3 font-hindi text-xs"
              style={{ color: "oklch(0.72 0.10 68)" }}
            >
              — संत तुलसीदास
            </footer>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {/* Monthly support */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "oklch(0.99 0.01 80)",
                border: "1.5px solid oklch(0.63 0.19 52 / 0.3)",
                boxShadow: "0 4px 20px oklch(0.63 0.19 52 / 0.10)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                style={{ background: "var(--color-saffron)" }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.63 0.19 52 / 0.12)" }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: "var(--color-saffron)" }}
                  >
                    ₹
                  </span>
                </div>
                <div>
                  <div
                    className="font-hindi text-xs font-semibold mb-1"
                    style={{ color: "var(--color-saffron)" }}
                  >
                    मासिक सहयोग
                  </div>
                  <div
                    className="font-heading text-2xl font-bold mb-1"
                    style={{ color: "var(--color-maroon)" }}
                  >
                    ₹1,100 / माह
                  </div>
                  <p
                    className="font-hindi text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    एक माह की आरती एवं पूजा प्रसाद का सहयोग प्रदान करें
                  </p>
                </div>
              </div>
            </div>

            {/* Renovation needs */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "oklch(0.99 0.01 80)",
                border: "1px solid oklch(0.84 0.06 75)",
                boxShadow: "0 4px 20px oklch(0.38 0.14 22 / 0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Wrench size={18} style={{ color: "var(--color-saffron)" }} />
                <h3
                  className="font-hindi font-bold text-base"
                  style={{ color: "var(--color-maroon)" }}
                >
                  नवीनीकरण कार्य
                </h3>
              </div>
              <ul className="space-y-3">
                {renovationItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-saffron)" }}
                    />
                    <span
                      className="font-hindi text-sm leading-relaxed"
                      style={{ color: "var(--color-text-dark)" }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact persons */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "oklch(0.99 0.01 80)",
                border: "1px solid oklch(0.84 0.06 75)",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Users size={18} style={{ color: "var(--color-saffron)" }} />
                <h3
                  className="font-hindi font-bold text-base"
                  style={{ color: "var(--color-maroon)" }}
                >
                  सम्पर्क सूत्र
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.63 0.19 52 / 0.12)" }}
                  >
                    <Phone
                      size={14}
                      style={{ color: "var(--color-saffron)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-hindi text-sm font-semibold"
                      style={{ color: "var(--color-maroon)" }}
                    >
                      श्री आशीष कुमार
                    </p>
                    <a
                      href="tel:7694062153"
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "var(--color-saffron)" }}
                    >
                      7694062153
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.63 0.19 52 / 0.12)" }}
                  >
                    <Phone
                      size={14}
                      style={{ color: "var(--color-saffron)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-hindi text-sm font-semibold"
                      style={{ color: "var(--color-maroon)" }}
                    >
                      श्री अनिल पांडेय{" "}
                      <span
                        className="text-xs font-normal"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        (पुजारी)
                      </span>
                    </p>
                    <a
                      href="tel:9575526867"
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "var(--color-saffron)" }}
                    >
                      9575526867
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — UPI QR Card */}
          <div className="space-y-6">
            {/* UPI QR Scanner card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 12px 40px oklch(0.38 0.14 22 / 0.2)",
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.38 0.14 22) 0%, oklch(0.48 0.17 30) 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="font-hindi text-xs font-medium mb-0.5"
                      style={{ color: "oklch(0.78 0.14 78)" }}
                    >
                      स्कैन करें और दान करें
                    </p>
                    <h3
                      className="font-heading text-lg font-bold"
                      style={{ color: "oklch(0.99 0.01 80)" }}
                    >
                      UPI Payment
                    </h3>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.78 0.14 78 / 0.2)",
                      border: "1.5px solid oklch(0.78 0.14 78 / 0.4)",
                    }}
                  >
                    <QrCode
                      size={22}
                      style={{ color: "oklch(0.88 0.12 75)" }}
                    />
                  </div>
                </div>
              </div>

              {/* QR Code body */}
              <div
                className="px-6 py-6 flex flex-col items-center"
                style={{
                  background: "oklch(0.99 0.01 80)",
                  border: "1px solid oklch(0.84 0.06 75)",
                  borderTop: "none",
                }}
              >
                <div
                  className="rounded-2xl p-3 mb-4"
                  style={{
                    background: "white",
                    border: "2px solid oklch(0.63 0.19 52 / 0.3)",
                    boxShadow: "0 4px 16px oklch(0.38 0.14 22 / 0.10)",
                  }}
                >
                  <img
                    src="/assets/generated/upi-qr-placeholder-transparent.dim_400x400.png"
                    alt="UPI QR Code for donation"
                    className="w-44 h-44 object-contain"
                  />
                </div>

                <p
                  className="font-hindi text-sm font-semibold text-center mb-1"
                  style={{ color: "var(--color-maroon)" }}
                >
                  UTTARAYAN SAMAJ
                </p>
                <p
                  className="font-hindi text-xs text-center mb-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  PhonePe / Google Pay / Paytm / BHIM से स्कैन करें
                </p>

                <div
                  className="w-full rounded-xl p-3 text-center"
                  style={{
                    background: "oklch(0.63 0.19 52 / 0.08)",
                    border: "1px dashed oklch(0.63 0.19 52 / 0.35)",
                  }}
                >
                  <p
                    className="font-hindi text-xs"
                    style={{ color: "var(--color-saffron)" }}
                  >
                    QR Code स्कैन करके तुरंत दान करें
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-hindi font-bold text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-saffron) 0%, oklch(0.56 0.18 45) 100%)",
                color: "white",
                boxShadow: "0 6px 24px oklch(0.63 0.19 52 / 0.35)",
              }}
            >
              <span className="text-xl" aria-hidden="true">
                🙏
              </span>
              दान करें / Donate Now
            </a>

            <p
              className="font-hindi text-xs text-center"
              style={{ color: "var(--color-text-muted)" }}
            >
              आपके दान की रसीद प्रदान की जाएगी।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
