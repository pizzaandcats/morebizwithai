import { NextResponse } from 'next/server'

const KIT_FORM_URL = 'https://app.kit.com/forms/9917657/subscriptions'

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

  try {
    const kitResponse = await fetch(KIT_FORM_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ email_address: email }).toString(),
      redirect: 'manual',
      cache: 'no-store',
    })

    if (kitResponse.status < 200 || kitResponse.status >= 400) {
      console.error('Kit subscription failed', {
        status: kitResponse.status,
        response: await kitResponse.text(),
      })

      return NextResponse.json(
        { error: 'Something went wrong. Try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Kit subscription request failed', error)

    return NextResponse.json(
      { error: 'Something went wrong. Try again.' },
      { status: 502 },
    )
  }
}
