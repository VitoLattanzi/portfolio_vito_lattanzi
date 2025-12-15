import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { TouchEvent } from 'react'

type Img = { src: string; alt: string }

type Props = {
  images: Img[]
  aspect?: string // para poner la resolucion de la imagen formato css, ej "16 / 9"
  className?: string
}

export default function MiniCarousel({ images, aspect = '16 / 9', className }: Props) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!images || images.length === 0) return null

  const clamp = (n: number) => (n + images.length) % images.length
  const goTo = (i: number) => setIndex(clamp(i))
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)
  const lightboxNext = () =>
    setLightboxIndex(curr => (curr === null ? 0 : (curr + 1) % images.length))
  const lightboxPrev = () =>
    setLightboxIndex(curr => (curr === null ? 0 : (curr - 1 + images.length) % images.length))

  useEffect(() => {
    if (lightboxIndex !== null) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [lightboxIndex])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') lightboxNext()
      if (e.key === 'ArrowLeft') lightboxPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 40) prev()
    if (dx < -40) next()
  }

  const lightbox =
    lightboxIndex !== null && typeof document !== 'undefined'
      ? createPortal(
        <div
          className="mini-carousel__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${images[lightboxIndex].alt}`}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="mini-carousel__lightbox_inner" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="mini-carousel__lightbox_close"
              aria-label="Cerrar"
              onClick={() => setLightboxIndex(null)}
            >
              ×
            </button>
            <button
              type="button"
              className="mini-carousel__lightbox_nav mini-carousel__lightbox_nav--prev"
              aria-label="Anterior"
              onClick={lightboxPrev}
            >
              ‹
            </button>
            <button
              type="button"
              className="mini-carousel__lightbox_nav mini-carousel__lightbox_nav--next"
              aria-label="Siguiente"
              onClick={lightboxNext}
            >
              ›
            </button>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="mini-carousel__lightbox_img"
            />
          </div>
        </div>,
        document.body
      )
      : null

  return (
    <div className={`mini-carousel ${className ?? ''} ${lightboxIndex !== null ? 'is-lightbox-open' : ''}`}>
      <div
        className="mini-carousel__viewport"
        style={{ aspectRatio: aspect, maxHeight: 'min(70vh, 420px)' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galeria del proyecto"
      >
        <div
          className="mini-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="mini-carousel__slide" key={img.src} aria-hidden={i !== index}>
              <button
                type="button"
                className="mini-carousel__img_btn"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Abrir ${img.alt} en grande`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="mini-carousel__img"
                />
              </button>
            </div>
          ))}
        </div>

        <button
          className="mini-carousel__btn mini-carousel__btn--prev"
          onClick={prev}
          aria-label="Anterior"
          type="button"
        >
          {'<'}
        </button>
        <button
          className="mini-carousel__btn mini-carousel__btn--next"
          onClick={next}
          aria-label="Siguiente"
          type="button"
        >
          {'>'}
        </button>
      </div>

      <div className="mini-carousel__dots" role="tablist" aria-label="Seleccionar imagen">
        {images.map((_, i) => (
          <button
            key={i}
            className={`mini-carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Ir a la imagen ${i + 1}`}
            tabIndex={i === index ? 0 : -1}
            type="button"
          />
        ))}
      </div>

      {lightbox}
    </div>
  )
}
