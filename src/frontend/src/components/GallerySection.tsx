import type { GalleryItem } from "../backend";
import { Skeleton } from "./ui/skeleton";

interface Props {
  items: GalleryItem[];
  loading: boolean;
}

const skeletonKeys = [
  "sk1",
  "sk2",
  "sk3",
  "sk4",
  "sk5",
  "sk6",
  "sk7",
  "sk8",
  "sk9",
  "sk10",
];

const realPhotos = [
  {
    id: "p1",
    title: "हनुमान जी की सजी मूर्ति",
    imageUrl: "/assets/unnamed_1-019d438e-04e6-7407-a4e2-46e2dcedf825.webp",
  },
  {
    id: "p2",
    title: "श्री बजरंग बली",
    imageUrl: "/assets/unnamed-019d438e-04e5-7794-a28f-a84b31508940.webp",
  },
  {
    id: "p3",
    title: "बजरंग धाम — मुख्य द्वार",
    imageUrl:
      "/assets/screenshot_2026-03-31_162325-019d438e-08a7-77e8-a270-b1c3b2f85cdb.png",
  },
  {
    id: "p4",
    title: "बजरंग धाम प्रवेश द्वार",
    imageUrl:
      "/assets/screenshot_2026-03-31_162337-019d438e-0906-7043-8ce2-8c7fae70144c.png",
  },
  {
    id: "p5",
    title: "मंदिर परिसर",
    imageUrl:
      "/assets/screenshot_2026-03-31_162210-019d438e-091b-733b-9e29-817f32f179ea.png",
  },
  {
    id: "p6",
    title: "मंदिर — बाहरी दृश्य",
    imageUrl:
      "/assets/screenshot_2026-03-31_162253-019d438e-0999-756c-b2f2-1dd648220c0f.png",
  },
  {
    id: "p7",
    title: "मंदिर अंदर का दृश्य",
    imageUrl:
      "/assets/screenshot_2026-03-31_162310-019d438e-0a3c-779d-8aee-e7a609fa44e7.png",
  },
  {
    id: "p8",
    title: "नंदी महाराज",
    imageUrl:
      "/assets/screenshot_2026-03-31_162239-019d438e-0ab1-75e5-beb6-cd6872c8643e.png",
  },
  {
    id: "p9",
    title: "परिसर का मार्ग",
    imageUrl:
      "/assets/screenshot_2026-03-31_162350-019d438e-0b1e-7678-a3a4-e8eb9e074dfb.png",
  },
  {
    id: "p10",
    title: "बजरंग धाम — मलाँजखंड",
    imageUrl:
      "/assets/screenshot_2026-03-31_100007-019d438e-0d88-75f3-b17e-f72c522cef32.png",
  },
];

export default function GallerySection({ items, loading }: Props) {
  const backendPhotos = items.filter(
    (item) =>
      item.imageUrl &&
      !item.imageUrl.includes("example.com") &&
      !item.imageUrl.includes("placeholder"),
  );
  const displayItems =
    backendPhotos.length > 0
      ? backendPhotos.map((item) => ({
          id: String(item.id),
          title: item.title,
          imageUrl: item.imageUrl,
        }))
      : realPhotos;

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.42 0.16 28) 0%, oklch(0.55 0.18 45) 50%, oklch(0.46 0.17 32) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span
            className="font-hindi text-sm font-medium px-4 py-1.5 rounded-full"
            style={{
              background: "oklch(0.78 0.14 78 / 0.2)",
              color: "oklch(0.92 0.10 78)",
              border: "1px solid oklch(0.78 0.14 78 / 0.4)",
            }}
          >
            चित्र / Gallery
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-2"
            style={{ color: "oklch(0.98 0.02 80)" }}
          >
            मंदिर की झलकियाँ
          </h2>
          <p style={{ color: "oklch(0.88 0.08 70)" }}>
            Glimpses of Bajarang Dham, Malanjkhand
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "oklch(0.78 0.14 78)" }}
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skeletonKeys.map((key) => (
              <Skeleton
                key={key}
                className="aspect-square rounded-xl"
                style={{ background: "oklch(0.55 0.15 40 / 0.5)" }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                style={{
                  boxShadow: "0 4px 16px oklch(0.26 0.12 22 / 0.4)",
                  border: "2px solid oklch(0.78 0.14 78 / 0.2)",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.26 0.12 22 / 0.85) 0%, transparent 60%)",
                  }}
                >
                  <p
                    className="font-hindi text-xs p-3 font-semibold"
                    style={{ color: "oklch(0.98 0.02 80)" }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
