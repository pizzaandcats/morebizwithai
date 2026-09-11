/**
 * Extract a YouTube video ID from the common URL shapes:
 *   https://www.youtube.com/watch?v=VIDEO_ID
 *   https://youtu.be/VIDEO_ID
 *   https://www.youtube.com/shorts/VIDEO_ID
 *   https://www.youtube.com/embed/VIDEO_ID
 * Returns null when the input is empty or not a recognizable YouTube URL.
 */
export function getYouTubeId(input: string | undefined | null): string | null {
  if (!input) return null
  const url = input.trim()
  if (!url) return null

  // Bare 11-char id
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return null
  }

  const host = parsed.hostname.replace(/^www\./, '')
  let id: string | null = null

  if (host === 'youtu.be') {
    id = parsed.pathname.split('/').filter(Boolean)[0] ?? null
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com' || host === 'm.youtube.com') {
    if (parsed.pathname === '/watch') {
      id = parsed.searchParams.get('v')
    } else {
      const parts = parsed.pathname.split('/').filter(Boolean)
      // /embed/ID, /shorts/ID, /v/ID
      if (parts.length >= 2 && ['embed', 'shorts', 'v'].includes(parts[0])) {
        id = parts[1]
      }
    }
  }

  if (id && /^[a-zA-Z0-9_-]{11}$/.test(id)) return id
  return null
}

export function getYouTubeEmbedUrl(input: string | undefined | null): string | null {
  const id = getYouTubeId(input)
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null
}
