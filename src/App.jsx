import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, Award, BadgeCheck, CheckCircle2, ChevronDown, ChevronUp, Database, GraduationCap, Mail, MapPin, Menu, Quote, Sparkles, X } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/maxi-guti%C3%A9rrez-paulet/";
const EMAIL = "maxi.gutierrez@gmail.com";

const featuredCertifications = [
  { title: "Microsoft Power BI Desktop - El Bootcamp práctico", issuer: "Nikolai Schuler", date: "Abr. 2026", category: "Power BI" },
  { title: "Fundamentos de modelado de datos tabular en Power BI (PL-300)", issuer: "LinkedIn", date: "Oct. 2025", category: "Data & BI" },
  { title: "Visualizar y analizar datos en Power BI (PL-300)", issuer: "LinkedIn", date: "Oct. 2025", category: "Data & BI" },
  { title: "FCT032PO - Data Mining Business Intelligence", issuer: "Femxa", date: "Abr. 2022", category: "Data & BI" },
  { title: "IFC304_3 - Sistemas de Gestión de Información", issuer: "Consejería de Economía, Hacienda y Empleo", date: "Mar. 2023", category: "Tecnología" },
  { title: "Data Storytelling", issuer: "Randstad", date: "Jun. 2023", category: "Data" },
  { title: "Gestión de proyectos e historias de usuario con Jira", issuer: "Coursera", date: "Jul. 2026", category: "Agile" },
  { title: "ADGD347PO Programa Avanzado Agile Project Management", issuer: "Femxa", date: "Feb. 2023", category: "Agile" },
];

const additionalCertifications = [
  { title: "El discurso de ascensor", issuer: "GoodHabitz", date: "Feb. 2026", category: "Comunicación" },
  { title: "Power BI: Analizar datos combinando fácilmente las consultas", issuer: "LinkedIn", date: "Oct. 2025", category: "Data & BI" },
  { title: "Depura el Código: Python y Pandas", issuer: "LinkedIn", date: "Sept. 2025", category: "Desarrollo" },
  { title: "Introducción al examen PL-300: Microsoft Power BI Data Analyst", issuer: "LinkedIn", date: "Sept. 2025", category: "Power BI" },
  { title: "Aprende Power BI", issuer: "LinkedIn", date: "Sept. 2025", category: "Power BI" },
  { title: "ADGG102PO Business Intelligence", issuer: "Femxa", date: "Jun. 2022", category: "Data & BI" },
  { title: "Analítica Web para medir resultados de Marketing", issuer: "ANDRAGO", date: "Mar. 2024", category: "Marketing" },
  { title: "Trailhead by Salesforce", issuer: "Salesforce", date: "", category: "Tecnología" },
  { title: "Aprende Google Tag Manager", issuer: "LinkedIn", date: "Sept. 2024", category: "Marketing" },
  { title: "Copilot in Excel: Supercharge Your Productivity", issuer: "LinkedIn", date: "Sept. 2024", category: "IA" },
  { title: "Power BI Quick Tips", issuer: "LinkedIn", date: "Feb. 2024", category: "Power BI" },
  { title: "IFC363_3 - Administración y programación en sistemas ERP y CRM", issuer: "Consejería de Economía, Hacienda y Empleo", date: "Mar. 2023", category: "Tecnología" },
  { title: "Enseñanza de inglés como lengua extranjera (TEFL)", issuer: "Twenix", date: "Oct. 2022", category: "Idiomas" },
  { title: "Especialización en Facebook Ads", issuer: "thePower", date: "Ene. 2023", category: "Marketing" },
  { title: "Especialización Google Ads", issuer: "thePower", date: "Dic. 2022", category: "Marketing" },
  { title: "Especialización Copy Writing", issuer: "thePower", date: "Nov. 2022", category: "Marketing" },
  { title: "Especialización Content Marketing", issuer: "thePower", date: "Nov. 2022", category: "Marketing" },
  { title: "Especialización Trabajar con Agencias", issuer: "thePower", date: "Nov. 2022", category: "Marketing" },
  { title: "Especialización CMO", issuer: "thePower", date: "Nov. 2022", category: "Marketing" },
  { title: "Salesforce esencial", issuer: "LinkedIn", date: "Nov. 2022", category: "Tecnología" },
  { title: "Especialización Analítica - Google Analytics", issuer: "thePower", date: "Nov. 2022", category: "Marketing" },
  { title: "Growth Hacking Specialization", issuer: "thePower", date: "Nov. 2022", category: "Marketing" },
  { title: "Marketing Influencer Specialization", issuer: "thePower", date: "Oct. 2022", category: "Marketing" },
  { title: "Tableau: Domina todos los gráficos", issuer: "LinkedIn", date: "Oct. 2022", category: "Data & BI" },
  { title: "Tableau esencial", issuer: "LinkedIn", date: "Oct. 2022", category: "Data & BI" },
  { title: "Especialización en Social Media", issuer: "thePower", date: "Oct. 2022", category: "Marketing" },
  { title: "Especialización en Aspectos Legales", issuer: "thePower", date: "Oct. 2022", category: "Marketing" },
  { title: "SEO Especialización", issuer: "thePower", date: "Jul. 2022", category: "Marketing" },
  { title: "The Power Digital Marketing", issuer: "thePower", date: "Jul. 2022", category: "Marketing" },
  { title: "Data Science", issuer: "thePower", date: "Mar. 2022", category: "Data" },
  { title: "Agile & HBPS", issuer: "thePower", date: "Feb. 2022", category: "Agile" },
  { title: "Python esencial (2014)", issuer: "LinkedIn", date: "Ene. 2022", category: "Desarrollo" },
  { title: "Power BI esencial (2018)", issuer: "LinkedIn", date: "Ene. 2022", category: "Power BI" },
  { title: "Visual Studio Team Services esencial", issuer: "LinkedIn", date: "Ene. 2022", category: "Desarrollo" },
  { title: "Business Intelligence con Power BI Desktop, Service y Mobile", issuer: "Randstad", date: "Nov. 2020", category: "Data & BI" },
  { title: "Power BI para principiantes: Análisis de datos", issuer: "LinkedIn", date: "Oct. 2019", category: "Power BI" },
  { title: "Aprende SCRUM", issuer: "LinkedIn", date: "Jun. 2019", category: "Agile" },
  { title: "Aprende MySQL", issuer: "LinkedIn", date: "May. 2016", category: "Desarrollo" },
  { title: "Personal Branding on Social Media", issuer: "LinkedIn", date: "May. 2016", category: "Marketing" },
  { title: "Cómo delegar tareas en la empresa", issuer: "LinkedIn", date: "Mar. 2018", category: "Liderazgo" },
  { title: "Transición de jefe a líder", issuer: "LinkedIn", date: "Jun. 2019", category: "Liderazgo" },
];

