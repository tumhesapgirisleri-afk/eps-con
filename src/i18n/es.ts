/**
 * Spanish translations keyed by the English source string.
 * Missing keys fall back to English automatically (see language.tsx).
 * Technical acronyms (P&ID, HAZOP, SCADA, EPC, CQV, FEA, CFD, ASME, PED,
 * GMP, ISO, ATEX, etc.) are intentionally kept as-is.
 */
export const es: Record<string, string> = {
  // Services — feasibility
  "Step 0 — Feasibility": "Paso 0 — Viabilidad",
  "Engineering-Grade Investment Analysis": "Análisis de Inversión de Nivel Ingenieril",
  "Before a single line is drawn, our engineers de-risk the investment: production capacity targets, mass & energy balances, utility load estimates and a CAPEX/OPEX financial model with NPV, IRR, payback and sensitivity analysis — so you know the return, the risks and the scope from day zero.":
    "Antes de trazar una sola línea, nuestros ingenieros reducen el riesgo de la inversión: objetivos de capacidad de producción, balances de masa y energía, estimaciones de carga de servicios y un modelo financiero CAPEX/OPEX con VAN, TIR, periodo de retorno y análisis de sensibilidad — para que conozca el retorno, los riesgos y el alcance desde el día cero.",
  "Net Present Value": "Valor Actual Neto",
  "Internal Rate": "Tasa Interna",
  "Period": "Periodo",
  "NPV and payback feasibility analysis": "Análisis de viabilidad de VAN y periodo de retorno",
  "From Whiteboard to Construction Package": "De la Pizarra al Paquete de Construcción",
  "A disciplined, code-driven progression — concept, process flow diagram, fully detailed P&ID and a procurement-ready bill of materials — every deliverable traceable and built to global engineering standards.":
    "Una progresión disciplinada y basada en normas — concepto, diagrama de flujo de proceso, P&ID totalmente detallado y una lista de materiales lista para compras — cada entregable trazable y elaborado según normas de ingeniería globales.",
  "Concept & Basis of Design": "Concepto y Bases de Diseño",
  "Process engineers fix the design basis — capacity, battery limits, utility & effluent envelope and applicable codes (ASME, PED 2014/68/EU, ISO, GMP) — locking scope before detailing begins.":
    "Los ingenieros de proceso fijan las bases de diseño — capacidad, límites de batería, envolvente de servicios y efluentes y códigos aplicables (ASME, PED 2014/68/EU, ISO, GMP) — fijando el alcance antes de comenzar el detalle.",
  "Process Flow Diagram (PFD)": "Diagrama de Flujo de Proceso (PFD)",
  "Streams, major equipment, mass & energy balances and design duties are formalized, with line sizing and equipment datasheets derived to process engineering practice.":
    "Se formalizan corrientes, equipos principales, balances de masa y energía y condiciones de diseño, con dimensionamiento de líneas y hojas de datos de equipos derivadas según la práctica de ingeniería de proceso.",
  "Detailed P&ID": "P&ID Detallado",
  "Instrumentation, control loops, interlocks, set points, line specs and tags are fully detailed per ISA-5.1 and IEC standards — the single source of truth for construction and commissioning.":
    "Instrumentación, lazos de control, enclavamientos, puntos de consigna, especificaciones de líneas y etiquetas quedan totalmente detallados según ISA-5.1 y las normas IEC — la única fuente de verdad para la construcción y la puesta en marcha.",
  "Bill of Materials (BOM) & Procurement": "Lista de Materiales (BOM) y Compras",
  "Every valve, fitting, pipe class, instrument and equipment item is quantified with material specs and standard codes — a procurement-ready package with full material traceability.":
    "Cada válvula, accesorio, clase de tubería, instrumento y equipo se cuantifica con especificaciones de material y códigos normativos — un paquete listo para compras con trazabilidad total de materiales.",
  "Detailed AutoCAD Plant Layout": "Layout de Planta Detallado en AutoCAD",
  "A complete chemical plant general arrangement — equipment list, pipe racks, dimensions and control room, drawn to scale.":
    "Una disposición general completa de planta química — lista de equipos, racks de tuberías, dimensiones y sala de control, dibujada a escala.",
  "AutoCAD general arrangement of a chemical plant": "Disposición general en AutoCAD de una planta química",
  "Our process safety practice is built on three fundamental building blocks — a quantified risk matrix, a cause & effect interlock matrix for the safety instrumented system, and structured root cause analysis.":
    "Nuestra práctica de seguridad de proceso se basa en tres pilares fundamentales — una matriz de riesgo cuantificada, una matriz de enclavamiento causa y efecto para el sistema instrumentado de seguridad y un análisis estructurado de causa raíz.",
  "Risk Matrix": "Matriz de Riesgo",
  "5×5 severity-vs-likelihood matrix to rank and prioritize every identified deviation.":
    "Matriz 5×5 de severidad frente a probabilidad para clasificar y priorizar cada desviación identificada.",
  "Interlock (Cause & Effect) Matrix": "Matriz de Enclavamiento (Causa y Efecto)",
  "SIS cause & effect matrix mapping initiating causes to trip and final element actions.":
    "Matriz causa y efecto del SIS que relaciona las causas iniciadoras con los disparos y las acciones de los elementos finales.",
  "Root Cause Analysis": "Análisis de Causa Raíz",
  "Fishbone / Ishikawa method to trace deviations to their true underlying causes.":
    "Método de espina de pescado / Ishikawa para rastrear las desviaciones hasta sus verdaderas causas subyacentes.",
  "HAZOP node-by-node guideword studies": "Estudios HAZOP nodo por nodo con palabras guía",
  "LOPA & SIL determination": "Determinación de LOPA y SIL",
  "Debottlenecking & system improvement": "Eliminación de cuellos de botella y mejora del sistema",
  "High-pressure & atmospheric system safety": "Seguridad de sistemas de alta presión y atmosféricos",
  "Live control signals": "Señales de control en vivo",
  "Siemens Simatic PLC, SCADA & Robotics": "PLC Siemens Simatic, SCADA y Robótica",
  "From field sensor to HMI, every signal is engineered: PLC logic, SCADA visualization, line-end palletizing and robotic production systems — fully integrated and validated.":
    "Del sensor de campo al HMI, cada señal se diseña: lógica PLC, visualización SCADA, paletizado de fin de línea y sistemas de producción robotizados — totalmente integrados y validados.",
  "PLC Logic": "Lógica PLC",
  "SCADA / HMI": "SCADA / HMI",
  "Robotics": "Robótica",
  "Electric signals flowing into a Siemens SCADA control system": "Señales eléctricas fluyendo hacia un sistema de control SCADA Siemens",
  "Line-End Robotic Palletizing": "Paletizado Robotizado de Fin de Línea",
  "Plant-Wide SCADA": "SCADA de Planta Completa",
  "Digital Twin": "Gemelo Digital",
  "We model complete process equipment in SolidWorks — from single skids to fully integrated multi-reactor systems with jacketed heating and cooling circuits — as parametric 3D assemblies that feed directly into FE load calculations, workflow studies and fabrication drawings.":
    "Modelamos equipos de proceso completos en SolidWorks — desde skids individuales hasta sistemas multireactor totalmente integrados con circuitos de calentamiento y enfriamiento encamisados — como ensamblajes 3D paramétricos que alimentan directamente los cálculos de carga por elementos finitos, los estudios de flujo de trabajo y los planos de fabricación.",
  "3D engineering render of a three-reactor high-pressure system with jacketed heating and cooling circuits and engineers working on the platform":
    "Render de ingeniería 3D de un sistema de alta presión de tres reactores con circuitos de calentamiento y enfriamiento encamisados e ingenieros trabajando en la plataforma",
  "Three-reactor high-pressure system — jacketed heating (red) and cooling (blue) circuits, agitator drives, instrumentation and access platform, modeled as a single SolidWorks assembly.":
    "Sistema de alta presión de tres reactores — circuitos de calentamiento (rojo) y enfriamiento (azul) encamisados, accionamientos de agitadores, instrumentación y plataforma de acceso, modelado como un único ensamblaje de SolidWorks.",
  "Heating circuit": "Circuito de calentamiento",
  "Jacketed steam / hot-oil inlets sized for process duty.": "Entradas encamisadas de vapor / aceite térmico dimensionadas para la carga del proceso.",
  "Cooling circuit": "Circuito de enfriamiento",
  "Chilled-water / glycol jackets for exothermic control.": "Camisas de agua enfriada / glicol para el control de reacciones exotérmicas.",
  "Pressure design": "Diseño a presión",
  "Reactors designed to ASME VIII / PED 2014/68/EU.": "Reactores diseñados según ASME VIII / PED 2014/68/EU.",
  "Load & FE ready": "Listo para carga y elementos finitos",
  "Assembly feeds structural, nozzle-load and lifting FE checks.": "El ensamblaje alimenta las verificaciones por elementos finitos estructurales, de carga en boquillas y de izaje.",
  "Isometric 3D model of reactors and mixers on a steel mezzanine with engineers working and IBC storage":
    "Modelo 3D isométrico de reactores y mezcladores sobre un entrepiso de acero con ingenieros trabajando y almacenamiento de IBC",
  "Every asset — reactors, vessels, tanks, mixers and their steel mezzanine — is modeled in context. This lets us verify operator access and workflow, extract accurate weights and reactions for structural load calculations, and issue workshop-ready fabrication drawings.":
    "Cada activo — reactores, recipientes, tanques, mezcladores y su entrepiso de acero — se modela en su contexto. Esto nos permite verificar el acceso y el flujo de trabajo del operador, extraer pesos y reacciones precisos para los cálculos de carga estructural y emitir planos de fabricación listos para taller.",
  "SolidWorks 3D equipment, skid & full-plant assemblies": "Ensamblajes 3D de equipos, skids y planta completa en SolidWorks",
  "Reactors, pressure vessels & atmospheric tanks": "Reactores, recipientes a presión y tanques atmosféricos",
  "Heating & cooling jacket and piping integration": "Integración de camisas de calentamiento y enfriamiento y tuberías",
  "Workflow, operator-access & lifting studies": "Estudios de flujo de trabajo, acceso de operadores e izaje",
  "Weights & reactions for structural load calculations": "Pesos y reacciones para cálculos de carga estructural",
  "Manufacturing & fabrication drawings": "Planos de fabricación y manufactura",
  "Modeled with operators in place — real ergonomics, real workflow.": "Modelado con operadores en su lugar — ergonomía real, flujo de trabajo real.",
  "Concept & Detailed Engineering": "Ingeniería Conceptual y de Detalle",
  "Feasibility, NPV/payback, concept, PFD, P&ID, BOM and AutoCAD layouts.": "Viabilidad, VAN/retorno, concepto, PFD, P&ID, BOM y layouts en AutoCAD.",
  "3D Modeling & SolidWorks": "Modelado 3D y SolidWorks",
  "SolidWorks equipment, skids, reactors, vessels, tanks and mixers.": "Equipos, skids, reactores, recipientes, tanques y mezcladores en SolidWorks.",
  "FEA & CFD Analysis": "Análisis FEA y CFD",
  "ANSYS & COMSOL — process flow, mixing, in-pipe behavior, stress.": "ANSYS y COMSOL — flujo de proceso, mezclado, comportamiento en tubería, tensión.",
  "We validate every design with physics — CFD for flow and mixing, FEA for structural integrity of pressure vessels and tanks.":
    "Validamos cada diseño con física — CFD para flujo y mezclado, FEA para la integridad estructural de recipientes a presión y tanques.",
  "CFD process flow, tank mixer & in-pipe flow": "Flujo de proceso CFD, mezclador de tanque y flujo en tubería",
  "FE structural & von Mises stress analysis": "Análisis estructural por elementos finitos y de tensión de von Mises",
  "ANSYS & COMSOL multiphysics simulation": "Simulación multifísica en ANSYS y COMSOL",
  "Thermal, fatigue and pressure verification": "Verificación térmica, de fatiga y de presión",
  "Process Safety & HAZOP": "Seguridad de Proceso y HAZOP",
  "Risk matrix, interlock (cause & effect) matrix and root cause analysis.": "Matriz de riesgo, matriz de enclavamiento (causa y efecto) y análisis de causa raíz.",
  "Automation, SCADA & Robotics": "Automatización, SCADA y Robótica",
  "Siemens Simatic PLC/SCADA, line-end automation and robotics.": "PLC/SCADA Siemens Simatic, automatización de fin de línea y robótica.",
  "Turnkey EPC & Commissioning": "EPC Llave en Mano y Puesta en Marcha",
  "Greenfield setup, EPC delivery, commissioning, CQV and validation.": "Implantación greenfield, entrega EPC, puesta en marcha, CQV y validación.",
  "We execute and close out projects under an EPC model — from greenfield plant setup through commissioning, CQV and validation reporting.":
    "Ejecutamos y cerramos proyectos bajo un modelo EPC — desde la implantación de planta greenfield hasta la puesta en marcha, la CQV y los informes de validación.",
  "Greenfield / zero-plant setup": "Implantación greenfield / planta desde cero",
  "EPC engineering, procurement & construction": "Ingeniería, compras y construcción EPC",
  "Commissioning, CQV & qualification": "Puesta en marcha, CQV y cualificación",
  "Validation reporting & GMP compliance": "Informes de validación y cumplimiento GMP",
  "Hygienic & GMP Design": "Diseño Higiénico y GMP",
  "Clean rooms and clean-room production lines engineered for GMP and certification processes.":
    "Salas limpias y líneas de producción en sala limpia diseñadas para GMP y procesos de certificación.",
  "Water Treatment & Reactors": "Tratamiento de Agua y Reactores",
  "Water treatment systems and reactor design with full process and utility integration.":
    "Sistemas de tratamiento de agua y diseño de reactores con integración total de proceso y servicios.",
  "Automated Filling Lines": "Líneas de Llenado Automatizadas",
  "Fully automated filling plants from 400 to 25,000 bottles per hour, end-to-end.":
    "Plantas de llenado totalmente automatizadas de 400 a 25.000 botellas por hora, de principio a fin.",
  "Digital Twin & Validation": "Gemelo Digital y Validación",
  "Digital twins, virtual factory tours and validation report preparation for every project.":
    "Gemelos digitales, recorridos virtuales de fábrica y preparación de informes de validación para cada proyecto.",
  "Services": "Servicios",
  "End-to-End Process Engineering Solutions": "Soluciones de Ingeniería de Proceso de Principio a Fin",
  "A turnkey engineering partner that carries your project from a blank page to a proven, running plant. Our design and project engineers — backed by an engineering team in India and global partners across Europe — cover the full chain: concept design, detailed engineering, field engineering, project coordination, construction, full-cycle process performance, and final commissioning and handover.":
    "Un socio de ingeniería llave en mano que lleva su proyecto desde una hoja en blanco hasta una planta probada y en funcionamiento. Nuestros ingenieros de diseño y de proyecto — respaldados por un equipo de ingeniería en la India y socios globales en toda Europa — cubren toda la cadena: diseño conceptual, ingeniería de detalle, ingeniería de campo, coordinación de proyecto, construcción, rendimiento de proceso de ciclo completo y puesta en marcha y entrega finales.",
  "Explore Our Capabilities": "Explore Nuestras Capacidades",
  "Every Discipline, Engineered End to End": "Cada Disciplina, Diseñada de Principio a Fin",
  "Each capability opens into a visual, engineering-grade walkthrough of how we actually deliver it.":
    "Cada capacidad se despliega en un recorrido visual, de nivel ingenieril, de cómo la ejecutamos realmente.",
  "Specialist Expertise": "Experiencia Especializada",
  "Specialized Engineering Capabilities": "Capacidades de Ingeniería Especializadas",
  "Let's Engineer Your Next Project": "Diseñemos Su Próximo Proyecto",
  "Share your scope and our engineers will propose a tailored, code-compliant approach.":
    "Comparta su alcance y nuestros ingenieros propondrán un enfoque a medida y conforme a las normas.",
  "Contact Our Engineers": "Contacte a Nuestros Ingenieros",
  "All": "Todos",
  "Beverage": "Bebidas",
  "Pharmaceutical": "Farmacéutica",
  "Chemical & Process": "Química y Proceso",
  "Automation": "Automatización",
  "Construction & Manufacturing Plant": "Planta de Construcción y Manufactura",
  "Carbonated Beverages": "Bebidas Carbonatadas",
  "Fully Automated CSD Bottling Plant": "Planta de Embotellado de Refrescos Totalmente Automatizada",
  "Turnkey carbonated soft-drink line scaling from 400 to 25,000 bottles/hour with rotary fillers and CIP.":
    "Línea llave en mano de refrescos carbonatados escalable de 400 a 25.000 botellas/hora con llenadoras rotativas y CIP.",
  "Bottled Water": "Agua Embotellada",
  "15,000 bph Complete Water Bottling Plant": "Planta Completa de Embotellado de Agua de 15.000 bph",
  "End-to-end 15,000 bottle/hour water bottling plant — blow-molding, rinsing, filling, capping, labeling and shrink-wrap, delivered as a fully integrated turnkey line.":
    "Planta de embotellado de agua de 15.000 botellas/hora de principio a fin — soplado, enjuague, llenado, tapado, etiquetado y termorretractilado, entregada como una línea llave en mano totalmente integrada.",
  "GMP Clean-Room Production Line": "Línea de Producción en Sala Limpia GMP",
  "Clean-room pharmaceutical filling line designed to GMP / GAMP 5 with full CQV and validation reporting.":
    "Línea de llenado farmacéutico en sala limpia diseñada según GMP / GAMP 5 con CQV completa e informes de validación.",
  "GMP Filling & Packaging": "Llenado y Envasado GMP",
  "Linear GMP Filling Line — 500 mL to 10 L": "Línea de Llenado Lineal GMP — 500 mL a 10 L",
  "End-to-end 2,000 bph linear filling line for 500 mL to 10 L containers with case packer and end-of-line robotic palletizer. Delivered against full GMP requirements and completed with GMP certification.":
    "Línea de llenado lineal de 2.000 bph de principio a fin para envases de 500 mL a 10 L con encajonadora y paletizador robotizado de fin de línea. Entregada conforme a los requisitos GMP completos y culminada con certificación GMP.",
  "Chemical Process": "Proceso Químico",
  "Reactor & Pressure Vessel Package": "Paquete de Reactor y Recipiente a Presión",
  "Agitated reactor and pressure-vessel design verified by FEA, fabricated to ASME / PED requirements.":
    "Diseño de reactor agitado y recipiente a presión verificado por FEA, fabricado según los requisitos ASME / PED.",
  "Powder & Blending": "Polvos y Mezclado",
  "Big-Bag Fed Atmospheric Blending Suite": "Suite de Mezclado Atmosférico Alimentada por Big-Bag",
  "Atmospheric blender fed from a big-bag (FIBC) station with a floor weighing platform and IBC dosing, plus four additional 10 m³ stainless atmospheric blenders. A steel mezzanine lets operators charge raw material through the top manholes.":
    "Mezclador atmosférico alimentado desde una estación de big-bag (FIBC) con plataforma de pesaje en suelo y dosificación por IBC, más cuatro mezcladores atmosféricos adicionales de 10 m³ en acero inoxidable. Un entrepiso de acero permite a los operadores cargar la materia prima por las bocas superiores.",
  "Storage & Utilities": "Almacenamiento y Servicios",
  "Atmospheric Tank Farm & Mixers": "Parque de Tanques Atmosféricos y Mezcladores",
  "Atmospheric storage tanks, stock tanks and high-shear mixers with full utility plant integration.":
    "Tanques de almacenamiento atmosférico, tanques de producto y mezcladores de alto cizallamiento con integración total de la planta de servicios.",
  "Water Treatment": "Tratamiento de Agua",
  "Process Water Treatment Plant": "Planta de Tratamiento de Agua de Proceso",
  "RO and multi-stage filtration skids for process and utility water, fully instrumented and automated.":
    "Skids de ósmosis inversa y filtración multietapa para agua de proceso y de servicios, totalmente instrumentados y automatizados.",
  "End-of-line automation with robotic palletizing, conveyors and Siemens-based control integration.":
    "Automatización de fin de línea con paletizado robotizado, transportadores e integración de control basada en Siemens.",
  "Plant-Wide SCADA & Simatic Control": "SCADA de Planta Completa y Control Simatic",
  "Siemens Simatic PLC and SCADA architecture for plant-wide monitoring, control and reporting.":
    "Arquitectura PLC y SCADA Siemens Simatic para monitoreo, control y reportes de toda la planta.",
  "Digital Twin & Virtual Factory Tour": "Gemelo Digital y Recorrido Virtual de Fábrica",
  "Digital twin and virtual factory tour for operator training, optimization and predictive insight.":
    "Gemelo digital y recorrido virtual de fábrica para la formación de operadores, la optimización y el análisis predictivo.",
  "Laboratory Construction": "Construcción de Laboratorio",
  "GMP Quality-Control Chemical Laboratory": "Laboratorio Químico de Control de Calidad GMP",
  "Purpose-built chemical QC laboratory answering the GMP requirements of the production plant. Field samples arrive directly to the lab through a pneumatic tube transport system, with the facility designed to ISO 17025 and GMP standards.":
    "Laboratorio químico de control de calidad diseñado a medida que responde a los requisitos GMP de la planta de producción. Las muestras de campo llegan directamente al laboratorio mediante un sistema de transporte por tubo neumático, con la instalación diseñada según las normas ISO 17025 y GMP.",
  "Chemical Manufacturing Plant": "Planta de Fabricación Química",
  "30,000 t/year Fully-Automatic Chemical Plant": "Planta Química Totalmente Automática de 30.000 t/año",
  "Fully integrated, fully automatic chemical production plant with a 30,000 tonne/year capacity built around 12 reactors — engineered and constructed end to end, from civil works and steel structure to process, piping and DCS automation.":
    "Planta de producción química totalmente integrada y automática con una capacidad de 30.000 toneladas/año construida en torno a 12 reactores — diseñada y construida de principio a fin, desde la obra civil y la estructura de acero hasta el proceso, las tuberías y la automatización DCS.",
  "Production Building": "Edificio de Producción",
  "Turnkey Production Building & Utility Plant": "Edificio de Producción y Planta de Servicios Llave en Mano",
  "Design-and-build of a complete production building with steel mezzanines, utility plant and infrastructure — delivered as a single end-to-end solution from civil design to fully integrated process lines.":
    "Diseño y construcción de un edificio de producción completo con entrepisos de acero, planta de servicios e infraestructura — entregado como una única solución integral desde el diseño civil hasta líneas de proceso totalmente integradas.",
  "P&ID Diagrams": "Diagramas P&ID",
  "AutoCAD Layouts": "Layouts en AutoCAD",
  "SolidWorks 3D Models": "Modelos 3D en SolidWorks",
  "FE Analysis (ANSYS)": "Análisis por Elementos Finitos (ANSYS)",
  "CFD Mixing Studies": "Estudios de Mezclado CFD",
  "In-Pipe Flow (COMSOL)": "Flujo en Tubería (COMSOL)",
  "Projects": "Proyectos",
  "Engineering Delivered at Industrial Scale": "Ingeniería Entregada a Escala Industrial",
  "Representative projects across beverage, pharmaceutical, chemical and automation sectors — executed under an EPC model from design to commissioning.":
    "Proyectos representativos en los sectores de bebidas, farmacéutico, químico y de automatización — ejecutados bajo un modelo EPC desde el diseño hasta la puesta en marcha.",
  "Engineering Deliverables": "Entregables de Ingeniería",
  "From P&ID to Finite Element Analysis": "Del P&ID al Análisis por Elementos Finitos",
  "Every project is documented to global standards: P&IDs, AutoCAD layouts, SolidWorks 3D models and ANSYS / COMSOL simulations.":
    "Cada proyecto se documenta según normas globales: P&IDs, layouts en AutoCAD, modelos 3D en SolidWorks y simulaciones en ANSYS / COMSOL.",
  "Your Project Could Be Next": "Su Proyecto Podría Ser el Próximo",
  "From a single equipment package to a complete turnkey plant — let's scope it together.":
    "Desde un único paquete de equipos hasta una planta llave en mano completa — definámoslo juntos.",
  "Discuss your project": "Hablemos de su proyecto",
  "Production Buildings": "Edificios de Producción",
  "Structural and architectural design of production halls sized around the process and its equipment.":
    "Diseño estructural y arquitectónico de naves de producción dimensionadas en torno al proceso y sus equipos.",
  "Utility Plants & Mezzanines": "Plantas de Servicios y Entrepisos",
  "Utility buildings, steel mezzanines and technical floors for tanks, mixers and process equipment.":
    "Edificios de servicios, entrepisos de acero y plantas técnicas para tanques, mezcladores y equipos de proceso.",
  "Process Water & Wastewater": "Agua de Proceso y Aguas Residuales",
  "Water treatment, distribution and wastewater infrastructure integrated with the plant.":
    "Tratamiento y distribución de agua e infraestructura de aguas residuales integradas con la planta.",
  "HVAC & Clean Utilities": "HVAC y Servicios Limpios",
  "HVAC, compressed air, steam, chilled water and clean-utility networks.":
    "Redes de HVAC, aire comprimido, vapor, agua enfriada y servicios limpios.",
  "Power & Electrical": "Energía y Electricidad",
  "MV/LV distribution, substations, cabling and plant-wide electrical infrastructure.":
    "Distribución MT/BT, subestaciones, cableado e infraestructura eléctrica de toda la planta.",
  "Logistics & Site Works": "Logística y Obras de Emplazamiento",
  "Loading docks, roads, storage yards and administrative buildings.":
    "Muelles de carga, viales, patios de almacenamiento y edificios administrativos.",
  "Civil & structural design": "Diseño civil y estructural",
  "Process & utility integration": "Integración de proceso y servicios",
  "Construction & installation": "Construcción e instalación",
  "Commissioning & handover": "Puesta en marcha y entrega",
  "Plant Buildings & Construction": "Edificios de Planta y Construcción",
  "From an empty plot to a fully integrated plant": "De un terreno vacío a una planta totalmente integrada",
  "We design factory buildings and supporting infrastructure — and construct them. From civil and structural works to utilities and process lines, EPS delivers the whole facility as one accountable, end-to-end solution.":
    "Diseñamos edificios industriales e infraestructura de apoyo — y los construimos. Desde la obra civil y estructural hasta los servicios y las líneas de proceso, EPS entrega toda la instalación como una única solución integral y responsable.",
  "Design + Build under one roof": "Diseño + Construcción bajo un mismo techo",
  "Case: Beverage plant": "Caso: Planta de bebidas",
  "Carbonated beverage production building": "Edificio de producción de bebidas carbonatadas",
  "A production building housing a fully integrated carbonated beverage line — syrup room, PET blow-molding, rotary filling and capping, labeling and end-of-line packaging and palletizing — all engineered into a single, efficient plant.":
    "Un edificio de producción que alberga una línea de bebidas carbonatadas totalmente integrada — sala de jarabes, soplado de PET, llenado y tapado rotativos, etiquetado y envasado y paletizado de fin de línea — todo diseñado en una única planta eficiente.",
  "Syrup & mixing room": "Sala de jarabes y mezclado",
  "PET blow-molding & filling monobloc": "Monobloc de soplado de PET y llenado",
  "Labeling, packaging & palletizing": "Etiquetado, envasado y paletizado",
  "Utilities, mezzanine & building envelope": "Servicios, entrepiso y envolvente del edificio",
  "Isometric cutaway of a carbonated beverage production building with an integrated line":
    "Sección isométrica de un edificio de producción de bebidas carbonatadas con una línea integrada",
  "Isometric engineering view — production building with fully integrated beverage line.":
    "Vista isométrica de ingeniería — edificio de producción con línea de bebidas totalmente integrada.",
  "Isometric render of a chemical plant with raw material tanks, mixers on a mezzanine, utilities, loading ramp and a glass-facade admin building":
    "Render isométrico de una planta química con tanques de materia prima, mezcladores sobre un entrepiso, servicios, rampa de carga y un edificio administrativo con fachada de vidrio",
  "Isometric engineering view — chemical plant, utilities, logistics and administrative building.":
    "Vista isométrica de ingeniería — planta química, servicios, logística y edificio administrativo.",
  "Case: Chemical plant": "Caso: Planta química",
  "Chemical production complex": "Complejo de producción química",
  "A chemical plant building with raw-material storage tanks and agitated mixers on a steel mezzanine, complete with utility areas, a truck loading ramp and a modern glass-facade administrative building — a coherent engineering design where every element belongs together.":
    "Un edificio de planta química con tanques de almacenamiento de materia prima y mezcladores agitados sobre un entrepiso de acero, complementado con áreas de servicios, una rampa de carga de camiones y un moderno edificio administrativo con fachada de vidrio — un diseño de ingeniería coherente donde cada elemento encaja.",
  "Raw-material tanks & storage": "Tanques de materia prima y almacenamiento",
  "Mixers & reactors on a steel mezzanine": "Mezcladores y reactores sobre un entrepiso de acero",
  "Utilities & truck loading ramp": "Servicios y rampa de carga de camiones",
  "Glass-facade administrative building": "Edificio administrativo con fachada de vidrio",
  "Supporting infrastructure": "Infraestructura de apoyo",
  "Every system a plant needs": "Cada sistema que una planta necesita",
  "Buildings are only part of the picture. We design and build the supporting infrastructure that keeps a plant running.":
    "Los edificios son solo una parte del conjunto. Diseñamos y construimos la infraestructura de apoyo que mantiene una planta en funcionamiento.",
  "Planning a new plant or expansion?": "¿Planifica una nueva planta o una ampliación?",
  "Tell us about your project and our engineers will scope the buildings, utilities and process line as a single turnkey solution.":
    "Cuéntenos su proyecto y nuestros ingenieros definirán los edificios, los servicios y la línea de proceso como una única solución llave en mano.",
  "From feasibility and concept design to full detailed engineering packages built on global codes.":
    "De la viabilidad y el diseño conceptual a paquetes completos de ingeniería de detalle basados en normas globales.",
  "Equipment, skids and plant layouts modeled in SolidWorks with AutoCAD GA and P&ID deliverables.":
    "Equipos, skids y layouts de planta modelados en SolidWorks con entregables de disposición general en AutoCAD y P&ID.",
  "Finite element and flow analyses in ANSYS / COMSOL — process flow, mixers and in-pipe behavior.":
    "Análisis por elementos finitos y de flujo en ANSYS / COMSOL — flujo de proceso, mezcladores y comportamiento en tubería.",
  "HAZOP studies, process safety analysis and system improvements for compliant, reliable operation.":
    "Estudios HAZOP, análisis de seguridad de proceso y mejoras de sistema para una operación conforme y fiable.",
  "Automation & SCADA": "Automatización y SCADA",
  "Siemens & Simatic based PLC/SCADA automation, line-end robotics and robotic production systems.":
    "Automatización PLC/SCADA basada en Siemens y Simatic, robótica de fin de línea y sistemas de producción robotizados.",
  "Turnkey EPC & Zero-Plant": "EPC Llave en Mano y Planta desde Cero",
  "EPC-managed projects from greenfield plant setup through commissioning, CQV and validation.":
    "Proyectos gestionados en EPC desde la implantación de planta greenfield hasta la puesta en marcha, la CQV y la validación.",
  "Concept & Basic Design": "Diseño Conceptual y Básico",
  "Process definition, mass & energy balances, PFDs and budget-level engineering.":
    "Definición de proceso, balances de masa y energía, PFDs e ingeniería a nivel de presupuesto.",
  "Detailed Engineering": "Ingeniería de Detalle",
  "P&IDs, 3D models, FEA/CFD, equipment sizing and full construction packages.":
    "P&IDs, modelos 3D, FEA/CFD, dimensionamiento de equipos y paquetes completos de construcción.",
  "Procurement & Construction": "Compras y Construcción",
  "EPC-managed sourcing, fabrication oversight and on-site construction coordination.":
    "Aprovisionamiento gestionado en EPC, supervisión de fabricación y coordinación de construcción en obra.",
  "Commissioning & CQV": "Puesta en Marcha y CQV",
  "Commissioning, qualification & validation, validation reports and digital twin handover.":
    "Puesta en marcha, cualificación y validación, informes de validación y entrega del gemelo digital.",
  "Industrial process plant at dusk": "Planta de proceso industrial al atardecer",
  "Engineering Process Solutions": "Engineering Process Solutions",
  "Engineering that moves": "Ingeniería que impulsa",
  "industry forward": "la industria",
  "EPS Engineering & Consultancy delivers solution-driven process engineering — from concept and advanced design to 3D modeling, finite element analysis, automation and turnkey EPC delivery.":
    "EPS Engineering & Consultancy ofrece ingeniería de proceso orientada a soluciones — desde el concepto y el diseño avanzado hasta el modelado 3D, el análisis por elementos finitos, la automatización y la entrega EPC llave en mano.",
  "Explore Services": "Explorar Servicios",
  "View Projects": "Ver Proyectos",
  "Projects Delivered": "Proyectos Entregados",
  "EPC Projects": "Proyectos EPC",
  "Expert Engineers": "Ingenieros Expertos",
  "Continents Served": "Continentes Atendidos",
  "Engineered to global standards": "Diseñado según normas globales",
  "What we do": "Lo que hacemos",
  "A complete process engineering capability": "Una capacidad completa de ingeniería de proceso",
  "From production buildings and utility plant design to 3D modeling and finite element analysis — one accountable engineering partner across the full lifecycle.":
    "Desde el diseño de edificios de producción y plantas de servicios hasta el modelado 3D y el análisis por elementos finitos — un único socio de ingeniería responsable a lo largo de todo el ciclo de vida.",
  "See all services": "Ver todos los servicios",
  "Simulation-driven design": "Diseño impulsado por simulación",
  "We validate every design with physics, not assumptions": "Validamos cada diseño con física, no con suposiciones",
  "World-class CFD and FE analysis for process flow, tank mixers and in-pipe behavior. Structural integrity of pressure vessels, atmospheric tanks, reactors and mixers verified in ANSYS and COMSOL.":
    "Análisis CFD y por elementos finitos de clase mundial para el flujo de proceso, los mezcladores de tanque y el comportamiento en tubería. Integridad estructural de recipientes a presión, tanques atmosféricos, reactores y mezcladores verificada en ANSYS y COMSOL.",
  "CFD process & mixing flow analysis": "Análisis de flujo de proceso y mezclado CFD",
  "FEA stress analysis of pressure vessels": "Análisis de tensión FEA de recipientes a presión",
  "In-pipe flow & pressure-drop studies": "Estudios de flujo en tubería y caída de presión",
  "Hygienic & sanitary design verification": "Verificación de diseño higiénico y sanitario",
  "CFD tank mixer flow simulation": "Simulación CFD de flujo de mezclador de tanque",
  "FEA pressure vessel stress analysis": "Análisis FEA de tensión de recipiente a presión",
  "In-pipe CFD flow analysis": "Análisis CFD de flujo en tubería",
  "SolidWorks 3D reactor model": "Modelo 3D de reactor en SolidWorks",
  "How we deliver": "Cómo entregamos",
  "End-to-end EPC delivery": "Entrega EPC de principio a fin",
  "Projects are executed and closed out under an EPC model — engineering, procurement, construction, commissioning, CQV and validation reporting.":
    "Los proyectos se ejecutan y cierran bajo un modelo EPC — ingeniería, compras, construcción, puesta en marcha, CQV e informes de validación.",
  "Validation Reporting": "Informes de Validación",
  "CQV & Qualification": "CQV y Cualificación",
  "Virtual Factory Tour": "Recorrido Virtual de Fábrica",
  "Industries": "Sectores",
  "Sectors we engineer for": "Sectores para los que diseñamos",
  "Carbonated Beverage Plants": "Plantas de Bebidas Carbonatadas",
  "Pharmaceutical Production": "Producción Farmacéutica",
  "Chemical Process & Storage": "Proceso Químico y Almacenamiento",
  "Pressure & Atmospheric Vessels": "Recipientes a Presión y Atmosféricos",
  "Robotic Production Systems": "Sistemas de Producción Robotizados",
  "Have a process to design or a plant to build?": "¿Tiene un proceso que diseñar o una planta que construir?",
  "Talk to our engineering team about concept design, FE analysis, automation or turnkey EPC delivery.":
    "Hable con nuestro equipo de ingeniería sobre diseño conceptual, análisis por elementos finitos, automatización o entrega EPC llave en mano.",
  "Start a conversation": "Iniciar una conversación",
  "Solution-Driven": "Orientados a Soluciones",
  "We engineer around your process goals, not generic templates — every deliverable solves a real problem.":
    "Diseñamos en torno a los objetivos de su proceso, no a plantillas genéricas — cada entregable resuelve un problema real.",
  "Global Standards": "Normas Globales",
  "Designs referenced to ASME, PED, EN, ATEX, GMP and ISO codes for compliance and reliability.":
    "Diseños referenciados a los códigos ASME, PED, EN, ATEX, GMP e ISO para el cumplimiento y la fiabilidad.",
  "Partnership Structure": "Estructura de Colaboración",
  "A flexible partnership organization that scales specialist capacity to each project's scope.":
    "Una organización de colaboración flexible que ajusta la capacidad especializada al alcance de cada proyecto.",
  "Global Reach": "Alcance Global",
  "Engineering teams in Türkiye and India, actively serving clients across Europe, the Middle East, Africa and Asia.":
    "Equipos de ingeniería en Türkiye e India, atendiendo activamente a clientes en Europa, Oriente Medio, África y Asia.",
  "Concept to detailed engineering": "Del concepto a la ingeniería de detalle",
  "Production buildings & utility plant design": "Diseño de edificios de producción y plantas de servicios",
  "3D modeling to finite element analysis": "Del modelado 3D al análisis por elementos finitos",
  "Process safety analysis & HAZOP studies": "Análisis de seguridad de proceso y estudios HAZOP",
  "Automation, SCADA & digital twin": "Automatización, SCADA y gemelo digital",
  "Turnkey EPC, CQV & validation": "EPC llave en mano, CQV y validación",
  "Company Profile": "Perfil de la Empresa",
  "Engineering Built on Decades of Experience": "Ingeniería Construida sobre Décadas de Experiencia",
  "EPS Engineering & Consultancy Inc. (EPS Mühendislik ve Danışmanlık A.Ş.) is a process engineering firm delivering solution-driven projects across multiple industries — from concept design to turnkey delivery.":
    "EPS Engineering & Consultancy Inc. (EPS Mühendislik ve Danışmanlık A.Ş.) es una firma de ingeniería de proceso que entrega proyectos orientados a soluciones en múltiples industrias — desde el diseño conceptual hasta la entrega llave en mano.",
  "Who we are": "Quiénes somos",
  "Powered by 25 Years of Engineering": "Impulsados por 25 Años de Ingeniería",
  "Our engineers bring 25 years of hands-on experience delivering projects across a wide range of industries. Through a flexible partnership organization structure, we assemble the right specialist teams for each project — combining the rigor of large engineering houses with the agility of a focused firm.":
    "Nuestros ingenieros aportan 25 años de experiencia práctica entregando proyectos en una amplia gama de industrias. A través de una estructura organizativa de colaboración flexible, reunimos los equipos especialistas adecuados para cada proyecto — combinando el rigor de las grandes ingenierías con la agilidad de una firma enfocada.",
  "Region": "Región",
  "IMEA + E Region": "Región IMEA + E",
  "yrs": "años",
  "Multi-industry engineering experience.": "Experiencia de ingeniería multisectorial.",
  "Engineering hubs: Türkiye, India, Spain.": "Centros de ingeniería: Türkiye, India, España.",
  "A variable partnership organization structure lets us scale specialist capacity up or down for every project.":
    "Una estructura organizativa de colaboración variable nos permite ajustar la capacidad especializada al alza o a la baja en cada proyecto.",
  "Industry Experience": "Experiencia en el Sector",
  "+ Asia Coverage": "+ Cobertura en Asia",
  "Engineering Hubs": "Centros de Ingeniería",
  "Turnkey Delivery": "Entrega Llave en Mano",
  "Global presence": "Presencia global",
  "Engineering teams across three regions": "Equipos de ingeniería en tres regiones",
  "Istanbul, Türkiye": "Estambul, Türkiye",
  "Headquarters": "Sede Central",
  "Leads engineering, project management and delivery for clients across the region.":
    "Lidera la ingeniería, la gestión de proyectos y la entrega para clientes de toda la región.",
  "India": "India",
  "Engineering Team": "Equipo de Ingeniería",
  "A dedicated engineering team expanding our design and analysis capacity around the clock.":
    "Un equipo de ingeniería dedicado que amplía nuestra capacidad de diseño y análisis las 24 horas.",
  "Barcelona, Spain": "Barcelona, España",
  "European Office": "Oficina Europea",
  "Supports European projects, clients and global partnerships.":
    "Apoya proyectos europeos, clientes y alianzas globales.",
  "Our values": "Nuestros valores",
  "What sets our engineering apart": "Lo que distingue a nuestra ingeniería",
  "Let's build something engineered to last": "Construyamos algo diseñado para durar",
  "Home": "Inicio",
  "Plant & Construction": "Planta y Construcción",
  "Company": "Empresa",
  "Contact": "Contacto",
  "EPS Engineering & Consultancy delivers solution-driven process engineering — from concept to commissioning — with teams in Türkiye, India and Europe.":
    "EPS Engineering & Consultancy ofrece ingeniería de proceso orientada a soluciones — del concepto a la puesta en marcha — con equipos en Türkiye, India y Europa.",
  "Capabilities": "Capacidades",
  "3D Modeling & FEA/CFD": "Modelado 3D y FEA/CFD",
  "EPC & CQV / Validation": "EPC y CQV / Validación",
  "Automation & Digital Twin": "Automatización y Gemelo Digital",
  "Offices": "Oficinas",
  "Headquarters — Istanbul": "Sede Central — Estambul",
  "Office — Barcelona": "Oficina — Barcelona",
  "Spain": "España",
  "All rights reserved.": "Todos los derechos reservados.",
  "Opening your email to our engineers at info@eps-con.com…":
    "Abriendo su correo hacia nuestros ingenieros en info@eps-con.com…",
  "Tell us about your process, plant or analysis needs. Share your project details below and your message goes straight to our engineers at info@eps-con.com. Teams in Istanbul, Barcelona and India will respond promptly.":
    "Cuéntenos sus necesidades de proceso, planta o análisis. Comparta los detalles de su proyecto abajo y su mensaje llegará directamente a nuestros ingenieros en info@eps-con.com. Los equipos de Estambul, Barcelona e India responderán con prontitud.",
  "Türkiye": "Türkiye",
  "Phone": "Teléfono",
  "Email & Web": "Correo y Web",
  "Tell us about your project": "Cuéntenos su proyecto",
  "Share the details below — your message is sent straight to our engineers at info@eps-con.com.":
    "Comparta los detalles abajo — su mensaje se envía directamente a nuestros ingenieros en info@eps-con.com.",
  "Full name": "Nombre completo",
  "Your name": "Su nombre",
  "Company name": "Nombre de la empresa",
  "Email": "Correo electrónico",
  "Subject": "Asunto",
  "Select a topic": "Seleccione un tema",
  "Turnkey EPC / Plant Setup": "EPC Llave en Mano / Implantación de Planta",
  "Process Safety / HAZOP": "Seguridad de Proceso / HAZOP",
  "Other": "Otro",
  "Project details": "Detalles del proyecto",
  "Tell us about your project...": "Cuéntenos su proyecto...",
  "Sent": "Enviado",
  "Send to our engineers": "Enviar a nuestros ingenieros",
  "Inside EPS": "Dentro de EPS",
  "The Team Behind the Results": "El Equipo Detrás de los Resultados",
  "Play company film": "Reproducir el vídeo corporativo",
  "Watch the film · English narration": "Ver el vídeo · Narración en inglés",
  "Trouble playing? Open the film in a new tab": "¿Problemas para reproducir? Abra el vídeo en una nueva pestaña",
  // Contact form — attachments & delivery
  "Attachment (optional)": "Archivo adjunto (opcional)",
  "Attach a drawing or document (max 15 MB)": "Adjunte un plano o documento (máx. 15 MB)",
  "Remove file": "Quitar archivo",
  "File is too large. Maximum size is 15 MB.": "El archivo es demasiado grande. El tamaño máximo es 15 MB.",
  "Sending…": "Enviando…",
  "Your message has been delivered. The relevant engineering unit will get back to you as soon as possible.":
    "Su mensaje ha sido entregado. La unidad de ingeniería correspondiente se pondrá en contacto con usted lo antes posible.",
  "Your message couldn't be sent. Please try again or email us directly at info@eps-con.com.":
    "No se pudo enviar su mensaje. Inténtelo de nuevo o escríbanos directamente a info@eps-con.com.",
};

