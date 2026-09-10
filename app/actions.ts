'use server'

export type SubscribeState = {
  status: 'idle' | 'success' | 'error'
  message: string
  downloadUrl?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// In-memory store for the current server instance. Swap for a database or an
// email provider (Resend, Mailchimp, etc.) to persist leads across deploys.
const subscribers = new Set<string>()

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase()

  // Honeypot: bots fill hidden fields, humans don't.
  if (formData.get('company')) {
    return { status: 'success', message: "You're in. Check your inbox!" }
  }

  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  subscribers.add(email)

  return {
    status: 'success',
    message: "You're in! Your prompt pack is downloading now.",
    downloadUrl: '/more-business-ai-prompts.txt',
  }
}
