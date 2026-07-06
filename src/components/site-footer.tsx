import { Link } from "@tanstack/react-router";
import { Mail, Globe2, Phone, Building2 } from "lucide-react";
import { EpsLogo } from "@/components/eps-logo";
import { useT } from "@/i18n/language";
import { contact } from "@/lib/contact";

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <EpsLogo className="h-12 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t(
              "EPS Engineering & Consultancy delivers solution-driven process engineering — from concept to commissioning — with teams in Türkiye, India and Europe.",
              "EPS Mühendislik ve Danışmanlık, Türkiye, Hindistan ve Avrupa'daki ekipleriyle konseptten devreye almaya kadar çözüm odaklı proses mühendisliği sunar.",
            )}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-steel">
            {t("Company", "Kurumsal")}
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">{t("Company", "Kurumsal")}</Link></li>
            <li><Link to="/services" className="hover:text-foreground">{t("Services", "Hizmetler")}</Link></li>
            <li><Link to="/facilities" className="hover:text-foreground">{t("Plant & Construction", "Tesis & İnşaat")}</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">{t("Projects", "Projeler")}</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">{t("Contact", "İletişim")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-steel">
            {t("Capabilities", "Yetkinlikler")}
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>{t("Concept & Detailed Engineering", "Konsept & Detay Mühendislik")}</li>
            <li>{t("3D Modeling & FEA/CFD", "3D Modelleme & FEA/CFD")}</li>
            <li>{t("EPC & CQV / Validation", "EPC & CQV / Validasyon")}</li>
            <li>{t("Automation & Digital Twin", "Otomasyon & Dijital İkiz")}</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-steel">
            {t("Offices", "Ofisler")}
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong className="block text-foreground">{t("Headquarters — Istanbul", "Merkez — İstanbul")}</strong>
                {contact.istanbul.line1}, {contact.istanbul.line2}, {contact.istanbul.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong className="block text-foreground">{t("Office — Barcelona", "Ofis — Barselona")}</strong>
                {contact.barcelona.line1}, {contact.barcelona.line2}, {t("Spain", "İspanya")}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="space-y-0.5">
                <a href={`tel:${contact.phoneTrHref}`} className="block hover:text-foreground">{contact.phoneTr}</a>
                <a href={`tel:${contact.phoneEsHref}`} className="block hover:text-foreground">{contact.phoneEs}</a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${contact.email}`} className="hover:text-foreground">{contact.email}</a>
            </li>
            <li className="flex gap-3">
              <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={contact.websiteUrl} className="hover:text-foreground">{contact.website}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} EPS Engineering & Consultancy Inc. {t("All rights reserved.", "Tüm hakları saklıdır.")}</p>
          <p>{t("Engineering Process Solutions", "Engineering Process Solutions")}</p>
        </div>
      </div>
    </footer>
  );
}
