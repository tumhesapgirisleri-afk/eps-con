import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  HardHat,
  Factory,
  Layers,
  Truck,
  Waves,
  Wind,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useT } from "@/i18n/language";
import { images } from "@/lib/images";
import { SectionHeading, PrimaryButton } from "@/components/ui-kit";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Plant Buildings & Construction — End-to-End Solutions | EPS" },
      {
        name: "description",
        content:
          "EPS designs and builds production buildings, utility plants and supporting infrastructure — delivering end-to-end, turnkey facilities from civil design to fully integrated process lines.",
      },
      { property: "og:title", content: "Plant Buildings & Construction — EPS" },
      {
        property: "og:description",
        content:
          "Production buildings, utility plants and infrastructure engineered and constructed as one end-to-end solution.",
      },
      { property: "og:image", content: images.chemicalPlantIso },
    ],
  }),
  component: Facilities,
});

function Facilities() {
  const t = useT();

  const infra = [
    {
      icon: Building2,
      title: t("Production Buildings", "Üretim Binaları"),
      desc: t(
        "Structural and architectural design of production halls sized around the process and its equipment.",
        "Proses ve ekipmanına göre boyutlandırılan üretim salonlarının yapısal ve mimari tasarımı.",
      ),
    },
    {
      icon: Layers,
      title: t("Utility Plants & Mezzanines", "Yardımcı Tesisler & Mezaninler"),
      desc: t(
        "Utility buildings, steel mezzanines and technical floors for tanks, mixers and process equipment.",
        "Tanklar, mikserler ve proses ekipmanı için yardımcı tesis binaları, çelik mezaninler ve teknik katlar.",
      ),
    },
    {
      icon: Waves,
      title: t("Process Water & Wastewater", "Proses Suyu & Atık Su"),
      desc: t(
        "Water treatment, distribution and wastewater infrastructure integrated with the plant.",
        "Tesisle bütünleşik su arıtma, dağıtım ve atık su altyapısı.",
      ),
    },
    {
      icon: Wind,
      title: t("HVAC & Clean Utilities", "HVAC & Temiz Ütiliteler"),
      desc: t(
        "HVAC, compressed air, steam, chilled water and clean-utility networks.",
        "HVAC, basınçlı hava, buhar, soğutma suyu ve temiz ütilite şebekeleri.",
      ),
    },
    {
      icon: Zap,
      title: t("Power & Electrical", "Güç & Elektrik"),
      desc: t(
        "MV/LV distribution, substations, cabling and plant-wide electrical infrastructure.",
        "OG/AG dağıtım, trafo merkezleri, kablolama ve tesis geneli elektrik altyapısı.",
      ),
    },
    {
      icon: Truck,
      title: t("Logistics & Site Works", "Lojistik & Saha İşleri"),
      desc: t(
        "Loading docks, roads, storage yards and administrative buildings.",
        "Yükleme rampaları, yollar, depolama alanları ve idari binalar.",
      ),
    },
  ];

  const steps = [
    { n: "01", label: t("Civil & structural design", "İnşaat & yapısal tasarım") },
    { n: "02", label: t("Process & utility integration", "Proses & ütilite entegrasyonu") },
    { n: "03", label: t("Construction & installation", "İnşaat & montaj") },
    { n: "04", label: t("Commissioning & handover", "Devreye alma & teslim") },
  ];

  return (
    <>
      <PageHero
        image={images.chemicalPlantIso}
        eyebrow={t("Plant Buildings & Construction", "Tesis Binaları & İnşaat")}
        title={t(
          "From an empty plot to a fully integrated plant",
          "Boş bir arsadan tam entegre bir tesise",
        )}
        intro={t(
          "We design factory buildings and supporting infrastructure — and construct them. From civil and structural works to utilities and process lines, EPS delivers the whole facility as one accountable, end-to-end solution.",
          "Fabrika binalarını ve destekleyici altyapıyı tasarlarız ve inşa ederiz. İnşaat ve yapısal işlerden ütilitelere ve proses hatlarına kadar EPS, tüm tesisi tek sorumlu, uçtan uca çözüm olarak sunar.",
        )}
      />

      {/* END TO END BANNER */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <HardHat className="h-7 w-7 text-primary" />
            <p className="text-lg font-semibold text-foreground">
              {t("Design + Build under one roof", "Tasarım + İnşaat tek çatı altında")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold text-primary/40">{s.n}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEVERAGE PLANT — isometric */}
      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={t("Case: Beverage plant", "Örnek: İçecek tesisi")}
                title={t(
                  "Carbonated beverage production building",
                  "Gazlı içecek üretim binası",
                )}
                intro={t(
                  "A production building housing a fully integrated carbonated beverage line — syrup room, PET blow-molding, rotary filling and capping, labeling and end-of-line packaging and palletizing — all engineered into a single, efficient plant.",
                  "Tam entegre bir gazlı içecek hattını barındıran üretim binası — şuruphane, PET şişirme, döner dolum ve kapaklama, etiketleme, hat sonu paketleme ve paletleme — hepsi tek ve verimli bir tesise mühendislikle yerleştirilmiştir.",
                )}
              />
              <ul className="mt-8 space-y-3">
                {[
                  t("Syrup & mixing room", "Şuruphane & karıştırma odası"),
                  t("PET blow-molding & filling monobloc", "PET şişirme & dolum monoblok"),
                  t("Labeling, packaging & palletizing", "Etiketleme, paketleme & paletleme"),
                  t("Utilities, mezzanine & building envelope", "Ütiliteler, mezanin & bina kabuğu"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={images.beveragePlantIso}
                loading="lazy"
                width={1280}
                height={960}
                alt={t(
                  "Isometric cutaway of a carbonated beverage production building with an integrated line",
                  "Entegre hatlı gazlı içecek üretim binasının izometrik kesiti",
                )}
                className="w-full object-cover"
              />
              <figcaption className="border-t border-border bg-card px-5 py-3 text-xs text-muted-foreground">
                {t(
                  "Isometric engineering view — production building with fully integrated beverage line.",
                  "İzometrik mühendislik görünümü — tam entegre içecek hatlı üretim binası.",
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CHEMICAL PLANT — isometric */}
      <section className="eps-section border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <figure className="order-2 overflow-hidden rounded-2xl border border-border shadow-elegant lg:order-1">
              <img
                src={images.chemicalPlantIso}
                loading="lazy"
                width={1280}
                height={960}
                alt={t(
                  "Isometric render of a chemical plant with raw material tanks, mixers on a mezzanine, utilities, loading ramp and a glass-facade admin building",
                  "Hammadde tankları, mezaninde mikserler, ütiliteler, yükleme rampası ve cam cepheli idari binası olan kimya tesisinin izometrik görünümü",
                )}
                className="w-full object-cover"
              />
              <figcaption className="border-t border-border bg-card px-5 py-3 text-xs text-muted-foreground">
                {t(
                  "Isometric engineering view — chemical plant, utilities, logistics and administrative building.",
                  "İzometrik mühendislik görünümü — kimya tesisi, ütiliteler, lojistik ve idari bina.",
                )}
              </figcaption>
            </figure>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow={t("Case: Chemical plant", "Örnek: Kimya tesisi")}
                title={t("Chemical production complex", "Kimya üretim kompleksi")}
                intro={t(
                  "A chemical plant building with raw-material storage tanks and agitated mixers on a steel mezzanine, complete with utility areas, a truck loading ramp and a modern glass-facade administrative building — a coherent engineering design where every element belongs together.",
                  "Çelik mezaninde hammadde depolama tankları ve karıştırmalı mikserler bulunan bir kimya tesisi binası; ütilite alanları, kamyon yükleme rampası ve modern cam cepheli idari bina ile tamamlanmış — her unsurun birbirine ait olduğu bütünsel bir mühendislik tasarımı.",
                )}
              />
              <ul className="mt-8 space-y-3">
                {[
                  t("Raw-material tanks & storage", "Hammadde tankları & depolama"),
                  t("Mixers & reactors on a steel mezzanine", "Çelik mezaninde mikserler & reaktörler"),
                  t("Utilities & truck loading ramp", "Ütiliteler & kamyon yükleme rampası"),
                  t("Glass-facade administrative building", "Cam cepheli idari bina"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE GRID */}
      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("Supporting infrastructure", "Destekleyici altyapı")}
            title={t("Every system a plant needs", "Bir tesisin ihtiyaç duyduğu her sistem")}
            intro={t(
              "Buildings are only part of the picture. We design and build the supporting infrastructure that keeps a plant running.",
              "Binalar resmin sadece bir parçası. Bir tesisi çalışır tutan destekleyici altyapıyı da tasarlar ve inşa ederiz.",
            )}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infra.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                  <s.icon className="icon-live h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="eps-section border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
            <Factory className="h-7 w-7 text-primary-foreground" />
          </div>
          <SectionHeading
            align="center"
            title={t("Planning a new plant or expansion?", "Yeni bir tesis mi yoksa genişleme mi planlıyorsunuz?")}
            intro={t(
              "Tell us about your project and our engineers will scope the buildings, utilities and process line as a single turnkey solution.",
              "Projenizi bize anlatın; mühendislerimiz binaları, ütiliteleri ve proses hattını tek anahtar teslim çözüm olarak kapsamlandırsın.",
            )}
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
