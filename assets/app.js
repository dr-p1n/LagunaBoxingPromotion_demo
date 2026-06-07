/* ================= i18n ================= */
const dict = {
  es: {
    "nav.home": "Inicio",
    "nav.velada": "Próxima Velada",
    "nav.circuito": "Circuito",
    "nav.campeones": "Campeones",
    "nav.archivo": "Archivo",
    "nav.medios": "Medios",
    "nav.contacto": "Contacto",

    "explore.kicker": "EXPLORA",
    "explore.titleA": "CONOCE",
    "explore.titleB": "EL PROYECTO",
    "explore.more": "VER MÁS",
    "explore.circuitoK": "INICIATIVA NACIONAL",
    "explore.circuitoT": "Circuito Nacional de Boxeo",
    "explore.circuitoD": "La cantera que forma al próximo campeón mundial canalero, temporada tras temporada.",
    "explore.campK": "CAMPEONES",
    "explore.campT": "El Legado Chemito",
    "explore.campD": "Anselmo \"Chemito\" Moreno — ex campeón mundial WBA y fundador de Laguna Premium.",
    "explore.archK": "ARCHIVO",
    "explore.archT": "Carteleras Anteriores",
    "explore.archD": "El historial de veladas y noches de boxeo presentadas por Laguna Premium.",

    "circuitoPage.kicker": "INICIATIVA NACIONAL",
    "circuitoPage.sub": "El programa insignia de Laguna Premium: una temporada estructurada que detecta, forma y proyecta a la próxima generación de campeones panameños.",
    "campPage.kicker": "CAMPEONES",
    "campPage.sub": "El fundador detrás de Laguna Premium y el estándar técnico que define al proyecto.",

    "archivo.kicker": "ARCHIVO",
    "archivo.titleA": "CARTELERAS",
    "archivo.titleB": "ANTERIORES",
    "archivo.sub": "Un registro de las veladas y noches de boxeo presentadas por Laguna Premium. Eventos de demostración con datos ilustrativos.",
    "archivo.headK": "HISTORIAL",
    "archivo.headTitleA": "NOCHES",
    "archivo.headTitleB": "ANTERIORES",
    "archivo.headMeta": "EVENTOS DEMO<br/>DATOS ILUSTRATIVOS",
    "arch.main": "COMBATE ESTELAR",
    "arch.note": "Demo · ediciones, peleadores y resultados ilustrativos. No representan eventos reales.",

    "hero.eyebrow": "PANAMÁ · BOXEO PREMIUM",
    "hero.tagline": "El Futuro del Boxeo Panameño",
    "hero.cta": "VER PRÓXIMA VELADA",

    "strip.city": "CIUDAD DE PANAMÁ",
    "strip.pro": "BOXEO PROFESIONAL",
    "strip.fights": "PRÓXIMAS PELEAS",

    "velada.kicker": "PRÓXIMA VELADA",
    "velada.titleA": "PANAMA",
    "velada.titleB": "FIGHT NIGHT",
    "velada.meta": "VIE · 18 DIC 2026<br/>CIUDAD DE PANAMÁ",
    "velada.ppv": "· EN VIVO",
    "flyer.kicker": "PRESENTA LAGUNA PREMIUM · PANAMÁ",
    "flyer.mainLabel": "COMBATE ESTELAR",
    "flyer.date": "VIE · 18 DIC 2026",
    "flyer.time": "20:00 HRS · APERTURA DE PUERTAS",
    "flyer.venueLabel": "SEDE",
    "flyer.broadcastLabel": "EN VIVO",
    "velada.eventLabel": "VELADA FIN DE AÑO",
    "velada.eventBouts": "PELEAS",
    "velada.eventVenue": "ARENA ROBERTO DURÁN · CIUDAD DE PANAMÁ",
    "velada.nextBadge": "PRÓXIMO EVENTO",
    "velada.liveLabel": "EN VIVO",
    "velada.broadcastLead": "TRANSMISIÓN POR",
    "velada.ppvTag": "PAY-PER-VIEW",
    "velada.demoNote": "Demo · fecha y transmisión ilustrativas.",
    "cd.days": "DÍAS",
    "cd.hours": "HORAS",
    "cd.mins": "MIN",
    "cd.secs": "SEG",

    "bout.cornerRed": "ESQUINA ROJA",
    "bout.cornerBlue": "ESQUINA AZUL",
    "bout.openingLabel": "APERTURA",
    "bout.coLabel": "CO-ESTELAR",
    "bout.mainLabel": "ESTELAR",
    "bout.weightFly": "PESO MOSCA",
    "bout.weightFeather": "PESO PLUMA",
    "bout.weightLight": "PESO LIGERO",

    "circuit.kicker": "INICIATIVA NACIONAL",
    "circuit.titleA": "CIRCUITO",
    "circuit.titleB": "NACIONAL DE BOXEO",
    "circuit.meta": "PROGRAMA ANUAL<br/>TEMPORADA 2026",
    "circuit.intro1": "El Circuito Nacional de Boxeo es la iniciativa insignia de Laguna Premium — una temporada estructurada de veladas que conecta gimnasios, prospectos y provincias en un mismo escenario competitivo.",
    "circuit.intro2": "Carteleras premium, oficiales certificados y un sistema escalonado que lleva al campeón nacional al ring de cierre en Ciudad de Panamá.",
    "circuit.statEvents": "EVENTOS<br/>AL AÑO",
    "circuit.statCities": "CIUDADES<br/>SEDE",
    "circuit.statClasses": "CATEGORÍAS<br/>DE PESO",
    "circuit.phasesHead": "FASES DE LA TEMPORADA",
    "circuit.phase1Title": "Eliminatorias Regionales",
    "circuit.phase1Desc": "Carteleras locales en provincias clave para identificar prospectos por categoría de peso.",
    "circuit.phase1Meta": "Q1 · Q2 · 6 SEDES",
    "circuit.phase2Title": "Semifinales Nacionales",
    "circuit.phase2Desc": "Cruces entre ganadores regionales, transmisión amplificada y cobertura de prensa Premium.",
    "circuit.phase2Meta": "Q3 · 2 SEDES · TV",
    "circuit.phase3Title": "Gran Final del Circuito",
    "circuit.phase3Desc": "Evento independiente de coronación: se define al Campeón Nacional del Circuito por categoría — una noche aparte de la cartelera estelar.",
    "circuit.phase3Meta": "EVENTO PROPIO · PANAMA CITY",
    "circuit.visionLabel": "LA VISIÓN",
    "circuit.visionTitle": "<span translate=\"no\">Laguna Premium</span> es la <em>fábrica de desarrollo</em> de <span translate=\"no\">Chemito</span> para la próxima generación de campeones mundiales canaleros.",
    "circuit.visionBody1": "El Circuito Nacional convierte gimnasios dispersos en un solo sistema: detecta talento joven, lo forma con carteleras reales y lo proyecta a escala internacional. Una cantera, no un evento aislado.",
    "circuit.visionBody2": "Y con el nombre de <span translate=\"no\">Chemito</span> se abren acuerdos de medios, marcas y transmisión que ningún otro promotor del país puede conseguir. La oportunidad ya existe — solo falta la visión para ejecutarla.",

    "reel.lineA": "CADA RING.",
    "reel.lineB": "CADA ROUND.",
    "reel.tag": "PRESENTADO POR LAGUNA PREMIUM",

    "champ.kicker": "CAMPEONES",
    "champ.titleA": "EL LEGADO",
    "champ.titleB": "CHEMITO",
    "champ.role": "EX CAMPEÓN MUNDIAL WBA · FUNDADOR",
    "champ.bio1": "Anselmo \"Chemito\" Moreno es uno de los boxeadores más técnicos y respetados de la historia de Panamá. Defendió el título mundial gallo de la AMB en más de diez ocasiones y dejó una huella imborrable en el deporte.",
    "champ.bio2": "Hoy, desde Laguna Premium Boxing Promotions, abre el camino para la próxima generación de campeones panameños — con carteleras premium, formación profesional y una visión internacional del boxeo.",
    "champ.statDefenses": "DEFENSAS DEL TÍTULO",
    "champ.statWins": "VICTORIAS PROFESIONALES",
    "champ.statCrowned": "CORONADO CAMPEÓN MUNDIAL",
    "champ.tag": "DEMO · IMAGEN DE ARCHIVO",
    "champ.source": "Fuente: Asociación Mundial de Boxeo (WBA) — Boxeador del Mes",

    "media.kicker": "MEDIOS",
    "media.titleA": "PLATAFORMAS",
    "media.titleB": "DE CONTENIDO",
    "media.meta": "TITLE SPONSORS DISPONIBLES<br/>OPORTUNIDAD COMERCIAL",
    "media.typeRadio": "RADIO",
    "media.radioCount": "SEMANAL",
    "media.radioTitle": "Esquina del Campeón",
    "media.radioDesc": "Programa semanal de boxeo con Chemito Moreno: análisis de carteleras, entrevistas a fighters y noticias del ring nacional e internacional.",
    "media.titleSponsor": "TITLE SPONSOR",
    "media.typeInterview": "ENTREVISTAS",
    "media.interviewCount": "ON-DEMAND",
    "media.interviewTitle": "Cara a Cara",
    "media.interviewDesc": "Conversaciones largas con leyendas del boxeo, prospectos panameños y figuras del deporte mundial. Distribuidas en video y audio.",
    "media.presentedBy": "PRESENTADO POR",
    "media.typeArticles": "ARTÍCULOS",
    "media.articlesCount": "SEMANAL",
    "media.articlesTitle": "Prensa Premium",
    "media.articlesDesc": "Editoriales, crónicas de cartelera y análisis técnico publicados en lagunaboxing.com y medios aliados de Panamá.",
    "media.sponsoredBy": "PATROCINADO POR",
    "media.slotAvail": "[ ESPACIO DISPONIBLE ]",
    "media.slotAvail2": "[ ESPACIO DISPONIBLE ]",
    "media.slotAvail3": "[ ESPACIO DISPONIBLE ]",

    "sponsors.kicker": "SPONSORS",
    "sponsors.titleA": "NUESTROS",
    "sponsors.titleB": "PATROCINADORES",
    "sponsors.meta": "MARCAS ALIADAS<br/>EJEMPLOS DE DEMO",
    "sponsors.note": "Logos de demostración. Marcas mostradas con fines ilustrativos — sin afiliación ni acuerdo vigente.",
    "sponsors.betHead": "CASAS DE APUESTAS",
    "sponsors.betNote": "+18 · Juega con responsabilidad. Logos de demostración — sin afiliación ni acuerdo vigente. Apuestas reguladas por la Junta de Control de Juegos de Panamá.",

    "contact.kicker": "CONTACTO",
    "contact.titleA": "SUBE",
    "contact.titleB": "AL RING",
    "contact.headline": "¿Listo para hacer historia?",
    "contact.copy": "Patrocinadores, prensa, gestores y atletas: escríbenos directamente por WhatsApp y un miembro del equipo te responderá.",
    "contact.whatsapp": "WHATSAPP",
    "contact.email": "EMAIL",

    "footer.langhint": "ES | EN — Cambia el idioma arriba a la derecha",
    "footer.legal": "© 2026 Laguna Premium Boxing Promotions. Aviso de Privacidad — Ley 81 de Protección de Datos Personales de la República de Panamá: tratamos tus datos únicamente para los fines aquí descritos y nunca los compartimos sin tu consentimiento.",
    "footer.credit": "DEMO · IMÁGENES DE ARCHIVO (PEXELS); FOTO DE CHEMITO MORENO VÍA WBA"
  },
  en: {
    "nav.home": "Home",
    "nav.velada": "Next Fight Night",
    "nav.circuito": "Circuit",
    "nav.campeones": "Champions",
    "nav.archivo": "Archive",
    "nav.medios": "Media",
    "nav.contacto": "Contact",

    "explore.kicker": "EXPLORE",
    "explore.titleA": "INSIDE",
    "explore.titleB": "THE PROJECT",
    "explore.more": "SEE MORE",
    "explore.circuitoK": "NATIONAL INITIATIVE",
    "explore.circuitoT": "National Boxing Circuit",
    "explore.circuitoD": "The talent pipeline developing Panama's next world champion, season after season.",
    "explore.campK": "CHAMPIONS",
    "explore.campT": "The Chemito Legacy",
    "explore.campD": "Anselmo \"Chemito\" Moreno — former WBA world champion and founder of Laguna Premium.",
    "explore.archK": "ARCHIVE",
    "explore.archT": "Past Fight Cards",
    "explore.archD": "The history of fight nights presented by Laguna Premium.",

    "circuitoPage.kicker": "NATIONAL INITIATIVE",
    "circuitoPage.sub": "Laguna Premium's flagship program: a structured season that spots, develops, and projects Panama's next generation of champions.",
    "campPage.kicker": "CHAMPIONS",
    "campPage.sub": "The founder behind Laguna Premium and the technical standard that defines the project.",

    "archivo.kicker": "ARCHIVE",
    "archivo.titleA": "PAST",
    "archivo.titleB": "FIGHT CARDS",
    "archivo.sub": "A record of the fight nights presented by Laguna Premium. Demo events with illustrative data.",
    "archivo.headK": "HISTORY",
    "archivo.headTitleA": "PAST",
    "archivo.headTitleB": "NIGHTS",
    "archivo.headMeta": "DEMO EVENTS<br/>ILLUSTRATIVE DATA",
    "arch.main": "MAIN EVENT",
    "arch.note": "Demo · illustrative editions, fighters and results. Not representative of real events.",

    "hero.eyebrow": "PANAMA · PREMIUM BOXING",
    "hero.tagline": "The Future of Panamanian Boxing",
    "hero.cta": "SEE THE NEXT FIGHT CARD",

    "strip.city": "PANAMA CITY",
    "strip.pro": "PRO BOXING",
    "strip.fights": "UPCOMING BOUTS",

    "velada.kicker": "NEXT FIGHT NIGHT",
    "velada.titleA": "PANAMA",
    "velada.titleB": "FIGHT NIGHT",
    "velada.meta": "FRI · DEC 18 2026<br/>PANAMA CITY",
    "velada.ppv": "· LIVE",
    "flyer.kicker": "PRESENTED BY LAGUNA PREMIUM · PANAMA",
    "flyer.mainLabel": "MAIN EVENT",
    "flyer.date": "FRI · DEC 18 2026",
    "flyer.time": "8:00 PM · DOORS OPEN",
    "flyer.venueLabel": "VENUE",
    "flyer.broadcastLabel": "LIVE",
    "velada.eventLabel": "YEAR-END FIGHT NIGHT",
    "velada.eventBouts": "BOUTS",
    "velada.eventVenue": "ROBERTO DURÁN ARENA · PANAMA CITY",
    "velada.nextBadge": "NEXT EVENT",
    "velada.liveLabel": "LIVE",
    "velada.broadcastLead": "BROADCAST BY",
    "velada.ppvTag": "PAY-PER-VIEW",
    "velada.demoNote": "Demo · illustrative date & broadcast.",
    "cd.days": "DAYS",
    "cd.hours": "HOURS",
    "cd.mins": "MIN",
    "cd.secs": "SEC",

    "bout.cornerRed": "RED CORNER",
    "bout.cornerBlue": "BLUE CORNER",
    "bout.openingLabel": "OPENING BOUT",
    "bout.coLabel": "CO-MAIN EVENT",
    "bout.mainLabel": "MAIN EVENT",
    "bout.weightFly": "FLYWEIGHT",
    "bout.weightFeather": "FEATHERWEIGHT",
    "bout.weightLight": "LIGHTWEIGHT",

    "circuit.kicker": "NATIONAL INITIATIVE",
    "circuit.titleA": "NATIONAL",
    "circuit.titleB": "BOXING CIRCUIT",
    "circuit.meta": "ANNUAL PROGRAM<br/>2026 SEASON",
    "circuit.intro1": "The National Boxing Circuit is Laguna Premium's flagship initiative — a structured season of fight nights that connects gyms, prospects, and provinces under a single competitive umbrella.",
    "circuit.intro2": "Premium cards, certified officials, and a tiered system that brings the national champion to the closing ring in Panama City.",
    "circuit.statEvents": "EVENTS<br/>PER YEAR",
    "circuit.statCities": "HOST<br/>CITIES",
    "circuit.statClasses": "WEIGHT<br/>CLASSES",
    "circuit.phasesHead": "SEASON PHASES",
    "circuit.phase1Title": "Regional Qualifiers",
    "circuit.phase1Desc": "Local cards in key provinces to identify prospects across weight categories.",
    "circuit.phase1Meta": "Q1 · Q2 · 6 VENUES",
    "circuit.phase2Title": "National Semifinals",
    "circuit.phase2Desc": "Regional winners clash, amplified broadcasts, and Premium press coverage.",
    "circuit.phase2Meta": "Q3 · 2 VENUES · TV",
    "circuit.phase3Title": "Circuit Grand Final",
    "circuit.phase3Desc": "A standalone crowning event: the National Circuit Champion is decided by weight class — a separate night from the main fight card.",
    "circuit.phase3Meta": "STANDALONE EVENT · PANAMA CITY",
    "circuit.visionLabel": "THE VISION",
    "circuit.visionTitle": "<span translate=\"no\">Laguna Premium</span> is <span translate=\"no\">Chemito</span>'s <em>development factory</em> for Panama's next generation of world champions.",
    "circuit.visionBody1": "The National Circuit turns scattered gyms into a single system: it spots young talent, develops it on real fight cards, and projects it on an international scale. A talent pipeline, not a one-off event.",
    "circuit.visionBody2": "And the <span translate=\"no\">Chemito</span> name unlocks media, brand, and broadcast deals no other promoter in the country can land. The opportunity already exists — it just needs the vision to execute it.",

    "reel.lineA": "EVERY RING.",
    "reel.lineB": "EVERY ROUND.",
    "reel.tag": "PRESENTED BY LAGUNA PREMIUM",

    "champ.kicker": "CHAMPIONS",
    "champ.titleA": "THE",
    "champ.titleB": "CHEMITO LEGACY",
    "champ.role": "FORMER WBA WORLD CHAMPION · FOUNDER",
    "champ.bio1": "Anselmo \"Chemito\" Moreno is one of the most technical and respected boxers in Panama's history. He defended the WBA bantamweight world title more than ten times and left an unforgettable mark on the sport.",
    "champ.bio2": "Today, through Laguna Premium Boxing Promotions, he is opening the door for the next generation of Panamanian champions — with premium fight cards, professional development, and an international vision for the sport.",
    "champ.statDefenses": "TITLE DEFENSES",
    "champ.statWins": "PRO WINS",
    "champ.statCrowned": "CROWNED WORLD CHAMPION",
    "champ.tag": "DEMO · STOCK IMAGE",
    "champ.source": "Source: World Boxing Association (WBA) — Boxer of the Month",

    "media.kicker": "MEDIA",
    "media.titleA": "CONTENT",
    "media.titleB": "PLATFORMS",
    "media.meta": "TITLE SPONSORSHIPS AVAILABLE<br/>COMMERCIAL OPPORTUNITY",
    "media.typeRadio": "RADIO",
    "media.radioCount": "WEEKLY",
    "media.radioTitle": "Champion's Corner",
    "media.radioDesc": "Weekly boxing show with Chemito Moreno: card analysis, fighter interviews, and ringside news from Panama and around the world.",
    "media.titleSponsor": "TITLE SPONSOR",
    "media.typeInterview": "INTERVIEWS",
    "media.interviewCount": "ON-DEMAND",
    "media.interviewTitle": "Face to Face",
    "media.interviewDesc": "Long-form conversations with boxing legends, Panamanian prospects, and global sports figures. Distributed in video and audio.",
    "media.presentedBy": "PRESENTED BY",
    "media.typeArticles": "ARTICLES",
    "media.articlesCount": "WEEKLY",
    "media.articlesTitle": "Premium Press",
    "media.articlesDesc": "Editorials, fight-card recaps, and technical analysis published on lagunaboxing.com and partner outlets across Panama.",
    "media.sponsoredBy": "SPONSORED BY",
    "media.slotAvail": "[ SLOT AVAILABLE ]",
    "media.slotAvail2": "[ SLOT AVAILABLE ]",
    "media.slotAvail3": "[ SLOT AVAILABLE ]",

    "sponsors.kicker": "SPONSORS",
    "sponsors.titleA": "OUR",
    "sponsors.titleB": "PARTNERS",
    "sponsors.meta": "ALLIED BRANDS<br/>DEMO EXAMPLES",
    "sponsors.note": "Demo logos. Brands shown for illustration only — no affiliation or active agreement.",
    "sponsors.betHead": "BETTING PLATFORMS",
    "sponsors.betNote": "18+ · Please gamble responsibly. Demo logos — no affiliation or active agreement. Betting regulated by Panama's Junta de Control de Juegos.",

    "contact.kicker": "CONTACT",
    "contact.titleA": "STEP",
    "contact.titleB": "IN THE RING",
    "contact.headline": "Ready to make history?",
    "contact.copy": "Sponsors, press, managers and athletes: message us directly on WhatsApp and a team member will get back to you.",
    "contact.whatsapp": "WHATSAPP",
    "contact.email": "EMAIL",

    "footer.langhint": "ES | EN — Switch language in the top right",
    "footer.legal": "© 2026 Laguna Premium Boxing Promotions. Privacy Notice — Panama Personal Data Protection Law 81: we only process your personal data for the purposes described here and never share it without your consent.",
    "footer.credit": "DEMO · STOCK IMAGERY (PEXELS); CHEMITO MORENO PHOTO VIA WBA"
  }
};

