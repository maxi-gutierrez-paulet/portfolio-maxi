import { useMemo, useState } from 'react'
import './App.css'

const certifications = [
  ['Gestión de proyectos e historias de usuario con Jira','Coursera','Agile','jul. 2026'],
  ['Microsoft Power BI Desktop - El Bootcamp práctico','Nikolai Schuler','Power BI','abr. 2026'],
  ['El discurso de ascensor','GoodHabitz','Comunicación','feb. 2026'],
  ['Fundamentos de modelado de datos tabular en Power BI (PL-300)','LinkedIn','Power BI','oct. 2025'],
  ['Visualizar y analizar datos en Power BI (PL-300)','LinkedIn','Power BI','oct. 2025'],
  ['Power BI: Analizar datos combinando fácilmente las consultas','LinkedIn','Power BI','oct. 2025'],
  ['Depura el Código: Python y Pandas','LinkedIn','Desarrollo','sept. 2025'],
  ['Introducción al examen PL-300: Microsoft Power BI Data Analyst','LinkedIn','Power BI','sept. 2025'],
  ['Aprende Power BI','LinkedIn','Power BI','sept. 2025'],
  ['Analítica Web para medir resultados de Marketing','ANDRAGO','Marketing','mar. 2024'],
  ['Aprende Google Tag Manager','LinkedIn','Marketing','sept. 2024'],
  ['Copilot in Excel: Supercharge Your Productivity','LinkedIn','IA','sept. 2024'],
  ['Power BI Quick Tips','LinkedIn','Power BI','feb. 2024'],
  ['IFC363_3 - Administración y programación en sistemas ERP y CRM','Consejería de Economía, Hacienda y Empleo','Tecnología','mar. 2023'],
  ['IFC304_3 - Sistemas de Gestión de Información','Consejería de Economía, Hacienda y Empleo','Tecnología','mar. 2023'],
  ['Data Storytelling','Randstad','Data & BI','jun. 2023'],
  ['ADGD347PO Programa Avanzado Agile Project Management','Femxa','Agile','feb. 2023'],
  ['Especialización en Facebook Ads','thePower','Marketing','ene. 2023'],
  ['Especialización Google Ads','thePower','Marketing','dic. 2022'],
  ['Especialización Copy Writing','thePower','Marketing','nov. 2022'],
  ['Especialización Content Marketing','thePower','Marketing','nov. 2022'],
  ['Especialización Trabajar con Agencias','thePower','Marketing','nov. 2022'],
  ['Especialización CMO','thePower','Marketing','nov. 2022'],
  ['Salesforce esencial','LinkedIn','Tecnología','nov. 2022'],
  ['Especialización Analítica - Google Analytics','thePower','Marketing','nov. 2022'],
  ['Growth Hacking Specialization','thePower','Marketing','nov. 2022'],
  ['Marketing Influencer Specialization','thePower','Marketing','oct. 2022'],
  ['Tableau: Domina todos los gráficos','LinkedIn','Data & BI','oct. 2022'],
  ['Tableau esencial','LinkedIn','Data & BI','oct. 2022'],
  ['Especialización en Social Media','thePower','Marketing','oct. 2022'],
  ['Especialización en Aspectos Legales','thePower','Marketing','oct. 2022'],
  ['Enseñanza de inglés como lengua extranjera (TEFL)','Twenix','Idiomas','oct. 2022'],
  ['SEO Especialización','thePower','Marketing','jul. 2022'],
  ['The Power Digital Marketing','thePower','Marketing','jul. 2022'],
  ['ADGG102PO Business Intelligence','Femxa','Data & BI','jun. 2022'],
  ['FCT032PO - Data Mining Business Intelligence','Femxa','Data & BI','abr. 2022'],
  ['Data Science','thePower','Data & BI','mar. 2022'],
  ['Agile & HBPS','thePower','Agile','feb. 2022'],
  ['Python esencial (2014)','LinkedIn','Desarrollo','ene. 2022'],
  ['Power BI esencial (2018)','LinkedIn','Power BI','ene. 2022'],
  ['Visual Studio Team Services esencial','LinkedIn','Desarrollo','ene. 2022'],
  ['Business Intelligence con Power BI Desktop, Service y Mobile','Randstad','Data & BI','nov. 2020'],
  ['Power BI para principiantes: Análisis de datos','LinkedIn','Power BI','oct. 2019'],
  ['Transición de jefe a líder','LinkedIn','Liderazgo','jun. 2019'],
  ['Aprende SCRUM','LinkedIn','Agile','jun. 2019'],
  ['Cómo delegar tareas en la empresa','LinkedIn','Liderazgo','mar. 2018'],
  ['Aprende MySQL','LinkedIn','Desarrollo','may. 2016'],
  ['Personal Branding on Social Media','LinkedIn','Marketing','may. 2016'],
  ['Trailhead by Salesforce','Salesforce','Tecnología',''],
]

