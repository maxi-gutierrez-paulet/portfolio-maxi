import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, CheckCircle2, Database, GraduationCap, Mail, MapPin, Menu, Sparkles, X } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/maxi-guti%C3%A9rrez-paulet/";
const EMAIL = "maxi.gutierrez@gmail.com";

const content = {
  es: {
    nav: [["Perfil", "perfil"], ["Experiencia", "experiencia"], ["Stack", "stack"], ["Formación", "formacion"]],
    heroEyebrow: "DATA · ANALYTICS · STRATEGY",
    heroTitle1: "Datos complejos.", heroTitle2: "Decisiones claras.",
    introBefore: "Soy",
    introAfter: "Data Analyst Senior especializado en inteligencia de datos, Power BI y transformación de información en valor para el negocio.",
    explore: "Explorar trayectoria", contact: "Contactar", location: "Madrid",
    experienceYears: "+20 años de experiencia", focus: "BI · Datos · Calidad",
    profileCard: "PERFIL / DATA ANALYST", role: "Data Analyst Senior",
    profileLabel: "01 · PERFIL", profileTitle: "El dato como herramienta de transformación.",
    profileP1: "Mi trayectoria se ha desarrollado en torno al análisis de datos, la inteligencia de negocio y la gestión de información estratégica. Combino visión funcional, capacidad analítica y conocimiento técnico.",
    profileP2: "He trabajado con áreas académicas, comerciales, financieras, de calidad y tecnología, transformando necesidades en información fiable y accionable.",
    stats: [["20+", "años de experiencia"], ["40%", "menos tiempo de análisis"], ["20", "personas lideradas"]],
    experienceLabel: "02 · EXPERIENCIA", experienceTitle: "Una trayectoria para explorar.",
    stackLabel: "03 · STACK", stackTitle: "Tecnología aplicada a problemas reales.",
    educationLabel: "04 · FORMACIÓN", educationTitle: "Aprendizaje continuo.",
    talk: "¿Hablamos?", contactTitle: "Convirtamos información en decisiones que generen valor.",
    openMenu: "Abrir menú", closeMenu: "Cerrar menú",
    experience: [
      { company: "Universidad Alfonso X el Sabio (UAX)", role: "Data Analyst", period: "Nov. 2025 · Actualidad", summary: "Reporting institucional, calidad del dato y soluciones analíticas para convertir necesidades funcionales en información fiable y útil para la gestión.", achievements: ["Diseño y despliegue de dashboards institucionales en Power BI.", "Definición y unificación de KPIs para acreditación, rankings y seguimiento académico.", "Modelos analíticos para Medicina, Enfermería y Veterinaria.", "Integración de Salesforce, Oracle, SQL Server, Azure, ERP y SharePoint.", "Automatización mediante Dataflows, Power Query y procesos ETL.", "Colaboración entre TI, Calidad y áreas de negocio mediante Agile y JIRA."], stack: ["Power BI", "DAX", "Oracle", "SQL Server", "Azure", "Salesforce", "Power Query"] },
      { company: "Sage · Iberia", role: "Marketing Data Insights & Analytics · Data Analyst", period: "2013 · 2025", summary: "Analítica internacional para negocio, marketing y finanzas, con modelos semánticos y reporting para Iberia y Reino Unido.", achievements: ["Construcción de modelos semánticos y visualizaciones para decisiones financieras y comerciales.", "Automatización del reporting con una reducción del 40% en el tiempo de análisis.", "Seguimiento de Renewal Rate, Churn y ROI con interlocución directa con stakeholders.", "Integración de CRM, Web Analytics y SQL para simplificar el reporting transfronterizo."], stack: ["Power BI", "SQL", "CRM", "Web Analytics", "KPIs", "Reporting"] },
      { company: "Sage", role: "Head of User Experience & Software Quality Manager", period: "1998 · 2013", summary: "Liderazgo de calidad de software y experiencia de usuario, combinando gestión de equipos, automatización y diseño centrado en las personas.", achievements: ["Dirección de un equipo de QA de 20 personas.", "Reducción de defectos críticos mediante automatización con TestPartner.", "Rediseño de documentación técnica.", "Implantación de metodologías de Diseño Centrado en el Usuario (UCD)."], stack: ["QA", "UX", "UCD", "TestPartner", "Leadership", "Automation"] }
    ],
    education: [
      { title: "Grado Superior en Desarrollo de Aplicaciones Web", institution: "Universidad Alfonso X el Sabio", period: "Sept. 2024 · Jul. 2025", area: "Desarrollo web Full Stack y construcción de aplicaciones orientadas a datos.", skills: "HTML5 · CSS3/SASS · JavaScript · React · PHP · Java · SQL · MySQL · PostgreSQL · Git/GitHub · APIs REST" },
      { title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma", institution: "CEEP Centro Europeo de Estudios Profesionales", period: "Sept. 2020 · Jul. 2022", area: "Desarrollo de aplicaciones multiplataforma, arquitectura de software y gestión de bases de datos.", skills: "Python · C · C# · Java · Kotlin · SQL · MySQL · SQLite · Android · Git/GitHub · APIs REST" },
      { title: "Grado Superior en Administración y Finanzas", institution: "CEEP Centro Europeo de Estudios Profesionales", period: "1995 · 1998", area: "Administración, contabilidad, finanzas y gestión empresarial.", skills: "Contabilidad · Gestión financiera · Fiscalidad · Tesorería · RRHH · Control de costes · Excel" },
      { title: "Máster ThePowerMBA + Digital Marketing", institution: "thePower", period: "Jul. 2022 · Jul. 2023", area: "Estrategia empresarial, marketing digital, analítica y gestión.", skills: "Business Strategy · Digital Marketing · Analytics · SEO/SEM · Growth · Marketing de contenidos" },
      { title: "Máster en Innovación Disruptiva", institution: "ALITER Escuela Internacional de Negocios Digitales", period: "2012 · 2013", area: "Innovación, transformación empresarial y nuevos modelos de negocio.", skills: "Innovación · Transformación · Estrategia · Economía" },
      { title: "Máster en Gestión de Pymes", institution: "IE Business School", period: "2000 · 2002", area: "Dirección, economía y gestión empresarial.", skills: "Gestión empresarial · Economía · Dirección · Finanzas · Estrategia" }
    ],
    skillGroups: [
      { title: "Business Intelligence", items: ["Power BI", "DAX", "Microsoft Fabric", "MicroStrategy", "Snowflake"] },
      { title: "Datos y modelado", items: ["SQL Server", "Oracle", "MySQL", "Modelado dimensional", "ETL", "Dataflows"] },
      { title: "Automatización", items: ["Python", "Power Automate", "Power Query M", "Excel VBA"] },
      { title: "Gestión", items: ["Agile", "Scrum", "JIRA", "Workfront", "Stakeholders", "Liderazgo"] }
    ]
  },
  en: {
    nav: [["Profile", "perfil"], ["Experience", "experiencia"], ["Stack", "stack"], ["Education", "formacion"]],
    heroEyebrow: "DATA · ANALYTICS · STRATEGY",
    heroTitle1: "Complex data.", heroTitle2: "Clear decisions.",
    introBefore: "I am",
    introAfter: "a Senior Data Analyst specializing in data intelligence, Power BI, and turning information into business value.",
    explore: "Explore my career", contact: "Contact me", location: "Madrid",
    experienceYears: "20+ years of experience", focus: "BI · Data · Quality",
    profileCard: "PROFILE / DATA ANALYST", role: "Senior Data Analyst",
    profileLabel: "01 · PROFILE", profileTitle: "Data as a driver of transformation.",
    profileP1: "My career has focused on data analysis, business intelligence, and strategic information management. I combine functional vision, analytical skills, and technical expertise.",
    profileP2: "I have worked with academic, commercial, financial, quality, and technology teams, transforming business needs into reliable and actionable information.",
    stats: [["20+", "years of experience"], ["40%", "less analysis time"], ["20", "people managed"]],
    experienceLabel: "02 · EXPERIENCE", experienceTitle: "A career path to explore.",
    stackLabel: "03 · STACK", stackTitle: "Technology applied to real business challenges.",
    educationLabel: "04 · EDUCATION", educationTitle: "Continuous learning.",
    talk: "Let's talk", contactTitle: "Let's turn information into decisions that create value.",
    openMenu: "Open menu", closeMenu: "Close menu",
    experience: [
      { company: "Universidad Alfonso X el Sabio (UAX)", role: "Data Analyst", period: "Nov. 2025 · Present", summary: "Institutional reporting, data quality, and analytical solutions that turn functional requirements into reliable information for decision-making.", achievements: ["Designed and deployed institutional Power BI dashboards.", "Defined and standardized KPIs for accreditation, rankings, and academic monitoring.", "Built analytical models for Medicine, Nursing, and Veterinary Science.", "Integrated Salesforce, Oracle, SQL Server, Azure, ERP, and SharePoint data.", "Automated reporting through Dataflows, Power Query, and ETL processes.", "Worked across IT, Quality, and business teams using Agile and JIRA."], stack: ["Power BI", "DAX", "Oracle", "SQL Server", "Azure", "Salesforce", "Power Query"] },
      { company: "Sage · Iberia", role: "Marketing Data Insights & Analytics · Data Analyst", period: "2013 · 2025", summary: "International analytics for business, marketing, and finance, including semantic models and reporting for Iberia and the United Kingdom.", achievements: ["Built semantic models and visualizations for financial and commercial decision-making.", "Automated reporting processes, reducing analysis time by 40%.", "Managed Renewal Rate, Churn, and ROI metrics while working directly with stakeholders.", "Integrated CRM, Web Analytics, and SQL data to simplify cross-border reporting."], stack: ["Power BI", "SQL", "CRM", "Web Analytics", "KPIs", "Reporting"] },
      { company: "Sage", role: "Head of User Experience & Software Quality Manager", period: "1998 · 2013", summary: "Leadership in software quality and user experience, combining team management, automation, and user-centered design.", achievements: ["Managed a QA team of 20 people.", "Reduced critical defects through TestPartner automation.", "Redesigned technical documentation.", "Introduced User-Centered Design methodologies."], stack: ["QA", "UX", "UCD", "TestPartner", "Leadership", "Automation"] }
    ],
    education: [
      { title: "Higher Diploma in Web Application Development", institution: "Universidad Alfonso X el Sabio", period: "Sep. 2024 · Jul. 2025", area: "Full Stack web development and data-oriented application development.", skills: "HTML5 · CSS3/SASS · JavaScript · React · PHP · Java · SQL · MySQL · PostgreSQL · Git/GitHub · REST APIs" },
      { title: "Higher Diploma in Cross-Platform Application Development", institution: "CEEP Centro Europeo de Estudios Profesionales", period: "Sep. 2020 · Jul. 2022", area: "Cross-platform development, software architecture, and database management.", skills: "Python · C · C# · Java · Kotlin · SQL · MySQL · SQLite · Android · Git/GitHub · REST APIs" },
      { title: "Higher Diploma in Administration and Finance", institution: "CEEP Centro Europeo de Estudios Profesionales", period: "1995 · 1998", area: "Administration, accounting, finance, and business management.", skills: "Accounting · Financial management · Taxation · Treasury · HR · Cost control · Excel" },
      { title: "ThePowerMBA + Digital Marketing Master's Program", institution: "thePower", period: "Jul. 2022 · Jul. 2023", area: "Business strategy, digital marketing, analytics, and management.", skills: "Business Strategy · Digital Marketing · Analytics · SEO/SEM · Growth · Content Marketing" },
      { title: "Master's Degree in Disruptive Innovation", institution: "ALITER Escuela Internacional de Negocios Digitales", period: "2012 · 2013", area: "Innovation, business transformation, and new business models.", skills: "Innovation · Transformation · Strategy · Economics" },
      { title: "Master's Degree in SME Management", institution: "IE Business School", period: "2000 · 2002", area: "Leadership, economics, and business management.", skills: "Business Management · Economics · Leadership · Finance · Strategy" }
    ],
    skillGroups: [
      { title: "Business Intelligence", items: ["Power BI", "DAX", "Microsoft Fabric", "MicroStrategy", "Snowflake"] },
      { title: "Data and modeling", items: ["SQL Server", "Oracle", "MySQL", "Dimensional modeling", "ETL", "Dataflows"] },
      { title: "Automation", items: ["Python", "Power Automate", "Power Query M", "Excel VBA"] },
      { title: "Management", items: ["Agile", "Scrum", "JIRA", "Workfront", "Stakeholders", "Leadership"] }
    ]
  }
};

function App() {
  const [selected, setSelected] = useState(0);
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("es");
  const t = content[language];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 70, damping: 18 });
  const rotateY = useSpring(mouseX, { stiffness: 70, damping: 18 });

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSelected(0);
    document.documentElement.lang = language;
  }, [language]);

  const particles = useMemo(() => Array.from({ length: 24 }, (_, i) => ({ left: `${(i * 41) % 100}%`, top: `${(i * 67) % 100}%`, delay: i * 0.12 })), []);
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); };

  const LanguageButtons = () => (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[.04] p-1">
      {["es", "en"].map((code) => (
        <button type="button" key={code} onClick={() => setLanguage(code)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === code ? "bg-cyan-300 text-black" : "text-white/50 hover:text-white"}`}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white selection:bg-cyan-300 selection:text-black">
      <div className="fixed left-0 top-0 z-[100] h-1 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500" style={{ width: `${progress}%` }} />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-[.13] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:54px_54px]" />
        {particles.map((particle, index) => <motion.i key={index} className="absolute h-1 w-1 rounded-full bg-cyan-200/50" style={{ left: particle.left, top: particle.top }} animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.8, 1] }} transition={{ duration: 3, delay: particle.delay, repeat: Infinity }} />)}
      </div>

      <nav className="fixed left-0 right-0 top-1 z-50 border-b border-white/5 bg-[#05070b]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <button type="button" onClick={() => go("inicio")} className="text-sm font-bold tracking-[.3em]">MAXI<span className="text-cyan-300">.</span></button>
          <div className="hidden gap-8 md:flex">{t.nav.map(([name, id]) => <button type="button" key={id} onClick={() => go(id)} className="text-sm text-white/55 transition hover:text-cyan-300">{name}</button>)}</div>
          <div className="flex items-center gap-3">
            <LanguageButtons />
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-cyan-200 sm:block">LinkedIn ↗</a>
            <button type="button" className="rounded-full border border-white/10 p-2 md:hidden" onClick={() => setMenu(!menu)} aria-label={menu ? t.closeMenu : t.openMenu}>{menu ? <X /> : <Menu />}</button>
          </div>
        </div>
        <AnimatePresence>{menu && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/5 bg-[#05070b]"><div className="grid gap-5 p-6">{t.nav.map(([name, id]) => <button type="button" key={id} onClick={() => go(id)} className="text-left text-white/70">{name}</button>)}<a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-left text-cyan-300">LinkedIn ↗</a></div></motion.div>}</AnimatePresence>
      </nav>

      <section id="inicio" className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-14 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs tracking-[.18em] text-cyan-200"><Sparkles className="h-3.5 w-3.5" />{t.heroEyebrow}</div>
          <h1 className="text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[88px]">{t.heroTitle1}<br /><span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.heroTitle2}</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">{t.introBefore} <strong className="font-medium text-white">Maxi Gutiérrez Paulet</strong>, {t.introAfter}</p>
          <div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => go("experiencia")} className="flex items-center rounded-full bg-cyan-300 px-6 py-3 font-medium text-black transition hover:bg-cyan-200">{t.explore}<ArrowDown className="ml-2 h-4 w-4" /></button><a href={`mailto:${EMAIL}`} className="flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 transition hover:bg-white/10"><Mail className="mr-2 h-4 w-4" />{t.contact}</a></div>
          <div className="mt-12 flex flex-wrap gap-9 text-sm text-white/40"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" />{t.location}</span><span>{t.experienceYears}</span><span>{t.focus}</span></div>
        </motion.div>

        <div className="relative mx-auto h-[500px] w-full max-w-[470px] [perspective:1300px]" onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 12); mouseY.set(-((event.clientY - rect.top) / rect.height - 0.5) * 12); }} onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}>
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="absolute inset-8 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[.13] to-white/[.025] p-8 shadow-[0_35px_100px_rgba(34,211,238,.13)] backdrop-blur-xl">
            <div className="relative z-20 flex justify-between text-xs tracking-[.2em] text-white/35" style={{ transform: "translateZ(35px)" }}><span>{t.profileCard}</span><Database className="h-5 w-5 text-cyan-300" /></div>
            <div className="pointer-events-none absolute left-4 top-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-[70px]" />
            <div className="relative z-10 mt-7 flex items-center gap-5" style={{ transform: "translateZ(55px)" }}>
              <div className="relative h-52 w-40 shrink-0 overflow-hidden rounded-[28px] border border-cyan-300/30 bg-cyan-300/10 shadow-[0_20px_60px_rgba(34,211,238,.22)]">
                <img src="/maxi-profile.png" alt={language === "es" ? "Retrato profesional de Maxi Gutiérrez Paulet" : "Professional portrait of Maxi Gutiérrez Paulet"} className="h-full w-full object-cover object-top" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071016]/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-cyan-200/10" />
              </div>
              <div className="min-w-0"><h2 className="text-2xl font-medium leading-tight text-white">Business Intelligence<br /><span className="text-cyan-200">&amp; Data Analytics</span></h2><p className="mt-4 text-sm font-medium text-white/55">{t.role}</p><p className="mt-2 text-xs leading-5 text-white/35">Power BI · SQL · Data Strategy<br />AI-assisted Data Analytics</p></div>
            </div>
            <div className="relative z-20 mt-7 grid grid-cols-3 gap-2" style={{ transform: "translateZ(40px)" }}>{["Power BI", "DAX", "SQL"].map((technology) => <span key={technology} className="rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-center text-xs text-white/65 backdrop-blur">{technology}</span>)}</div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cyan-950/15 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="perfil" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p className="text-xs tracking-[.25em] text-cyan-300">{t.profileLabel}</p><div className="mt-4 grid gap-10 lg:grid-cols-2"><h2 className="text-4xl font-semibold sm:text-5xl">{t.profileTitle}</h2><div className="space-y-5 text-lg leading-8 text-white/55"><p>{t.profileP1}</p><p>{t.profileP2}</p><div className="grid gap-3 sm:grid-cols-3">{t.stats.map(([number, text]) => <div key={text} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="text-3xl font-semibold text-cyan-300">{number}</div><div className="mt-1 text-sm text-white/40">{text}</div></div>)}</div></div></div>
      </section>

      <section id="experiencia" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p className="text-xs tracking-[.25em] text-cyan-300">{t.experienceLabel}</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{t.experienceTitle}</h2><div className="mt-12 grid gap-6 lg:grid-cols-[.42fr_.58fr]"><div className="space-y-3">{t.experience.map((item, index) => <button type="button" key={item.role} onClick={() => setSelected(index)} className={`w-full rounded-2xl border p-5 text-left transition ${selected === index ? "border-cyan-300/35 bg-white/[.08]" : "border-white/10 bg-white/[.025] hover:bg-white/[.05]"}`}><p className="font-medium">{item.role}</p><p className="mt-1 text-sm text-white/40">{item.company}</p><p className="mt-3 text-xs text-cyan-200/70">{item.period}</p></button>)}</div><AnimatePresence mode="wait"><motion.div key={`${language}-${selected}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-[28px] border border-white/10 bg-white/[.04] p-8"><p className="text-sm text-cyan-300">{t.experience[selected].company}</p><h3 className="mt-2 text-2xl font-medium">{t.experience[selected].role}</h3><p className="mt-6 leading-7 text-white/50">{t.experience[selected].summary}</p><div className="mt-7 space-y-3">{t.experience[selected].achievements.map((achievement) => <div key={achievement} className="flex gap-3 text-sm leading-6 text-white/65"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" /><span>{achievement}</span></div>)}</div><div className="mt-8 flex flex-wrap gap-2">{t.experience[selected].stack.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/45">{technology}</span>)}</div></motion.div></AnimatePresence></div>
      </section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"><p className="text-xs tracking-[.25em] text-cyan-300">{t.stackLabel}</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{t.stackTitle}</h2><div className="mt-12 grid gap-4 sm:grid-cols-2">{t.skillGroups.map((group) => <motion.div key={group.title} whileHover={{ y: -6 }} className="rounded-[26px] border border-white/10 bg-white/[.04] p-7"><h3 className="text-xl font-medium">{group.title}</h3><div className="mt-7 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="rounded-xl bg-white/[.06] px-3 py-2 text-sm text-white/55">{skill}</span>)}</div></motion.div>)}</div></section>

      <section id="formacion" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"><p className="text-xs tracking-[.25em] text-cyan-300">{t.educationLabel}</p><h2 className="mt-4 text-4xl font-semibold">{t.educationTitle}</h2><div className="mt-9 grid gap-3 sm:grid-cols-2">{t.education.map((item, index) => <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} whileHover={{ y: -4 }} className="group rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.015] p-6 transition hover:border-cyan-300/25"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10"><GraduationCap className="h-5 w-5 text-cyan-300" /></div><div className="min-w-0"><p className="text-xs font-medium uppercase tracking-[.16em] text-cyan-300/70">{item.period}</p><h3 className="mt-3 text-lg font-medium leading-6 text-white">{item.title}</h3><p className="mt-2 text-sm font-medium text-white/55">{item.institution}</p><p className="mt-4 text-sm text-white/40">{item.area}</p><p className="mt-2 text-sm leading-6 text-white/35">{item.skills}</p></div></div></motion.div>)}</div></section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="rounded-[36px] border border-cyan-300/15 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-violet-500/15 p-9 sm:p-14"><p className="text-sm text-cyan-200">{t.talk}</p><h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.contactTitle}</h2><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${EMAIL}`} className="flex items-center rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-cyan-200"><Mail className="mr-2 h-4 w-4" />{t.contact}</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-6 py-3 transition hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-[#0A66C2]" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9H7.12v11.452z" /></svg><span>LinkedIn ↗</span></a></div></div></section>

      <footer className="relative z-10 border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-9 text-sm text-white/30 sm:flex-row lg:px-10"><span>© 2026 Maximiliano Gutiérrez Paulet</span><div className="flex gap-5"><a href={`mailto:${EMAIL}`} className="transition hover:text-white">Email</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a></div></div></footer>
    </main>
  );
}

export default App;
