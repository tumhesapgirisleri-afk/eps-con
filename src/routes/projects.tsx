import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n/language";
import { images } from "@/lib/images";
import { SectionHeading, PrimaryButton } from "@/components/ui-kit";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Process Plants, Automation & Engineering Deliverables | EPS" },
      {
        name: "description",
        content:
          "EPS projects: carbonated beverage plants, pharmaceutical GMP lines, chemical process systems, automated filling, robotics, pressure vessels, FEA/CFD and EPC turnkey delivery.",
      },
      { property: "og:title", content: "EPS Projects — From P&ID to Turnkey Plant" },
      {
        property: "og:description",
        content:
          "P&IDs, AutoCAD layouts, SolidWorks 3D models and ANSYS/COMSOL FE analyses delivered across EMEA & Asia.",
      },
      { property: "og:image", content: images.fillingLine },
    ],
  }),
  component: Projects,
});

type Category = "all" | "beverage" | "pharma" | "chemical" | "automation" | "construction";

function Projects() {
  const t = useT();
  const [filter, setFilter] = useState<Category>("all");

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: t("All", "Tümü") },
    { id: "beverage", label: t("Beverage", "İçecek") },
    { id: "pharma", label: t("Pharmaceutical", "İlaç") },
    { id: "chemical", label: t("Chemical & Process", "Kimya & Proses") },
    { id: "automation", label: t("Automation", "Otomasyon") },
    { id: "construction", label: t("Construction & Manufacturing Plant", "İnşaat & Üretim Tesisi") },
  ];

  const projects = [
    {
      cat: "beverage" as Category,
      img: images.fillingLine,
      tag: t("Carbonated Beverages", "Gazlı İçecek"),
      title: t("Fully Automated CSD Bottling Plant", "Tam Otomatik Gazlı İçecek Dolum Tesisi"),
      desc: t(
        "Turnkey carbonated soft-drink line scaling from 400 to 25,000 bottles/hour with rotary fillers and CIP.",
        "Rotatif dolum ve CIP ile 400'den 25.000 şişe/saate ölçeklenen anahtar teslim gazlı içecek hattı.",
      ),
      meta: ["EPC", "SCADA", "CIP"],
    },
    {
      cat: "beverage" as Category,
      img: images.waterPlantLine,
      tag: t("Bottled Water", "Şişe Suyu"),
      title: t("15,000 bph Complete Water Bottling Plant", "15.000 şişe/saat Komple Su Dolum Tesisi"),
      desc: t(
        "End-to-end 15,000 bottle/hour water bottling plant — blow-molding, rinsing, filling, capping, labeling and shrink-wrap, delivered as a fully integrated turnkey line.",
        "Uçtan uca 15.000 şişe/saat kapasiteli su dolum tesisi — şişirme, durulama, dolum, kapaklama, etiketleme ve shrink; tamamen entegre anahtar teslim hat olarak teslim edildi.",
      ),
      meta: ["15,000 bph", "Turnkey", "CIP"],
    },
    {
      cat: "pharma" as Category,
      img: images.cleanroom,
      tag: t("Pharmaceutical", "İlaç"),
      title: t("GMP Clean-Room Production Line", "GMP Temiz Oda Üretim Hattı"),
      desc: t(
        "Clean-room pharmaceutical filling line designed to GMP / GAMP 5 with full CQV and validation reporting.",
        "GMP / GAMP 5'e göre tasarlanmış, tam CQV ve validasyon raporlamalı temiz oda ilaç dolum hattı.",
      ),
      meta: ["GMP", "CQV", "Validation"],
    },
    {
      cat: "pharma" as Category,
      img: images.gmpFillingLine,
      tag: t("GMP Filling & Packaging", "GMP Dolum & Paketleme"),
      title: t("Linear GMP Filling Line — 500 mL to 10 L", "Lineer GMP Dolum Hattı — 500 mL'den 10 L'ye"),
      desc: t(
        "End-to-end 2,000 bph linear filling line for 500 mL to 10 L containers with case packer and end-of-line robotic palletizer. Delivered against full GMP requirements and completed with GMP certification.",
        "500 mL'den 10 L'ye kaplar için 2.000 şişe/saat kapasiteli, kutulama makinesi ve hat sonu robot palletizer içeren uçtan uca lineer dolum hattı. Tüm GMP gereklilikleri gözetilerek teslim edildi ve GMP sertifikası alınarak tamamlandı.",
      ),
      meta: ["2,000 bph", "GMP Certified", "Palletizer"],
    },
    {
      cat: "chemical" as Category,
      img: images.cadReactor,
      tag: t("Chemical Process", "Kimyasal Proses"),
      title: t("Reactor & Pressure Vessel Package", "Reaktör & Basınçlı Kap Paketi"),
      desc: t(
        "Agitated reactor and pressure-vessel design verified by FEA, fabricated to ASME / PED requirements.",
        "FEA ile doğrulanan, ASME / PED gereksinimlerine göre imal edilen karıştırıcılı reaktör ve basınçlı kap tasarımı.",
      ),
      meta: ["ASME", "FEA", "SolidWorks"],
    },
    {
      cat: "chemical" as Category,
      img: images.blenderMezzanine,
      tag: t("Powder & Blending", "Toz & Karıştırma"),
      title: t("Big-Bag Fed Atmospheric Blending Suite", "Big-Bag Beslemeli Atmosferik Karıştırma Ünitesi"),
      desc: t(
        "Atmospheric blender fed from a big-bag (FIBC) station with a floor weighing platform and IBC dosing, plus four additional 10 m³ stainless atmospheric blenders. A steel mezzanine lets operators charge raw material through the top manholes.",
        "Big-bag (FIBC) istasyonundan beslenen, zeminde tartım platformu ve IBC dozajı bulunan atmosferik karıştırıcı ile birlikte dört adet 10 m³ paslanmaz atmosferik karıştırıcı. Çelik mezanin, operatörlerin üst manhole'lardan hammadde şarj etmesini sağlar.",
      ),
      meta: ["5 x Blenders", "10 m³", "Mezzanine"],
    },
    {
      cat: "chemical" as Category,
      img: images.tankFarm,
      tag: t("Storage & Utilities", "Depolama & Yardımcı Tesis"),
      title: t("Atmospheric Tank Farm & Mixers", "Atmosferik Tank Çiftliği & Mikserler"),
      desc: t(
        "Atmospheric storage tanks, stock tanks and high-shear mixers with full utility plant integration.",
        "Atmosferik stok tankları ve yüksek kesmeli mikserler; eksiksiz yardımcı tesis entegrasyonu.",
      ),
      meta: ["Tanks", "Mixers", "Utilities"],
    },
    {
      cat: "chemical" as Category,
      img: images.waterTreatment,
      tag: t("Water Treatment", "Su Arıtma"),
      title: t("Process Water Treatment Plant", "Proses Suyu Arıtma Tesisi"),
      desc: t(
        "RO and multi-stage filtration skids for process and utility water, fully instrumented and automated.",
        "Proses ve yardımcı su için RO ve çok kademeli filtrasyon skidleri; tam enstrümante ve otomatik.",
      ),
      meta: ["RO", "Filtration", "PLC"],
    },
    {
      cat: "automation" as Category,
      img: images.robotics,
      tag: t("Robotics", "Robotik"),
      title: t("Line-End Robotic Palletizing", "Hat Sonu Robotik Paletleme"),
      desc: t(
        "End-of-line automation with robotic palletizing, conveyors and Siemens-based control integration.",
        "Robotik paletleme, konveyörler ve Siemens tabanlı kontrol entegrasyonu ile hat sonu otomasyonu.",
      ),
      meta: ["Robotics", "Siemens", "EOL"],
    },
    {
      cat: "automation" as Category,
      img: images.scada,
      tag: t("Automation", "Otomasyon"),
      title: t("Plant-Wide SCADA & Simatic Control", "Tesis Geneli SCADA & Simatic Kontrol"),
      desc: t(
        "Siemens Simatic PLC and SCADA architecture for plant-wide monitoring, control and reporting.",
        "Tesis geneli izleme, kontrol ve raporlama için Siemens Simatic PLC ve SCADA mimarisi.",
      ),
      meta: ["SCADA", "Simatic", "HMI"],
    },
    {
      cat: "automation" as Category,
      img: images.digitalTwin,
      tag: t("Digital Twin", "Dijital İkiz"),
      title: t("Digital Twin & Virtual Factory Tour", "Dijital İkiz & Sanal Fabrika Turu"),
      desc: t(
        "Digital twin and virtual factory tour for operator training, optimization and predictive insight.",
        "Operatör eğitimi, optimizasyon ve öngörüsel içgörü için dijital ikiz ve sanal fabrika turu.",
      ),
      meta: ["Twin", "VR Tour", "Analytics"],
    },
    {
      cat: "construction" as Category,
      img: images.chemicalLab,
      tag: t("Laboratory Construction", "Laboratuvar İnşaatı"),
      title: t("GMP Quality-Control Chemical Laboratory", "GMP Kalite Kontrol Kimya Laboratuvarı"),
      desc: t(
        "Purpose-built chemical QC laboratory answering the GMP requirements of the production plant. Field samples arrive directly to the lab through a pneumatic tube transport system, with the facility designed to ISO 17025 and GMP standards.",
        "Üretim tesisinin GMP gerekliliklerini karşılamak üzere özel tasarlanan kimyasal kalite kontrol laboratuvarı. Saha numuneleri pnömatik tüp taşıma sistemiyle doğrudan laboratuvara ulaşır; tesis ISO 17025 ve GMP standartlarına göre tasarlanmıştır.",
      ),
      meta: ["GMP", "ISO 17025", "Pneumatic Tube"],
    },
    {
      cat: "construction" as Category,
      img: images.chemicalPlantIso,
      tag: t("Chemical Manufacturing Plant", "Kimyasal Üretim Tesisi"),
      title: t("30,000 t/year Fully-Automatic Chemical Plant", "30.000 ton/yıl Tam Otomatik Kimyasal Tesis"),
      desc: t(
        "Fully integrated, fully automatic chemical production plant with a 30,000 tonne/year capacity built around 12 reactors — engineered and constructed end to end, from civil works and steel structure to process, piping and DCS automation.",
        "12 reaktör etrafında kurulmuş, 30.000 ton/yıl kapasiteli tam entegre, tam otomatik kimyasal üretim tesisi — inşaat ve çelik konstrüksiyondan proses, boru hattı ve DCS otomasyonuna kadar uçtan uca mühendislik ve inşaat.",
      ),
      meta: ["30,000 t/yr", "12 Reactors", "Full Auto"],
    },
    {
      cat: "construction" as Category,
      img: images.beveragePlantIso,
      tag: t("Production Building", "Üretim Binası"),
      title: t("Turnkey Production Building & Utility Plant", "Anahtar Teslim Üretim Binası & Yardımcı Tesis"),
      desc: t(
        "Design-and-build of a complete production building with steel mezzanines, utility plant and infrastructure — delivered as a single end-to-end solution from civil design to fully integrated process lines.",
        "Çelik mezaninler, yardımcı tesis ve altyapı ile eksiksiz üretim binasının tasarla-ve-inşa et modeliyle yapımı — inşaat tasarımından tam entegre proses hatlarına kadar tek bir uçtan uca çözüm.",
      ),
      meta: ["Design-Build", "Mezzanine", "Turnkey"],
    },
  ];


  const filtered = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  const deliverables = [
    { img: images.pidDrawing, title: t("P&ID Diagrams", "P&ID Diyagramları") },
    { img: images.chemPlantLayout, title: t("AutoCAD Layouts", "AutoCAD Layoutları") },
    { img: images.cadReactor, title: t("SolidWorks 3D Models", "SolidWorks 3D Modeller") },
    { img: images.feaVessel, title: t("FE Analysis (ANSYS)", "FE Analizi (ANSYS)") },
    { img: images.cfdMixer, title: t("CFD Mixing Studies", "CFD Karıştırma Çalışmaları") },
    { img: images.cfdPipe, title: t("In-Pipe Flow (COMSOL)", "Boru İçi Akış (COMSOL)") },
  ];

  return (
    <>
      <PageHero
        image={images.fillingLine}
        eyebrow={t("Projects", "Projeler")}
        title={t("Engineering Delivered at Industrial Scale", "Endüstriyel Ölçekte Teslim Edilen Mühendislik")}
        intro={t(
          "Representative projects across beverage, pharmaceutical, chemical and automation sectors — executed under an EPC model from design to commissioning.",
          "İçecek, ilaç, kimya ve otomasyon sektörlerinde temsili projeler — tasarımdan devreye almaya EPC modeliyle yürütülmüştür.",
        )}
      />

      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                  filter === c.id
                    ? "border-primary bg-gradient-primary text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:text-foreground",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-colors hover:border-primary/60"
              >
                <div className="relative overflow-hidden">
                  <img src={p.img} loading="lazy" width={1280} height={960} alt={p.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.meta.map((m) => (
                      <span key={m} className="rounded border border-border px-2 py-0.5 text-xs font-medium text-steel">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eps-section border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("Engineering Deliverables", "Mühendislik Çıktıları")}
            title={t("From P&ID to Finite Element Analysis", "P&ID'den Sonlu Elemanlar Analizine")}
            intro={t(
              "Every project is documented to global standards: P&IDs, AutoCAD layouts, SolidWorks 3D models and ANSYS / COMSOL simulations.",
              "Her proje global standartlara göre belgelenir: P&ID'ler, AutoCAD layoutlar, SolidWorks 3D modeller ve ANSYS / COMSOL simülasyonları.",
            )}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <figure key={d.title} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <img src={d.img} loading="lazy" width={1280} height={960} alt={d.title} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-sm font-semibold text-foreground">{d.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="eps-section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeading
            align="center"
            title={t("Your Project Could Be Next", "Sıradaki Proje Sizinki Olabilir")}
            intro={t(
              "From a single equipment package to a complete turnkey plant — let's scope it together.",
              "Tek bir ekipman paketinden eksiksiz anahtar teslim tesise — kapsamı birlikte belirleyelim.",
            )}
          />
          <div className="mt-8 flex justify-center">
            <PrimaryButton to="/contact">
              {t("Discuss your project", "Projenizi konuşalım")}
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
