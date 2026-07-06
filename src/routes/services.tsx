import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ScanLine,
  Boxes,
  Activity,
  ShieldCheck,
  Cpu,
  Factory,
  Building2,
  Droplets,
  Wrench,
  ClipboardCheck,
  ArrowRight,
  ChevronDown,
  PenLine,
  Workflow,
  FileSpreadsheet,
  TrendingUp,
  AlertTriangle,
  GitBranch,
  Grid3x3,
  Zap,
  Bot,
  CircuitBoard,
  Thermometer,
  Snowflake,
  Gauge,
  Users,
  Scale,

} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useT } from "@/i18n/language";
import { images } from "@/lib/images";
import { SectionHeading, PrimaryButton } from "@/components/ui-kit";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Services — Process Engineering, FEA/CFD, Automation & EPC | EPS" },
      {
        name: "description",
        content:
          "EPS engineering services: concept & detailed design, 3D modeling, FEA/CFD, process safety & HAZOP, automation & SCADA, EPC, CQV, validation and digital twin.",
      },
      { property: "og:title", content: "EPS Services — Full-lifecycle Process Engineering" },
      {
        property: "og:description",
        content:
          "From concept design and FE analysis to automation and turnkey EPC delivery across EMEA & Asia.",
      },
      { property: "og:image", content: images.cfdMixer },
    ],
  }),
  component: Services,
});

