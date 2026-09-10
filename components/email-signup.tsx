'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'
import { subscribe, type SubscribeState } from '@/app/actions'

const initialState: SubscribeState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return <button type="submit" disabled={pending} className="flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-navy bg-primary px-6 py-3 text-lg font-extrabold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70">{pending && <Loader2 className="size-5 animate-spin" aria-hidden="true" />}{pending ? 'Sending...' : 'Get the Free Prompts'}</button>
}

export function EmailSignup({ id }: { id?: string }) {
  const [state, formAction] = useActionState(subscribe, initialState)
  if (state.status === 'success') return <div className="rounded-xl border-2 border-green bg-green-soft p-4 text-lg font-bold text-navy" role="status">{state.message}</div>
  return (
    <form id={id} action={formAction} className="w-full">
      <label htmlFor={`email-${id ?? 'signup'}`} className="mb-2 block text-base font-bold text-navy">Email address</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input id={`email-${id ?? 'signup'}`} name="email" type="email" required autoComplete="email" placeholder="you@yourbusiness.com" className="min-h-12 w-full rounded-xl border-2 border-navy bg-white px-4 py-3 text-lg text-navy placeholder:text-navy/45 focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <SubmitButton />
      </div>
      {state.status === 'error' && <p className="mt-2 text-base font-semibold text-primary" role="alert">{state.message}</p>}
      <p className="mt-3 text-sm leading-relaxed text-navy/70">Free prompts, plus occasional practical AI tips for your business. Unsubscribe anytime.</p>
    </form>
  )
}
