import { useEffect, useState } from 'react'
import type { NavItem } from '../../data/site'

/**
 * The only piece of the page that needs client-side state:
 * the small-screen navigation drawer.
 */
export default function MobileNav({
  items,
  phone,
}: {
  items: NavItem[]
  phone: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className='lg:hidden'>
      <button
        type='button'
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className='flex h-10 w-10 flex-col items-center justify-center gap-1.5'
      >
        <span
          className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
        />
        <span
          className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? 'translate-y-[-3.5px] -rotate-45' : ''}`}
        />
      </button>

      <div
        className={`fixed inset-x-0 top-23.25 h-screen bottom-0 z-50 border-t border-gold/15 bg-night px-8 py-10 backdrop-blur-md transition-all duration-200 invisible opacity-0 ${open && 'visible opacity-100'}`}
      >
        <nav className='flex flex-col gap-2'>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className='border-b border-bone/10 py-5 font-display text-3xl font-light text-bone hover:text-gold'
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
          className='mt-10 inline-block border border-gold/40 px-7 py-4 text-xs tracking-[0.2em] text-gold'
        >
          {phone}
        </a>
      </div>
    </div>
  )
}