const recommendations = [
  {
    name: "Ariel Segovia Ponce",
    role: "Senior Data Engineer / Data Platform",
    relationshipEs: "Trabajó con Maxi en equipos distintos",
    relationshipEn: "Worked with Maxi across different teams",
    dateEs: "Octubre de 2026",
    dateEn: "October 2026",
    quoteEs: "Maxi tiene una gran capacidad para liderar proyectos de BI y análisis de datos. Destaca por su solvencia técnica con SQL y Power BI, el rigor en el diseño de modelos semánticos y su compromiso con la calidad, precisión y seguridad del dato.",
    quoteEn: "Maxi has a strong ability to lead BI and data analysis projects. He stands out for his technical expertise in SQL and Power BI, his rigor in semantic model design, and his commitment to data quality, accuracy, and security.",
    originalLanguage: "es",
    url: "https://www.linkedin.com/in/arielsegoviaponce/",
  },
  {
    name: "Shiv Rathour",
    role: "Senior Data Strategy Manager at Sage",
    relationshipEs: "Trabajó con Maxi en el mismo equipo",
    relationshipEn: "Worked with Maxi on the same team",
    dateEs: "Septiembre de 2025",
    dateEn: "September 2025",
    quoteEs: "Maxi aportó una sólida experiencia en datos de clientes y un profundo conocimiento del mercado español, añadiendo valor de forma constante a nuestros proyectos. Es analítico, colaborativo y siempre está dispuesto a compartir ideas que impulsan resultados.",
    quoteEn: "Maxi brought strong expertise in customer data and a deep understanding of the Spanish market, which consistently added value to our projects. Maxi is analytical, collaborative, and always ready to share insights that drive results.",
    originalLanguage: "en",
    url: "https://www.linkedin.com/in/shivrathour83/",
  },
  {
    name: "Fernando Galvache",
    role: "CIO · Digital Transformation & AI",
    relationshipEs: "Supervisó directamente a Maxi",
    relationshipEn: "Directly managed Maxi",
    dateEs: "Noviembre de 2024",
    dateEn: "November 2024",
    quoteEs: "Maxi ha demostrado ser una persona extremadamente comprometida, con una gran capacidad para adaptarse y afrontar nuevos desafíos. Siempre cumple con sus compromisos, aporta soluciones innovadoras y su capacidad para liderar y trabajar en equipo lo hace indispensable en cualquier entorno profesional.",
    quoteEn: "Maxi has shown exceptional commitment and a strong ability to adapt and take on new challenges. He consistently delivers on his commitments, brings innovative solutions, and his leadership and teamwork make him a valuable contributor in any professional environment.",
    originalLanguage: "es",
    url: "https://www.linkedin.com/in/fernando-galvache/",
  },
  {
    name: "Isabel Victoria García",
    role: "Marketing & Channel Demand Generation",
    relationshipEs: "Trabajó con Maxi en equipos distintos",
    relationshipEn: "Worked with Maxi across different teams",
    dateEs: "Febrero de 2025",
    dateEn: "February 2025",
    quoteEs: "Maxi es una persona muy válida y con mucha experiencia en el análisis de información. Su predisposición a ayudarnos con los análisis de datos de marketing en un tiempo récord nos permitió lanzar campañas a tiempo.",
    quoteEn: "Maxi is a highly capable professional with extensive experience in information analysis. His willingness to support our marketing data analysis in record time enabled us to launch campaigns on schedule.",
    originalLanguage: "es",
    url: "https://www.linkedin.com/in/mariaisabelvictoria/",
  },
  {
    name: "Juan A. Andújar",
    role: "Business Development, Growth & Partnerships",
    relationshipEs: "Trabajó con Maxi en equipos distintos",
    relationshipEn: "Worked with Maxi across different teams",
    dateEs: "Enero de 2024",
    dateEn: "January 2024",
    quoteEs: "El nivel de confianza que puedes depositar en Maxi es infinito. Solo hay que explicarle el objetivo: monta un plan y lo ejecuta. Está continuamente aprendiendo, lo que le mantiene al corriente de las novedades.",
    quoteEn: "The level of trust you can place in Maxi is exceptional. Explain the objective and he will build a plan and execute it. He is continuously learning, which keeps him up to date with new developments.",
    originalLanguage: "es",
    url: "https://www.linkedin.com/in/juan-a-andujar/",
  },
];

