export default function AartiTimings() {
  return (
    <section
      id="aarti"
      className="py-20 px-4 sm:px-6"
      style={{
        background: `
          linear-gradient(160deg,
            oklch(0.26 0.12 22) 0%,
            oklch(0.34 0.14 25) 40%,
            oklch(0.42 0.16 30) 80%,
            oklch(0.48 0.17 40) 100%
          )
        `,
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span
            className="font-hindi text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4"
            style={{
              background: "oklch(0.78 0.14 78 / 0.15)",
              color: "oklch(0.88 0.12 75)",
              border: "1px solid oklch(0.78 0.14 78 / 0.35)",
            }}
          >
            नित्य पूजन एवं आरती
          </span>
          <h2
            className="font-hindi text-3xl sm:text-4xl font-bold mb-2"
            style={{ color: "oklch(0.98 0.02 80)" }}
          >
            आरती समय-सारणी
          </h2>
          <p className="text-sm" style={{ color: "oklch(0.78 0.08 65)" }}>
            Bajarang Dham — Daily Aarti Schedule
          </p>
          <div
            className="mt-4 mx-auto w-20 h-0.5 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        {/* Opening Sloka */}
        <div
          className="relative rounded-2xl p-6 sm:p-8 mb-10 overflow-hidden"
          style={{
            background: "oklch(0.99 0.01 80 / 0.06)",
            border: "1px solid oklch(0.78 0.14 78 / 0.25)",
          }}
        >
          {/* decorative Om */}
          <div
            className="absolute right-6 top-4 text-6xl opacity-10 font-hindi select-none"
            aria-hidden="true"
            style={{ color: "oklch(0.78 0.14 78)" }}
          >
            ॐ
          </div>
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
            style={{ background: "var(--color-saffron)" }}
          />
          <blockquote className="pl-4">
            <p
              className="font-hindi text-base sm:text-lg leading-relaxed mb-3"
              style={{ color: "oklch(0.93 0.08 75)" }}
            >
              अतुलितबलधामं हेमशैलाभदेहं, दनुजवनकृशानुं ज्ञानिनामग्रगण्यम् ।
            </p>
            <p
              className="font-hindi text-base sm:text-lg leading-relaxed"
              style={{ color: "oklch(0.93 0.08 75)" }}
            >
              सकलगुणनिधानं वानराणामधीशं, रघुपतिप्रियभक्तं वातात्मजं नमामि ॥
            </p>
            <footer
              className="mt-4 font-hindi text-xs"
              style={{ color: "oklch(0.68 0.10 65)" }}
            >
              — हनुमान स्तुति
            </footer>
          </blockquote>
        </div>

        {/* Aarti Time Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* Morning Aarti */}
          <div
            className="rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
            data-ocid="aarti.morning.card"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.56 0.18 50) 0%, oklch(0.45 0.16 38) 100%)",
              boxShadow: "0 8px 32px oklch(0.63 0.19 52 / 0.35)",
            }}
          >
            <div
              className="absolute top-3 right-4 text-4xl opacity-20 select-none font-hindi"
              aria-hidden="true"
            >
              🌅
            </div>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "oklch(0.99 0.02 80 / 0.2)" }}
            >
              <span className="text-2xl" aria-hidden="true">
                🪔
              </span>
            </div>
            <h3
              className="font-hindi text-xl font-bold mb-1"
              style={{ color: "oklch(0.99 0.01 80)" }}
            >
              प्रात:कालीन आरती
            </h3>
            <p
              className="font-hindi text-sm mb-4"
              style={{ color: "oklch(0.92 0.08 75)" }}
            >
              Morning Aarti
            </p>
            <div
              className="text-4xl font-bold font-heading"
              style={{ color: "oklch(0.99 0.01 80)" }}
            >
              7:30
            </div>
            <div
              className="font-hindi text-sm mt-1"
              style={{ color: "oklch(0.92 0.08 75)" }}
            >
              सुबह — AM
            </div>
          </div>

          {/* Evening Aarti */}
          <div
            className="rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
            data-ocid="aarti.evening.card"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.32 0.13 22) 0%, oklch(0.26 0.12 18) 100%)",
              boxShadow: "0 8px 32px oklch(0.26 0.12 18 / 0.5)",
              border: "1px solid oklch(0.78 0.14 78 / 0.2)",
            }}
          >
            <div
              className="absolute top-3 right-4 text-4xl opacity-20 select-none"
              aria-hidden="true"
            >
              🌇
            </div>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background: "oklch(0.78 0.14 78 / 0.15)",
                border: "1px solid oklch(0.78 0.14 78 / 0.3)",
              }}
            >
              <span className="text-2xl" aria-hidden="true">
                🪔
              </span>
            </div>
            <h3
              className="font-hindi text-xl font-bold mb-1"
              style={{ color: "oklch(0.98 0.02 80)" }}
            >
              संध्या आरती
            </h3>
            <p
              className="font-hindi text-sm mb-4"
              style={{ color: "oklch(0.78 0.14 78)" }}
            >
              Evening Aarti
            </p>
            <div
              className="text-4xl font-bold font-heading"
              style={{ color: "oklch(0.88 0.12 75)" }}
            >
              7:15
            </div>
            <div
              className="font-hindi text-sm mt-1"
              style={{ color: "oklch(0.78 0.08 65)" }}
            >
              सायं — PM
            </div>
          </div>
        </div>

        {/* Invitation text */}
        <div
          className="text-center rounded-xl px-6 py-5 mb-10"
          style={{
            background: "oklch(0.78 0.14 78 / 0.10)",
            border: "1px solid oklch(0.78 0.14 78 / 0.2)",
          }}
        >
          <p
            className="font-hindi text-base sm:text-lg leading-relaxed"
            style={{ color: "oklch(0.92 0.08 75)" }}
          >
            आप सभी से निवेदन है यथा सम्भव आरती में शामिल होकर पुण्य के भागी बनें।
          </p>
          <p className="text-sm mt-1" style={{ color: "oklch(0.72 0.06 60)" }}>
            All devotees are cordially invited to join the daily Aarti.
          </p>
        </div>

        {/* Mini Slokas */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: "oklch(0.99 0.01 80 / 0.05)",
              border: "1px solid oklch(0.78 0.14 78 / 0.18)",
            }}
          >
            <div
              className="absolute right-3 bottom-2 text-5xl opacity-[0.07] font-hindi select-none"
              aria-hidden="true"
            >
              ॐ
            </div>
            <p
              className="font-hindi text-sm leading-relaxed"
              style={{ color: "oklch(0.85 0.08 70)" }}
            >
              अज्जनागर्भ सम्भूत कपीन्द्र सचिवोत्तम।
            </p>
            <p
              className="font-hindi text-sm leading-relaxed mt-1"
              style={{ color: "oklch(0.85 0.08 70)" }}
            >
              रामप्रिय नमस्तुभ्यं हनुमन् रक्ष सर्वदा।।
            </p>
          </div>
          <div
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: "oklch(0.99 0.01 80 / 0.05)",
              border: "1px solid oklch(0.78 0.14 78 / 0.18)",
            }}
          >
            <div
              className="absolute right-3 bottom-2 text-5xl opacity-[0.07] font-hindi select-none"
              aria-hidden="true"
            >
              ॐ
            </div>
            <p
              className="font-hindi text-sm leading-relaxed"
              style={{ color: "oklch(0.85 0.08 70)" }}
            >
              नासै रोग हरै सब पीरा।
            </p>
            <p
              className="font-hindi text-sm leading-relaxed mt-1"
              style={{ color: "oklch(0.85 0.08 70)" }}
            >
              जो सुमिरै हनुमत बलबीरा।।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
