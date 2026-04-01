import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { Announcement, Event, GalleryItem } from "./backend";
import AartiTimings from "./components/AartiTimings";
import About from "./components/About";
import AdminPanel from "./components/AdminPanel";
import AnnouncementsSection from "./components/AnnouncementsSection";
import Contact from "./components/Contact";
import DonationSection from "./components/DonationSection";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Navbar from "./components/Navbar";
import PastEventsArchive from "./components/PastEventsArchive";
import { Toaster } from "./components/ui/sonner";
import { useActor } from "./hooks/useActor";

const isAdminRoute =
  window.location.pathname.includes("admin") ||
  window.location.hash.includes("admin");

export default function App() {
  if (isAdminRoute) return <AdminPanel />;

  return <PublicSite />;
}

function PublicSite() {
  const { actor } = useActor();
  const [events, setEvents] = useState<Event[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!actor) return;
    const init = async () => {
      try {
        try {
          await actor.seedData();
        } catch {
          // Already seeded - ignore
        }
        const [evts, anns, gallery] = await Promise.all([
          actor.getAllEvents(),
          actor.getAllAnnouncements(),
          actor.getAllGalleryItems(),
        ]);
        setEvents(evts);
        setAnnouncements(anns);
        setGalleryItems(gallery);
      } catch (e) {
        console.error("Failed to load data", e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [actor]);

  const handleContactSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    if (!actor) {
      toast.error("कनेक्शन नहीं हुआ / Not connected");
      return;
    }
    try {
      await actor.submitContactMessage(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
      toast.success("आपका संदेश भेज दिया गया! / Message sent successfully!");
    } catch {
      toast.error("कुछ गड़बड़ हुई। / Something went wrong.");
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <Toaster richColors position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <AartiTimings />
        <About />
        <Leadership />
        <EventsSection events={events} loading={loading} />
        <PastEventsArchive />
        <GallerySection items={galleryItems} loading={loading} />
        <AnnouncementsSection announcements={announcements} loading={loading} />
        <DonationSection />
        <Contact onSubmit={handleContactSubmit} />
      </main>
      <Footer />
    </div>
  );
}
