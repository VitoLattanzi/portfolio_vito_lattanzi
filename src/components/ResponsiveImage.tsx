import { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
}

export default function ResponsiveImage({ desktopSrc, mobileSrc, alt, className }: ResponsiveImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <img 
      src={isMobile ? mobileSrc : desktopSrc} 
      alt={alt} 
      className={className}
    />
  );
}
