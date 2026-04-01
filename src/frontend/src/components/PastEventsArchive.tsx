const pastEvents = [
  {
    titleHindi: "महाशिवरात्रि महोत्सव",
    titleEnglish: "Maha Shivratri Mahotsav",
    month: "फरवरी 2026",
    location: "बजरंग धाम शिव मंदिर",
    year: "2026",
  },
  {
    titleHindi: "होलिका दहन",
    titleEnglish: "Holika Dahan",
    month: "मार्च 2026",
    location: "बजरंग धाम परिसर",
    year: "2026",
  },
  {
    titleHindi: "श्री हनुमान जयंती महोत्सव",
    titleEnglish: "Shri Hanuman Jayanti Mahotsav",
    month: "अप्रैल 2025",
    location: "बजरंग धाम मंदिर",
    year: "2025",
  },
  {
    titleHindi: "श्री कृष्ण जन्माष्टमी",
    titleEnglish: "Shri Krishna Janmashtami",
    month: "अगस्त 2025",
    location: "बजरंग धाम परिसर",
    year: "2025",
  },
  {
    titleHindi: "महाशिवरात्रि महोत्सव",
    titleEnglish: "Maha Shivratri Mahotsav",
    month: "फरवरी 2025",
    location: "बजरंग धाम शिव मंदिर",
    year: "2025",
  },
  {
    titleHindi: "श्रावण मास आयोजन",
    titleEnglish: "Shravan Maas Aayojan",
    month: "जुलाई–अगस्त 2024",
    location: "बजरंग धाम",
    year: "2024",
  },
  {
    titleHindi: "नवरात्रि महोत्सव",
    titleEnglish: "Navratri Mahotsav",
    month: "अक्टूबर 2024",
    location: "बजरंग धाम",
    year: "2024",
  },
  {
    titleHindi: "दीपावली उत्सव",
    titleEnglish: "Deepawali Utsav",
    month: "नवंबर 2024",
    location: "बजरंग धाम",
    year: "2024",
  },
];

export default function PastEventsArchive() {
  return (
    <section
      id="past-events"
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.96 0.04 78)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="font-hindi text-sm font-medium px-4 py-1.5 rounded-full"
            style={{
              background: "oklch(0.38 0.14 22 / 0.1)",
              color: "var(--color-maroon)",
              border: "1px solid oklch(0.38 0.14 22 / 0.2)",
            }}
          >
            अभिलेखागार / Archive
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-2"
            style={{ color: "var(--color-maroon)" }}
          >
            पुराने कार्यक्रम
          </h2>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Past Programs Archive
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, idx) => (
            <div
              key={`${event.titleEnglish}-${event.year}`}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "oklch(0.99 0.01 80)",
                boxShadow: "0 4px 20px oklch(0.38 0.14 22 / 0.1)",
                border: "1px solid oklch(0.84 0.06 75)",
              }}
              data-ocid={`past-events.item.${idx + 1}`}
            >
              {/* Top accent bar */}
              <div
                className="h-2"
                style={{
                  background:
                    idx % 2 === 0
                      ? "oklch(0.38 0.14 22)"
                      : "oklch(0.63 0.19 52)",
                }}
              />
              <div className="p-5 flex flex-col flex-1">
                {/* Year badge */}
                <div className="mb-3">
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "oklch(0.63 0.19 52 / 0.14)",
                      color: "var(--color-saffron)",
                      border: "1px solid oklch(0.63 0.19 52 / 0.3)",
                    }}
                  >
                    {event.year}
                  </span>
                </div>

                {/* Titles */}
                <h3
                  className="font-hindi font-bold text-lg leading-tight mb-1"
                  style={{ color: "var(--color-maroon)" }}
                >
                  {event.titleHindi}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--color-saffron)" }}
                >
                  {event.titleEnglish}
                </p>

                {/* Meta */}
                <div
                  className="mt-auto pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid oklch(0.84 0.06 75)" }}
                >
                  <span
                    className="font-hindi text-xs flex items-center gap-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    📅 {event.month}
                  </span>
                  <span
                    className="font-hindi text-xs flex items-center gap-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    📍 {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