const experiences = {
  es: [
    ['UAX · Data Analyst','nov. 2025 - Actualidad','Especialización en Ciencias de la Salud, Calidad y Acreditación, arquitectura dimensional, automatización de KPIs y cultura del dato.','Power BI · SSRS · DAX · Oracle · SQL Server · Dataflows · Power Automate · JIRA'],
    ['Sage · Marketing Data Insights & Analytics','oct. 2013 - mar. 2025','Modelos semánticos, reporting financiero y comercial, KPIs de negocio, segmentación de campañas y colaboración internacional.','Power BI · MicroStrategy · MySQL · SQL · CRM · Web Analytics'],
    ['Sage · Gestión de Experiencia del Cliente (CEM) & Desarrollo de Producto','oct. 2012 - sept. 2013','Dirección de documentación técnica, diseño customer-centric, gestión de stakeholders y coordinación de equipos multidisciplinares.','SQL Server · HTML/CSS · Visual Studio · UX · NPS · CSAT'],
    ['Sage · QA Manager | Arquitecto de Procesos de Calidad','ago. 2000 - sept. 2012','Dirección de QA, creación de equipos de alto rendimiento, gestión multilocalización y reporting ejecutivo. Reducción del time-to-market y defectos en producción en un 40%.','JIRA · Confluence · Selenium · CI/CD · ISO 9001 · CMMI · TestPartner'],
    ['Sage · Software Quality Technician','abr. 1998 - jul. 2000','Diseño y ejecución de pruebas funcionales, rendimiento, escalabilidad, seguridad y mejora continua de la calidad del software.','Testing · Bases de datos · Automatización · Trabajo cross-functional'],
  ],
  en: [
    ['UAX · Data Analyst','Nov. 2025 - Present','Health Sciences, Quality and Accreditation, dimensional architecture, KPI automation and data-driven culture.','Power BI · SSRS · DAX · Oracle · SQL Server · Dataflows · Power Automate · JIRA'],
    ['Sage · Marketing Data Insights & Analytics','Oct. 2013 - Mar. 2025','Semantic models, financial and commercial reporting, business KPIs, campaign segmentation and international collaboration.','Power BI · MicroStrategy · MySQL · SQL · CRM · Web Analytics'],
    ['Sage · Customer Experience Management (CEM) & Product Development','Oct. 2012 - Sep. 2013','Technical documentation leadership, customer-centric design, stakeholder management and multidisciplinary team coordination.','SQL Server · HTML/CSS · Visual Studio · UX · NPS · CSAT'],
    ['Sage · QA Manager | Quality Process Architect','Aug. 2000 - Sep. 2012','QA leadership, high-performance team building, multi-site management and executive reporting. Reduced time-to-market and production defects by 40%.','JIRA · Confluence · Selenium · CI/CD · ISO 9001 · CMMI · TestPartner'],
    ['Sage · Software Quality Technician','Apr. 1998 - Jul. 2000','Functional, performance, scalability and security testing, plus continuous software quality improvement.','Testing · Databases · Automation · Cross-functional collaboration'],
  ],
}

