import { NextResponse } from 'next/server'

// Kit (ConvertKit) "MoreBusiness.ai" newsletter form.
const KIT_FORM_ID = '9919424'
const KIT_API_BASE = 'https://api.kit.com/v4'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let email = ''

  try {
    const body = (await request.json()) as { email?: unknown }
    email = typeof body.email === 'string' ? body.email.trim() : ''
  } catch {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  const apiKey = process.env.KIT_API_KEY
  if (!apiKey) {
    // Fail loudly instead of pretending it worked. The public form-embed
    // endpoint quarantines server-side submissions (bot guard), so the
    // official v4 API + key is the only reliable path.
    console.error('[v0] KIT_API_KEY is not set — cannot subscribe to Kit')
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 })
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Kit-Api-Key': apiKey,
  }

  try {
    // 1. Upsert the subscriber (required before it can be added to a form).
    const createRes = await fetch(`${KIT_API_BASE}/subscribers`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email }),
      cache: 'no-store',
    })

    if (!createRes.ok) {
      console.error('[v0] Kit create-subscriber failed', {
        status: createRes.status,
        detail: await createRes.text(),
      })
      // 401 = bad/missing key (our config problem); everything else = upstream.
      const status = createRes.status === 401 ? 500 : 502
      return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status })
    }

    // 2. Add the subscriber to the form. For a double opt-in form this sends
    // the confirmation ("incentive") email; for single opt-in it activates them.
    const formRes = await fetch(`${KIT_API_BASE}/forms/${KIT_FORM_ID}/subscribers`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email }),
      cache: 'no-store',
    })

    if (!formRes.ok) {
      console.error('[v0] Kit add-to-form failed', {
        status: formRes.status,
        detail: await formRes.text(),
      })
      return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[v0] Kit subscription request failed', error)
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 502 })
  }
}
