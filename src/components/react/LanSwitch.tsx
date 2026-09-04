import { useState } from 'react'

export default function LanSwitch() {
  const [currentLanguage, setCurrentLanguage] = useState(false)

  return (
    <div className='relative flex items-center gap-0.5 border-l border-bone/15 pl-1.5'>
        <span
          className={`h-px w-5 bg-gold absolute bottom-1  mx-1.75  ${currentLanguage && 'translate-x-10.5'} target:transition-transform duration-200 ease-in-out`}
        />
      <button
        onClick={() => setCurrentLanguage(false)}
        className={`px-2 py-1.5 text-[11px] tracking-[0.18em] text-[#7e7871] cursor-pointer hover:text-bone ${!currentLanguage && 'text-bone'}`}
      >
        EN
      </button>
      <span className={'text-[10px] text-[#4e4a44]'}>/</span>
      <button
        onClick={() => setCurrentLanguage(true)}
        className={`px-2 py-1.5 text-[11px] tracking-[0.18em] text-[#7e7871] cursor-pointer hover:text-bone ${currentLanguage && 'text-bone'}`}
      >
        ES
      </button>
    </div>
    /* <div className='flex items-center gap-0.5 border-l border-bone/15 pl-1.5'>
      <button
        onClick={() => setCurrentLanguage(false)}
        className={`${!currentLanguage ? 'border-b border-gold text-bone' : 'border-b border-transparent'} px-2 py-1.5 text-[11px] tracking-[0.18em] text-[#7e7871] cursor-pointer hover:text-bone`}
      >
        EN
      </button>
      <span className={'text-[10px] text-[#4e4a44]'}>/</span>
      <button
        onClick={() => setCurrentLanguage(true)}
        className={`${currentLanguage ? 'border-b border-gold text-bone' : 'border-b border-transparent'} px-2 py-1.5 text-[11px] tracking-[0.18em] text-[#7e7871] cursor-pointer hover:text-bone`}
      >
        ES
      </button>
    </div> */
  )
}