function Services() {
  const t = useT();
  const { service } = Route.useSearch();
  const [open, setOpen] = useState<string>(service ?? "concept");

  useEffect(() => {
    if (!service) return;
    setOpen(service);
    const el = document.getElementById(`service-${service}`);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [service]);


  type Module = {
    id: string;
    icon: LucideIcon;
    title: string;
    tagline: string;
    detail: React.ReactNode;
  };

  /* ---------- shared sub-blocks ---------- */
  const Metric = ({ value, label }: { value: string; label: string }) => (
    <div className="rounded-lg border border-border bg-background/60 px-4 py-3 text-center">
      <div className="font-display text-2xl font-bold text-gradient-steel">{value}</div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );

  const FlowStep = ({
    n,
    icon: Icon,
    title,
    desc,
    img,
  }: {
    n: string;
    icon: LucideIcon;
    title: string;
    desc: string;
    img: string;
  }) => (
    <div className="group grid gap-4 rounded-xl border border-border bg-background/50 p-4 sm:grid-cols-[1.1fr_1fr] sm:items-center">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
            {n}
          </span>
          <Icon className="icon-live h-5 w-5 text-primary" />
          <h5 className="text-base font-semibold text-foreground">{title}</h5>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
      <img
        src={img}
        loading="lazy"
        width={1280}
        height={960}
        alt={title}
        className="aspect-[16/10] w-full rounded-lg border border-border object-cover shadow-card transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );

  /* ---------- module detail panels ---------- */
  const conceptDetail = (
    <div className="space-y-8">
      {/* Feasibility */}
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <TrendingUp className="icon-pulse h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              {t("Step 0 — Feasibility", "Adım 0 — Fizibilite")}
            </span>
          </div>
          <h4 className="mt-3 text-xl font-semibold text-foreground">
            {t(
              "Engineering-Grade Investment Analysis",
              "Mühendislik Seviyesinde Yatırım Analizi",
            )}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t(
              "Before a single line is drawn, our engineers de-risk the investment: production capacity targets, mass & energy balances, utility load estimates and a CAPEX/OPEX financial model with NPV, IRR, payback and sensitivity analysis — so you know the return, the risks and the scope from day zero.",
              "Tek bir çizgi çizilmeden önce mühendislerimiz yatırımı risksizleştirir: üretim kapasite hedefleri, kütle & enerji dengeleri, yardımcı tesis yük tahminleri ve NPV, IRR, geri ödeme ve duyarlılık analizi içeren CAPEX/OPEX finansal modeli — böylece getiriyi, riskleri ve kapsamı sıfırıncı günden bilirsiniz.",
            )}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <Metric value="NPV" label={t("Net Present Value", "Net Bugünkü Değer")} />
            <Metric value="IRR" label={t("Internal Rate", "İç Verim Oranı")} />
            <Metric value="Payback" label={t("Period", "Geri Ödeme")} />
          </div>
        </div>
        <img
          src={images.feasibilityNpv}
          loading="lazy"
          width={1280}
          height={960}
          alt={t("NPV and payback feasibility analysis", "NPV ve geri ödeme fizibilite analizi")}
          className="aspect-[16/11] w-full rounded-xl border border-border object-cover shadow-elegant"
        />
      </div>

      {/* Concept → PFD → P&ID → BOM */}
      <div>
        <h4 className="text-xl font-semibold text-foreground">
          {t("From Whiteboard to Construction Package", "Beyaz Tahtadan İnşaat Paketine")}
        </h4>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {t(
            "A disciplined, code-driven progression — concept, process flow diagram, fully detailed P&ID and a procurement-ready bill of materials — every deliverable traceable and built to global engineering standards.",
            "Disiplinli, koda dayalı bir ilerleyiş — konsept, proses akış diyagramı, eksiksiz detaylı P&ID ve tedariğe hazır malzeme listesi — her çıktı izlenebilir ve global mühendislik standartlarına göre üretilir.",
          )}
        </p>
        <div className="mt-5 space-y-4">
          <FlowStep
            n="01"
            icon={PenLine}
            title={t("Concept & Basis of Design", "Konsept & Tasarım Esası")}
            desc={t(
              "Process engineers fix the design basis — capacity, battery limits, utility & effluent envelope and applicable codes (ASME, PED 2014/68/EU, ISO, GMP) — locking scope before detailing begins.",
              "Proses mühendisleri tasarım esasını sabitler — kapasite, batarya sınırları, yardımcı tesis & atık zarfı ve geçerli kodlar (ASME, PED 2014/68/EU, ISO, GMP) — detaylandırmadan önce kapsamı netleştirir.",
            )}
            img={images.whiteboardConcept}
          />
          <FlowStep
            n="02"
            icon={Workflow}
            title={t("Process Flow Diagram (PFD)", "Proses Akış Diyagramı (PFD)")}
            desc={t(
              "Streams, major equipment, mass & energy balances and design duties are formalized, with line sizing and equipment datasheets derived to process engineering practice.",
              "Akışlar, ana ekipmanlar, kütle & enerji dengeleri ve tasarım görevleri resmileştirilir; hat boyutlandırma ve ekipman veri sayfaları proses mühendisliği pratiğine göre türetilir.",
            )}
            img={images.cfdPipe}
          />
          <FlowStep
            n="03"
            icon={ScanLine}
            title={t("Detailed P&ID", "Detaylı P&ID")}
            desc={t(
              "Instrumentation, control loops, interlocks, set points, line specs and tags are fully detailed per ISA-5.1 and IEC standards — the single source of truth for construction and commissioning.",
              "Enstrümantasyon, kontrol döngüleri, interlocklar, set noktaları, hat spesifikasyonları ve etiketler ISA-5.1 ve IEC standartlarına göre eksiksiz detaylandırılır — inşaat ve devreye almanın tek doğruluk kaynağı.",
            )}
            img={images.pidDrawing}
          />
          <FlowStep
            n="04"
            icon={FileSpreadsheet}
            title={t("Bill of Materials (BOM) & Procurement", "Malzeme Listesi (BOM) & Tedarik")}
            desc={t(
              "Every valve, fitting, pipe class, instrument and equipment item is quantified with material specs and standard codes — a procurement-ready package with full material traceability.",
              "Her vana, fitting, boru sınıfı, enstrüman ve ekipman kalemi malzeme spesifikasyonları ve standart kodlarla miktarlandırılır — tam malzeme izlenebilirliğine sahip tedariğe hazır paket.",
            )}
            img={images.bomTable}
          />
        </div>
      </div>

      {/* AutoCAD layout rises forward */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-background/60 p-6 sm:p-8">
        <div className="absolute inset-0 eps-grid-bg opacity-40" />
        <div className="relative">
          <h4 className="text-xl font-semibold text-foreground">
            {t("Detailed AutoCAD Plant Layout", "Detaylı AutoCAD Tesis Yerleşimi")}
          </h4>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t(
              "A complete chemical plant general arrangement — equipment list, pipe racks, dimensions and control room, drawn to scale.",
              "Eksiksiz bir kimya tesisi genel yerleşimi — ekipman listesi, boru rafları, ölçüler ve kontrol odası, ölçekli olarak çizilir.",
            )}
          </p>
          <img
            key={open}
            src={images.chemPlantLayout}
            loading="lazy"
            width={1280}
            height={960}
            alt={t("AutoCAD general arrangement of a chemical plant", "Kimya tesisinin AutoCAD genel yerleşimi")}
            className="layout-rise mt-6 w-full rounded-xl border border-border object-cover shadow-elegant"
          />
        </div>
      </div>
    </div>
  );

  const hazopDetail = (
    <div className="space-y-6">
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        {t(
          "Our process safety practice is built on three fundamental building blocks — a quantified risk matrix, a cause & effect interlock matrix for the safety instrumented system, and structured root cause analysis.",
          "Proses güvenliği uygulamamız üç temel yapı taşı üzerine kuruludur — sayısallaştırılmış risk matrisi, güvenlik enstrümante sistemi için neden & etki interlock matrisi ve yapılandırılmış kök neden analizi.",
        )}
      </p>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            icon: Grid3x3,
            img: images.riskMatrix,
            title: t("Risk Matrix", "Risk Matrisi"),
            desc: t(
              "5×5 severity-vs-likelihood matrix to rank and prioritize every identified deviation.",
              "Her tespit edilen sapmayı sıralamak ve önceliklendirmek için 5×5 şiddet-olasılık matrisi.",
            ),
          },
          {
            icon: AlertTriangle,
            img: images.interlockMatrix,
            title: t("Interlock (Cause & Effect) Matrix", "Interlock (Neden & Etki) Matrisi"),
            desc: t(
              "SIS cause & effect matrix mapping initiating causes to trip and final element actions.",
              "Başlatıcı nedenleri trip ve son eleman aksiyonlarına eşleyen SIS neden & etki matrisi.",
            ),
          },
          {
            icon: GitBranch,
            img: images.rootCause,
            title: t("Root Cause Analysis", "Kök Neden Analizi"),
            desc: t(
              "Fishbone / Ishikawa method to trace deviations to their true underlying causes.",
              "Sapmaları gerçek temel nedenlerine kadar izleyen balık kılçığı / Ishikawa yöntemi.",
            ),
          },
        ].map((c) => (
          <div key={c.title} className="group overflow-hidden rounded-xl border border-border bg-background/50 shadow-card">
            <img src={c.img} loading="lazy" width={1280} height={960} alt={c.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div className="p-5">
              <div className="flex items-center gap-2.5">
                <c.icon className="icon-live h-5 w-5 text-primary" />
                <h5 className="text-base font-semibold text-foreground">{c.title}</h5>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {[
          t("HAZOP node-by-node guideword studies", "Düğüm bazında kılavuz kelime HAZOP çalışmaları"),
          t("LOPA & SIL determination", "LOPA & SIL belirleme"),
          t("Debottlenecking & system improvement", "Darboğaz giderme & sistem iyileştirme"),
          t("High-pressure & atmospheric system safety", "Yüksek basınç & atmosferik sistem güvenliği"),
        ].map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );

  const automationDetail = (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <Zap className="icon-pulse h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              {t("Live control signals", "Canlı kontrol sinyalleri")}
            </span>
          </div>
          <h4 className="mt-3 text-xl font-semibold text-foreground">
            {t("Siemens Simatic PLC, SCADA & Robotics", "Siemens Simatic PLC, SCADA & Robotik")}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t(
              "From field sensor to HMI, every signal is engineered: PLC logic, SCADA visualization, line-end palletizing and robotic production systems — fully integrated and validated.",
              "Saha sensöründen HMI'a kadar her sinyal mühendislikle tasarlanır: PLC mantığı, SCADA görselleştirme, hat sonu paletleme ve robotik üretim sistemleri — tam entegre ve doğrulanmış.",
            )}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { icon: CircuitBoard, l: t("PLC Logic", "PLC Mantığı") },
              { icon: Cpu, l: t("SCADA / HMI", "SCADA / HMI") },
              { icon: Bot, l: t("Robotics", "Robotik") },
            ].map((b) => (
              <div key={b.l} className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-4 text-center">
                <b.icon className="icon-live h-6 w-6 text-primary" />
                <span className="text-xs font-medium text-foreground">{b.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="signal-line overflow-hidden rounded-xl border border-border shadow-elegant">
          <img
            src={images.signalFlow}
            loading="lazy"
            width={1280}
            height={960}
            alt={t("Electric signals flowing into a Siemens SCADA control system", "Siemens SCADA kontrol sistemine akan elektrik sinyalleri")}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { img: images.robotics, t: t("Line-End Robotic Palletizing", "Hat Sonu Robotik Paletleme") },
          { img: images.scada, t: t("Plant-Wide SCADA", "Tesis Geneli SCADA") },
          { img: images.digitalTwin, t: t("Digital Twin", "Dijital İkiz") },
        ].map((c) => (
          <figure key={c.t} className="overflow-hidden rounded-xl border border-border bg-background/50 shadow-card">
            <img src={c.img} loading="lazy" width={1280} height={960} alt={c.t} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm font-semibold text-foreground">{c.t}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );

  const simpleDetail = (
    img: string,
    intro: string,
    points: string[],
  ) => (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <img
        src={img}
        loading="lazy"
        width={1280}
        height={960}
        alt=""
        className="aspect-[16/11] w-full rounded-xl border border-border object-cover shadow-elegant"
      />
      <div>
        <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>
        <ul className="mt-5 space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const modelingDetail = (
    <div className="space-y-8">
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        {t(
          "We model complete process equipment in SolidWorks — from single skids to fully integrated multi-reactor systems with jacketed heating and cooling circuits — as parametric 3D assemblies that feed directly into FE load calculations, workflow studies and fabrication drawings.",
          "Eksiksiz proses ekipmanlarını SolidWorks'te modelleriz — tekli skidlerden, ceketli ısıtma ve soğutma devreli tam entegre çok reaktörlü sistemlere kadar — FE yük hesaplarını, iş akışı çalışmalarını ve imalat çizimlerini doğrudan besleyen parametrik 3D montajlar olarak.",
        )}
      </p>

      {/* Featured complex render */}
      <figure className="overflow-hidden rounded-2xl border border-border shadow-elegant">
        <img
          src={images.pressureReactorSystem}
          loading="lazy"
          width={1280}
          height={960}
          alt={t(
            "3D engineering render of a three-reactor high-pressure system with jacketed heating and cooling circuits and engineers working on the platform",
            "Ceketli ısıtma ve soğutma devreli üç reaktörlü yüksek basınç sisteminin ve platformda çalışan mühendislerin 3D mühendislik görünümü",
          )}
          className="w-full object-cover"
        />
        <figcaption className="border-t border-border bg-card px-5 py-3 text-xs text-muted-foreground">
          {t(
            "Three-reactor high-pressure system — jacketed heating (red) and cooling (blue) circuits, agitator drives, instrumentation and access platform, modeled as a single SolidWorks assembly.",
            "Üç reaktörlü yüksek basınç sistemi — ceketli ısıtma (kırmızı) ve soğutma (mavi) devreleri, karıştırıcı tahrikleri, enstrümantasyon ve erişim platformu, tek bir SolidWorks montajı olarak modellenmiştir.",
          )}
        </figcaption>
      </figure>

      {/* Capability chips for the featured system */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Thermometer,
            title: t("Heating circuit", "Isıtma devresi"),
            desc: t(
              "Jacketed steam / hot-oil inlets sized for process duty.",
              "Proses yüküne göre boyutlandırılmış ceketli buhar / kızgın yağ girişleri.",
            ),
          },
          {
            icon: Snowflake,
            title: t("Cooling circuit", "Soğutma devresi"),
            desc: t(
              "Chilled-water / glycol jackets for exothermic control.",
              "Ekzotermik kontrol için soğutma suyu / glikol ceketleri.",
            ),
          },
          {
            icon: Gauge,
            title: t("Pressure design", "Basınç tasarımı"),
            desc: t(
              "Reactors designed to ASME VIII / PED 2014/68/EU.",
              "ASME VIII / PED 2014/68/EU'ya göre tasarlanan reaktörler.",
            ),
          },
          {
            icon: Scale,
            title: t("Load & FE ready", "Yük & FE'ye hazır"),
            desc: t(
              "Assembly feeds structural, nozzle-load and lifting FE checks.",
              "Montaj; yapısal, nozzle yükü ve kaldırma FE kontrollerini besler.",
            ),
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/60"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <c.icon className="icon-live h-5 w-5 text-primary-foreground" />
            </div>
            <h4 className="mt-4 text-sm font-semibold text-foreground">{c.title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Secondary reference render + points */}
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <figure className="overflow-hidden rounded-xl border border-border shadow-elegant">
          <img
            src={images.reactorMezzanine}
            loading="lazy"
            width={1280}
            height={960}
            alt={t(
              "Isometric 3D model of reactors and mixers on a steel mezzanine with engineers working and IBC storage",
              "Çelik mezaninde reaktörler ve mikserler, çalışan mühendisler ve IBC depolamanın izometrik 3D modeli",
            )}
            className="aspect-[16/11] w-full object-cover"
          />
        </figure>
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t(
              "Every asset — reactors, vessels, tanks, mixers and their steel mezzanine — is modeled in context. This lets us verify operator access and workflow, extract accurate weights and reactions for structural load calculations, and issue workshop-ready fabrication drawings.",
              "Her ekipman — reaktörler, kaplar, tanklar, mikserler ve çelik mezaninleri — bağlamı içinde modellenir. Bu; operatör erişimini ve iş akışını doğrulamamıza, yapısal yük hesapları için doğru ağırlık ve reaksiyonları çıkarmamıza ve atölyeye hazır imalat çizimleri yayınlamamıza olanak tanır.",
            )}
          </p>
          <ul className="mt-5 space-y-2.5">
            {[
              t("SolidWorks 3D equipment, skid & full-plant assemblies", "SolidWorks 3D ekipman, skid & tüm tesis montajları"),
              t("Reactors, pressure vessels & atmospheric tanks", "Reaktörler, basınçlı kaplar & atmosferik tanklar"),
              t("Heating & cooling jacket and piping integration", "Isıtma & soğutma ceketi ve boru entegrasyonu"),
              t("Workflow, operator-access & lifting studies", "İş akışı, operatör erişimi & kaldırma çalışmaları"),
              t("Weights & reactions for structural load calculations", "Yapısal yük hesapları için ağırlıklar & reaksiyonlar"),
              t("Manufacturing & fabrication drawings", "İmalat & üretim çizimleri"),
            ].map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            {t(
              "Modeled with operators in place — real ergonomics, real workflow.",
              "Operatörler yerinde modellenir — gerçek ergonomi, gerçek iş akışı.",
            )}
          </div>
        </div>
      </div>
    </div>
  );



  const modules: Module[] = [
    {
      id: "concept",
      icon: ScanLine,
      title: t("Concept & Detailed Engineering", "Konsept & Detay Mühendislik"),
      tagline: t(
        "Feasibility, NPV/payback, concept, PFD, P&ID, BOM and AutoCAD layouts.",
        "Fizibilite, NPV/geri ödeme, konsept, PFD, P&ID, BOM ve AutoCAD yerleşimleri.",
      ),
      detail: conceptDetail,
    },
    {
      id: "modeling",
      icon: Boxes,
      title: t("3D Modeling & SolidWorks", "3D Modelleme & SolidWorks"),
      tagline: t(
        "SolidWorks equipment, skids, reactors, vessels, tanks and mixers.",
        "SolidWorks ekipman, skid, reaktör, kap, tank ve mikserler.",
      ),
      detail: modelingDetail,
    },
    {
      id: "analysis",
      icon: Activity,
      title: t("FEA & CFD Analysis", "FEA & CFD Analizi"),
      tagline: t(
        "ANSYS & COMSOL — process flow, mixing, in-pipe behavior, stress.",
        "ANSYS & COMSOL — proses akışı, karıştırma, boru içi davranış, gerilme.",
      ),
      detail: simpleDetail(
        images.cfdMixer,
        t(
          "We validate every design with physics — CFD for flow and mixing, FEA for structural integrity of pressure vessels and tanks.",
          "Her tasarımı fizikle doğrularız — akış ve karıştırma için CFD, basınçlı kap ve tankların yapısal bütünlüğü için FEA.",
        ),
        [
          t("CFD process flow, tank mixer & in-pipe flow", "CFD proses akışı, tank karıştırıcı & boru içi akış"),
          t("FE structural & von Mises stress analysis", "FE yapısal & von Mises gerilme analizi"),
          t("ANSYS & COMSOL multiphysics simulation", "ANSYS & COMSOL multifizik simülasyonu"),
          t("Thermal, fatigue and pressure verification", "Termal, yorulma ve basınç doğrulaması"),
        ],
      ),
    },
    {
      id: "hazop",
      icon: ShieldCheck,
      title: t("Process Safety & HAZOP", "Proses Güvenliği & HAZOP"),
      tagline: t(
        "Risk matrix, interlock (cause & effect) matrix and root cause analysis.",
        "Risk matrisi, interlock (neden & etki) matrisi ve kök neden analizi.",
      ),
      detail: hazopDetail,
    },
    {
      id: "automation",
      icon: Cpu,
      title: t("Automation, SCADA & Robotics", "Otomasyon, SCADA & Robotik"),
      tagline: t(
        "Siemens Simatic PLC/SCADA, line-end automation and robotics.",
        "Siemens Simatic PLC/SCADA, hat sonu otomasyonu ve robotik.",
      ),
      detail: automationDetail,
    },
    {
      id: "epc",
      icon: Factory,
      title: t("Turnkey EPC & Commissioning", "Anahtar Teslim EPC & Devreye Alma"),
      tagline: t(
        "Greenfield setup, EPC delivery, commissioning, CQV and validation.",
        "Sıfır fabrika kurulumu, EPC teslimatı, devreye alma, CQV ve validasyon.",
      ),
      detail: simpleDetail(
        images.heroPlant,
        t(
          "We execute and close out projects under an EPC model — from greenfield plant setup through commissioning, CQV and validation reporting.",
          "Projeleri EPC modeli altında yürütür ve sonlandırırız — sıfır fabrika kurulumundan devreye alma, CQV ve validasyon raporlamasına.",
        ),
        [
          t("Greenfield / zero-plant setup", "Greenfield / sıfır fabrika kurulumu"),
          t("EPC engineering, procurement & construction", "EPC mühendislik, tedarik & inşaat"),
          t("Commissioning, CQV & qualification", "Devreye alma, CQV & kalifikasyon"),
          t("Validation reporting & GMP compliance", "Validasyon raporlama & GMP uyumu"),
        ],
      ),
    },
  ];

  const specialties = [
    {
      img: images.cleanroom,
      icon: Building2,
      title: t("Hygienic & GMP Design", "Hijyenik & GMP Tasarım"),
      desc: t(
        "Clean rooms and clean-room production lines engineered for GMP and certification processes.",
        "GMP ve sertifikalandırma süreçleri için tasarlanmış temiz odalar ve temiz oda üretim hatları.",
      ),
    },
    {
      img: images.waterTreatment,
      icon: Droplets,
      title: t("Water Treatment & Reactors", "Su Arıtma & Reaktörler"),
      desc: t(
        "Water treatment systems and reactor design with full process and utility integration.",
        "Eksiksiz proses ve yardımcı tesis entegrasyonu ile su arıtma sistemleri ve reaktör tasarımı.",
      ),
    },
    {
      img: images.fillingLine,
      icon: Wrench,
      title: t("Automated Filling Lines", "Otomatik Dolum Hatları"),
      desc: t(
        "Fully automated filling plants from 400 to 25,000 bottles per hour, end-to-end.",
        "Saatte 400'den 25.000 şişeye kadar uçtan uca tam otomatik dolum tesisleri.",
      ),
    },
    {
      img: images.digitalTwin,
      icon: ClipboardCheck,
      title: t("Digital Twin & Validation", "Dijital İkiz & Validasyon"),
      desc: t(
        "Digital twins, virtual factory tours and validation report preparation for every project.",
        "Her proje için dijital ikizler, sanal fabrika turları ve validasyon raporu hazırlama.",
      ),
    },
  ];

  return (
    <>
      <PageHero
        image={images.cfdMixer}
        eyebrow={t("Services", "Hizmetler")}
        title={t("End-to-End Process Engineering Solutions", "Uçtan Uca Proses Mühendisliği Çözümleri")}
        intro={t(
          "A turnkey engineering partner that carries your project from a blank page to a proven, running plant. Our design and project engineers — backed by an engineering team in India and global partners across Europe — cover the full chain: concept design, detailed engineering, field engineering, project coordination, construction, full-cycle process performance, and final commissioning and handover.",
          "Projenizi boş bir sayfadan kanıtlanmış, çalışan bir tesise taşıyan anahtar teslim bir mühendislik ortağı. Tasarım ve proje mühendislerimiz — Hindistan'daki mühendislik ekibi ve Avrupa genelindeki global ortaklarla desteklenerek — tüm zinciri kapsar: konsept tasarım, detay mühendislik, saha mühendisliği, proje koordinasyonu, inşaat, tam çevrim proses performansı ve nihai devreye alma ile teslim.",
        )}
      />

      {/* INTERACTIVE EXPLORER */}
      <section className="eps-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("Explore Our Capabilities", "Yetkinliklerimizi Keşfedin")}
            title={t("Every Discipline, Engineered End to End", "Her Disiplin, Uçtan Uca Mühendislikle")}
            intro={t(
              "Each capability opens into a visual, engineering-grade walkthrough of how we actually deliver it.",
              "Her yetkinlik, onu gerçekte nasıl teslim ettiğimizi gösteren görsel, mühendislik seviyesinde bir anlatıma açılır.",
            )}
          />
          <div className="mt-12 space-y-4">
            {modules.map((m) => {
              const isOpen = open === m.id;
              return (
                <div
                  key={m.id}
                  id={`service-${m.id}`}
                  className={cn(
                    "group scroll-mt-24 overflow-hidden rounded-2xl border bg-card shadow-card transition-colors",
                    isOpen ? "border-primary/60" : "border-border hover:border-primary/40",
                  )}
                >

                  <button
                    onClick={() => setOpen(isOpen ? "" : m.id)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                      <m.icon className={cn("h-6 w-6 text-primary-foreground", isOpen && "icon-pulse")} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-semibold text-foreground">{m.title}</span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">{m.tagline}</span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="panel-in border-t border-border bg-surface/60 px-5 py-7 sm:px-7 sm:py-8">
                      {m.detail}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="eps-section border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t("Specialist Expertise", "Uzmanlık Alanları")}
            title={t("Specialized Engineering Capabilities", "Uzmanlaşmış Mühendislik Yetkinlikleri")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {specialties.map((s) => (
              <div key={s.title} className="group overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <img src={s.img} loading="lazy" width={1280} height={960} alt={s.title} className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <s.icon className="icon-live h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eps-section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeading
            align="center"
            title={t("Let's Engineer Your Next Project", "Bir Sonraki Projenizi Birlikte Tasarlayalım")}
            intro={t(
              "Share your scope and our engineers will propose a tailored, code-compliant approach.",
              "Kapsamınızı paylaşın, mühendislerimiz size özel, koda uygun bir yaklaşım önersin.",
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
