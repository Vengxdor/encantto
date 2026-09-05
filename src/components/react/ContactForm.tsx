import { useState } from 'react'

const field =
  'w-full border border-bone/18 bg-transparent px-4 py-3.5 text-[15px] font-light text-bone outline-none focus:border-gold'
const label = 'text-[10px] tracking-[0.28em] uppercase text-ash'

export default function ContactForm({ types }: { types: string[] }) {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className='flex flex-col gap-4 py-10'>
        <h2 className='m-0 font-display text-[32px] font-normal text-gold'>
          Thank you.
        </h2>
        <p className='m-0 text-base leading-[1.8] font-light text-mist'>
          Your note is with our Cicero boutique. We&rsquo;ll be in touch within
          one business day.
        </p>
        <button
          type='button'
          onClick={() => setSent(false)}
          className='mt-2 self-start border-b border-gold/40 pb-1.5 text-[11px] tracking-[0.22em] uppercase text-gold'
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      className='flex flex-col gap-6'
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div className='flex flex-col gap-2.5'>
          <label className={label} htmlFor='name'>
            Name
          </label>
          <input id='name' name='name' required className={field} />
        </div>
        <div className='flex flex-col gap-2.5'>
          <label className={label} htmlFor='phone'>
            Phone
          </label>
          <input id='phone' name='phone' type='tel' className={field} />
        </div>
      </div>

      <div className='flex flex-col gap-2.5'>
        <label className={label} htmlFor='email'>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          className={field}
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <label className={label} htmlFor='interest'>
          This is about
        </label>
        <select
          id='interest'
          name='interest'
          className={`${field} appearance-none`}
          defaultValue={types[0]}
        >
          {types.map((t) => (
            <option key={t} value={t} className='bg-night text-bone'>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-2.5'>
        <label className={label} htmlFor='message'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          required
          placeholder='Sizes, stones, dates \u2014 anything helps.'
          className={`${field} resize-y`}
        />
      </div>

      <button
        type='submit'
        className='mt-2 self-start bg-gold px-8 py-4 text-[11px] tracking-[0.24em] uppercase text-night hover:bg-gold-light'
      >
        Send Enquiry
      </button>
      <p className='m-0 text-xs leading-relaxed font-light text-faint'>
        This demo form does not yet post anywhere \u2014 connect it to an Astro
        form action or your provider of choice.
      </p>
    </form>
  )
}
