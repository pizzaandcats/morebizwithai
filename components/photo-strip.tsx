import Image from 'next/image'

const photos = [
  {
    src: '/images/crew-truck.webp',
    alt: 'Landscaping crew loading equipment from the work truck',
    photoAttr: 'data-photo-1',
    borderRight: true,
  },
  {
    src: '/images/hedge-trimming.jpeg',
    alt: 'Landscaper trimming a hedge outside a home',
    photoAttr: undefined,
    borderRight: true,
  },
  {
    src: '/images/planting-shrub.webp',
    alt: 'Close-up of gloved hands planting a shrub with hand tools nearby',
    photoAttr: undefined,
    borderRight: false,
  },
]

export function PhotoStrip() {
  return (
    <section data-photo-strip="true" className="border-b-2 border-navy">
      <div data-photo-grid="true" className="mx-auto grid max-w-[1600px] grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.src}
            data-photo-1={photo.photoAttr ? 'true' : undefined}
            className={`relative box-border aspect-square min-w-0 ${
              photo.photoAttr ? 'hidden sm:block' : ''
            } ${
              photo.borderRight ? 'border-r-2 border-navy' : ''
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1600px) 33vw, 533px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export function MobileTruckPhoto() {
  return (
    <section className="relative block aspect-[3/2] w-full overflow-hidden border-b-2 border-navy sm:hidden">
      <Image
        src="/images/crew-truck.webp"
        alt="Landscaping crew loading equipment from the work truck"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
    </section>
  )
}
