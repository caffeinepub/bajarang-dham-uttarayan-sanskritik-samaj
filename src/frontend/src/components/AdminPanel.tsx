import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { HttpAgent } from "@icp-sdk/core/agent";
import {
  ImagePlus,
  Loader2,
  LogOut,
  Pencil,
  Plus,
  Shield,
  Trash2,
  Upload,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type {
  Announcement,
  ContactMessage,
  Event,
  GalleryItem,
} from "../backend";
import { loadConfig } from "../config";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { StorageClient } from "../utils/StorageClient";

function formatDate(ns: bigint) {
  return new Date(Number(ns / 1_000_000n)).toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function dateToNs(dateStr: string): bigint {
  return BigInt(new Date(dateStr).getTime()) * 1_000_000n;
}

// ─── Events Tab ────────────────────────────────────────────────────────────────

function EventsTab() {
  const { actor } = useActor();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editing, setEditing] = useState<Event | null>(null);
  const [saving, setSaving] = useState(false);

  const emptyForm = {
    titleHindi: "",
    titleEnglish: "",
    date: "",
    description: "",
    location: "",
  };
  const [form, setForm] = useState(emptyForm);

  const load = async () => {
    if (!actor) return;
    setLoading(true);
    try {
      setEvents(await actor.getAllEvents());
    } catch {
      toast.error("कार्यक्रम लोड नहीं हो सके");
    } finally {
      setLoading(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: load is intentionally excluded
  useEffect(() => {
    load();
  }, [actor]);

  const handleAdd = async () => {
    if (!actor || !form.titleHindi || !form.date) return;
    setSaving(true);
    try {
      await actor.addEvent(
        form.titleHindi,
        form.titleEnglish,
        dateToNs(form.date),
        form.description,
        form.location,
      );
      toast.success("कार्यक्रम जोड़ा गया!");
      setForm(emptyForm);
      setOpenAdd(false);
      load();
    } catch {
      toast.error("कुछ गड़बड़ हुई");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = async () => {
    if (!actor || !editing) return;
    setSaving(true);
    try {
      await (actor as any).updateEvent(
        editing.id,
        form.titleHindi,
        form.titleEnglish,
        dateToNs(form.date),
        form.description,
        form.location,
      );
      toast.success("अपडेट हो गया!");
      setOpenEdit(false);
      load();
    } catch {
      toast.error("कुछ गड़बड़ हुई");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!actor || !confirm("क्या आप वाकई हटाना चाहते हैं?")) return;
    try {
      await (actor as any).deleteEvent(id);
      toast.success("हटा दिया गया");
      load();
    } catch {
      toast.error("कुछ गड़बड़ हुई");
    }
  };

  const startEdit = (ev: Event) => {
    setEditing(ev);
    setForm({
      titleHindi: ev.titleHindi,
      titleEnglish: ev.titleEnglish,
      date: new Date(Number(ev.date / 1_000_000n)).toISOString().split("T")[0],
      description: ev.description,
      location: ev.location,
    });
    setOpenEdit(true);
  };

  const EventForm = ({
    onSave,
    isPending,
  }: { onSave: () => void; isPending: boolean }) => (
    <div className="space-y-3">
      <div>
        <Label>शीर्षक (हिंदी)*</Label>
        <Input
          value={form.titleHindi}
          onChange={(e) =>
            setForm((p) => ({ ...p, titleHindi: e.target.value }))
          }
          data-ocid="event.input"
        />
      </div>
      <div>
        <Label>Title (English)</Label>
        <Input
          value={form.titleEnglish}
          onChange={(e) =>
            setForm((p) => ({ ...p, titleEnglish: e.target.value }))
          }
        />
      </div>
      <div>
        <Label>दिनांक / Date*</Label>
        <Input
          type="date"
          value={form.date}
          onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
        />
      </div>
      <div>
        <Label>विवरण / Description</Label>
        <Textarea
          rows={3}
          value={form.description}
          onChange={(e) =>
            setForm((p) => ({ ...p, description: e.target.value }))
          }
        />
      </div>
      <div>
        <Label>स्थान / Location</Label>
        <Input
          value={form.location}
          onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
        />
      </div>
      <DialogFooter>
        <Button
          onClick={onSave}
          disabled={isPending}
          data-ocid="event.submit_button"
          style={{ background: "var(--color-maroon)" }}
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
          सहेजें / Save
        </Button>
      </DialogFooter>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          className="text-lg font-semibold"
          style={{ color: "var(--color-maroon)" }}
        >
          कार्यक्रम / Events
        </h2>
        <Dialog
          open={openAdd}
          onOpenChange={(o) => {
            setOpenAdd(o);
            if (!o) setForm(emptyForm);
          }}
        >
          <DialogTrigger asChild>
            <Button
              data-ocid="event.open_modal_button"
              style={{ background: "var(--color-saffron)", color: "#fff" }}
            >
              <Plus className="h-4 w-4 mr-1" /> नया कार्यक्रम
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>नया कार्यक्रम जोड़ें / Add Event</DialogTitle>
            </DialogHeader>
            <EventForm onSave={handleAdd} isPending={saving} />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div
          className="flex justify-center py-10"
          data-ocid="event.loading_state"
        >
          <Loader2
            className="animate-spin h-8 w-8"
            style={{ color: "var(--color-saffron)" }}
          />
        </div>
      ) : events.length === 0 ? (
        <p
          className="text-center py-10 text-gray-500"
          data-ocid="event.empty_state"
        >
          कोई कार्यक्रम नहीं / No events
        </p>
      ) : (
        <Table data-ocid="event.table">
          <TableHeader>
            <TableRow>
              <TableHead>शीर्षक</TableHead>
              <TableHead>दिनांक</TableHead>
              <TableHead>स्थान</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((ev, i) => (
              <TableRow key={String(ev.id)} data-ocid={`event.item.${i + 1}`}>
                <TableCell className="font-medium">{ev.titleHindi}</TableCell>
                <TableCell>{formatDate(ev.date)}</TableCell>
                <TableCell>{ev.location}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => startEdit(ev)}
                      data-ocid={`event.edit_button.${i + 1}`}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-red-500"
                      onClick={() => handleDelete(ev.id)}
                      data-ocid={`event.delete_button.${i + 1}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog
        open={openEdit}
        onOpenChange={(o) => {
          setOpenEdit(o);
          if (!o) setEditing(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>कार्यक्रम संपादित करें / Edit Event</DialogTitle>
          </DialogHeader>
          <EventForm onSave={handleEdit} isPending={saving} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Gallery Tab ───────────────────────────────────────────────────────────────

function GalleryTab() {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [openAdd, setOpenAdd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMode, setUploadMode] = useState<"file" | "url">("file");
  const [form, setForm] = useState({ title: "", imageUrl: "" });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    if (!actor) return;
    setLoading(true);
    try {
      setItems(await actor.getAllGalleryItems());
    } catch {
      toast.error("गैलरी लोड नहीं हो सकी");
    } finally {
      setLoading(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: load is intentionally excluded
  useEffect(() => {
    load();
  }, [actor]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const resetForm = () => {
    setForm({ title: "", imageUrl: "" });
    setPreviewUrl(null);
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAdd = async () => {
    if (!actor || !form.title) return;

    // URL mode
    if (uploadMode === "url") {
      if (!form.imageUrl) return;
      setSaving(true);
      try {
        await actor.addGalleryItem(form.title, form.imageUrl);
        toast.success("फ़ोटो जोड़ी गई!");
        resetForm();
        setOpenAdd(false);
        load();
      } catch {
        toast.error("कुछ गड़बड़ हुई");
      } finally {
        setSaving(false);
      }
      return;
    }

    // File upload mode
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      toast.error("कृपया एक फ़ोटो चुनें");
      return;
    }
    if (!identity) {
      toast.error("Login आवश्यक है");
      return;
    }

    setSaving(true);
    setUploadProgress(0);
    try {
      const cfg = await loadConfig();
      const agent = new HttpAgent({ identity, host: cfg.backend_host });
      const client = new StorageClient(
        cfg.bucket_name,
        cfg.storage_gateway_url,
        cfg.backend_canister_id,
        cfg.project_id,
        agent,
      );
      const bytes = new Uint8Array(await file.arrayBuffer());
      const { hash } = await client.putFile(bytes, (pct) =>
        setUploadProgress(pct),
      );
      const imageUrl = await client.getDirectURL(hash);
      await actor.addGalleryItem(form.title, imageUrl);
      toast.success("फ़ोटो अपलोड और जोड़ी गई!");
      resetForm();
      setOpenAdd(false);
      load();
    } catch (err) {
      console.error(err);
      toast.error("अपलोड नहीं हो सकी — कृपया पुनः प्रयास करें");
    } finally {
      setSaving(false);
      setUploadProgress(0);
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!actor || !confirm("क्या आप वाकई हटाना चाहते हैं?")) return;
    try {
      await (actor as any).deleteGalleryItem(id);
      toast.success("हटा दिया गया");
      load();
    } catch {
      toast.error("कुछ गड़बड़ हुई");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          className="text-lg font-semibold"
          style={{ color: "var(--color-maroon)" }}
        >
          गैलरी / Gallery
        </h2>
        <Dialog
          open={openAdd}
          onOpenChange={(o) => {
            setOpenAdd(o);
            if (!o) resetForm();
          }}
        >
          <DialogTrigger asChild>
            <Button
              data-ocid="gallery.open_modal_button"
              style={{ background: "var(--color-saffron)", color: "#fff" }}
            >
              <Plus className="h-4 w-4 mr-1" /> फ़ोटो जोड़ें
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>फ़ोटो जोड़ें / Add Photo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {/* Title */}
              <div>
                <Label>शीर्षक / Title*</Label>
                <Input
                  data-ocid="gallery.input"
                  value={form.title}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder="जैसे: हनुमान जी की प्रतिमा"
                />
              </div>

              {/* Mode toggle */}
              <div
                className="flex rounded-lg overflow-hidden border"
                style={{ borderColor: "var(--color-saffron)" }}
              >
                <button
                  type="button"
                  onClick={() => setUploadMode("file")}
                  className="flex-1 py-2 text-sm font-medium transition-colors"
                  style={{
                    background:
                      uploadMode === "file"
                        ? "var(--color-saffron)"
                        : "transparent",
                    color:
                      uploadMode === "file" ? "#fff" : "var(--color-maroon)",
                  }}
                >
                  <ImagePlus className="h-4 w-4 inline mr-1" />
                  फ़ाइल अपलोड
                </button>
                <button
                  type="button"
                  onClick={() => setUploadMode("url")}
                  className="flex-1 py-2 text-sm font-medium transition-colors"
                  style={{
                    background:
                      uploadMode === "url"
                        ? "var(--color-saffron)"
                        : "transparent",
                    color:
                      uploadMode === "url" ? "#fff" : "var(--color-maroon)",
                  }}
                >
                  URL से
                </button>
              </div>

              {uploadMode === "file" ? (
                <div>
                  {/* Drop zone */}
                  <button
                    type="button"
                    className="w-full border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-orange-50 transition-colors"
                    style={{ borderColor: "var(--color-saffron)" }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="preview"
                        className="w-full h-40 object-cover rounded-lg mb-2"
                      />
                    ) : (
                      <div className="space-y-2">
                        <Upload
                          className="h-10 w-10 mx-auto"
                          style={{ color: "var(--color-saffron)" }}
                        />
                        <p className="text-sm text-gray-500">
                          क्लिक करें या फ़ोटो यहाँ खींचें
                        </p>
                        <p className="text-xs text-gray-400">
                          JPG, PNG, WEBP — अधिकतम 10MB
                        </p>
                      </div>
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                  {previewUrl && (
                    <button
                      type="button"
                      className="mt-1 text-xs text-red-500 underline"
                      onClick={() => {
                        setPreviewUrl(null);
                        if (fileInputRef.current)
                          fileInputRef.current.value = "";
                      }}
                    >
                      फ़ोटो हटाएं
                    </button>
                  )}
                  {saving && uploadProgress > 0 && (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>अपलोड हो रहा है...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${uploadProgress}%`,
                            background: "var(--color-saffron)",
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <Label>Image URL</Label>
                  <Input
                    placeholder="https://..."
                    value={form.imageUrl}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, imageUrl: e.target.value }))
                    }
                  />
                  {form.imageUrl && (
                    <img
                      src={form.imageUrl}
                      alt="preview"
                      className="mt-2 w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                </div>
              )}

              <DialogFooter>
                <Button
                  onClick={handleAdd}
                  disabled={saving}
                  data-ocid="gallery.submit_button"
                  style={{ background: "var(--color-maroon)" }}
                >
                  {saving ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : null}
                  {saving ? "अपलोड हो रहा है..." : "सहेजें"}
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div
          className="flex justify-center py-10"
          data-ocid="gallery.loading_state"
        >
          <Loader2
            className="animate-spin h-8 w-8"
            style={{ color: "var(--color-saffron)" }}
          />
        </div>
      ) : items.length === 0 ? (
        <p
          className="text-center py-10 text-gray-500"
          data-ocid="gallery.empty_state"
        >
          कोई फ़ोटो नहीं / No photos
        </p>
      ) : (
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          data-ocid="gallery.list"
        >
          {items.map((item, i) => (
            <div
              key={String(item.id)}
              className="relative group rounded-xl overflow-hidden shadow"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div
                className="p-2 text-sm font-medium truncate"
                style={{ background: "var(--color-cream)" }}
              >
                {item.title}
              </div>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                data-ocid={`gallery.delete_button.${i + 1}`}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Announcements Tab ─────────────────────────────────────────────────────────

function AnnouncementsTab() {
  const { actor } = useActor();
  const [items, setItems] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editing, setEditing] = useState<Announcement | null>(null);
  const [saving, setSaving] = useState(false);
  const emptyForm = { title: "", content: "" };
  const [form, setForm] = useState(emptyForm);

  const load = async () => {
    if (!actor) return;
    setLoading(true);
    try {
      setItems(await actor.getAllAnnouncements());
    } catch {
      toast.error("घोषणाएं लोड नहीं हो सकीं");
    } finally {
      setLoading(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: load is intentionally excluded
  useEffect(() => {
    load();
  }, [actor]);

  const handleAdd = async () => {
    if (!actor || !form.title) return;
    setSaving(true);
    try {
      await actor.addAnnouncement(form.title, form.content);
      toast.success("घोषणा जोड़ी गई!");
      setForm(emptyForm);
      setOpenAdd(false);
      load();
    } catch {
      toast.error("कुछ गड़बड़ हुई");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = async () => {
    if (!actor || !editing) return;
    setSaving(true);
    try {
      await (actor as any).updateAnnouncement(
        editing.id,
        form.title,
        form.content,
      );
      toast.success("अपडेट हो गया!");
      setOpenEdit(false);
      load();
    } catch {
      toast.error("कुछ गड़बड़ हुई");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!actor || !confirm("क्या आप वाकई हटाना चाहते हैं?")) return;
    try {
      await (actor as any).deleteAnnouncement(id);
      toast.success("हटा दिया गया");
      load();
    } catch {
      toast.error("कुछ गड़बड़ हुई");
    }
  };

  const AnnForm = ({
    onSave,
    isPending,
  }: { onSave: () => void; isPending: boolean }) => (
    <div className="space-y-3">
      <div>
        <Label>शीर्षक / Title*</Label>
        <Input
          data-ocid="announcement.input"
          value={form.title}
          onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
        />
      </div>
      <div>
        <Label>विषय / Content</Label>
        <Textarea
          rows={4}
          value={form.content}
          onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
          data-ocid="announcement.textarea"
        />
      </div>
      <DialogFooter>
        <Button
          onClick={onSave}
          disabled={isPending}
          data-ocid="announcement.submit_button"
          style={{ background: "var(--color-maroon)" }}
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}{" "}
          सहेजें
        </Button>
      </DialogFooter>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          className="text-lg font-semibold"
          style={{ color: "var(--color-maroon)" }}
        >
          घोषणाएं / Announcements
        </h2>
        <Dialog
          open={openAdd}
          onOpenChange={(o) => {
            setOpenAdd(o);
            if (!o) setForm(emptyForm);
          }}
        >
          <DialogTrigger asChild>
            <Button
              data-ocid="announcement.open_modal_button"
              style={{ background: "var(--color-saffron)", color: "#fff" }}
            >
              <Plus className="h-4 w-4 mr-1" /> नई घोषणा
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>नई घोषणा / Add Announcement</DialogTitle>
            </DialogHeader>
            <AnnForm onSave={handleAdd} isPending={saving} />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div
          className="flex justify-center py-10"
          data-ocid="announcement.loading_state"
        >
          <Loader2
            className="animate-spin h-8 w-8"
            style={{ color: "var(--color-saffron)" }}
          />
        </div>
      ) : items.length === 0 ? (
        <p
          className="text-center py-10 text-gray-500"
          data-ocid="announcement.empty_state"
        >
          कोई घोषणा नहीं
        </p>
      ) : (
        <Table data-ocid="announcement.table">
          <TableHeader>
            <TableRow>
              <TableHead>शीर्षक</TableHead>
              <TableHead>दिनांक</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((ann, i) => (
              <TableRow
                key={String(ann.id)}
                data-ocid={`announcement.item.${i + 1}`}
              >
                <TableCell className="font-medium">{ann.title}</TableCell>
                <TableCell>{formatDate(ann.date)}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      data-ocid={`announcement.edit_button.${i + 1}`}
                      onClick={() => {
                        setEditing(ann);
                        setForm({ title: ann.title, content: ann.content });
                        setOpenEdit(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-red-500"
                      data-ocid={`announcement.delete_button.${i + 1}`}
                      onClick={() => handleDelete(ann.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog
        open={openEdit}
        onOpenChange={(o) => {
          setOpenEdit(o);
          if (!o) setEditing(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>घोषणा संपादित करें</DialogTitle>
          </DialogHeader>
          <AnnForm onSave={handleEdit} isPending={saving} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Messages Tab ──────────────────────────────────────────────────────────────

function MessagesTab() {
  const { actor } = useActor();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!actor) return;
    (async () => {
      setLoading(true);
      try {
        setMessages(await actor.getAllContactMessages());
      } catch {
        toast.error("संदेश लोड नहीं हो सके");
      } finally {
        setLoading(false);
      }
    })();
  }, [actor]);

  return (
    <div className="space-y-4">
      <h2
        className="text-lg font-semibold"
        style={{ color: "var(--color-maroon)" }}
      >
        संपर्क संदेश / Contact Messages
      </h2>
      {loading ? (
        <div
          className="flex justify-center py-10"
          data-ocid="messages.loading_state"
        >
          <Loader2
            className="animate-spin h-8 w-8"
            style={{ color: "var(--color-saffron)" }}
          />
        </div>
      ) : messages.length === 0 ? (
        <p
          className="text-center py-10 text-gray-500"
          data-ocid="messages.empty_state"
        >
          कोई संदेश नहीं / No messages yet
        </p>
      ) : (
        <div className="space-y-3" data-ocid="messages.list">
          {messages.map((msg, i) => (
            <div
              key={String(msg.id)}
              data-ocid={`messages.item.${i + 1}`}
              className="rounded-xl border p-4 space-y-1"
              style={{
                borderColor: "var(--color-saffron)",
                background: "var(--color-cream)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-maroon)" }}
                >
                  {msg.name}
                </span>
                <span className="text-xs text-gray-400">
                  {formatDate(msg.date)}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {msg.email} {msg.phone && `· ${msg.phone}`}
              </div>
              <p className="text-sm mt-1">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Admin Panel ──────────────────────────────────────────────────────────

export default function AdminPanel() {
  const { identity, login, clear, isLoggingIn } = useInternetIdentity();
  const { actor } = useActor();
  const [adminStatus, setAdminStatus] = useState<
    "unknown" | "admin" | "not-admin"
  >("unknown");
  const [settingAdmin, setSettingAdmin] = useState(false);

  const principal = identity?.getPrincipal();

  useEffect(() => {
    if (!actor || !principal) return;
    (actor as any)
      .isAdmin(principal)
      .then((r) => setAdminStatus(r ? "admin" : "not-admin"))
      .catch(() => setAdminStatus("not-admin"));
  }, [actor, principal]);

  const handleSetAdmin = async () => {
    if (!actor || !principal) return;
    setSettingAdmin(true);
    try {
      await (actor as any).setAdmin(principal);
      setAdminStatus("admin");
      toast.success("Admin अधिकार मिल गए!");
    } catch {
      toast.error("Admin सेट नहीं हो सका");
    } finally {
      setSettingAdmin(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--color-cream)" }}>
      <Toaster richColors position="top-center" />

      {/* Header */}
      <header
        className="sticky top-0 z-50 shadow-md"
        style={{ background: "var(--color-maroon)" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-300" />
            <span className="text-white font-bold text-lg">Admin Panel</span>
            <span className="text-amber-200 text-sm hidden sm:inline">
              — बजरंग धाम
            </span>
          </div>
          <div className="flex items-center gap-3">
            {identity && (
              <span className="text-amber-200 text-xs hidden md:block truncate max-w-[200px]">
                {principal?.toString().slice(0, 20)}…
              </span>
            )}
            {identity ? (
              <Button
                size="sm"
                variant="outline"
                onClick={clear}
                data-ocid="admin.secondary_button"
                className="border-amber-300 text-amber-200 hover:bg-amber-300/10"
              >
                <LogOut className="h-4 w-4 mr-1" /> Logout
              </Button>
            ) : null}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Not logged in */}
        {!identity ? (
          <div
            className="flex flex-col items-center justify-center min-h-[60vh] gap-6"
            data-ocid="admin.panel"
          >
            <div className="text-center space-y-2">
              <div className="text-6xl">🙏</div>
              <h1
                className="text-2xl font-bold"
                style={{ color: "var(--color-maroon)" }}
              >
                Admin Login
              </h1>
              <p className="text-gray-500">बजरंग धाम वेबसाइट प्रबंधन</p>
              <p className="text-gray-400 text-sm">
                Bajarang Dham Website Management
              </p>
            </div>
            <Button
              size="lg"
              onClick={login}
              disabled={isLoggingIn}
              data-ocid="admin.primary_button"
              style={{
                background: "var(--color-maroon)",
                color: "#fff",
                minWidth: 200,
              }}
            >
              {isLoggingIn ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              {isLoggingIn ? "Login हो रहा है..." : "Login करें"}
            </Button>
          </div>
        ) : adminStatus === "not-admin" ? (
          /* Logged in but not admin */
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <div className="text-center space-y-2">
              <div className="text-5xl">⚠️</div>
              <h2
                className="text-xl font-bold"
                style={{ color: "var(--color-maroon)" }}
              >
                Admin अधिकार नहीं
              </h2>
              <p className="text-gray-500 text-sm">आपका Principal ID:</p>
              <code className="block text-xs bg-gray-100 p-2 rounded break-all max-w-sm">
                {principal?.toString()}
              </code>
              <p className="text-gray-400 text-sm">
                पहली बार के लिए नीचे "Setup Admin" दबाएं
              </p>
            </div>
            <Button
              size="lg"
              onClick={handleSetAdmin}
              disabled={settingAdmin}
              data-ocid="admin.confirm_button"
              style={{ background: "var(--color-saffron)", color: "#fff" }}
            >
              {settingAdmin ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Shield className="h-4 w-4 mr-2" />
              )}
              Setup Admin
            </Button>
          </div>
        ) : adminStatus === "unknown" ? (
          <div
            className="flex justify-center py-20"
            data-ocid="admin.loading_state"
          >
            <Loader2
              className="animate-spin h-10 w-10"
              style={{ color: "var(--color-saffron)" }}
            />
          </div>
        ) : (
          /* Admin dashboard */
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge
                style={{ background: "var(--color-saffron)", color: "#fff" }}
              >
                Admin
              </Badge>
              <span className="text-sm text-gray-500">स्वागत है! / Welcome</span>
            </div>

            <Tabs defaultValue="events">
              <TabsList
                className="w-full grid grid-cols-4"
                style={{ background: "var(--color-maroon)/10" }}
              >
                <TabsTrigger value="events" data-ocid="admin.tab">
                  🎉 कार्यक्रम
                </TabsTrigger>
                <TabsTrigger value="gallery" data-ocid="admin.tab">
                  🖼️ गैलरी
                </TabsTrigger>
                <TabsTrigger value="announcements" data-ocid="admin.tab">
                  📢 घोषणाएं
                </TabsTrigger>
                <TabsTrigger value="messages" data-ocid="admin.tab">
                  ✉️ संदेश
                </TabsTrigger>
              </TabsList>
              <TabsContent value="events" className="mt-6">
                <EventsTab />
              </TabsContent>
              <TabsContent value="gallery" className="mt-6">
                <GalleryTab />
              </TabsContent>
              <TabsContent value="announcements" className="mt-6">
                <AnnouncementsTab />
              </TabsContent>
              <TabsContent value="messages" className="mt-6">
                <MessagesTab />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>

      <footer className="text-center py-6 text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} बजरंग धाम — Admin Portal · Built with{" "}
        <a
          href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content={encodeURIComponent(window.location.hostname)}"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
