'use client'

import { useId, useState } from 'react'

type Variant = 'light' | 'dark'
type Kind = '' | 'pending' | 'success' | 'error'

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

function tone(kind: Kind, dark: boolean) {
  if (kind === 'success') return dark ? '#7be0a8' : '#17803f'
  if (kind === 'pending') return dark ? '#9aa0c4' : '#6b6f8c'
  return dark ? '#ffb0a4' : '#c4341f'
}

export function EmailSignup({ variant = 'light' }: { variant?: Variant }) {
  const dark = variant === 'dark'
  const inputId = useId()
  const statusId = useId()
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [kind, setKind] = useState<Kind>('')
  const [sending, setSending] = useState(false)

  function submit() {
    if (sending) {
      setMsg('Your request is already being sent.')
      setKind('error')
      return
    }
    if (!isValidEmail(email)) {
      setMsg('Enter a valid email address.')
      setKind('error')
      return
    }
    setSending(true)
    setMsg('Getting your prompts...')
    setKind('pending')
    setTimeout(() => {
      setSending(false)
      setEmail('')
      setMsg('Check your inbox — both prompts are on the way.')
      setKind('success')
    }, 1200)
  }

  const inputClasses = dark
    ? 'h-[54px] w-full min-w-0 flex-auto rounded-[27px] border-2 border-cream bg-card px-5 text-[16px] text-navy outline-none focus-visible:border-mint focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(123,224,168,0.45)]'
    : 'h-[52px] w-full min-w-0 flex-auto rounded-[26px] border-2 border-navy bg-card px-[18px] text-[15.5px] text-navy outline-none focus-visible:border-green'

  const buttonClasses = dark
    ? 'h-[54px] w-full flex-none whitespace-nowrap rounded-[27px] border-2 border-cream bg-red px-6 font-display text-[18px] tracking-[0.02em] text-cream outline-none transition-colors hover:bg-cream hover:text-navy focus-visible:shadow-[0_0_0_4px_rgba(123,224,168,0.55)] sm:w-auto'
    : 'h-[52px] w-full flex-none whitespace-nowrap rounded-[26px] border-2 border-navy bg-red px-[22px] font-display text-[18px] tracking-[0.02em] text-cream transition-colors hover:bg-navy sm:w-auto'

  return (
    <>
      <div
        data-stack-mobile="true"
        className="flex w-full flex-nowrap gap-[9px]"
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          value={email}
          aria-describedby={statusId}
          onChange={(e) => {
            setEmail(e.target.value)
            setMsg('')
            setKind('')
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
              submit()
            }
          }}
          className={`box-border font-sans ${inputClasses}`}
        />
        <button type="button" onClick={submit} className={`box-border cursor-pointer ${buttonClasses}`}>
          GET THE PROMPTS
        </button>
      </div>
      <div className="flex flex-col items-center gap-[5px] text-center">
        <span
          className={dark ? 'text-[15px] text-[#e4e7f5]' : 'text-[14px] font-semibold text-ink-soft'}
        >
          Unsubscribe anytime.
        </span>
        <span
          id={statusId}
          role="status"
          aria-live="polite"
          className={dark ? 'text-[15px] font-bold' : 'text-[14px] font-bold'}
          style={{ color: msg ? tone(kind, dark) : 'transparent' }}
        >
          {msg || '\u00A0'}
        </span>
      </div>
    </>
  )
}
