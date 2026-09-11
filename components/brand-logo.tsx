type BrandLogoProps = {
  /** Font size in px for the MORE / BUSINESS wordmark. */
  size?: number
  /** Cream-on-green treatment used in the footer. */
  onDark?: boolean
}

export function BrandLogo({ size = 26, onDark = false }: BrandLogoProps) {
  const wordColor = onDark ? 'text-cream' : undefined
  return (
    <span
      className="flex items-baseline gap-[7px] font-display leading-none"
      style={{ fontSize: size }}
    >
      <span className={onDark ? wordColor : 'text-green'}>MORE</span>
      <span className={onDark ? wordColor : 'text-navy'}>BUSINESS</span>
      <span
        className={`inline-flex items-center rounded-[11px] px-[10px] tracking-[0.04em] ${
          onDark ? 'bg-cream text-green' : 'bg-navy text-cream'
        }`}
        style={{
          height: onDark ? 21 : 22,
          fontSize: onDark ? 15 : 16,
          transform: 'translateY(-2px)',
        }}
      >
        .AI
      </span>
    </span>
  )
}
