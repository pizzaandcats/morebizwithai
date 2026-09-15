'use client'

import { FormEvent, useId, useState } from 'react'

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

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

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

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null

      if (!response.ok) {
        throw new Error(result?.error || 'Something went wrong. Try again.')
      }

      setEmail('')
      setMsg('Success! Now check your email to confirm your subscription.')
      setKind('success')
    } catch (error) {
      setMsg(error instanceof Error ? error.message : 'Something went wrong. Try again.')
      setKind('error')
    } finally {
      setSending(false)
    }
  }

  const inputClasses = dark
    ? 'h-[54px] w-full min-w-0 flex-auto rounded-[27px] border-2 border-cream bg-card px-5 text-[16px] text-navy outline-none focus-visible:border-mint focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(123,224,168,0.45)]'
    : 'h-[52px] w-full min-w-0 flex-auto rounded-[26px] border-2 border-navy bg-card px-[18px] text-[15.5px] text-navy outline-none focus-visible:border-green'

  const buttonClasses = dark
    ? 'h-[54px] w-full flex-none whitespace-nowrap rounded-[27px] border-2 border-cream bg-primary px-6 font-display text-[18px] tracking-[0.02em] text-primary-foreground outline-none transition-colors hover:bg-primary-hover focus-visible:shadow-[0_0_0_4px_rgba(123,224,168,0.55)] disabled:cursor-wait disabled:opacity-75 sm:w-auto'
    : 'h-[52px] w-full flex-none whitespace-nowrap rounded-[26px] border-2 border-navy bg-primary px-[22px] font-display text-[18px] tracking-[0.02em] text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-wait disabled:opacity-75 sm:w-auto'

  return (
    <form onSubmit={submit} noValidate aria-busy={sending} className="w-full">
      <div
        data-stack-mobile="true"
        className="flex w-full flex-nowrap gap-[9px]"
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email_address"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          required
          value={email}
          aria-describedby={statusId}
          aria-invalid={kind === 'error'}
          onChange={(e) => {
            setEmail(e.target.value)
            setMsg('')
            setKind('')
          }}
          className={`box-border font-sans ${inputClasses}`}
        />
        <button
          type="submit"
          disabled={sending}
          className={`box-border cursor-pointer ${buttonClasses}`}
        >
          {sending ? 'GETTING YOUR PROMPTS...' : 'GET THE PROMPTS'}
        </button>
      </div>
      <div className="mt-3 flex flex-col items-center gap-[5px] text-center">
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
    </form>
  )
}