const content = {
  es: {
    nav: [["Perfil", "perfil"], ["Experiencia", "experiencia"], ["Stack", "stack"], ["Formación", "formacion"], ["Certificaciones", "certificaciones"], ["Recomendaciones", "recomendaciones"]],
    heroEyebrow: "DATA · ANALYTICS · STRATEGY", heroTitle1: "Datos complejos.", heroTitle2: "Decisiones claras.",
    introBefore: "Soy", introAfter: "Data Analyst Senior especializado en inteligencia de datos, Power BI y transformación de información en valor para el negocio.",
    explore: "Explorar trayectoria", contact: "Contactar", location: "Madrid", experienceYears: "+20 años de experiencia", focus: "BI · Datos · Calidad",
    profileCard: "PERFIL / DATA ANALYST", role: "Data Analyst Senior", profileLabel: "01 · PERFIL", profileTitle: "El dato como herramienta de transformación.",
    profileP1: "Mi trayectoria se ha desarrollado en torno al análisis de datos, la inteligencia de negocio y la gestión de información estratégica. Combino visión funcional, capacidad analítica y conocimiento técnico.",
    profileP2: "He trabajado con áreas académicas, comerciales, financieras, de calidad y tecnología, transformando necesidades en información fiable y accionable.",
    stats: [["20+", "años de experiencia"], ["40%", "menos tiempo de análisis"], ["20", "personas lideradas"]],
    experienceLabel: "02 · EXPERIENCIA", experienceTitle: "Una trayectoria para explorar.", stackLabel: "03 · STACK", stackTitle: "Tecnología aplicada a problemas reales.", educationLabel: "04 · FORMACIÓN", educationTitle: "Aprendizaje continuo.",
    certificationsLabel: "05 · LICENCIAS Y CERTIFICACIONES", certificationsTitle: "Aprendizaje continuo, aplicado a la práctica.", certificationsIntro: "49 credenciales que refuerzan mi trayectoria en Data & BI, tecnología, gestión de proyectos, marketing digital y liderazgo.", certificationsCountLabel: "credenciales", certificationsFeatured: "Credenciales destacadas", certificationsShowAll: "Explorar las 49 credenciales", certificationsShowLess: "Mostrar solo las destacadas",
    recommendationsLabel: "06 · RECOMENDACIONES", recommendationsTitle: "Lo que dicen quienes han trabajado conmigo.", recommendationsIntro: "Cinco perspectivas sobre mi forma de trabajar, liderar, analizar y convertir necesidades en resultados.", recommendationOriginalEs: "Recomendación original en español", recommendationTranslatedEn: "English translation of a recommendation originally written in Spanish", recommendationViewProfile: "Ver perfil en LinkedIn", recommendationPrevious: "Recomendación anterior", recommendationNext: "Siguiente recomendación", learningPortfolio: "Portfolio de aprendizaje", allCredentials: "Todas las credenciales", filteredCredentials: "Credenciales filtradas", total: "total", noResults: "No hay credenciales en esta categoría.",
    talk: "¿Hablamos?", contactTitle: "Convirtamos información en decisiones que generen valor.", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
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
    nav: [["Profile", "perfil"], ["Experience", "experiencia"], ["Stack", "stack"], ["Education", "formacion"], ["Certifications", "certificaciones"], ["Recommendations", "recomendaciones"]],
    heroEyebrow: "DATA · ANALYTICS · STRATEGY", heroTitle1: "Complex data.", heroTitle2: "Clear decisions.",
    introBefore: "I am", introAfter: "a Senior Data Analyst specializing in data intelligence, Power BI, and turning information into business value.",
    explore: "Explore my career", contact: "Contact me", location: "Madrid", experienceYears: "20+ years of experience", focus: "BI · Data · Quality",
    profileCard: "PROFILE / DATA ANALYST", role: "Senior Data Analyst", profileLabel: "01 · PROFILE", profileTitle: "Data as a driver of transformation.",
    profileP1: "My career has focused on data analysis, business intelligence, and strategic information management. I combine functional vision, analytical skills, and technical expertise.",
    profileP2: "I have worked with academic, commercial, financial, quality, and technology teams, transforming business needs into reliable and actionable information.",
    stats: [["20+", "years of experience"], ["40%", "less analysis time"], ["20", "people managed"]],
    experienceLabel: "02 · EXPERIENCE", experienceTitle: "A career path to explore.", stackLabel: "03 · STACK", stackTitle: "Technology applied to real business challenges.", educationLabel: "04 · EDUCATION", educationTitle: "Continuous learning.",
    certificationsLabel: "05 · LICENSES & CERTIFICATIONS", certificationsTitle: "Continuous learning, applied in practice.", certificationsIntro: "49 credentials supporting my experience across Data & BI, technology, project management, digital marketing, and leadership.", certificationsCountLabel: "credentials", certificationsFeatured: "Featured credentials", certificationsShowAll: "Explore all 49 credentials", certificationsShowLess: "Show featured credentials only",
    recommendationsLabel: "06 · RECOMMENDATIONS", recommendationsTitle: "What people I have worked with say.", recommendationsIntro: "Five perspectives on how I work, lead, analyze, and turn business needs into results.", recommendationOriginalEs: "Original recommendation in Spanish", recommendationTranslatedEn: "English translation of a recommendation originally written in Spanish", recommendationViewProfile: "View LinkedIn profile", recommendationPrevious: "Previous recommendation", recommendationNext: "Next recommendation", learningPortfolio: "Learning portfolio", allCredentials: "All credentials", filteredCredentials: "Filtered credentials", total: "in total", noResults: "There are no credentials in this category.",
    talk: "Let's talk", contactTitle: "Let's turn information into decisions that create value.", openMenu: "Open menu", closeMenu: "Close menu",
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
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [certificationFilter, setCertificationFilter] = useState("Todas");
  const [recommendationIndex, setRecommendationIndex] = useState(0);
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
      {["es", "en"].map((code) => <button type="button" key={code} onClick={() => setLanguage(code)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === code ? "bg-cyan-300 text-black" : "text-white/50 hover:text-white"}`}>{code.toUpperCase()}</button>)}
    </div>
  );

  const certificationCategories = [
    { id: "Todas", es: "Todas", en: "All" },
    { id: "Data", es: "Data & BI", en: "Data & BI" },
    { id: "Power BI", es: "Power BI", en: "Power BI" },
    { id: "Tecnología", es: "Tecnología", en: "Technology" },
    { id: "Agile", es: "Agile", en: "Agile" },
    { id: "Marketing", es: "Marketing", en: "Marketing" },
    { id: "Desarrollo", es: "Desarrollo", en: "Development" },
    { id: "Liderazgo", es: "Liderazgo", en: "Leadership" },
  ];

  const allCertifications = [...featuredCertifications, ...additionalCertifications];
  const matchesCertificationFilter = (certification) => {
    if (certificationFilter === "Todas") return true;
    if (certificationFilter === "Data") return ["Data", "Data & BI"].includes(certification.category);
    return certification.category === certificationFilter;
  };
  const filteredFeaturedCertifications = featuredCertifications.filter(matchesCertificationFilter);
  const filteredAllCertifications = allCertifications.filter(matchesCertificationFilter);
  const filteredTotal = filteredAllCertifications.length;
  const certificationCategoryLabel = (category) => {
    if (language === "es") return category;
    const labels = { Tecnología: "Technology", Desarrollo: "Development", Liderazgo: "Leadership", Comunicación: "Communication", Idiomas: "Languages", IA: "AI" };
    return labels[category] || category;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white selection:bg-cyan-300 selection:text-black">
      <div className="fixed left-0 top-0 z-[100] h-1 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500" style={{ width: `${progress}%` }} />
      <div className="pointer-events-none fixed inset-0 z-0"><div className="absolute inset-0 opacity-[.13] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:54px_54px]" />{particles.map((particle, index) => <motion.i key={index} className="absolute h-1 w-1 rounded-full bg-cyan-200/50" style={{ left: particle.left, top: particle.top }} animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.8, 1] }} transition={{ duration: 3, delay: particle.delay, repeat: Infinity }} />)}</div>

      <nav className="fixed left-0 right-0 top-1 z-50 border-b border-white/5 bg-[#05070b]/75 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"><button type="button" onClick={() => go("inicio")} className="text-sm font-bold tracking-[.3em]">MAXI<span className="text-cyan-300">.</span></button><div className="hidden gap-8 md:flex">{t.nav.map(([name, id]) => <button type="button" key={id} onClick={() => go(id)} className="text-sm text-white/55 transition hover:text-cyan-300">{name}</button>)}</div><div className="flex items-center gap-3"><LanguageButtons /><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-cyan-200 sm:block">LinkedIn ↗</a><button type="button" className="rounded-full border border-white/10 p-2 md:hidden" onClick={() => setMenu(!menu)} aria-label={menu ? t.closeMenu : t.openMenu}>{menu ? <X /> : <Menu />}</button></div></div><AnimatePresence>{menu && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/5 bg-[#05070b]"><div className="grid gap-5 p-6">{t.nav.map(([name, id]) => <button type="button" key={id} onClick={() => go(id)} className="text-left text-white/70">{name}</button>)}<a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-left text-cyan-300">LinkedIn ↗</a></div></motion.div>}</AnimatePresence></nav>

      <section id="inicio" className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-14 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:px-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs tracking-[.18em] text-cyan-200"><Sparkles className="h-3.5 w-3.5" />{t.heroEyebrow}</div><h1 className="text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[88px]">{t.heroTitle1}<br /><span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.heroTitle2}</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">{t.introBefore} <strong className="font-medium text-white">Maxi Gutiérrez Paulet</strong>, {t.introAfter}</p><div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => go("experiencia")} className="flex items-center rounded-full bg-cyan-300 px-6 py-3 font-medium text-black transition hover:bg-cyan-200">{t.explore}<ArrowDown className="ml-2 h-4 w-4" /></button><a href={`mailto:${EMAIL}`} className="flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 transition hover:bg-white/10"><Mail className="mr-2 h-4 w-4" />{t.contact}</a></div><div className="mt-12 flex flex-wrap gap-9 text-sm text-white/40"><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" />{t.location}</span><span>{t.experienceYears}</span><span>{t.focus}</span></div></motion.div>
        <div className="relative mx-auto h-[500px] w-full max-w-[470px] [perspective:1300px]" onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 12); mouseY.set(-((event.clientY - rect.top) / rect.height - 0.5) * 12); }} onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}><motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="absolute inset-8 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[.13] to-white/[.025] p-8 shadow-[0_35px_100px_rgba(34,211,238,.13)] backdrop-blur-xl"><div className="relative z-20 flex justify-between text-xs tracking-[.2em] text-white/35" style={{ transform: "translateZ(35px)" }}><span>{t.profileCard}</span><Database className="h-5 w-5 text-cyan-300" /></div><div className="pointer-events-none absolute left-4 top-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-[70px]" /><div className="relative z-10 mt-7 flex items-center gap-5" style={{ transform: "translateZ(55px)" }}><div className="relative h-52 w-40 shrink-0 overflow-hidden rounded-[28px] border border-cyan-300/30 bg-cyan-300/10 shadow-[0_20px_60px_rgba(34,211,238,.22)]"><img src="/maxi-profile.png" alt={language === "es" ? "Retrato profesional" : "Professional portrait"} className="h-full w-full object-cover object-top" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071016]/55 via-transparent to-transparent" /></div><div className="min-w-0"><h2 className="text-2xl font-medium leading-tight">Business Intelligence<br /><span className="text-cyan-200">&amp; Data Analytics</span></h2><p className="mt-4 text-sm font-medium text-white/55">{t.role}</p><p className="mt-2 text-xs leading-5 text-white/35">Power BI · SQL · Data Strategy<br />AI-assisted Data Analytics</p></div></div><div className="relative z-20 mt-7 grid grid-cols-3 gap-2">{["Power BI", "DAX", "SQL"].map((technology) => <span key={technology} className="rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-center text-xs text-white/65">{technology}</span>)}</div></motion.div></div>
      </section>

      <section id="perfil" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"><p className="text-xs tracking-[.25em] text-cyan-300">{t.profileLabel}</p><div className="mt-4 grid gap-10 lg:grid-cols-2"><h2 className="text-4xl font-semibold sm:text-5xl">{t.profileTitle}</h2><div className="space-y-5 text-lg leading-8 text-white/55"><p>{t.profileP1}</p><p>{t.profileP2}</p><div className="grid gap-3 sm:grid-cols-3">{t.stats.map(([number, text]) => <div key={text} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="text-3xl font-semibold text-cyan-300">{number}</div><div className="mt-1 text-sm text-white/40">{text}</div></div>)}</div></div></div></section>

      <section id="experiencia" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"><p className="text-xs tracking-[.25em] text-cyan-300">{t.experienceLabel}</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{t.experienceTitle}</h2><div className="mt-12 grid gap-6 lg:grid-cols-[.42fr_.58fr]"><div className="space-y-3">{t.experience.map((item, index) => <button type="button" key={item.role} onClick={() => setSelected(index)} className={`w-full rounded-2xl border p-5 text-left transition ${selected === index ? "border-cyan-300/35 bg-white/[.08]" : "border-white/10 bg-white/[.025] hover:bg-white/[.05]"}`}><p className="font-medium">{item.role}</p><p className="mt-1 text-sm text-white/40">{item.company}</p><p className="mt-3 text-xs text-cyan-200/70">{item.period}</p></button>)}</div><AnimatePresence mode="wait"><motion.div key={`${language}-${selected}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-[28px] border border-white/10 bg-white/[.04] p-8"><p className="text-sm text-cyan-300">{t.experience[selected].company}</p><h3 className="mt-2 text-2xl font-medium">{t.experience[selected].role}</h3><p className="mt-6 leading-7 text-white/50">{t.experience[selected].summary}</p><div className="mt-7 space-y-3">{t.experience[selected].achievements.map((achievement) => <div key={achievement} className="flex gap-3 text-sm leading-6 text-white/65"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" /><span>{achievement}</span></div>)}</div><div className="mt-8 flex flex-wrap gap-2">{t.experience[selected].stack.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/45">{technology}</span>)}</div></motion.div></AnimatePresence></div></section>

      <section id="stack" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"><p className="text-xs tracking-[.25em] text-cyan-300">{t.stackLabel}</p><h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{t.stackTitle}</h2><div className="mt-12 grid gap-4 sm:grid-cols-2">{t.skillGroups.map((group) => <motion.div key={group.title} whileHover={{ y: -6 }} className="rounded-[26px] border border-white/10 bg-white/[.04] p-7"><h3 className="text-xl font-medium">{group.title}</h3><div className="mt-7 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="rounded-xl bg-white/[.06] px-3 py-2 text-sm text-white/55">{skill}</span>)}</div></motion.div>)}</div></section>

      <section id="formacion" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"><p className="text-xs tracking-[.25em] text-cyan-300">{t.educationLabel}</p><h2 className="mt-4 text-4xl font-semibold">{t.educationTitle}</h2><div className="mt-9 grid gap-3 sm:grid-cols-2">{t.education.map((item, index) => <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} whileHover={{ y: -4 }} className="group rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.015] p-6 transition hover:border-cyan-300/25"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10"><GraduationCap className="h-5 w-5 text-cyan-300" /></div><div><p className="text-xs uppercase tracking-[.16em] text-cyan-300/70">{item.period}</p><h3 className="mt-3 text-lg font-medium">{item.title}</h3><p className="mt-2 text-sm text-white/55">{item.institution}</p><p className="mt-4 text-sm text-white/40">{item.area}</p><p className="mt-2 text-sm leading-6 text-white/35">{item.skills}</p></div></div></motion.div>)}</div></section>

      <section id="certificaciones" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p className="text-xs tracking-[.25em] text-cyan-300">{t.certificationsLabel}</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><div><motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[.04]"><div className="absolute inset-5 rounded-full border border-cyan-300/10" /><div className="absolute inset-10 rounded-full border border-dashed border-cyan-300/20" /><div className="relative text-center"><div className="text-7xl font-semibold tracking-[-.06em] text-cyan-300">49</div><div className="mt-2 text-xs uppercase tracking-[.25em] text-white/40">{t.certificationsCountLabel}</div></div></motion.div></div><div><h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.certificationsTitle}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">{t.certificationsIntro}</p><div className="mt-8 flex flex-wrap gap-2">{certificationCategories.map((category) => { const active = certificationFilter === category.id; return <button type="button" key={category.id} onClick={() => { setCertificationFilter(category.id); setShowAllCertifications(true); }} className={`rounded-full border px-4 py-2 text-sm transition ${active ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-200" : "border-white/10 bg-white/[.04] text-white/55 hover:border-cyan-300/25 hover:text-white"}`}>{language === "es" ? category.es : category.en}</button>; })}</div></div></div>

        {certificationFilter === "Todas" && !showAllCertifications && <div className="mt-16"><div className="mb-7 flex items-center gap-3"><Award className="h-5 w-5 text-cyan-300" /><h3 className="text-xl font-medium">{t.certificationsFeatured}</h3></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{filteredFeaturedCertifications.map((certification, index) => <motion.div key={certification.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[.065] to-white/[.015] p-6 transition hover:border-cyan-300/30"><BadgeCheck className="absolute right-5 top-5 h-5 w-5 text-cyan-300/60" /><p className="text-xs uppercase tracking-[.18em] text-cyan-300/60">{certificationCategoryLabel(certification.category)}</p><h4 className="mt-8 min-h-[72px] text-base font-medium leading-6 text-white/90">{certification.title}</h4><div className="mt-7 border-t border-white/10 pt-4"><p className="text-sm text-white/45">{certification.issuer}</p><p className="mt-1 text-xs text-white/25">{certification.date}</p></div></motion.div>)}</div></div>}

        {(showAllCertifications || certificationFilter !== "Todas") && <motion.div key={certificationFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 border-t border-white/10 pt-10"><div className="mb-8 flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.2em] text-cyan-300/60">{t.learningPortfolio}</p><h3 className="mt-2 text-2xl font-medium">{certificationFilter === "Todas" ? t.allCredentials : t.filteredCredentials}</h3></div><div className="hidden text-right sm:block"><span className="text-3xl font-semibold text-cyan-300">{filteredTotal}</span><p className="text-xs text-white/30">{t.total}</p></div></div>{filteredTotal > 0 ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{filteredAllCertifications.map((certification, index) => <motion.div key={`${certification.title}-${index}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: Math.min(index * 0.015, 0.35) }} whileHover={{ y: -4 }} className="flex min-h-[150px] flex-col justify-between rounded-[20px] border border-white/[.07] bg-white/[.025] p-5 transition hover:border-cyan-300/20 hover:bg-white/[.04]"><div><div className="flex items-start justify-between gap-3"><span className="text-[10px] uppercase tracking-[.18em] text-cyan-300/55">{certificationCategoryLabel(certification.category)}</span><BadgeCheck className="h-4 w-4 shrink-0 text-white/20" /></div><h4 className="mt-4 text-sm font-medium leading-5 text-white/75">{certification.title}</h4></div><div className="mt-5 flex items-end justify-between gap-3 border-t border-white/[.06] pt-3"><span className="text-xs text-white/35">{certification.issuer}</span>{certification.date && <span className="shrink-0 text-[10px] text-white/20">{certification.date}</span>}</div></motion.div>)}</div> : <p className="rounded-2xl border border-white/10 bg-white/[.03] p-6 text-white/45">{t.noResults}</p>}</motion.div>}

        <div className="mt-10 flex justify-center"><button type="button" onClick={() => { setCertificationFilter("Todas"); setShowAllCertifications((value) => !value); }} className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-6 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-300/10">{showAllCertifications && certificationFilter === "Todas" ? t.certificationsShowLess : t.certificationsShowAll}{showAllCertifications && certificationFilter === "Todas" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</button></div>
      </section>

      <section id="recomendaciones" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p className="text-xs tracking-[.25em] text-cyan-300">{t.recommendationsLabel}</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.recommendationsTitle}</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/50">{t.recommendationsIntro}</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-5xl font-semibold text-cyan-300">05</span>
              <span className="max-w-[150px] text-xs uppercase tracking-[.2em] text-white/35">{language === "es" ? "testimonios profesionales" : "professional testimonials"}</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={`${language}-${recommendationIndex}`}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[.08] to-white/[.02] p-8 shadow-[0_30px_90px_rgba(34,211,238,.08)] sm:p-10"
            >
              <Quote className="absolute right-8 top-8 h-14 w-14 text-cyan-300/10" />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[.2em] text-cyan-300/65">
                  {language === "en" && recommendations[recommendationIndex].originalLanguage === "es"
                    ? t.recommendationTranslatedEn
                    : language === "es" && recommendations[recommendationIndex].originalLanguage === "en"
                      ? "Traducción al español de una recomendación original en inglés"
                      : language === "es"
                        ? t.recommendationOriginalEs
                        : "Original recommendation in English"}
                </p>
                <blockquote className="mt-8 text-xl font-medium leading-9 text-white/85 sm:text-2xl sm:leading-10">
                  “{language === "es" ? recommendations[recommendationIndex].quoteEs : recommendations[recommendationIndex].quoteEn}”
                </blockquote>
                <div className="mt-10 border-t border-white/10 pt-6 sm:flex sm:items-end sm:justify-between">
                  <div>
                    <p className="text-lg font-medium text-white">{recommendations[recommendationIndex].name}</p>
                    <p className="mt-1 text-sm text-cyan-200/70">{recommendations[recommendationIndex].role}</p>
                    <p className="mt-3 text-xs text-white/30">
                      {language === "es" ? recommendations[recommendationIndex].relationshipEs : recommendations[recommendationIndex].relationshipEn}
                      <span className="mx-2">·</span>
                      {language === "es" ? recommendations[recommendationIndex].dateEs : recommendations[recommendationIndex].dateEn}
                    </p>
                  </div>
                  <a href={recommendations[recommendationIndex].url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm text-cyan-300 transition hover:text-cyan-200 sm:mt-0">
                    {t.recommendationViewProfile} ↗
                  </a>
                </div>
                <div className="mt-8 flex flex-col gap-5 border-t border-white/[.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-2">
                    {recommendations.map((recommendation, index) => (
                      <button key={recommendation.name} type="button" onClick={() => setRecommendationIndex(index)} aria-label={`${language === "es" ? "Mostrar recomendación" : "Show recommendation"} ${index + 1}`} className={`h-2 rounded-full transition-all ${recommendationIndex === index ? "w-8 bg-cyan-300" : "w-2 bg-white/20 hover:bg-white/40"}`} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="mr-2 text-xs text-white/30">{String(recommendationIndex + 1).padStart(2, "0")} / {String(recommendations.length).padStart(2, "0")}</span>
                    <button type="button" onClick={() => setRecommendationIndex((recommendationIndex - 1 + recommendations.length) % recommendations.length)} aria-label={t.recommendationPrevious} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[.04] transition hover:border-cyan-300/30 hover:text-cyan-300"><ArrowLeft className="h-4 w-4" /></button>
                    <button type="button" onClick={() => setRecommendationIndex((recommendationIndex + 1) % recommendations.length)} aria-label={t.recommendationNext} className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[.08] text-cyan-200 transition hover:bg-cyan-300/15"><ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="rounded-[36px] border border-cyan-300/15 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-violet-500/15 p-9 sm:p-14"><p className="text-sm text-cyan-200">{t.talk}</p><h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.contactTitle}</h2><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${EMAIL}`} className="flex items-center rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-cyan-200"><Mail className="mr-2 h-4 w-4" />{t.contact}</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-black/10 px-6 py-3 transition hover:bg-white/10">LinkedIn ↗</a></div></div></section>
      <footer className="relative z-10 border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-9 text-sm text-white/30 sm:flex-row lg:px-10"><span>© 2026 Maximiliano Gutiérrez Paulet</span><div className="flex gap-5"><a href={`mailto:${EMAIL}`}>Email</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></footer>
    </main>
  );
}

export default App;
