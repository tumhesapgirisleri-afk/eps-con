import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Users,
  Globe2,
  Award,
  ArrowRight,
  CheckCircle2,
  
  Handshake,
  MapPin,
} from "lucide-react";
import { useT } from "@/i18n/language";
import { images } from "@/lib/images";
import { SectionHeading, PrimaryButton, Stat } from "@/components/ui-kit";
import { PageHero } from "@/components/page-hero";
import { CompanyFilm } from "@/components/company-film";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company Profile — EPS Engineering & Consultancy" },
      {
        name: "description",
        content:
          "EPS Engineering & Consultancy (EPS Mühendislik ve Danışmanlık A.Ş.) — officially established in 2024, backed by 25 years of multi-industry engineering experience delivered through a global partnership structure with teams in Türkiye, India and Europe.",
      },
      { property: "og:title", content: "Company Profile — EPS Engineering & Consultancy" },
      {
        property: "og:description",
        content:
          "Officially established in 2024, built on 25 years of engineering experience across multiple industries. Teams in Türkiye, India and Europe.",
      },
      { property: "og:image", content: images.companyTechBg },
    ],
  }),
  component: About,
});

function About() {
  const t = useT();

  const values = [
    {
      icon: Target,
      title: t("Solution-Driven", "Çözüm Odaklı"),
      desc: t(
        "We engineer around your process goals, not generic templates — every deliverable solves a real problem.",
        "Genel şablonlarla değil proses hedeflerinizle mühendislik yaparız — her çıktı gerçek bir sorunu çözer.",
      ),
    },
    {
      icon: Award,
      title: t("Global Standards", "Global Standartlar"),
      desc: t(
        "Designs referenced to ASME, PED, EN, ATEX, GMP and ISO codes for compliance and reliability.",
        "ASME, PED, EN, ATEX, GMP ve ISO kodlarına referanslı, uyum ve güvenilirlik için tasarımlar.",
      ),
    },
    {
      icon: Handshake,
      title: t("Partnership Structure", "Ortaklık Yapısı"),
      desc: t(
        "A flexible partnership organization that scales specialist capacity to each project's scope.",
        "Her projenin kapsamına göre uzman kapasiteyi ölçekleyen esnek bir ortaklık organizasyonu.",
      ),
    },
    {
      icon: Globe2,
      title: t("Global Reach", "Global Erişim"),
      desc: t(
        "Engineering teams in Türkiye and India, actively serving clients across Europe, the Middle East, Africa and Asia.",
        "Türkiye ve Hindistan'da mühendislik ekipleri; Avrupa, Orta Doğu, Afrika ve Asya'daki müşterilere aktif hizmet.",
      ),
    },
  ];

  const capabilities = [
    t("Concept to detailed engineering", "Konseptten detay mühendisliğe"),
    t("Production buildings & utility plant design", "Üretim binaları & yardımcı tesis tasarımı"),
    t("3D modeling to finite element analysis", "3D modellemeden sonlu elemanlar analizine"),
    t("Process safety analysis & HAZOP studies", "Proses güvenliği analizi & HAZOP çalışmaları"),
    t("Automation, SCADA & digital twin", "Otomasyon, SCADA & dijital ikiz"),
    t("Turnkey EPC, CQV & validation", "Anahtar teslim EPC, CQV & validasyon"),
  ];

  return (
    <>
      <PageHero
        image={images.companyTechBg}
        eyebrow={t("Company Profile", "Kurumsal Profil")}
        title={t(
          "Engineering Built on Decades of Experience",
          "Onlarca yıllık deneyim üzerine kurulu mühendislik",
        )}
        intro={t(
          "EPS Engineering & Consultancy Inc. (EPS Mühendislik ve Danışmanlık A.Ş.) is a process engineering firm delivering solution-driven projects across multiple industries — from concept design to turnkey delivery.",
          "EPS Mühendislik ve Danışmanlık A.Ş., konsept tasarımdan anahtar teslim teslimata kadar birçok sektörde çözüm odaklı projeler sunan bir proses mühendisliği firmasıdır.",
        )}
      />

      <CompanyFilm />



      {/* COMPANY PROFILE — established 2024, 25 years */}
      <section className="relative overflow-hidden eps-section">
        <img
          src={images.companyTechBg}
          alt=""
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 eps-grid-bg opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t("Who we are", "Biz kimiz")}
              title={t(
                "Powered by 25 Years of Engineering",
                "25 Yıllık Mühendislik ile Güçlendirildi",
              )}
              intro={t(
                "Our engineers bring 25 years of hands-on experience delivering projects across a wide range of industries. Through a flexible partnership organization structure, we assemble the right specialist teams for each project — combining the rigor of large engineering houses with the agility of a focused firm.",
                "Mühendislerimiz çok çeşitli sektörlerde proje teslim eden 25 yıllık saha deneyimini beraberinde getiriyor. Esnek bir ortaklık organizasyon yapısı sayesinde her proje için doğru uzman ekipleri bir araya getiriyoruz — büyük mühendislik firmalarının titizliğini odaklı bir firmanın çevikliğiyle birleştiriyoruz.",
              )}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-border bg-card/80 p-7 shadow-card backdrop-blur">
              <Globe2 className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display text-4xl font-bold text-gradient-steel">
                {t("Region", "Bölge")}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("IMEA + E Region", "IMEA + E Bölgesi")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur">
                <div className="font-display text-3xl font-bold text-gradient-steel">25 {t("yrs", "yıl")}</div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {t("Multi-industry engineering experience.", "Çok sektörlü mühendislik deneyimi.")}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur">
                <div className="font-display text-3xl font-bold text-gradient-steel">3</div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {t("Engineering hubs: Türkiye, India, Spain.", "Mühendislik merkezi: Türkiye, Hindistan, İspanya.")}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur">
              <Handshake className="h-6 w-6 text-primary" />
              <p className="mt-3 text-sm text-foreground">
                {t(
                  "A variable partnership organization structure lets us scale specialist capacity up or down for every project.",
                  "Değişken ortaklık organizasyon yapımız, her proje için uzman kapasiteyi ölçeklendirmemizi sağlar.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-4">
          <Stat value="25 yrs" label={t("Industry Experience", "Sektör Deneyimi")} />
          <Stat value="EMEA" label={t("+ Asia Coverage", "+ Asya Kapsamı")} />
          <Stat value="3" label={t("Engineering Hubs", "Mühendislik Merkezi")} />
          <Stat value="EPC" label={t("Turnkey Delivery", "Anahtar Teslim")} />
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("Global presence", "Global varlık")}
            title={t("Engineering teams across three regions", "Üç bölgede mühendislik ekipleri")}
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                city: t("Istanbul, Türkiye", "İstanbul, Türkiye"),
                role: t("Headquarters", "Merkez"),
                desc: t(
                  "Leads engineering, project management and delivery for clients across the region.",
                  "Bölgedeki müşteriler için mühendislik, proje yönetimi ve teslimatı yönetir.",
                ),
              },
              {
                city: t("India", "Hindistan"),
                role: t("Engineering Team", "Mühendislik Ekibi"),
                desc: t(
                  "A dedicated engineering team expanding our design and analysis capacity around the clock.",
                  "Tasarım ve analiz kapasitemizi kesintisiz genişleten özel bir mühendislik ekibi.",
                ),
              },
              {
                city: t("Barcelona, Spain", "Barselona, İspanya"),
                role: t("European Office", "Avrupa Ofisi"),
                desc: t(
                  "Supports European projects, clients and global partnerships.",
                  "Avrupa projelerini, müşterilerini ve global ortaklıkları destekler.",
                ),
              },
            ].map((o) => (
              <div key={o.city} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">{o.role}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{o.city}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="eps-section border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("Our values", "Değerlerimiz")}
            title={t("What sets our engineering apart", "Mühendisliğimizi farklı kılan")}
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="group rounded-xl border border-border bg-card p-7 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                  <v.icon className="icon-live h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eps-section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeading
            align="center"
            title={t("Let's build something engineered to last", "Kalıcı olacak bir şey inşa edelim")}
          />
          <div className="mt-8 flex justify-center">
            <PrimaryButton to="/contact">
              {t("Contact Our Engineers", "Mühendislerimize ulaşın")}
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
