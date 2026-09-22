// src/lib/language.ts
export type Lang = 'en' | 'es'

export function applyLanguage(lang: Lang) {
  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.classList.toggle('hidden', el.getAttribute('data-lang') !== lang)
  })
  localStorage.setItem('lang', lang)
}

export function getSavedLanguage(): Lang {
  return (localStorage.getItem('lang') as Lang) ?? 'en'
}