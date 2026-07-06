import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  ScanLine,
  Activity,
  ShieldCheck,
  Factory,
  Cpu,
  Gauge,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { useT } from "@/i18n/language";
import { images } from "@/lib/images";
import {
  SectionHeading,
  PrimaryButton,
  GhostButton,
  Stat,
  Eyebrow,
} from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EPS Engineering Process Solutions | Process Engineering & Turnkey Plants" },
      {
        name: "description",
        content:
          "Solution-driven process engineering from concept to commissioning: detailed design, 3D modeling, FEA/CFD, automation, EPC and CQV. 40+ engineers serving EMEA & Asia.",
      },
      { property: "og:title", content: "EPS — Engineering Process Solutions" },
      {
        property: "og:description",
        content:
          "Advanced process engineering, 3D design, FE analysis and turnkey EPC delivery. HQ Istanbul · Office Barcelona.",
      },
      { property: "og:image", content: images.heroPlant },
      { name: "twitter:image", content: images.heroPlant },
    ],
  }),
  component: Home,
});

function Home() {
  const t = useT();

  const services = [
    {
      id: "concept",
      icon: ScanLine,
      title: t("Concept & Detailed Engineering", "Konsept & Detay Mühendislik"),
      desc: t(
        "From feasibility and concept design to full detailed engineering packages built on global codes.",
        "Fizibilite ve konsept tasarımdan, global kodlara dayalı eksiksiz detay mühendislik paketlerine.",
      ),
    },
    {
      id: "modeling",
      icon: Boxes,
      title: t("3D Modeling & SolidWorks", "3D Modelleme & SolidWorks"),
      desc: t(
        "Equipment, skids and plant layouts modeled in SolidWorks with AutoCAD GA and P&ID deliverables.",
        "SolidWorks ile ekipman, skid ve tesis yerleşimleri; AutoCAD GA ve P&ID çıktıları.",
      ),
    },
    {
      id: "analysis",
      icon: Activity,
      title: t("FEA & CFD Analysis", "FEA & CFD Analizi"),
      desc: t(
        "Finite element and flow analyses in ANSYS / COMSOL — process flow, mixers and in-pipe behavior.",
        "ANSYS / COMSOL ile sonlu elemanlar ve akış analizleri — proses akışı, karıştırıcı ve boru içi davranış.",
      ),
    },
    {
      id: "hazop",
      icon: ShieldCheck,
      title: t("Process Safety & HAZOP", "Proses Güvenliği & HAZOP"),
      desc: t(
        "HAZOP studies, process safety analysis and system improvements for compliant, reliable operation.",
        "Uyumlu ve güvenilir işletme için HAZOP çalışmaları, proses güvenliği analizleri ve sistem iyileştirmeleri.",
      ),
    },
    {
      id: "automation",
      icon: Cpu,
      title: t("Automation & SCADA", "Otomasyon & SCADA"),
      desc: t(
        "Siemens & Simatic based PLC/SCADA automation, line-end robotics and robotic production systems.",
        "Siemens & Simatic tabanlı PLC/SCADA otomasyonu, hat sonu robotikleri ve robotik üretim sistemleri.",
      ),
    },
    {
      id: "epc",
      icon: Factory,
      title: t("Turnkey EPC & Zero-Plant", "Anahtar Teslim EPC & Sıfır Fabrika"),
      desc: t(
        "EPC-managed projects from greenfield plant setup through commissioning, CQV and validation.",
        "Sıfırdan fabrika kurulumundan devreye alma, CQV ve validasyona kadar EPC yönetimli projeler.",
      ),
    },
  ];

  const standards = [
    "ASME VIII",
    "API 650 / 620",
    "PED 2014/68/EU",
    "EN 13445",
    "ATEX",
    "GMP / GAMP 5",
    "ISO 9001",
  ];

  const lifecycle = [
    {
      n: "01",
      title: t("Concept & Basic Design", "Konsept & Temel Tasarım"),
      desc: t(
        "Process definition, mass & energy balances, PFDs and budget-level engineering.",
        "Proses tanımı, kütle & enerji dengeleri, PFD'ler ve bütçe seviyesi mühendislik.",
      ),
    },
    {
      n: "02",
      title: t("Detailed Engineering", "Detay Mühendislik"),
      desc: t(
        "P&IDs, 3D models, FEA/CFD, equipment sizing and full construction packages.",
        "P&ID'ler, 3D modeller, FEA/CFD, ekipman boyutlandırma ve eksiksiz inşaat paketleri.",
      ),
    },
    {
      n: "03",
      title: t("Procurement & Construction", "Tedarik & İnşaat"),
      desc: t(
        "EPC-managed sourcing, fabrication oversight and on-site construction coordination.",
        "EPC yönetimli tedarik, imalat denetimi ve saha inşaat koordinasyonu.",
      ),
    },
    {
      n: "04",
      title: t("Commissioning & CQV", "Devreye Alma & CQV"),
      desc: t(
        "Commissioning, qualification & validation, validation reports and digital twin handover.",
        "Devreye alma, kalifikasyon & validasyon, validasyon raporları ve dijital ikiz teslimi.",
      ),
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={images.heroPlant}
          alt={t("Industrial process plant at dusk", "Alacakaranlıkta endüstriyel proses tesisi")}
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 eps-grid-bg opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <Eyebrow>{t("Engineering Process Solutions", "Engineering Process Solutions")}</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-6xl">
              {t("Engineering that moves", "Endüstriyi ileri taşıyan")}{" "}
              <span className="text-gradient-steel">{t("industry forward", "mühendislik")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t(
                "EPS Engineering & Consultancy delivers solution-driven process engineering — from concept and advanced design to 3D modeling, finite element analysis, automation and turnkey EPC delivery.",
                "EPS Mühendislik ve Danışmanlık, konsept ve ileri tasarımdan 3D modelleme, sonlu elemanlar analizi, otomasyon ve anahtar teslim EPC teslimatına kadar çözüm odaklı proses mühendisliği sunar.",
              )}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton to="/services">
                {t("Explore Services", "Hizmetleri Keşfedin")}
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <GhostButton to="/projects">{t("View Projects", "Projeleri Görün")}</GhostButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-fade" />
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
          <Stat value="125+" label={t("Projects Delivered", "Teslim Edilen Proje")} />
          <Stat value="100+" label={t("EPC Projects", "EPC Projesi")} />
          <Stat value="40+" label={t("Expert Engineers", "Uzman Mühendis")} />
          <Stat value="4" label={t("Continents Served", "Hizmet Verilen Kıta")} />
        </div>
      </section>

      {/* STANDARDS STRIP */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {t("Engineered to global standards", "Global standartlara göre mühendislik")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {standards.map((s) => (
              <span key={s} className="font-display text-sm font-semibold tracking-wide text-steel">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("What we do", "Ne yapıyoruz")}
            title={t(
              "A complete process engineering capability",
              "Eksiksiz bir proses mühendisliği yetkinliği",
            )}
            intro={t(
              "From production buildings and utility plant design to 3D modeling and finite element analysis — one accountable engineering partner across the full lifecycle.",
              "Üretim binalarından yardımcı tesis tasarımına, 3D modellemeden sonlu elemanlar analizine — tüm yaşam döngüsü boyunca tek bir sorumlu mühendislik ortağı.",
            )}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                search={{ service: s.id }}
                className="group flex flex-col rounded-xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                  <s.icon className="icon-live h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 flex items-center gap-2 text-lg font-semibold text-foreground">
                  {s.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <GhostButton to="/services">
              {t("See all services", "Tüm hizmetleri görün")}
              <ArrowRight className="h-4 w-4" />
            </GhostButton>
          </div>
        </div>
      </section>

      {/* SIMULATION SHOWCASE */}
      <section className="eps-section border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={t("Simulation-driven design", "Simülasyon odaklı tasarım")}
                title={t(
                  "We validate every design with physics, not assumptions",
                  "Her tasarımı varsayımlarla değil fizikle doğrularız",
                )}
                intro={t(
                  "World-class CFD and FE analysis for process flow, tank mixers and in-pipe behavior. Structural integrity of pressure vessels, atmospheric tanks, reactors and mixers verified in ANSYS and COMSOL.",
                  "Proses akışı, tank karıştırıcıları ve boru içi davranış için dünya standartlarında CFD ve FE analizi. Basınçlı kaplar, atmosferik tanklar, reaktörler ve mikserlerin yapısal bütünlüğü ANSYS ve COMSOL'da doğrulanır.",
                )}
              />
              <ul className="mt-8 space-y-3">
                {[
                  t("CFD process & mixing flow analysis", "CFD proses & karıştırma akış analizi"),
                  t("FEA stress analysis of pressure vessels", "Basınçlı kapların FEA gerilme analizi"),
                  t("In-pipe flow & pressure-drop studies", "Boru içi akış & basınç düşümü çalışmaları"),
                  t("Hygienic & sanitary design verification", "Hijyenik & sıhhi tasarım doğrulaması"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={images.cfdMixer} loading="lazy" width={1280} height={960} alt={t("CFD tank mixer flow simulation", "CFD tank karıştırıcı akış simülasyonu")} className="aspect-square w-full rounded-xl border border-border object-cover shadow-card" />
              <img src={images.feaVessel} loading="lazy" width={1280} height={960} alt={t("FEA pressure vessel stress analysis", "FEA basınçlı kap gerilme analizi")} className="mt-8 aspect-square w-full rounded-xl border border-border object-cover shadow-card" />
              <img src={images.cfdPipe} loading="lazy" width={1280} height={960} alt={t("In-pipe CFD flow analysis", "Boru içi CFD akış analizi")} className="aspect-square w-full rounded-xl border border-border object-cover shadow-card" />
              <img src={images.cadReactor} loading="lazy" width={1280} height={960} alt={t("SolidWorks 3D reactor model", "SolidWorks 3D reaktör modeli")} className="mt-8 aspect-square w-full rounded-xl border border-border object-cover shadow-card" />
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE / EPC */}
      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("How we deliver", "Nasıl teslim ediyoruz")}
            title={t("End-to-end EPC delivery", "Uçtan uca EPC teslimatı")}
            intro={t(
              "Projects are executed and closed out under an EPC model — engineering, procurement, construction, commissioning, CQV and validation reporting.",
              "Projeler EPC modeli altında yürütülür ve sonlandırılır — mühendislik, tedarik, inşaat, devreye alma, CQV ve validasyon raporlaması.",
            )}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((step) => (
              <div key={step.n} className="relative rounded-xl border border-border bg-card p-7 shadow-card">
                <span className="font-display text-5xl font-bold text-primary/25">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Workflow, label: t("Validation Reporting", "Validasyon Raporlama") },
              { icon: Gauge, label: t("CQV & Qualification", "CQV & Kalifikasyon") },
              { icon: Cpu, label: t("Digital Twin", "Dijital İkiz") },
              { icon: ScanLine, label: t("Virtual Factory Tour", "Sanal Fabrika Turu") },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4">
                <b.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="eps-section border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("Industries", "Sektörler")}
            title={t("Sectors we engineer for", "Mühendislik yaptığımız sektörler")}
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: images.fillingLine, title: t("Carbonated Beverage Plants", "Gazlı İçecek Tesisleri") },
              { img: images.cleanroom, title: t("Pharmaceutical Production", "İlaç Üretimi") },
              { img: images.tankFarm, title: t("Chemical Process & Storage", "Kimyasal Proses & Depolama") },
              { img: images.waterTreatment, title: t("Water Treatment", "Su Arıtma") },
              { img: images.cadReactor, title: t("Pressure & Atmospheric Vessels", "Basınçlı & Atmosferik Kaplar") },
              { img: images.robotics, title: t("Robotic Production Systems", "Robotik Üretim Sistemleri") },
            ].map((s) => (
              <Link
                key={s.title}
                to="/projects"
                className="group relative overflow-hidden rounded-xl border border-border shadow-card"
              >
                <img src={s.img} loading="lazy" width={1280} height={960} alt={s.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-elegant sm:p-16">
            <div className="absolute inset-0 eps-grid-bg opacity-40" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {t("Have a process to design or a plant to build?", "Tasarlanacak bir prosesiniz veya kurulacak bir tesisiniz mi var?")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t(
                  "Talk to our engineering team about concept design, FE analysis, automation or turnkey EPC delivery.",
                  "Konsept tasarım, FE analizi, otomasyon veya anahtar teslim EPC teslimatı için mühendislik ekibimizle görüşün.",
                )}
              </p>
              <div className="mt-8">
                <PrimaryButton to="/contact">
                  {t("Start a conversation", "Görüşme başlatın")}
                  <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
