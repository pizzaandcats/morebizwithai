'use server'

export type SubscribeState = { status: 'idle' | 'success' | 'error'; message: string }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  if (formData.get('company')) return { status: 'success', message: 'Your prompts are ready.' }
  if (!EMAIL_RE.test(email)) return { status: 'error', message: 'Enter a valid email address.' }
  return { status: 'success', message: 'Your prompts are ready. Kit delivery will be connected before launch.' }
}
