export const languages = {
  en: 'English',
  pl: 'Polski',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'hero.available': 'Available for hire',
    'hero.role': 'Full Stack Developer',
    'hero.bio': "I build practical software, tools and technical experiments. I focus on creating useful, maintainable, and reliable solutions across software development, infrastructure, and cybersecurity.",
    'hero.contact': 'Get in touch',
    'hero.kofi': 'Buy me a coffee',
    'hero.viewWork': 'View my work',
    'section.focus': 'Focus areas',
    'section.connect': 'Connect',
    'section.work': 'Featured Projects',
    'section.projects': 'All Projects',
    'footer.text': '© 2026 Miroslaw Maik.',
    'color.blue': 'Blue',
    'color.purple': 'Purple',
    'color.green': 'Green',
    'color.rose': 'Rose',
    'skills.labels': ['System Administration', 'Cybersecurity', 'Infrastructure', 'Docker', 'Golang', 'TypeScript', 'Git', 'AI'],
  },
  pl: {
    'nav.home': 'Strona główna',
    'nav.projects': 'Projekty',
    'hero.available': 'Dostępny do współpracy',
    'hero.role': 'Full Stack Developer',
    'hero.bio': 'Tworzę praktyczne oprogramowanie, narzędzia i eksperymenty techniczne. Skupiam się na budowaniu użytecznych i niezawodnych rozwiązań z zakresu tworzenia oprogramowania, infrastruktury oraz cyberbezpieczeństwa.',
    'hero.contact': 'Kontakt',
    'hero.kofi': 'Kup mi kawę',
    'hero.viewWork': 'Zobacz projekty',
    'section.focus': 'Obszary zainteresowań',
    'section.connect': 'Bądźmy w kontakcie',
    'section.work': 'Wybrane projekty',
    'section.projects': 'Wszystkie projekty',
    'footer.text': '© 2026 Miroslaw Maik.',
    'color.blue': 'Niebieski',
    'color.purple': 'Fioletowy',
    'color.green': 'Zielony',
    'color.rose': 'Różowy',
    'skills.labels': ['Administracja systemów', 'Cyberbezpieczeństwo', 'Infrastruktura', 'Docker', 'Golang', 'TypeScript', 'Git', 'AI'],
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
