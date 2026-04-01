export default function About() {
  const points = [
    {
      hi: "बैहर-सालेटेकरी मार्ग, मलांजखण्ड स्थित प्रमुख मंदिर",
      en: "Prominent temple on Baiher-Saletekari Road, Malanjkhand",
    },
    {
      hi: "हनुमान जयंती, कृष्ण जन्माष्टमी, महाशिवरात्रि पर विशेष आयोजन",
      en: "Grand celebrations on Hanuman Jayanti, Krishna Janmashtami & Mahashivratri",
    },
    {
      hi: "108 हनुमान चालीसा एवं बजरंग बाण पाठ",
      en: "108 Hanuman Chalisa & Bajrang Baan recitation programs",
    },
    {
      hi: "सिंदूर, लाल फूल एवं चोला चढ़ाने की परंपरा",
      en: "Traditional offering of sindoor, red flowers and chola",
    },
    {
      hi: "श्रावण मास में विशेष धार्मिक आयोजन",
      en: "Special religious programs during Shravan month",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6"
      style={{ background: "var(--color-cream)" }}
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
            हमारे बारे में / About Us
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3"
            style={{ color: "var(--color-maroon)" }}
          >
            बजरंग धाम परिचय
          </h2>
          <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
            Bajarang Dham, Malanjkhand — Balaghat, Madhya Pradesh
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="font-hindi text-base leading-relaxed mb-4"
              style={{ color: "var(--color-text-dark)" }}
            >
              बजरंग धाम मलांजखण्ड, मध्य प्रदेश के बालाघाट जिले में स्थित एक प्रमुख हनुमान मंदिर
              है। यह स्थान बैहर-सालेटेकरी मार्ग पर मलांजखण्ड में स्थित है और अपनी धार्मिक
              मान्यता, विशेषकर हनुमान जयंती महोत्सव एवं कृष्ण जन्माष्टमी के लिए प्रसिद्ध है।
              यहाँ भक्त हनुमान चालीसा और बजरंग बाण का पाठ करते हैं।
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--color-text-muted)" }}
            >
              Bajarang Dham is a prominent Hanuman temple located in
              Malanjkhand, Balaghat district, Madhya Pradesh. Situated on
              Baiher-Saletekari Road, it is renowned for its religious
              significance, especially the Hanuman Jayanti Mahotsav and Krishna
              Janmashtami celebrations. Devotees recite Hanuman Chalisa and
              Bajrang Baan here regularly.
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point.hi} className="flex items-start gap-3">
                  <div
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.63 0.19 52 / 0.15)" }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="var(--color-saffron)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span
                      className="font-hindi font-semibold text-sm block"
                      style={{ color: "var(--color-maroon)" }}
                    >
                      {point.hi}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {point.en}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden"
              style={{
                border: "3px solid oklch(0.78 0.14 78 / 0.4)",
                boxShadow:
                  "0 8px 40px oklch(0.38 0.14 22 / 0.2), 0 0 0 8px oklch(0.63 0.19 52 / 0.08)",
              }}
            >
              <img
                src="/assets/screenshot_2026-03-31_100007-019d438e-0d88-75f3-b17e-f72c522cef32.png"
                alt="बजरंग धाम — मलाँजखंड"
                className="w-full aspect-[4/3] object-cover"
              />
              <div
                className="px-6 py-4 text-center"
                style={{ background: "oklch(0.99 0.01 80)" }}
              >
                <p
                  className="font-hindi text-sm font-semibold"
                  style={{ color: "var(--color-maroon)" }}
                >
                  बजरंग धाम — मलाँजखंड
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  बैहर-सालेटेकरी मार्ग, बालाघाट, मध्य प्रदेश
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
