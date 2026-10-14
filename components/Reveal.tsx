'use client';

import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  style = {},
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              el.classList.add('visible');
            }, delay * 1000);
          } else {
            el.classList.add('visible');
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        transitionDelay: `${delay * 0.5}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
