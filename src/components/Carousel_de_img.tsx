
import { useRef, useState } from "react";

type Img = { src: string; alt: string };
type Props = {
  images: Img[];
  aspect?: string; // para poner la resolucion de la imgen formato css, ej "16 / 9"
  className?: string;
};

export default function MiniCarousel({ images, aspect = "16 / 9", className }: Props) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) return null;

  const clamp = (n: number) => (n + images.length) % images.length; // ciclo infinito para q no se trabe en la ultima o primera imagen  
  const goTo = (i: number) => setIndex(clamp(i)); // ir a la imagen i 
  const next = () => goTo(index + 1); // siguiente
  const prev = () => goTo(index - 1); // anterior

  // desliz simple para mobile 
  let startX = 0;
  const onTouchStart = (e: React.TouchEvent) => { startX = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx > 40) prev();
    if (dx < -40) next();
  };

  return (
    <div className={`mini-carousel ${className ?? ""}`}>
      <div
        className="mini-carousel__viewport"
        style={{ aspectRatio: aspect }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galería del proyecto"
      >
        <div
          className="mini-carousel__track"
          ref={trackRef}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="mini-carousel__slide" key={img.src} aria-hidden={i !== index}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="mini-carousel__img"
              />
            </div>
          ))}
        </div>

        <button
          className="mini-carousel__btn mini-carousel__btn--prev"
          onClick={prev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className="mini-carousel__btn mini-carousel__btn--next"
          onClick={next}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div className="mini-carousel__dots" role="tablist" aria-label="Seleccionar imagen">
        {images.map((_, i) => (
          <button
            key={i}
            className={`mini-carousel__dot ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Ir a la imagen ${i + 1}`}
            tabIndex={i === index ? 0 : -1}
          />
        ))}
      </div>
    </div>
  );
}