const langButtons = document.querySelectorAll('.nav__lang button');
function applyLang(lang) {
  if (!dict[lang]) lang = 'es';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[lang][key]) el.innerHTML = dict[lang][key];
  });
  langButtons.forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
  });
  try { localStorage.setItem('laguna.lang', lang); } catch(e) {}
}
langButtons.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

(function initLang() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('lang');
  const fromPath = /^\/en\b/.test(window.location.pathname) ? 'en'
                 : /^\/es\b/.test(window.location.pathname) ? 'es' : null;
  let stored = null;
  try { stored = localStorage.getItem('laguna.lang'); } catch(e) {}
  const lang = fromQuery || fromPath || stored || 'es';
  applyLang(lang);
})();

/* ================= NAV ================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ================= MOBILE MENU ================= */
(function(){
  const toggle = document.getElementById('navToggle');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ============ COUNTDOWN (independent of GSAP) ============ */
(function(){
  const el = document.getElementById('countdown');
  if (!el) return;
  const deadline = new Date(el.getAttribute('data-deadline')).getTime();
  const f = {
    days:  el.querySelector('[data-cd="days"]'),
    hours: el.querySelector('[data-cd="hours"]'),
    mins:  el.querySelector('[data-cd="mins"]'),
    secs:  el.querySelector('[data-cd="secs"]')
  };
  const pad = n => (n < 10 ? '0' : '') + n;
  function tick(){
    let diff = deadline - Date.now();
    if (isNaN(deadline)) return true;
    if (diff <= 0){
      el.classList.add('is-live');
      if (f.days)  f.days.textContent  = '0';
      if (f.hours) f.hours.textContent = '00';
      if (f.mins)  f.mins.textContent  = '00';
      if (f.secs)  f.secs.textContent  = '00';
      return true; // done
    }
    let s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400); s -= d * 86400;
    const h = Math.floor(s / 3600);  s -= h * 3600;
    const m = Math.floor(s / 60);    s -= m * 60;
    if (f.days)  f.days.textContent  = String(d);
    if (f.hours) f.hours.textContent = pad(h);
    if (f.mins)  f.mins.textContent  = pad(m);
    if (f.secs)  f.secs.textContent  = pad(s);
    return false;
  }
  if (tick()) return;
  const iv = setInterval(() => { if (tick()) clearInterval(iv); }, 1000);
})();

/* ================= GSAP ================= */
function lagunaNoGsapFallback() {
  document.documentElement.classList.add('no-gsap');
  document.querySelectorAll('.count').forEach(el => {
    if (el.dataset.target) el.textContent = el.dataset.target;
  });
}
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    lagunaNoGsapFallback();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance (home only)
  if (document.querySelector('.hero__logo')) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('.hero__eyebrow', { opacity: 1, y: 0, duration: .8 })
      .to('.hero__logo',    { opacity: 1, y: 0, duration: 1.1 }, '-=.4')
      .fromTo('.hero__sub', { opacity: 0, letterSpacing: '.42em' },
                            { opacity: 1, letterSpacing: '.22em', duration: 1 }, '-=.7')
      .to('.hero__tagline', { opacity: 1, y: 0, duration: .9 }, '-=.5')
      .to('.hero__cta',     { opacity: 1, y: 0, duration: .9 }, '-=.5');
  }

  // Generic reveal
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 86%' }
    });
  });
  gsap.utils.toArray('.reveal-left').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      delay: i * 0.05,
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 86%' }
    });
  });

  // Champion portrait clip-path reveal
  if (document.getElementById('champPortrait')) {
    gsap.to('#champPortrait', {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.4,
      ease: 'power4.out',
      scrollTrigger: { trigger: '#champPortrait', start: 'top 80%' }
    });
  }

  // Reel parallax
  if (document.getElementById('reelBg')) {
    gsap.to('#reelBg', {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: {
        trigger: '.reel',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Stat number counters
  gsap.utils.toArray('.count').forEach(el => {
    const target = +el.dataset.target;
    const isYear = target > 1000;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: isYear ? 1.4 : 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.val).toString(); }
    });
  });
});
