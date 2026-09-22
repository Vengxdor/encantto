import { useEffect, useState } from 'react'
import { applyLanguage, getSavedLanguage, type Lang } from '../../lib/language'

export default function LanSwitch() {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    setLang(getSavedLanguage())
    const sync = () => setLang(getSavedLanguage())
    document.addEventListener('astro:page-load', sync)
    return () => document.removeEventListener('astro:page-load', sync)
  }, [])

  function selectLanguage(next: Lang) {
    setLang(next)
    applyLanguage(next)
  }

  const isEs = lang === 'es'

  return (
    <div className='relative flex items-center gap-0.5 border-l border-bone/15 pl-1.5'>
      <span
        className={`absolute bottom-1 mx-1.75 h-px w-5 bg-gold transition-transform duration-200 ease-in-out ${
          isEs ? 'translate-x-10.5' : ''
        }`}
      />
      <button
        onClick={() => selectLanguage('en')}
        className={`cursor-pointer px-2 py-1.5 text-[11px] tracking-[0.18em] hover:text-bone ${
          !isEs ? 'text-bone' : 'text-[#7e7871]'
        }`}
      >
        EN
      </button>
      <span className='text-[10px] text-[#4e4a44]'>/</span>
      <button
        onClick={() => selectLanguage('es')}
        className={`cursor-pointer px-2 py-1.5 text-[11px] tracking-[0.18em] hover:text-bone ${
          isEs ? 'text-bone' : 'text-[#7e7871]'
        }`}
      >
        ES
      </button>
    </div>
  )
}