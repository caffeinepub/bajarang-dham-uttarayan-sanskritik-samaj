import { useState } from "react";

interface Props {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => Promise<void>;
}

export default function Contact({ onSubmit }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(form);
      setForm({ name: "", email: "", phone: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.625rem 0.875rem",
    borderRadius: "0.5rem",
    border: "1.5px solid oklch(0.84 0.06 75)",
    background: "oklch(0.99 0.01 80)",
    color: "var(--color-text-dark)",
    fontSize: "0.875rem",
    outline: "none",
    fontFamily: "'Noto Sans Devanagari', 'Inter', system-ui, sans-serif",
  };

  const contactItems = [
    {
      label: "पता",
      value: "बजरंग धाम, उत्तरायण संस्कृतिक समाज\nमलाँजखंड, बालाघाट, म.प्र. — 481116",
    },
    {
      label: "फ़ोन",
      value: "श्री आशीष कुमार: 7694062153\nश्री अनिल पांडेय (पुजारी): 9575526867",
    },
    { label: "ईमेल", value: "info@bajarangdham.org" },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.91 0.05 78)" }}
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
            संपर्क / Contact
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-2"
            style={{ color: "var(--color-maroon)" }}
          >
            हमसे संपर्क करें
          </h2>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Get in Touch With Us
          </p>
          <div
            className="mt-4 mx-auto w-20 h-1 rounded-full"
            style={{ background: "var(--color-saffron)" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 4px 20px oklch(0.38 0.14 22 / 0.15)",
              border: "1px solid oklch(0.84 0.06 75)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.16!2d80.6947!3d22.0648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27e0e07bb85555%3A0x3b0c4a9e3f7f1234!2sMalanjkhand%2C+Balaghat%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              title="Bajarang Dham Location - Malanjkhand, Balaghat"
            />
            <div
              className="p-4 text-center"
              style={{ background: "oklch(0.99 0.01 80)" }}
            >
              <p
                className="font-hindi text-sm font-semibold"
                style={{ color: "var(--color-maroon)" }}
              >
                बजरंग धाम — मलाँजखंड
              </p>
            </div>
          </div>

          {/* Address Details */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "oklch(0.99 0.01 80)",
              boxShadow: "0 4px 20px oklch(0.38 0.14 22 / 0.1)",
              border: "1px solid oklch(0.84 0.06 75)",
            }}
          >
            <h3
              className="font-hindi font-bold text-lg mb-6"
              style={{ color: "var(--color-maroon)" }}
            >
              संपर्क जानकारी
            </h3>
            <div className="space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div
                    className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.63 0.19 52 / 0.12)" }}
                  >
                    <span
                      className="font-hindi text-xs"
                      style={{ color: "var(--color-saffron)" }}
                    >
                      {item.label === "पता"
                        ? "⌖"
                        : item.label === "फ़ोन"
                          ? "☎"
                          : "✉"}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-hindi text-xs font-semibold mb-0.5"
                      style={{ color: "var(--color-saffron)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-hindi text-sm whitespace-pre-line"
                      style={{ color: "var(--color-text-dark)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "oklch(0.99 0.01 80)",
              boxShadow: "0 4px 20px oklch(0.38 0.14 22 / 0.1)",
              border: "1px solid oklch(0.84 0.06 75)",
            }}
          >
            <h3
              className="font-hindi font-bold text-lg mb-6"
              style={{ color: "var(--color-maroon)" }}
            >
              संदेश भेजें
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.form"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-hindi text-xs font-medium block mb-1.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  नाम / Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="आपका नाम"
                  style={inputStyle}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="font-hindi text-xs font-medium block mb-1.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  ईमेल / Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="font-hindi text-xs font-medium block mb-1.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  फ़ोन / Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  style={inputStyle}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="font-hindi text-xs font-medium block mb-1.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  संदेश / Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="अपना संदेश यहाँ लिखें..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl font-hindi font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60"
                style={{
                  background: "var(--color-maroon)",
                  color: "white",
                  boxShadow: "0 4px 12px oklch(0.38 0.14 22 / 0.3)",
                }}
                data-ocid="contact.submit_button"
              >
                {submitting
                  ? "भेजा जा रहा है... / Sending..."
                  : "संदेश भेजें / Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
