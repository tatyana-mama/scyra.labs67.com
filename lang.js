// ŠČYRA.AI Language System — 11 languages
// BChB flag for BY, BSB flag for RU

const LANGS = [
  { code: 'be', name: 'Беларуская', flag: '⬜🟥⬜' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'ru', name: 'Русский', flag: '⬜🟦⬜' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

// SVG flags for BY (BChB) and RU (BSB) — inline
const FLAG_SVG = {
  be: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="4.67" fill="#fff"/><rect y="4.67" width="20" height="4.67" fill="#CE1720"/><rect y="9.33" width="20" height="4.67" fill="#fff"/></svg>`,
  ru: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="4.67" fill="#fff"/><rect y="4.67" width="20" height="4.67" fill="#0039A6"/><rect y="9.33" width="20" height="4.67" fill="#fff"/></svg>`,
  en: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="14" fill="#012169"/><path d="M0,0L20,14M20,0L0,14" stroke="#fff" stroke-width="2.5"/><path d="M0,0L20,14M20,0L0,14" stroke="#C8102E" stroke-width="1.5"/><path d="M10,0V14M0,7H20" stroke="#fff" stroke-width="4"/><path d="M10,0V14M0,7H20" stroke="#C8102E" stroke-width="2.5"/></svg>`,
  uk: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="7" fill="#005BBB"/><rect y="7" width="20" height="7" fill="#FFD500"/></svg>`,
  de: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="4.67" fill="#000"/><rect y="4.67" width="20" height="4.67" fill="#DD0000"/><rect y="9.33" width="20" height="4.67" fill="#FFCC00"/></svg>`,
  fr: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="6.67" height="14" fill="#002395"/><rect x="6.67" width="6.67" height="14" fill="#fff"/><rect x="13.33" width="6.67" height="14" fill="#ED2939"/></svg>`,
  es: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="3.5" fill="#AA151B"/><rect y="3.5" width="20" height="7" fill="#F1BF00"/><rect y="10.5" width="20" height="3.5" fill="#AA151B"/></svg>`,
  it: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="6.67" height="14" fill="#009246"/><rect x="6.67" width="6.67" height="14" fill="#fff"/><rect x="13.33" width="6.67" height="14" fill="#CE2B37"/></svg>`,
  pt: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="8" height="14" fill="#006600"/><rect x="8" width="12" height="14" fill="#FF0000"/><circle cx="8" cy="7" r="3" fill="#FFCC00"/></svg>`,
  ja: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="14" fill="#fff"/><circle cx="10" cy="7" r="4" fill="#BC002D"/></svg>`,
  ko: `<svg viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="14" fill="#fff"/><circle cx="10" cy="7" r="3.5" fill="#CD2E3A"/><path d="M10,3.5a3.5,3.5 0 0,1 0,7" fill="#0047A0"/></svg>`,
};

const T = {
  // NAV
  nav_cta: {
    be: 'Падтрымаць на Indiegogo', en: 'Back on Indiegogo', uk: 'Підтримати на Indiegogo',
    ru: 'Поддержать на Indiegogo', de: 'Auf Indiegogo unterstützen', fr: 'Soutenir sur Indiegogo',
    es: 'Apoyar en Indiegogo', it: 'Supporta su Indiegogo', pt: 'Apoiar no Indiegogo',
    ja: 'Indiegogoで支援する', ko: 'Indiegogo에서 후원하기',
  },
  // HERO
  hero_title: {
    be: 'AI-<span class="cyan">мозг</span><br>вашай стаматалогіі',
    en: 'The <span class="cyan">AI Brain</span><br>of Your Dental Clinic',
    uk: 'AI-<span class="cyan">мозок</span><br>вашої стоматології',
    ru: '<span class="cyan">AI-мозг</span><br>вашей стоматологии',
    de: 'Das <span class="cyan">AI-Gehirn</span><br>Ihrer Zahnklinik',
    fr: 'Le <span class="cyan">cerveau IA</span><br>de votre clinique dentaire',
    es: 'El <span class="cyan">cerebro IA</span><br>de tu clínica dental',
    it: 'Il <span class="cyan">cervello AI</span><br>della tua clinica dentale',
    pt: 'O <span class="cyan">cérebro IA</span><br>da sua clínica dentária',
    ja: '歯科クリニックの<br><span class="cyan">AIブレイン</span>',
    ko: '치과 클리닉의<br><span class="cyan">AI 브레인</span>',
  },
  hero_sub: {
    be: 'ŠČYRA.AI спалучае <strong>камеры, датчыкі і edge AI</strong>, каб дапамагаць дактарам, аналізаваць пацыентаў і развіваць ваш бізнес — усё ў адным прыладзе.',
    en: 'ŠČYRA.AI combines <strong>cameras, sensors, and edge AI</strong> to assist doctors, analyze patients, and grow your practice — all in one device.',
    uk: 'ŠČYRA.AI поєднує <strong>камери, датчики та edge AI</strong>, щоб допомагати лікарям, аналізувати пацієнтів та розвивати вашу практику — все в одному пристрої.',
    ru: 'ŠČYRA.AI объединяет <strong>камеры, датчики и edge AI</strong>, чтобы помогать врачам, анализировать пациентов и развивать вашу практику — всё в одном устройстве.',
    de: 'ŠČYRA.AI kombiniert <strong>Kameras, Sensoren und Edge-AI</strong>, um Ärzte zu unterstützen, Patienten zu analysieren und Ihre Praxis zu vergrößern — alles in einem Gerät.',
    fr: 'ŠČYRA.AI combine <strong>caméras, capteurs et IA edge</strong> pour assister les médecins, analyser les patients et développer votre cabinet — tout en un seul appareil.',
    es: 'ŠČYRA.AI combina <strong>cámaras, sensores e IA edge</strong> para asistir a los médicos, analizar pacientes y hacer crecer tu clínica — todo en un dispositivo.',
    it: 'ŠČYRA.AI combina <strong>telecamere, sensori e AI edge</strong> per assistere i medici, analizzare i pazienti e far crescere il tuo studio — tutto in un dispositivo.',
    pt: 'ŠČYRA.AI combina <strong>câmeras, sensores e IA edge</strong> para auxiliar médicos, analisar pacientes e expandir sua clínica — tudo em um dispositivo.',
    ja: 'ŠČYRA.AIは<strong>カメラ、センサー、エッジAI</strong>を組み合わせ、医師を支援し、患者を分析し、クリニックを成長させます。',
    ko: 'ŠČYRA.AI는 <strong>카메라, 센서, 엣지 AI</strong>를 결합하여 의사를 지원하고 환자를 분석하며 클리닉을 성장시킵니다.',
  },
  hero_btn: {
    be: 'Падтрымаць праект', en: 'Back This Project', uk: 'Підтримати проєкт',
    ru: 'Поддержать проект', de: 'Projekt unterstützen', fr: 'Soutenir ce projet',
    es: 'Apoyar este proyecto', it: 'Supporta il progetto', pt: 'Apoiar este projeto',
    ja: 'プロジェクトを支援', ko: '프로젝트 후원하기',
  },
  hero_btn2: {
    be: 'Як гэта працуе', en: 'See How It Works', uk: 'Як це працює',
    ru: 'Как это работает', de: 'So funktioniert es', fr: 'Comment ça marche',
    es: 'Cómo funciona', it: 'Come funziona', pt: 'Como funciona',
    ja: '仕組みを見る', ko: '작동 방식 보기',
  },
  // SECTIONS
  what_label: {
    be: 'Што такое ŠČYRA.AI', en: 'What is ŠČYRA.AI', uk: 'Що таке ŠČYRA.AI',
    ru: 'Что такое ŠČYRA.AI', de: 'Was ist ŠČYRA.AI', fr: "Qu'est-ce que ŠČYRA.AI",
    es: 'Qué es ŠČYRA.AI', it: 'Cos\'è ŠČYRA.AI', pt: 'O que é ŠČYRA.AI',
    ja: 'ŠČYRA.AIとは', ko: 'ŠČYRA.AI란',
  },
  what_title: {
    be: 'Адна прылада.<br>Уся клініка.', en: 'One device.<br>Your whole clinic.',
    uk: 'Один пристрій.<br>Уся клініка.', ru: 'Одно устройство.<br>Вся клиника.',
    de: 'Ein Gerät.<br>Ihre ganze Klinik.', fr: 'Un appareil.<br>Toute votre clinique.',
    es: 'Un dispositivo.<br>Toda tu clínica.', it: 'Un dispositivo.<br>Tutta la clinica.',
    pt: 'Um dispositivo.<br>Toda a sua clínica.', ja: '1台のデバイス。<br>クリニック全体。',
    ko: '하나의 장치.<br>전체 클리닉.',
  },
  cap_label: {
    be: 'Магчымасці', en: 'Capabilities', uk: 'Можливості',
    ru: 'Возможности', de: 'Fähigkeiten', fr: 'Capacités',
    es: 'Capacidades', it: 'Capacità', pt: 'Capacidades',
    ja: '機能', ko: '기능',
  },
  how_label: {
    be: 'Як гэта працуе', en: 'How it works', uk: 'Як це працює',
    ru: 'Как это работает', de: 'So funktioniert es', fr: 'Comment ça marche',
    es: 'Cómo funciona', it: 'Come funziona', pt: 'Como funciona',
    ja: '仕組み', ko: '작동 방식',
  },
  tech_label: {
    be: 'Тэхналогія', en: 'Technology', uk: 'Технологія',
    ru: 'Технология', de: 'Technologie', fr: 'Technologie',
    es: 'Tecnología', it: 'Tecnologia', pt: 'Tecnologia',
    ja: 'テクノロジー', ko: '기술',
  },
  indi_label: {
    be: 'Кампанія Indiegogo', en: 'Indiegogo Campaign', uk: 'Кампанія Indiegogo',
    ru: 'Кампания Indiegogo', de: 'Indiegogo-Kampagne', fr: 'Campagne Indiegogo',
    es: 'Campaña Indiegogo', it: 'Campagna Indiegogo', pt: 'Campanha Indiegogo',
    ja: 'Indiegogoキャンペーン', ko: 'Indiegogo 캠페인',
  },
  franchise_label: {
    be: 'Франшыза', en: 'Franchise Program', uk: 'Франшиза',
    ru: 'Франшиза', de: 'Franchise-Programm', fr: 'Programme de franchise',
    es: 'Programa de franquicia', it: 'Programma di franchising', pt: 'Programa de franquia',
    ja: 'フランチャイズ', ko: '프랜차이즈',
  },
  team_label: {
    be: 'Каманда', en: 'Team', uk: 'Команда',
    ru: 'Команда', de: 'Team', fr: 'Équipe',
    es: 'Equipo', it: 'Team', pt: 'Equipa',
    ja: 'チーム', ko: '팀',
  },
  faq_label: {
    be: 'FAQ', en: 'FAQ', uk: 'FAQ',
    ru: 'FAQ', de: 'FAQ', fr: 'FAQ',
    es: 'FAQ', it: 'FAQ', pt: 'FAQ',
    ja: 'よくある質問', ko: '자주 묻는 질문',
  },
  // PERKS
  perk1_name: {
    be: 'Early Bird', en: 'Early Bird', uk: 'Early Bird',
    ru: 'Early Bird', de: 'Early Bird', fr: 'Early Bird',
    es: 'Early Bird', it: 'Early Bird', pt: 'Early Bird',
    ja: 'Early Bird', ko: 'Early Bird',
  },
  perk1_desc: {
    be: 'Прылада + 1 год падпіскі', en: 'Device + 1 year subscription',
    uk: 'Пристрій + 1 рік підписки', ru: 'Устройство + 1 год подписки',
    de: 'Gerät + 1 Jahr Abo', fr: 'Appareil + 1 an d\'abonnement',
    es: 'Dispositivo + 1 año de suscripción', it: 'Dispositivo + 1 anno di abbonamento',
    pt: 'Dispositivo + 1 ano de assinatura', ja: 'デバイス + 1年サブスクリプション',
    ko: '장치 + 1년 구독',
  },
  perk2_name: {
    be: 'Clinic Pack', en: 'Clinic Pack', uk: 'Clinic Pack',
    ru: 'Clinic Pack', de: 'Clinic Pack', fr: 'Clinic Pack',
    es: 'Clinic Pack', it: 'Clinic Pack', pt: 'Clinic Pack',
    ja: 'Clinic Pack', ko: 'Clinic Pack',
  },
  perk2_desc: {
    be: 'Прылада + 2 гады + прыярытэтная падтрымка', en: 'Device + 2 years + priority support',
    uk: 'Пристрій + 2 роки + пріоритетна підтримка', ru: 'Устройство + 2 года + приоритетная поддержка',
    de: 'Gerät + 2 Jahre + Prioritäts-Support', fr: 'Appareil + 2 ans + support prioritaire',
    es: 'Dispositivo + 2 años + soporte prioritario', it: 'Dispositivo + 2 anni + supporto prioritario',
    pt: 'Dispositivo + 2 anos + suporte prioritário', ja: 'デバイス + 2年 + 優先サポート',
    ko: '장치 + 2년 + 우선 지원',
  },
  perk3_name: {
    be: 'Franchise Ready', en: 'Franchise Ready', uk: 'Franchise Ready',
    ru: 'Franchise Ready', de: 'Franchise Ready', fr: 'Franchise Ready',
    es: 'Franchise Ready', it: 'Franchise Ready', pt: 'Franchise Ready',
    ja: 'Franchise Ready', ko: 'Franchise Ready',
  },
  perk3_desc: {
    be: 'Поўная ўстаноўка + правы франшызы', en: 'Full setup + franchise rights',
    uk: 'Повне налаштування + права франшизи', ru: 'Полная установка + права франшизы',
    de: 'Komplettes Setup + Franchise-Rechte', fr: 'Installation complète + droits de franchise',
    es: 'Instalación completa + derechos de franquicia', it: 'Setup completo + diritti di franchising',
    pt: 'Instalação completa + direitos de franquia', ja: '完全セットアップ + フランチャイズ権',
    ko: '전체 설정 + 프랜차이즈 권한',
  },
  // FOOTER
  footer_copy: {
    be: '© 2026 LABS67. Усе правы абаронены.', en: '© 2026 LABS67. All rights reserved.',
    uk: '© 2026 LABS67. Усі права захищені.', ru: '© 2026 LABS67. Все права защищены.',
    de: '© 2026 LABS67. Alle Rechte vorbehalten.', fr: '© 2026 LABS67. Tous droits réservés.',
    es: '© 2026 LABS67. Todos los derechos reservados.', it: '© 2026 LABS67. Tutti i diritti riservati.',
    pt: '© 2026 LABS67. Todos os direitos reservados.', ja: '© 2026 LABS67. 全著作権所有。',
    ko: '© 2026 LABS67. 모든 권리 보유.',
  },
};

// Init
let currentLang = localStorage.getItem('scyra_lang') || 'be';

function renderLangDropdown() {
  const dd = document.getElementById('langDD');
  dd.innerHTML = LANGS.map(l =>
    `<button class="lang-opt ${l.code === currentLang ? 'active' : ''}" onclick="setLang('${l.code}')">
      <span class="lf">${FLAG_SVG[l.code] || l.flag}</span> ${l.name}
    </button>`
  ).join('');
}

function updateFlag() {
  const lang = LANGS.find(l => l.code === currentLang);
  document.getElementById('langFlag').innerHTML = FLAG_SVG[currentLang] || lang.flag;
  document.getElementById('langName').textContent = currentLang.toUpperCase();
}

function setLang(code) {
  currentLang = code;
  localStorage.setItem('scyra_lang', code);
  document.documentElement.lang = code;
  applyTranslations();
  updateFlag();
  renderLangDropdown();
  document.getElementById('langWrap').classList.remove('open');
}

function applyTranslations() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (T[key] && T[key][currentLang]) {
      el.innerHTML = T[key][currentLang];
    }
  });
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  const wrap = document.getElementById('langWrap');
  if (wrap && !wrap.contains(e.target)) wrap.classList.remove('open');
});

// Boot
document.addEventListener('DOMContentLoaded', () => {
  renderLangDropdown();
  updateFlag();
  applyTranslations();
});
