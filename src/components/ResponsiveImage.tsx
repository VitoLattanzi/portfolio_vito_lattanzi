interface ResponsiveImageProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export default function ResponsiveImage({
  desktopSrc,
  mobileSrc,
  alt,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
}: ResponsiveImageProps) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img
        src={desktopSrc}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    </picture>
  )
}
