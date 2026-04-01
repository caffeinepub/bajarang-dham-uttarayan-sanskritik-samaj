const leaders = [
  {
    role_hi: "अध्यक्ष",
    role_en: "President",
    name: "श्री एस. के. सिंह",
    name_en: "Shri S K Singh",
    icon: "👑",
  },
  {
    role_hi: "महामंत्री",
    role_en: "General Secretary",
    name: "श्री पी. के. पाण्डेय",
    name_en: "Shri P K Pandey",
    icon: "📜",
  },
  {
    role_hi: "कोषाध्यक्ष",
    role_en: "Treasurer",
    name: "श्री आशीष गुप्ता",
    name_en: "Shri Ashish Gupta",
    icon: "🏛️",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.38 0.14 22 / 0.04) 0%, oklch(0.63 0.19 52 / 0.07) 100%), var(--color-cream)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="font-hindi text-sm font-medium px-4 py-1.5 rounded-full"
            style={{
              background: "oklch(0.63 0.19 52 / 0.12)",
              color: "var(--color-saffron)",
              border: "1px solid oklch(0.63 0.19 52 / 0.25)",
            }}
          >
            पदाधिकारी / Office Bearers
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3"
            style={{ color: "var(--color-maroon)" }}
          >
            संस्था के पदाधिकारी
          </h2>
          <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
            Office Bearers of the Organisation
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.name_en}
              className="rounded-2xl p-8 text-center flex flex-col items-center gap-4 transition-shadow hover:shadow-lg"
              style={{
                background: "oklch(0.99 0.01 80)",
                border: "1.5px solid oklch(0.78 0.14 78 / 0.30)",
                boxShadow: "0 4px 24px oklch(0.38 0.14 22 / 0.08)",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.63 0.19 52 / 0.18) 0%, oklch(0.63 0.19 52 / 0.06) 100%)",
                  border: "2px solid oklch(0.63 0.19 52 / 0.35)",
                }}
              >
                {leader.icon}
              </div>

              {/* Role badge */}
              <div>
                <span
                  className="font-hindi text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.38 0.14 22 / 0.10)",
                    color: "var(--color-maroon)",
                  }}
                >
                  {leader.role_hi}
                </span>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {leader.role_en}
                </p>
              </div>

              {/* Name */}
              <div>
                <p
                  className="font-hindi text-lg font-bold leading-snug"
                  style={{ color: "var(--color-maroon)" }}
                >
                  {leader.name}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {leader.name_en}
                </p>
              </div>

              {/* Decorative divider */}
              <div
                className="w-10 h-0.5 rounded-full"
                style={{ background: "var(--color-saffron)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
