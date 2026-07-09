import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { MapPin, Mail, Globe2, Building2, Send, CheckCircle2, Phone, Paperclip, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage, useT } from "@/i18n/language";
import { images } from "@/lib/images";
import { contact } from "@/lib/contact";
import { PageHero } from "@/components/page-hero";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EPS Engineering & Consultancy | Istanbul · Barcelona" },
      {
        name: "description",
        content:
          "Contact EPS Engineering & Consultancy. Headquarters in Istanbul and office in Barcelona (Avinguda d'Eduard Maristany 7, 08019, Spain). Let's scope your process project.",
      },
      { property: "og:title", content: "Contact EPS — Engineering Process Solutions" },
      {
        property: "og:description",
        content: "Reach our engineering team in Istanbul and Barcelona.",
      },
      { property: "og:image", content: images.scada },
    ],
  }),
  component: Contact,
});

const MAX_FILE_BYTES = 15 * 1024 * 1024;

function Contact() {
  const t = useT();
  const { lang } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > MAX_FILE_BYTES) {
      toast.error(
        t(
          "File is too large. Maximum size is 15 MB.",
          "Dosya çok büyük. En fazla 15 MB olabilir.",
        ),
      );
      e.target.value = "";
      return;
    }
    setFile(f);
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.delete("file"); // Formspree's free plan rejects file uploads — handled separately via Blob storage
    fd.set("lang", lang);
    fd.set("_cc", "info@eps-con.com");

    setSubmitting(true);
    try {
      if (file) {
        const uploadFd = new FormData();
        uploadFd.set("file", file);
        const uploadRes = await fetch("/api/public/upload", { method: "POST", body: uploadFd });
        const uploadJson = (await uploadRes.json().catch(() => null)) as
          | { ok?: boolean; url?: string; name?: string }
          | null;
        if (!uploadRes.ok || !uploadJson?.ok || !uploadJson.url) {
          throw new Error("attachment_upload_failed");
        }
        const message = String(fd.get("message") ?? "");
        fd.set("message", `${message}\n\nAttachment (${uploadJson.name}): ${uploadJson.url}`);
      }

      const res = await fetch("https://formspree.io/f/mrewdlyq", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as { errors?: Array<{ message?: string }> } | null;
        console.error("[contact] formspree error:", json);
        throw new Error("submission_failed");
      }

      setSubmitted(true);
      toast.success(
        t(
          "Your message has been delivered. The relevant engineering unit will get back to you as soon as possible.",
          "Mesajınız iletilmiştir. En kısa zamanda ilgili bölümün mühendislik birimi size dönüş yapacaktır.",
        ),
      );
      form.reset();
      clearFile();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      toast.error(
        t(
          "Your message couldn't be sent. Please try again or email us directly at info@eps-con.com.",
          "Mesajınız gönderilemedi. Lütfen tekrar deneyin ya da doğrudan info@eps-con.com adresine yazın.",
        ),
      );
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls =
    "w-full rounded-md border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

  return (
    <>
      <PageHero
        image={images.scada}
        eyebrow={t("Contact", "İletişim")}
        title={t("Contact Our Engineers", "Mühendislerimize ulaşın")}
        intro={t(
          "Tell us about your process, plant or analysis needs. Share your project details below and your message goes straight to our engineers at info@eps-con.com. Teams in Istanbul, Barcelona and India will respond promptly.",
          "Proses, tesis veya analiz ihtiyaçlarınızı bize anlatın. Proje detaylarınızı aşağıya bırakın; mesajınız doğrudan info@eps-con.com adresindeki mühendislerimize ulaşır. İstanbul, Barselona ve Hindistan'daki ekiplerimiz hızla yanıt verir.",
        )}
      />

      <section className="eps-section">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{t("Headquarters — Istanbul", "Merkez — İstanbul")}</h3>
              </div>
              <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {contact.istanbul.line1},<br />
                  {contact.istanbul.line2}, {contact.istanbul.city}, {t("Türkiye", "Türkiye")}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{t("Office — Barcelona", "Ofis — Barselona")}</h3>
              </div>
              <p className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {contact.barcelona.line1},<br />
                  {contact.barcelona.line2}, {t("Spain", "İspanya")}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{t("Phone", "Telefon")}</h3>
              </div>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <a href={`tel:${contact.phoneTrHref}`} className="block hover:text-foreground">🇹🇷 {contact.phoneTr}</a>
                <a href={`tel:${contact.phoneEsHref}`} className="block hover:text-foreground">🇪🇸 {contact.phoneEs}</a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{t("Email & Web", "E-posta & Web")}</h3>
              </div>
              <a href={`mailto:${contact.email}`} className="mt-3 block text-sm text-muted-foreground hover:text-foreground">
                {contact.email}
              </a>
              <a href={contact.websiteUrl} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                {contact.website}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-7 shadow-elegant sm:p-9">
            <h3 className="text-xl font-semibold text-foreground">{t("Tell us about your project", "Projenizi bize anlatın")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("Share the details below — your message is sent straight to our engineers at info@eps-con.com.", "Detayları aşağıya girin — mesajınız doğrudan info@eps-con.com adresindeki mühendislerimize gönderilir.")}
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t("Full name", "Ad soyad")}</label>
                  <input required name="name" className={fieldCls} placeholder={t("Your name", "Adınız")} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t("Company", "Şirket")}</label>
                  <input name="company" className={fieldCls} placeholder={t("Company name", "Şirket adı")} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t("Email", "E-posta")}</label>
                  <input required type="email" name="email" className={fieldCls} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t("Phone", "Telefon")}</label>
                  <input name="phone" className={fieldCls} placeholder="+90 / +34" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t("Subject", "Konu")}</label>
                <select name="subject" className={fieldCls} defaultValue="">
                  <option value="" disabled>{t("Select a topic", "Bir konu seçin")}</option>
                  <option>{t("Concept & Detailed Engineering", "Konsept & Detay Mühendislik")}</option>
                  <option>{t("3D Modeling & FEA/CFD", "3D Modelleme & FEA/CFD")}</option>
                  <option>{t("Automation & SCADA", "Otomasyon & SCADA")}</option>
                  <option>{t("Turnkey EPC / Plant Setup", "Anahtar Teslim EPC / Tesis Kurulumu")}</option>
                  <option>{t("Plant Buildings & Construction", "Tesis Binaları & İnşaat")}</option>
                  <option>{t("Process Safety / HAZOP", "Proses Güvenliği / HAZOP")}</option>
                  <option>{t("Other", "Diğer")}</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{t("Project details", "Proje detayları")}</label>
                <textarea required name="message" rows={5} className={fieldCls} placeholder={t("Tell us about your project...", "Projenizden bahsedin...")} />
              </div>

              {/* Attachment */}
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  {t("Attachment (optional)", "Ek dosya (opsiyonel)")}
                </label>
                {file ? (
                  <div className="flex items-center justify-between gap-3 rounded-md border border-input bg-surface px-4 py-3">
                    <span className="flex min-w-0 items-center gap-2 text-sm text-foreground">
                      <Paperclip className="h-4 w-4 shrink-0 text-primary" />
                      <span className="truncate">{file.name}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        ({(file.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={clearFile}
                      className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={t("Remove file", "Dosyayı kaldır")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-full items-center gap-2 rounded-md border border-dashed border-input bg-surface px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    <Paperclip className="h-4 w-4 text-primary" />
                    {t("Attach a drawing or document (max 15 MB)", "Bir çizim ya da doküman ekleyin (en fazla 15 MB)")}
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.dwg,.dxf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.png,.jpg,.jpeg,.zip,.step,.stp,.igs,.iges"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("Sending…", "Gönderiliyor…")}
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    {t("Sent", "Gönderildi")}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t("Send to our engineers", "Mühendislerimize gönder")}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
}
