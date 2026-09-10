'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { subscribe, type SubscribeState } from '@/app/actions'

const initialState: SubscribeState = { status: 'idle', message: '' }

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex shrink-0 items-center justify-center gap-2 border-2 border-navy bg-primary px-6 py-3 font-display text-lg uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="size-5 animate-spin" aria-hidden="true" />
          Sending
        </>
      ) : (
        label
      )}
    </button>
  )
}

export function EmailSignup({
  id,
  variant = 'light',
  buttonLabel = 'Get the prompts',
}: {
  id?: string
  variant?: 'light' | 'dark'
  buttonLabel?: string
}) {
  const [state, formAction] = useActionState(subscribe, initialState)
  const triggered = useRef(false)

  // Kick off the real file download once the server confirms success.
  useEffect(() => {
    if (state.status === 'success' && state.downloadUrl && !triggered.current) {
      triggered.current = true
      const a = document.createElement('a')
      a.href = state.downloadUrl
      a.download = 'more-business-ai-prompts.txt'
      document.body.appendChild(a)
      a.click()
      a.remove()
    }
  }, [state])

  if (state.status === 'success') {
    return (
      <div
        className={`flex items-center gap-3 border-2 border-navy p-4 ${
          variant === 'dark' ? 'bg-cream text-navy' : 'bg-secondary text-secondary-foreground'
        }`}
      >
        <CheckCircle2 className="size-6 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="font-display text-lg uppercase leading-none">You&apos;re in!</p>
          <p className="text-sm">
            {state.message}{' '}
            {state.downloadUrl && (
              <a href={state.downloadUrl} download className="underline underline-offset-2">
                Download again
              </a>
            )}
          </p>
        </div>
      </div>
    )
  }

  const labelColor = variant === 'dark' ? 'text-cream' : 'text-foreground'

  return (
    <form id={id} action={formAction} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`email-${id ?? 'x'}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${id ?? 'x'}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          className="w-full border-2 border-navy bg-cream px-4 py-3 text-base text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {/* Honeypot — hidden from users, catches bots */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <SubmitButton label={buttonLabel} />
      </div>
      {state.status === 'error' && (
        <p className="mt-2 text-sm font-semibold text-primary" role="alert">
          {state.message}
        </p>
      )}
      <p className={`mt-2 text-xs ${labelColor} opacity-70`}>
        Free forever. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
