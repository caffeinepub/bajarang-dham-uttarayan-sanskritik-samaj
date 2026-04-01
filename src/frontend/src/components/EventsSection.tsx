import type { Event } from "../backend";

interface Props {
  events: Event[];
  loading: boolean;
}

const hanumanjayanti = [
  { time: "प्रातः 5:30", karyakram: "अभिषेक एवं आरती" },
  { time: "प्रातः 7:00", karyakram: "श्री श्री 108 हनुमान चालीसा पाठ एवं सुंदर कांड" },
  { time: "शाम 5:00", karyakram: "भव्य झांकी (सनातन मंदिर से बजरंग धाम)" },
  { time: "शाम 7:00", karyakram: "आरती एवं भोग" },
  { time: "शाम 7:30", karyakram: "महाप्रसाद वितरण" },
  { time: "शाम 8:00", karyakram: "गुलशन म्युजिकल ग्रुप शानदार जागरण (महाराष्ट्र)" },
];

export default function EventsSection({
  events: _events,
  loading: _loading,
}: Props) {
  return (
    <section
      id="events"
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.91 0.05 78)" }}
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
            आयोजन / Programs
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-2"
            style={{ color: "var(--color-maroon)" }}
          >
            आगामी कार्यक्रम एवं उत्सव
          </h2>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Upcoming Events &amp; Celebrations
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        {/* Featured Event – Hanuman Janmotsav */}
        <div
          className="rounded-3xl overflow-hidden mb-12"
          style={{
            background: "oklch(0.99 0.01 80)",
            boxShadow: "0 8px 32px oklch(0.38 0.14 22 / 0.18)",
            border: "2px solid oklch(0.63 0.19 52 / 0.4)",
          }}
        >
          {/* Banner strip */}
          <div
            className="py-3 px-6 text-center"
            style={{ background: "oklch(0.38 0.14 22)" }}
          >
            <p className="font-hindi font-bold text-white text-lg tracking-wide">
              ।। जय श्री राम ।।
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left – Poster Image */}
            <div
              className="lg:w-80 flex-shrink-0 flex items-center justify-center p-6"
              style={{ background: "oklch(0.96 0.04 78)" }}
            >
              <img
                src="/assets/10x10_01.jpg-019d434c-c738-74ab-854a-fe08bcf60780.jpeg"
                alt="श्री हनुमान जी जन्मोत्सव समारोह"
                className="rounded-2xl shadow-lg w-full max-w-xs object-contain"
                style={{ maxHeight: "340px" }}
              />
            </div>

            {/* Right – Details */}
            <div className="flex-1 p-6 sm:p-8">
              <div className="mb-4">
                <span
                  className="inline-block font-hindi text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "oklch(0.63 0.19 52 / 0.14)",
                    color: "var(--color-saffron)",
                    border: "1px solid oklch(0.63 0.19 52 / 0.3)",
                  }}
                >
                  आगामी विशेष आयोजन
                </span>
                <h3
                  className="font-hindi font-extrabold text-2xl sm:text-3xl leading-tight"
                  style={{ color: "var(--color-maroon)" }}
                >
                  श्री हनुमान जी जन्मोत्सव समारोह
                </h3>
                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: "var(--color-saffron)" }}
                >
                  Shri Hanuman Ji Janmotsav Samaroh
                </p>
                <p
                  className="font-hindi text-sm mt-2"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  📅 दिनांक: <strong>02 अप्रैल 2026, गुरूवार</strong>
                  {"  "}📍 स्थान: बजरंग धाम मंदिर, मलांजखण्ड, जिला-बालाघाट (म.प्र.)
                </p>
              </div>

              {/* Schedule Table */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid oklch(0.84 0.06 75)" }}
              >
                <div
                  className="px-4 py-2.5 flex items-center gap-2"
                  style={{ background: "oklch(0.63 0.19 52 / 0.12)" }}
                >
                  <span className="text-base">🧑‍🌯</span>
                  <span
                    className="font-hindi font-bold text-sm"
                    style={{ color: "var(--color-maroon)" }}
                  >
                    कार्यक्रम विवरण
                  </span>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "oklch(0.38 0.14 22)" }}>
                      <th
                        className="font-hindi font-semibold text-white text-left px-4 py-2"
                        style={{ width: "30%" }}
                      >
                        समय
                      </th>
                      <th className="font-hindi font-semibold text-white text-left px-4 py-2">
                        कार्यक्रम
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hanumanjayanti.map((row, idx) => (
                      <tr
                        key={row.time}
                        style={{
                          background:
                            idx % 2 === 0
                              ? "oklch(0.99 0.01 80)"
                              : "oklch(0.96 0.04 78)",
                        }}
                      >
                        <td
                          className="font-hindi font-bold px-4 py-2.5"
                          style={{ color: "var(--color-saffron)" }}
                        >
                          {row.time}
                        </td>
                        <td
                          className="font-hindi px-4 py-2.5"
                          style={{ color: "var(--color-maroon)" }}
                        >
                          {row.karyakram}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom note */}
              <div
                className="mt-5 rounded-xl px-5 py-3 text-center"
                style={{
                  background: "oklch(0.63 0.19 52 / 0.1)",
                  border: "1px solid oklch(0.63 0.19 52 / 0.25)",
                }}
              >
                <p
                  className="font-hindi font-bold text-sm"
                  style={{ color: "var(--color-maroon)" }}
                >
                  हनुमान जन्मोत्सव, विशाल भण्डारा प्रसाद वितरण एवं जागरण कार्यक्रम
                </p>
                <p
                  className="font-hindi text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  आयोजक: श्री हनुमान जन्मोत्सव समारीह मलांजखण्ड
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