const education = {
  es: [
    ['Grado Superior','Desarrollo de Aplicaciones Web - DAW','UAX · 2024-2025'],
    ['Grado Superior','Desarrollo de Aplicaciones Multiplataforma - DAM','CEEP · 2020-2022'],
    ['Grado Superior','Administración y Finanzas','CEEP · 1995-1998'],
    ['Máster','ThePowerMBA + Digital Marketing','thePower · 2022-2023'],
    ['Máster','Innovación Disruptiva','ALITER · 2012-2013'],
    ['Máster','Gestión de Pymes','IE Business School · 2000-2002'],
  ],
  en: [
    ['Higher Diploma','Web Application Development - DAW','UAX · 2024-2025'],
    ['Higher Diploma','Cross-Platform Application Development - DAM','CEEP · 2020-2022'],
    ['Higher Diploma','Administration and Finance','CEEP · 1995-1998'],
    ["Master's Program",'ThePowerMBA + Digital Marketing','thePower · 2022-2023'],
    ["Master's Degree",'Disruptive Innovation','ALITER · 2012-2013'],
    ["Master's Degree",'SME Management','IE Business School · 2000-2002'],
  ],
}

const recommendations = [
  ['Ariel Segovia Ponce','Senior Data Engineer / Data Platform','Maxi destaca por su solvencia técnica con SQL y Power BI, el rigor en modelos semánticos y su compromiso con la calidad del dato.','Maxi stands out for his SQL and Power BI expertise, rigorous semantic models, and commitment to data quality.'],
  ['Shiv Rathour','Senior Data Strategy Manager at Sage','Maxi es analítico, colaborativo y comparte ideas que impulsan resultados.','Maxi is analytical, collaborative, and shares insights that drive results.'],
  ['Fernando Galvache','CIO · Digital Transformation & AI','Maxi demuestra compromiso, adaptación, liderazgo y capacidad de trabajo en equipo.','Maxi demonstrates commitment, adaptability, leadership, and teamwork.'],
  ['Isabel Victoria García','Marketing & Channel Demand Generation','Su apoyo con los análisis de marketing nos permitió lanzar campañas a tiempo.','His marketing analysis support enabled us to launch campaigns on schedule.'],
  ['Juan A. Andújar','Business Development, Growth & Partnerships','Explícale el objetivo y Maxi monta un plan y lo ejecuta.','Explain the objective and Maxi will build a plan and execute it.'],
]

