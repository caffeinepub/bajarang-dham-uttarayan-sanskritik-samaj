import type { Announcement } from "../backend";
import { Skeleton } from "./ui/skeleton";

interface Props {
  announcements: Announcement[];
  loading: boolean;
}

function formatDateEn(ns: bigint): string {
  const ms = Number(ns / 1_000_000n);
  const d = new Date(ms);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function AnnouncementsSection({
  announcements,
  loading,
}: Props) {
  return (
    <section
      id="announcements"
      className="py-20 px-4 sm:px-6"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="font-hindi text-sm font-medium px-4 py-1.5 rounded-full"
            style={{
              background: "oklch(0.38 0.14 22 / 0.1)",
              color: "var(--color-maroon)",
              border: "1px solid oklch(0.38 0.14 22 / 0.2)",
            }}
          >
            नोटिस / Announcements
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-2"
            style={{ color: "var(--color-maroon)" }}
          >
            समाचार एवं घोषणाएँ
          </h2>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            News &amp; Announcements
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl p-5 space-y-3"
                style={{
                  background: "oklch(0.99 0.01 80)",
                  border: "1px solid oklch(0.84 0.06 75)",
                }}
              >
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        ) : announcements.length === 0 ? (
          <p
            className="text-center font-hindi"
            style={{ color: "var(--color-text-muted)" }}
          >
            अभी कोई घोषणा नहीं है। / No announcements at the moment.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((ann) => (
              <div
                key={String(ann.id)}
                className="rounded-xl p-6 flex flex-col"
                style={{
                  background: "oklch(0.99 0.01 80)",
                  border: "1px solid oklch(0.84 0.06 75)",
                  boxShadow: "0 2px 12px oklch(0.38 0.14 22 / 0.07)",
                }}
              >
                <div
                  className="w-10 h-1 rounded-full mb-4"
                  style={{ background: "var(--color-saffron)" }}
                />
                <h3
                  className="font-hindi font-bold text-base leading-snug mb-2"
                  style={{ color: "var(--color-maroon)" }}
                >
                  {ann.title}
                </h3>
                <p
                  className="font-hindi text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {ann.content}
                </p>
                <div
                  className="flex items-center gap-1.5 mt-auto pt-4"
                  style={{ borderTop: "1px solid oklch(0.84 0.06 75)" }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="1"
                      y="2"
                      width="10"
                      height="9"
                      rx="1.5"
                      stroke="var(--color-saffron)"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <path
                      d="M4 1v2M8 1v2M1 5h10"
                      stroke="var(--color-saffron)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {formatDateEn(ann.date)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