function App() {
  const [language, setLanguage] = useState('es')
  const [zone, setZone] = useState(null)
  const [filter, setFilter] = useState('Todas')
  const [recommendation, setRecommendation] = useState(0)
  const es = language === 'es'

  const categories = ['Todas','Power BI','Data & BI','Tecnología','Desarrollo','Agile','Marketing','IA','Liderazgo','Comunicación','Idiomas']
  const filteredCertifications = useMemo(
    () => filter === 'Todas' ? certifications : certifications.filter((item) => item[2] === filter),
    [filter]
  )

  const text = es ? {
    title:'Explora mi trayectoria profesional', subtitle:'Selecciona una zona del despacho para descubrir cada parte de mi CV.', profile:'Perfil profesional', experience:'Experiencia profesional', certifications:'Certificaciones', education:'Formación', recommendations:'Recomendaciones', close:'Volver a la sala', download:'Descargar CV', all:'Todas'
  } : {
    title:'Explore my professional journey', subtitle:'Select an area of the room to discover each part of my CV.', profile:'Professional profile', experience:'Professional experience', certifications:'Certifications', education:'Education', recommendations:'Recommendations', close:'Back to the room', download:'Download CV', all:'All'
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <strong className="brand">MAXI<span>.</span></strong>
        <div className="language-switch">
          {['es','en'].map((code) => <button key={code} className={language === code ? 'active' : ''} onClick={() => setLanguage(code)}>{code.toUpperCase()}</button>)}
        </div>
      </header>

      <section className="room-wrap">
        <div className="room">
          <div className="room-heading"><p>INTERACTIVE DATA ROOM</p><h1>{text.title}</h1><span>{text.subtitle}</span></div>
          <div className="main-zones">
            <button className="zone profile-zone" onClick={() => setZone('profile')}><div className="avatar">MG</div><h2>{text.profile}</h2><p>{es ? 'Data Analyst Senior' : 'Senior Data Analyst'}</p><small>Business Intelligence & Data Analytics</small></button>
            <button className="zone monitor-zone" onClick={() => setZone('experience')}><div className="monitor"><span>▥</span><h2>{es ? 'Datos complejos.' : 'Complex data.'}<br/><b>{es ? 'Decisiones claras.' : 'Clear decisions.'}</b></h2><div className="bars">{[35,58,43,78,62,92,74].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div><p>UAX · Sage · Power BI · MicroStrategy · SQL</p></button>
          </div>
          <div className="secondary-zones">
            <button className="zone small-zone" onClick={() => setZone('certifications')}><b>49</b><h3>{text.certifications}</h3><p>Power BI · Data & BI · Agile · Marketing</p></button>
            <button className="zone small-zone" onClick={() => setZone('education')}><b>🎓</b><h3>{text.education}</h3><p>DAW · DAM · Máster · Business</p></button>
            <button className="zone small-zone" onClick={() => setZone('recommendations')}><b>05</b><h3>{text.recommendations}</h3><p>{es ? 'Lo que dicen quienes han trabajado conmigo' : 'What people I have worked with say'}</p></button>
          </div>
        </div>
      </section>

      {zone && <div className="modal-backdrop"><section className="modal"><button className="close-x" onClick={() => setZone(null)}>×</button>
        {zone === 'profile' && <><h2>{text.profile}</h2><div className="profile-layout"><div className="avatar avatar-large">MG</div><div><h3>Maximiliano Gutiérrez Paulet</h3><p>Data Analyst Senior · Business Intelligence & Data Analytics</p><div className="personal-grid"><span>Email: maxi.gutierrez@gmail.com</span><span>{es ? 'Teléfono' : 'Phone'}: {es ? '629 150 483' : '+34 629 150 483'}</span><span>Madrid, España</span><span>{es ? 'Sexo: Hombre' : 'Sex: Male'}</span></div><div className="action-row"><a href="https://www.linkedin.com/in/maxi-guti%C3%A9rrez-paulet/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/maxi-gutierrez-cv.pdf" download>{text.download}</a></div></div></div></>}
        {zone === 'experience' && <><h2>{text.experience}</h2><div className="experience-list">{experiences[language].map((item)=><article key={item[0]}><header><h3>{item[0]}</h3><span>{item[1]}</span></header><p>{item[2]}</p><small>{item[3]}</small></article>)}</div></>}
        {zone === 'certifications' && <><h2>49 {text.certifications}</h2><div className="filters">{categories.map((category)=><button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category === 'Todas' && !es ? 'All' : category}</button>)}</div><p className="result-count">{filteredCertifications.length} {es ? 'credenciales' : 'credentials'}</p><div className="cert-grid">{filteredCertifications.map((item)=><article key={item[0]}><small>{item[2]}</small><h3>{item[0]}</h3><p>{item[1]}</p><span>{item[3]}</span></article>)}</div></>}
        {zone === 'education' && <><h2>{text.education}</h2><div className="education-grid">{education[language].map((item)=><article key={item[1]}><small>🎓 {item[0]}</small><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></>}
        {zone === 'recommendations' && <><h2>{text.recommendations}</h2><div className="recommendation-card"><blockquote>“{recommendations[recommendation][es ? 2 : 3]}”</blockquote><div><h3>{recommendations[recommendation][0]}</h3><p>{recommendations[recommendation][1]}</p></div></div><div className="recommendation-controls"><button onClick={() => setRecommendation((recommendation - 1 + recommendations.length) % recommendations.length)}>← {es ? 'Anterior' : 'Previous'}</button><span>{recommendation + 1} / {recommendations.length}</span><button onClick={() => setRecommendation((recommendation + 1) % recommendations.length)}>{es ? 'Siguiente' : 'Next'} →</button></div></>}
        <button className="back-button" onClick={() => setZone(null)}>{text.close}</button>
      </section></div>}
    </main>
  )
}

export default App
